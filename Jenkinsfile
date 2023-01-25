pipeline {
     agent any
     stages {
          stage('Sonar Quality Check') {
               agent {
                    docker { image 'node:19' }
               }
               environment {
                    HOME = '.'
               }
               steps {
                    script {
                         withSonarQubeEnv(credentialsId: 'sonar-new') {
                              sh '''
                                 yarn sonar
                              '''
                         }
                    }
               }
          }
          stage('Quality Gate Status') {
               steps {
                    script {
                         waitForQualityGate abortPipeline: false, credentialsId: 'sonar-new'
                    }
               }
          }
     }
}
