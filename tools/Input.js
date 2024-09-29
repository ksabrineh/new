"use client";
import { RemoveRedEye } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Input = ({
  lable = "",
  className,
  icon,
  dir = "rtl",
  infoIcon,
  type = "text",
  name = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <TextField
        id="outlined-basic"
        variant="outlined"
        autoComplete="off"
        name={name}
        dir={dir}
        type={showPassword && type === "password" ? "text" : type}
        label={lable}
        className={`text-black focus:!border-none ${className && className}`}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {type === "password" ? (
                <div onClick={()=>setShowPassword(!showPassword)}>
                  <RemoveRedEye fontSize="small" />
                </div>
              ) : (
                infoIcon
              )}
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">{icon && icon}</InputAdornment>
          ),
        }}
        sx={{
          "& .MuiInputBase-root": {
            height: 35,
            borderRadius: "5px",
            margin: "0px",
          },
          "& .MuiOutlinedInput-root": {
            paddingRight: "2px",
          },
          "& .MuiOutlinedInput-root": {
            "& input": {
              paddingLeft: "0px",
              paddingRight: "10px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "gray",
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default Input;
