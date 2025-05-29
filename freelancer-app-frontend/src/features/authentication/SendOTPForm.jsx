import { useState } from "react";
import TextField from "../../ui/TextField";

export default function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSendOtp} className="space-y-8">
        <div className="relative h-10">
          <TextField name="phoneNumber" label="شماره موبایل" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <button type="submit" className="btn btn--primary">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}
