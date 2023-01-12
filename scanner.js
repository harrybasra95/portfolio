const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
     {
          serverUrl: 'http://35.154.113.233:9000',
          options: {
               'sonar.sources': 'src',
               'sonar.projectKey': 'Portfolio',
               'sonar.tests': 'src',
               'sonar.login': 'sqp_c59558b31be350d6851fa3db4cbd3aecf64cb6b6',
               'sonar.inclusions': '**', // Entry point of your code
               'sonar.test.inclusions':
                    'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
          },
     },
     () => {}
);
