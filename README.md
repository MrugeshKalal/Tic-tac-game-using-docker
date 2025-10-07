# Tic-Tac-Toe Game with Docker

A simple **Tic-Tac-Toe** web game built with **Node.js** and **Express**, containerized using **Docker**.  
This project also includes **Prometheus metrics** for monitoring game statistics.

---

## 🎮 Features
- Play Tic-Tac-Toe (X vs O) in your browser
- Track **X wins**, **O wins**, and **game resets**
- Expose metrics for Prometheus monitoring
- Containerized with Docker for easy deployment

---

## 🛠 Prerequisites
- [Node.js](https://nodejs.org/) installed locally (optional if using Docker)
- [Docker](https://www.docker.com/) installed
- [Prometheus](https://prometheus.io/) (optional, for metrics)

---

## 🚀 Running Locally without Docker
1. Install dependencies:
```bash
npm install

2. Start the server:
node server.js

3. Open your browser at:
http://localhost:4000



#Running with Docker

Build the Docker image:
docker build -t tic-tac-game:v1 .


Run the Docker container:
docker run -d -p 4000:4000 --name tic-tac-container tic-tac-game:v1


Open your browser at:
http://localhost:4000


#Prometheus Metrics

The game exposes basic metrics for monitoring game activity.

metrics.js handles the Prometheus metrics endpoint.

Start Prometheus and point it to the metrics endpoint:
http://localhost:4000/metrics


