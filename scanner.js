const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
 {
  serverUrl: 'http://35.154.113.233:9000',
  options: {
   'sonar.sources': 'src',
   'sonar.projectKey': 'Portfolio',
   'sonar.tests': 'src',
   'sonar.login': 'sqp_f472ff564e60a13df1d9e90bfe32378da4944cd9',
   'sonar.inclusions': '**', // Entry point of your code
   'sonar.test.inclusions':
    'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
  },
 },
 () => {}
);
