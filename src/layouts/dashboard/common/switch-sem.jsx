import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function SwitchSem({ setSelectedSemester }) {
  const [selectedSemester, setLocalSelectedSemester] = useState(() => {
    // Load the selected semester from localStorage or default to 1
    const storedSemester = localStorage.getItem('selectedSemester');
    return storedSemester ? parseInt(storedSemester, 10) : 1;
  });

  useEffect(() => {
    // Update the localStorage whenever the selected semester changes
    localStorage.setItem('selectedSemester', selectedSemester);
    setSelectedSemester(selectedSemester); // Update the parent component's state if necessary
  }, [selectedSemester, setSelectedSemester]);

  const handleSemesterChange = (event) => {
    const newSemester = parseInt(event.target.value, 10);
    setLocalSelectedSemester(newSemester);
    window.location.reload();
  };

  // Define custom styles
  const containerStyle = {  
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '0px',
    marginTop: '10px',
  };

  const selectStyle = {
    fontSize: '15px',
  };

  const optionStyle = {
    fontSize: '15px',
    backgroundColor: 'white',
    margin: '5px 8px',
    padding: '5px 10px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Semester</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedSemester}
            label="Semester"
            style={selectStyle}
            onChange={handleSemesterChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
              <MenuItem key={semester} value={semester} style={optionStyle}>
                Semester {semester}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

SwitchSem.propTypes = {
  setSelectedSemester: PropTypes.func.isRequired,
};
