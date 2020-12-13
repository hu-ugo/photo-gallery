
/*** JAVASCRIPT ***/

//lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.className = 'active';
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild); //Removes child so images wont acumulate
    }
    lightbox.appendChild(img);
  });
});

//removes the pop-up image clicking anywhere but the image
lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return  //if anything other than the target is clicked
  lightbox.className = '';
})

//search filter
const search = document.getElementById('search');
const container = document.querySelector('.flex-container a')


search.addEventListener('keyup', e => {
  let value = e.target.value.toLowerCase();
  let attr = container.getAttribute('data-title').toLowerCase();

  for (let i = 0; i < attr.length; i++) {
    //console.log(attr[i]);

    if (value.includes(attr[i])) {
      console.log()
    }
  }

});
