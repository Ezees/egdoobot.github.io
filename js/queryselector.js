



let images = ['https://images.3138722.com/wsd-images-prod/bet31f2/merchant_resource/appdownloadicon/wps_bet31f2_app_20231219143408.png', 'https://gwfd.qatgwawm.net/system-requirement/Web.Mobile/WK693-01.Mobile/Content/Views/Shared/images/logo.png', 'https://images.11029984.com/wsd-images-prod/phmayaf3/merchant_resource/appdownloadicon/wps_152_20240317143741.png','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHWNM28vYXUmyiMy4H6fCcyj_Y39uweEh-gyCOilX9gme0SCGxrm2tAi33saEDAC21XW_jXk883bZ7BgiYOwT_X5d66dsHEvnpc2SfqEyl_hwHyLs3MVxI18jz9jmt7wQivkg2ulrwOjoRGVqu4eDlUH3WTj-4a1fDKrByqg6fPJ0IdeveHh7pBo8sRVk/s200/milyon88-.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIObWvl0O_1oas0PYp0HHRYVhJsD57B5f-Tw&usqp=CAU','https://download.ocms.cloud/v2/jln/Picture.3?version=3','https://images.11029984.com/wsd-images-prod/we1winphf3/merchant_resource/appdownloadicon/wps_APP_Icon_(3)_20231208172453.png','https://xbjili.com/img/plusph.webp','https://images.11029984.com/wsd-images-prod/me777f3/fe_setting/h5_logo/wps_me777logoGIF-F2_20240621162647.gif', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOj5Vy8k9gSMTbQYV7GSQRLj98mZ4UbH8Pg&s','https://images.11029984.com/wsd-images-prod/me777f3/fe_setting/h5_logo/wps_me777logoGIF-F2_20240621162647.gif',]; // Add more image URLs here if needed
let currentIndex = 0;
let sliderImage = document.querySelector('.slide-image');

function loadNextImage() {
  sliderImage.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

loadNextImage();
setInterval(loadNextImage, 3000); // Change image every 3 seconds

	
function openPopup(img) {
    const item = img.parentElement;
    const popupId = item.getAttribute('data-id');
    const image = item.getAttribute('data-image');
    const destination = item.getAttribute('data-destination');

    const popupContent = `
        <div class="popup" id="${popupId}">
            <div class="popup-content">
                <span class="close" onclick="closePopup('${popupId}')">X</span>
         <a aria-label='hilo' class='ayawkalimotcashout' data-text='AYAW KALIMOT CASHOUT' onclick="window.open('${destination}')"><span class="windowOpen" onclick="window.open('${destination}')">AYAW KALIMOT CASHOUT</span></a>
                <img class="featured-item" src="${image}">
			    <button><span class="btn-scaterna" onclick="window.open('${destination}')">SCATER NA</span></button>  
            </div>
        </div>
    `;

    const popupContainer = document.getElementById('popup-container');
    popupContainer.innerHTML = popupContent;
    popupContainer.style.display = 'flex'; // Show popup
}

function closePopup(popupId) {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none'; // Hide popup
    popupContainer.innerHTML = ''; // Clear the content
}

