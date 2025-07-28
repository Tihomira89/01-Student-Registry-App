pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing basic pipeline...'
                bat 'echo Hello from Jenkins!'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed!'
        }
    }
} 