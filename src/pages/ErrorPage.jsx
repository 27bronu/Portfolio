import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetchData from '../services';

export function ErrorPage() {
  const location = useLocation();
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setErrorData(jsonData.errorPage);
      }
    };
    fetchDataFromJson();
  }, []);

  return (
    <div>
      {errorData && (
        <>
          <h2>{errorData.title}{location.pathname} </h2>
        </>
      )}
    </div>
  );
}
