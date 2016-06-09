# conductthis.com

Official website for Conduct This. [conductthis.com](https://conductthis.com).

This site is based on the [Startover](https://github.com/ksmandersen/startover) template by
[ksmandersen](https://github.com/ksmandersen).

# Usage

## Requirements

You need to have the following installed to use the code in this repository:

* [NPM (Node Package manager)](https://npmjs.org/)
* [GraphicsMagick](http://www.graphicsmagick.org/)

The ease way to get node.js and GraphicsMagick on a mac is using homebrew. Just run:

```
brew update & brew install node graphicsmagick
```

## Getting started

Clone the repository:

```bash
git clone git@github.com:ksmandersen/startover.git
```

Install the project dependencies for ruby gems and node packages:

```
npm install
```

## Building

To run the local development version of the site with browser sync:

```
npm run dev
```

Build a local version of the site:

```
npm run build
```

Build a release version of the site:

```
npm run build-production
```
