import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
// import { Page, Document } from 'react-pdf';
// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Search from '../search';
import FileUpload from './fileUpload';
import LinkUpload from './linkUpload';

const role = localStorage.getItem('user_type');
console.log(role);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

async function FetchPYQ(SubjectCode) {
  try {
    const response = await fetch(
      `https://semguide-zbku.onrender.com/api/subjects/${SubjectCode}/documents/?document_type=PYQ`,
      {
        // Example URL, adjust as necessary
        method: 'GET',
        // subject: 'ITP',
        // document_type : 'PYQ',
      }
    );

    if (!response.ok) {
      throw new Error('Cant fetch');
    } else {
      // console.log('Fetched Successfully');
    }
    return await response.json();
    // pyqdata = fdata
    // console.log(pyqdata)
    // return fdata.json();
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}
async function FetchNotes(SubjectCode) {
  try {
    const response = await fetch(
      `https://semguide-zbku.onrender.com/api/subjects/${SubjectCode}/documents/?document_type=Notes`,
      {
        // Example URL, adjust as necessary
        method: 'GET',
        // subject: 'ITP',
        // document_type : 'PYQ',
      }
    );

    if (!response.ok) {
      throw new Error('Cant fetch');
    } else {
      // console.log('Fetched Successfully');
    }
    return await response.json();
    // pyqdata = fdata
    // console.log(pyqdata)
    // return fdata.json();
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}
async function FetchLinks(SubjectCode) {
  try {
    const response = await fetch(`https://semguide-zbku.onrender.com/api/${SubjectCode}/links/`, {
      // Example URL, adjust as necessary
      method: 'GET',
      // subject: 'ITP',
      // document_type : 'PYQ',
    });

    if (!response.ok) {
      throw new Error('Cant fetch');
    } else {
      // console.log('Fetched Successfully');
    }
    return await response.json();
    // pyqdata = fdata
    // console.log(pyqdata)
    // return fdata.json();
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}
export default function PapersView({ subjectCode }) {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //   const navigate = useNavigate();
  //   const handleBackClick = () => {
  //     navigate('/');
  //  };
  const [fetchedpyq, setfetchedpyq] = useState([]);
  const [fetchednotes, setfetchednotes] = useState([]);
  const [fetchedlinks, setfetchedlinks] = useState([]);
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [pyqsUploadedFiles, setPyqsUploadedFiles] = useState([]);
  const [notesUploadedFiles, setNotesUploadedFiles] = useState([]);
  const [linksUploadedFiles, setLinksUploadedFiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await FetchPYQ(subjectCode);
        setfetchedpyq(fetchedData);
        // console.log(fetchedpyq);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [subjectCode]); // Assuming subjectCode is the only dependency

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await FetchNotes(subjectCode);
        setfetchednotes(fetchedData);
        // console.log(fetchednotes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [subjectCode]); // Assuming subjectCode is the only dependency

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await FetchLinks(subjectCode);
        setfetchedlinks(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [subjectCode]); // Assuming subjectCode is the only dependency

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  // Assuming the file is uploaded successfully and you get a file URL
  // const fileUrl = 'https://example.com/path/to/uploaded/file';
  // Inside your FileUpload component
  const handlePyqsFileUpload = async (file) => {
    // const subjectId=1;
    // const file=docuemnt.querySelector('input[type="file"]').files[0];
    console.log(subjectCode);
    const formData = new FormData();
    formData.append('document_file', file);
    formData.append('subject', subjectCode);
    formData.append('document_type', 'PYQ');

    try {
      // Replace '/api/upload' with the correct endpoint for your backend
      // If your backend requires the subject ID, include it in the URL
      const response = await fetch(`https://semguide-zbku.onrender.com/api/subjects/${subjectCode}/documents/`, {
        // Example URL, adjust as necessary
        method: 'POST',
        body: formData,
        // subject: 'ITP',
        // document_type : 'PYQ',
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      } else {
        console.log('Uploaded Successfully');
      }
      const data = await response.json();
      window.location.reload();
      console.log(data.document_file);
      // Assuming the backend returns the file URL in the response
      const fileUrl = data.document_file;
      // Update the state with the new file information
      setPyqsUploadedFiles([...pyqsUploadedFiles, { file, url: fileUrl }]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleNotesFileUpload = async (file) => {
    // Assuming the file is uploaded successfully and you get a file URL
    const formData = new FormData();
    formData.append('document_file', file);
    formData.append('subject', subjectCode);
    formData.append('document_type', 'Notes');

    try {
      // Replace '/api/upload' with the correct endpoint for your backend
      // If your backend requires the subject ID, include it in the URL
      const response = await fetch(`https://semguide-zbku.onrender.com/api/subjects/${subjectCode}/documents/`, {
        // Example URL, adjust as necessary
        method: 'POST',
        body: formData,
        // subject: 'ITP',
        // document_type : 'PYQ',
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      } else {
        console.log('Uploaded Successfully');
      }
      const data = await response.json();
      window.location.reload();
      console.log(data.document_file);
      // Assuming the backend returns the file URL in the response
      const fileUrl = data.document_file;
      // Update the state with the new file information
      setNotesUploadedFiles([...notesUploadedFiles, { file, url: fileUrl }]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  const handleLinksFileUpload = async (file) => {
    // Assuming the file is uploaded successfully and you get a file URL
    const formData = new FormData();
    formData.append('link_url', file);
    formData.append('subject', subjectCode);
    // formData.append('document_type', 'Links');

    try {
      // Replace '/api/upload' with the correct endpoint for your backend
      // If your backend requires the subject ID, include it in the URL
      const response = await fetch(`https://semguide-zbku.onrender.com/api/${subjectCode}/links/`, {
        // Example URL, adjust as necessary
        method: 'POST',
        body: formData,
        // subject: 'ITP',
        // document_type : 'PYQ',
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      } else {
        console.log('Uploaded Successfully');
      }
      const data = await response.json();
      window.location.reload();
      console.log(data.document_file);
      // Assuming the backend returns the file URL in the response
      const fileUrl = data.file;
      // Update the state with the new file information
      setLinksUploadedFiles([...linksUploadedFiles, { file, url: fileUrl }]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDelete = async (documentId) => {
    // Remove the document from the frontend state
    setfetchedpyq(fetchedpyq.filter((item) => item.id !== documentId));
    setfetchednotes(fetchednotes.filter((item) => item.id !== documentId));
    setfetchedlinks(fetchedlinks.filter((item) => item.id !== documentId));

    // Send a request to the backend to delete the document
    try {
      const response = await fetch(
        `https://semguide-zbku.onrender.com/api/subjects/${subjectCode}/documents/${documentId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete document');
      }
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  // const handleDeleteLinks=async();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
            <Tab label="PYQ" />
            <Tab label="Notes" />
            <Tab label="Links" />
            <Tab label="Info" />
          </Tabs>
        </AppBar>

        {/* PYQ Tab */}
        <Box hidden={value !== 0}>
          {role === "true" && <FileUpload onFileUpload={handlePyqsFileUpload} />}
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Document Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Document Link</Table.HeaderCell>
                {role === "true" && <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fetchedpyq.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.document_file_name}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <a href={item.document_file} target="_blank" rel="noopener noreferrer">
                      📥 Download
                    </a>
                  </Table.Cell>
                  {role === "true" && (
                    <Table.Cell textAlign="center">
                      <Button onClick={() => { setDeleteId(item.id); setOpen(true); }}>🗑 Delete</Button>
                    </Table.Cell>
                  )}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Box>

        {/* Notes Tab */}
        <Box hidden={value !== 1}>
          {role === "true" && <FileUpload onFileUpload={handleNotesFileUpload} />}
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Document Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Document Link</Table.HeaderCell>
                {role === "true" && <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fetchednotes.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.document_file_name}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <a href={item.document_file} target="_blank" rel="noopener noreferrer">
                      📥 Download
                    </a>
                  </Table.Cell>
                  {role === "true" && (
                    <Table.Cell textAlign="center">
                      <Button onClick={() => { setDeleteId(item.id); setOpen(true); }}>🗑 Delete</Button>
                    </Table.Cell>
                  )}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Box>

        {/* Links Tab */}
        <Box hidden={value !== 2}>
          {role === "true" && <LinkUpload onLinkUpload={handleLinksFileUpload} />}
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Links</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Visit Link</Table.HeaderCell>
                {role === "true" && <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fetchedlinks.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.link_url}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                      🔗 Open Link
                    </a>
                  </Table.Cell>
                  {role === "true" && (
                    <Table.Cell textAlign="center">
                      <Button onClick={() => { setDeleteId(item.id); setOpen(true); }}>🗑 Delete</Button>
                    </Table.Cell>
                  )}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Box>

        {/* Info Tab */}
        <Box hidden={value !== 3}>
          <p>Info Section</p>
        </Box>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this document?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
          <Button onClick={() => { handleDelete(deleteId); setOpen(false); }} color="primary" autoFocus>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );  
}

PapersView.propTypes = {
  subjectCode: PropTypes.string.isRequired,
  // subjectShort: PropTypes.string.isRequired,
};
