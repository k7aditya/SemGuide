import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FeedbackView() {
  const [values, setFormData] = useState({
    overallExperience: 0,
    easyToFindInfo: '',
    navigation: '',
    issues: '',
    likedMost: '',
    improvements: '',
    likelihoodToRecommend: '',
    additionalFeedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...values, [name]: value });
  };

  const handleRatingChange = (newValue) => {
    setFormData({ ...values, overallExperience: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('overall_experience', values.overallExperience);
      formData.append('easy_to_find_info', values.easyToFindInfo);
      formData.append('navigation', values.navigation);
      formData.append('issues', values.issues);
      formData.append('liked_most', values.likedMost);
      formData.append('improvements', values.improvements);
      formData.append('likelihood_to_recommend', values.likelihoodToRecommend);
      formData.append('additional_feedback', values.additionalFeedback);
  
      const response = await fetch('https://semguide-zbku.onrender.com/api/feedback/', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const token = localStorage.getItem('token');
      // const data = await response.json();
      console.log('Successfully Submitted Feedback');

      // Handle any success actions here
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle any error actions here
    }
  };
  

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
        <Typography variant="h4">Share your valuable Feedback😊</Typography>
      </Stack>
      <hr />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <Typography variant="h5" sx={{ marginLeft: '3px', marginRight: '16px' }}>
              Overall Experience:
            </Typography>
            <Rating
              name="overallExperience"
              value={values.overallExperience}
              onChange={(event, newValue) => {
                handleRatingChange(newValue);
              }}
              size="large"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="easyToFindInfo"
              label="Was it easy to find the information you were looking for?"
              value={values.easyToFindInfo}
              onChange={handleChange}
            />
          </Grid>
          {/* Add more text fields for other questions */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="navigation"
              label="How would you rate the navigation of the website?"
              value={values.navigation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="issues"
              label="Did you encounter any issues or difficulties? If yes, please specify."
              value={values.issues}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="likedMost"
              label="What did you like most about the website?"
              value={values.likedMost}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="improvements"
              label="Any suggestions for improvements or new features?"
              value={values.improvements}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="likelihoodToRecommend"
              label="How likely are you to recommend our website to others?"
              value={values.likelihoodToRecommend}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="additionalFeedback"
              label="Any additional feedback or comments?"
              value={values.additionalFeedback}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
