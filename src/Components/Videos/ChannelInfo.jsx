import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getChannelIcon } from "../actions";

const ChannelInfo = ({ logoStyle, channelID }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [channeldetails, setChanneldetails] = useState([]);

  useEffect(() => {
    const get_channel_details = async () => {
      try {
        const data = await getChannelIcon(channelID);

        setChanneldetails(data.items[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_channel_details();
  }, [channelID]);
  // console.log(channeldetails);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    const {
      id,
      contentDetails: {
        relatedPlaylists: { uploads },
      },
      snippet: {
        title,
        thumbnails: {
          default: { url },
        },
      },
      statistics: { subscriberCount },
    } = channeldetails;

    return (
      <div className="channel-info">
        <div className="channelTitle">
          <img
            src={url}
            alt="channel-thumbnail"
            className={!logoStyle ? "channel-logo" : logoStyle}
            onClick={() => navigate(`/channel/${id}`)}
          />
          <div className="channel">
            <div
              className="channel-title"
              onClick={() => navigate(`/channel/${id}`)}
            >
              {title}
            </div>
            <div className="channel-subscribers">
              {numeral(subscriberCount).format("0.a").toUpperCase()}
              <span className="sub-text2">Subscribers</span>
            </div>
          </div>
        </div>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    );
  }
};
export default ChannelInfo;
