import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import Iframe from 'react-iframe'


const Radio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Noticias");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${'Molusco '+selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

      </Box> */}

      <Box p={2} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
      <Iframe url="https://moluscoradio.netlify.app/"
                width="360px"
                height="500px"
                id=""
                className=""
                display="block"
                position="relative"
        />
      </Box>
    </Stack>
  );
};

export default Radio;
