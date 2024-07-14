import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import TablePagination from '@mui/material/TablePagination';


const RansomwareHome = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const fetchData = (page, rowsPerPage) => {
    fetch(`http://localhost:8080/cyber-security/ransomware?page=${page}&size=${rowsPerPage}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.content);
        console.log(data);
        setTotalRows(data.totalElements);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RansomwareHome;
