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
        
        stage('Debug Environment') {
            steps {
                echo '=== Debugging Environment ==='
                bat 'echo Current directory:'
                bat 'cd'
                bat 'echo PATH:'
                bat 'echo %PATH%'
                bat 'echo Looking for node.exe:'
                bat 'where node'
                bat 'echo Looking for npm:'
                bat 'where npm'
                bat 'echo Node.js version:'
                bat 'node --version'
                bat 'echo NPM version:'
                bat 'npm --version'
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