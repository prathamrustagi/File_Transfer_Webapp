import React, { useState } from 'react';
import './FileUpload.css' ;

const FileUploadDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // You can perform the file upload logic here
      console.log('File uploaded:', selectedFile);
      setSelectedFile(null);
      handleClose();
    }
  };

  return (
    <div className='body'>
      <button className="openButton" onClick={handleClickOpen}>
        Upload File
      </button>
      {open && (
        <div className="dialog">
          <div className="dialogTitle">Upload a File</div>
          <div className="dialogContent">
            <input
          
              id="contained-button-file"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="dialogActions">
            <button className="chooseButton" onClick={handleSubmit}>
              Submit
            </button>
            <button className="cancelButton" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadDialog;
