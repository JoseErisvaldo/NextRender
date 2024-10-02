export async function getStaticPaths() {
    // Fazendo uma requisição a uma API fictícia para obter IDs de posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    // Gerar caminhos estáticos para os primeiros 5 posts
    const paths = posts.slice(0, 5).map(post => ({
      params: { id: post.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    // Fazendo uma requisição para pegar detalhes do post baseado no ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  }
  
  export default function Post({ data }) {
    return (
      <div>
        <h1>Post {data.id}</h1>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
  }
  