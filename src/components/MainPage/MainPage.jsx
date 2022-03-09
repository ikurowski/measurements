import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

export default function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <button type="button">
      siemka witam w mojej kuchni
    </button>
  );
}
