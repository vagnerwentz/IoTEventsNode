pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-node-api"
        CONTAINER_NAME = "node-app"
        COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/vagnerwentz/IoTEventsNode.git'
            }
        }

        stage('Subir Containers com Docker Compose') {
            steps {
                sh 'docker compose down -v'  // Remove containers antigos e volumes
                sh 'docker compose up -d --build'  // Builda e sobe os containers
            }
        }

        stage('Verificar Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
