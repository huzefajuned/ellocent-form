import React, { useState } from "react";
import "../components/UserForm.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const onHandleSubmit = () => {
    const regexForName = /^[A-Za-z ]{3,15}$/;

    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexForPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    if (!name || !email || !mobile || !gender || !password) {
      toast.error("All Fields are Required");
    } else if (!regexForName.test(name)) {
      toast.error(
        "Name should  not Contains any Number or Special  Chars,  Min length 3 and Max 15 Acceptable "
      );
    } else if (!regexForEmail.test(email)) {
      toast.error(" Invalid Email Input");
    } else if (!regexForPassword.test(password)) {
      toast.error(
        " Password must Contains  Uppercase, Lowercase, Digit,Special character, and Min eight"
      );
    } else if (password !== cPassword) {
      toast.error("Password Doesn't Matched");
    } else {
      toast.success("validate and saved to console, Named: user Object");
      console.log({
        user: { name, email, mobile, gender, password, cPassword },
      });
      setName("");
      setEmail("");
      setMobile("");
      setGender("");
      setPassword("");
      setCPassword("");
    }
  };

  return (
    <div className="main">
      <h2 id="heading">ReactJs Form</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="contact">
          <PhoneInput
            placeholder="Enter phone number"
            value={mobile}
            onChange={setMobile}
          />
        </div>

        <div className="selectGender">
          <input
            id="radioBtn"
            type="radio"
            value="Male"
            name="gender"
            placeholder="Male"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            id="radioBtn"
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <button id="submitBtn" onClick={() => onHandleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
