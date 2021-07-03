FROM node:14.16.1 AS development

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --quiet

FROM node:14.16.1-slim AS production

WORKDIR /app

COPY --from=development /app/node_modules ./node_modules

COPY . .

RUN npm run build

CMD ["npm", "start"]
