node {
  environment {
    FONTAWESOME_TOKEN = 'F482D5A8-2437-47C9-889F-E01F1222321D'
  }
  checkout scm
  def testImage = docker.build("nyt-search", "--build-arg ${FONTAWESOME_TOKEN} .")
}

