/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getMeasurements } from '../../firebase';

export default function StatisticsTabs() {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    getMeasurements(setMeasurements);
  }, []);
  return (
    <>
      {measurements.map((collection) => (
        <div key={collection.id}>
          <h1>
            Neck:
            {' '}
            {collection.neck}
          </h1>
          <h1>
            Biceps:
            {' '}
            {collection.biceps}
          </h1>
        </div>
      ))}
    </>
  );
}
