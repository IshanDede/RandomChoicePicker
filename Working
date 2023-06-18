# RandomChoicePicker
A Javascript based project that takes input from user in the form of multiple values and selects a random choice.

Working of JS :

# EventListener
Added event listener to the textarea
on keypressup, the value of the textarea is stored in a variable.

#createInput function 
It takes the value,sepeartes the string into substrings by seperating on basis of commas
and trimming spaces and filtering out empty substrings. 
Then for each substring, a new span element is created within the "choices" div and assigned a class "choice" that has predefined css 
These span elements are appended to the choices div.
When we press ENTER , the textarea is cleared out and randomSelect function is called which calls the randomChoice function.

#randomChoice function
In this function, all the elements with the class of "choice" are selected and put in an array. 
The length of the array is used with math.random function to create a random number that will represent the index of the array.

#randomSelect function 
This random element is then returned to the randomSelect function, 
where it is passed as an argument to the addHighlight and removeHighlight functions.
The highlighting process continues for specified amount of time (30(times)*100ms) before stopping on a random element
and permanently highlighting it.
