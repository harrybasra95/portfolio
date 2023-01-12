pipeline {
     agent any
     stages {
          stage('Sonar Quality Check') {
               agent {
                    docker { image 'node:19' }
               }
               steps {
                    script {
                         withSonarQubeEnv(credentialsId: 'sonar-token') {
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
                         waitForQualityGate abortPipeline: false, credentialsId: 'sonar-token'
                    }
               }
          }
     }
}
