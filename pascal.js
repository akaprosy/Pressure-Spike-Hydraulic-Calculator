
/*Function for calculating Force*/
addEventListener("click", function force() {
    let area, pressure, force;
    area = Number(document.formcalc2.txtarea.value);  
    pressure = Number(document.formcalc2.txtpress.value);    
    force = area * pressure;
    if (isNaN(force) || force < 0) {
        document.formcalc2.txtforce.value = "";        
        if (isNaN(area) || area < 0) {
            area = Number(document.formcalc2.txtarea.value = "");            
        } else if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc2.txtpress.value = "");            
        }
    } else {
        document.formcalc2.txtforce.value = force;
    }
})

/*Function for calculating Pressure*/
addEventListener("click", function pressure() {
    let area, pressure, force;
    area = Number(document.formcalc3.txtarea.value);
    force = Number(document.formcalc3.txtforce.value);
    pressure = force / area;  
    if (isNaN(pressure) || pressure < 0) {
        document.formcalc3.txtpress.value = "";
        if (isNaN(area) || area < 0) {
            area = Number(document.formcalc3.txtarea.value = "");
        } else if (isNaN(force) || force < 0) {
            force = Number(document.formcalc3.txtforce.value = "");
        }
    } else {
        document.formcalc3.txtpress.value = pressure;
    }
})
/*Function for calculating area*/
addEventListener("click", function area() {
    let area, pressure, force;
    pressure = Number(document.formcalc4.txtpress.value);
    force = Number(document.formcalc4.txtforce.value);
    area = force / pressure;
    if (isNaN(area) || area < 0) {
        document.formcalc4.txtarea.value = "";
        if (isNaN(pressure) || pressure < 0) {
            pressure = Number(document.formcalc4.txtpress.value = "");
        } else if (isNaN(force) || force < 0) {
            force = Number(document.formcalc4.txtforce.value = "");
        }
    } else {
        document.formcalc4.txtarea.value = area;
    }
})
/*Function for calculating area of a cylinder*/
addEventListener("click", function areacyl() {
    let diameter, area;
    diameter = Number(document.formcalc5.txtdia.value);
    area = diameter * diameter * .7854;
    if (isNaN(area) || area < 0) {
        document.formcalc5.txtarea.value = "";
        if (isNaN(diameter) || diameter < 0) {
            diameter = Number(document.formcalc5.txtdia.value = '');
        }
    } else {
        document.formcalc5.txtarea.value = area;
    }
})
/*Function for calculating annular area*/
addEventListener("click", function annareacyl() {
    let borediameter, borearea, roddiameter, rodarea, annulararea;
    borediameter = Number(document.formcalc8.txtboredia.value);
    borearea = borediameter * borediameter * .7854;
    roddiameter = Number(document.formcalc8.txtroddia.value);
    rodarea = roddiameter * roddiameter * .7854;
    annulararea = borearea - rodarea;
    if (isNaN(annulararea) || annulararea < 0) {
        document.formcalc8.txtannarea.value = "";
        if (isNaN(borediameter) || borediameter < 0) {
            borediameter = Number(document.formcalc8.txtboredia.value = "");
        } else if (isNaN(roddiameter) || roddiameter < 0) {
            roddiameter = Number(document.formcalc8.txtroddia.value = "");
        } else if (roddiameter >= borediameter) {
            borediameter = Number(document.formcalc8.txtboredia.value = "");
            roddiameter = Number(document.formcalc8.txtroddia.value = "");
        } else if (borearea == rodarea) {
            document.formcalc8.txtannarea.value = "recheck bore and rod size";
        }
    } else {
            document.formcalc8.txtannarea.value = annulararea;
        }
})