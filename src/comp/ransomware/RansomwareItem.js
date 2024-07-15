import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';


export default function RansomwareItem() {
    const { item } = useParams();
    const [data, setData] = useState(null);
    const [progress, setProcess] = useState('Loading....');
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/cyber-security/ransomware/${item}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
          
            console.log(result)
            if (result.length > 0) {
                setData(result);
              } else {
                setProcess('Not Found');
              }
            
          } catch (error) {
            console.error('Error fetching data:', error);
            setData(null);
          }
        };
    
        if (item) {
          fetchData();
        }
      }, [item]);

      const handleButtonClick = (value) => {
        const deleteItem = async () => {
            try {
                const response = await fetch(`http://localhost:8080/cyber-security/ransomware/${value}`, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  });
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              setIsDisabled(!isDisabled);
              alert('Record Deleted');
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          if(value) {
            deleteItem(value);
          }

      };

    return(
      <Container>
        <Typography variant="h4" gutterBottom>
          Ransomeware: {item}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        {data != null && data.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Alias</TableCell>
                <TableCell>Algorithm</TableCell>
                <TableCell>Extention</TableCell>
                <TableCell>Extention Pattern</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Resources</TableCell>
                <TableCell>Screenshot</TableCell>
                <TableCell>Sandbox</TableCell>
                <TableCell>Microsoft Info</TableCell>
                <TableCell>Microsoft Detection</TableCell>
                <TableCell>ICOS</TableCell>
                <TableCell>Snort</TableCell>
                <TableCell>Decryptor</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {Array.from(row.ransomwareAlias.entries()).map(([key, value]) => (
                        <span key={key}>
                          {value.alias} <br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell>
                    {Array.from(row.ransomwareAlgo.entries()).map(([key, value]) => (
                        <span key={key}>
                          {value.algo} <br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell>
                    {Array.from(row.ransomwareExt.entries()).map(([key, value]) => (
                        <span key={key}>
                          {value.ext} <br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell>
                    {Array.from(row.ransomewareExtPattern.entries()).map(([key, value]) => (
                        <span key={key}>
                          {value.extPattern} <br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell>
                    {Array.from(row.ransomwareComments.entries()).map(([key, value]) => (
                        <span key={key}>
                          {value.comments} <br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell>
                    {Array.from(row.ransomwareNotes.entries()).map(([key, value]) => (
                        <span key={key}>
                          {value.notes} <br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell>
                    {Array.from(row.ransomwareResources.entries()).map(([key, value]) => (
                        <span key={key}>
                          <a href={value.resources}>Link</a><br/>
                        </span>
                      ))}
                  </TableCell>
                  <TableCell><a href={row.screenshots}>Link</a></TableCell>
                  <TableCell><a href={row.sandbox}>Link</a></TableCell>
                  <TableCell><a href={row.msInfo}>Link</a></TableCell>
                  <TableCell><a href={row.msDetection}>Link</a></TableCell>
                  <TableCell>{row.iocs}</TableCell>
                  <TableCell>{row.snort}</TableCell>
                  <TableCell>{row.decryptor}</TableCell>
                  <TableCell>
                          <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleButtonClick(row.uid)}
                          sx={{ height: '100%' }} 
                          disabled={isDisabled}
                          >
                          Delete
                          </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        ) : (
          <Typography variant="body1">
            {progress}
          </Typography>
        )}
                    
        </Box>


      </Container>
    );
}