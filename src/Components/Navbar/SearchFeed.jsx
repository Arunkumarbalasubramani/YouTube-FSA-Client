import React from "react";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";

import { useParams } from "react-router-dom";

import VideoCard from "../MainFeed/VideoCard";
import TodayVideoCard from "../History/TodayVideoCard";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const isSearchResult = true;

  return (
    <div>
      1{" "}
      <Box className="feed-videos">
        <Typography className="feed-title" variant="h4" sx={{ mb: "20px" }}>
          Search results for
          <span className="feed-title-text"> {searchTerm}</span> Videos
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="start">
          {/* {videos.map((item, index) => ( */}

          <Box className="search-video-results">
            <TodayVideoCard isSearchResult={isSearchResult} />
            <TodayVideoCard isSearchResult={isSearchResult} />
            <TodayVideoCard isSearchResult={isSearchResult} />
            <TodayVideoCard isSearchResult={isSearchResult} />
            <TodayVideoCard isSearchResult={isSearchResult} />
          </Box>

          {/* ))} */}
        </Stack>
      </Box>
    </div>
  );
};

export default SearchFeed;
