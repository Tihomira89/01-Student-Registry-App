pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Setup Node.js') {
            steps {
                echo 'Setting up Node.js environment...'
                nodejs(nodeJSInstallationName: 'NodeJS-18') {
                    sh 'node --version'
                    sh 'npm --version'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                nodejs(nodeJSInstallationName: 'NodeJS-18') {
                    sh 'npm ci'
                }
            }
        }
        
        stage('Start Application') {
            steps {
                echo 'Starting the application...'
                nodejs(nodeJSInstallationName: 'NodeJS-18') {
                    sh 'npm start &'
                    sh 'sleep 5'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                nodejs(nodeJSInstallationName: 'NodeJS-18') {
                    sh 'npm test'
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleaning up processes...'
                sh 'pkill -f "node index.js" || true'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
} 