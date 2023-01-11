pipeline {
     agent any
     stages {
          stage('sonar quality check') {
               steps {
                    script {
                         sh
                         '''
                         yarn sonar
                         '''
                    }
               }
          }
     }
}
