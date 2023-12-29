import React, { useState } from 'react';

const PlatNomorCheck = () => {
  const [platNomor, setPlatNomor] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validasiPlatNomor = () => {
    const regex = /^[A-Z]{1,2}\s\d{1,4}\s[A-Z]{1,3}$/;
    setIsValid(regex.test(platNomor));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '300px', margin: 'auto' }}>
      <label htmlFor="licensePlate">Masukkan Nomor Plat:</label>
      <input
        type="text"
        id="licensePlate"
        value={platNomor}
        onChange={(e) => setPlatNomor(e.target.value)}
        style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button onClick={validasiPlatNomor} style={{ background: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Validasi</button>

      {isValid ? (
        <p style={{ color: 'green' }}>Nomor Plat Valid!</p>
      ) : (
        <p style={{ color: 'red' }}>Nomor Plat Tidak Valid</p>
      )}
    </div>
  );
};

export default PlatNomorCheck;
