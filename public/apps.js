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

            var sgtable = [1.2079,
                1.2187,
                1.2296,
                1.2404,
                1.2512,
                1.2620,
                1.2727,
                1.2835,
                1.2942,
                1.3047,
                1.3152,
                1.3257,
                1.3362,
                1.3464,
                1.3565,
                1.3667,
                1.3768,
                1.3867,
                1.3966,
                1.4065,
                1.4164,
                1.4259,
                1.4355,
                1.4450,
                1.4545,
                1.4639,
                1.4734,
                1.4828,
                1.4922,
                1.5016,
                1.5109];

            var a = document.getElementById("volume1").value; 
            var b = document.getElementById("lyeconc1").value;
            var c = document.getElementById("superfat1").value; 
            var d = document.getElementById("sapvalue1").value; 
            
            // var voln = (a * b  * c) ;
            // var ration = sgtable[d-20];        
                    
            var naoh_gr = d * 1;
            var h2o_gr = (100 - b) / b * d;
            var lye_gr = naoh_gr + h2o_gr;
           
            var oil_gr = 1 + (c / 100);

            var lye_cc = (lye_gr) / sgtable[ b - 20 ];
            var oil_cc = oil_gr / .92;
            var tot_cc = lye_cc + oil_cc;

            var ratio_met = oil_gr / tot_cc;
            var ratio_imp = ratio_met * .578; 

            var suf1m = " cm3.";
            var suf2m = " gr/cm3";
            var suf3m = " grams ";
            var suf1i = " in3.";
            var suf2i = " oz/in3";
            var suf3i = " ounces";

            var checkBox = document.getElementById("metricswitch");

            if (checkBox.checked == true){
                document.getElementById("result2").innerHTML = "Ratio of oil weight to volume is ".concat(ratio_imp.toFixed(3),suf2i);
                document.getElementById("result3").innerHTML = (ratio_met * a).toFixed(0) + " " + suf3i + " of oils are required.";
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
    var voldesc = "Volume ";
    // console.log(volume1.value)

  // If the checkbox is checked, display the output text

  if (checkBox.checked == true){
        units = "(cubic inches): ";
        metricswitchdesc = "Switch to Metric ===>";
        volume1 = volume1 / 16.388;
        
    } 
    else {
        units = "(cubic centimetres):";
        metricswitchdesc = "Switch to Imperial ==>";
        volume1 = volume1 * 16.388;
       
    }

    // console.log(length1n.value)

    document.getElementById("volume1").value=volume1.toFixed(2);
    document.getElementById("metricswitchdesc").innerHTML=metricswitchdesc;
    document.getElementById("voldesc").innerHTML=voldesc.concat(units);
    
    CalculateResults();
}
