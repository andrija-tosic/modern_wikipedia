jQuery('img.mwe-math-fallback-image-inline').each(function(){
    var $img = jQuery(this);
    var imgClass = $img.attr('class');
    var imgSRC = $img.attr('src');

    jQuery.get(imgSRC, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});