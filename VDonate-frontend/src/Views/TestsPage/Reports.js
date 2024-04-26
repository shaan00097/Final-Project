import React, { useContext, useEffect, useState } from 'react';
import fileaxios from '../../api/fileapi';
import axios from 'axios';
import { Button, Stack, TextField, Typography,Box, ButtonGroup, Select, Autocomplete } from '@mui/material';
import { MyContext } from '../..';
import { useSnackbar } from '../../CommonComponents/SnackBarContext';
import { AddBox, Refresh, Upload } from '@mui/icons-material';
import nameaxios from '../../api/nameaxios';
import Axios from '../../api/axios';

//displays content
function UploadTest() {
 
  const { darkColor } = useContext(MyContext);

  return (
      
    <Content />


  );
}

//data body
function Content(){


  const {openSnackbar} = useSnackbar();


  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFilename] = useState('');

  const {name} = useContext(MyContext);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {

    openSnackbar({
      message: 'Uploading the file...',
      color:'#000000'
    })

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log(formData);


      nameaxios.post('sendfilename',{filename:filename,userid:selectedUser.name}
      ).then(r=>{
        fileaxios.post('/upload', formData)
        .then(response => {
          console.log(response.data);
          openSnackbar({
            message: 'File is uploaded',
            color:'green'
          })
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          openSnackbar({
            message: 'Failed to upload the file',
            color:'red'
          })
        });

      }).catch(error=>{
        console.log(error.response.data.message)
        openSnackbar({
          message: 'Name error occured',
          color:'red'
        })
      })
      
    }
  };


  const{darkColor} = useContext(MyContext);

  const[users,setUsers] = useState([])
  const[selectedUser,setSelectedUser] = useState({
  name: "",
  phone:"",
  userUD:""
  });

  useEffect(()=>{

    Axios.get('user/findAllUsers').then(r=>{

      setUsers(r.data.users);
      console.log(r.data.users);

    }).catch(er=>{

      console.log(er);
    })

  },[])


  return(
<Stack spacing={1}  >

    {/* File Upload Form */}
    <h2>Insert A Document</h2>
  <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={(e)=>{setSelectedUser(users[e.target.value]?.name?users[e.target.value]:{
          name: "all",
          phone:"",
          userUD:""
        })
        console.log(users[e.target.value]?.name?users[e.target.value]:{
          name: "all",
          phone:"",
          userUD:""
        })
      }}
        options={users.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select the user"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}

            
          />
        )}
      />
    
   
     <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput">
   
          <Button variant="contained" component="span" endIcon={<AddBox fontSize='medium' /> } sx={{width:'100%',backgroundColor:darkColor,'&:hover':{
            backgroundColor:'green'
          }}}>
            Choose a File
          </Button>
          
      </label>
      {selectedFile && (
        <Typography variant="body1" p='5px'><b>Selected file:</b> {selectedFile.name}</Typography>
      )}
      <TextField 
      type="text"
      placeholder="Enter custom filename"
      value={filename}
      onChange={(e)=>{setFilename(e.target.value)}}></TextField>

      <Button variant="contained" onClick={handleUpload} endIcon={<Upload fontSize='medium'/>}>Upload File</Button>
    </Stack>


  );

}

export default UploadTest;