# jQuery Sticky Footer
The footer is positioned at the bottom of the page but *without* an `absolute` position.

## Options
Please run the following script to initialize a menu with the default options:
```js
$('.footer').stickyFooter();
```

### Requirements
The page structure has to match the following one:
```html
<body>
	<div>...</div>
	<div class="footer">/div>
</body>
```

- `<body>` tag must have *ONLY* two tags as children: the first one as page container and the second one as footer container.
- There are NO restrictions for tags and classes that you can use as children of the `<body>` tag.


## Installation
This project requires [node](https://nodejs.org/).

Please run following commands to install all dependencies:
```sh
$ npm install
$ ./node_modules/bower/bin/bower install
```

## Development
The project has the following structure:
```
dist/
	*.min.js // The minified and uglified version of the component.
src/
    *.js // The source file
tests/
    ... // Contains all tests and all needed file to set up a tests environment.
    *.test.js // All tests need to have the "test" suffix before the extension.
...
```

### Grunt Tasks
Here is a list of grunt `tasks` => `actions` mappings, see below for a deeper explanation of the actions.

| *Grunt task* | *jshint* | *uglify* | *watch* |
|--------------|:--------:|:--------:|:-------:|
| grunt        |     *    |     *    |         |
| grunt watch  |          |          |    *    |

* *jshint*: Validate files with JSHint.
* *uglify*: Create the final \*.min.js.
* *watch*: Run `default` task when `src` files are added, changed or deleted.

## Tests
Take a look at [`test/README.md`](test/README.md) for more details.

