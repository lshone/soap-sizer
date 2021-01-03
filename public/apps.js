document.addEventListener("DOMContentLoaded", Event => {
    const app = firebase.app();
 
    
    console.log(app)
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
    
            
            var a = document.getElementById("Length1").value;
            var b = document.getElementById("Width1").value;
            var c = document.getElementById("Height1").value;
            var d = document.getElementById("LyeConc1").value;
            var e = document.getElementById("Superfat1").value; 
            
            var voln = (a * b  * c) ;
            var ration = matrix[d-20][e];        
            var oilgrn = ration * voln;
            
            console.log(ration);

            document.getElementById("result1").innerHTML = "Soap mold volume is ".concat(voln.toFixed(2) ," cm3");
            document.getElementById("result2").innerHTML = "Ratio of oil weight to volume is ".concat(ration.toFixed(2)," gr/cm3");
            document.getElementById("result3").innerHTML = oilgrn.toFixed(0).concat(" grams of oil is required");

        }




