$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").children("li").click(function() {
      $("img#catpic").slideDown();
    });
  });

    $("img#catpic").click(function() {
      $("img#catpic").toggle();
    });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Meow Meow</li>");
    $("ul#dog").prepend("<li>Bark bark bark!</li>");

    $("ul#dog").children("li").click(function() {
      $("img#dogpic").slideDown();
    });
    $("img#dogpic").click(function() {
      $("img#dogpic").toggle();
      // body...
    });

  });

  // $("button#stop").click(function() {
  //   $("ul#cat").prepend("<li>Stop copying me!</li>");
  //   $("ul#dog").append("<li>Sorry, imitiation is a form of flattery.</li>")
  // });


});
