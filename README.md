This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## Nextjs15 Auth

## Tech Stack
- [x] nextjs15
- [x] shadcn
- [x] better-auth
- [x] prisma

```
# nextjs 15
$ npx create-next-app@latest next15-auth

# shadcn
$ npx shadcn@latest init
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
√ Which style would you like to use? » New York
√ Which color would you like to use as the base color? » Neutral
√ Would you like to use CSS variables for theming? ... no / yes
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app\globals.css
  Installing dependencies.

It looks like you are using React 19.
Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

√ How would you like to proceed? » Use --force
✔ Installing dependencies.
✔ Created 1 file:
  - lib\utils.ts

Success! Project initialization completed.
You may now add components.

$ npx shadcn@latest add button
$ npx shadcn@latest add card
$ npx shadcn@latest add form
$ npx shadcn@latest add input

# better-auth
$ yarn add better-auth

# prisma
$ yarn add @prisma/client
$ yarn add -D prisma
$ npx prisma init

# docker-compose up -d => launch db
$ npx prisma generate
$ npx prisma studio

# generate better-auth schema
$ npx @better-auth/cli generate
√ Do you want to generate the schema to ./prisma/schema.prisma? ... yes
✔  🚀 Schema was generated successfully!

# push schema to db
$ npx prisma db push

Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "tesdb", schema "public" at "localhost:5432"      

PostgreSQL database tesdb created at localhost:5432
Your database is now in sync with your Prisma schema. Done in 404ms
✔ Generated Prisma Client (v6.1.0) to .\node_modules\@prisma\client in 42ms

$ npx shadcn@latest add toast

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
