# Boilerplate para desenvolvimento de projetos estáticos ou SPA (standard)

Estrutura com _atomic design_, _styled components_ e _redux_.  

## .ENV
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
