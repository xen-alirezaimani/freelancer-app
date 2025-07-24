import { useState } from "react";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "./../../ui/TextField";
import { useForm } from "react-hook-form";
import TagInput from "../../ui/TagInput";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

export default function CreateProjectForm({ projectToEdit = {}, onclose }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const { title, description, tags: prevTags, category, budget, deadline } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = { title, description, tags: prevTags, category: category._id, budget, deadline };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories, isLoading } = useCategories();
  const { isEditing, editProject } = useEditProject();
  const { createProject, isCreating } = useCreateProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const onSubmit = (data) => {
    const newProject = { ...data, deadline: new Date(date).toISOString(), tags };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onclose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onclose();
          reset();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
      <div className="h-10 relative">
        <TextField
          label="نام پروژه"
          name="title"
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
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}
