import Container from "@/components/container";

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
        <Container>
        ## Incremental Static Regeneration (ISR)
O ISR combina o poder da renderização estática com a possibilidade de atualizar páginas em intervalos regulares. Esse é um dos recursos mais poderosos do Next.js, permitindo que páginas estáticas sejam atualizadas sem a necessidade de rebuild completo.

Criando uma página com ISR
Vamos configurar uma página que se atualiza automaticamente a cada 10 segundos.

Crie o arquivo pages/isr.js:

A chave revalidate define o tempo em segundos que a página será revalidada após o primeiro carregamento. Isso significa que o Next.js irá regenerar a página no servidor e, enquanto isso, os usuários continuarão a ver a versão estática existente.
Acesse http://localhost:3000/isr para ver a página com ISR.
        </Container>
      </div>
    );
  }
  