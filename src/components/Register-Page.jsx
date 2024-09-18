import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
const RegisterPage = () => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(register);
  };

  return (
    <Box sx={{ mt: 4, maxWidth: 400, ml: 50 }}>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ boxShadow: "0 2px 15px rgba(0,0,0.2)",padding:"20px" }}
      >
        <Typography variant="h4" align="center">Register</Typography>
        <TextField 
          sx={{ width: "100" }}
          label="First Name"
          name="firstName"
          variant="standard"
          value={register.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="standard"
          value={register.lastName}
          onChange={handleChange}
        />
        <Box>
          <TextField
            label="Email"
            name="email"
            type="email"
            sx={{ width: "100" }}
            variant="standard"
            value={register.email}
            onChange={handleChange}
          />
        </Box>
        <TextField
          label="Password"
          type="password"
          sx={{ width: "100" }}

          name="password"
          variant="standard"
          value={register.password}
          onChange={handleChange}
        />
        <div>
          <Button type="submit" fullWidth sx={{mt:2}} variant="contained">Submit</Button>
        </div>
        <Typography variant="body2" sx={{mt:2, textAlign:"center"}}>
          Already have an account? <a href="/login">Login</a>
        </Typography>
      </form>
    </Box>
  );
};

export default RegisterPage;
