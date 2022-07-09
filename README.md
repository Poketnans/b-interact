# B Interact

## Permita uma interação mais dinâmica entre você e seu cliente!

---

> Status: Concluído ✔️

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Poketnans/metamorfo-tattoo/blob/development/LICENSE)

---

## Sobre o Projeto

Olá, meu nome é Etnan! O **B Interact** é um projeto desenvolvido em um desafio técnico para a candidatura de Software Engineer da **Bemol Digital** em que era necessário desenvolver a feature de criação de usuários para uma empresa que estaria buscando uma forma de unificar a experiência de seus clientes no uso dos seus diversos canais de comunicação disponibilizados.

Resolvi desenvolver uma aplicação full stack para melhor demonstrar os conhecimentos técnicos.

---

## Tecnologias Usadas

---

### FRONT END

- Typescript
- React JS
- React Hook Form
- Context API
- Axios
- YUP
- Chakra UI
- Jest

![Formulário de criação se usuário.](/assets/images/b-interact-cadastro.png "Formulário de criação se usuário.")

---

O evento de blur do campo CEP realiza o preenchimento automático dos campos de UF e Cidade, caso seja válido:

![Pesquisa de CEP no evento de blur.](/assets/images/b-interact-cep.gif "Pesquisa de CEP")

---

### BACK END

- Python
- Django
- PostgreSQL
- Psycopg2

### AMBIENTE

- Docker
- Docker Compose
- GitHub Actions

---

## Como executar

### Clonando o repositório:

```bash
git clone git@github.com:Poketnans/b-interact.git
```

```bash
cd b-interact
```

### Variáveis de ambiente: `./api/.env`

|       Nome        |       Descrição        |   Defaut   |
| :---------------: | :--------------------: | :--------: |
|    POSTGRES_DB    | Nome do banco de dados | default_db |
|   POSTGRES_USER   |    Usuário Postgres    |            |
| POSTGRES_PASSWORD |     Senha Postgres     |            |
|      PG_PORT      |     Porta Postgres     |    5432    |
|      PG_HOST      |      Nome do host      |     db     |

### Rodando o Docker Compose:

```bash
docker-compose up --build
```

### Acessando o Formulário:

http://localhost:3000

### Endpoints

A aplicação possui apenas o endpoint de cadastro de usuário:

`POST /api/accounts/`

#### **CAMPOS:**

|    Nome    |    Descrição    |        Regra        |
| :--------: | :-------------: | :-----------------: |
| first_name |      Nome       |                     |
| last_name  |    Sobrenome    |                     |
|  username  | Nome de Usuário |                     |
|   email    |      email      | no formato de email |
|  password  |      senha      | mínimo 8 caracteres |
|  zip_code  |       CEP       |     CEP válido      |
|   street   |       Rua       |                     |
|    city    |     Cidade      |                     |
|   state    |     Estado      |    Sigla válida     |

> O Campo **state** deve ser preenchido com a sigla correspondente do estado. Ex.: CE

---

### **REQUISIÇÂO**

`Content-Type: aplication/json`

**Formato da Requisição:**

```json
{
  "first_name": "Etnan",
  "last_name": "Sousa",
  "username": "etnan",
  "email": "etnans@mail.com",
  "password": "12345678",
  "zip_code": "62598000",
  "street": "Rua Paraíso",
  "city": "Jijoca de Jericoacoara",
  "state": "CE"
}
```

`STATUS 201 - Usuário Criado`

```json
{
  "id": "9221b2ee-3fae-49db-9a89-15de548e868e",
  "first_name": "Etnan",
  "last_name": "Sousa",
  "username": "etnan",
  "email": "etnan@mail.com",
  "zip_code": "62598000",
  "street": "Rua Paraíso",
  "city": "Jijoca de Jericoacoara",
  "state": "CE",
  "created_at": "2022-07-09T00:54:28.818400Z",
  "updated_at": "2022-07-09T00:54:28.818407Z"
}
```

`STATUS 400 - Campos Faltosos`

```json
{
  "first_name": ["This field is required."],
  "last_name": ["This field is required."],
  "username": ["This field is required."],
  "email": ["This field is required."],
  "password": ["This field is required."],
  "zip_code": ["This field is required."],
  "street": ["This field is required."],
  "city": ["This field is required."],
  "state": ["This field is required."]
}
```

`STATUS 409 - Usuário já Registrado`

```json
{
  "username": ["A user with that username already exists."]
}
```

`STATUS 409 - Email já Registrado`

```json
{
  "email": ["A user with this email already exists."]
}
```

`STATUS 422 - CEP Inválido`

```json
{
  "zip_code": ["Invalid zip code."]
}
```

---

<table textAlign="center" style="margin: 0 auto;">
  <tr>
    <td align="center" title="Etnan">
    made with ❤️ by Etnan
    </td>   
  </tr>
  <tr>
    <td align="center" title="Etnan"><a href="https://github.com/Poketnans"><img src="https://avatars.githubusercontent.com/u/82735052?v=4" width="100px;" alt=""/><br />
    </td>   
  </tr>
</table>
<hr/>
