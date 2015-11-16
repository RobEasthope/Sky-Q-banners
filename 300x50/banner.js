//For Polite load
function loadJSDependencies() {
  head.load("https://code.createjs.com/easeljs-0.8.1.min.js", "https://code.createjs.com/tweenjs-0.6.1.min.js", "https://code.createjs.com/movieclip-0.8.1.min.js", "https://code.createjs.com/preloadjs-0.4.1.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/BezierPlugin.min.js", "glint.js", initDynamicContent);
}

loadJSDependencies();


////
var stageP, spriteSheet, count = 0,
  myVar;

function initDynamicContent() {

  Enabler.setProfileId(1062200);
  var devDynamicContent = {};
  devDynamicContent.Feed_300x50 = [{}];
  devDynamicContent.Feed_300x50[0]._id = 0;
  devDynamicContent.Feed_300x50[0].id = 1;
  devDynamicContent.Feed_300x50[0].reporting_label = "REPORTING_LABEL";
  devDynamicContent.Feed_300x50[0].startDate = {};
  devDynamicContent.Feed_300x50[0].startDate.RawValue = "";
  devDynamicContent.Feed_300x50[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_300x50[0].endDate = {};
  devDynamicContent.Feed_300x50[0].endDate.RawValue = "";
  devDynamicContent.Feed_300x50[0].endDate.UtcValue = 0;
  devDynamicContent.Feed_300x50[0].youtubeId = "-Bpm35wZ0us";
  devDynamicContent.Feed_300x50[0].content = {
    "frame_1.jpg": {
      "Type": "file",
      "Url": "frame_1.jpg"
    },

    "frame_2.jpg": {
      "Type": "file",
      "Url": "frame_2.jpg"
    },

    "frame_3.jpg": {
      "Type": "file",
      "Url": "frame_3.jpg"
    },
    "frame_4.jpg": {
      "Type": "file",
      "Url": "frame_4.jpg"
    }
  };

  devDynamicContent.Feed_300x50[0].DEFAULT = true;
  Enabler.setDevDynamicContent(devDynamicContent);

  // ADD DYNAMIC ASSETS:
  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_300x50[0].content['frame_1.jpg']['Url'] + " id='frame_1' class='images '></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_300x50[0].content['frame_2.jpg']['Url'] + " id='frame_2' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_300x50[0].content['frame_3.jpg']['Url'] + " id='frame_3' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_300x50[0].content['frame_4.jpg']['Url'] + " id='frame_4' class='images fade '></img>";
}

function loadHandler() {
  // spriteSheet1.removeEventListener("complete", loadHandler);
  init();
  //setLegals();
}


var canvas, stage, exportRoot;

function init() {
  // Load files via tags
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(manifest);
}

// Image file loading event listener
function handleFileLoad(evt) {
  if (evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}

function animateFrames() {
  // Setup bgExitHandler listener
  document.getElementById("exitButton").addEventListener('click', bgExitHandler, false);
}

bgExitHandler = function(e) {
  Enabler.exit('HTML5_Clickthrough');
}
