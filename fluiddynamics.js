addEventListener("click", function inletpressure() {
    let positiveHead, specificGravity, res;
    positiveHead = Number(document.formcalc.txtposhead.value);
    specificGravity = Number(document.formcalc.txtspecgrav.value);
    res = positiveHead * specificGravity * .433;
    if (isNaN(res) || res < 0) {
        document.formcalc.txtres.value = "";
        if (isNaN(positiveHead) || positiveHead < 0) {
            positiveHead = Number(document.formcalc.txtposhead.value = "");
        } else if (isNaN(specificGravity) || specificGravity < 0) {
            specificGravity = Number(document.formcalc.txtspecgrav.value = "");
        }
    } else
    document.formcalc.txtres.value = res;
})
// Your code here!
