document.addEventListener('DOMContentLoaded', function() {

// add short films

  var shortFilmsContainer = document.getElementById('short_films_items');
  for(var i = 0; i < shortFilms.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    let image = document.createElement('img');
    // console.log(shortFilms[i].image);
    image.src = `images/short_films/${shortFilms[i].image}`;
    item.style.right = `${shortFilms[i].positionRight}px`;
    item.style.bottom = `${shortFilms[i].positionBottom}px`;
    item.style.transform = `rotate(${shortFilms[i].tilt}deg)`;
    item.appendChild(image);
    shortFilmsContainer.appendChild(item);
  }

 // add music videos

   var musicVideosContainer = document.getElementById('music_videos_items');
   for(var i = 0; i < musicVideos.length; i++) {
     let item = document.createElement('div');
     item.classList.add('item');
     let image = document.createElement('img');
     // console.log(shortFilms[i].image);
     image.src = `images/music_videos/${musicVideos[i].image}`;
     item.style.left = `${musicVideos[i].positionLeft}px`;
     item.style.top = `${musicVideos[i].positionTop}px`;
     item.style.transform = `rotate(${musicVideos[i].tilt}deg)`;
     item.appendChild(image);
     musicVideosContainer.appendChild(item);
   }

   var contactButton = document.getElementById('contact_button');
   contactButton.addEventListener('click', function(){
     document.getElementById('contact_info').classList.add('visible');
   });

   var hide = document.getElementById('hide');
   hide.addEventListener('click',function() {
     document.getElementById('contact_info').classList.remove('visible');
   })
});
