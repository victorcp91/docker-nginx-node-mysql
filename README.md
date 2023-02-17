# DOCKER - Nginx com Node.js e Mysql

Quando um usuário acesse o nginx, o mesmo fará uma chamada a aplicação node.js. 
Essa aplicação por sua vez adiciona um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx é:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Basta apenas rodar: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
