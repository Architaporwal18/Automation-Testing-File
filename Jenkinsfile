pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t wdio-test .'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'docker run wdio-test'
            }
        }
    }
}

