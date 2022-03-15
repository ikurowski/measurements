/* eslint-disable no-unused-vars */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import { deleteMeasurements, auth, getMeasurements } from '../../firebase';

export default function StatisticsTabs() {
  const [currentUserId, setCurrentUserId] = useState('');
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserId(user.uid);
        getMeasurements(user.uid, setMeasurements);
      }
    });
    return () => unsubscribe();
  }, [measurements]);

  return (
    <TableContainer sx={{ mt: 3 }} component={Paper}>
      <Table stickyHeader aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="right">Neck</TableCell>
            <TableCell align="right">Chest</TableCell>
            <TableCell align="right">Biceps</TableCell>
            <TableCell align="right">Waist</TableCell>
            <TableCell align="right">Thigh</TableCell>
            <TableCell align="right">Calf</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {measurements.map((measure) => (
            <TableRow
              key={measure.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {measure.date}
              </TableCell>
              <TableCell>{measure.time}</TableCell>
              <TableCell align="right">
                {measure.neck}
                {' '}
                cm
              </TableCell>
              <TableCell align="right">
                {measure.chest}
                {' '}
                cm
              </TableCell>
              <TableCell align="right">
                {measure.biceps}
                {' '}
                cm
              </TableCell>
              <TableCell align="right">
                {measure.waist}
                {' '}
                cm
              </TableCell>
              <TableCell align="right">
                {measure.thigh}
                {' '}
                cm
              </TableCell>
              <TableCell align="right">
                {measure.calf}
                {' '}
                cm
              </TableCell>
              <TableCell sx={{ width: '1%', p: 0 }}>
                <IconButton onClick={() => deleteMeasurements(currentUserId, measure.id)}>
                  <DeleteForeverIcon color="error" />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
