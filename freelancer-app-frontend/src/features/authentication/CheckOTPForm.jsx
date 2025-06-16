import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

export default function CheckOTPForm({ phoneNumber, onReSendOtp, otpResponse, onBack }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) return navigate("/");
      if (user.role == "OWNER") return navigate("owner");
      if (user.role == "FREELANCER") return navigate("freelancer");
      if (user.role == "ADMIN") return navigate("admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleResendOtp = () => {
    onReSendOtp?.();
    setTime(RESEND_TIME);
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="h-70">
      <form onSubmit={handleCheckOtp} className="h-full flex flex-col justify-between">
        <div className="select-none text-xs md:text-sm xl:text-base space-y-2">
          <p>
            کد تایید به شماره <span className="mx-1 select-all underline">{otpResponse?.phoneNumber}</span> ارسال گردید
          </p>
          <p>
            شماره موبایل اشتباه است؟
            <button onClick={onBack} className="mx-1 cursor-pointer text-primary-900">
              ویرایش شماره
            </button>
          </p>
        </div>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-between"
          inputStyle={{
            width: "2rem",
            height: "2.5rem",
            padding: "0.5rem 0.2rem",
            outline: "none",
            border: "1px solid #4a6dff",
            borderRadius: "10px",
          }}
        />

        <div className="text-center text-xs md:text-sm xl:text-base">
          <span className="flex">
            {time > 0 ? (
              <span> {time} ثانیه تا ارسال مجدد </span>
            ) : (
              <span className="flex gap-2">
                <p>کد را دریافت نکردید؟</p>
                <button onClick={handleResendOtp} className="cursor-pointer text-primary-900">
                  ارسال مجدد
                </button>
              </span>
            )}
          </span>
        </div>

        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
