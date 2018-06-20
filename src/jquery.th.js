'use strict';

jQuery.fn.extend({
    disabled: function() {
        this.attr("disabled", "disabled")
            .css({
                "color": "silver",
                "borderColor": "#D6D6D6"
            });
    }
});
