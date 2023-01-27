import React from "react";
import {
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Card,
  Box,
  IconButton,
} from "@mui/material";
import axios from "../axios";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import CustomCard from "./CustomCard";

function BlogCard({ blogId, isUser, title, desc, imageUrl, userName }) {
  const navigate = useNavigate();
  console.log(title, isUser);

  const handleEdit = () => {
    navigate(`/my-blogs/${blogId}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`/api/blog/${blogId}`)
      .catch((err) => console.log(err));
    const data = res.data;
    console.log(data);
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/my-blogs"));
  };

  return (
    <div>
      <CustomCard />
      {/* <Card
        sx={{
          backgroundColor: "#eee",
          borderRadius: "20px",
          border: "2px solid #666",
          width: "650px",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #888",
          ":hover": {
            boxShadow: "10px 10px 20px #888",
          },
        }}
      >
        {isUser && (
          <Box display="flex" position="relative">
            <IconButton
              onClick={handleEdit}
              sx={{
                position: "absolute",
                top: "12px",
                right: "20px",
                marginRight: "20px",
              }}
            >
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              sx={{
                position: "absolute",
                top: "12px",
                right: "0",
                marginLeft: "20px",
              }}
            >
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          //   alt="Paella dish"
        />
        <CardContent>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b> {" : "} {desc}
          </Typography>
        </CardContent>
      </Card> */}
    </div>
  );
}

export default BlogCard;
