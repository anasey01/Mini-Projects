document.getElementById("error").style.visibility = "hidden";
document.getElementById("output").style.visibility = "hidden";
document.getElementById("converterForm").addEventListener("input", ()=> {
    var poundsInput = document.getElementById("poundsInput").value
    //
    if(poundsInput < 0 || poundsInput === ""){
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("output").style.visibility = "hidden";
    }else{
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("output").style.visibility = "visible";
    //Grams Conversion
    var gramsOutput = document.getElementById("gramsOutput");
    //Calculate and convert to 3 decimal places
    gramsOutput = gramsOutput.innerHTML = Number((poundsInput/0.0022046244201838).toFixed(3));

    //Ounce Conversion
    var ounceOutput = document.getElementById("ounceOutput");
    //Calculate 
    ounceOutput = ounceOutput.innerHTML = poundsInput/0.0625;

    //Kilograms Conversion
    var kilogramOutput = document.getElementById("kilogramOutput");
    //Calculate and convert to 3 decimal places
    kilogramOutput = kilogramOutput.innerHTML = Number((poundsInput/2.204624420183777).toFixed(6));
    }
});
