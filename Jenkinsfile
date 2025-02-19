pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-node-api"
        CONTAINER_NAME = "node-app"
        NODE_VERSION = "22"
    }

    stages {
        stage('Tooling versions') {
            steps {
                sh '''
                    docker --version
                    docker compose --version
                    node --version
                    npm --version
                '''
            }
        }
        
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/vagnerwentz/IoTEventsNode.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Compilar TypeScript') {
            steps {
                sh 'npx tsc'
            }
        }

        stage('Construir Imagem Docker') {
            steps {
                sh 'docker build --platform=linux/amd64 -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Remover container antigo') {
            steps {
                sh '''
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Executar Novo Container') {
            steps {
                sh 'docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${IMAGE_NAME}:latest'
            }
        }
    }
}
