// $(document).ready(function () {
//     $(".hide").click(function () {
//         console.log("DONE CMP");
//       $(".hide img").hide();
//       $(".map iframe").show();
//     });
//   });

//   document.write("Hello World!");

  // alert("Hello World!");

  jQuery(document).ready(function($){
    $(".work-process__inner_video img").click(function () {
      
  // alert("Hello World!");
      $(".work-process__inner_video img").hide();
      $(".work-process__inner_video iframe").show();
    });
  });
  
  // Add active class to the current button (highlight it)

  console.log(header);
console.log(menu);

var header = document.getElementsByClassName("wp-block-navigation__container")[0];
var menu = header.getElementsByClassName("menu")[0];

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    var current = header.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    console.log("done active class");
  });
}