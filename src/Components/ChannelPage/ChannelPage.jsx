import React, { useEffect, useState } from "react";
import "./ChannelPage.scss";
import ChannelInfo from "../Videos/ChannelInfo";
import thumbnail from "../../assets/demoThumbnail.PNG";
import VideoCard from "../MainFeed/VideoCard";
import { useNavigate, useParams } from "react-router-dom";
import { getChannelById, getChannelSection } from "../actions";
import { Nav } from "react-bootstrap";
import moment from "moment";

const ChannelPage = () => {
  const { channelId } = useParams();
  const logoStyle = "channel-page";
  const thumbnailStyle = "channel-video-thumbnail";
  const videocardStyle = "channel-videoCard";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [channelDetails, setChannelDetails] = useState([]);

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const data = await getChannelSection(channelId);
        setChannelDetails(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_video_details();
  }, [channelId]);
  console.log(channelDetails);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="channel-page-container">
        <div className="coverPic">
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />

          <div className="channel-videos">
            <ChannelInfo logoStyle={logoStyle} channelID={channelId} />
            <hr className="hLine" />
            <div className="video-section">
              {!loading && channelDetails ? (
                channelDetails.map(
                  (
                    {
                      id: { videoId },
                      snippet: {
                        title,
                        publishedAt,
                        thumbnails: {
                          high: { url },
                        },
                      },
                    },
                    index
                  ) => (
                    <div className="channel-videoCard" key={index}>
                      <div className="video-top">
                        <img
                          src={url}
                          alt="video-thumbnail"
                          className="channel-video-thumbnail"
                          onClick={() => {
                            navigate(`/video/${videoId}`);
                          }}
                        />
                      </div>
                      <div className="channel-details">
                        <div className="video-details">
                          <div className="videos">
                            <Nav.Link
                              className="video-title"
                              onClick={() => {
                                navigate(`/video/${videoId}`);
                              }}
                            >
                              {title}
                            </Nav.Link>
                          </div>

                          <div className="views">
                            <p className="uploaded-time">
                              {moment(publishedAt)
                                .fromNow()
                                .toLocaleUpperCase()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ChannelPage;
