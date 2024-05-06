function calculatorAge(){
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    var day = today.getDate() - dobDate.getDate();  

    document.getElementById('result').innerText = `Your age is : ${age} year ${monthDiff} mouth ${day} days`
}