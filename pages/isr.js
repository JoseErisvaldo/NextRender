export async function getStaticProps() {
    // Fazendo uma requisição a uma API fictícia para simular a busca de dados
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
  
    return {
      props: {
        data,
      },
      revalidate: 10, // Revalidar a cada 10 segundos
    };
  }
  
  export default function ISR({ data }) {
    return (
      <div>
        <h1>Incremental Static Regeneration (ISR)</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
  }
  