// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
require('fancybox')($);

$(function() {
    for (var i = 0; i < 45; i++) {
        var _html = '';
        _html += '<a href="images/album/photo'+ (i + 1) +'.jpg" class="photo" rel="album" title="Photo '+ (i + 1) +'">'
        _html += '<img src="images/album/thumbs/photo'+ (i + 1) +'.jpg"  alt="Photo '+ (i + 1) +'">'
        _html += '</a>'
        $('#photos').append(_html);
    }

    $('.photo').fancybox();
});
