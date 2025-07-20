import toast from "react-hot-toast";
import Loading from "./../../ui/Loading";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "./../../services/authService";
import { useForm } from "react-hook-form";

export default function CompleteProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      if (user.status !== 2) {
        navigate("/");
        toast.success(message, "در انتظار تایید ادمین");
      }
      toast.success(message);
      if (user.role == "OWNER") return navigate("/owner");
      if (user.role == "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="py-20 h-full mx-auto w-80 max-w-sm md:w-100 md:max-w-2xl">
      <h1 className="text-center font-bold text-base md:text-xl mb-8">تکمیل پروفایل</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-8">
        <div className="h-10 relative">
          <TextField
            label="نام کامل"
            name="name"
            register={register}
            required
            errors={errors}
            validationSets={{
              required: "وارد کردن نام کاربری الزامی است",
              minLength: { value: 3, message: "حداقل 3 کراکتر وارد کنید" },
              maxLength: { value: 30, message: "طول عنوان نامعتبر است" },
            }}
          />
        </div>
        <div className="h-10 relative">
          <TextField
            label="ایمیل"
            name="email"
            type="email"
            register={register}
            required
            errors={errors}
            validationSets={{
              required: "وارد کردن ایمیل الزامی است",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
        </div>

        <div className="flex items-center justify-center gap-x-5 select-none">
          <RadioInput label="کارفرما" name="role" id="OWNER" value="OWNER" register={register} watch={watch} />
          <RadioInput label="فریلنسر" name="role" id="FREELANCER" value="FREELANCER" register={register} watch={watch} />
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
