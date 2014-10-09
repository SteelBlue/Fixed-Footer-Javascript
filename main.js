/**
 *  Make Footer Fixed
 *	-	fadeOut $page_loader on window.load
 *  -   if the Content is smaller than (Header + Footer) - Window
 *  -   then fix Footer to bottom of page
 *  -   else do nothing
 */
    function fixedFooter() {
        // Variable to get all section heights
        var contentH = 0;
        // Get widths and heights
		var footerH = $('footer').height();
		var headerH = $('header').height();
		var windowH = $( window ).height();
        var windowW = $( window ).width();
        
        // Elements
        var footer = $('footer');
        var contentSections = $('section');
        
        // Math
        var footAndHeader = footerH + headerH;
        // Get total height of all sections
        contentSections.each(function() {
            var sectionH = $(this).height();
            contentH += sectionH;
        });
        var bodyH = contentH + footAndHeader;
        
        /**
         *  Desktop/Tablet
         *  If window is size more than  767 lets run this action 
         */
        if ( windowW > 767 ) {
            // If Body height is less than Window height, fix Footer to bottom
            if ( windowH > bodyH ) {
                footer.addClass( 'fixed_footer' );
            }
            else if ( ( bodyH > windowH ) && ( footer.hasClass('fixed_footer') ) ) {
                footer.removeClass( 'fixed_footer' );
            }
        }
        /**
         *  Mobile
         *  If window is size less than  767 lets run this action 
         */
        else if ( ( windowW < 768 ) && ( footer.hasClass('fixed_footer') ) ) {
            footer.removeClass( 'fixed_footer' );
        }
    }