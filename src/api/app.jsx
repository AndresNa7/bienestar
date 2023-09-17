import React, { useState, useEffect } from 'react';

const apiUrl = "https://proyecto-backend-sgbienestar.onrender.com/";

function Get({ endpoint, children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl + endpoint);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    fetchData();
  }, [endpoint]);

  return (
    <React.Fragment>
      {children(data)}
    </React.Fragment>
  );
}

function Post({ endpoint, data, children }) {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function postData() {
      try {
        const response = await fetch(apiUrl + endpoint, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const jsonData = await response.json();
        setResponseData(jsonData);
      } catch (error) {
        console.error("Error al enviar datos:", error);
      }
    }

    postData();
  }, [endpoint, data]);

  return (
    <React.Fragment>
      {children(responseData)}
    </React.Fragment>
  );
}

// Uso de los componentes Get y Post
function MyComponent() {
  return (
    <div>
      <h1>Obtener datos:</h1>
      <Get endpoint="endpoint">
        {(data) => (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </Get>

      <h1>Enviar datos:</h1>
      <Post endpoint="endpoint" data={{ /* datos a enviar */ }}>
        {(responseData) => (
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        )}
      </Post>
    </div>
  );
}

export default MyComponent;
