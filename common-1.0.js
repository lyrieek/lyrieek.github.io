(function () {
  
  jQuery.fn.extend({
    info:function () {
      console.log('info begin');
      console.log(this)
      console.log('info end');
    }
  });

})();

$(function () {
  $('#content').click(function () {
    $(this).info();
  })


});
