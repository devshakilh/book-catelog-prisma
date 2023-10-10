# Book Catallog Backend Assignment

<hr>

### Project Name: Book Catallog Backend

The main focus of this assignment is to implement CRUD operations, pagination and filtering using Prisma, Postgres and Express.

### Technology Stack:

- Use TypeScript as the Programming Language.
- Use Express.js as the web framework.
- Use Prisma as the Object Realtion Model (ORM).
- Use postgreSQL as the database.

### Live Link: https://book-catelog-prisma.vercel.app/

## Installation Steps

### Follow these steps to clone and set up starter project:

1. `Clone the project:` Open your terminal or command prompt and run the following command to clone the project repository:

```bash
git clone https://github.com/majharul-web/book-catallog-prisma.git
```

2. `Navigate into the project directory:` Use the cd command to navigate into the project directory:

```bash
cd book-catallog-prisma
```

3. `Install project dependencies:` Next, install the project dependencies by running the following command:

```bash
yarn install
```

4. `Run this project locally:` Next, Run this project locally following command:

```bash
yarn dev
```

### Application Routes:

#### User

- https://book-catelog-prisma.vercel.app/api/v1/auth/signup (POST)
- https://book-catelog-prisma.vercel.app/api/v1/auth/signin (POST)
- https://book-catelog-prisma.vercel.app/api/v1/users (GET)
- https://book-catelog-prisma.vercel.app/api/v1/users/1663dd1f-a63d-4d0a-8d7d-bd3ccbcde51b (Single GET)
- https://book-catelog-prisma.vercel.app/api/v1/users/1663dd1f-a63d-4d0a-8d7d-bd3ccbcde51b (PATCH)
- https://book-catelog-prisma.vercel.app/api/v1/users/1663dd1f-a63d-4d0a-8d7d-bd3ccbcde51b (DELETE)
- https://book-catelog-prisma.vercel.app/api/v1/profile (GET)

### Category

- https://book-catelog-prisma.vercel.app/api/v1/categories/create-category (POST)
- https://book-catelog-prisma.vercel.app/api/v1/categories (GET)
- https://book-catelog-prisma.vercel.app/api/v1/categories/8e2587db-c4eb-4979-9368-a314364c8005 (Single GET)
- https://book-catelog-prisma.vercel.app/api/v1/categories/8e2587db-c4eb-4979-9368-a314364c8005 (PATCH)
- https://book-catelog-prisma.vercel.app/api/v1/categories/8e2587db-c4eb-4979-9368-a314364c8005 (DELETE)

### Books

- https://book-catelog-prisma.vercel.app/api/v1/books/create-book (POST)
- https://book-catelog-prisma.vercel.app/api/v1/books (GET)
- https://book-catelog-prisma.vercel.app/api/v1/books/:categoryId/category (GET)
- https://book-catelog-prisma.vercel.app/api/v1/books/210d0cbc-450e-48cd-b3df-01d4ba1ec8b2 (GET)
- https://book-catelog-prisma.vercel.app/api/v1/books/210d0cbc-450e-48cd-b3df-01d4ba1ec8b2 (PATCH)
- https://book-catelog-prisma.vercel.app/api/v1/books/210d0cbc-450e-48cd-b3df-01d4ba1ec8b2 (DELETE)

### Orders

- https://book-catelog-prisma.vercel.app/api/v1/orders/create-order (POST)
- https://book-catelog-prisma.vercel.app/api/v1/orders (GET)
- https://book-catelog-prisma.vercel.app/api/v1/orders/57df3808-3a34-4793-9c7f-3003b547076c (GET)
"# book-catelog-prisma" 
