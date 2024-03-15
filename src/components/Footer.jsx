import React from 'react';
import useJsonData from '../hooks/useJsonData';

export default function Footer() {
  const footerData = useJsonData();

  if (!footerData) {
    return <div>Loading...</div>;
  }
  
  return (
    <footer className='footer'>
      <div className="footer-content">
        <p>{footerData.footer.copyright}</p>
      </div>
    </footer>
  );
}
