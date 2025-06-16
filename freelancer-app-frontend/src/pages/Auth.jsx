import AuthContainer from "../features/authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="h-full w-full flex items-center">
      <AuthContainer />
    </div>
  );
}

// 1. send OTP
// 2. check OTP
