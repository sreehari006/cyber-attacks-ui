import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

const RansomwareAdd = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState('');
  const [decryptor, setDecryptor] = useState('');
  const [screenshots, setScreenshots] = useState('');
  const [msDetection, setMsDetection] = useState('');
  const [msInfo, setMsInfo] = useState('');
  const [sandbox, setSandbox] = useState('');
  const [iocs, setIocs] = useState('');
  const [snort, setSnort] = useState('');
  const [ransomwareAlgo, setRansomwareAlgo] = useState('');
  const [ransomwareNotes, setRansomwareNotes] = useState('');
  const [ransomwareExt, setRansomwareExt] = useState('');
  const [ransomewareExtPattern, setRansomewareExtPattern] = useState('');
  const [ransomwareResources, setRansomwareResources] = useState('');
  const [ransomwareAlias, setRansomwareAlias] = useState('');
  const [ransomwareComments, setRansomwareComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestObj = {};
    requestObj['name'] = name;
    requestObj['decryptor'] = decryptor;
    requestObj['screenshots '] = screenshots;
    requestObj['msDetection'] = msDetection;
    requestObj['msInfo'] = msInfo;
    requestObj['sandbox'] = sandbox;
    requestObj['iocs'] = iocs;
    requestObj['snort'] = snort;
    const algoObj = [];
    ransomwareAlgo.split(',').forEach((algo, index)=> {
        if(algo !== "") {
            const obj = {};
            obj['algo'] = algo;
            algoObj.push(obj);
        }
    });
    requestObj['ransomwareAlgo'] = algoObj;

    const notesObj = [];
    ransomwareNotes.split(',').forEach((notes, index)=> {
        if(notes !== "") {
            const obj = {};
            obj['notes'] = notes;
            notesObj.push(obj);
        }
    });    
    requestObj['ransomwareNotes'] = notesObj;

    const extObj = [];
    ransomwareExt.split(',').forEach((ext, index)=> {
        if(ext !== "") {
            const obj = {};
            obj['ext'] = ext;
            extObj.push(obj);
        }
    });      
    requestObj['ransomwareExt'] = extObj;

    const extPatternObj = [];
    ransomewareExtPattern.split(',').forEach((extPattern, index)=> {
        if(extPattern !== "") {
            const obj = {};
            obj['extPattern'] = extPattern;
            extPatternObj.push(obj);
        }
    });  
    requestObj['ransomewareExtPattern'] = extPatternObj;

    const resourcesObj = [];
    ransomwareResources.split(',').forEach((resources, index)=> {
        if(resources !== "") {
            const obj = {};
            obj['resources'] = resources;
            resourcesObj.push(obj);
        }
    });  
    requestObj['ransomwareResources'] = resourcesObj;

    const aliasObj = [];
    ransomwareAlias.split(',').forEach((alias, index)=> {
        if(alias !== "") {
            const obj = {};
            obj['alias'] = alias;
            aliasObj.push(obj);
        }
    });  
    requestObj['ransomwareAlias'] = aliasObj;

    const commentsObj = [];
    ransomwareComments.split(',').forEach((comments, index)=> {
        if(comments !== "") {
            const obj = {};
            obj['comments'] = comments;
            commentsObj.push(obj);
        }
    });  
    requestObj['ransomwareComments'] = commentsObj;

    const jsonString = JSON.stringify(requestObj);
    console.log(jsonString);

    fetch('http://localhost:8080/cyber-security/ransomware', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: jsonString, 
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json(); 
        })
        .then(data => {
          setIsDisabled(!isDisabled);
          console.log('Success:', data);
          alert("Record Added")
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Record addition failed")
        });
    
  };

  return (
    <Container>

        <Typography variant="h4" align="center" gutterBottom>
          Add New Ransomware
        </Typography>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={name}
            size="small"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Alias"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomwareAlias}
            size="small"
            onChange={(e) => setRansomwareAlias(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
        <TextField
            label="Algorithm"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomwareAlgo}
            size="small"
            onChange={(e) => setRansomwareAlgo(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            label="Extention"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomwareExt}
            size="small"
            onChange={(e) => setRansomwareExt(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Extention Pattern"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomewareExtPattern}
            size="small"
            onChange={(e) => setRansomewareExtPattern(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Comments"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomwareComments}
            size="small"
            onChange={(e) => setRansomwareComments(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Notes"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomwareNotes}
            size="small"
            onChange={(e) => setRansomwareNotes(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Resources"
            variant="outlined"
            margin="normal"
            fullWidth
            value={ransomwareResources}
            size="small"
            onChange={(e) => setRansomwareResources(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Decryptor"
            variant="outlined"
            margin="normal"
            fullWidth
            value={decryptor}
            size="small"
            onChange={(e) => setDecryptor(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Screenshots"
            variant="outlined"
            margin="normal"
            fullWidth
            value={screenshots}
            size="small"
            onChange={(e) => setScreenshots(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Sandbox"
            variant="outlined"
            margin="normal"
            fullWidth
            value={sandbox}
            size="small"
            onChange={(e) => setSandbox(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Microsoft Detection"
            variant="outlined"
            margin="normal"
            fullWidth
            value={msDetection}
            size="small"
            onChange={(e) => setMsDetection(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="Microsoft Information"
            variant="outlined"
            margin="normal"
            fullWidth
            value={msInfo}
            size="small"
            onChange={(e) => setMsInfo(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            label="IOCS"
            variant="outlined"
            margin="normal"
            fullWidth
            value={iocs}
            size="small"
            onChange={(e) => setIocs(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            label="Snort"
            variant="outlined"
            margin="normal"
            fullWidth
            value={snort}
            size="small"
            onChange={(e) => setSnort(e.target.value)}
            
          />
          </Grid>
          <Grid item xs={12} sm={6} >


          </Grid>
          <Grid container justifyContent="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
        
            size="large"
            style={{ margin: '1rem' }}
            disabled={isDisabled}
          >
            Submit
          </Button>
          </Grid>
          </Grid>
        </form>
      </Container>

  );
};

export default RansomwareAdd;