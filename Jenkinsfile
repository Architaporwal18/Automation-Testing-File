pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome'], description: 'Select Browser')
        string(name: 'BASE_URL', defaultValue: 'https://rahulshettyacademy.com/loginpagePractise/', description: 'Application URL')
    }

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Checking out source code"
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat """
                echo Browser: %BROWSER%
                echo URL: %BASE_URL%
                npx wdio run wdio.conf.js
                """
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
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }
    }
}

