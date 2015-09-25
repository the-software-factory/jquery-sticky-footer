/**
 * @param {Object} $ The jQuery library
 */
(function($) {

    /**
     * Defines a jQuery object method called stickyFooter to position a footer at the bottom of the page.
     *
     * @param {string} action Specifies whether to create or destroy the sticky footer. If the action is other than 'destroy'
     * then some styles will be applied to the document so the footer always sticks to the bottom of the page; it's the default behaviour
     * and you can omit the plugin parameter. Otherwise, if the action is 'destroy', the styles applied by the plugin will be reset
     * to their default values and the footer will assume its default befaviour - it will stick to page content
     *
     * @return {selector}
     */
    $.fn.stickyFooter = function(action) {

            return this.each(function() {
                var footer = this;
                var content = $(footer).prev();
                var footerHeight = $(footer).outerHeight(true);

                if (action === 'destroy') {
                    $('html, body').removeClass('sticky-footer');
                    $(content).removeClass('sticky-footer-content');
                    $("body").find("style[data-sticky-footer]").remove();
                }
                else {
                    $('html, body').addClass('sticky-footer');
                    $(content).addClass('sticky-footer-content');

                    // If the plugin was initialized multipe times we want to make sure the footerHeight has the most recent value
                    if ($("body").find("style[data-sticky-footer]").length !== 0) {
                        $("body").find("style[data-sticky-footer]").remove();
                    }

                    // To avoid to include an external css, the css rules are attached via jQuery.
                    $("body").append(
                        '<style data-sticky-footer>' +
                            'body > *:first-child:after {' +
                                'content: "";' +
                                'display: block;' +
                                'height: ' + footerHeight + 'px;' +
                            '}' +
                            'html.sticky-footer, body.sticky-footer {' +
                                'height: 100%' +
                            '}' +
                            '.sticky-footer-content {' +
                                'margin-bottom: -' + footerHeight + 'px;' +
                                'min-height: 100%;' +
                            '}' +
                        '</style>'
                    );
                }
            });
    };
}(jQuery));
