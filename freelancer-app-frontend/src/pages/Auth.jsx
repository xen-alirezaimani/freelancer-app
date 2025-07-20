import AuthContainer from "../features/authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="h-screen w-full">
      <AuthContainer />
    </div>
  );
}

// 1. send OTP
// 2. check OTP
