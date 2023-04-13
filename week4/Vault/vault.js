// algorithm to find the secret vault code

//To solve this problem, you need to calculate the vault codes by using math arithmitecs and store them in variables

// Step 1 write the message the user will see when they visit the site
var message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Step 2 assign three variables
var code1, code2, code3;

// Step 3 add arithmetic Operators
code1 = 5 + 7;
code2 = 10 - 3;
code3 = 4 * 6;

// Step 4 dialog box script
var dialogBox = "<script>alert('" + message + "\\nCode 1: " + code1 + "\\nCode 2: " + code2 + "\\nCode 3: " + code3 + "');</script>";

// Step 5 write js code to the html document
document.write(dialogBox);

