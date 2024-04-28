const imgs = document.querySelectorAll('.img-container img, .text-img-module img, .center-single-image img, .module-type1 img');
const fullPage = document.querySelector('#fullpage');
fullPage.innerHTML += `
<button id="fullpage-closebutton" onclick="parent.style.display='none'">
    <svg rpl="" fill="white" height="20" icon-name="close-fill" viewBox="0 0 20 20" width="20"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="m18.707 2.707-1.414-1.414L10 8.586 2.707 1.293 1.293 2.707 8.586 10l-7.293 7.293 1.414 1.414L10 11.414l7.293 7.293 1.414-1.414L11.414 10l7.293-7.293Z">
        </path>
    </svg>
</button>
`

fullPage.addEventListener('click', function () { fullPage.style.display = 'none'; })

imgs.forEach(img => {
    img.addEventListener('click', function () {
        fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
    });
});