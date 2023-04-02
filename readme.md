# Personal Expense Manager

## Introduction
This repo is the client for the personal expense manager (PEM). This readme details the process and decisions I made while create this project. If you want to know the reason why I am creating PEM, please check the Readme [here]().

## Technologies

1. ReactJS with Typescript
2. [Vite]()
3. [Mantine]()
4. [React Query]()
5. [React Router]()

## Project Structure

The project structure is as follows:

```bash
├── client-pem
│   ├── public
│   │   ├── vite.svg
│   ├── src
│   │   ├── app.tsx
│   │   ├── main.tsx
│   │   ├── config
│   │   │   ├── env.ts
│   │   │   └── ().ts
│   │   ├── common
│   │   │   ├── (component-name)
│   │   │   │   ├── (component-name).tsx
│   │   │   │   ├── (component-name).data.tsx
│   │   │   │   ├── (component-name).styles.tsx
│   │   │   │   └── index.ts
│   │   ├── hooks
│   │   │   ├── ().ts
│   │   │   └── ().ts
│   │   ├── modules
│   │   │   ├── (module-name)
│   │   │   │   ├── components
│   │   │   │   │   ├── (component-name).tsx
│   │   │   │   │   ├── (component-name).data.tsx
│   │   │   │   │   ├── (component-name).styles.tsx
│   │   │   │   ├── (module-name).tsx
│   │   │   │   ├── (module-name).data.tsx
│   │   │   │   ├── (module-name).styles.tsx
│   │   │   │   └── index.ts
│   │   ├── utils
│   │   │   ├── index.ts
│   │   │   └── dom.utils.ts
│   │   └── vite-env.d.ts
│   ├── yarn.lock
│   ├── readme.md
│   ├── index.html
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tsconfig.paths.json
``` 
## Getting Started

1. Build the docker image
```bash
  docker build -f Dockerfile.dev -t pem-react-client .
```
2. Run the docker image
```bash
  docker run --name pem-client -p 3000:3000 -v /app/node_modules -v $(pwd):/app -d pem-react-client
```