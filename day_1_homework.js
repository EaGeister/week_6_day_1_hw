# /*==================Exercise #1 ==========//
# rite a function that takes in the string and the list of dog names, loops through 
# the list and checks that the current name is in the string passed in. The output should be:
# "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
# 
# let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
# let dog_names = ["Max","HAS","PuRple","dog"]
*/


 function findWords(string1, array1){
    for(let x = 0; x < array1.length; x+){  // increments by one
        if(string1.includes(array1[x])){  //if its included then it prints
            console.log("Matched dog_name")
        }else{
            console.log("No Matches")
        }
    }return 'Done'
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names))
//syntactical sauce ? we dont need the semicolons right ?





//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
# and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

    function replaceEvens(replacement){  // naming of function
        for(let i = 0; i < arr.length; i++){    // i = 0 goes up by 1 in index
            ( i % 2 == 0) ? arr.splice(i,1, replacement) : arr[i]}
   // is it divisible by 2 then its even
        return arr
    }
    console.log(replaceEvens('even index'))


// return `name: ${this.name} \n Age: ${this.level} \n Gender: ${this.type}`
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]