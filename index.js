let vplay = false;
let vmute = true;
let vvolume = 0.5;

const setvplay=(action)=>{
    if(action == 'true'){
        vplay = true
    }
    if(action == 'false'){
        vplay = false
    }
    console.log('vplay', vplay)
}

const setvmute=(action)=>{
    if(action == 'true'){
        vmute = true
    }
    if(action == 'false'){
        vmute = false
    }
    console.log('vmute', vmute)
}

const setvvolume=(action)=>{
    vvolume = action;
    console.log('vvolume', vvolume)
}

const bigScreenMode =()=>{
    for(i=0;i<document.getElementsByTagName('video').length;i++){
        const videos = document.getElementsByTagName('video');
        if (!videos[i].classList.contains('bigscreen')) {
            videos[i].pause();
        }else{
            videos[i].play();
        }
    }
  }

const opast =(action)=>{
    for(i=0;i<document.getElementsByClassName('opast').length;i++){
        if(action == 'show'){
            document.getElementsByClassName('opast')[i].style.opacity = '1'
            if(document.getElementById('bigPlayIcon').getAttribute('src') == './public/play.png'){
                document.getElementById('bigPlayIcon').style.opacity = '1'
            }else{
                document.getElementById('bigPlayIcon').style.opacity = '1'
            }
        }
        if(action == 'hide'){
            document.getElementsByClassName('opast')[i].style.opacity = '0'
            if(document.getElementById('bigPlayIcon').getAttribute('src') == './public/play.png'){
                document.getElementById('bigPlayIcon').style.opacity = '1'
            }else{
                document.getElementById('bigPlayIcon').style.opacity = '0'
            }
        }
    }
    if(document.getElementById('bigPlayIcon').getAttribute('src') == './public/loading-rings.gif'){
        document.getElementById('bigPlayIcon').style.opacity = '1'
    }
}

const videoList = [

]  

const callModal =( mssg, status = 2, time = 5000, id)=> {
    const notificationmodal = document.getElementById('notificationmodal');
    var mbox = document.getElementById('messageBox2');
    if(id && document.getElementById(id)){
              document.getElementById(id).style.borderColor = 'red';
              mbox.innerHTML = mssg;
              notificationmodal.style.right = '0%';
              notificationmodal.style.opacity = '1';
              setTimeout(function(){
                  notificationmodal.style.right = '-120%';
                  notificationmodal.style.opacity = '0';
              }, time);	
              setTimeout(function(){
                  document.getElementById(id).style.borderColor = 'rgb(62, 63, 64,.5)';
              }, 3000)
          };
    if(status == '0'){
              //   document.getElementById(id).style.borderColor = 'red';
                 notificationmodal.style.backgroundColor = '#fcd7d7';
                mbox.style.color = 'red';
            mbox.innerHTML = mssg;
            notificationmodal.style.right = '0%';
            notificationmodal.style.opacity = '1';
            setTimeout(function(){
                notificationmodal.style.right = '-120%';
                notificationmodal.style.opacity = '0';
            }, time);
        }else if(status == '1'){
              //   document.getElementById(id).style.borderColor = 'red';
              notificationmodal.style.backgroundColor = '#2a422c';
                mbox.style.color = '#00ff1a';
            mbox.innerHTML = mssg;
            notificationmodal.style.right = '0%';
            notificationmodal.style.opacity = '1';
            setTimeout(function(){
                notificationmodal.style.right = '-120%';
                notificationmodal.style.opacity = '0';
            }, time);
        }else{
              notificationmodal.style.backgroundColor = 'white';
                mbox.style.color = 'black';
            mbox.innerHTML = mssg;
            notificationmodal.style.right = '0%';
            notificationmodal.style.opacity = '1';
            setTimeout(function(){
                notificationmodal.style.right = '-120%';
                notificationmodal.style.opacity = '0';
            }, time);
            
        }
            mbox.innerHTML = mssg;
            notificationmodal.style.right = '0%';
            notificationmodal.style.opacity = '1';
            setTimeout(function(){
                notificationmodal.style.right = '-120%';
                notificationmodal.style.opacity = '0';
            }, time);
        
    };


