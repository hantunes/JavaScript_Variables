import "./styles.css";


// declare the variables
var x = 5;
var y = 6;

// Add the two variables
var z = x + y;

document.getElementById("app").innerHTML = `
<h1>JavaScript Variables!</h1>
<div>
 The result of z (x+y) is: ${z}
</div>
`;
