// // <!-- ========================================== loader start ============================ -->

// var MyLoader;
// function MainFunction() {
//   MyLoader = setTimeout("Test()", 600);
// }

// function Test() {
//   document.getElementById("preloader").style = "display:none !important";
// }
// // <!-- ========================================== loader End ============================== -->

// <!-- ===================================== I Am Website calendar page start =============================== -->

let display = document.querySelector("#display");
let days = document.querySelector("#days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

function calendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let firstDayIndex = firstDay.getDay();
  let numberOfDays = lastDay.getDate();
  let nextDays = new Date(year, month, numberOfDays).getDay();
  display.textContent = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  for (let i = 1; i <= firstDayIndex; i++) {
    const div = document.createElement("div");
    div.textContent += i;
    div.className = "inactive";
    days.appendChild(div);
  }

  for (let j = 1; j <= numberOfDays; j++) {
    let div = document.createElement("div");
    let currDate = new Date(year, month, j);
    div.dataset.date = currDate.toDateString();
    div.textContent += j;
    days.appendChild(div);
    if (
      currDate.getFullYear() === new Date().getFullYear() &&
      currDate.getMonth() === new Date().getMonth() &&
      currDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }
  }

  for (let i = nextDays; i < 6; i++) {
    const div = document.createElement("div");
    div.textContent += i - nextDays + 1;
    div.className = "inactive";
    days.appendChild(div);
  }
}
calendar();

previous.addEventListener("click", () => {
  days.innerHTML = "";
  if (month < 0) {
    month = 11;
    year--;
  }
  month--;
  date.setMonth(month);
  calendar();
});

next.addEventListener("click", () => {
  days.innerHTML = "";
  if (month > 11) {
    month = 0;
    year++;
  }
  month++;
  date.setMonth(month);
  calendar();
});

// <!-- ===================================== I Am Website calendar page End =============================== -->

/* <!-- ===================================== Solution Website SideBar Start ========================================== --> */

$(document).ready(function () {
  $(".smallimage").hover(function () {
    $(".bigimage").attr("src", $(this).attr("src"));
  });
});

$(".sidebar-open-menu-two").click(function () {
  $(".sidebar-open-drop-menu").toggle();
});

$(document).ready(function () {
  $(".menu-open-btn").click(function () {
    $(".sidebar-open-main").css({ transform: "translateX(0px)" });
  });
});

$(document).ready(function () {
  $(".close-btn").click(function () {
    $(".sidebar-open-main").css({ transform: "translateX(-192px)" });
  });
});

/* <!-- ===================================== Solution Website SideBar End ========================================== --> */

// <!-- ================ Redi-form Website Slick Slider start ========================================= -->

$(document).ready(function () {
  $(".show-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".select-img",
  });
  $(".select-img").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".show-img",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });
});

$(".product-d-s").slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// <!-- ================ Redi-form Website Slick Slider End ========================================= -->

// ============================= Contact form validation Start ========================================

$(document).ready(function () {
  $("#formvld").validate({
    rules: {
      name: {
        minlength: 2,
      },
      email: {
        email: true,
      },
      phone: {
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      messages: {
        name: {
          required: "Required input",
          minlength: jQuery.validator.format(
            "Please, at least {2} characters are necessary"
          ),
        },
        email: "please enter your email",
        phone: "please enter your phone",
      },
    },

    submitHandler: function (form) {
      form.submit();
    },
  });
});

// ============================= Contact form validation End ========================================


