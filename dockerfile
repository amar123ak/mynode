FROM node:18-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install (prod-only is fine for this app)
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Copy the rest of the source
COPY . .

EXPOSE 4000
CMD ["node", "app.js"]
