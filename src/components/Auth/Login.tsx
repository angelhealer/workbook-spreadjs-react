import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import axios from "axios";

import "./login.css";

interface User {
  gmail: string;
  password: string;
}

export default function Login() {
  const [state, setState] = useState<User>({ gmail: "", password: "" });

  const handleLogin = (gmail: string, password: string) => {
    axios.post('/api/user/')
  }

  return (
    <div>
      <div className="login-form">
        <div className="form-title">
          <Typography variant="h4" gutterBottom>
            Login to your account
          </Typography>
        </div>
        <div className="form-group">
          <div>
            <TextField
              label="Email address"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setState({ ...state, gmail: e.target.value });
              }}
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
              onChange={(e) => setState({ ...state, password: e.target.value })}
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
            // onClick={handleLogin}
            style={{
              width: 400,
            }}
          >
            Login
          </Button>
        </div>
        <div>
          <p>
            Don't have account?{" "}
            <Link
              to="/register"
              style={{ color: "#FF4C4A", textDecoration: "none" }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
