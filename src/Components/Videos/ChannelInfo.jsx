import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getChannelIcon } from "../actions";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ChannelInfo = ({ logoStyle, channelID, userId }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [channeldetails, setChanneldetails] = useState([]);
  const [subscription, setSubscription] = useState({
    channelId: "",
    channelAvatar: "",
    channelInfo: {
      subscribers: "",
      title: "",
    },
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
    const addSubscription = async (e) => {
      e.preventDefault();
      setSubscription({
        channelId: id,
        channelAvatar: url,
        channelInfo: {
          subscribers: subscriberCount,
          title: title,
        },
      });

      const response = await axios.post(
        `https://youtube-server-app.onrender.com/${userId}/add/subscriptions`,
        subscription
      );
      setOpen(true);
    };

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
        <button className="subscribe-btn" onClick={addSubscription}>
          Subscribe
        </button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Channel Subscribed
          </Alert>
        </Snackbar>
      </div>
    );
  }
};
export default ChannelInfo;
