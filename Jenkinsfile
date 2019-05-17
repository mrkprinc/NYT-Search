node {
  environment {
    FONTAWESOME_TOKEN = credentials('FONTAWESOME_TOKEN')
  }
  checkout scm
  def testImage = docker.build("nyt-search", "--build-arg FONTAWESOME_TOKEN=${env.FONTAWESOME_TOKEN} .")
}

