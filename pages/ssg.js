import Container from "@/components/container";

export async function getStaticProps() {
    // Fazendo uma requisição a uma API fictícia para simular a busca de dados
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
  
  export default function SSG({ data }) {
    return (
      <div>
        <h1>Static Site Generation (SSG)</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <Container>
        O Static Site Generation (SSG) é outra técnica de renderização no Next.js. Ele gera o HTML das páginas em tempo de build, sendo ideal para páginas que não precisam ser atualizadas a cada requisição, como blogs ou landing pages.

Vamos criar um exemplo simples de SSG.

Criando uma página com SSG
        </Container>
      </div>
    );
  }
  