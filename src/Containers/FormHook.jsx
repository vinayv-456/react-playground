import { useForm } from "react-hook-form";

export default function FormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log("watch name", watch("name")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Enter name</label>
        <input defaultValue="test" {...register("name")} />
      </div>
      <div>
        <label htmlFor="email">Enter email</label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <input type="submit" />
    </form>
  );
}
