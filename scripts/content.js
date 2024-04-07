function printTextContent() {
    const elements = document.querySelectorAll('div[aria-label="For you"]');
    if (elements) {
	elements.forEach(element => {
	    element.textContent = 'STOP, YOU SHOULD BE WORKING!';
	    element.classList.add('custom-text')
	});
    }
    else {
	const new_elements = document.querySelectorAll('div[role="button"][aria-haspopup="menu"]');
	if(new_elements) {
	    elements.forEach(new_element => {
		element.textContent = 'STOP, YOU SHOULD BE WORKING!';
	    });
	}
	else {
	    console.log("didn't get elements...")
	}
    }
}


printTextContent()


// Optional: Use an interval to update the text periodically
setInterval(printTextContent, 5000); // Update every 5 seconds 


