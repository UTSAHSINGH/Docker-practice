# 🚀 Utsah Singh - Personal Portfolio

![Docker](https://img.shields.io/badge/Docker-Enabled-blue?logo=docker&style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, fully containerized frontend portfolio application showcasing my projects, skills, and professional experience.

## ✨ Features

- **Interactive UI**: Engaging 3D hover effects on project cards.
- **Dynamic Content**: Typing animations in the hero section.
- **Live Integrations**: Real-time GitHub stats integration.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dockerized**: Easily deployable anywhere using Docker and NGINX.

## 📂 Repository Structure

```text
├── assets/                 # Images and media assets
├── css/                    # Stylesheets
├── js/                     # JavaScript logic and animations
├── screenshots/            # Evidence of Docker execution
├── Dockerfile              # Docker NGINX configuration
├── .dockerignore           # Excluded files for Docker build
├── .gitignore              # Excluded files for Git
├── index.html              # Main HTML structure
└── README.md               # Project documentation
```

## 🛠️ Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed and running.
- [Git](https://git-scm.com/) installed (for cloning and version control).

## 🐳 Docker Instructions

### 1. Build the Docker Image

Run the following command in the project root to build the Docker image:

```bash
docker build -t utsah-portfolio .
```

![Docker Build Output](screenshots/docker-build.png)

### 2. Run the Container

Once built, start the container using the image. We map port `8080` on the host to port `80` inside the container.

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
👉 [http://localhost:8080](http://localhost:8080)

![Running Container in Browser](screenshots/running-container.png)

## 💻 Local Run Steps (Without Docker)

If you prefer to run the application locally without Docker:
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Alternatively, serve it using a local development server like VS Code Live Server or Python's `http.server`:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---
*Built with ❤️ by Utsah Singh*
