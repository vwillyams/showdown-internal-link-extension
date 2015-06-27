# showdown-xss-filter

[Showdown](https://github.com/showdownjs/showdown) extension to allow shorthanded internal links, using Wiki style \[\[link\]\] or \[\[link address\|link name\]\].

Escapes HTML characters and provides the ability to configure how internal links will be prefixed and suffixed.

## Client-side

```html
<script src="/path/to/showdown/src/showdown.js"></script>
<script src="/path/to/requirejs/bin/r.js"></script>
<script src="/path/to/showdown-intlink-filter.js"></script>
```

```javascript
var linkFilter = require('../showdown-intlink-filter').filter;
var converter = new showdown.Converter({extensions: [linkFilter]});
```

It is intended that in future the requirement for RequireJS be dropped and configuration of the internal linking can
be performed elsewhere.

## Server-side (node)

```javascript
var showdown = require('showdown');
var linkFilter = require('../showdown-intlink-filter').filter;
var converter = new showdown.Converter({extensions: [linkFilter]});
```

## Configuration using Require (via NodeJS or RequireJS)

```javascript
require('../showdown-intlink-filter').config({
  pathPrefix : '/images/',
  pathSuffix : '.jpg'
};
```

