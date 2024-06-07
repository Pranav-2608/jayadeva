import React, { useState } from 'react';
import './Upload.css';

const UploadDoc = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the file upload logic here
    console.log('Files to be uploaded:', selectedFiles);
  };

  return (
    <div className="upload-container">
      <h2 className="title">Upload Documents, Videos, and Images</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="file-input">
          <label htmlFor="doc-upload" className="file-label">Choose Word Files</label>
          <input type="file" id="doc-upload" accept=".doc,.docx" multiple onChange={handleFileChange} />
        </div>
        <div className="file-input">
          <label htmlFor="video-upload" className="file-label">Choose Videos</label>
          <input type="file" id="video-upload" accept="video/*" multiple onChange={handleFileChange} />
        </div>
        <div className="file-input">
          <label htmlFor="image-upload" className="file-label">Choose Images</label>
          <input type="file" id="image-upload" accept="image/*" multiple onChange={handleFileChange} />
        </div>
        <button type="submit" className="submit-btn">Upload</button>
      </form>
    </div>
  );
};

export default UploadDoc;
