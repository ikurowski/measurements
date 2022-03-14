/* eslint-disable no-unused-vars */
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

export default function StatisticsTabs() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getUsers();
    return () => {

    };
  }, []);

  return (
    <>

    </>
  );
}
