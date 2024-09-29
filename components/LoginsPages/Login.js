"use client";
import Input from "@/tools/Input";
import Image from "next/image";
import React, { useState } from "react";
import loginImage from "@/public/images/Waveflow-Welcome-Still_LSM-HD.jpg";
import loginImagePhone from "@/public/images/computer-account-login-password_165488-4519_prev_ui.png";

import {
  AccountBox,
  LoginSharp,
  Mail,
  Person,
  VpnKey,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
const Login = () => {
  const [value, setValue] = useState("login");
  return (
    <div
      className={`flex rounded-2xl container ${
        value === "signup" ? "md:!flex-row-reverse flex-col-reverse" : "md:!flex-row flex-col-reverse"
      } w-full justify-center h-full`}
    >
      <div className={`md:!w-[30%] w-full ${
          value === "signup" ? "md:!rounded-l-2xl rounded-2xl md:!rounded-r-none" : " md:!rounded-r-2xl md:!rounded-l-none rounded-2xl"
        } bg-white flex md:!overflow-hidden justify-center`}>
        <div className="flex w-full flex-col items-center h-full pt-10 pb-10 pr-5 pl-5 justify-between">
          <div className="w-[100%] flex flex-col gap-6 items-center">
            <div className="w-full text-lg pb-4 flex justify-start font-bold">
              {value === "login" ? "ورود" : "ثبت نام"}
            </div>
            <Input
              lable="نام و نام خانوادگی"
              className="!w-full"
              name="name"
              type="text"
              icon={<Person fontSize="small" />}
            />
            <Input
              lable="ایمیل"
              className="!w-full"
              name="email"
              type="mail"
              dir="ltr"
              icon={<Mail fontSize="small" />}
            />
            <Input
              lable="نام کاربری"
              className="!w-full"
              name="userName"
              type="text"
              dir="ltr"
              icon={<AccountBox fontSize="small" />}
            />
            <Input
              lable="رمز عبور"
              className="!w-full"
              name="password"
              type="password"
              dir="ltr"
              icon={<VpnKey fontSize="small" />}
            />
            <Button variant="contained" className="!w-full !mt-10">
              {value === "login" ? "ورود" : "ثبت"}
            </Button>
          </div>
          <div className="w-full pt-5 text-xs opacity-100 items-center justify-center flex">
            <Divider className="!w-[15%]" />
            <p className="w-fit opacity-50 pr-2">
              آیا قبلا ثبت نام کرده اید؟
            </p>
            <p
              onClick={
                value === "login"
                  ? () => setValue("signup")
                  : () => setValue("login")
              }
              className="w-fit font-bold !text-blue-600 !opacity-100 cursor-pointer pr-1 pl-1"
            >
              {value === "login" ? "ثبت نام" : "ورود"}
            </p>
            <Divider className="!w-[15%]" />
          </div>
        </div>
      </div>
      <div
        className={`md:!w-[70%] w-full h-full relative md:!justify-normal justify-center flex md:!overflow-hidden ${
          value === "signup" ? "md:!rounded-r-2xl" : "md:!rounded-l-2xl"
        }`}
      >
        <Image
          alt="loginPhoto"
          width={1200}
          height={980}
          className="object-cover h-full hidden md:!block absolute rounded-t-2xl md:!rounded-none brightness-75 w-full"
          src={loginImage}
        />
         <Image
          alt="loginPhoto"
          width={1200}
          height={980}
          className="object-cover md:!hidden h-full block absolute rounded-t-2xl md:!rounded-none w-full"
          src={loginImagePhone}
        />
        <Button
          variant="outlined"
          className="!w-28 absolute gap-2 h-10 animate-pulse top-[62%] !text-white md:!right-48 cursor-pointer shadow-sm shadow-white rounded-md md:!flex !hidden items-center justify-center p-2"
          onClick={
            value === "signup"
              ? () => setValue("login")
              : () => setValue("signup")
          }
        >
          {value === "signup" ? "ورود" : "ثبت نام"}
          {value === "login" ? <Person /> : <LoginSharp />}
        </Button>
      </div>
    </div>
  );
};

export default Login;
