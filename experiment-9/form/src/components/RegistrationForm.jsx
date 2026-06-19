import { useState, useEffect } from "react";

function RegistrationForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);

  // Fetch API Data
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 5)));

  }, []);

  const validate = () => {

    let error = {};

    if (name.trim() === "") {
      error.name = "Name is required";
    }

    if (!email.includes("@")) {
      error.email = "Enter valid email";
    }

    if (password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    return error;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);
      setSuccess("");

    } else {

      setErrors({});
      setSuccess("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");

    }

  };

  return (

    <div className="container">

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p className="error">{errors.name}</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="error">{errors.email}</p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="error">{errors.password}</p>

        <button type="submit">
          Register
        </button>

      </form>

      <h3 className="success">
        {success}
      </h3>

      <hr />

      <h2>API Data</h2>

      {
        users.map((user) => (

          <div key={user.id}>

            {user.name}

          </div>

        ))
      }

    </div>

  );

}

export default RegistrationForm;