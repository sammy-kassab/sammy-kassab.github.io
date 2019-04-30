$(document).ready(function() {
	const distanceToNextImage = -226;
	let currentImageNumber = 0;
	$("#right").click(function(){
		currentImageNumber++;
		$("#carousel_container").css("left",currentImageNumber*distanceToNextImage+13+"px")
	})
	$("#left").click(function(){
    if (currentImageNumber == 0){

    }else {
		currentImageNumber--;
		$("#carousel_container").css("left",currentImageNumber*distanceToNextImage+13+"px")
  }
	})

  $("#code_button").click(function(){
    let color = $("#code_button").css("background-color")
    let index = $("#code_button").css("z-index")
    let indext = $("#test_button").css("z-index")
    let indexa = $("#about_button").css("z-index")
    if ($("#test_button").css("background-color") == "rgb(255, 233, 46)"){
      $("#test_button").css("background-color", color)
      $("#code_button").css("background-color", "#FFE92E")
      $("#test_button").css("z-index",index)
      $("#code_button").css("z-index",indext)
    }else if ($("#about_button").css("background-color") == "rgb(255, 233, 46)"){
      $("#about_button").css("background-color", color)
      $("#code_button").css("background-color", "rgb(255, 233, 46)")
      $("#about_button").css("z-index",index)
      $("#code_button").css("z-index",indexa)
    }
    $("#text_bank").css("z-index",0)
    $("#about_pg").css("z-index",0)
    $("#code_bank").css("z-index",10)

  })

  $("#about_button").click(function(){
    let color = $("#about_button").css("background-color")
    let index = $("#about_button").css("z-index")
    let indext = $("#test_button").css("z-index")
    let indexc = $("#code_button").css("z-index")
    if ($("#test_button").css("background-color") == "rgb(255, 233, 46)"){
      $("#test_button").css("background-color", color)
      $("#about_button").css("background-color", "#FFE92E")
      $("#test_button").css("z-index",index)
      $("#about_button").css("z-index",indext)
    }else if ($("#code_button").css("background-color") == "rgb(255, 233, 46)"){
      $("#code_button").css("background-color", color)
      $("#about_button").css("background-color", "rgb(255, 233, 46)")
      $("#about_button").css("z-index",indexc)
      $("#code_button").css("z-index",index)
    }
    $("#text_bank").css("z-index",0)
    $("#about_pg").css("z-index",10)
    $("#code_bank").css("z-index",0)

  })

  $("#test_button").click(function(){
    let color = $("#test_button").css("background-color")
    let index = $("#test_button").css("z-index")
    let indexa = $("#about_button").css("z-index")
    let indexc = $("#code_button").css("z-index")
    if ($("#about_button").css("background-color") == "rgb(255, 233, 46)"){
      $("#about_button").css("background-color", color)
      $("#test_button").css("background-color", "#FFE92E")
      $("#about_button").css("z-index",index)
      $("#test_button").css("z-index",indexa)
    }else if ($("#code_button").css("background-color") == "rgb(255, 233, 46)"){
      $("#code_button").css("background-color", color)
      $("#test_button").css("background-color", "rgb(255, 233, 46)")
      $("#test_button").css("z-index",indexc)
      $("#code_button").css("z-index",index)
    }
    $("#text_bank").css("z-index",10)
    $("#about_pg").css("z-index",0)
    $("#code_bank").css("z-index",0)
  })

  $("#matbutton").click(function(){
    $("#r_codes").css("display","none")
    $("#python_codes").css("display","none")
    $("#pybutton").removeClass("active")
    $("#rbutton").removeClass("active")
    $(this).toggleClass("active")
      if ( $("#matbutton").hasClass("active")){
        $("#matlab_codes").css("display","initial")
      }else{
        $("#matlab_codes").css("display","none")
      }
  })
  $("#rbutton").click(function(){
    $("#matlab_codes").css("display","none")
    $("#python_codes").css("display","none")
    $("#pybutton").removeClass("active")
    $("#matbutton").removeClass("active")
    $(this).toggleClass("active")
    if ($("#rbutton").hasClass("active")){
      $("#r_codes").css("display","initial")
    }else{
      $("#r_codes").css("display","none")
    }
  })

  $("#pybutton").click(function(){
    $("#matlab_codes").css("display","none")
    $("#r_codes").css("display","none")
    $("#matbutton").removeClass("active")
    $("#rbutton").removeClass("active")
    $(this).toggleClass("active")
    if ($("#pybutton").hasClass("active")){
      $("#python_codes").css("display","initial")
    }else{
      $("#python_codes").css("display","none")
    }
  })

});


//I found the following chunk of code in w3schools.com... I used the base from that site but I now completely understand how the code works and changed the structure to do more in addition to the variables
function mySearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchbox");
  filter = input.value.toUpperCase();
  ul = document.getElementById("carousel_container");
  ul.style.left = "13px";
  li = ul.getElementsByClassName("test");
  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.getElementsByClassName("test_caption")[0].textContent
    txtYear = a.getElementsByClassName("test_year")[0].textContent
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else if (txtYear.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

 document.getElementById("searchbox").onkeyup = mySearch;
