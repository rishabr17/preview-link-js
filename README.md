<h1 align="center">preview-link-js</h1>
<p align="center">NPM module to scrape site data and generate a link preview popup</p>
<div align="center"><img src="https://badge.fury.io/js/preview-link-js.svg"></img>&nbsp;&nbsp;<img src="https://img.shields.io/github/issues/rishabr17/preview-link-js"></img>&nbsp;&nbsp;<img src="https://img.shields.io/github/forks/rishabr17/preview-link-js"></img>&nbsp;&nbsp;<img src="https://img.shields.io/github/license/rishabr17/preview-link-js"></img></div></br>

<p><a href="https://rishabr17.github.io/#/preview-link-js">[Try it out]</a> This package allows you to easily generate link preview popups. Retrieving site data from the browser side is blocked (Read More: <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>), so you must use <a href="https://github.com/rishabr17/node-link-scraper">node-link-scraper</a> with this component.</p> 

## Install
```cmd
npm i preview-link-js
```
Import component and include your scraper link:
```js
import PreviewLink from 'preview-link-js'
...
<PreviewLink scraper="https://node-link-scraper.herokuapp.com/" ...></PreviewLink>
```

## Usage
- Include your link via `href`, and your display text as innerHTML </br>
```js
<PreviewLink href="https://www.npmjs.com/package/preview-link-js"> preview-link-js </PreviewLink>
```
- You can also edit the `class` and `style` fields </br>
```js
<PreviewLink class="preview-link-js" style={{ fontWeight:"500" }}> preview-link-js </PreviewLink>
```

## License
MIT License
