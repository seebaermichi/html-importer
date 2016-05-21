# HTML-Importer

Build HTML-file out of different HTML-snippets.

[![travis build](https://img.shields.io/travis/seebaermichi/html-importer.svg?style=flat-square)](https://travis-ci.org/seebaermichi/html-importer)
[![version](https://img.shields.io/npm/v/html-importer.svg?style=flat-square)](https://www.npmjs.com/package/html-importer)
[![coverage](https://img.shields.io/codecov/c/github/seebaermichi/html-importer.svg?style=flat-square)](https://codecov.io/gh/seebaermichi/html-importer)
[![issues](https://img.shields.io/github/issues/seebaermichi/html-importer.svg?style=flat-square)](https://github.com/seebaermichi/html-importer/issues)


## Install
Run in your project directory.
```
npm install --save-dev html-importer
```

## Usage
Create `index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test html-importer</title>
</head>
<body>
  <!-- import: html/header.html -->
  <!-- import: html/main.html -->
  <!-- import: html/footer.html -->
</body>
</html>
```

Create `html/header.html`
```
<header>
  This is the header!
</header>
```

Create `html/main.html`
```
<main>
  This is main!
</main>
```
Create `html/footer.html`
```
<footer>
  This is the footer.
</footer>
```


Make sure imported files exist. The path is relative to your project root-directory.

Create `index.js`
```
import htmlImporter from 'html-importer';

const parsedHtml = htmlImporter.parseHtml('index.html');
```

`parsedHtml` should now include
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test html-importer</title>
</head>
<body>
  <header>
    This is the header!
  </header>
  <main>
    This is main!
  </main>
  <footer>
    This is the footer.
  </footer>
</body>
</html>
```


## Notes
Since this is my first real live tool I would be really happy about any feedback. So please feel free to create an issue if you have any notes about features or code.  
Thanks in advance.

## License
HTML-Importer is released under the MIT License. See [LICENSE][1] file for details.

## Links
tbd

[1]: https://github.com/seebaermichi/html-importer/blob/master/LICENSE
