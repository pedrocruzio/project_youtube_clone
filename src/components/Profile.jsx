import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.module.css";
import { auth, db, logout } from "../utils/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Person } from "@mui/icons-material";

import { Card, Box, Button, CardContent, Avatar, Divider, Typography, TextField, InputLabel, InputBase, FormControl, Icon } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';


const ProfileTextField = styled((props) => (
    <TextField
      InputProps={{ disableUnderline: true }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '1px solid #333333',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'transparent',
      color: '#fff',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      '&.MuiInputLabel-root': {
        color: '#fff'
      },
    },
  }));


export const Profile = () => {
  // if (!user) navigate("/signin");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data...");
    }
  };

  const logoutSession = async () => {
    try {
      logout()

      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
 
  useEffect(() => {
    console.log(user.email)

    if (loading) return;
    if (!user) navigate("/signin");



    fetchUserName();
  }, [user, loading]);

  return (
    <Box>
      <Box
      component="form"
      sx={{
      padding: 8,
      }}
      noValidate
      autoComplete="off"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar sx={{ width: 180, height: 180, mb: 4, bgcolor: "#000"}}>
            <Person sx={{fontSize: 150}}></Person>
          </Avatar>
        </Box>
        {/* <Typography sx={{color: 'white'}}>Change Picture</Typography> */}

        {/* <Typography variant="h4" fontWeight="bold" color="#FFF">
        Jorge Pabón
        </Typography> */}

        <FormControl variant="standard" fullWidth>
            <ProfileTextField
                label="Nombre"
                defaultValue="Jorge Pabón"
                value={name}
                id="nombre"
                variant="filled"
                style={{ marginTop: 11 }}
            />
            <ProfileTextField
                label="Email"
                defaultValue="user@moluscotv.com"
                value={user.email}
                id="email"
                variant="filled"
                style={{ marginTop: 11 }}
            />
        </FormControl>
        <Button
          onClick={logoutSession}
          fullWidth
          color="error"
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
        >
          Logout
        </Button>
    </Box>
    </Box>
  );
};

export default Profile