function resizeJavierVideo(videoWidth, videoHeight, containerHeight, containerWidth, videoElement, size) {
    // console.log('vw', videoWidth, 'w', containerWidth, 'vh', videoHeight,'h', containerHeight, );
    // // width: clamp(369px, calc(23.0625rem + ((1vw - 3px) * 18.5965)), 581px);
    // const videoAspectRatio = videoWidth / videoHeight;
    // const containerAspectRatio = containerWidth / containerHeight;
    
    // let newWidth, newHeight;
    // let xOffset = 0, yOffset = 0;
    
    // if (videoAspectRatio > containerAspectRatio) {
    //     // Video is wider than container, crop horizontally
    //   newWidth = containerHeight * videoAspectRatio;
    //   newHeight = containerHeight;
    //   xOffset = -(newWidth - containerWidth) / 2;
    // } else {
    //     // Video is taller than container, crop vertically
    //     newWidth = containerWidth;
    //     newHeight = containerWidth / videoAspectRatio;
    //     yOffset = -(newHeight - containerHeight) / 2;
    // }
    if(size){
        if(videoWidth > 350)videoElement.classList.add('jvideocontainerbig2')
        if(videoWidth > 350)videoElement.classList.remove('jvideocontainer')
        if(videoWidth < 350)videoElement.classList.add('jvideocontainer');
        if(videoWidth < 350)videoElement.classList.remove('jvideocontainerbig2');
        // videoElement.classList.add('jvideocontainerbig2');
        // videoElement.style.width = newWidth + "px";
        // videoElement.style.height = newHeight + "px";
        // videoElement.parentElement.style.minHeight = "300px";
        // videoElement.parentElement.style.height = fit-content + 20 + "px";
        if(videoWidth > 350)videoElement.parentElement.classList.add('jvideocontainerbig2');
        if(videoWidth > 350)videoElement.parentElement.classList.remove('jvideocontainer');
        if(videoWidth < 350)videoElement.parentElement.classList.add('jvideocontainer');
        if(videoWidth < 350)videoElement.parentElement.classList.remove('jvideocontainerbig2');
    }else{
        if(videoWidth > 350)videoElement.classList.add('jvideocontainerbig')
        if(videoWidth > 350)videoElement.classList.remove('jvideocontainer')
        if(videoWidth < 350)videoElement.classList.add('jvideocontainer');
        if(videoWidth < 350)videoElement.classList.remove('jvideocontainerbig');
        // videoElement.classList.add('jvideocontainerbig');
        // videoElement.style.width = newWidth + "px";
        // videoElement.style.height = newHeight + "px";
        // videoElement.parentElement.style.minHeight = "300px";
        // videoElement.parentElement.style.height = fit-content + 20 + "px";
        if(videoWidth > 350)videoElement.parentElement.classList.add('jvideocontainerbig');
        if(videoWidth > 350)videoElement.parentElement.classList.remove('jvideocontainer');
        if(videoWidth < 350)videoElement.parentElement.classList.add('jvideocontainer');
        if(videoWidth < 350)videoElement.parentElement.classList.remove('jvideocontainerbig');
    }
    
    console.log('videoElement.style.width', videoElement.style.width, 'videoElement.parentElement.style.width', videoElement.parentElement.style.width)
    // videoElement.play()
    // videoElement.style.left = xOffset + "px";
    // videoElement.style.top = yOffset + "px";
    if(size)bigScreenMode()
  }
  

// alert(window.innerWidth )
function slowLoop(iterations, delay, callback) {
    let i = 0;
    function loop() {
      if (i < iterations) {
        setTimeout(function() {
          callback(i);
          i++;
          loop();
        }, delay);
      }
    }
    loop();
  }

const toggleSearchLength =()=>{
    if(document.getElementById('javierSearch')){document.getElementById('javierSearch').classList.toggle('openSearch');}
}
if(document.getElementById('javierSearchimg'))document.getElementById('javierSearchimg').addEventListener('click', e=>{
        if(window.innerWidth < 768){
            toggleSearchLength();    
        }
    })

window.onclick = function(e){
    var el = e.target;
    if(el.name != 'search' && window.innerWidth < 768){
        document.getElementById('javierSearch').classList.remove('openSearch');
    }
    if(!el.classList.contains('navdb')){
        console.log(document.getElementById('navdb').scrollHeight)
        document.getElementById('navdb').style.height = `0px`;
        document.getElementById('navdb').classList.remove('opennavdb');
    }
}

const callBigScreen =(video)=>{
    if(!video){
        document.getElementsByClassName('bigScreen')[0].classList.add('hidden')
        document.getElementById('bigvideo').setAttribute('src','');
    }else{
        document.getElementById('bigvideo').setAttribute('src', `${video.getAttribute('src')}`);
        document.getElementsByClassName('bigScreen')[0].classList.remove('hidden');
        document.getElementById('bigvideo').setAttribute('play')
        document.getElementById('bigvideo').muted = false;
    }
}




