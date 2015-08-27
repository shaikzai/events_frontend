/* detect viewport width - requires response.min.js to be run first */
var ww = Response.viewportW();


/* --------------------------------- FOLK Main  navigation -------- */

// Rules for resize & orientation change
$(window).bind('resize orientationchange', function () {
    ww = Response.viewportW();
    adjustMenu();
});

var adjustMenu = function () {
    if (ww < 768) {
        // Rules for mobile menu here
        $(".toggleMenu").css("display", "inline-block");
    }
    else if (ww >= 768) {
        // rules for desktop/tablets here. 

        $(".toggleMenu").css("display", "none");
        $(".campaignNav").show();
    }
}

adjustMenu();

$(document).ready(function () {

    $(".toggleMenu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".campaignNav").toggle();
    });


});

   



    $(document).ready(function () {




        /* Tooltips on form page */

        if ($('.helptext').length > 0) {
            $('.helptext').tooltip({
                placement: 'bottom'
            });
        }

        // Custom form elements 
        $(function () {
            var form = $('form');

            if (!form.hasClass('custom-form-active')) {
                form.addClass('custom-form-active').customForm();
            }
        });

        // open content drawer / bootstrap tab: scroll to content

        $('.eventsContainer, .fundcontainer').on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
            //$('.fundcontainer a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 55
            }, 500);
            return false;
        });


        // close content drawer: scroll back to link when drawer / bootstrap tab is closed.
        $('.fundcontainer, .eventsContainer').on('click', '.closeDrawer', function (e) {
            $(this).parent().removeClass("active");
            e.preventDefault();
            var tabid = $(this).closest("div").attr("id");
            var target = $("a[href=#" + tabid + "]");
            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 300);
            return false;
        });


        jQuery(function ($) {
            $.datepicker.regional['fi'] = {
                closeText: 'Sulje',
                prevText: '&laquo;Edellinen',
                nextText: 'Seuraava&raquo;',
                currentText: 'T&auml;n&auml;&auml;n',
                monthNames: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kes&auml;kuu', 'Hein&auml;kuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
                monthNamesShort: ['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kes&auml;',
                  'Hein&auml;', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu'],
                dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'Su'],
                dayNames: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
                dayNamesMin: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
                weekHeader: 'Vk',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['fi']);
        });
        $(function () {
            $(".fundcontainer #startDate").datepicker({
                //  dateFormat: 'dd.mm.yy'
            });
            $(".fundcontainer #endDate").datepicker({
                //    dateFormat: 'dd.mm.yy'
            });

        });

        // Voting from thumbnails
        $(".eventsContainer, .tab-content, .singleEvent").on("click", ".voteEvent", function (e) {
            e.preventDefault();

            var voteUrl = $(this).attr("href");
            var link = this;

            $.get(voteUrl, function (r) {
                var response = $('<html />').html(r);
                var a = response.find(".giveThumb");
                $(link).parent(".giveThumb").replaceWith(a);
            });

            return false;
        });

        $(".eventsContainer, .selectedEvents").on("click", ".event>a", function (e) {
            var eventUrl = $(this).attr("data-href") + "EventLayer";
            var targetLayer = $(this).attr("href");

            $.get(eventUrl, function (r) {
                $(targetLayer + " .tab-event-content").empty();
                $(targetLayer + " .tab-event-content").html(r);
                addthis.toolbox('.layerAddThis');
            });
        });


    })
