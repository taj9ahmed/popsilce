function think()
{
    //first break down the input
    var pops,chld,decission;
    var input = document.getElementById("input").value;
    console.log(input);
    let temp = input.split(" ");

    pops = temp[1];
    chld = temp[0];
    console.log(pops);
    console.log(chld);
    if(pops%chld == 0)
        decission = "distribute";
    else
        decission = "keep to self";
console.log(decission);
    document.getElementById("decission").innerHTML = decission;

}