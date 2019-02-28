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
            window.addEventListener('load', (event) => {
              console.log('  Starting initialization ')
              if (localStorage.getItem('guest')) {
                document.getElementById('guest').value = localStorage.getItem('guest')
                console.log(`  Stored guest = ${localStorage.guest}`)
              }
              if (localStorage.getItem('number1')) {
                document.getElementById('firstNumber').value = parseInt(localStorage.number1)
                console.log(`  Stored num1 = ${localStorage.number1}`)
              }
              if (localStorage.getItem('number2')) {
                document.getElementById('secondNumber').value = parseInt(localStorage.number2)
                console.log(`  Stored num2 = ${localStorage.number2}`)
              }
              console.log('  Finished initialization')
            })
            document.getElementById('clicker').addEventListener('click', () => {
              console.log('  Starting clicker click handler')
              const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
              const s = document.getElementById('guest').value
              console.log('s=' + s)
              const i = parseInt(document.getElementById('firstNumber').value)
              console.log('i=' + i)
              const j = parseInt(document.getElementById('secondNumber').value)
              console.log('j=' + j)
              const ct = origCount + 1
              const ans = s + ', your sum is ' + add(i, j) + '. This has been run ' + ct + ' times.'
              document.getElementById('result').innerHTML = ans
              localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
              localStorage.setItem('guest', s)
              localStorage.setItem('number1', i)
              localStorage.setItem('number2', j)
              console.log('  Finished clicker click handler')
            })
            document.getElementById('wiper').addEventListener('click', () => {
              console.log('  Starting wiper click handler')
              localStorage.removeItem('countOfClicks')
              localStorage.removeItem('guest')
              localStorage.removeItem('number1')
              localStorage.removeItem('number2')
              console.log('  Finished wiper click handler - localStorage entries removed')
            })
            console.log('SCRIPT END')
            
