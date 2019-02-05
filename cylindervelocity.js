
/*Function for velocity formulas. Find Q*/
addEventListener("click", function velocityone() {
    let stroke, time;
    stroke = Number(document.formcalc6.txtstroke.value);
    time = Number(document.formcalc6.txttime.value);
    velocity = stroke * (60 / time);
    if (isNaN(velocity) || velocity < 0) {
        document.formcalc6.txtvelocity.value = "";
        if (isNaN(stroke) || stroke < 0) {
            stroke = Number(document.formcalc6.txtstroke.value = "");
        } else if (isNaN(time) || time < 0) {
            time = Number(document.formcalc6.txttime.value = "");
        }
    } else {
        document.formcalc6.txtvelocity.value = velocity;
    }
})

/*Function for velocity given flow and area*/
addEventListener("click", function velocitytwo() {
    let flow, area;
    flow = Number(document.formcalc7.txtflow.value);
    area = Number(document.formcalc7.txtarea.value);
    velocity = (flow * 231) / area;
    if (isNaN(velocity) || velocity < 0) {
        document.formcalc7.txtvelocity.value = "";
        if (isNaN(flow) || flow < 0) {
            flow = Number(document.formcalc7.txtflow.value = "");
        } else if (isNaN(area) || area < 0) {
            area = Number(document.formcalc7.txtarea.value = "");
        }
    } else {
        document.formcalc7.txtvelocity.value = velocity;
    }
})

//Function for flow requirement given cylinder velocity and area(extending)
addEventListener("click", function flowreqext() {
    let velocity,bore, area, flow;
    velocity = Number(document.formcalc9.txtvelocity.value);
    bore = Number(document.formcalc9.txtbore.value);  
    area = bore * bore * .7854;
    flow = (velocity * area) / 231;
    if (isNaN(flow) || flow < 0) {
        document.formcalc9.txtflow.value = "";
        if (isNaN(velocity) || velocity < 0) {
            velocity = Number(document.formcalc9.txtvelocity.value = "");
        } else if (isNaN(bore) || bore < 0) {
            bore = Number(document.formcalc9.txtbore.value = "");
        }
    } else {
        document.formcalc9.txtflow.value = flow;
    }
})
//Function for flow requirement given cylinder velocity and area(retracting)
addEventListener("click", function flowreqret() {
    let velocity, bore, roddia, rodarea, borearea, annarea, flow;
    velocity = Number(document.formcalc10.txtvelocity.value);
    bore = Number(document.formcalc10.txtbore.value);
    roddia = Number(document.formcalc10.txtroddia.value);
    borearea = bore * bore * .7854;
    rodarea = roddia * roddia * .7854;
    annarea = borearea - rodarea;
    flow = (velocity * annarea) / 231;
    if (isNaN(flow) || flow < 0) {
        document.formcalc10.txtflow.value = "";
        if (isNaN(velocity) || velocity < 0) {
            velocity = Number(document.formcalc10.txtvelocity.value = "");
        } else if (isNaN(bore) || bore < 0) {
            bore = Number(document.formcalc10.txtbore.value = "");
        } else if (isNaN(roddia) || roddia < 0) {
            roddia = Number(document.formcalc10.txtroddia.value = "");
        } else if (roddia > bore) {
            bore = Number(document.formcalc10.txtbore.value = "");
            roddia = Number(document.formcalc10.txtroddia.value = "");
        }
    } else {
        document.formcalc10.txtflow.value = flow;
    }
})






