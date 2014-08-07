# Test-Drive Your JavaScript

To most people building websites, writing JavaScript means copying-and-pasting a couple of jQuery snippets onto a page to get a button to animate.  While the proliferation of JavaScript frameworks has helped make code more organized, testing front-end code is still far from the norm.  We will go through the different types of testing, how to set up a test runner, writing unit and integration tests, and refactoring code to make it test*able*.  You will leave this talk fitter, happier, and less likely to create globals.

## Demo

To play with the demo, download/clone this repository, then follow the directions below.

### Jasmine / unit tests

Open [`demo/jasmine/SpecRunner.html`](demo/jasmine/SpecRunner.html) in your browser.  It will run [the incomplete tests](demo/tests.js) by default – see [`demo/jasmine/complete.js`](demo/jasmine/complete.js) for the final versions.

### Selenium / integration tests

The pending specs can be found in [`demo/selenium/browser_spec.rb`](demo/selenium/browser_spec.rb).  The complete version is in [`demo/selenium/complete_spec.rb`](demo/selenium/complete_spec.rb).  Requires Firefox.

```bash
bundle install
rspec demo/selenium/browser_spec.rb
```

## See also

* [JavaScript test framework comparison](https://coderwall.com/p/ntbixw)
* [Superhero.js](http://superherojs.com/#testing)
* [Test-Driven JavaScript Development](http://www.amazon.com/Test-Driven-JavaScript-Development-Developers-Library/dp/0321683919)

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Test-Drive Your JavaScript</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Aidan Feldman</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
