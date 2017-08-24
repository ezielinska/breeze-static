(function($) {

    function _featuresList() {

        var toggledClass = 'single-feature__list--active';
        var $singleFeature = $(".single-feature__list");

        $singleFeature.hover(function() {
            $(this).addClass(toggledClass);
        }, function() {
            $(this).removeClass(toggledClass);
        });
    }

    function _handleHeaderClass() {

        var toggledClass = 'site-header--scrolled';
        var $siteHeader = $('.site-header');

        if ($(window).scrollTop() > 50) {
            $siteHeader.addClass(toggledClass);
        } else {
            $siteHeader.removeClass(toggledClass);
        }
    }

    function _showAllRates() {

        var $showAllRatesBtn = $(".js-show-all-rates");
        var $hiddenRatesContainer = $(".js-hidden-rates");

        $showAllRatesBtn.click(function() {

            if ($hiddenRatesContainer.hasClass('visible')) {

                $hiddenRatesContainer.removeClass('visible')
                $hiddenRatesContainer.slideToggle()
                $showAllRatesBtn.text('View All')
            } else {

                $hiddenRatesContainer.addClass('visible')
                $hiddenRatesContainer.slideToggle()
                $showAllRatesBtn.text('Hide')
            }
        });
    }



    $(document).ready(function() {

        _handleHeaderClass();
        _featuresList();
        _showAllRates();
    });

    $(window).scroll(function() {

        _handleHeaderClass();
    });
}(jQuery))