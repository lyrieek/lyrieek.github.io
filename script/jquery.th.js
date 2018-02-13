'use strict';

jQuery.fn.extend({
    getValue: function() {
        var handler = this.data().handler;
        if (!handler) {
            if (this[0] && this[0].tagName === 'INPUT') {
                return this.val();
            }
            return this.text();
        }
        return _.filter(this.data(), function(i, e) {
            if (e.startsWith('kendo')) return true;
        })[0].value();
    },
    clear: function() {
        this.val('').text('');
        var handler = _.filter(this.data(), function(i, e) {
            if (e.startsWith('kendo')) return true;
        })[0];
        if (handler) {
            handler.value('');
        }
    },
    disabled: function() {
        this.attr("disabled", "disabled")
            .css({
                "color": "gray",
                "borderColor": "#D6D6D6"
            });
    }
});
