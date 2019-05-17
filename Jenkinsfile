node {
  checkout scm
  def testImage = docker.build("nyt-search", "--build-arg $FONTAWESOME_TOKEN .")
}

