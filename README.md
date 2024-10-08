## CSR (Client-Side Rendering)
## Criando uma página com CSR (Client-Side Rendering)
Neste exemplo:

A página faz uma requisição de dados após ser carregada no cliente, mostrando inicialmente um texto de Loading... enquanto os dados são buscados.
Quando os dados chegam, eles são renderizados na página.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Criando uma página com SSR (Server-Side Rendering)
Agora vamos adicionar uma página que utiliza SSR.

Crie o arquivo pages/ssr.js e adicione o seguinte código:

Aqui:

Usamos a função getServerSideProps para buscar dados no servidor antes de renderizar a página.
Os dados são enviados ao componente como props.
Diferente do CSR, o SSR carrega a página com os dados já prontos no servidor.
Acesse http://localhost:3000/ssr para ver o resultado da página sendo renderizada no servidor.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Static Site Generation (SSG)

O Static Site Generation (SSG) é outra técnica de renderização no Next.js. Ele gera o HTML das páginas em tempo de build, sendo ideal para páginas que não precisam ser atualizadas a cada requisição, como blogs ou landing pages.

Vamos criar um exemplo simples de SSG.

Criando uma página com SSG
Crie o arquivo pages/ssg.js e adicione o seguinte código:
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Incremental Static Regeneration (ISR)
O ISR combina o poder da renderização estática com a possibilidade de atualizar páginas em intervalos regulares. Esse é um dos recursos mais poderosos do Next.js, permitindo que páginas estáticas sejam atualizadas sem a necessidade de rebuild completo.

Criando uma página com ISR
Vamos configurar uma página que se atualiza automaticamente a cada 10 segundos.

Crie o arquivo pages/isr.js:

A chave revalidate define o tempo em segundos que a página será revalidada após o primeiro carregamento. Isso significa que o Next.js irá regenerar a página no servidor e, enquanto isso, os usuários continuarão a ver a versão estática existente.
Acesse http://localhost:3000/isr para ver a página com ISR.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Dynamic Routes (Rotas Dinâmicas)
Rotas dinâmicas são muito úteis em Next.js para lidar com URLs baseadas em dados dinâmicos, como detalhes de produtos, posts de blog ou perfis de usuários.

Criando uma rota dinâmica
Vamos supor que você tenha uma lista de posts e queira criar uma página de detalhe para cada post.

Primeiro, crie um diretório pages/posts e adicione o arquivo [id].js para representar as rotas dinâmicas:

A função getStaticPaths gera as rotas estáticas para os IDs dos posts. Neste exemplo, estamos gerando rotas para os primeiros 5 posts.
A função getStaticProps busca os dados de um post específico com base no id.
Agora, você pode acessar URLs dinâmicas como http://localhost:3000/posts/1, http://localhost:3000/posts/2, etc.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## API Routes
Next.js também permite criar rotas de API dentro do mesmo projeto. Elas são úteis para lidar com requisições no backend diretamente no Next.js, sem a necessidade de um servidor separado.

Criando uma rota de API
Crie o arquivo pages/api/hello.js:

Agora, ao acessar http://localhost:3000/api/hello, você verá um JSON com a mensagem "Hello from the API!".

Isso pode ser usado para construir APIs personalizadas diretamente dentro do seu projeto Next.js.#   N e x t R e n d e r 
 
 #   N e x t R e n d e r 
 
 #   N e x t R e n d e r 
 
 