define(function (require, exports, module) {
  return function (ubb) {
    describe('url', function () {
      var test = function (ubb, text, output) {
        describe(text, function () {
          it('should be ' + output, function () {
            expect(ubb.toHtml(text)).to.be.equal(output);
          });
        });
      };
      text = '[url=foobar]baz[/url]';
      output = '<a class="url" href="foobar" target="_system">baz</a>';
      test(ubb, text, output);
      text = '[url]foobar[/url]';
      output = '<a class="url" href="foobar" target="_system">foobar</a>';
      test(ubb, text, output);
    });
  };
});