import { useState } from "react";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "./../../ui/TextField";
import { useForm } from "react-hook-form";
import TagInput from "../../ui/TagInput";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

export default function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories, isLoading } = useCategories();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
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

      <div className="h-10 relative">
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          errors={errors}
          validationSets={{
            required: "توضیحات ضروری است",
            minLength: { value: 10, message: "حداقل 10 کراکتر وارد کنید" },
          }}
        />
      </div>

      <div className="h-10 relative">
        <TextField
          label="بودجه"
          name="budget"
          type="number"
          register={register}
          required
          errors={errors}
          validationSets={{
            required: "بودجه ضروری است",
            minLength: { value: 0, message: "حداقل 5 کراکتر وارد کنید" },
          }}
        />
      </div>

      <div>
        <RHFSelect name="category" label="دسته بندی" register={register} errors={errors} required options={categories} />
      </div>

      <TagInput tags={tags} setTags={setTags} />

      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      <div>
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </div>
    </form>
  );
}