// window.onmouseover = function(e){
//     var el = e.target;
//     if(el.name != 'search' && window.innerWidth < 768){
//         document.getElementById('javierSearch').classList.remove('openSearch');
//     }
//     if(!el.classList.contains('navdb')){
//         console.log(document.getElementById('navdb').scrollHeight)
//         document.getElementById('navdb').style.height = `0px`;
//         document.getElementById('navdb').classList.remove('opennavdb');
//     }
// }

const darkMode =(value,text,img)=>{
    if(value == true){
        document.getElementById('Jvbody').classList.add('dark');
        text.textContent = 'Dark'
        img.src = './public/moon.png'
    }else{
        document.getElementById('Jvbody').classList.remove('dark')
        text.textContent = 'Light'
        img.src = './public/brightness.png'
    }
}

const removepc =()=>{
    for(i=0;i<document.getElementsByClassName('pc').length;i++){
        document.getElementsByClassName('pc')[i].classList.add('pcd')
    }
}

const addpc =()=>{
    for(i=0;i<document.getElementsByClassName('pc').length;i++){
        document.getElementsByClassName('pc')[i].classList.remove('pcd')
    }
}

const rightNav =(action)=>{
    if(window.innerWidth < 768){
        if(action == 'OPEN'){
            addpc();
            if(document.getElementById('JavierContainer')){
                document.getElementById('JavierContainer').classList.remove('containerGridClose');
            }
        }
        if(action == 'CLOSE'){
            removepc();
            if(document.getElementById('JavierContainer')){
                document.getElementById('JavierContainer').classList.add('containerGridClose');
            }
        }
    }
}

window.addEventListener('load', e=>{
    if(window.innerWidth < 768){
        removepc();
        rightNav('CLOSE');
    }
});

const callbargeModal =(action)=>{
    if(action == 'OPEN'){
        document.getElementById('bargemodal').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('bargemodal').children[0].classList.add('flip-diagonal-1-bl')  
            document.getElementById('bargemodal').children[0].classList.remove('slide-rotate-hor-b-fwd')  
            document.getElementById('bargemodal').children[0].classList.remove('invisible')  
        }, 500);
    }
    if(action == 'CLOSE'){
        document.getElementById('bargemodal').children[0].classList.remove('flip-diagonal-1-bl')  
        document.getElementById('bargemodal').children[0].classList.add('slide-rotate-hor-b-fwd')  
        document.getElementById('bargemodal').children[0].classList.add('invisible')  
        setTimeout(() => {
            document.getElementById('bargemodal').classList.add('hidden');
        }, 1000);
    }
}

const modallog =(value, element)=>{
    if(value == 'Sign Up'){
        element.textContent = 'Sign In';
        element.previousElementSibling.textContent = 'Have an account?';
        document.getElementsByClassName('Mmsg')[0].textContent = 'Use phone or email';
        document.getElementById('logheader').textContent = 'Sign up for Javier'
        slowLoop(document.getElementsByClassName('Mlog').length, 300, function(i) {
            if(document.getElementsByClassName('Mlog')[i])document.getElementsByClassName('Mlog')[i].style.right = '600px';
            if(document.getElementsByClassName('Mlog2')[i])document.getElementsByClassName('Mlog2')[i].style.display = 'block';
            setTimeout(() => {
                if(document.getElementsByClassName('Mlog2')[i])document.getElementsByClassName('Mlog2')[i].style.right = '0px';
                if(document.getElementsByClassName('Mlog')[i])document.getElementsByClassName('Mlog')[i].style.display = 'none';
            }, 1000);
        });
    }
    if(value == 'Sign In'){
        element.textContent = 'Sign Up';
        element.previousElementSibling.textContent = "Don't have an account?";
        document.getElementsByClassName('Mmsg')[0].textContent = 'Use phone / email / username';
        document.getElementById('logheader').textContent = 'Sign in to Javier'
        slowLoop(document.getElementsByClassName('Mlog').length, 300, function(i) {
            if(document.getElementsByClassName('Mlog')[i])document.getElementsByClassName('Mlog')[i].style.display = 'flex';
            if(document.getElementsByClassName('Mlog2')[i])document.getElementsByClassName('Mlog2')[i].style.right = '600px';
            setTimeout(() => {
                if(document.getElementsByClassName('Mlog2')[i])document.getElementsByClassName('Mlog2')[i].style.display = 'none';
                if(document.getElementsByClassName('Mlog')[i])document.getElementsByClassName('Mlog')[i].style.right = '0px';
            }, 1000);
          });
    }
}


  
  function setVideoThumbnail(videoElement) {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const thumbnail = canvas.toDataURL('image/png');
    
    const img = new Image();
    img.src = './public/loading.jpg';
    // img.src = thumbnail;
    img.onload = function() {
      const blurredCanvas = document.createElement('canvas');
      blurredCanvas.width = img.width;
      blurredCanvas.height = img.height;
      const blurredCtx = blurredCanvas.getContext('2d');
      blurredCtx.filter = 'blur(15px)';
      blurredCtx.drawImage(img, 0, 0);
      const blurredThumbnail = blurredCanvas.toDataURL('image/jpg');
      const container = videoElement.parentElement;
      container.style.backgroundImage = `url(${blurredThumbnail ? blurredThumbnail : './public/loading.jpg'})`;
    //   container.style.backgroundImage = `url('./public/loading.jpg')`;
      container.style.backgroundPosition = 'center';
      container.style.backgroundSize = 'cover';
    };
}


