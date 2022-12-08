import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import Iframe from 'react-iframe'


const TV = () => {
  const [selectedCategory, setSelectedCategory] = useState("Noticias");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${'Molusco '+selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Iframe url="https://iframe.dacast.com/vod/8154306f-14b9-7b71-e534-d1656113f2f0/e2870ea0-1b66-d030-aad8-909dddee729e"
                width="90%"
                height="auto"
                id="e2870ea0-1b66-d030-aad8-909dddee729e"
                className=""
                display="block"
                position="relative"
        />
        < br/>
        < br/>
        <Iframe url="https://iframe.dacast.com/live/8154306f-14b9-7b71-e534-d1656113f2f0/a95af759-b964-6005-b925-3c7f0d7ef9a7"
                width="90%"
                height="auto"
                id="a95af759-b964-6005-b925-3c7f0d7ef9a7"
                className=""
                display="block"
                position="relative"
        />
      </Box>
    </Stack>
  );
};

export default TV;
