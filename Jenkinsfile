node {
  withCredentials([string(credentialsId: 'FONTAWESOME_TOKEN', variable: 'FONTAWESOME_TOKEN')]) {
    checkout scm
    def testImage = docker.build("nyt-search", "--build-arg FONTAWESOME_TOKEN=${env.FONTAWESOME_TOKEN} .")
  }
}

