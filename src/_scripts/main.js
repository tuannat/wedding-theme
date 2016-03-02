// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
require('fancybox')($);

$(function() {
    for (var i = 0; i < 10; i++) {
        var _html = '';
        _html += '<a href="images/album/photo00'+ i +'.jpg" class="photo" rel="album" title="Photo '+ (i + 1) +'">'
        _html += '<img src="images/album/thumbs/photo00'+ i +'.jpg"  alt="Photo '+ i +'">'
        _html += '</a>'
        $('#photos').append(_html);
    }

    $('.photo').fancybox();
});
