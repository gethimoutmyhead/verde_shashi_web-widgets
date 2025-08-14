function getCallToActionList(){
	possibleCallsToAction = [
		'request a booking',
		'click to book',
		'book here',
		'book now',
		'book an appointment',
	];
	
	allAs = Array.from(document.querySelectorAll('a'));
	filterAs = allAs.filter(elem => {
		string = elem.innerText.toLowerCase();
		return (possibleCallsToAction.some(elem => elem == string));
	})
	return filterAs;
}

function removeHrefs(DOMList){
	DOMList.forEach(elem => {
		elem.removeAttribute('href')
	})
}

function clickOnPopUp(){
	document.getElementById('he-webplugin-anchor-98018').click();
	gtag('event','clicked_healthlink_weblink', {'link_name':'HealthEngine'});
}

function bookingLinkClicked(){
	gtag('event','clicked_healthlink_popup', {'popup_name':'HealthEngine'});
}

function checkForHEelement(mutationList){
	item = document.getElementById('he-webplugin-anchor-98018');
	if (item){
		item.addEventListener('click',bookingLinkClicked);
	}
}

const observer = new MutationObserver(checkForHEelement);
observer.observe(document, {subtree: true, childList: true})

callToActionList = getCallToActionList();
removeHrefs(callToActionList);

callToActionList.forEach(elem => {
	elem.addEventListener('click', clickOnPopUp)
})