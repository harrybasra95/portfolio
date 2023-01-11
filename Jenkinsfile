pipeline {
     agent any
     stages {
          stage('sonar quality check') {
               steps {
                    script {
                         sh
                         '''
                         docker-compose -f ./docker/sonar.docker-compose.yml up -d && docker-compose -f ./docker/sonar.docker-compose.yml down
                         '''
                    }
               }
          }
     }
}
