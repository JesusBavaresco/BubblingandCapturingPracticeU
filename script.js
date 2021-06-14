const btn = document.querySelector('button');
const videoBox = document.querySelector('div');
const video = document.querySelector('video');

btn.onclick = function() {
  videoBox.setAttribute('class','showing');
}

videoBox.onclick = function() {
  videoBox.setAttribute('class','hidden');
};

video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};


////////////////////////////// CHALLENGE EXTRA ////////////////////////////

const challenge = (text) => {
  let result = [];
  for (let i = 0; i < text.length; i++){
    if( result[text.charCodeAt(i)]){
      return false;
    }else {
      result[text.charCodeAt(i)] = true;
    }
  }
  return true;
}

let result = challenge('AaBbCc');
console.log(result);