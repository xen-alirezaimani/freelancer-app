import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const { isPending: isSendingOtp, data: otpResponse, mutateAsync } = useMutation({ mutationFn: getOtp });
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const handleSendOtp = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleResendOtp = async () => {
    const phoneNumber = getValues("phoneNumber");
    try {
      const { message } = await mutateAsync({ phoneNumber });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm onSubmit={handleSubmit(handleSendOtp)} isSendingOtp={isSendingOtp} register={register} setStep={setStep} />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onReSendOtp={handleResendOtp}
            otpResponse={otpResponse}
            onBack={() => setStep((s) => s - 1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-[calc(100vw-2rem)] md:max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 rounded-2xl border border-primary-200 shadow-primary-300 shadow-lg">
      {renderStep()}
    </div>
  );
}
