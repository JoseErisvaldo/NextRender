import Container from "@/components/container";

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
        <Container>
        Agora vamos adicionar uma página que utiliza SSR.

Crie o arquivo pages/ssr.js e adicione o seguinte código:

Aqui:

Usamos a função getServerSideProps para buscar dados no servidor antes de renderizar a página.
Os dados são enviados ao componente como props.
Diferente do CSR, o SSR carrega a página com os dados já prontos no servidor.
O resultado da página sendo renderizada no servidor.
        </Container>
      </div>
    );
  }
  