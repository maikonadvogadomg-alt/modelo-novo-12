âï¸


Projetos


MANUAL - APK.md

Sync
Rodar

8182838485868788899091929394958079
â¬ Terminal
ð Preview

ð¨
Compilar
Rodar

ð
Preview
ð Limpar
â Pedir Jasmim

pronto
ð¦ Pacotes

npm install
npm run dev
npm run build
npm start
node index.js
python3 main.py
pip install - r
ls - la
$
npm run build

â exit 254
347ms
npm error code ENOENT
npm error syscall open
npm error path / home / runner / sk - projetos / package.json
npm error errno - 2
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/home/runner/sk-projetos/package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: /home/runner /.npm / _logs / 2026-04 - 17T23_42_46_950Z - debug - 0.log
â
Falhounpm error code ENOENT
347ms
$
npm run dev

â exit 254
121ms
npm error code ENOENT
npm error syscall open
npm error path / home / runner / sk - projetos / package.json
npm error errno - 2
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/home/runner/sk-projetos/package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: /home/runner /.npm / _logs / 2026-04 - 17T23_42_52_964Z - debug - 0.log
â
Falhounpm error code ENOENT
121ms
$
clear

â OK
18ms
[H[2J[3J
â
   ConcluÃ­do com sucesso
18ms
$
npm install, git status, node server.jsâ¦

   Ln 32, Col 1
Sp: 2
MARKDOWN
LF
UTF - 8





Jasmim
Digite um comando e pressione Enterâ¦
âµ



   Arquivos




â¡ Menu Completo
role para ver mais â

ð Criar Novo App

Wizard com modelos prontos


ð¥ Importar ZIP

Abrir arquivo.zip do dispositivo


ð¥ Importar TAR.GZ

Abrir arquivo.tar.gz


ð¤ Exportar ZIP

Baixar projeto como.zip


ð¤ Assistente IA â Jasmim

Converse, peÃ§a cÃ³digo, debug...


ð GitHub â Clonar / Enviar

Importar ou exportar para GitHub


ð¦ Instalar Biblioteca

npm install, pip install...


ðï¸
ðï¸ Banco de Dados(Neon / Postgres)

Conectar e rodar SQL


ð¸ Salvar Checkpoint

Criar ponto de restauraÃ§Ã£o


ð HistÃ³rico de Checkpoints

Ver e restaurar versÃµes salvas


ð Lista de Tarefas â Taski

Organizar to - dos do projeto


ð§ 
ð§  MemÃ³ria da Jasmim

O que ela sabe sobre vocÃª e o projeto


ð Gerar Plano do Projeto

Gera PLANO.md com estrutura e stack


ð
ð Manual do SK Code Editor

Guia completo em portuguÃªs


ð
ð Combinar Apps

Une vÃ¡rios apps num Ãºnico projeto


â¹ï¸ Info do Sistema

Gera SISTEMA.md com detalhes tÃ©cnicos


ð¾ Salvar Projeto

Salvar estado atual


ð Abrir Preview

Visualizar site / app rodando


â¬ Abrir Terminal

Rodar comandos bash


âï¸ Assistente JurÃ­dico

Consulta jurÃ­dica com IA


ð¬ Campo Livre

Chat sem restriÃ§Ãµes


ðï¸ Limpar Projeto

Apaga todos os arquivos e volta ao inÃ­cio

GitHub

GitHub
@maikonadvogadomg-alt
conectado
Desconectar
Projeto atual

SK - Code - Editor - APK(5)

111 arquivos

Enviar para GitHub


Criar repositÃ³rio novo e enviar

Cria um repo novo e sobe todos os arquivos


Enviar para repo existente

Atualiza um repositÃ³rio que jÃ¡ existe

Baixar do GitHub


Importar repositÃ³rio

Baixa um repositÃ³rio para editar aqui

ð
Manual do SK Code Editor



ð 
InÃ­cio RÃ¡pido

ð²
Instalar como App

ð¥ï¸
Terminal

ðï¸
Banco de Dados(Neon)

ð¤
Jasmim(IA)

ð
GitHub

ðï¸
Preview ao Vivo

ð¦
Importar / Exportar

ð
Credenciais e API Keys

âï¸
Assistente JurÃ­dico

ðï¸
Meus Projetos
ðï¸
Banco de Dados(Neon)
Neon DB Ã© PostgreSQL serverless gratuito â a melhor opÃ§Ã£o para projetos profissionais.Sem cartÃ£o de crÃ©dito.

ð Setup em 5 minutos
1.
Crie conta gratuita em https://neon.tech
plano Free, sem cartÃ£o
2.
Clique em "New Project"
dÃª um nome ao banco(ex: meu - app)
3.
Copie a Connection String
comeÃ§a com postgresql://...
4.
Cole no painel ðï¸ do editor
Ã­cone de banco na barra inferior
5.
Pronto!
a Jasmim jÃ¡ tem acesso ao seu banco
ð Obter Neon API Key(para automaÃ§Ã£o)
Com a API Key, a Jasmim pode criar o banco automaticamente para vocÃª:

âº
Entre em https://console.neon.tech
âº
VÃ¡ em Settings â API Keys â Create API Key
âº
A chave comeÃ§a com neon_api_...
âº
Envie a chave para a Jasmim: "Crie um banco chamado meu-app"
ð¦ Instalar dependÃªncias
npm install @neondatabase/serverless dotenv
Copiar
ð Arquivo de conexÃ£o

// db/neon.js
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

async function initDb() {
   await sql`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  `;
   console.log('â Banco inicializado!');
}

module.exports = { sql, initDb };
Copiar
ð Arquivo.env
DATABASE_URL = postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
PORT = 3000
NODE_ENV = development
Copiar
â¡ Comandos SQL Ãºteis
Criar tabela
CREATE TABLE IF NOT EXISTS tarefas(
   id SERIAL PRIMARY KEY,
   titulo VARCHAR(255) NOT NULL,
   concluida BOOLEAN DEFAULT false,
   criado_em TIMESTAMP DEFAULT NOW()
);
Copiar
Inserir dados
INSERT INTO tarefas(titulo)
VALUES('Primeira tarefa'), ('Segunda tarefa');
Copiar
Consultar
SELECT * FROM tarefas ORDER BY criado_em DESC LIMIT 10;
Copiar
Alterar tabela
ALTER TABLE tarefas ADD COLUMN descricao TEXT;
ALTER TABLE tarefas ADD COLUMN prioridade INTEGER DEFAULT 1;
Copiar
ð Com Prisma ORM(recomendado para projetos maiores)
npm install prisma @prisma/client dotenv npx prisma init
Copiar
// prisma/schema.prisma
datasource db {
   provider = "postgresql"
   url = env("DATABASE_URL")
}

generator client {
   provider = "prisma-client-js"
}

model Tarefa {
  id        Int @id @default (autoincrement())
  titulo    String
  concluida Boolean @default (false)
  criadoEm DateTime @default (now())
   @@map("tarefas")
}
Copiar
npx prisma migrate dev--name init npx prisma studio   # abre interface visual do banco
Copiar
â ï¸ Regras importantes
âº
NUNCA commite o.env com dados reais no git
âº
SEMPRE crie.gitignore com.env listado
âº
SEMPRE crie.env.example com valores de exemplo
âº
Use sslmode = require para Neon(jÃ¡ vem na connection string)
