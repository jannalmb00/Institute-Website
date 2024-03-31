
function calculateClick(){
  var form = document.getElementById("form-register");
  var radioInputs = form.querySelectorAll('input[type="radio"]');
  const n = radioInputs.length;
  var totalFee = 0;

  for(let i = 0 ;i < n; i++){
   // alert(radioInputs[i]);
    if(radioInputs[i].checked){
     // alert(radioInputs[i].value);
      totalFee += parseInt(radioInputs[i].value);
    }
  }
  var dinnerInclu = document.getElementById("dinnerNight");
  if(dinnerInclu.checked){
    //alert(dinnerInclu.value);
    totalFee += 30;
  }
  var totalShow = document.getElementById("totalDisplay");
  //alert(totalShow != null);

  if(totalShow != null){
    totalShow.remove();
  }

  //create an element of label 
  var totalFeeDisplay = document.createElement("input");
  totalFeeDisplay.id = "totalDisplay";
  totalFeeDisplay.name = "totalDisplay";
  totalFeeDisplay.type = "text";
  totalFeeDisplay.setAttribute("value", "$" + totalFee+ ".00");

  //append
  form.appendChild(totalFeeDisplay); 

}