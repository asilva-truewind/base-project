'use strict';

module.exports = {
  sass: {
    files: "<%= cfg.root %><%= cfg.src.styles %>**/*.scss",
    tasks: ['styles']
  },
  scripts: {
    files: "<%= cfg.root %><%= cfg.src.scripts %>**/*.js",
    tasks: [
      "scripts"
    ]
  },
  images: {
    files: [
      "<%= cfg.root %><%= cfg.src.images %>**/**/*.*"
    ],
    tasks: [
      "images"
    ]
  },
  html: {
    files: [
      "<%= cfg.root %><%= cfg.src.html %>**/*.hbs",
      "<%= cfg.root %><%= cfg.dest.html %>index.html",
      "<%= cfg.root %>index.html",
      "Gruntfile.js"
    ],
    tasks: [
      "html"
    ]
  }
}