const getVideoThumbnail =(videoElement)=> {
   videoElement.currentTime = 10;
    // videoElement.pause();
    // setTimeout(() => {
        setVideoThumbnail(videoElement);
        videoElement.currentTime = 0;
        videoElement.style.visibility = 'visible';
        videoElement.volume = Number(videoElement.previousElementSibling.children[1].children[0].children[0].children[1].value)/100;
    // }, 1000);
  }

  const intersectThis =(video)=>{
    // return
    const myElement = video;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is in viewport
    //   setTimeout(() => {
        video.volume = vvolume;
          if(vmute == false) video.muted = false;
          if(vmute == true) video.muted = true;
        // }, 200);   
        console.log('Element is in viewport');
        console.log('vmute', vmute)
        if(vplay == true)video.play();

    } else {
        // Element is not in viewport
      video.pause();
      console.log('Element is not in viewport');
    }
  });
}, { threshold: 0.5 }); // play video when it's 50% in view

observer.observe(myElement);
  }

//   setInterval(() => {
//     console.log('ready state of the video', document.getElementById('bigvideo').readyState)
//   }, 300);

  const videoplayer =(video, action, size)=>{
    console.log('this ready state', video.readyState)
    // video.volume = this.parentElement.children[1].children[0].children[0].children[1].value;
    if(action == 'playing'){
        if(size){
            video.nextElementSibling.children[1].children[0].setAttribute('src', './public/pause.png');
            video.nextElementSibling.children[2].children[1].value = vvolume*100;
            bigScreenMode();
        }else{
            video.previousElementSibling.children[2].setAttribute('src', './public/pause.png');
            video.previousElementSibling.children[1].children[0].children[0].children[1].value = vvolume*100;
        }
        // video.unmute();
        // video.play();
    }
    if(action == 'paused'){
        if(!size)video.previousElementSibling.children[2].setAttribute('src', './public/play.png');
    }
    if(action == 'muted'){
        alert('the video is mute')
    }
    if(action == 'unmuted'){
        alert('the video is not mute')
    }
    if(action == 'timeupdate'){
        var minutes = Math.floor(video.currentTime / 60);
        var seconds = Math.floor(video.currentTime % 60);
        video.nextElementSibling.children[3].children[2].textContent = Math.floor(video.duration / 60) + ":" + (Math.floor(video.duration % 60) < 10 ? "0" : "") + Math.floor(video.duration % 60);
        // video.nextElementSibling.children[3].children[1].title = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        video.nextElementSibling.children[3].children[0].textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        
        // Update the seek bar value
        var value = (100 / video.duration) * video.currentTime;
        console.log(value);

        video.nextElementSibling.children[3].children[1].value = value;
    }
    if(video.muted){
        if(!size)video.previousElementSibling.children[1].children[0].children[0].children[0].setAttribute('src', './public/mute.png');
        // video.previousElementSibling.children[1].children[0].children[0].children[1].setAttribute('disabled', true);
    }else{
        if(!size)video.previousElementSibling.children[1].children[0].children[0].children[0].setAttribute('src', './public/sound.png');
        // video.previousElementSibling.children[1].children[0].children[0].children[1].setAttribute('disabled', false);
    }
    if(vmute == true)video.muted = true;
    if(vmute == false)video.muted = false;
    console.log('is mute?', video.muted)
  }


