import React from 'react';
import useJsonData from '../hooks/useJsonData';

export default function Footer() {
  const footerData = useJsonData();

  if (!footerData) {
    return <div>Loading...</div>;
  }
  
  return (
    <footer className='footer'>
      <p>{footerData.footer.copyright}</p>
    </footer>
  );
}