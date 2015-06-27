var expect = require('expect.js'),
    showdown = require('showdown');

describe('tests', function() {

  describe('converts markup into links', function() {

    var converter;
    var filter = require('../showdown-intlink-filter').filter
    beforeEach(function(done) {
      converter = new showdown.Converter({extensions: [filter]});
      done();
    });

    it("converts simple wiki text into internal links", function(done) {
      var markdown = "[[linkMe]]";
      var converted = converter.makeHtml(markdown);

      expect(converted).to.eql('<p><a href="linkMe">linkMe</a></p>');
      done();
    });

    it("converts more complex wiki text into internal links", function(done) {
      var markdown = "[[linkMe|link me]]";
      var converted = converter.makeHtml(markdown);

      expect(converted).to.eql('<p><a href="linkMe">link me</a></p>');
      done();
    });

    it("escapes html characters both for display and for text", function(done){
      var markdown = "[[this  is&a ! diffi\'cult /link ]]";
      var converted = converter.makeHtml(markdown);

      expect(converted).to.eql('<p><a href="this__is&amp;a_!_diffi&#39;cult_&#47;link_">this  is&amp;a ! diffi&#39;cult &#47;link </a></p>');
      done();
    })

  });
});
