
## Instalando o projeto

Primeiro, inicie o projeto clonando o repositório:

```bash	
git clone
```

Depois, instale as dependências:

```bash	
npm install

```

## Rodando o projeto

```bash
npm run dev

```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

## Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [React-Slick](https://react-slick.neostack.com/)
- [Slick-Carousel](https://kenwheeler.github.io/slick/)
- [TypeScript](https://www.typescriptlang.org/)

## Arquitetura de pastas

### Para adicionar um novo componente

1. Crie uma pasta com o nome do componente dentro de `src/components/_Globais`
2. Crie um arquivo `index.tsx` e um arquivo `styles.module.css` dentro da pasta criada
3. Importe o arquivo `styles.module.css` no arquivo `index.tsx`
4. Exporte o componente para ser utilizado em outras partes do projeto

##### Seu componente deve ficar assim:



```bash

├── App
│   ├── src
│   │   ├── components
│   │   │   ├──_Globais
│   │   │   │   ├──_NovoComponente
│   │   │   │   │   ├──index.tsx
│   │   │   │   │   └──styles.module.css
│   │   │   │   ├──_Footer
│   │   │   │   │   ├──index.tsx
│   │   │   │   │   └──styles.module.css
│   │   │   │   ├──_Header
│   │   │   │   │   ├──index.tsx
│   │   │   │   │   └──styles.module.css
│   │   │   │   ├──
│   │   │   ├──
│   │   ├── 
│   ├─
├─

```
## Para criar uma pasta de componentes para uma página

1. Crie uma pasta com o nome da página dentro de `src/components`
2. O nome da pasta deve ser o mesmo nome da página e iniciar com _ (underline), exemplo: `_Home`
3. Dentro da pasta criada, crie as pastas para cada componente que será utilizado na página e siga o mesmo passo a passo para adicionar um novo componente

##### Sua pasta de componentes deve da seguinte forma:

```bash

├── App
│   ├── src
│   │   ├── components
│   │   │   ├──_Home
│   │   │   │   ├──_Componente1
│   │   │   │   │   ├──index.tsx
│   │   │   │   │   └──styles.module.css
│   │   │   │   ├──_Componente2
│   │   │   │   │   ├──index.tsx
│   │   │   │   │   └──styles.module.css
│   │   │   │   ├──
│   │   │   ├──
│   │   ├──
│   ├─
├─

```

## Para criar uma página

1. Crie uma pasta com o nome da página dentro do diretório `app`
2. O nome da da pasta será o nome para a rota da página, exemplo: `home`
3. Dentro da pasta criada, crie um arquivo `page.tsx`
4. Importe os componentes que serão utilizados no aquivo `page.tsx` e exporte a página

##### Sua página deve ficar assim:

```bash

├── App
│   ├──página
│   │   ├──index.tsx
│   ├── sobre
│   │   ├──index.tsx
│   ├── contato
│   │   ├──index.tsx
│   ├─ ...
├─

```

### Utilização de imagens e arquivos estáticos

Para adicionar imagens e arquivos estáticos, acesse a pasta chamada `public` na raiz do projeto e adicione os arquivos que deseja utilizar.

Para acessar os arquivos estáticos, utilize a seguinte sintaxe:

```bash
<Image src="/nome-do-arquivo.png" alt="Nome do arquivo" />
```

##### Lembrete importante: É necessário utilizar o componente `Image` do NextJS para utilziação de imagens e arquivos estáticos



#

## Padrões de código

### Componentes

- Os componentes devem ser criados utilizando a extensão `.tsx`
- Os componentes devem ter tipagem utilizando TypeScript
- Os estilos dos componentes devem ser criados utilizando a extensão `.module.css`
- Os componentes devem ser criados dentro da pasta `src/components/_Globais`
- Funções devem ser criadas utilizando camelCase
- Componentes devem ser criados utilizando PascalCase
- Componentes devem ser exportados utilizando a palavra-chave `export default`

### Pasta Helpers

- A pasta `Helpers` é responsável por armazenar funções e objetos que serão utilizadas em mais de um componente
