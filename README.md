*Criar pasta no vscode

*Iniciar a configuração do servidor

1 - Abrir o terminal do vscode e digitar o comando 'npm init' e continuar a instalação
(apertando enter) após apertar enter ele vai instalar o package.json que é uma agenda 
em que vamos anotar todas as bibliotecas que iremos instalar.

2 - Instalar o Typescript, no terminal digite o comando 'npm install -g typescript',
depois instalar os outros pacotes do typescript 'npx tsc --init', depois instalar 
'npm install -D ts-node' em seguida irá aparecer dois arquivos que são NODE_modules
é onde vai ficar todas as bibliotecas que vamos instalar e o tsconfig.json é a configuração
do typescript

3 - descomentar no tsconfig.json as seguintes linhas de código:
"moduleResolution": "node",
"rootDir": "./", e mudar para "rootDir": "./src",
"outDir": "./", e mudar para "outDir": "./dist", 

4 - Instalar a dependência do TS vá no terminal e digite 
'npm install --save-dev @types/node'

5 - Em seguida criar uma pasta na raiz chamda src

6 - Criar um arquivo dentro de src (index.ts) e colocar algum codigo de sua preferência para testar

7 - Para rodar o projeto vamos instalar o nodemon no terminal 'npm install -g nodemon'
o nodemon serve para rodarmos o projeto automaticamente

8 - para executar no cmd com o seguinte comando: nodemon src/index.ts
npm run start

OBS: PARA PARAR O TERMINAR CTRL C
