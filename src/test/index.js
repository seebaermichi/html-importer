import fs from 'fs';
import path from 'path';
import {expect} from 'chai';
import htmlImporter from '../index.js';

describe('htmlImporter', function () {
  describe('getPath', function () {
    it('should return a path to a html-file out of a string', function () {
      const string = '<!-- import: path/to/file.html -->';
      const path = htmlImporter.getPath(string);
      
      expect(path).to.equal('path/to/file.html');
    });
    
    it('should return only the first match', function () {
      const string = `
<!-- import: path/to/file.html -->
<!-- import: path/to/other-file.html -->
      `;
      const path = htmlImporter.getPath(string);
      
      expect(path).to.equal('path/to/file.html');
    });
  });
  
  describe('getFileContent', function () {
    it('should return the content of given file', function () {
      const path = `src/test/html-snippets/snippet.html`;
      let filecontent = htmlImporter.getFileContent(path);
      
      expect(filecontent).to.equal('simple content');
    });
  });
  
  describe('parseHtml', function () {
    it('should replace "import" statement by content of given files', function () {
      const path = 'src/test/index.src.html';
      const expectedResult = fs.readFileSync(`${appPath}/src/test/index.build.html`, 'utf8').trim();
      
      const html = htmlImporter.parseHtml(path);
      
      expect(html).to.equal(expectedResult);
    });
  });
});
