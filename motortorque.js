// calculate hp given torqe(lbs-ft) and rpm
addEventListener("click", function motorhp1() {
    let torque, rpm, horsepower;
    torque = Number(document.formcalc12.txttorque.value);
    rpm = Number(document.formcalc12.txtrpm.value);
    horsepower = (torque * rpm) / 5252;
    if (isNaN(horsepower) || horsepower < 0) {
        document.formcalc12.txthp.value = "";
        if (isNaN(torque) || torque < 0) {
            torque = Number(document.formcalc12.txttorque.value = "");
        } else if (isNaN(rpm) || rpm < 0) {
            rpm = Number(document.formcalc12.txtrpm.value = "");
        }
    } else {
        document.formcalc12.txthp.value = horsepower;
    }
})

// calculate hp given torqe(lbs-in) and rpm
addEventListener("click", function motorhp2() {
    let torque, rpm, horsepower;
    torque = Number(document.formcalc13.txttorque.value);
    rpm = Number(document.formcalc13.txtrpm.value);
    horsepower = (torque * rpm) / 63025;
    if (isNaN(horsepower) || horsepower < 0) {
        document.formcalc13.txthp.value = "";
        if (isNaN(torque) || torque < 0) {
            torque = Number(document.formcalc13.txttorque.value = "");
        } else if (isNaN(rpm) || rpm < 0) {
            rpm = Number(document.formcalc13.txtrpm.value = "");
        }
    } else {
        document.formcalc13.txthp.value = horsepower;
    }
})

// calculate torque given displacement and pressure
addEventListener("click", function motortorque() {
    let displacement, pressure, torque;
    displacement = Number(document.formcalc14.txtdisplacement.value);
    pressure = Number(document.formcalc14.txtpressure.value);
    torque = (displacement * pressure)/6.28;
    if (isNaN(torque) || torque < 0) {
        document.formcalc14.txttorque.value = "";
        if (isNaN(displacement) || displacement < 0) {
            displacement = Number(document.formcalc14.txtdisplacement.value = "");
        } else if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc14.txtpressure.value = "");
        }
    } else {
        document.formcalc14.txttorque.value = torque;
    }
})