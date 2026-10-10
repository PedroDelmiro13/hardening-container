FROM node:20-bookworm-slim

WORKDIR /app

COPY app/package*.json ./
RUN npm install --omit=dev

COPY app/ .

ENV NODE_ENV=production
ENV PORT=3000

USER node

EXPOSE 3000

CMD ["node", "server.js"]