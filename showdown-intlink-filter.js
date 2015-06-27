/*
 *  Showdown Internal Link extension
 *  https://github.com/vwillyams/showdown-internal-link-extension
 *  2015, Victor Willyams
 *  License: MIT
 */
(function() {

  var config = {
    pathPrefix : '',
    pathSuffix : ''
  };

  var linkFilter = function () {
    return [
      // Aliased internal links
      {
        type:    'lang',
        regex:   '\\[\\[([^\\]\\|\\r\\n]+?)\\|([^\\]\\|\\r\\n]+?)\\]\\]',
        replace: function (match, link, linkText) {
          return '<a href="' + config.pathPrefix + link + config.pathSuffix + '">' + linkText + '</a>';
        }
      },
      // Simple internal links (no aliasing)
      {
        type:    'lang',
        regex:   '\\[\\[([^\\]\\|\\r\\n]+?)\\]\\]',
        replace: function (match, link) {
            return '<a href="' + config.pathPrefix + link + config.pathSuffix + '">' + link + '</a>';
        }
      }
    ];
  };

  var configureFilter = function(cfg){
    config = cfg;
  }

  // TODO make this work while still allowing configuration
  //// Client-side export
  //if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
  //  window.showdown.extensions.linkFilter = linkFilter;
  //}

  // Server-side export OR requireJS
  if (typeof module !== 'undefined') {
    module.exports.filter = linkFilter;
    module.exports.config = configureFilter;
  }
})();
