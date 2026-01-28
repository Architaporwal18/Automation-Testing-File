pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t wdio-test .'
            }
        }

        stage('Run Tests in Container') {
            steps {
                bat 'docker run wdio-test'
            }
        }
    }
}
