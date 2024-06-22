FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Salin skrip start-backend.sh ke direktori yang benar
COPY start-backend.sh /usr/local/bin/start-backend.sh

# Berikan izin eksekusi ke skrip start-backend.sh
RUN chmod +x /usr/local/bin/start-backend.sh

EXPOSE 3000
CMD ["npm", "start"]

# Jalankan skrip start-backend.sh
CMD ["/usr/local/bin/start-backend.sh"]