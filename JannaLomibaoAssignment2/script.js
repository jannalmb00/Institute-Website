
//function calculate(){
  //var course = document.getElementsByName("course");
  //var total = 0;

  //for(let i = 0; i < course.length; i++){
    //if(course[i].checked){
      //let p = parseInt(course[i].value);
      //total += p;
    //}
  //}

  //var dinnerAdd = document.getElementById("dinnerNight");
  //if(dinnerAdd.checked){
    //total += 30;
  //}

 // var totalDisplay = document.getElementById("totalFee");
  //totalDisplay.value = "$" + total;

//}

function calculate() {
  event.preventDefault();
  var course = document.getElementsByName("course");
  var total = 0;
  var additional = document.getElementById("dinnerNight");
  console.log(total);

  for (let i = 0; i < course.length; i++) {
    if (course[i].checked) {
      let p = parseInt(course[i].value);
      total += p;
    }
  }

  // Add additional cost for dinner night if selected
  if (additional.checked) {
    total += 30;
  }
console.log(total);
  // Display the total in the "totalFee" input field
  document.getElementById("totalFee").innerHTML = "$" +total;
}
