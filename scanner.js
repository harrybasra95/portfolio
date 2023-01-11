const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
     {
          serverUrl: 'http://172.17.0.1:9000',
          options: {
               'sonar.sources': 'src',
               'sonar.projectKey': 'Portfolio',
               'sonar.tests': 'src',
               'sonar.login': 'sqp_c5fd3a8d79158dfbd927a139fb7d0cbd8038b725',
               'sonar.inclusions': '**', // Entry point of your code
               'sonar.test.inclusions':
                    'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
          },
     },
     () => {}
);
