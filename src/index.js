import fs from 'fs';
import path from 'path';
global.appPath = process.cwd();

export default {
  getPath: getPath,
  getFileContent: getFileContent,
  parseHtml: parseHtml
}

function getPath (string) {
  const exp = /(.[^ ]*.html)/;
  let path = string.match(exp)[0].trim();
  
  return path;
}

function getFileContent (path) {
  let filecontent = fs.readFileSync(`${appPath}/${path}`, 'utf8').trim();
  
  return filecontent;
}

function parseHtml (path) {
  let fileContent = getFileContent(path);
  
  while (fileContent.includes('<!-- import: ')) {
    let spaces = fileContent.match(` *(?=<!-- import: )`)[0];
    let newFile = getPath(fileContent);
    let newFileContent = getFileContent(newFile);
    newFileContent = newFileContent.replace(/(?:\r\n|\r|\n)/g, function (linebreak) {
      return `${linebreak}${spaces}`
    });
    
    fileContent = fileContent.replace(`<!-- import: ${newFile} -->`, newFileContent);
  }
  
  return fileContent;
}
