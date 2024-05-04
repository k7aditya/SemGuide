// FileUpload.js
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null); // Reset the selected file
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 'fit-content', // Adjust the width to fit the content
            height: 50,
            border: '2px dashed #ccc',
            borderRadius: '4px',
            padding: 1,
            overflow: 'hidden', // Prevent content from overflowing
          }}
        >
          <Button
            variant="text"
            component="label"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-cloud-arrow-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
              </svg>
            }
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 'auto',
            }}
            sx={{
              padding: 0,

            }}
          >
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {selectedFile && (
            <Typography variant="body2" align="center">
              {selectedFile.name}
            </Typography>
          )}
          <Button onClick={handleUpload} variant="contained" disabled={!selectedFile} sx={{marginLeft: 2}}>
            Upload
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}; 

export default FileUpload;

FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired, // Function to handle file upload
};
