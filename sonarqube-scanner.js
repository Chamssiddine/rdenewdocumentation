const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000/",
    token: "squ_b280db93ca722772672d61e4acd0ad6bced0e86c",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);
