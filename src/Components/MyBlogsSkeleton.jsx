import React from "react";
import "../CSS/MyBlogs.css";
import { Stack } from "@mui/system";
import { Skeleton } from "@mui/material";

function MyBlogsSkeleton(props) {
  const mode = localStorage.getItem("thememode");
  const skeletonBackground = {
    backgroundColor: mode == "dark" ? "#444" : "",
  };
  return (
    <div className="my-blogs-content">
      <Stack spacing={1}>
        <Skeleton
          variant="rectangular"
          width={350}
          height={200}
          style={skeletonBackground}
        />
        <Skeleton
          variant="text"
          width={250}
          height={10}
          style={skeletonBackground}
        />
        <Skeleton
          variant="text"
          width={250}
          height={10}
          style={skeletonBackground}
        />
      </Stack>
      <Stack spacing={1}>
        <Skeleton
          variant="rectangular"
          width={350}
          height={200}
          style={skeletonBackground}
        />
        <Skeleton
          variant="text"
          width={250}
          height={10}
          style={skeletonBackground}
        />
        <Skeleton
          variant="text"
          width={250}
          height={10}
          style={skeletonBackground}
        />
      </Stack>
      <Stack spacing={1}>
        <Skeleton
          variant="rectangular"
          width={350}
          height={200}
          style={skeletonBackground}
        />
        <Skeleton
          variant="text"
          width={250}
          height={10}
          style={skeletonBackground}
        />
        <Skeleton
          variant="text"
          width={250}
          height={10}
          style={skeletonBackground}
        />
      </Stack>
    </div>
  );
}

export default MyBlogsSkeleton;
