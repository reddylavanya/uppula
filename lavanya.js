function myFunction(input) {
    side = input;
    side = document.getElementById("num1").value;
    var area = parseInt(side) * parseInt(side);
    localStorage.getItem('The area of the square is:',area)
    localStorage.getItem('The side of the square:',side)
    alert("area is " + area);
    return area;

}


$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
  
            function verification() {
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  document.getElementById("demo").innerHTML =
                  this.responseText;
                }
              };
              xhttp.open("GET", "webapps_ajax.txt", true);
              xhttp.send();
            }
            