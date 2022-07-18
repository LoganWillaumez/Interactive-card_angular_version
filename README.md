# Interactive Card

Here is a project used with two API : 

- (randomuser)[https://randomuser.me]
- Google map API


## Stack

- Angular
- Typescript
- SCSS

## Install

Prerequisites: Make sure you've installed Node.js ≥ 12

1. Install dependencies :

```bash
yarn

# or

npm i 

# or

pnpm i
```

2. Configure .env

Uncomment elenent on the app.component and add a environment/env.ts

The API of index is protected, and will be delete soon ( you can add yours in place of it)

```env
export const envSecret = {
  production: false,
  apiGoogle: 'YOUR_API',
};

```

3. To launch locally :

```bash
yarn dev

# or

npm run dev

#or

pnpm run dev

#or 

ng serve
```


Demo : https://interactive-card-angular-version.vercel.app
