# To-Do List Fullstack

Um aplicativo de lista de tarefas (To-Do List) desenvolvido com **Node.js** no backend e **React.js** no frontend.  
Permite criar, editar, excluir e acompanhar tarefas de forma simples e responsiva.

---

## 🛠 Tecnologias

- **Frontend:** React.js, TailwindCSS, Vite  
- **Backend:** Node.js, Express.js
- **Banco de dados:** MySQL  
- **Controle de versão:** Git & GitHub

---

## ⚡ Funcionalidades

- Criar, listar, editar e excluir tarefas  
- Contar tarefas concluídas e pendentes  
- Interface responsiva e intuitiva  
- Backend com API RESTful e suporte a CORS  

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Mikael-Sousa/to-do-list-fullstack.git
cd to-do-list-fullstack
```

### 2. Backend
```bash
cd backend
npm install
npm run dev
```


💡 Dicas:

Crie um arquivo .env baseado no backend/.env.example.

Configure seu banco de dados no .env (ex.: usuário, senha, nome do banco).

O backend já possui configuração de CORS para permitir requisições do frontend.

Certifique-se de que o MySQL esteja rodando e com as credenciais corretas.

3. Frontend
```bash
cd frontend
npm install
npm run dev
```


💡 Dica:

O frontend normalmente ficará disponível em http://localhost:5173.

Ele se comunica com o backend usando a URL configurada nas chamadas da API (verifique UseAPI.js ou arquivos de configuração).

4. Testar a aplicação

Abra o navegador e vá para http://localhost:5173.

Crie algumas tarefas e veja se o contador de tarefas pendentes e concluídas funciona.

Teste editar e excluir tarefas para garantir que o backend está funcionando corretamente.
