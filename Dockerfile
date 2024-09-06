# Используем официальный образ Node.js в качестве базового образа
FROM node:20.13.1

# Устанавливаем рабочую директорию в /app
WORKDIR /api

# Копируем package.json и package-lock.json (если они есть)
COPY package*.json ./
COPY package-lock*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код в рабочую директорию
COPY . .
COPY backend ./backend
COPY route ./route
COPY node_modules ./node_modules

# Экспортируем порт 3000 для сервера Node.js
EXPOSE 8080

# Запускаем сервер Node.js при запуске контейнера
CMD [ "node", "server.js" ]