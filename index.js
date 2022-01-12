document.getElementById('subb').onclick = () => {
    
    // var def and slicer for input
    let prod = [...document.getElementById('inpbox').value];
    var vowelCount = 0;
    var consonantCount = 0;

    // function to count the vowels and consonants
    function counter(i) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'){
            vowelCount += 1;
        }
        else{
            consonantCount += 1;
        }
    }

    // runs the counter function for each element
    prod.forEach(counter);
    // display the result in the second box
    document.getElementById('res').value = 
    `There are ${vowelCount} vowels and ${consonantCount} consonants.`;
}
