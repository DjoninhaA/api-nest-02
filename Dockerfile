FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma Client first, then build NestJS
RUN npx prisma generate && npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
