import React from 'react';
import { Card, Box, CardContent, Avatar, Divider, Typography, TextField, InputLabel, InputBase, FormControl, Icon } from "@mui/material";
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
  return (
    <Box
    component="form"
    sx={{
    padding: 8,
    }}
    noValidate
    autoComplete="off"
    >
        <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar src="https://i.ibb.co/tmYGV6t/Screen-Shot-2022-12-15-at-8-59-01-AM.png" sx={{ width: 180, height: 180, mb: 4,}}/>

        </Box>
        {/* <Typography variant="h4" fontWeight="bold" color="#FFF">
        Jorge Pabón
        </Typography> */}

        <FormControl variant="standard" fullWidth>
            <ProfileTextField
                label="Nombre"
                defaultValue="Jorge Pabón"
                id="nombre"
                variant="filled"
                style={{ marginTop: 11 }}
            />
            <ProfileTextField
                label="Email"
                defaultValue="jorge@molusco.com"
                id="email"
                variant="filled"
                style={{ marginTop: 11 }}
            />
            <ProfileTextField
                label="Nombre"
                defaultValue="Jorge Pabón"
                id="nombre"
                variant="filled"
                style={{ marginTop: 11 }}
            />
        </FormControl>
    </Box>
  );
};

export default Profile