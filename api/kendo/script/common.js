$(function() {
    $("a[href]").click(function(e) {
        window.open("https://docs.telerik.com/kendo-ui/api/javascript/ui/" + $(e.target).attr('href'));
        e.preventDefault();
    });
})
