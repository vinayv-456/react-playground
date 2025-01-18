import { useState } from "react";

const CustomForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form Data:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default CustomForm;
