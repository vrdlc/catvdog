$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").append("<li>Woof!</li>");

    $("li").click(function() {
      $("img#catpic").slideDown();
    });
    $("img#catpic").click(function() {
      $(this).toggle();
      // body...
    });
  });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Meow Meow</li>");
    $("ul#dog").append("<li>Bark bark bark!</li>");

    $("li").click(function() {
      $("img#dogpic").slideDown();
    });
    $("img#dogpic").click(function() {
      $(this).toggle();
      // body...
    });

  });

  // $("button#stop").click(function() {
  //   $("ul#cat").prepend("<li>Stop copying me!</li>");
  //   $("ul#dog").append("<li>Sorry, imitiation is a form of flattery.</li>")
  // });


});
