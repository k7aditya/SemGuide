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
      <Search />
      <Box sx={{ width: '100%' }}>
        <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="PYQ" {...a11yProps(0)} />
            <Tab label="Notes" {...a11yProps(1)} />
            <Tab label="Links" {...a11yProps(2)} />
            <Tab label="Info" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* PYQS {subjectCode} */}
          {/* <Button onClick={handleBackClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>  
            {subjectCode}
          </Button> */}

          {role === 'true' ? <FileUpload onFileUpload={handlePyqsFileUpload} /> : null}
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Document Name</Table.HeaderCell>
                  <Table.HeaderCell>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Document Link</div>
                  </Table.HeaderCell>
                  {role === 'true' ? (
                    <Table.HeaderCell>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>Delete</div>
                    </Table.HeaderCell>
                  ) : null}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {fetchedpyq.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.document_file_name}</Table.Cell>
                    <Table.Cell>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href={item.document_file} target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-download"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                          </svg>
                        </a>
                      </div>
                    </Table.Cell>

                    <Table.Cell>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {role === 'true' ? (
                          <Button
                            onClick={() => {
                              setDeleteId(item.id);
                              setOpen(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </svg>
                          </Button>
                        ) : null}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* Notes {subjectCode} */}
          {role === 'true' ? <FileUpload onFileUpload={handleNotesFileUpload} /> : null}
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Document Name</Table.HeaderCell>
                  <Table.HeaderCell>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Document Link</div>
                  </Table.HeaderCell>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {role === 'true' ? <Table.HeaderCell>Delete</Table.HeaderCell> : null}
                  </div>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {fetchednotes.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.document_file_name}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {' '}
                      {/* Align the content in the center */}
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href={item.document_file} target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-download"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                          </svg>
                        </a>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {role === 'true' ? (
                          <Button
                            onClick={() => {
                              setDeleteId(item.id);
                              setOpen(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </svg>
                          </Button>
                        ) : null}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          {/* Links {subjectCode} */}
          {role === 'true' ? <LinkUpload onLinkUpload={handleLinksFileUpload} /> : null}
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Links </Table.HeaderCell>
                  <Table.HeaderCell>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>Visit Link </div>
                  </Table.HeaderCell>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {role === 'true' ? <Table.HeaderCell>Delete</Table.HeaderCell> : null}
                  </div>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {fetchedlinks.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.link_url}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {' '}
                      {/* Align the content in the center */}
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {role === 'true' ? (
                          <Button
                            onClick={() => {
                              setDeleteId(item.id);
                              setOpen(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </svg>
                          </Button>
                        ) : null}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
          Info {subjectCode}
        </TabPanel>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this document?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleDelete(deleteId);
              setOpen(false);
            }}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

PapersView.propTypes = {
  subjectCode: PropTypes.string.isRequired,
  // subjectShort: PropTypes.string.isRequired,
};
