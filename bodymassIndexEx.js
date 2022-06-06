function calculateBMI() {
	var kg = Number(document.getElementById("weight").value);
	
	var cm = Number(document.getElementById("height").value);
	
	var bmi = kg / (cm/100.0 * cm/100.0);
	
	if (bmi <= 18.4 ) {
		answr = " (Weight less than normal weight)";
	} else if(bmi >= 25.0){ 
		answr = " (Overweight)";
	} else { 
		answr = " (Normal weight)";
	}
	document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + bmi.toFixed(2) + answr;


		
}