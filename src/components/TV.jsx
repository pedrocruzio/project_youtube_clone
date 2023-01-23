import React, { useEffect, useState } from "react";
import { Box, CardHeader, Stack } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useDacast } from '../utils/useDacast';
import { Videos, Sidebar } from "./";
import Iframe from 'react-iframe'

import placeholder from '../assets/placeholder-mtv.png';


// you can change the contentId with yours;
const CONTENT_ID = '8154306f-14b9-7b71-e534-d1656113f2f0-vod-d1484505-d9eb-634e-9d0f-d991007b4888'


const TV = () => {

    const loadPlayer = () => {
      window["dacast"](CONTENT_ID, 'dacastVideo', {
        width: 500,
        player: 'flow'
      });
    }
  
    useDacast({
      contentId: CONTENT_ID,
      onLoad: loadPlayer
    });

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, alignItems: "center", }}>

      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white", textAlign: "center" }}>
          Coming Soon
        </Typography>
      <Card sx={{ maxWidth: 345, textAlign: "center", margin: "0 auto" }}>
        <CardMedia
          component="img"
          image={placeholder}
          alt="tv placeholder"
          sx={{textAlign: "center"}}
        />
    </Card>


    {/* <img src={placeholder} alt="" /> */}
      {/* <div id="dacastVideo"></div> */}

        {/* <Iframe url="https://iframe.dacast.com/live/8154306f-14b9-7b71-e534-d1656113f2f0/a95af759-b964-6005-b925-3c7f0d7ef9a7"
                width="90%"
                height="auto"
                id="a95af759-b964-6005-b925-3c7f0d7ef9a7"
                className=""
                display="block"
                position="relative"
        /> */}
      </Box>
    </Stack>
  );
};

export default TV;
