$(function() {
  var $form = $("form");

  $form.on("submit", function(e) {
    e.preventDefault();
    var item = $("#name").val(),
        qty = $("#quantity").val() || 1,
        $ul = $("ul");
    $("p").hide();
    if (item) {
      $ul.append("<li>" + qty + " " + item + "</li>");
      $form[0].reset();
    }
    else {
      $("p").toggle();
    };
  });
});