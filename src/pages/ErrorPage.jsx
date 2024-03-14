import React from 'react';
import { useLocation } from 'react-router-dom';
import useJsonData from '../hooks/useJsonData';

export default function ErrorPage() {
  const location = useLocation();
  const errorData = useJsonData();

  if (!errorData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {errorData.errorPage && (
        <>
          <p>{errorData.errorPage.url}{location.pathname}</p>
          <p>{errorData.errorPage.message}</p>
        </>
      )}
    </div>
  );
}
