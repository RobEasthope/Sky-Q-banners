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
  devDynamicContent.Feed_160x600 = [{}];
  devDynamicContent.Feed_160x600[0]._id = 0;
  devDynamicContent.Feed_160x600[0].id = 1;
  devDynamicContent.Feed_160x600[0].reporting_label = "REPORTING_LABEL";
  devDynamicContent.Feed_160x600[0].startDate = {};
  devDynamicContent.Feed_160x600[0].startDate.RawValue = "";
  devDynamicContent.Feed_160x600[0].startDate.UtcValue = 0;
  devDynamicContent.Feed_160x600[0].endDate = {};
  devDynamicContent.Feed_160x600[0].endDate.RawValue = "";
  devDynamicContent.Feed_160x600[0].endDate.UtcValue = 0;
  devDynamicContent.Feed_160x600[0].youtubeId = "-Bpm35wZ0us";
  devDynamicContent.Feed_160x600[0].content = {
    "sprSheet_160x600_opt.jpg": {
      "Type": "file",
      "Url": "sprSheet_160x600_opt.jpg"
    },

    "frame_1_copy.png": {
      "Type": "file",
      "Url": "frame_1_copy.png"
    },

    "frame_2_copy.png": {
      "Type": "file",
      "Url": "frame_2_copy.png"
    },

    "frame_3_copy.png": {
      "Type": "file",
      "Url": "frame_3_copy.png"
    },

    "sky_glass_logo.png": {
      "Type": "file",
      "Url": "sky_glass_logo.png"
    },

    "sky_logo.png": {
      "Type": "file",
      "Url": "sky_logo.png"
    },

    "ld_copy.png": {
      "Type": "file",
      "Url": "ld_copy.png"
    },

    "ld_cta.png": {
      "Type": "file",
      "Url": "ld_cta.png"
    },

    "sheen.png": {
      "Type": "file",
      "Url": "sheen.png"
    }
  };

  //    devDynamicContent.Feed_160x600[0].legalsButton = "";
  //    devDynamicContent.Feed_160x600[0].legalsCopy = "Comparison against Netflix and LOVEFiLM Instant using top 100 from UK box office over 12 months.  See sky.com\/blockbusters. On Demand: Available to Sky TV customers with compatible Sky+ box. Downloading content requires compatible black Sky+ box, broadband connection (minimum recommended speed 2 Mbps).  Content depends on your Sky TV\/HD subscription. \u00A9 2014 Disney Enterprises, Inc. All Rights Reserved. \u00A9 2014 Disney Enterprises, Inc. \u00A9 2015 Marvel .";
  devDynamicContent.Feed_160x600[0].DEFAULT = true;
  Enabler.setDevDynamicContent(devDynamicContent);

  // ADD DYNAMIC ASSETS:
  document.getElementById("bottom_container").innerHTML += "<div id='Preload' class='preLoader' style='left: px;'></div>"
  document.getElementById('Preload').style["top"] = (window.innerHeight / 2) + 'px';

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['frame_1_copy.png']['Url'] + " id='frame_1_copy' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['frame_2_copy.png']['Url'] + " id='frame_2_copy' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['frame_3_copy.png']['Url'] + " id='frame_3_copy' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['ld_copy.png']['Url'] + " id='ld_copy' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['ld_cta.png']['Url'] + " id='ld_cta' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['sheen.png']['Url'] + " id='sheen' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['sky_glass_logo.png']['Url'] + " id='sky_glass_logo' class='images fade'></img>";

  document.getElementById("middle_container").innerHTML += "<img src=" + dynamicContent.Feed_160x600[0].content['sky_logo.png']['Url'] + " id='sky_logo' class='images fade'></img>";

  // create a new stage and point it at our canvas:
  stageP = new createjs.Stage(document.getElementById("testCanvas"));
  spriteSheet1 = new createjs.SpriteSheet({
    framerate: 20,
    "images": [dynamicContent.Feed_160x600[0].content['sprSheet_160x600_opt.jpg']['Url']],
    "frames": {
      "width": 160,
      "height": 600,
      "count": 330
    },
    "animations": {
      "frame_1": [0, 62, "frame_1_stop"],
      "frame_1_stop": [62],
      "frame_2": [62, 329, "frame_2_stop"],
      "frame_2_stop": [329]
    }
  });

  if (!spriteSheet1.complete) {
    // not preloaded, listen for the complete event:
    spriteSheet1.addEventListener("complete", loadHandler);
  } else {
    init();
  }
}

function loadHandler() {
  spriteSheet1.removeEventListener("complete", loadHandler);
  init();
  //setLegals();
}


