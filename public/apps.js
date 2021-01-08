document.addEventListener("DOMContentLoaded", Event => {
    const app = firebase.app();
    var inputs = document.getElementById("metricswitch");
    inputs.checked = false;   
});

function GoogleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then (result =>{
            const user = result.user;
           /* document.write(`Hello + $user{displayname}`);
           */ 
           console.log(user)
        })
        .catch(console.log)        
}

function GoogleLogout() {
    auth.signout();
}

function CalculateResults() {
    // const db = firebase.firestore();
    // const RatioArray = db.collection('conversions').doc('ratios');
    // RatioArray.get()
    //     .then(doc => {
    //         const data = doc.data();
           
            var matrix = [
                [0.58, 0.58, 0.58, 0.59, 0.59, 0.59, 0.59, 0.60, 0.60, 0.60, 0.60],
                [0.59, 0.59, 0.60, 0.60, 0.60, 0.60, 0.61, 0.61, 0.61, 0.61, 0.61],
                [0.60, 0.61, 0.61, 0.61, 0.61, 0.61, 0.62, 0.62, 0.62, 0.62, 0.63],
                [0.62, 0.62, 0.62, 0.62, 0.62, 0.63, 0.63, 0.63, 0.63, 0.63, 0.64],
                [0.63, 0.63, 0.63, 0.63, 0.63, 0.64, 0.64, 0.64, 0.64, 0.64, 0.65],
                [0.64, 0.64, 0.64, 0.64, 0.64, 0.65, 0.65, 0.65, 0.65, 0.65, 0.66],
                [0.64, 0.65, 0.65, 0.65, 0.65, 0.65, 0.66, 0.66, 0.66, 0.66, 0.66],
                [0.65, 0.66, 0.66, 0.66, 0.66, 0.66, 0.67, 0.67, 0.67, 0.67, 0.67],
                [0.66, 0.66, 0.67, 0.67, 0.67, 0.67, 0.67, 0.68, 0.68, 0.68, 0.68],
                [0.67, 0.67, 0.67, 0.68, 0.68, 0.68, 0.68, 0.68, 0.68, 0.69, 0.69],
                [0.68, 0.68, 0.68, 0.68, 0.68, 0.69, 0.69, 0.69, 0.69, 0.69, 0.70],
                [0.68, 0.69, 0.69, 0.69, 0.69, 0.69, 0.70, 0.70, 0.70, 0.70, 0.70],
                [0.69, 0.69, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.71, 0.71, 0.71],
                [0.70, 0.70, 0.70, 0.70, 0.70, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72],
                [0.70, 0.71, 0.71, 0.71, 0.71, 0.71, 0.71, 0.72, 0.72, 0.72, 0.72],
                [0.71, 0.71, 0.71, 0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.73, 0.73],
                [0.72, 0.72, 0.72, 0.72, 0.72, 0.72, 0.73, 0.73, 0.73, 0.73, 0.73],
                [0.72, 0.72, 0.72, 0.73, 0.73, 0.73, 0.73, 0.73, 0.73, 0.74, 0.74],
                [0.73, 0.73, 0.73, 0.73, 0.73, 0.73, 0.74, 0.74, 0.74, 0.74, 0.74],
                [0.73, 0.73, 0.73, 0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.75, 0.75],
                [0.74, 0.74, 0.74, 0.74, 0.74, 0.74, 0.75, 0.75, 0.75, 0.75, 0.75],
                [0.74, 0.74, 0.74, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.76],
                [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.76, 0.76, 0.76, 0.76],
                [0.75, 0.75, 0.75, 0.75, 0.76, 0.76, 0.76, 0.76, 0.76, 0.76, 0.76],
                [0.75, 0.76, 0.76, 0.76, 0.76, 0.76, 0.76, 0.76, 0.76, 0.77, 0.77],
                [0.76, 0.76, 0.76, 0.76, 0.76, 0.76, 0.77, 0.77, 0.77, 0.77, 0.77],
                [0.76, 0.76, 0.76, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77],
                [0.76, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.78, 0.78, 0.78],
                [0.77, 0.77, 0.77, 0.77, 0.77, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78],
                [0.77, 0.77, 0.77, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78],
                [0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.78, 0.79, 0.79]
              ];
    
            var a = document.getElementById("length1").value;
            var b = document.getElementById("width1").value;
            var c = document.getElementById("height1").value;
            var d = document.getElementById("lyeconc1").value;
            var e = document.getElementById("superfat1").value; 
            
            var voln = (a * b  * c) ;
            var ration = matrix[d-20][e];        
                    
            var checkBox = document.getElementById("metricswitch");
            if (checkBox.checked == true){
                var suf1 = " ci.";
                var suf2 = " oz/ci.";
                var ration = ration * .578;
                var oilgrn = ration * voln;
                var suf3 = " ounces ";
            }
            else{      
                var suf1 = " cm3.";
                var suf2 = " gr/cm3.";
                var suf3 = " grams ";
                var oilgrn = ration * voln;
            }

            document.getElementById("result1").innerHTML = "Soap mold volume is ".concat(voln.toFixed(2) ,suf1);
            document.getElementById("result2").innerHTML = "Ratio of oil weight to volume is ".concat(ration.toFixed(2),suf2);

            var checkBox = document.getElementById("metricswitch");
            if (checkBox.checked == true){
                document.getElementById("result3").innerHTML = oilgrn.toFixed(2).concat(suf3," of oils are required.");    
            }    
            else{
                document.getElementById("result3").innerHTML = oilgrn.toFixed(0).concat(suf3," of oils are required.");
            }    
            
        }

function switchit() {

  // Get the checkbox
    var checkBox = document.getElementById("metricswitch");
    var lendesc = "Length ";
    var widthdesc = "Width ";
    var heightdesc = "Height ";
    var units = "(cm.): ";
    var metricswitchdesc = "Switch to Imperial ==>";
    var length1n = document.getElementById("length1").value;
    var width1n = document.getElementById("width1").value;
    var height1n = document.getElementById("height1").value;
    // console.log(length1n.value)


  // If the checkbox is checked, display the output text

  if (checkBox.checked == true){
        units = "(in.): ";
        metricswitchdesc = "Switch to Metric ===>";
        length1n = length1n / 2.54;
        width1n = width1n / 2.54;
        height1n = height1n / 2.54;
    } 
    else {
        units = "(cm.):";
        metricswitchdesc = "Switch to Imperial ==>";
        length1n = length1n * 2.54;
        width1n = width1n * 2.54;
        height1n = height1n * 2.54;
    }

    // console.log(length1n.value)

    document.getElementById("length1").value=length1n.toFixed(3);
    document.getElementById("width1").value=width1n.toFixed(3);
    document.getElementById("height1").value=height1n.toFixed(3);

    document.getElementById("metricswitchdesc").innerHTML=metricswitchdesc;
    document.getElementById("lendesc").innerHTML=lendesc.concat(units);
    document.getElementById("widthdesc").innerHTML=widthdesc.concat(units);
    document.getElementById("heightdesc").innerHTML=heightdesc.concat(units);

    CalculateResults();
}
