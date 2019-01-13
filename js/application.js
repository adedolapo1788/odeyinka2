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
		

			function validatePDF(objFileControl){
		 	var file = objFileControl.value;
		 	var len = file.length;
		 	var ext = file.slice(len - 4, len);
		 	if(ext.toUpperCase() == ".PDF"){
		   formOK = true;
 }
		 	else{
		   formOK = false;
		   alert("Only PDF files allowed.");
 }
}
		
		var currentTab = 0;
		// console.log(currentTab);
		showTab(currentTab);
		var daveux = 5;
		// var showTab = function(i) {
			function showTab(n) {
				var tabs = $('.tab');
				 var testArr = ['dav', 'eux', 'still'];
				 console.log(testArr);
				 $('.tab').css('display', 'block')
				if (n == 0) {
					document.getElementById('prev_btn').style.display = "none";
				} else {
					document.getElementById('prev_btn').style.display = "inline";
				}
				
				if (n == (tabs.length - 1)) {
					document.getElementById('next_btn').innerHTML = "Submit";
				} else {
					document.getElementById('next_btn').innerHTML = "Next";
				}
				// fixStepIndicator(i);
		}
		 
		//Function tfigure out which tab to display
		// var nextPrev = function(i) {
			function nextPrev(i) {
			// var tbs = document.getElementsByClassName("tab");
			var tbs = $('.tab');
			if (i == 1 && !validateForm()) return false;
			tbs[currentTab].style.display = 'none';
			currentTab = currentTab + i;
			if (currentTab >= tbs.length) {
			    //...the form gets submitted:
			    document.getElementById("memb_form").submit();
			    return false;
			  }
			  // Otherwise, display the correct tab:
			showTab(currentTab);
		}
		$('#prev_btn').one('click', nextPrev(-1));
		$('#next_btn').one('click', nextPrev(1));
		function validateForm() {
		  // This function deals with validation of the form fields
		  var x, y, i, valid = true;
		  x = $("tab");
		  // console.log(x);
		  y = x[currentTab].getElementsByClassName("validate");
		  // console.log(y);
		  // A loop that checks every input field in the current tab:
		  for (i = 0; i < y.length; i++) {
		    // If a field is empty...
		    if (y[i].value == "") {
		      // add an "invalid" class to the field:
		      y[i].className += " invalid";
		      // and set the current valid status to false:
		      valid = false;
		    }
		  }
		  // If the valid status is true, mark the step as finished and valid:
		  if (valid) {
		    document.getElementsByClassName("step")[currentTab].className += " finish";
		  }
		  return valid; // return the valid status
		}
		// function handlePageTwo(){
	
			// var controlPageTwo = document.getElementById('page_two');
			// var nextButton = document.getElementById('button_next');
			// nextButton.onclick = function(){
			// controlPageTwo.style.display = 'flex';
			// controlPageOne.style.display = 'none'
			// }
		// }
