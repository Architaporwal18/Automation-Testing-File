pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Make sure NodeJS is configured in Jenkins (Manage Jenkins → Tools)
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx wdio run wdio.conf.js'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }

        success {
            echo '✅ Build and tests completed successfully!'
        }

        failure {
            echo '❌ Build or tests failed!'
        }
    }
}
