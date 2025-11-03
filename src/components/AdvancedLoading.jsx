import React from 'react';

const AdvancedLoading = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, var(--light-bg), var(--white))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div className="advanced-loader">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
      <p style={{ marginTop: '20px', color: 'var(--text-light)' }}>
        Loading Premium Experience...
      </p>
    </div>
  );
};

export default AdvancedLoading;