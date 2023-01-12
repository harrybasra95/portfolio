pipeline {
     agent any
     stages {
          stage('sonar quality check') {
               steps {
                    script {
                         sh '''
                                  docker-compose -f ./docker/sonar-test/docker-compose.yml up --build  -V
                              '''
                    }
               }
          }
     }
}
