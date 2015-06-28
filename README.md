# showdown-xss-filter

[Showdown](https://github.com/showdownjs/showdown) extension to allow shorthanded internal links, using Wiki style \[\[link\]\] or \[\[link address\|link name\]\].

Escapes HTML characters and provides the ability to configure how internal links will be prefixed and suffixed.

## Client-side

```html
<script src="/path/to/showdown/src/showdown.js"></script>
<script src="/path/to/showdown-intlink-filter.js"></script>
```

```javascript
var converter = new showdown.Converter({extensions: ['intlink']});
```

### Configuration: (note that this will probably change in the near future)

```javascript
window.Showdown.extensions.intlinkConfig({
  pathPrefix : '/images/',
  pathSuffix : '.jpg'
};
```

## Server-side (node)

```javascript
var showdown = require('showdown');
var linkFilter = require('../showdown-intlink-filter').intlink;
var converter = new showdown.Converter({extensions: [linkFilter]});
```

### Configuration:

```javascript
require('../showdown-intlink-filter').intlinkConfig({
  pathPrefix : '/images/',
  pathSuffix : '.jpg'
};
```

