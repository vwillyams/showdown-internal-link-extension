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

  // TODO could set this all to be configurable, this creates pseudo-wiki links from text. YAGNI?
  var htmlCharacterMapping = {
    '"': '&quot;', '&': '&amp;', "'": '&#39;',
    '/': '&#47;',  '<': '&lt;',  '>': '&gt;'
  };

  function escapeHtml(text) {
    return text.replace(/[\"&'\/<>]/g, function (char) {
      return htmlCharacterMapping[char];
    });
  };

  function removeWhitespace(text){
    return text.replace(/\s/g, function(){
      return "_";
    });
  }

  var linkFilter = function () {
    return [
      // Aliased internal links
      {
        type:    'lang',
        regex:   '\\[\\[([^\\]\\|\\r\\n]+?)\\|([^\\]\\|\\r\\n]+?)\\]\\]',
        replace: function (match, link, linkText) {
          return '<a href="' + config.pathPrefix + removeWhitespace(escapeHtml(link)) + config.pathSuffix + '">' + escapeHtml(linkText) + '</a>';
        }
      },
      // Simple internal links (no aliasing)
      {
        type:    'lang',
        regex:   '\\[\\[([^\\]\\|\\r\\n]+?)\\]\\]',
        replace: function (match, link) {
            var escapedLink = escapeHtml(link);
            return '<a href="' + config.pathPrefix + removeWhitespace(escapedLink) + config.pathSuffix + '">' + escapedLink + '</a>';
        }
      }
    ];
  };

  var configureFilter = function(cfg){
    config = cfg;
  }

  // TODO allow for configuration on client side
  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.intlink = linkFilter; }

  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = {filter : linkFilter, config: configureFilter};
  }
})();
