$(document).ready(function() {
  $.getJSON('countries.json', function(result) {
    // console.log(result);
    $.each(result, function(i, field) {
      if(field.name == "Nigeria") {
        $('#cor').append(`<option value="${field.name}" selected>${field.name}</option`);
      }
      $('#cor').append(`<option value="${field.name}">${field.name}</option`);
    });
  });
  $.getJSON('countries.json', function(data) {
    $.each(data, function(key, value) {
      if(value.name == "Nigeria") {
        $('#country').append(`<option value="${field.name}" selected>${field.name}</option`);
      }
      $('#country').append(`<option value="${value.name}">${value.name}</option>`)
    });
  });
  $.getJSON('countries.json', function(nationale) {
    $.each(nationale, function(k, v) {
      if(v.nationality == "Nigerian") {
        $('#nationality').append(`<option value="${v.nationality}" selected>${v.nationality}</option`);
      }
      $('#nationality').append(`<option value="${v.nationality}">${v.nationality}</option>`)
    });
  });
});






var optionYesDaily = document.getElementById('option_yes_daily');
    var optionNoDaily = document.getElementById('option_no_daily');
    var optionYesPast = document.getElementById('option_yes_past');
    var optionNoPast = document.getElementById('option_no_past');
    var optionYesWelfare = document.getElementById('option_yes_welfare');
    var optionNoWelfare = document.getElementById('option_no_welfare');
    var statmentRow = document.getElementById('statement_row');
    var pastRow = document.getElementById('past_row');
    var welfareRow = document.getElementById('welfare_row');
     var animalRow = document.getElementById('animal_row');
    var formOK = false;
    optionYesDaily.onclick = function(){
      animalRow.style.display = 'flex';
      statmentRow.style.display = 'none';
    }   
    optionNoDaily.onclick = function(){
      animalRow.style.display = 'none';
      statmentRow.style.display = 'block';
    }
    optionYesPast.onclick = function(){
      pastRow.style.display = 'block';
    }   
    optionNoPast.onclick = function(){
      pastRow.style.display = 'none';
    }
    optionYesWelfare.onclick = function(){
      welfareRow.style.display = 'block';
    }   
    optionNoWelfare.onclick = function(){
      welfareRow.style.display = 'none';
    }
    $('#option_no_study').on('click', function() {
      $('#course_row').css('display', 'none')
    });
    $('#option_yes_study').on('click', function() {
      $('#course_row').css('display', 'flex')
    });
$('#nextBtn').on('click', function(){
     $('#first_ptwo').focus();
     $('#first_pthree').focus();
});
$('#prevBtn').on('click', function(){
     $('#first_ptwo').focus();
     $('#first_pthree').focus();
});



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
function showTab(n) {
        // This function will display the specified tab of the form ...
        var x = document.getElementsByClassName("tab");
        // console.log(x);
        x[n].style.display = "block";
        // ... and fix the Previous/Next buttons:
        if (n == 0) {
          document.getElementById("prevBtn").style.display = "none";
        } else {
          document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
          // document.getElementById("nextBtn").innerHTML = "Submit";
           // $('#nextBtn').removeAttr('onclick');
            // $('#nextBtn').attr('type', 'submit');
             // document.getElementById("nextBtn").setAttribute('type', 'submit');
             $('#nextBtn').css('display', 'none');
             $('#subBtn').css('display', 'inline');
             $('#personal_data').css('display', 'block');
         }
        // else if (n == (x.length)) {
        //        $('#nextBtn').attr('type', 'submit');
        //     }
         else {
          document.getElementById("nextBtn").innerHTML = "Next";
           $('#nextBtn').css('display', 'inline');
          $('#subBtn').css('display', 'none');
          $('#personal_data').css('display', 'none');
        }
        // ... and run a function that displays the correct step indicator:
        fixStepIndicator(n)
}

console.log($('.tab'));

function nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !validateForm()) return false;
      // console.log('Baba I don dey run now o');
      // Hide the current tab:
      x[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // if you have reached the end of the form... :
      if (currentTab >= x.length) {
        //...the form gets submitted:
       // document.getElementById("regForm").submit();
        return false;
      }
      // Otherwise, display the correct tab:
      showTab(currentTab);
}

function validateForm() {

      // This function deals with validation of the form fields
       // $('.validate').attr('required', '');
      var x, y, i, valid = true;
      var count = 0;

      var radioValueGender = $("input[name='Gender']:checked").val();
      var radioValueOne = $("input[name='Response to lab animals as part of your current daily work schedule']:checked").val();
      var radioValueTwo = $("input[name='Response to daily work schedule']:checked").val();
      var radioValueThree = $("input[name='Response to welfare training']:checked").val();
      var radioValueFour = $("input[name='Response']:checked").val();
      var radioValueFive = $("input[name='Undertaking Study or Training']:checked").val();
      
      x = document.getElementsByClassName("tab");
      y = x[currentTab].getElementsByClassName("validate");
      console.log(x[currentTab]);
       console.log(y);
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        y[i].setAttribute("required", "");
        if (y[i].value == "") {
          valid = false;
          // y[i].className += ' invalid';
        }
      }
          // CHECK FOR SELECTED RADIO BUTTONS

      if (currentTab == 0) {
        if (!radioValueGender) {
          valid = false;
        }
      }
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
    
    if(!radioValueFive) { 
        valid = false;
      }
    }
    // valid = true;

      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
        $('#nextBtn').attr('type', 'button');
      }
        if (valid == false) {
           $('#nextBtn').attr('type', 'submit');
        }
      

      return valid; // return the valid status


}

//validateForm(); 

function fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("step");
      // console.log(x);
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