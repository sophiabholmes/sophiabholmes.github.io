document.addEventListener('DOMContentLoaded', function() {

// add short films

  var shortFilmsContainer = document.getElementById('short_films_items');
  for(let i = 0; i < shortFilms.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    let image = document.createElement('img');
    // console.log(shortFilms[i].image);
    image.src = `images/short_films/${shortFilms[i].image}`;
    item.style.right = `${shortFilms[i].positionRight}px`;
    item.style.bottom = `${shortFilms[i].positionBottom}px`;
    item.style.width = `${shortFilms[i].width}px`;
    item.style.transform = `rotate(${shortFilms[i].tilt}deg)`;
    item.appendChild(image);
    shortFilmsContainer.appendChild(item);

    // console.log(shortFilms[i]);
    // var eventFunction = function(currentItem) {
    //   console.log(currentItem);
    // }
    item.addEventListener('click', function(){
      let wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');

      wrapper.addEventListener('click', function(){
      document.getElementsByClassName('pop_up_vid')[0].remove();
      document.getElementsByClassName('wrapper')[0].remove();
      });


      let popUpVid = document.createElement('div');
      popUpVid.classList.add('pop_up_vid');
      if(shortFilms[i].text) {
        popUpVid.innerHTML= shortFilms[i].vid + `<p>${shortFilms[i].text}</p>`;
      } else {
        popUpVid.innerHTML = shortFilms[i].vid;
      }

      // wrapper.appendChild(popUpVid);

      let remove  = document.createElement('div');
      remove.classList.add('remove');
      remove.addEventListener('click', function(){
      document.getElementsByClassName('pop_up_vid')[0].remove();
      document.getElementsByClassName('wrapper')[0].remove();
      });

      popUpVid.insertBefore(remove, popUpVid.firstChild);
      // popUpVid.appendChild(remove);

      document.getElementById('main_container').appendChild(wrapper);
      document.getElementById('main_container').appendChild(popUpVid);

    });


  }

 // add music videos

   var musicVideosContainer = document.getElementById('music_videos_items');
   for(let i = 0; i < musicVideos.length; i++) {
     let item = document.createElement('div');
     item.classList.add('item');
     let image = document.createElement('img');
     // console.log(shortFilms[i].image);
     image.src = `images/music_videos/${musicVideos[i].image}`;
     item.style.left = `${musicVideos[i].positionLeft}px`;
     item.style.top = `${musicVideos[i].positionTop}px`;
     item.style.width = `${musicVideos[i].width}px`;
     item.style.transform = `rotate(${musicVideos[i].tilt}deg)`;
     item.appendChild(image);
     musicVideosContainer.appendChild(item);

     item.addEventListener('click', function(){
       let wrapper = document.createElement('div');
       wrapper.classList.add('wrapper');

       wrapper.addEventListener('click', function(){
       document.getElementsByClassName('pop_up_vid')[0].remove();
       document.getElementsByClassName('wrapper')[0].remove();
       });

       let popUpVid = document.createElement('div');
       popUpVid.classList.add("pop_up_vid");
       if(musicVideos[i].text) {
         popUpVid.innerHTML= musicVideos[i].vid + `<p>${musicVideos[i].text}</p>`;
       } else {
         popUpVid.innerHTML = musicVideos[i].vid;
       }
       let remove  = document.createElement('div');
       remove.classList.add('remove');
       remove.addEventListener('click', function(){
       document.getElementsByClassName('pop_up_vid')[0].remove();
       document.getElementsByClassName('wrapper')[0].remove();
       });

       popUpVid.insertBefore(remove, popUpVid.firstChild);
       // popUpVid.appendChild(remove);

       document.getElementById('main_container').appendChild(wrapper);
       document.getElementById('main_container').appendChild(popUpVid);
     });
   }

   var contactButton = document.getElementById('contact_button');
   contactButton.addEventListener('click', function(){
     document.getElementById('contact_info').classList.add('visible');
     document.getElementById('main_container').classList.add('no-scroll');
   });

   var hide = document.getElementById('hide');
   hide.addEventListener('click',function() {
     document.getElementById('contact_info').classList.remove('visible');
     document.getElementById('main_container').classList.remove('no-scroll');
   })

   // var items = document.getElementsByClassName('item');
   // console.log(items);
});
