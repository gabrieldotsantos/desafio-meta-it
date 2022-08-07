# Desafio Meta
Desenvolvimento de uma ferramenta para criação de Cards de conteúdo esportivos (Insights), para avaliação meta-it.

# Execução HTTP REST API
A api rest foi desenvolvida em asp.net core 6.0, usando entity framework 6.04, com conexão via postgresql usando aws rds.
- Para a conexão em outra base de dados necessário a alteração da string de conexão presente no appsettings.json e UnitTestDbContext.cs, também a execução comeando *dotnet ef database update*
- Executar o projeto através do comando *dotnet run* dentro do projeto e acessar o navegador com a primeira url informada após o build. (Também pode ser executado pelo Visual Studio 2022 utilizado para o desemvolvimento)

# Execução Front-end
O front-end foi desenvolvido utilizando ReactJS, NextJS, Material UI e Axios para conexão com a API.
- Executar o comando *yarn install* para buscar todas as dependências do projeto.
- Validar se a url de acesso configurado no axios é o mesmo da fornecida na execução da api.
- Executar o comando *yarn dev* para iniciar a aplicação.
