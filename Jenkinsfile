pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-installation'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Verify Node.js') {
            steps {
                echo 'Verifying Node.js installation...'
                bat 'where node'
                bat 'node -v'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm ci'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
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