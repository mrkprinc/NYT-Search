pipeline {
  agent { dockerfile true }
  stages {
    stage ('Checkout') {
      steps {
        checkout scm
      }
    }

    stage ('Clean Dependencies') {
      steps {
        sh 'sudo rm -rf node_modules'
        sh 'sudo rm -rf build'
      }
    }

    stage ('Build Project') {
      steps {
        app = docker.build("nyt-app")
      }
    }
  }
}