// USER LEFT SIDE MODULE
const userNotLoggedIn =()=>{
    return `
                <div class="w-full h-full flex justify-end items-center relative">
                    <button class="min-w-fit h-[25px] hover m-[10px] border-[0.1px] border-[#90919991] dark:border-litlight text-litblack dark:text-litlight rounded font-semibold px-[15px] py-[18px] flex justify-center items-center"> <span class="text-[20px] relative bottom-[-1px] right-[6px]">+</span> Upload </button>
                    <button class="min-w-fit h-[25px] hover bg-[#e30713] m-[10px] border-[2px] border-[#e30713] rounded font-semibold text-white px-[15px] py-[18px] flex justify-center items-center" onclick="callbargeModal('OPEN')"> Login </button>
                    <img src="./public/menudot.png" onmouseover="this.nextElementSibling.classList.add('opennavdb');document.getElementById('navdb').style.height = document.getElementById('navdb').scrollHeight+'px';" class="navdb w-[15px] h-fit dark:invert cursor-pointer" alt="">
                    <div id="navdb" onmouseleave="document.getElementById('navdb').style.height = '0px';document.getElementById('navdb').classList.remove('opennavdb');" class="absolute dark:shadow-[#1C1C1CFF] invisible opacity-0 navtip shadow-lg w-fit min-w-[250px] h-0 overflow-hidden py-[10px] px-[0px] bgmodwb rounded-md shadow-lg top-[50px] left-[12px]">
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/language.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">English</p>
                        </div>
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/interrogation.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">Feedback and help</p>
                        </div>
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/keyboard.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">Keyboard Shortcuts</p>
                        </div>
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/brightness.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">Light</p>
                            <div class="navdb form-input-switch ml-[100px]">
                                <input class="navdb toggle-checkbox" id="challenges-post-comments" onchange="darkMode(this.checked, this.parentElement.previousElementSibling, this.parentElement.previousElementSibling.previousElementSibling)" type="checkbox">
                                <label class="navdb toggle-switch" for="challenges-post-comments"></label>
                            </div>
                        </div>
                    </div>
                </div>
            `
}

const userLoggedIn =()=>{
    return `
                <div class="w-full h-full flex justify-end items-center relative">
                    <button class="min-w-fit h-[25px] hover m-[10px] border-[0.1px] border-[#90919991] dark:border-litlight text-litblack dark:text-litlight rounded font-semibold px-[15px] py-[18px] flex justify-center items-center"> <span class="text-[20px] relative bottom-[-1px] right-[6px]">+</span> Upload </button>
                    <button class="min-w-fit h-[25px] hover bg-[#e30713] m-[10px] border-[2px] border-[#e30713] rounded font-semibold text-white px-[15px] py-[18px] flex justify-center items-center" onclick="callbargeModal('OPEN')"> Login </button>
                    <img src="./public/menudot.png" onmouseover="this.nextElementSibling.classList.add('opennavdb');document.getElementById('navdb').style.height = document.getElementById('navdb').scrollHeight+'px';" class="navdb w-[15px] h-fit dark:invert cursor-pointer" alt="">
                    <div id="navdb" onmouseleave="document.getElementById('navdb').style.height = '0px';document.getElementById('navdb').classList.remove('opennavdb');" class="absolute dark:shadow-[#1C1C1CFF] invisible opacity-0 navtip shadow-lg w-fit min-w-[250px] h-0 overflow-hidden py-[10px] px-[0px] bgmodwb rounded-md shadow-lg top-[50px] left-[12px]">
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/language.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">English</p>
                        </div>
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/interrogation.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">Feedback and help</p>
                        </div>
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/keyboard.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">Keyboard Shortcuts</p>
                        </div>
                        <div class="navdb hoverwb flex items-center py-[7px] px-[20px] font-medium text-sm cursor-pointer">
                            <img src="./public/brightness.png" alt="" class="navdb mr-[10px] dark:invert w-[16px] h-[15px]">
                            <p class="navdb txtbw">Light</p>
                            <div class="navdb form-input-switch ml-[100px]">
                                <input class="navdb toggle-checkbox" id="challenges-post-comments" onchange="darkMode(this.checked, this.parentElement.previousElementSibling, this.parentElement.previousElementSibling.previousElementSibling)" type="checkbox">
                                <label class="navdb toggle-switch" for="challenges-post-comments"></label>
                            </div>
                        </div>
                    </div>
                </div>
            `
}

// document.getElementById('topNavModule').innerHTML = userLoggedIn();