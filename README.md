npm-base-package
================

A basic npm package setup with grunt, jshint and blanket coverage reports for unit tests.

I wanted something basic that I could copy/paste and rename a few items in order to have jshint, coverage reports and grunt already setup with watchers.

Using this is quite simple. Just clone down the repo and it's a basic copy paste to your own folder.  Once you've copied it make the following changes:

***lib/module.js***
  ~ Rename file to the name of your package.
  
***test/module-tests.js***
  ~ Rename file to match module.name-tests.js and inside ensure you are requiring the correct module name.
  
***package.json***
  ~ Replace all instances of npm-base-package with your own, update git urls and update the entry point file reference.
