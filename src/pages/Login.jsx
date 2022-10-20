import React, { useState } from "react";
import loginImage from "../assets/images/LoginImage.png";
import webLogo from "../assets/icons/web-logo.png";
import Arrow from "../assets/icons/arrow.png";
import wavyUnderline from '../assets/icons/landingpage__wavy-underline.svg';
import PrimaryButton from "../components/atoms/PrimaryButton";
import SecondaryButton from "../components/atoms/SecondaryButton";
import Facebook from "../assets/icons/logos_facebook.png";
import Google from "../assets/icons/icons_google.png";
import iPadLogo from "../assets/icons/iPad-logo.png";
import Frame from "../assets/icons/Frame 1.png";
import MobileLogo from "../assets/icons/mobile-logo.png";
import HidePassword from "../assets/icons/Hide.png";
import ShowPassword from "../assets/icons/show-password.png";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredPasswordIsValid = PASSWORD_REGEX.test(enteredPassword);

  const emailValid = enteredEmailIsValid && enteredEmailTouched;
  const emailInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordValid = enteredPasswordIsValid && enteredPasswordTouched;
  const passwordInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailChangeBlur = () => {
    setEnteredEmailTouched(true);
  };

  const passwordChangeBlur = () => {
    setEnteredPasswordTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }

    setEnteredEmail("");
    setEnteredPassword("");

    setEnteredEmailTouched(false);
    setEnteredPasswordTouched(false);
  };

  return (
    <div className="font-campton h-screen p-8">
      <section classList="">
        <a
        href="/"
        className="font-cabinetGrotesk text-primary-500 font-bold text-2xl"
      >
        tech
          <span className="text-secondary-500">mart</span>
        </a>
        <img className="hidden md:flex w-full" src={loginImage} alt="" />
        <p className="hidden md:flex">Verify your email address to stay protected and get the best deals.</p>
      </section>
      <section>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center font-semibold font-cabinetGrotesk">Log In</h1>
          <img className="w-min" src={wavyUnderline} alt="" />
        </div>
        <p className="my-6 text-neutral-900">Nice to see you again! Log in with details you entered during registration.</p>
        <form onSubmit={formSubmissionHandler}>
          <div className="flex flex-col my-3">
            <label htmlFor="email">Email</label>
            <input className="border border-neutral-600 rounded-xl p-3" type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailChangeBlur} />
            {emailInvalid && <p className="text-red-500">Please enter a valid email address</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="flex items-center relative">
              <input className="border border-neutral-600 rounded-xl p-3 w-full" type={passwordType} id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordChangeBlur} />
              <img className="absolute right-4" src={passwordType == "password" ? HidePassword : ShowPassword} alt="" onClick={togglePasswordType} />
            </div>
            {passwordInvalid && <p className="text-red-500 my-1">Password must be 8-24 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>}
          </div>
          <div className="flex justify-between my-3">
            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label className="ml-1" htmlFor="remember">Remember me</label>
            </div>
            <a href="/" className="text-primary-500">Forgot password?</a>
          </div>
          <PrimaryButton type="submit" disabled={!formIsValid}>Login</PrimaryButton>
        </form> 
        <div>
          
        </div>
      </section>
    </div>
    
  );
};

export default Login;
