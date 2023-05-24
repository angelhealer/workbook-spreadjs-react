import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import "./login.css";

interface registerUser {
  gmail: string;
  password: string;
  rePassword: string;
}

export default function Register() {

  const [user, setUser] = useState<registerUser>({
    gmail: "",
    password: "",
    rePassword: "",
  });

  return (
    <div className="login-form">
      <div className="form-title">
        <Typography variant="h4" gutterBottom>
          Sign up to your account
        </Typography>
      </div>
      <div className="form-group">
        <div>
          <TextField
            label="Email address"
            variant="outlined"
            size="small"
            onChange={e => setUser({...user, gmail: e.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            style={{
              width: 400,
            }}
          />
        </div>
        <div>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            onChange={e => setUser({...user, password: e.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyRoundedIcon />
                </InputAdornment>
              ),
            }}
            style={{
              width: 400,
            }}
          />
        </div>
        <div>
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            size="small"
            onChange={e => setUser({...user, rePassword: e.target.value})}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyRoundedIcon />
                </InputAdornment>
              ),
            }}
            style={{
              width: 400,
            }}
          />
        </div>
      </div>
      <div className="btn-group">
        <Button
          variant="contained"
          size="small"
          style={{
            width: 400,
          }}
        >
          Register
        </Button>
      </div>
      <div>
        <p>
          Alrady have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#FF4C4A", textDecoration: "none" }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
