# HTML-Importer

Build HTML-file out of many different HTML-snippets.

## Notes for Development
### What should it do?
It should parse HTML from an entry file like `index.html`. If it finds:
```
<!-- import: path/to/html-snippet.html -->
```
it should read the content of this file and replace the `import` statement with the content of the imported file.  
Stop parsing if no further `import` statement is found.

### How could this work?
* Create a module.
* Parse by calling `module.parse(input-file.html, [output-file.html])`
* `module.parse(input-file.html, [output-html.html])` outputs a string


## Install
tbd

## Usage
tbd

## Examples
tbd

## Notes
tbd

## License
HTML-Importer is released under the MIT License. See [LICENSE][1] file for details.

## Links


[1]: https://github.com/seebaermichi/html-importer/LICENSE
