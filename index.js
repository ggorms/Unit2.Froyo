

const flavanator = () => {
    const userInput = prompt("Enter a list of comma seperated froyo flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
    const froyoFlavors = userInput.split(",")
    const froyoObject = {}
    for (let i = 0; i < froyoFlavors.length; i++){
        if (!froyoObject[froyoFlavors[i]]){
            froyoObject[froyoFlavors[i]] = 1;
        } else if (froyoObject[froyoFlavors[i]]){
            froyoObject[froyoFlavors[i]] ++
        }
    }
    return froyoObject
}



console.log(flavanator())