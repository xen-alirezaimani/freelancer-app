import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

export default function Auth() {
  return (
    <div className="h-full flex items-center">
      <div className="w-full p-10 mx-auto rounded-2xl border border-primary-200 shadow-primary-300 shadow-lg max-w-90 sm:max-w-lg">
        {/* <SendOTPForm /> */}
        <CheckOTPForm />
      </div>
    </div>
  );
}

// 1. send OTP
// 2. check OTP
