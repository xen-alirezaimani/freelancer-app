import TextField from "./../../ui/TextField";
import { useForm } from "react-hook-form";

export default function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-50 flex flex-col gap-y-8">
      <div className="h-10 relative">
        <TextField
          label="نام پروژه"
          name="projectTitle"
          register={register}
          required
          errors={errors}
          validationSets={{
            required: "عنوان ضروری است",
            minLength: { value: 10, message: "حداقل 10 کراکتر وارد کنید" },
            maxLength: { value: 50, message: "طول عنوان نامعتبر است" },
          }}
        />
      </div>

      <div>
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </div>
    </form>
  );
}
