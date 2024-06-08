import React from "react";
import "./Queue.css";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
export default function Queue() {
  const [imageUrl, setimageUrl] = useState([]);
  const [videoUrl, setvideoUrl] = useState([]);
  const [email, setemail] = useState("");
  const imagesListRef = ref(storage, `${email}/image/`);
  const videoListRef = ref(storage, `${email}/video/`);
  const handleImage = (e) => {
    setimageUrl([]);
    setvideoUrl([]);
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageUrl((prev) => [...prev, url]);
        });
      });
    });
    setemail("");
    console.log(imageUrl);
  };
  const handleVideo = () => {
    setvideoUrl([]);
    setimageUrl([]);
    listAll(videoListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setvideoUrl((prev) => [...prev, url]);
        });
      });
    });
    setemail("");
    console.log(videoUrl);
  };
  return (
    <div>
      <div className="retrieve-images-container">
        <h2>Enter email of patient</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="button-group">
          <button className="retrieve-images-button" onClick={handleImage}>
            Retrieve Images
          </button>
          <button className="retrieve-images-button" onClick={handleVideo}>
            Retrieve Videos
          </button>
        </div>
      </div>
      <div>
        {imageUrl.map((url) => {
          return <img src={url} alt="" />;
        })}
        {videoUrl.map((url) => {
          console.log(url);
          return (
            <>
              <video
                style={{ width: "320px", height: "240" }}
                controls
                autoplay
              >
                <source src={url} type="video/mp4" />
              </video>
            </>
          );
        })}
      </div>
    </div>
  );
}
