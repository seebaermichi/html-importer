'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.appPath = process.cwd();

module.exports = {
  getPath: getPath,
  getFileContent: getFileContent,
  parseHtml: parseHtml
};


function getPath(string) {
  var exp = / *(<!-- import: )(.*)( -->)/;
  var path = string.match(exp)[2].trim();

  return path;
}

function getFileContent(path) {
  var filecontent = _fs2.default.readFileSync(appPath + '/' + path, 'utf8').trim();

  return filecontent;
}

function parseHtml(path) {
  var fileContent = getFileContent(path);

  var _loop = function _loop() {
    var spaces = fileContent.match(' *(?=<!-- import: )')[0];
    var newFile = getPath(fileContent);
    var newFileContent = getFileContent(newFile);
    newFileContent = newFileContent.replace(/(?:\r\n|\r|\n)/g, function (linebreak) {
      return '' + linebreak + spaces;
    });

    fileContent = fileContent.replace('<!-- import: ' + newFile + ' -->', newFileContent);
  };

  while (fileContent.includes('<!-- import: ')) {
    _loop();
  }

  return fileContent;
}