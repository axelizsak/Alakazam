import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              data(orderBy: id, first: 1) {
                nb_block
                starknet_block
                eventCount
                goerli_block
                shrgn_alice_block
                shrgn_bob_block
                shrgn_dave_block
                shrgn_ferdie_block
              }
            }
          `
        })
      })
      .then(r => r.json())
      .then(data => {
        console.log('API response:', data);
        setData(data.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
    };

    fetchData();
    const intervalId = setInterval(fetchData, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const tableStyle = {
    color: 'black',
    border: '2px solid black',
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '80%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    margin: '20px 0'
  };

  const cellStyle = {
    padding: '10px',
    border: '1px solid black'
  };

  const titleStyle = {
    color: '#baba21',
    textShadow: '4px 4px #5a3a00',
    position: 'absolute',
    top: '10px',
    fontSize: '48px',
  };

  return (
    <div style={{ backgroundColor: '#550a8a', height: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={titleStyle}>Alakazam</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Id</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Layer</th>
            <th style={cellStyle}>Number Total of Block</th>
            <th style={cellStyle}>Position of last tracked block</th>
            <th style={cellStyle}>Number of searched events detected</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <>
              <tr key={index}>
                <td style={cellStyle}>{index + 1}</td>
                <td style={cellStyle}>Starknet</td>
                <td style={cellStyle}>L2</td>
                <td style={cellStyle}>{d.starknet_block}</td>
                <td style={cellStyle}>{d.nb_block}</td>
                <td style={cellStyle}>{d.eventCount}</td>
              </tr>
              {index === 0 &&
                <tr key="2">
                  <td style={cellStyle}>2</td>
                  <td style={cellStyle}>Goerli Starknet</td>
                  <td style={cellStyle}>L2 (testnet)</td>
                  <td style={cellStyle}>{d.goerli_block}</td>
                  <td style={cellStyle}>Soon</td>
                  <td style={cellStyle}>Soon</td>
                </tr>
                }
                {index === 0 &&
                  <tr key="3">
                    <td style={cellStyle}>3</td>
                    <td style={cellStyle}>Sharingan Alice</td>
                    <td style={cellStyle}>L3</td>
                    <td style={cellStyle}>{d.shrgn_alice_block}</td>
                    <td style={cellStyle}>Soon</td>
                    <td style={cellStyle}>Soon</td>
                  </tr>
                }
                {index === 0 &&
                  <tr key="4">
                    <td style={cellStyle}>4</td>
                    <td style={cellStyle}>Sharingan Bob</td>
                    <td style={cellStyle}>L3</td>
                    <td style={cellStyle}>{d.shrgn_bob_block}</td>
                    <td style={cellStyle}>Soon</td>
                    <td style={cellStyle}>Soon</td>
                  </tr>
                }
                {index === 0 &&
                  <tr key="5">
                    <td style={cellStyle}>5</td>
                    <td style={cellStyle}>Sharingan Dave</td>
                    <td style={cellStyle}>L3</td>
                    <td style={cellStyle}>{d.shrgn_dave_block}</td>
                    <td style={cellStyle}>Soon</td>
                    <td style={cellStyle}>Soon</td>
                  </tr>
                }
                {index === 0 &&
                  <tr key="6">
                    <td style={cellStyle}>6</td>
                    <td style={cellStyle}>Sharingan Ferdie</td>
                    <td style={cellStyle}>L3</td>
                    <td style={cellStyle}>{d.shrgn_ferdie_block}</td>
                    <td style={cellStyle}>Soon</td>
                    <td style={cellStyle}>Soon</td>
                  </tr>
                }
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
