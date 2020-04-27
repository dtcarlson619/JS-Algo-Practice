const words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"]
];

function wordCombos(arr) {
    combinations = [];
    for(var i = 0; i < arr[0].length; i++){
        for(var y = 0; y < arr[1].length; y++){
            for(var z = 0; z < arr[2].length; z++){
                combinations.push(arr[0][i] + " " + arr[1][y] + " " + arr[2][z])
            }
        }
    }
    return combinations
}

console.log(wordCombos(words));