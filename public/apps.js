document.addEventListener("DOMContentLoaded", Event => {
    const app = firebase.app();
    var inputs = document.getElementById("metricswitch");
    inputs.checked = false;   

    //CalculateResults;
});

function CalculateResults() {
    // const db = firebase.firestore();
    // const RatioArray = db.collection('conversions').doc('ratios');
    // RatioArray.get()
    //     .then(doc => {
    //         const data = doc.data();

    // a table of specific gravity values for lye. First entry is 20%
            var sgtable = [1.2296,
                1.2406,
                1.2518,
                1.2629,
                1.2741,
                1.2851,
                1.2962,
                1.3072,
                1.3182,
                1.3292,
                1.3400,
                1.3508,
                1.3614,
                1.3724,
                1.3828,
                1.3932,
                1.4030,
                1.4140,
                1.4242,
                1.4343,
                1.4435,
                1.4545,
                1.4643,
                1.4740,
                1.4825,
                1.4935,
                1.5032,
                1.5128,
                1.5210,
                1.5320,
                1.5400];

            var a = document.getElementById("volume1").value; 
            var b = document.getElementById("lyeconc1").value;
            var c = document.getElementById("superfat1").value; 
            var d = document.getElementById("sapvalue1").value;       
                    
            var naoh_gr = d * 1;
            var h2o_gr = (100 - b) / b * d;
            var lye_gr = naoh_gr + h2o_gr;
           
            var oil_gr = 1 + (c / 100);

            var lye_cc = (lye_gr) / sgtable[ b - 20 ];
            var oil_cc = oil_gr / .92;
            var tot_cc = lye_cc + oil_cc;

            var ratio_met = oil_gr / tot_cc;
            var ratio_imp = ratio_met * .578; 

            var suf2m = " gr/cm3";
            var suf3m = " grams ";            
            var suf2i = " oz/in3";
            var suf3i = " ounces";

            var checkBox = document.getElementById("metricswitch");

            if (checkBox.checked == true){
                document.getElementById("result2").innerHTML = "Ratio of oil weight to volume is ".concat(ratio_imp.toFixed(3),suf2i);
                document.getElementById("result3").innerHTML = (ratio_met * a).toFixed(2) + " " + suf3i + " of oils are required.";
            }    
            else{
                document.getElementById("result2").innerHTML = "Ratio of oil weight to volume is ".concat(ratio_met.toFixed(3),suf2m);
                document.getElementById("result3").innerHTML = (ratio_met * a).toFixed(0) + " " + suf3m + " of oils are required.";
            }    
        }

function switchit() {

  // Get the checkbox
    var checkBox = document.getElementById("metricswitch");
    var units = "(cm.): ";
    var metricswitchdesc = "Switch to Imperial ==>";
    var volume1 = document.getElementById("volume1").value;
    var volume2 = volume1;
    var voldesc = "Volume ";
    // console.log(volume1.value)

  // If the checkbox is checked, display the output text

  if (checkBox.checked == true){
        units = "(cubic inches): ";
        metricswitchdesc = "Switch to Metric ===>";
        volume2 = (volume1 / 16.39).toFixed(2);
    } 
    else {
        units = "(cubic centimetres):";
        metricswitchdesc = "Switch to Imperial ==>";
        volume2 = (volume1 * 16.39).toFixed(0);
    }

    // console.log(volume1.value)

    document.getElementById("volume1").value=volume2;
    document.getElementById("metricswitchdesc").innerHTML=metricswitchdesc;
    document.getElementById("voldesc").innerHTML=voldesc.concat(units);
    
    CalculateResults();
}
