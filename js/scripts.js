$(document).ready(function() {
  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>Meow.</li>");

  });

  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>Meow</li>");
    $("ul#cat").prepend("<li>WOOF!</li>");

  });

    $("p").click(function() {
      $(".animal-showing").toggle();
      $(".animal-hidden").toggle();

  });
});
