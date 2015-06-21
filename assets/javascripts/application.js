(function() {
  (function(jQuery) {
    jQuery.mark = {
      jump: function(options) {
        var defaults;
        defaults = {
          selector: 'a.scroll-on-page-link'
        };
        if (typeof options === 'string') {
          defaults.selector = options;
        }
        options = jQuery.extend(defaults, options);
        return jQuery(options.selector).click(function(e) {
          var jumpobj, offset, target, thespeed;
          jumpobj = jQuery(this);
          target = jumpobj.attr('href');
          thespeed = 1000;
          offset = jQuery(target).offset().top;
          jQuery('html,body').animate({
            scrollTop: offset
          }, thespeed, 'swing');
          e.preventDefault();
        });
      }
    };
  })(jQuery);

  jQuery(function() {
    jQuery.mark.jump();
  });

}).call(this);
var refTagger = {
	settings: {
		bibleVersion: "ESV"
	}
};
(function(d, t) {
	var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
	g.src = "http://www.esvapi.org/crossref/crossref.min.js";
	s.parentNode.insertBefore(g, s);
}(document, "script"));
(function() {


}).call(this);
