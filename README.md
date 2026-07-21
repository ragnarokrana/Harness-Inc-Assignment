# Harness CI/CD Take-Home Exercise

This repository demonstrates an end-to-end CI/CD pipeline built using **Harness NextGen**, **JFrog Artifactory**, **Kind Kubernetes Cluster**, and **Docker**.

The solution builds a Docker image, pushes it to JFrog Artifactory, waits for manual approval, and deploys the application to Kubernetes using a **Canary Deployment Strategy** followed by a **Rolling Deployment**.

---

# Solution Architecture

```

                        GitHub Repository
                               │
                               │
                               ▼
                      Harness CI Pipeline
                               │
                Clone Repository
                               │
                               ▼
                    Build Docker Image
                               │
                               ▼
                     Push Image to JFrog
                               │
                               ▼
                    Manual Approval Stage
                               │
                               ▼
                  Harness CD Deployment
                               │
                               ▼
                   Canary Deployment
                               │
                      Health Validation
                               │
                               ▼
                    Delete Canary Pods
                               │
                               ▼
                  Rolling Deployment
                               │
                               ▼
                     Kind Kubernetes
                               │
                               ▼
                     Running Application

```

---

# Technology Stack

- Harness NextGen (CI/CD)
- Docker
- JFrog Artifactory
- Kubernetes
- Kind Cluster
- GitHub
- Node.js
- Docker CLI

---

# Project Structure

```

.
├── Dockerfile
├── package.json
├── app.js
├── deployment.yaml
├── service.yaml
└── README.md
