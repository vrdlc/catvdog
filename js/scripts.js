$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#cat").prepend("<li>Hello!</li>");
    $("ul#dog").append("<li>Well, Hello there.</li>")
  });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Goodbye!</li>");
    $("ul#dog").append("<li>So long!</li>")
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>Stop copying me!</li>");
    $("ul#dog").append("<li>Sorry, imitiation is a form of flattery.</li>")
  });


});
