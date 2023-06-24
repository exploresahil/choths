"use client";
import {
  CreateUserWithEmail,
  GetUser,
  LoginWithEmail,
  LoginWithGoogle,
  LoginWithPhone,
} from "@/backend/auth";
import PasswordHided from "@/components/icons/PasswordHided";
import PasswordRight from "@/components/icons/PasswordRight";
import PasswordShow from "@/components/icons/PasswordShow";
import UserProfile from "@/components/icons/UserProfile";
import React from "react";
const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};
const isValidPhone = (phone: string) => {
  return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
};
const isValidPassword = (password: string) => {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
    password
  );
};
const Login = () => {
  const [fdata, setFdata] = React.useState<{
    email_phone: string;
    password: string;
    otp: string;
  }>({
    email_phone: "",
    password: "",
    otp: "",
  });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  return <></>;
};

export default Login;
