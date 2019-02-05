// Calculate horsepower
addEventListener("click", function horsepower() {
    let pressure, flow, horsepower;
    pressure = Number(document.formcalc11.txtpress.value);
    flow = Number(document.formcalc11.txtflow.value);
    horsepower = (pressure * flow) / 1714;
    if (isNaN(horsepower) || horsepower < 0) {
        document.formcalc11.txthp.value = "";
        if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc11.txtpress.value = "");
        } else if (isNaN(flow) || flow < 0) {
            flow = Number(document.formcalc11.txtflow.value = "");
        }
     } else {
        document.formcalc11.txthp.value = horsepower;
        }
})

// pump flow
addEventListener("click", function pumpflow() {
    let displacement, flow, rpm;
    displacement = Number(document.formcalc15.txtdisplacement.value);
    rpm = Number(document.formcalc15.txtrpm.value);
    flow = (displacement * rpm)/231
    if (isNaN(flow) || flow < 0) {
        document.formcalc15.txtflow.value = "";
        if (isNaN(displacement) || displacement < 0) {
            displacement = Number(document.formcalc15.txtdisplacement.value = "");
        } else if (isNaN(rpm) || rpm < 0) {
            rpm = Number(document.formcalc15.txtrpm.value = "");
        }
    } else {
        document.formcalc15.txtflow.value = flow;
    }
})