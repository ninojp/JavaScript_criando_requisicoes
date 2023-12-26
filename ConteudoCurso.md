# Curso Alura, JavaScript: criando requisições

## Aula 01: Simulando uma API

### Aula 01: Apresentação - Video 1

Nesta aula, a instrutora Mônica Hillman apresenta o curso "JavaScript: Criando Requisições" e explica as etapas que serão abordadas ao longo do curso. O objetivo é transformar o AluraPlay, uma plataforma de compartilhamento de vídeos, em uma plataforma dinâmica. Serão abordadas as etapas de tornar a lista de vídeos da página inicial dinâmica, permitir o upload de novos vídeos e implementar uma ferramenta de busca. Durante o curso, serão ensinados conceitos de JavaScript assíncrono, manipulação de DOM e como fazer requisições GET e POST para uma API mock utilizando o json-server. O conhecimento adquirido poderá ser aplicado em projetos pessoais ou em outros cursos da Alura.

### Aula 01: Projetos estáticos - Video 2

Nesta aula, o instrutor introduz o projeto AluraPlay, que consiste em transformar um site estático em um site dinâmico. Ele explica a diferença entre um site estático e um site dinâmico, destacando a importância de tornar o site dinâmico para permitir alterações no conteúdo sem mexer no código. Como desenvolvedores Front-End, eles vão "mockar" uma API utilizando o json-server, um pacote npm que simula um servidor local. O instrutor menciona que será necessário instalar o Node.js para utilizar o json-server.

### Aula 01: Node.js - Video 3

Nesta aula, o instrutor fala sobre a necessidade de transformar o projeto do AluraPlay em dinâmico e para isso é preciso consumir uma API, que será construída no json-server. Ele explica como instalar o Node.js no computador e como ele é um ambiente de execução de JavaScript que permite rodar código sem a necessidade de entrar em um projeto no navegador. Com o Node, é possível utilizar o terminal para executar comandos e instalar pacotes como o json-server.

### Aula 01: Instalando o json-server globalmente

Com o Node.js instalado,  você precisa executar um comando no seu computador. Para isso, você pode utilizar o terminal integrado do VSCode, que pode ser aberto pressionando Ctrl + J ou Ctrl + Shift + '.

-npm install json-server -g  
E pressione "Enter" para executar o comando. Isso irá instalar o pacote json-server globalmente no seu computador, e assim você poderá utilizá-lo em qualquer projeto.

-npm init  
O npm init inicializou o npm dentro do projeto. Criando o package.json, com as definições das configurações básicas do projeto.

-json-server --watch db.json  
Para iniciar o servidor e ficar --watch(assistindo, se houve alterações) no arquivo db.json

>Erro Windows PowerShell: computador estava configurado para não aceitar script de origem externa nenhuma.  
O meu sistema não está possibilitando a execução de scripts, então para ajustar isso nós vamos abrir o Windows PowerShell no nosso computador. E a gente precisa executar ele como administrador, é bem importante se atentar nisso. Estou abrindo ele no meu computador e a gente vai botar o comando **Set-ExecutionPolicy RemoteSigned**.

### Aula 01: Json-server - Video 4

Nesta aula, o instrutor explica como iniciar um servidor local utilizando o json-server. Ele mostra como instalar o json-server no projeto e como resolver problemas relacionados à execução de scripts. Após ajustar as configurações, o servidor local é iniciado na porta 3000 e pode ser acessado através do URL localhost:3000/videos. O instrutor encerra mencionando que no próximo vídeo ou aula, ele continuará a explicação sobre o código.

### Aula 01 Conclusão: Nessa aula, você aprendeu como:

Diferenciar projetos estáticos de projetos dinâmicos;
Fazer o download e instalar o Node.js;
Instalar pacotes em projetos com o Node Package Manager (NPM);
Iniciar um servidor com o Json-server.

## Aula 02: Exibindo Elementos

### Aula 02: Requisição GET - Video 1

Nesta aula, o instrutor discute a criação de um servidor local e uma API para consumir. Ele explica como utilizar o fetch para fazer requisições GET para a API e como acessar os valores retornados. O instrutor também mostra como exportar a função para ser utilizada em outros arquivos.

### Aula 02: Para saber mais: JavaScript assíncrono

Para entender melhor sobre requisições GET no consumo de API recomendo fortemente que você assista o curso JavaScript: Consumindo e tratando dados de uma API, que aborda de forma mais detalhada como o JavaScript interpreta trechos de códigos e como podemos torna-los assíncrono. Além de explicar sobre fetch API e sobre termos que aparecem ao trabalhar com requisições.

Caso você já tenha assistido e gostaria de rever conceitos, você pode acompanhar o Elias Ribeiro em seu [artigo Começando com fetch no JavaScript](alura.com.br/artigos/comecando-com-fetch-no-javascript) e a Juliana Negreiros no [Alura Mais sobre JavaScript assíncrono e fetch](https://cursos.alura.com.br/extra/alura-mais/javascript-assincrono-e-fetch-c93).

A abordagem usada para a construção de funções assíncronas foi o “async await” e você pode ler mais sobre isso no [artigo Async/await no JavaScript:](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) o que é e quando usar a programação assíncrona? da Juliana Amoasei.

### Aula 02: Manipulando o DOM Video 2

Nesta aula, o instrutor ensina como criar uma função para fazer a conexão com uma API e retornar os dados. Além disso, ele mostra como exportar essa função para ser utilizada em outros arquivos. Para exibir os dados na tela, é criado um novo arquivo com outras funções. É explicado como importar esse arquivo no index.html e como selecionar o elemento da lista para trabalhar com ele. São utilizados os data attributes para individualizar os elementos e manipular o DOM. Em seguida, é criada uma função para construir os elementos li da lista. É mostrado como definir a classe e o conteúdo HTML desses elementos. Também é explicado como retornar esses elementos para serem utilizados em outras partes do código. É feita a importação da função que faz a requisição e traz a lista de vídeos da API. É criada uma função assíncrona para consumir essa lista e utilizar os dados para criar os cards dos vídeos. O instrutor ressalta a importância de aguardar a resolução das promessas para ter acesso aos valores corretos. Ele sugere que os espectadores aprofundem seus conhecimentos em assincronicidade no curso "JavaScript consumindo e tratando dados de uma API". Por fim, ele menciona que no próximo vídeo serão exploradas mais funcionalidades do DOM e funções nativas do JavaScript.


Estou usando esta forma para exportar: export const conectaAPI = { listarVideos };
no console do browser está retornando este erro: Uncaught SyntaxError: Unexpected token 'export'.
você consegue me explicar o por que do erro?