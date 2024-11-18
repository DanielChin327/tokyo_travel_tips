import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    user_name: "",
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(
        name === "password"
          ? value === formData.confirmPassword
          : value === formData.password
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/user/register", formData);
      if (response.status === 201) {
        setRegistrationSuccess(true);
        setErrorMessage("");

        setFormData({
          user_name: "",
          full_name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          const errorMsg = error.response.data.error;
          if (errorMsg.includes("Username")) {
            setUsernameTaken(true);
            setErrorMessage("Username already taken.");
          } else if (errorMsg.includes("Email")) {
            setEmailTaken(true);
            setErrorMessage("Email already registered.");
          }
        } else {
          setErrorMessage("Error occurred during registration.");
        }
      } else {
        setErrorMessage("Error occurred. Try again later.");
      }
    }
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div>
          <input
            type="text"
            name="user_name"
            placeholder="Username"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          {usernameTaken && <p className="error">Username is already taken!</p>}
        </div>

        <div>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailTaken && <p className="error">Email is already registered!</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {!passwordMatch && <p className="error">Passwords do not match!</p>}
        </div>

        <button type="submit">Register</button>

        {errorMessage && <p className="error">{errorMessage}</p>}
        {registrationSuccess && (
          <p className="success">Registration successful! Redirecting...</p>
        )}
      </form>
    </div>
  );
}

export default Register;
