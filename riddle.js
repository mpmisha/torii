const result =[];

function printAllKLength(set,k){
        let n = set.length;
        printAllKLengthRec(set, "", n, k);
}
     
// The main recursive method
// to print all possible
// strings of length k
function printAllKLengthRec(set,prefix,n,k){
    // Base case: k is 0,
    // print prefix
    if (k == 0)
    {
        result.push(prefix);
        return;
    }
    
    // One by one add all characters
    // from set and recursively
    // call for k equals to k-1
    for (let i = 0; i < n; ++i)
    {
    
        // Next character of input added
        let newPrefix = prefix + set[i];
            
        // k is decreased, because
        // we have added a new character
        printAllKLengthRec(set, newPrefix,
                                n, k - 1);
    }
}

function getAllString(dictionary,length){
    printAllKLength(dictionary,length);
    return result;

}

// generate dictionary
const alphabet = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alphabet.map((x) => String.fromCharCode(x));
// const lower = alphabet.map((x) => String.fromCharCode(x).toLowerCase());
// const dict = upper.concat(lower);

const allString = getAllString(upper,6);
console.log(allString.length);



