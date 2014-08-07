# Test-Drive Your JavaScript

To most people building websites, writing JavaScript means copying-and-pasting a couple of jQuery snippets onto a page to get a button to animate.  While the proliferation of JavaScript frameworks has helped make code more organized, testing front-end code is still far from the norm.  We will go through the different types of testing, how to set up a test runner, writing unit and integration tests, and refactoring code to make it test*able*.  You will leave this talk fitter, happier, and less likely to create globals.

## Outline

* Intro
  * http://afeld.me/nerdery/1742468
  * Complements frameworks in encouraging code to be well organized
* Flavors of testing
  * Unit
    * Test a piece in isolation
  * Integration
    * Test a bunch of pieces together
  * Test a piece [and everything below it] in isolation
* Write a test framework
  * [Test to Learn](https://github.com/afeld/test_to_learn)
* Test frameworks
  * Basically all the same
  * [JavaScript test framework comparison](https://coderwall.com/p/ntbixw)
* Stubbing/mocking
  * [Sinon.JS](http://sinonjs.org)
* Runners
  * Browser
  * headless browser
    * [PhantomJS](http://phantomjs.org) (WebKit)
    * [SlimerJS](http://www.slimerjs.org) (Gecko)
  * Node.js
    * [JSDOM](https://github.com/tmpvar/jsdom)
* Best practices
  * Writing code to be testable
  * Breaking things into small pieces
  * Avoiding state
  * Coding from the outside in – think of testing as UI/UX design for your code
  * Writing tests forces better code
  * https://twitter.com/necolas/status/291978260433219584

## See also

* [Test-Driven JavaScript Development](http://www.amazon.com/Test-Driven-JavaScript-Development-Developers-Library/dp/0321683919)
* [Superhero.js](http://superherojs.com/#testing)

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">Test-Drive Your JavaScript</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Aidan Feldman</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
