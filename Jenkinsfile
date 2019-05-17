#!groovy

node {
  try {
    stage('Environment') {
      sh "id"
      sh "node -v"
      sh "npm -v"
    }

    stage ('Checkout') {
      checkout scm
    }

    stage ('Clean Dependencies') {
      sh 'sudo rm -rf node_modules'
      sh 'sudo rm -rf build'
    }

    stage ('Build Project') {
      app = docker.build("quantummob/drip2")
    }
  }
  catch(err) {
    throw err
  }
}
