node {
  environment {
    FONTAWESOME_TOKEN = "blue"
  }
  checkout scm
  def testImage = docker.build("nyt-search", "--build-arg $FONTAWESOME_TOKEN .")
}

