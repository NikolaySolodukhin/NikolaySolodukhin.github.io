(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.text_left = function() {
	this.initialize(img.text_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,172);


(lib.text_right = function() {
	this.initialize(img.text_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,160);


(lib.video = function() {
	this.initialize(img.video);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.VideoBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.video();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgirATiMAAAgnDMBFXAAAMAAAAnDg");
	this.shape.setTransform(222,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.VideoBg, new cjs.Rectangle(0,0,444,250), null);


(lib.Video = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Video, null, null);


(lib.sound_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AAAA8IgdgeIgoAAIAAg6IAoAAIAAABIAdggIAUAAIAAB3gAAeAiQALgBAJgJQAKgKAAgOQAAgNgKgLQgJgJgLgBIAAgKQAPACAMALQANANAAASQAAASgNAOQgMALgPACgAAeAQIAFgEQAGgGAAgGQAAgGgGgFIAAAAIgFgDIAAgKQAIACAEAEIABAAQAHAJAAAJQAAAKgHAIIgBAAQgEAFgIACg");
	this.shape.setTransform(8,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AAAA8IgdgeIgoAAIAAg6IAoAAIAAABIAdggIAUAAIAAB3gAAeAiQALgBAJgJQAKgKAAgOQAAgNgKgLQgJgJgLgBIAAgKQAPACAMALQANANAAASQAAASgNAOQgMALgPACgAAeAQIAFgEQAGgGAAgGQAAgGgGgFIAAAAIgFgDIAAgKQAIACAEAEIABAAQAHAJAAAJQAAAKgHAIIgBAAQgEAFgIACg");
	this.shape_1.setTransform(8,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/B3IAAjtID/AAIAADtg");
	this.shape_2.setTransform(7.6,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,14,12);


(lib.sound_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AAZA8IgdgeIgoAAIAAg6IAoAAIAAABIAdggIAUAAIAAB3g");
	this.shape.setTransform(5.5,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AAZA8IgdgeIgoAAIAAg6IAoAAIAAABIAdggIAUAAIAAB3g");
	this.shape_1.setTransform(5.5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/B3IAAjtID/AAIAADtg");
	this.shape_2.setTransform(7.6,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,9,12);


(lib.play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgxhFIBjBFIhjBGg");
	this.shape.setTransform(5,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AgxhFIBjBFIhjBGg");
	this.shape_1.setTransform(5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF00").s().p("AhJBoIAAhoIAAAAIAAAAIAAhnICTAAIAADPg");
	this.shape_2.setTransform(5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,14);


(lib.pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AAKA8IAAh3IAeAAIAAB3gAgnA8IAAh3IAeAAIAAB3g");
	this.shape.setTransform(4,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AAKA8IAAh3IAeAAIAAB3gAgnA8IAAh3IAeAAIAAB3g");
	this.shape_1.setTransform(4,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF00").s().p("AhJBoIAAhoIAAAAIAAAAIAAhnICTAAIAADPg");
	this.shape_2.setTransform(5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,8,12);


(lib.urlBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C0407").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.textRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text_right();
	this.instance.parent = this;
	this.instance.setTransform(-113,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textRight, new cjs.Rectangle(-113,-80,226,160), null);


(lib.textLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text_left();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.textLeft, new cjs.Rectangle(-108.5,-86,217,172), null);


(lib.Navigate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nav
	this.big_play_btn = new lib.play();
	this.big_play_btn.name = "big_play_btn";
	this.big_play_btn.parent = this;
	this.big_play_btn.setTransform(178.6,48.4,11.794,11.794,0,0,0,0.5,0.5);
	this.big_play_btn.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,4);
	this.big_play_btn.visible = false;
	new cjs.ButtonHelper(this.big_play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.sound_off = new lib.sound_off();
	this.sound_off.name = "sound_off";
	this.sound_off.parent = this;
	this.sound_off.setTransform(422.8,235.8,1.5,1.5,0,0,0,6,8.2);
	this.sound_off.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,4);
	new cjs.ButtonHelper(this.sound_off, 0, 1, 2, false, new lib.sound_off(), 3);

	this.sound_on = new lib.sound_on();
	this.sound_on.name = "sound_on";
	this.sound_on.parent = this;
	this.sound_on.setTransform(425.8,234.8,1.5,1.5,0,0,0,8,7.5);
	this.sound_on.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,4);
	new cjs.ButtonHelper(this.sound_on, 0, 1, 2, false, new lib.sound_on(), 3);

	this.pause_btn = new lib.pause();
	this.pause_btn.name = "pause_btn";
	this.pause_btn.parent = this;
	this.pause_btn.setTransform(11.1,223.5,1.5,1.5);
	this.pause_btn.shadow = new cjs.Shadow("#333333",0,0,4);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause(), 3);

	this.play_btn = new lib.play();
	this.play_btn.name = "play_btn";
	this.play_btn.parent = this;
	this.play_btn.setTransform(11.1,222,1.5,1.5);
	this.play_btn.shadow = new cjs.Shadow("#333333",0,0,4);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.pause_btn},{t:this.sound_on},{t:this.sound_off},{t:this.big_play_btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Navigate, new cjs.Rectangle(6.1,37.5,439.3,214.5), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.initialized) == "undefined") {
		    this.btn.addEventListener("click", function() {
		        window.click();
				videoPlayer.pause();
		    });
		    this.initialized = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.btn = new lib.urlBtn();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.urlBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-485,-125,970,250), null);


(lib.VideoPLayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var video = document.createElement('video');
		
		video.muted = true;
		video.volume = 0.6;
		// video.playsinline = true;
		video.type="video/mp4";
		//video.inline = true;
		//video.autoplay = true;
		//video.src = '444x250_15sec.mp4';
		
		var videoBM = new createjs.Bitmap(video);
		this.video.addChild(videoBM);
		
		var self = this;
		var play_btn = this.navigate.play_btn;
		var big_play_btn = this.navigate.big_play_btn;
		var pause_btn = this.navigate.pause_btn;
		var sound_on = this.navigate.sound_on;
		var sound_off = this.navigate.sound_off;
		
		startCondition();
		
		play_btn.addEventListener('click', playBtnClickHandler);
		big_play_btn.addEventListener('click', bigPlayBtnClickHandler);
		pause_btn.addEventListener('click', pauseBtnClickHandler);
		sound_on.addEventListener('click', soundOnClickHandler);
		sound_off.addEventListener('click', soundOffClickHandler);
		
		video.addEventListener('ended', videoEndedHandler);
		video.addEventListener('volumechange', videoVolumeChangeHandler);
		
		videoPlayer = {};
		videoPlayer.play = function(url)
		{
			video.src = url;
			bigPlayBtnClickHandler();
		}
		videoPlayer.pause = function()
		{
			video.pause();	
		}
		videoPlayer.onended = function(){};
		
		function startCondition()
		{
			play_btn.visible = false;
			pause_btn.visible = false;
			sound_on.visible = false;
			sound_off.visible = false;
			//close_btn.visible = false;
		}
		
		// video handlers
		function videoPlayHandler() 
		{
			play_btn.visible = false;
			pause_btn.visible = true;
		}
		
		function videoPauseHandler() 
		{
			play_btn.visible = true;
			pause_btn.visible = false;	
		}
		
		function videoEndedHandler() 
		{	
			closeBtnClickHandler();
			videoPlayer.onended();
		}
		
		function videoVolumeChangeHandler() 
		{
			sound_on.visible = !video.muted;
			sound_off.visible = video.muted;
		}
		
		// button handlers
		function bigPlayBtnClickHandler()
		{
			var promise = video.play();

			if (promise !== undefined) {

				promise.then(_ => {
					big_play_btn.visible = false;
					console.log(video);
				}).catch(error => {
					big_play_btn.visible = true;
				});

			}
			videoVolumeChangeHandler();
			video.addEventListener('play', videoPlayHandler);  
			video.addEventListener('pause', videoPauseHandler); 
		}
		
		function playBtnClickHandler()
		{
			video.play();
		}
		
		function pauseBtnClickHandler()
		{
			video.pause();
		}
		
		function soundOnClickHandler()
		{
			video.muted = true;	
		}
		
		function soundOffClickHandler()
		{
			video.muted = false;
		}
		
		function closeBtnClickHandler()
		{
			video.pause();	
			big_play_btn.visible = true;
			//video.removeEventListener('play', videoPlayHandler);  
			//video.removeEventListener('pause', videoPauseHandler);
		}
		
		/*function iOS() {
		
		  var iDevices = [
		    'iPad Simulator',
		    'iPhone Simulator',
		    'iPod Simulator',
		    'iPad',
		    'iPhone',
		    'iPod'
		  ];
		
		  if (!!navigator.platform) {
		    while (iDevices.length) {
		      if (navigator.platform === iDevices.pop()){ return true; }
		    }
		  }
		
		  return false;
		}
		
		if (iOS()) {
			video.src = '444x250_15sec.mp4';
			big_play_btn.visible = true;
		} else {
			videoPlayer.play('444x250_15sec.mp4');
		}*/
		videoPlayer.play('444x250_15sec.mp4');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// navigate
	this.navigate = new lib.Navigate();
	this.navigate.name = "navigate";
	this.navigate.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.navigate).wait(1));

	// video
	this.video = new lib.Video();
	this.video.name = "video";
	this.video.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.video).wait(1));

	// bg
	this.video_bg = new lib.VideoBg();
	this.video_bg.name = "video_bg";
	this.video_bg.parent = this;
	this.video_bg.setTransform(221,124,1,1,0,0,0,221,124);

	this.timeline.addTween(cjs.Tween.get(this.video_bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.VideoPLayer, new cjs.Rectangle(0,0,445.3,252), null);


(lib.videoPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VideoPLayer();
	this.instance.parent = this;
	this.instance.setTransform(-222,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.videoPlayer, new cjs.Rectangle(-222,-125,445.3,252), null);


// stage content:
(lib.marvel_970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var video = this.video_player;
		var left = this.text_left;
		var right = this.text_right;
		var bg = this.bg;
		var flag = false;
		
		this.stop();
		
		var parentElement = canvas.parentElement;
		while(parentElement.parentElement) {
			parentElement = parentElement.parentElement;
		}
		
		var normalWidth = lib.properties.width;
		var currWidth;
		var self = this;
		window.addEventListener("resize", onWindowResize);
		
		function onWindowResize() 
		{	
			currWidth = parentElement.clientWidth;
			if (currWidth >= 970) currWidth = 970;
			if (currWidth < 300) currWidth = 300;
			flag = currWidth >= 950;
			canvas.width = currWidth;	
			canvas.style.width = currWidth +'px';
			resizeElements();
		}
		
		onWindowResize();
		
		// функция для ресайза элементов
		function resizeElements() {		
			video.x = currWidth * 0.5;
			bg.x = currWidth * 0.5;
			left.x = currWidth * 0.127;
			right.x = currWidth * 0.87;
			left.visible = flag;
			right.visible = flag;
			video.scaleX = video.scaleY = Math.min(currWidth/444, 1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text_right = new lib.textRight();
	this.text_right.name = "text_right";
	this.text_right.parent = this;
	this.text_right.setTransform(845,160.4);

	this.text_left = new lib.textLeft();
	this.text_left.name = "text_left";
	this.text_left.parent = this;
	this.text_left.setTransform(132.5,154.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_left},{t:this.text_right}]}).wait(1));

	// video
	this.video_player = new lib.videoPlayer();
	this.video_player.name = "video_player";
	this.video_player.parent = this;
	this.video_player.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.video_player).wait(1));

	// bg
	this.bg = new lib.bg_1();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,970,252);
// library properties:
lib.properties = {
	id: '87FF22F995C823459F19EF800E14C86D',
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/text_left.png", id:"text_left"},
		{src:"images/text_right.png", id:"text_right"},
		{src:"images/video.jpg", id:"video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['87FF22F995C823459F19EF800E14C86D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;