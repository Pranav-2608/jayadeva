import React, { useState } from "react";
import "./Upload.css";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const UploadDoc = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [image, setimage] = useState(null);
  const [video, setvideo] = useState(null);
  const [email, setemail] = useState("");
  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles === null) {
      // alert("select a file");
      console.log("select a word file");
    } else {
      const docRef = ref(storage, `${email}/wordfile/${selectedFiles.name + v4()}`);
      try {
        await uploadBytes(docRef, selectedFiles);
        alert("file uploaded");
      } catch (error) {
        alert("Error has occured");
      }
    }
    // console.log("Files to be uploaded:", selectedFiles);
    if (image === null) {
      // alert("select a image");
      console.log("select a image");
    } else {
      const docRef = ref(storage, `${email}/image/${image.name + v4()}`);
      try {
        await uploadBytes(docRef, image);
        alert("image uploaded");
      } catch (error) {
        alert("Error has occured");
      }
    }

    if (video === null) {
      // alert("select a image");
      console.log("select a video");
    } else {
      const docRef = ref(storage, `${email}/video/${video.name + v4()}`);
      try {
        await uploadBytes(docRef, video);
        alert("video uploaded");
      } catch (error) {
        alert("Error has occured");
      }
    }
    setSelectedFiles(null);
    setimage(null);
    setvideo(null);
  };

  return (
    <div className="upload-container">
      <h2 className="title">Upload Documents, Videos, and Images</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="text" placeholder="Patient Email" required onChange={(e)=>{setemail(e.target.value)}}/>
        <div className="file-input">
          <label htmlFor="doc-upload" className="file-label">
            Choose Word Files
          </label>
          <input
            type="file"
            id="doc-upload"
            accept=".doc,.docx"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div className="file-input">
          <label htmlFor="video-upload" className="file-label">
            Choose Videos
          </label>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            multiple
            onChange={(e) => {
              setvideo(e.target.files[0]);
            }}
          />
        </div>
        <div className="file-input">
          <label htmlFor="image-upload" className="file-label">
            Choose Images
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            multiple
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
          />
        </div>
        <button type="submit" className="submit-btn">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadDoc;
