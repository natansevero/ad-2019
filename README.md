# Desafio da Adireto Brasil

Aplicação de sorteio de **Amigo Secreto** desenolvida com **Node.js + Express** no *back-end*, **MongoDB** como banco de dados e **React.js** no *front-end*.

## Rodando em ambiente de desenvolvimento

**1:** Clone o repositório.

```
git clone https://github.com/natansevero/ad-2019
```

**2:** Acesse o diretório do projeto.

```
cd ad-2019/
```

**3:** Abra o arquivo ```backend/variables.env``` e defina as credenciais passadas via e-mail do teste.

**4:** Assegure-se que há o _docker-compose_ instalado na sua máquina e rode o comando abaixo:

```
docker-compose up --build
```

Espere o _build_ e a API estará dispovel em [http://localhost:3333](http://localhost:3333).

A aplicação **front-end** estará disponível em [http://localhost:3000](http://localhost:3000).

## Acesso online

O *front-end* e *back-end* estão disponiveis online no **Heroku**, basta acessar os *links* abaixo:

[Front-end](https://ad-2019-ui.herokuapp.com/)
[Back-end](https://ad-2019-backend.herokuapp.com/)