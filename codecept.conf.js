exports.config = {
  tests: './*_test.js',
  output: './output',
  "helpers": {
    "Puppeteer": {
      "url": "http://localhost:3001",
      "show": false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codeceptjs'
}