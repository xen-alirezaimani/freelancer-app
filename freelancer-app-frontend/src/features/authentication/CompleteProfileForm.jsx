import { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "./../../ui/Loading";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "./../../services/authService";

export default function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      if (user.status !== 2) {
        navigate("/");
        toast.success(message, "در انتظار تایید ادمین");
      }
      if (user.role !== "OWNER") return navigate("/owner");
      if (user.status !== "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="py-20 h-full mx-auto w-80 max-w-sm md:w-100 md:max-w-2xl">
      <h1 className="text-center font-bold text-base md:text-xl mb-8">تکمیل پروفایل</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-8">
        <div className="h-10 relative">
          <TextField label="نام کامل " name="fullName" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="h-10 relative">
          <TextField label="ایمیل" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="flex items-center justify-center gap-x-5 select-none">
          <RadioInput
            label="کارفرما"
            name="role"
            id="OWNER"
            value="OWNER"
            onChange={(e) => setRole(e.target.value)}
            checked={role == "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            name="role"
            id="FREELANCER"
            value="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            checked={role == "FREELANCER"}
          />
        </div>

        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
