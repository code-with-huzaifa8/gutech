import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div style={linksStyle}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

// Simple inline CSS styles for footer
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const linksStyle = {
  marginTop: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
};

export default Footer;
