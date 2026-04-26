# Utsah Singh - Portfolio

A fully containerized frontend portfolio application showcasing projects, skills, and experience.

## Project Overview

This is a personal portfolio website built with HTML, CSS, and Vanilla JavaScript. It features interactive 3D cards, a typing hero section, real-time GitHub stats integration, and responsive design. The project has been Dockerized to allow easy and consistent deployment across different environments.

## Repository Structure

```
├── assets/                 # Images and media assets
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── screenshots/            # Evidence of Docker execution
├── Dockerfile              # Docker configuration
├── .dockerignore           # Excluded files for Docker
├── .gitignore              # Excluded files for Git
├── index.html              # Main HTML file
├── style.css               # Additional styles
├── script.js               # Additional scripts
└── README.md               # Project documentation
```

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed and running.
- [Git](https://git-scm.com/) installed (for cloning and version control).

## Docker Instructions

### 1. Build the Docker Image

Run the following command in the project root to build the Docker image:

```bash
docker build -t utsah-portfolio .
```

![Docker Build Output](screenshots/docker-build.png)

### 2. Run the Container

Once built, start the container using the image. We map port 8080 on the host to port 80 inside the container.

```bash
docker run -d -p 8080:80 --name portfolio-container utsah-portfolio
```

Verify that the container is running:

```bash
docker ps
```

![Docker PS Output](screenshots/docker-ps.png)

### 3. View the App

Open your browser and navigate to:
[http://localhost:8080](http://localhost:8080)

![Running Container in Browser](screenshots/running-container.png)

## Local Run Steps (Without Docker)

If you prefer to run the application locally without Docker:
1. Clone the repository.
2. Open `index.html` in any modern web browser or serve it using a local development server like VS Code Live Server or Python's `http.server`:
   ```bash
   python -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`.
