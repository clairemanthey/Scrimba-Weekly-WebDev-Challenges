/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
/* selectors #string, #counterFooter #btn a #txt*/

/*Variables*/
let length = document.getElementById("string");
let btn = document.getElementById("btn");
let count = document.getElementById("counterFooter");
let txt = document.getElementById("txt");
let lnk = document.querySelector("a");

let endLength = (inputLength) => {
	txt.textContent = "";
	btn.classList.remove("buttonDisabled");
	if(inputLength > 350){
		btn.classList.add("buttonDisabled");
		txt.textContent = "Too Many";
		length.style.backgroundColor = "#FCA311";
	}else{
		length.style.backgroundColor = "#B9E8F4";
	}
}
/*event listeners*/

length.addEventListener("keydown", () => {
	count.textContent = `${350-length.textLength}/250`;
	endLength(length.textLength);
})