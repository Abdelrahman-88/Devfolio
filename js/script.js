"use strict";

let counter = 0;
let secOffcet = $("#sec1").offset().top;
let secOffcet3 = $("#sec3").offset().top;
let link = Array.from(document.querySelectorAll(".nav-link[href^='#']"))

// loading

$(document).ready(function () {
  $(".sk-cube-grid").fadeOut(500, function () {
    $("#loading").fadeOut(500, function () {
      $("body").css("overflow-y", "auto");
      $("#loading").remove();
    });
  });
});

// navbar

$(".nav-item-bord").eq(0).css("width", `${80}%`);
$(window).scroll(function () {
  let currentOffcet = $(window).scrollTop();

  if (currentOffcet > secOffcet) {
    $(".topBtn").fadeIn(500);
  }
  else {
    $(".topBtn").fadeOut(500);
  }

  if (currentOffcet > secOffcet3 + 1100 && currentOffcet < secOffcet3 + 1200) {
    setNumbers();
  }

  if (currentOffcet > secOffcet + 50) {
    $(".navbar").css({ "background-color": "rgba(0, 0, 0, 0.9)" }).removeClass("py-3").addClass("py-2");
  }
  else {
    $(".navbar").css({ "background-color": "transparent" }).removeClass("py-2").addClass("py-3");
  }

  for (let i = 0; i < link.length; i++) {
    if (currentOffcet >= $($(link[i]).attr("href")).offset().top && currentOffcet <= $($(link[i < 5 ? i + 1 : i = 5]).attr("href")).offset().top) {
      $(".nav-item-bord").eq(i).css("width", `${80}%`);
    }
    else if (currentOffcet > $($(link[5]).attr("href")).offset().top) {
      $(".nav-item-bord").eq(5).css("width", `${80}%`);
      $(".nav-item-bord").eq(4).css("width", `${0}%`);
    }
    else {
      $(".nav-item-bord").eq(i).css("width", `${0}%`);
    }
  }
});

for (let i = 0; i < link.length; i++) {
  $(link).eq(i).hover(function () {
    $(".nav-item-bord").eq(i).css("width", `${80}%`);
  }
    , function () {
      $(".nav-item-bord").eq(i).css("width", `${0}%`);
    }
  );
}

$(".nav-link[href^='#']").click(function (e) {
  let currentSecOffcet = $($(e.target).attr("href")).offset().top;
  $("html,body").animate({ scrollTop: currentSecOffcet + 1 }, 1500)
});

$(".sec7-btn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1500)
});


$(".dropdown1").click(function () {
  $(".dropdown-menu1").slideToggle(500);
  $(".dropdown-menu2").slideUp(500);
});
$(".dropdown2").click(function () {
  $(".dropdown-menu2").slideToggle(500);
});



// sec1

let typed = new Typed('.typed', {
  stringsElement: '.sec1-text-typed',
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
});

// sec2

let progressBar = Array.from(document.querySelectorAll(".progress-bar"));
let progressNumber = Array.from(document.querySelectorAll(".progressNumber"));

for (let i = 0; i < progressBar.length; i++) {

  function setWidth() {
    counter++;
    if (counter < $(progressBar[i]).attr("aria-valuenow")) {
      $(progressBar[i]).css("width", counter);
      $(progressNumber[i]).html(counter);
      setTimeout(setWidth, 800);
    }
    else {
      $(progressBar[i]).css("width", `${$(progressBar[i]).attr("aria-valuenow")}%`);
      $(progressNumber[i]).html($(progressBar[i]).attr("aria-valuenow"));
    }
  }
  setWidth();
}

// sec3

function setNumbers() {
  let counterNumber = Array.from(document.querySelectorAll(".counter"));
  counter = 0
  for (let i = 0; i < counterNumber.length; i++) {

    function setCounter() {

      counter++;

      if (counter < $(counterNumber[i]).attr("data-target")) {
        $(counterNumber[i]).html(counter);
        setTimeout(setCounter, 1);
      }
      else {
        $(counterNumber[i]).html($(counterNumber[i]).attr("data-target"));
      }
    }

    setCounter();
  }
}
setNumbers();

// sec4

let imgItem = Array.from(document.querySelectorAll(".sec4-img-item img"));
let imgIndex;
let imgSrc;

for (let i = 0; i < imgItem.length; i++) {
  $(imgItem).click(function (e) {
    imgIndex = imgItem.indexOf(e.target);
    imgSrc = $(e.target).attr("src");
    $(".layerimg").attr("src", imgSrc);
    $(".layerSection").fadeIn(500);
    $("body").css("overflow-y", "hidden");
  });
}

$(".fa-times").click(function () {
  close();
});

$(".fa-arrow-right").click(function () {
  right();
})

$(".fa-arrow-left").click(function () {
  left();
})

$(document).keydown(function (e) {
  if (e.key == "Escape") {
    close();
  }
  if (e.key == "ArrowRight") {
    right();
  }
  if (e.key == "ArrowLeft") {
    left();
  }
});

function close() {
  $(".layerSection").fadeOut(500);
  $("body").css("overflow-y", "auto");
}

function left() {
  if (imgIndex > 0) {
    imgIndex--;
  }
  else {
    imgIndex = 5;
  }
  $(".layerContainer").fadeOut(500, function () {
    imgSrc = $(imgItem[imgIndex]).attr("src");
    $(".layerimg").attr("src", imgSrc);
    $(".layerContainer").fadeIn(500);
  });
}

function right() {
  if (imgIndex < 5) {
    imgIndex++;
  }
  else {
    imgIndex = 0;
  }
  $(".layerContainer").fadeOut(500, function () {
    imgSrc = $(imgItem[imgIndex]).attr("src");
    $(".layerimg").attr("src", imgSrc);
    $(".layerContainer").fadeIn(500);
  });
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel(
    { items: 1, loop: true, autoplay: true, autoplaySpeed: 1000, dotsSpeed: 1000 }
  );
});

