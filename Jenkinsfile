pipeline {
     agent any
     stages {
          stage('sonar quality check') {
               steps {
                    script {
                         withSonarQubeEnv(credentialsId: 'sonar-token') {
                              sh '''
                                  docker-compose -f ./docker/sonar-test/docker-compose.yml up --build  -V
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
