# Boilerplate para desenvolvimento de projetos estáticos ou SPA (standard)

Estrutura com _atomic design_, _redux_ e _styled components_ ou _less_.  

## Primeiros passos
Clone o projeto
```shell
git clone https://github.com/OiSA/boilerplate-react-static.git
cd boilerplate-react-static
```
Instale o env-cmd global.
```shell
npm i -g env-cmd
```
Garanta que todas as branches e tags estejam no seu repositório local
```shell
git fetch --all --tags --prune
```

### LESS e Styled Components
Para utilizar o projeto com LESS dê checkout na branch LESS
```shell
git checkout LESS
```
Ou utilize a tag v1.2-less na branch _develop_
```shell
git checkout tags/v1.2-less
```
Para utilizar o projeto com Styled Components dê checkout na branch styled-components
```shell
git checkout styled-components
```
Ou utilize a tag v1.1-styled-components na branch _develop_
```shell
git checkout tags/v1.1-styled-components
```

### .ENV
Crie o arquivo .env na raiz do projeto.

> exemplo de configuração com ambiente de desenvolvimento para projeto estático.

```
NODE_ENV=development
OUTPUT=static
ENVIRONMENT=dev
HOST=localhost
ROOT_PATH=./
PORT=8080
```

### OPÇÕES DISPONÍVEIS

##### NODE_ENV
 * ___development___ <sub>Ambiente de desenvolvimento com </sub>
 
 * ___production___
##### OUTPUT
 * ___static___ <sub>Gerador de arquivos HTML estáticos para cada rota / página</sub>
 
 * ___standard___ <sub>Single Page Application padrão do React</sub>
##### ENVIRONMENT
 * ___dev___
 
 * ___prod___

> LEMBRE-SE DE CRIAR/ALTERAR O ARQUIVO _.env_ ANTES DE COMEÇAR O PROJETO.

Com o arquivo _.env_ criado, entre o comando abaixo no terminal.

```shell
npm start
```
