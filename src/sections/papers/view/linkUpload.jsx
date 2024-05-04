import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const LinkUpload = ({ onLinkUpload }) => {
  const [link, setLink] = useState('');

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleUpload = () => {
    if (link) {
      onLinkUpload(link);
      setLink(''); // Reset the link input
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
          <TextField
            label="Paste Link"
            value={link}
            onChange={handleLinkChange}
            variant="outlined"
            size="small"
            sx={{
              flexGrow: 1,
              marginRight: 2,
            }}
          />
          {link && (
            <Typography variant="body2" align="center">
              {link}
            </Typography>
          )}
          <Button
            onClick={handleUpload}
            variant="contained"
            disabled={!link}
            sx={{ marginLeft: 2 }}
          >
            Add Link
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LinkUpload;

LinkUpload.propTypes = {
  onLinkUpload: PropTypes.func.isRequired, // Function to handle file upload
};
