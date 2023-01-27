import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, } from "@mui/material";

import { fetchPosts } from "../utils/fetchPosts";
import { Sidebar, Loader, PostCard } from "./";

const NewsFeed = () => {
  
  // const [selectedCategory, setSelectedCategory] = useState("Noticias");
  const [posts, setPosts] = useState(null);

  useEffect(() => {  
    fetchPosts()
      .then(console.log('fetching posts...'))
      .then((res) => {
        setPosts(res.posts)
        console.log('...posts loaded')
        console.log(res.posts)
        console.log(posts[0].id)
      })
  }, []);


  if(!posts?.length) return <Loader />;


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 Molusco
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Noticias
        </Typography>
        <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
          {posts.map((post) => (
            <PostCard post={post}/>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default NewsFeed;