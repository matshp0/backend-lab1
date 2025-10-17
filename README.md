# Backend Lab 1 - NestJS Health Check API

A simple REST API built with NestJS that provides a health check endpoint. The application is containerized using Docker and deployed on Render.

## 🔗 Live Demo

The application is deployed and accessible at: [https://backend-lab1-6tjf.onrender.com](https://backend-lab1-6tjf.onrender.com)

## 🚀 API Endpoints

### Health Check

```
GET /health/status
```

**Response:**

```json
{
  "status": "OK",
  "date": "2025-10-17T12:00:00.000Z"
}
```

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose (for containerized setup)

### Local Setup (without Docker)

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:

```bash
npm install
```

3. Run the application in development mode:

```bash
npm run start:dev
```

4. The application will be available at `http://localhost:3000`

5. Test the health check endpoint:

```bash
curl http://localhost:3000/health/status
```

## 🐳 Docker Setup

### Building and Running with Docker

1. Build the Docker image:

```bash
docker build -t backend-lab1:latest .
```

2. Run the container:

```bash
docker run -p 3000:3000 backend-lab1:latest
```

3. Access the application at `http://localhost:3000`

### Using Docker Compose

1. Build and start the services:

```bash
docker-compose up --build
```

2. To run in detached mode:

```bash
docker-compose up -d
```

3. Stop the services:

```bash
docker-compose down
```
