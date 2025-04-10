import React, { useState } from 'react';

function App() {
  const [inputPath, setInputPath] = useState('');
  const [convertedMacPath, setConvertedMacPath] = useState('');
  const [convertedPCPath, setConvertedPCPath] = useState('');

  const convertPath = () => {
    let macPath = '';
    let pcPath = '';

    if (inputPath.startsWith('smb://')) {
      macPath = inputPath;
      pcPath = inputPath.replace('smb://', '\\\\');
    } else if (inputPath.startsWith('\\\\')) {
      pcPath = inputPath;
      macPath = 'smb://' + inputPath.replace('\\\\', '');
    }

    setConvertedMacPath(macPath);
    setConvertedPCPath(pcPath);
  };

  return (
    <div className="App" style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>SMB Path Converter</h1>
      <textarea
        value={inputPath}
        onChange={(e) => setInputPath(e.target.value)}
        placeholder="Enter SMB path (Windows or Mac)"
        rows="4"
        cols="50"
        style={{ marginBottom: '1rem' }}
      />
      <br />
      <button onClick={convertPath}>Convert Path</button>
      <div style={{ marginTop: '1rem' }}>
        <h3>Mac Path (smb:// format):</h3>
        <a href={convertedMacPath}>{convertedMacPath}</a>
      </div>
      <div>
        <h3>Windows Path (\\\\ format):</h3>
        <a href={convertedPCPath}>{convertedPCPath}</a>
      </div>
    </div>
  );
}

export default App;
