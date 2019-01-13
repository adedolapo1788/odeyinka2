var optionYesDaily = document.getElementById('option_yes_daily');
    var optionNoDaily = document.getElementById('option_no_daily');
    var optionYesPast = document.getElementById('option_yes_past');
    var optionNoPast = document.getElementById('option_no_past');
    var optionYesWelfare = document.getElementById('option_yes_welfare');
    var optionNoWelfare = document.getElementById('option_no_welfare');
    var labelStatement = document.getElementById('label_statement');
    var statmentInterest = document.getElementById('statement_interest');
    var pastRow = document.getElementById('past_row');
    var welfareRow = document.getElementById('welfare_row');
    var formOK = false;
    optionYesDaily.onclick = function(){
      labelStatement.style.display = 'none';
      statmentInterest.style.display = 'none';
    }   
    optionNoDaily.onclick = function(){
      labelStatement.style.display = 'block';
      statmentInterest.style.display = 'block';
    }
    optionYesPast.onclick = function(){
      pastRow.style.display = 'flex';
    }   
    optionNoPast.onclick = function(){
      pastRow.style.display = 'none';
    }
    optionYesWelfare.onclick = function(){
      welfareRow.style.display = 'flex';
    }   
    optionNoWelfare.onclick = function(){
      welfareRow.style.display = 'none';
    }



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    $('#nextBtn').attr('type', 'submit');
    $('#nextBtn').removAttr('onclick');
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
   $('.validate').attr('required', '');
  var x, y, i, valid = true;
  var count = 0;

  var radioValueOne = $("input[name='Response to lab animals as part of your current daily work schedule']:checked").val();
  var radioValueTwo = $("input[name='Response to daily work schedule']:checked").val();
  var radioValueThree = $("input[name='Response to welfare training']:checked").val();
  var radioValueFour = $("input[name='Response']:checked").val();
  
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByClassName("validate");
  // console.log(y);
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      valid = false;
      // y[i].className += ' invalid';
    }
  }
      // CHECK FOR SELECTED RADIO BUTTONS

  if (currentTab == 1) {
   if(!radioValueOne) { 
    valid = false;
  }
  if(!radioValueTwo) { 
    valid = false;
  }
 if(!radioValueThree) { 
    valid = false;
  }
 if(!radioValueFour) { 
    valid = false;
  }
}

  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid; // return the valid status


}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
// function inputRespond() {
// var allInputs = $('input');
// for(var i = 0; i <  )
// if(allInputs.change())

// } 
// $('input').change(function(){
//   $('input').css('border-color', 'green');
// });