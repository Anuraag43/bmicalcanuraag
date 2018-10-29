

// user inputs
function calculateBMI() {
    let ht1 = document.getElementById("height").value;
    let htUnits = document.getElementById("heightunits").value;
    let wt1 = document.getElementById("weight").value;
    let wtUnits = document.getElementById("weightunits").value;

    let ht = parseFloat(ht1);
    let wt = parseFloat(wt1);


    if (ht1 === "") {
        alert("please enter a value for Height");
    }
    else if (wt1 === "") {
        alert("please enter a value for Weight");
    }

    // conveting to metric units
    if (htUnits == "inches") { ht = ht / 39.3700787; }

    if (wtUnits == "lbs") { wt = wt / 2.20462; }

    //calculation
    fh = ht * ht;
    bmi = (wt / (fh));
    bmi = bmi.toFixed(2);



    //display result
    document.getElementById("output").innerHTML = bmi;

    if (bmi < 18.5) {
        document.getElementById("comment").innerHTML = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25.00) {
        document.getElementById("comment").innerHTML = "Normal";
    }
    else if (bmi >= 25.01 && bmi < 30) {
        document.getElementById("comment").innerHTML = "Overweight";
    }
    else if (bmi >= 30) {
        document.getElementById("comment").innerHTML = "Obese";
    }

    

}
