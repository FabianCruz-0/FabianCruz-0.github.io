# 👨‍💻 Fabián Cruz.
### Portfolio page.


[🚀 Go to page.](https://fabiancruz-0.github.io/)

* Made with Angular CLI version 12.2.2.
* Deployed at GitHub Pages with [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) package.

<hr>

### How was deployed.

1. npm install -g angular-cli-ghpages.
2. ng deploy --base-href=/

For more options/information visit the [package documentation](https://www.npmjs.com/package/angular-cli-ghpages).

<hr>

### How I imported an external module on a component.

1. Create the route '*assets/js/moduleHere.js*'.
2. Inidicate the module route in <code> angular.json </code> -> scripts:

```
"scripts": [
              "src/assets/js/moduleHere.js"
            ]
```

3. On the <code>.ts</code> file of the component:

```
declare const objectToImport:any;
```
* the name of the constant has to be equal to the module object.

If everything was done correctly, you can now make use of the imported object in the component.