var canvas, stage, exportRoot;

function init() {
  canvas = document.getElementById("canvas");
  images = images || {};

  var manifest = [{
    src: dynamicContent.Feed_160x600[0].content['frame_1_copy.png']['Url'],
    id: "frame_1_copy"
  }, {
    src: dynamicContent.Feed_160x600[0].content['ld_copy.png']['Url'],
    id: "ld_copy"
  }]

  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
  if (evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}

var f1_copy, ldframe_copy;

function handleComplete(evt) {
  exportRoot = new lib.glint();

  f1_copy = new lib.copy1_mc();
  ldframe_copy = new lib.end_copy();

  f1_copy.x = 0;
  f1_copy.y = 0;
  ldframe_copy.x = 150;
  ldframe_copy.y = 125;
  // console.log("exportRoot  "+ f1_copy);


  //stage = new createjs.Stage(canvas);


  //	stage.update();

  //createjs.Ticker.setFPS(lib.properties.fps);
  //createjs.Ticker.addEventListener("tick", stage);

  spriteSheetAnim();
}

function spriteSheetAnim() {

  TweenLite.to(sheen, 0.1, {
    // End point CTA sheen
    x: -200,
    y: 400,
    height:200,
    ease: Quad.easeOut
  });

  document.getElementById('preloader').style.display = "none";
  document.getElementById("exitButton").addEventListener('click', bgExitHandler, false);
  initAnim = new createjs.Sprite(spriteSheet1, "frame_1");
  initAnim.alpha = 0;
  stageP.addChild(initAnim);
  stageP.addChild(f1_copy);
  f1_copy.alpha = 0;
  ldframe_copy.alpha = 0;

  stageP.addChild(ldframe_copy);


  initAnim.gotoAndPlay('frame_1');
  TweenLite.to(sky_logo, 0.2, {
    alpha: 0,
    ease: Quad.easeOut
  });
  TweenLite.to(initAnim, 0.5, {
    alpha: 1,
    ease: Quad.easeOut
  });

  createjs.Ticker.addEventListener("tick", tickHandler);
  // initAnim.framerate = 44;

  function tickHandler(event) {
    stageP.update(event);
  }

  initAnim.addEventListener("animationend", anim1EndHandler);
}

function anim1EndHandler() {
  initAnim.removeEventListener("animationend", anim1EndHandler);
  TweenLite.to(f1_copy, 0.8, {
    delay: 0.5,
    alpha: 1,
    ease: Quad.easeOut,
    onComplete: function() {
      f1_copy.gotoAndPlay(2);
      console.log('hello '+f1_copy)
    }
  });

  // Pauses at splash
  TweenLite.delayedCall(3, frame2Handler);
  initAnim.framerate = 20;


};

function frame2Handler() {
  TweenLite.to(sky_logo, 0.2, {
    alpha: 0,
    ease: Quad.easeOut
  });
  TweenLite.to(f1_copy, 0.1, {
    alpha: 0,
    ease: Quad.easeOut
  });
  TweenLite.to(initAnim, 0.1, {
    /*alpha: 0,*/
    ease: Quad.easeOut,
    onComplete: function() {
      initAnim.gotoAndPlay('frame_2');
      // initAnim.framerate = 10
    }
  });

  // if (initAnim.currentFrame >= 60) {
  //   initAnim.framerate = 10;
  // }


  TweenLite.to(frame_2_copy, 0.5, {
    // Deplay the entrance of frame_2_copy
    delay: 1.65,
    alpha: 1,
    ease: Quad.easeOut
  });

  TweenLite.to(initAnim, 0.5, {
    delay: 0.1,
    alpha: 1,
    ease: Quad.easeOut,
    onComplete: function() {
      //initAnim.addEventListener("animationend",  anim2EndHandler);
    }
  });
  TweenLite.set(frame_3_copy, {
    scale: 1.2
  });
  myVar = setInterval(showCopy, 10);
}

var bool137 = true;

function showCopy() {


  // console.log(initAnim.currentFrame);
  if (initAnim.currentFrame >= 91) {
    initAnim.framerate = 20;
  }

  if (initAnim.currentFrame >= 128) {
    TweenLite.to(frame_2_copy, 0.1, {
      alpha: 0,
      ease: Quad.easeOut
    });

    initAnim.framerate = 20
  }

  if (initAnim.currentFrame >= 220 && initAnim.currentFrame < 222) {
    if (bool137) {

      initAnim.framerate = 20;
      //TweenLite.to(frame_3_copy, 0.1, {setScale:1.5});

      TweenLite.to(frame_3_copy, 0.5, {
        alpha: 1,
        overwrite: 0
      });
      TweenLite.to(frame_3_copy, 3, {
        scale: 0.9,
        ease: Linear.easeNone,
        overwrite: 0
      });

      console.log('IN FRAME')
      bool137 = false;
    }
  }

  // if (initAnim.currentFrame >= 207 && initAnim.currentFrame <= 263) {
  if (initAnim.currentFrame >= 245 && initAnim.currentFrame <= 247) {

    initAnim.framerate = 20;
    TweenLite.to(frame_3_copy, 0.5, {
      alpha: 0,
      ease: Quad.easeOut,
      overwrite: 0
    });
  }


  if (initAnim.currentFrame >= 279) {
    console.log('in Q point')
    initAnim.framerate = 10;
    // TweenLite.to(frame_3_copy,0.5,{alpha:0,ease:Quad.easeOut, overwrite:0});
  }

  if (initAnim.currentFrame >= 292) {
    initAnim.framerate = 20;
  }

  if (initAnim.currentFrame >= 300) {
    console.log('in end point')
    // initAnim.framerate = 30;
    TweenLite.to(sky_logo, 2, {
      alpha: 1,
      ease: Quad.easeOut
    });
  }

  if (initAnim.currentFrame >= 319) {
    frame5Handler();
  }
}

function frame5Handler() {
  clearInterval(myVar);
  TweenLite.to(sheen, 0.1, {
    delay: 1.7,
    alpha: 1
  });
  TweenLite.to(ldframe_copy, 0.8, {
    delay: 0.5,
    alpha: 1,
    ease: Quad.easeOut,
    onComplete: function() {
      ldframe_copy.gotoAndPlay(2);
    }
  });
  TweenLite.to(ld_cta, 0.5, {
    delay: 1.2,
    alpha: 1,
    ease: Quad.easeOut,
    onComplete: function() {
      TweenLite.to(sheen, 1, {
        delay: 1.3,
        // Final position of CTA sheen
        x: 300,
        height:200,
        ease: Quad.easeOut,
        onComplete: function() {
          TweenLite.to(sheen, 0.1, {
            alpha: 0
          })
        }
      });
    }
  });
}

bgExitHandler = function(e) {
  Enabler.exit('HTML5_Clickthrough');
}

//// set legals
//function setLegals(){
//    // CONTAINER:
//    this.container = document.getElementById('legalsContainer');
//     document.getElementById("legalsContainer").style.zIndex = "900";
//    // LEGALS BUTTON:
//    this.container.innerHTML+="<div id='legalbtn' class='clicklegals'>"+dynamicContent.Feed_160x600[0].legalsButton+"</div>";
//    // LEGALS COPY:
//    this.container.innerHTML +="<div id='rollovercontent' class='legalscopy' style='max-height:"+(window.innerHeight-30)+"px;'>"+dynamicContent.Feed_160x600[0].legalsCopy+"</div>"
//
//    this.container.innerHTML+="<div id='closeBtn' class='legalsClose' style='left:"+((document.getElementById('rollovercontent').offsetHeight)>(window.innerHeight-31)?(window.innerWidth-36):(window.innerWidth-21))+"px;'></div>"
//    document.getElementById('legalbtn').style["top"] = (window.innerHeight-(document.getElementById('legalbtn').offsetHeight))+"px";
//    document.getElementById('rollovercontent').style["top"] = window.innerHeight+'px';
//
//    document.getElementById('closeBtn').style["top"] = window.innerHeight+5+'px';
//
//    document.getElementById('legalbtn').style['text-align'] ='left';
//
//    document.getElementById('legalbtn').addEventListener('click',onLegalsClick);
//    document.getElementById('closeBtn').addEventListener('click',onLegalsClose);
//
//}
//
//onLegalsClick = function(){
//    Enabler.counter('LegalsClicked')
//    document.getElementById("borderDiv").style.zIndex = "900";
//    TweenLite.to('#rollovercontent', .5, {ease:Cubic.easeInOut, top:window.innerHeight-(document.getElementById('rollovercontent').offsetHeight)});
//    TweenLite.to('#closeBtn', .5, {ease:Cubic.easeInOut, top:window.innerHeight-(document.getElementById('rollovercontent').offsetHeight-1)});
//}
//
//onLegalsClose = function(){
//    TweenLite.to('#rollovercontent', .5, {ease:Cubic.easeInOut, top:window.innerHeight, onComplete:function(){ document.getElementById("borderDiv").style.zIndex = "500";}});
//    TweenLite.to('#closeBtn', .5, {ease:Cubic.easeInOut, top:window.innerHeight+1});
//}
