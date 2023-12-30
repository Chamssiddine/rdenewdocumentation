pipeline {
    agent any
    tools {
      dockerTool 'docker'
    }

    stages {

            stage('Clone Repo'){
                steps{
                    git branch: 'main', url: 'https://github.com/Chamssiddine/rdenewdocumentation.git'
                }
            }
            // stage('NPM'){
            //         agent { 
            //             docker { 
            //                 image 'node:21.5.0-alpine' 
            //                 args '-v /var/run/docker.sock:/var/run/docker.sock --network cicd_devops'
            //             } 
            //         }
            //         steps{                    
            //                 sh '''
            //                     npm install
            //                     npm run build
            //                 '''
            //             }
                    
            //     }

            stage('SonarQube Analysis') {
                environment {
                    SONAR_PROJECT_KEY = 'proxyi'
                    SONAR_SOURCES_DIR = './src'
                    SONAR_HOST_URL = 'http://sonarqube:9000'
                }
                agent {
                    docker {
                        image 'sonarsource/sonar-scanner-cli'
                        args "-v /var/run/docker.sock:/var/run/docker.sock --network cicd_devops"
                    }
                }
                steps {
                    withCredentials([usernamePassword(credentialsId: 'sonar-credentials', usernameVariable: 'SONAR_LOGIN', passwordVariable: 'SONAR_PASSWORD')]) {
                        script {
                            sh """
                            sonar-scanner \\
                                -Dsonar.projectKey=${SONAR_PROJECT_KEY} \\
                                -Dsonar.sources=${SONAR_SOURCES_DIR} \\
                                -Dsonar.host.url=${SONAR_HOST_URL} \\
                                -Dsonar.login=${SONAR_LOGIN} \\
                                -Dsonar.password=${SONAR_PASSWORD}
                            """
                        }
                    }
                }
            }

        stage('Docker Login') {
                    steps {
                        script {
                            // Your Nexus credentials ID
                            def nexusCredentialsId = 'nexus'

                            // Docker registry URL
                            def registryUrl = 'localhost:8085'

                            // Docker login
                            withCredentials([usernamePassword(credentialsId: nexusCredentialsId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD')]) {
                                sh "docker login  ${registryUrl} -u ${NEXUS_USERNAME} -p ${NEXUS_PASSWORD}"
                            }
                        }
                    }
                }

        stage('Docker Build and Push') {
            steps {
                script {
                    // Docker image details
                    def imageName = 'busybox'
                    def imageTag = '1.9'
                    def fullImageName = "${registryUrl}/publicimage/${imageName}:${imageTag}"

                    // Docker tag
                    sh "docker tag ${imageName}:latest ${fullImageName}"

                    // Docker push
                    sh "docker push ${fullImageName}"
                }
            }
        }
    }
}