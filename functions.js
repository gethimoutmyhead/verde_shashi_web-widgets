callToActionList = document.querySelectorAll('.Click2Book');

callToActionList.forEach(elem => {
	elem.addEventListener('click', clickOnPopUp)
})

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