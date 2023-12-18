## running application:

```bash
npm i
```

```bash
npm run dev
```

## helpful links:

- https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql#step-3-using-sequelize-for-database-queries

## helpful commands:

### prittier

#### First, install Prettier as a development dependency:

```bash
npm install --save-dev --save-exact prettier
```

#### Then, create an empty config file to let editors and other tools know you are using Prettier:

```bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

#### Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

```bash
# Ignore artifacts:
build
coverage
```

#### Now, format all files with Prettier:

```bash
npx prettier --write .
```
