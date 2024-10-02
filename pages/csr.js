

import { useEffect, useState } from 'react';

export default function CSR() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fazendo uma requisição a uma API fictícia para simular a busca de dados
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
