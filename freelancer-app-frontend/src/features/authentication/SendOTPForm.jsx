import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

export default function SendOTPForm({ onSubmit, isSendingOtp, phoneNumber, onChange }) {
  const navigate = useNavigate();

  return (
    <div className="h-70">
      <form onSubmit={onSubmit} className="h-full flex flex-col justify-between gap-8">
        <button onClick={() => navigate("/")} className="w-fit h-fit cursor-pointer text-secondary-500">
          صفحه اصلی
        </button>
        <p className="font-bold text-secondary-800">شماره خود را وارد کنید</p>
        <div className="relative h-10">
          <TextField name="phoneNumber" label="شماره موبایل" value={phoneNumber} onChange={onChange} />
        </div>
        <>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary">
              ارسال کد تایید
            </button>
          )}
        </>
      </form>
    </div>
  );
}
