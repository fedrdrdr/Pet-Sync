import React from 'react';
import './Loader.css'

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loader;
