# ![nuxeo](app/images/nuxeo_logo.png) UI Exercise
The goal of this exercise is to see if you are able to run a demo from a readme file and work on it without any trouble.

* Install Tools & Dependencies,
* Build & Run the project,
* Then do the exercise we sent you and send your results back.

Let's start!

## Install Tools & Dependencies

This demo requires packages you might not have in your computer: 

* [Node](https://docs.npmjs.com/getting-started/installing-node) + [npm]() + [Git]() to install the packages for the demo
* [Ruby]()
* [Bower](http://bower.io/) to build the demo.
* [Grunt](http://gruntjs.com/) to run the demo

To check if you have them, for each tool, type the following command in your terminal:

```sh
node --version
```

... and the same command for npm, Ruby, Git, Bower & Grunt.

If you have them all, perfect! You can jump to the **[Build & Run the project](#build--run-the-project)** section.
If not, let's install everything!

#### Install Node + npm, Git and Ruby
An easy way to install eveything if you are on OSX is to install [Homebrew](http://brew.sh/) first.

[Follow the instruction](https://changelog.com/install-node-js-with-homebrew-on-os-x/) to install Node + npm.

Then for Git:

```sh
 brew install git
```

And for Ruby:

```sh
apt-get install ruby
```

```sh
apt-get install ruby-compass
```

```sh
gem install compass
```

#### Install Bower
```sh
npm install -g bower
```

#### Install Grunt
```sh
npm install -g grunt --save-dev
```

```sh
npm install -g grunt-cli
```

## Build & Run the project
Now that you have all the packages installed it's time to clone the project, build it and run it.

In your terminal

```sh
git clone git@github.com:lkemen/ui-exercise.git
```

Go to the ui-exercise repository

```sh
cd ui-exercise/
```

Then in the ui-exercise use the following command to build it

```sh
npm install && bower install
```

And run the project

```sh
grunt serve
```

You now have the demo up and running in your browser, congratulations!
You can now do the exercise, good luck and see you soon :)


## About this project

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## About Nuxeo

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. More information is available at [nuxeo.com](http://nuxeo.com).
