import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoTitle, } from "../utils/constants";

const PostCard = ({ post }) => (
  <Link to={post.url} key={post.id}>
    <Card sx={{ width: { xs: '90vw', sm: '200px', md: "250px", lg: '300px' }, boxShadow: "none", borderRadius: 0 }}>
      <CardMedia image={post.image || demoThumbnailUrl} alt={post.id} 
        sx={{ width: { xs: '90vw', sm: '200px', md: '250px', lg: '300px'}, height: { xs:'90vw', sm: '200px', md: '250px', lg: '300px'} }} 
      />
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
          <Typography variant="caption" color="#9E9E9E">
              {post.likes || 0 } likes
          </Typography>
          <br />
          <Typography variant="caption" color="#FFF">
              {post.text.slice(0, 200)+'...' || '...'}
          </Typography>
      </CardContent>
  </Card>
  </Link>
);

export default PostCard