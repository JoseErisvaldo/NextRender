export async function getServerSideProps() {
    // Fazendo uma requisição a uma API fictícia para simular a busca de dados
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
  
    // Envia os dados como props para o componente
    return {
      props: {
        data,
      },
    };
  }
  
  export default function SSR({ data }) {
    return (
      <div>
        <h1>Server-Side Rendering (SSR)</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
  }
  