import useCustomForm from "../hooks/useFrom";

const CustomForm = () => {
  const { register, onSubmit } = useCustomForm();
  const handleSubmission = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <form onSubmit={onSubmit(handleSubmission)}>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" {...register("name")} required />
        </div>
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input type="email" {...register("email")} id="email" required />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default CustomForm;
