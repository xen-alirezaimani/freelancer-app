import { useState } from "react";
import OTPInput from "react-otp-input";

export default function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <div>
      <form className="space-y-10">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-between"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            outline: "none",
            border: "1px solid #4a6dff",
            borderRadius: "10px",
          }}
        />
        <button className="btn btn--primary">تایید</button>
      </form>
    </div>
  );
}
