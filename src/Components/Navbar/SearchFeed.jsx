import React from "react";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import thumbnail from "../../assets/demoThumbnail.PNG";
import { searchVideos } from "../actions";
import { Nav } from "react-bootstrap";
import moment from "moment";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [loading, setLoading] = useState(true);
  const [searchFeedVideos, setSearchFeedVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const searchVideosdata = await searchVideos(searchTerm);
        setSearchFeedVideos(searchVideosdata.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    get_video_details();
  }, [searchTerm]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <Box className="feed-videos">
          <Typography className="feed-title" variant="h4" sx={{ mb: "20px" }}>
            Search results for
            <span className="feed-title-text"> {searchTerm}</span> Videos
          </Typography>
          <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="start">
            <Box className="search-video-results">
              <div className="search-video-container">
                {searchFeedVideos.map(
                  (
                    {
                      id: { videoId },
                      snippet: {
                        publishedAt,
                        channelId,
                        channelTitle,
                        title,
                        thumbnails: {
                          high: { url },
                        },
                      },
                    },
                    index
                  ) => (
                    <div className="search-videocard" key={index}>
                      <div className="search-thumbnail">
                        <img
                          src={url}
                          alt="video-thumbnail"
                          className="search-video-thumbnail"
                          onClick={() => navigate(`/video/${videoId}`)}
                        />
                      </div>
                      <div className="search-video-details">
                        <h1 className="video-title">{title}</h1>
                        <Nav.Link
                          onClick={() => navigate(`/channel/${channelId}`)}
                        >
                          <p className="channel-name">{channelTitle}</p>
                        </Nav.Link>
                        <div className="views">
                          <p className="uploaded-time">
                            {moment(publishedAt).fromNow()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Box>
          </Stack>
        </Box>
      </div>
    );
  }
};

export default SearchFeed;
