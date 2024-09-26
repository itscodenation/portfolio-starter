/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(".home-page").click(function() {
  window.location.href = "index.html";
});

$(".about-page").click(function() {
  window.location.href = "about.html";
});

$(".projects-page").click(function() {
  window.location.href = "projects.html";
});

$(".contact-page").click(function() {
  window.location.href = "contact.html";
});

$(".home-page").hover(
  function() {
    $(".home-page").css("color", "blue");
  },
  function() {
    $(".home-page").css("color", "black");
  }
);

$(".about-page").hover(
  function() {
    $(".about-page").css("color", "blue");
  },
  function() {
    $(".about-page").css("color", "black");
  }
);

$(".projects-page").hover(
  function() {
    $(".projects-page").css("color", "blue");
  },
  function() {
    $(".projects-page").css("color", "black");
  }
);

$(".contact-page").hover(
  function() {
    $(".contact-page").css("color", "blue");
  },
  function() {
    $(".contact-page").css("color", "black");
  }
);
