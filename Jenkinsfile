pipeline {
  stages {
    stage ('Checkout') {
      checkout scm
    }

    stage ('Clean Dependencies') {
      sh 'sudo rm -rf node_modules'
      sh 'sudo rm -rf build'
    }

    stage ('Build Project') {
      app = docker.build("nyt-app")
    }
  }
}

