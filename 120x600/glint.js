(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"/frame_1_copy.png", id:"frame_1_copy"},
		{src:"/ld_copy.png", id:"ld_copy"}
	]
};



// symbols:



(lib.frame_1_copy = function() {
	this.initialize(img.frame_1_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.ld_copy = function() {
	this.initialize(img.ld_copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.125,1],0,0,0,0,0,23.4).s().p("AkyCAQgHgwBVhIQBXhHCAg1QB9g1BfgDQBegEAGAxQAHAwhVBIQhXBHh/A1Qh9A1heADIgMAAQhUAAgGgtg");
	this.shape.setTransform(30.9,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.4,61.7,34.8);


(lib.end_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSGeQgEgGAAgIIAIAAIAAgIIAAgIIAAgIIAJAAIAAgIQgFAAgCgCQgCgCAAgDIAAgIQgDAAgCgCQgDgCAAgEIAAgIQgEABgCgDQgCgCAAgEIAAgIIAAgIQgEAAgDgCQgBgBAAgEIAAgIQgFAAgCgBQgBgDAAgEIgJAAQAAAEgCADQgCABgEAAQAAAEgCACQgDACgEAAQAAAEgBABQgDACgEAAQAAAFgCABQgCACgEAAIAAAIIAAAIQAEAAACACQACACAAAEQAEAAADACQABACAAAEQAEAAADACQACABAAAFQAEAAACACQACACAAADQAEAEAAAEIgEAAIgIAAQgFAAgCgCQgCgCAAgEQgEAAgDgCQgBgCAAgDQgEAAgCgDQgCgBAAgEQgFAAgBgCQgCgCAAgEQgFAAgCgCQgCgCAAgEIgIAAIAAAYIAAAHIAAAEQgEAAgEgEIAAgHIAAhuIAAgIQAEAAACACQACACAAAEIAAA3IAAAHIAIAAIAAgHIAJAAIAIAAIAAgIIAIAAIAAgIIAIAAIAAgIIAJAAIAIAAIAJAAIAIAAQAEABACABQACACAAAEQAEAAACACQACACAAAEIAAAIQAEAAACACQACACAAADIAAAIIAAAIQAEAAACACQADACAAAEIAAAIIAGAAIAAgIIAIAAIAAgIIAAgIIAIAAIAAgIIAAgHIAAgIIAJAAIAAgIIAAgIIAIAAQAEAEADAFQABADAAAEQAAAEgBACQgDACgEAAIAAAHIAAAIQAAAFgBABQgCACgFAAIAAAIQAAAEgCACQgDACgEAAIAAAIIAAAIQAAADgCACQgBACgFAAIAAAIQAAAEgCACQgCACgEAAIAAAIIAAAIQAAAEgBACQgBACgEAAQAAADgDACQgCACgEAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgADRGQQgEgBgCgBQgDgCAAgEIgIAAIgIAAQgFAAgBgCQgDgCABgEIgJAAIgIAAQgEAAgDgCQgCgCAAgEIgIAAQgEAAgCgCQgCgCAAgEIgIAAQgFAAgBgCQgDgCAAgDIAAgIQgEAAgCgCQgCgCAAgEIAAgIQgEABgCgDQgCgCgBgEIAAgIIAAgXIAAgIIAJAAIAAgIIAAgIIAIAAIAAgHIAAgIIAJAAIAIAAIAAgIIAIAAIAIAAIAJAAIAAgIIAIAAQAEAAADACQACACAAAEIAIAAIAIAAQAEAAACACQACACAAAEQAFAAACACQACACAAAEQADAAACACQACACAAADQAFAAACACQACACAAAEIAAAIQAEAAACACQADACgBAEIABAIQAGAUgPADIAAAIIAAAIQAAAEgCACQgCACgFAAQAAAEgCABQgCADgDAAQAAADgCACQgCACgFAAIAAAIIAAAIIAJAAIAHAAQAFAAACACQACACAAAEQAAAEgCACQgCABgFABIgHAAgACMERQgCABgEAAQAAAEgCADQgCABgEAAIAAAIQAAAEgCADQgDABgEAAIAAAIIAAAHIAAAIIAAAIQAEAAADACQACACAAAEIAAAIQAEAAACACQACACAAAEQAEAAACACQACABAAAFIAIAAQAFAAACACQACACAAADIAIAAIAJAAIAAgHIAIAAIAIAAIAAgIIAIAAIAAgIIAJAAIAAgIIAAgIIAAgIIAHAAIAAgIIAAgHQgEAAgBgCQgCgCAAgEIAAgIIAAgIQgEAAgCgBQgDgDAAgEQgEAAgCgBQgCgCAAgEIgIAAQgFAAgBgCQgDgCABgEIgJAAIgIAAQAAAEgCACQgCACgFAAIgIAAQAAAEgCACgAjEGAIgJAAQgEAAgBgCQgCgCgBgEIgIAAIgIAAQgEAAgDgCQgCgCAAgEIAAgHIAJAAIAIAAQAEAAACACQACACAAADIAIAAIAJAAIAIAAIAAgHIAIAAIAJAAIAAgIIAIAAIAAgIIAAgIQgEABgCgDQgCgCAAgEQgFAAgCgCQgCgBAAgFIgIAAIgIAAQgFAAgBgCQgDgBAAgFIgIAAIgIAAQgEAAgCgCQgCgBAAgEQgEAAgDgCQgCgCAAgEIAAgIIAAgIIAAgIIAAgHIAAgIIAJAAIAAgIIAIAAIAIAAIAIAAIAAgIIAJAAIAIAAQAEAAADACQABACAAAEIAJAAIAIAAQAEAAACACQACACAAAEQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAABQgHADgIAAIgJAAQgEAAgCgCQgCgCAAgEIgIAAIgJAAQAAAEgCACQgCACgEAAQAAAEgCACQgCABgEAAIAAAIIAAAIQAEAAACACQACACAAAEIAIAAQAEAAADACQACACAAAEIAIAAIAIAAQAEAAADACQACACAAADIAIAAQAEABACACQACACAAADQAEAAADADQACABAAAEIAAAIIAAAIIAAAIQAAAEgCABQgDADgEAAQAAADgCACQgCACgEAAQAAAEgCACQgCACgEAAIgJAAQAAAEgBACQgDACgEAAIgIAAgAkWDCQgCgCAAgDIAAgIIAAhtIAAgIIAJAAQADAAADACQACABABAFIAIAAIAAgIIAIAAIAIAAIAJAAIAIAAIAIAAQAFAAACACQACABAAAFQAEAAACACQACABAAAEQAEABACACQACACAAADIAAAIQAPACgFAWIgBAIQAAAEgCABQgCACgFAAQAAAEgCACQgCACgEAAQAAADgCACQgCACgEAAQAAAFgCACQgCABgFAAIgIAAQAAAEgDADQgCABgDAAQgEAAgCgBQgDgDAAgEIgIAAIgIAAIgIAAIAAAYIAAAIQgBADgCACQgDACgDAAQgEAAgDgCgAj4BVQgCACgEAAQAAAEgCACQgDACgDAAIAAAYIAAAIIAAAHQADAAADACQACACAAAEIAIAAIAIAAIAJAAIAIAAIAIAAIAAgIIAJAAIAAgHIAIAAIAAgIIAAgIIAAgIQgEAAgCgCQgCgCAAgEIAAgIQgEAAgCgCQgDgBAAgFIgIAAIgIAAIgJAAIgIAAQAAAFgCABgAHICdIgIAAIgRAAIgIAAIgJAAQgEAAgCgBQgCgCAAgFQgEAAgCgCQgCgCAAgDQgEAAgCgCQgCgCAAgEIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAIAAIAAgIIAIAAIAAgHIAAgIIAIAAIAJAAIAIAAIAJAAIAIAAIAIAAQAEAAADACQACABAAAFQAEAAACACQACABABAEQADABADACQACACAAADIAAAIIAAAIIAAAIQAAADgCADQgDACgDAAIgJAAIgZAAIgJAAIgZAAIAAAIQAEAAACACQACACAAADQAFAAACACQACACAAAEIAIAAIAJAAIAIAAIAIAAIAJAAIAJAAQADADAAAEIgDAAQgBAFgCACQgCABgEAAIgJAAgAGeBXQAAAEgCACQgCACgEAAIAAAIIAZAAIAJAAIAQAAIAJAAIAAgIQgFAAgCgCQgBgCgBgEIAAgIIgIAAIgIAAIgJAAIgIAAIgJAAIAAAIgAFkCdIgIAAIgSAAIgIAAQgDAAgDgBQgCgCAAgFQgEAAgCgCQgCgCgBgDQgDAAgCgCQgDgCAAgEQgEAAgCgCQgCgBAAgEIAAgIIAAgIIAAgIIAAgIIAAgIIAIAAIAAgIIAIAAIAAgHIAJAAIAAgIIAIAAIAIAAIAJAAIAJAAIAIAAIAJAAQADAAACACQADABAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgGADgJAAIgIAAIgJAAIgJAAIgIAAQAAAFgBABQgCACgFAAIAAAIQAAAEgCACQgCACgFAAIAAAIIAAAIQAFAAACABQACACAAAFIAAAHQAFAAACACQABACAAAEIAIAAIAJAAIAJAAIAIAAIAJAAQADAAACACQADABAAAEQAAAFgDACQgCABgDAAIgJAAgAEDCdQgDgeAAggQgGAAgBgCQgCgCAAgEIAAgIIgIAAIgJAAIgIAAIgJAAQAAAFgCABQgCACgFAAQAAAEgBACQgDACgEAAIAAAvIAAAHQAAAFgBACQgCABgFAAIgEAAQgFgqAAgrIAAgIIAJAAQAFAAACACQABABAAAFIAIAAIAAgIIAJAAIAJAAIAIAAIAJAAIAIAAQAEAAACACQADABAAAFQAEAAABACQADABAAAEIAAAIQAEAAACADQACABAAAEIAAAvIAAAHQAAAFgCACQgCABgEAAgACKCdIgIAAIgJAAIgRAAIgIAAQgEAAgCgBQgCgCAAgFQgFAAgCgCQgCgCAAgDQgFAAgCgCQgCgCAAgEIAAgHQgDAAgCgDQgCgCgBgDIAAgIIAAgIIAIAAIAAgIIAAgIIAAgIIAJAAIAAgHIAJAAIAAgIIAIAAIAIAAIAJAAIAIAAIAJAAQADAAACACQADABAAAFQAEAAACACQACABABAEQADABACACQACACAAADIAAAIQAEAEADAEQACAEAAAEQAAADgDADQgBACgFAAIgHAAIgaAAIgIAAIgZAAIAAAIIAAAHQAEAAACACQACACAAAEIAIAAIAJAAIAIAAIAJAAIAIAAIAJAAQADAAACACQACABAAAEQAAAFgCACQgCABgDAAIgJAAgABeBVQgCACgEAAIAAAIIAAAIIAZAAIAIAAIAJAAIAIAAIAAgIIAAgIQgEAAgCgCQgCgBAAgFIgJAAIgIAAIgJAAIgIAAQAAAFgCABgAAhCdQgEgqgBgrIAAgIIAJAAQAEAAADACQACABAAAFIAABGIAAAHQAAAFgCACQgDABgEAAgAgxCdQgEgqAAgrIAAgIIAIAAQAFAAACACQACABAAAFIAIAAIAAgIIAJAAIAIAAIAJAAIAGAAQADADAAAFIgDAAQAAADgDACQgBACgCAAIgJAAIgIAAQAAAFgCABQgDACgEAAIAAAIQAAAEgCACQgCACgEAAIAAAnIAAAHQAAAFgCACQgCABgFAAgAhgCdIgHAAIgJAAIgQAAIgJAAQgFAAgCgBQgCgCABgFQgEAAgDgCQgCgCAAgDQgEAAgCgCQgCgCAAgEIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAIAAIAAgHIAJAAIAAgIIAIAAIAJAAIAIAAIAIAAIAJAAIAHAAQAFAAACACQADABAAAFIAAAHQAEABACACQABACAAADQAFAAACADQACABAAAEIAAAIIAAAIQAAADgCADQgCACgFAAIgHAAIg7AAIAAAIIAAAHQADAAADACQACACAAAEIAJAAIAIAAIAIAAIAJAAIAHAAQAKAAAGADQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAFgBACQgCABgEAAIgKAAgAiLBVQgDACgDAAIAAAIIAAAIIAxAAIAKAAIAAgIQgFAAgCgCQgCgCgBgEQgEAAgBgCQgCgBAAgFIgJAAIgIAAIgIAAIgJAAQAAAFgCABgAk3CcQgCgCgBgFQgEAAgCgCQgCgCAAgDQgDAAgCgCQgCgCgBgEIAAgHIgJAAQAAAEgCABQgCACgDAAQgBAEgCACQgCACgEAAIAAAHQAAAFgCACQgCABgFAAIgIAAQgEAAgCgBQgCgCAAgFIAIAAIAAgHIAAgIIAIAAIAAgHIAJAAIAAgIIAAgIIAAgIIAAgIQgEAAgCgCQgDgCAAgEQgEAAgCgCQgCgBAAgFIAAgHQgEgBgCgCQgCgCAAgDIAIAAIAIAAQAFAAACACQACABAAAFIAAAHQAEABACACQACACABADQADAAACADQACABAAAEIAJAAIAAgIIAAgIIAIAAIAAgHIAIAAIAAgIIAJAAQAFAAACACQACABAAAFQAAADgCACQgCACgFAAQAAAFgCABQgBACgGAAIAAAIQAAAEgCACQgCACgEAAIAAAIIAAAIQAEAAACABQACACAAAFIAAAHQAGAAABACQACACAAAEQAFAAACACQACABAAAEQAAAFgCACQgCABgFAAQgEAAgCgBgAmeCdIgIAAIgJAAIgRAAIgIAAQgEAAgBgBQgDgCgBgFQgEAAgBgCQgCgCAAgDQgEAAgCgCQgCgCAAgEIAAgHIAAgIIAAgQIAAgIIAAgIIAAgIIAIAAIAAgHIAHAAIAAgIIAJAAIAIAAIAJAAIAIAAIAJAAQAEAAACACQACABAAAFQAEAAADACQABABAAAEQAFABACACQACACAAADQAFAAACADQABABAAAEIAAAIIAAAIQAAADgBADQgCACgFAAIgJAAIgQAAIgJAAIgiAAIAAAIIAAAHQAGAAABACQACACAAAEIAIAAIAJAAIAIAAIAJAAIAIAAQAIAAAHADQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABQAAAFgCACQgCABgFAAIgIAAgAnKBVQgBACgGAAIAAAIIAAAIIAiAAIAJAAIAIAAIAIAAIAAgIQgEAAgCgCQgCgCAAgEQgEAAgDgCQgBgBAAgFIgJAAIgIAAIgJAAIgIAAQAAAFgCABgAAfAvQgCgDgBgEQgEAAgBgBQgCgDAAgEIAHAAIAAgIIAJAAQAEAAADADQACACAAADIAAAIQAAAEgCADQgDABgEAAQgEAAgCgBgAjSg3IgIAAIgJAAIgQAAIgJAAIgHAAQgFAAgBgCQgDgCAAgFQgEAAgCgCQgCgBAAgFIAAgIQgEAAgCgCQgCgCAAgEIAAgIIAAgJIAAgIIAAgIIAAgJIAIAAIAAgJIAIAAIAAgIIAJAAIAAgJIAHAAIAJAAIAIAAIAIAAIAJAAQADAAACACQADADAAAEQADAAACACQACACABAEQAEABABACQACACAAAEIAAAJIAAAIIAAAIQAAAEgCACQgBADgEAAIgIAAIgIAAIgJAAIggAAIgJAAIAAAIQAFAAABACQADADAAADQAEAAABADQADABgBAEIAJAAIAIAAIAIAAIAJAAIAIAAIAIAAQAEAAABADQACABAAAEQAAAFgCACQgBACgEAAIgIAAgAj+iEQgBACgEAAQAAAEgDACQgBACgFABIAAAIIAJAAIAgAAIAJAAIAIAAIAAgIIAAgJQgFAAgCgCQgBgCAAgFIgJAAIgIAAIgIAAIgJAAQABAFgDACgAmCg3QgEhDABhDIAAgJIAHAAQAEAAACADQACACAAAEIAAAZIAAAIIAIAAIAIAAIAJAAIAIAAIAHAAIAJAAQAEAAADACQABADAAAEQAEAAADACQACACAAAEIAAAJIAAAJIAAAxIAAAIIAAAFQgFAAgEgFIAAgIIAAghQgEAAgCgCQgCgCAAgEIAAgIIAAgJIAAgJIgJAAIgHAAIgIAAIgJAAIgIAAIAAAJQAAAEgCACQgCACgEABIAAAxIAAAIQAAAFgCACQgCACgEAAgAmng3IgIAAIgQAAQgEAAgDgCQgCgCAAgFQgEAAgBgCQgCgBAAgFIAAgIIAAg7IgIAAQgFAAgCgCIgBgBIAAgOIAIAAIAIAAIAAgIIAAgIIAAgIIAHAAQAEAAADACQACACAAAEIAAAIIAAAIIAHAAQAOAAAKAFQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABQAAAEgCACQgCACgEAAIgIAAIgQAAIAAArIAAAIIAAAIIAAAIIAHAAIAJAAIAIAAIAIAAQAFAAACADQACABAAAEQAAAFgCACQgCACgFAAIgIAAgAGug5IgIAAIgPAAIgIAAQgEAAgCgBQgCgCAAgFQgEAAgCgCIgBgFIAAgBQgEAAgCgCQgCgCgBgFQgEAAgCgCQgCgBAAgFIAAgIIAAgQIAAgJIAAgIIAIAAIAAgJIAJAAIAAgIIAHAAIAAgJIAIAAIAIAAIAHAAIAIAAIAIAAQAEAAACACQACACAAAFQAEAAACABQACADAAAEQAEAAACACQACACAAAFQAEgBABADQACABAAAFIAAAJIAAAIIAAAIIAAAIIAAAIQAAAFgCACQgBACgEAAIAAABQAAABAAABQgBABAAAAQAAABAAAAQgBABAAAAQgCACgEAAQAAAFgCACQgCABgEAAIgIAAgAGMiFQgBACgEAAQAAADgCACQgCADgDAAIAAAJIAAAIIAAAIIAAAIQADABACACQACACAAADQAEAAABADQACACABAEIAIAAIAHAAIAIAAIAIAAIAAgJIAIAAIAAgIIAIAAIAAgIIAAgIIAAgIIAAgJQgEAAgCgDQgCgCAAgDQgEAAgCgCQgCgDAAgEIgIAAIgIAAIgHAAIgIAAQgBAEgCADgAFZg5IgIAAIgIAAIgIAAIgIAAQgEAAgCgBQgCgCAAgFIAAgHIAAgBQgEAAgBgCQgDgCAAgFIAAgIIAAgyIgHAAQgEAAgCgCQgCgCAAgEIAAgJIAIAAIAHAAIAAgIIAAgIIAAgJIAIAAQAEAAACACQACADAAAEIAAAIIAAAIIAYAAIAIAAQADAAABACQACACAAAFQAAAEgCACQgBACgDAAIgIAAIgYAAIAAAqIAAAIQAEABACACQACACAAADIAAAJIAIAAIAIAAIAIAAIAGAAQAFAAABABIABABQACACAAAEQAAAFgCACQgCABgFAAIgGAAgADQg7IgIAAIgIAAIgHAAQgFAAgCgCQgBgDAAgEQgEAAgCgBQgCgDAAgEIAAgIIAAgJIAAgyIgIAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgEgHAAgIIAIAAIAIAAIAAgIIAAgIIAAgJIAIAAQADAAADACQACACAAAFIAAAIIAAAIQAPAAAPADQABABAAAFQAAADgCACQgCADgEAAIgIAAIgPAAIAAAyIAAAJIAAAIIAHAAIAIAAIAIAAIAIAAQAEAAACACQABACAAAEQAAAEgBADQgCACgEAAIgIAAgAB6g7IgIAAIgQAAIgIAAIgHAAIgIAAQgFAAgBgCQgCgDAAgEIAAgIIAIAAIAIAAIAHAAQAEAAACACQACACAAAEIAIAAIAIAAIAAgIIAIAAIAAgIIAAgJQgFAAgCgCQgBgCAAgEIgIAAIgIAAQgEAAgBgCQgDgCAAgFIgHAAQgEAAgCgCQgCgCAAgEQgFAAgBgCQgCgCAAgFIAAgIIAAgIIAAgIIAIAAIAAgJIAIAAIAHAAIAIAAIAIAAIAIAAIAIAAIAIAAQADAAACACQADACAAAFQAAADgDACQgCADgDAAIgIAAIgIAAIgIAAIgQAAIgHAAIAAAIIAAAIIAHAAQAEAAACADQACACAAAEIAIAAIAIAAQADAAAEACQABACAAAEIAIAAQADAAACACQADACAAAFIAAAIQADAAACACQACACAAAFQAAAEgCACQgCACgDAAIAAAIQAAAEgDADQgCACgDAAIgIAAgAgCg7QgFgvAAgtIAAgJIAHAAIAHAAIAIAAIAIAAIAIAAIAIAAQADAEAAAFIgDAAQAAADgCABQgHAEgHAAIgIAAQgBAEgBACQgCACgEAAIAAAIIAAAJIAAAqIAAAIQAAAEgCADQgCACgDAAgAgxg7QgFgvAAgtIAAgJIAIAAQAEAAACACQACACAAAFIAABLIAAAIQAAAEgCADQgCACgEAAgAhwg7QgFgqAAgqIgHAAQgEAAgCgDQgCgCAAgDIAAgJIAIAAIAHAAIAAgIIAAgIIAAgJIAAgIIAIAAIAAgJIAIAAIAIAAIAJAAIAGAAIAIAAQAFAAABACQACACAAAFQAAADgCADQgBACgFAAIgIAAIgGAAIgJAAIgIAAIAAAJIAAAIIAAAIIAIAAIAJAAIAGAAQAFAAABACQACACAAAFQAAADgCACQgBADgFAAIgGAAIgRAAIAABDIAAAIQAAAEgCADQgBACgFAAgAg0iyQgCgDAAgEIAAgIIAAgJIAIAAQAEAAACACQACACAAAFIAAAIQAAAEgCADQgCACgEAAQgEAAgCgCgAGgjwIgIAAIgJAAIgIAAIgIAAIgJAAQgEAAgDgCIgBAAQgBgCAAgEQgFAAgCgCQgBgCAAgEQgFAAgCgCQgCgCAAgFIAAgIIAAgJIAAgIIAJAAIAAgIIAAgIIAAgIIAIAAIAAgIQgFAAgCgDQgBgCAAgEIAAgIQgFAAgBgBQgDgIAAgHIAAgJIAJAAIAAgJIAIAAIAAgIIAJAAIAJAAIAIAAIAIAAIAJAAIAQAAIAJAAIAIAAQAEAEABAEIgFAAQAAAFgCACQgCACgEAAIAAAJIAAAIIAAAIIAAAIQAAAEgCACQgCADgFAAQAAAEgCACQgCACgEAAIgIAAIgJAAQgBAEgCACQgCACgDAAIgIAAIAAAIIAIAAIAIAAIAJAAIAIAAQAEAAACADQACACAAADIAJAAQAEABACACQACACAAADIAAAJIAAAIIAAAJQAAAEgCACQgCACgEAAQAAAEgCACIAAAAQgCACgFAAIgIAAgAFtkRIAAAIQAEABADACQACACAAAEIAJAAQADAAACACQADACAAAEIAIAAIAAgIIAJAAIAIAAIAAgJIAIAAIAAgIQgEAAgCgBQgCgDAAgFIgIAAIgJAAIgIAAIgIAAIgJAAIgJAAIAAAJgAF2ljIAAAIIAAAIIAAAIQAEAAABADQAEABAAAFIAIAAIAIAAIAAgJIAJAAIAAgIIAIAAIAAgIIAAgIQgEAAgCgCQgCgCAAgFIgJAAIgIAAIgIAAIgJAAIAAAJgAiEkSQgCgDAAgFIgJAAQgEAAgBgBQgDgCAAgFQgEAAgCgCQgDgBAAgFIAAgIIAAgIIAAgIIAAgJIAJAAIAAgIIAIAAIAJAAIARAAIAIAAIAJAAIAJAAIAAgIIAAgIIAAgJIgJAAIgJAAIgRAAIgIAAQgEAAgFgCQgEgCgEgFIAAgIIAIAAIAJAAIAIAAIAJAAIAIAAIAJAAIAJAAQADAAADACQACACAAAEQAEABACACQACACABAEIAAAJIAAApIAAAIIAAAIQAEAAACADQACACAAADQAAAFgCACQgCABgEAAQgGAAgBgBQgCgCAAgFIgIAAQAAAFgCACQgDABgEAAIgJAAIgIAAQAAAFgCADQgDABgEAAQgEAAgCgBgAiPk6IAAAIIAAAIQAFAAACADQACACAAADIAIAAIAJAAIAAgIIAIAAIAJAAIAAgIIAJAAIAAgIIAAgIQgFAAgCgDQgCgCAAgEIgJAAIgIAAIgJAAQAAAEgCACQgCADgEAAIgJAAIAAAIgAE2kaQgEgggBghIAAgIQgDAAgCgCQgDgCAAgFIgIAAIgJAAIgJAAIgIAAIAAAJQAAADgCADQgCACgEAAIAAAxIAAAIQgBAFgCACQgCABgEAAIgEAAQgEgtAAguIAAgIIAIAAIAJAAIAIAAIAIAAIAJAAIAJAAIAIAAIAIAAQAFAAACACQABACAAAEQAFABADACQABACAAAEIAAAJIAAAIIAAAxIAAAIQAAAFgBACQgDABgFAAgACykaIgJAAIgQAAIgJAAQgEAAgCgBQgDgCAAgFQgDAAgCgCQgDgBAAgFQgEAAgCgCQgDgCAAgEIAAgIQgEAAgBgCQgCgCAAgEIAAgJIAAgIIAAgIIAHAAIAAgIIAAgJIAJAAIAAgJIAIAAIAAgIIAJAAIAJAAIAIAAIAIAAIAJAAIAIAAQAFAAADACQACACAAAEQAEABACACQACACAAAEQAEAAACACQACADAAAEIAAAIIAAAIIAAAIQAFAEgBAFIgEAAIAAAIIAAAIQAAAEgCACQgCACgEAAQAAAFgCABQgCACgEAAQAAAFgCACQgDABgFAAIgIAAgACOllQgCACgFAAIAAAIIAAAIIAAAIIAAAJIAAAIIAAAIQAFAAACADQACACAAADIAJAAIAIAAIAIAAIAJAAIAIAAIAAgIIAKAAIAAgIIAAgIIAAgJIAAgIIAAgIQgGAAgCgCQgCgDAAgDIAAgJIgIAAIgJAAIgIAAIgIAAIgJAAQAAAFgCACgABQkaQgDggAAghIAAgIQgFAAgCgCQgCgCAAgFIgJAAIgIAAIgJAAQAAAFgCACQgCACgFAAIAAAIIAAAxIAAAIQAAAFgBACQgCABgEAAIgFAAQgEggAAghIAAgIQgEAAgDgCQgCgCAAgFIgIAAIgHAAIgIAAQAAAFgCACQgDACgEAAIAAAIIAAAxIAAAIQAAAFgCACQgCABgEAAIgFAAQgEgtAAguIAAgIIAJAAIAIAAIAJAAIAIAAIAHAAIAIAAQAFAAACACQACACAAAEIAJAAIAHAAIAAgIIAJAAIAJAAIAIAAIAJAAIAJAAQADAAACACQADACAAAEIAAAJQAEAAACACQADADAAAEIAAAIIAAAxIAAAIQAAAFgDACQgCABgEAAgAj0kaIgJAAIgIAAIgRAAIgJAAQgEAAgDgBQgCgCAAgFQgEAAgCgCQgCgBAAgFQgEAAgCgCQgDgCAAgEQgEAAgCgCQgCgCAAgEIAAgIIAAgRIAAgIIAAgIIAIAAIAAgJIAJAAIAAgJIAIAAIAAgIIAJAAIAJAAIAIAAIAJAAIAIAAQAEAAADACQACACAAAEQAEABACACQACACAAAEQAEAAADACQACADAAAEIAAAIIAAAIIAAAIQAAAEgCACQgDADgEAAIgIAAIgrAAIgJAAIgIAAIAAAIQAEAAACADQACABAAAEQAFAAACADQADACgBADIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAQAEAAADADQACACAAADQAAAFgCACQgDABgEAAIgIAAgAkhllQgCACgFAAQAAADgCADQgCACgEAAIAAAIIAIAAIAJAAIAiAAIAJAAIAAgIIAAgIQgFAAgCgCQgDgCABgFIgIAAIgJAAIgIAAIgJAAQABAFgDACgAl0kaIgIAAIgJAAIgIAAIgaAAQgEAAgCgBQgCgCgBgFIAAgIIAAhsIAAgIIAJAAIAaAAIAIAAIAJAAIAIAAIAJAAQAEAAACADQACACAAADQAEAAACADQADACAAAEIAAAIIAAAIIAAAIIAAAJQAAAFgDACQgCACgEAAIAAAIQAEgBACADQADACAAAEIAAAIQAEAAABADQACABAAAFIAAAIIAAAIQAAAEgCACQgBACgEAAQAAAFgDABQgCACgEAAQAAAFgCACQgCABgEAAIgJAAgAmfkyIAAAIIAaAAIAJAAIAIAAIAJAAIAAgIIAIAAIAAgIIAAgIIAAgJQgEAAgCgCQgCgCAAgEIgJAAIgIAAIgJAAIgRAAIgJAAIAAAhgAmflsIAAAJIAaAAIAJAAIAIAAIAAgJIAJAAIAAgJIAAgIIAAgIQgEAAgDgCQgCgCAAgEIgIAAIgJAAIgaAAIAAAhg");
	mask.setTransform(-89.3,-22);

	// Sheen
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(-234.9,-193.4,1.953,7.887);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:-13.6,y:-182.4},22).wait(1));

	// Layer 1
	this.instance_1 = new lib.ld_copy();
	this.instance_1.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,120,600);


(lib.copy1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGCGnIgJAAIgIAAIgJAAIgJAAQgDAAgDgCQgBgCgBgEIgJAAQgDAAgDgCQgCgCAAgEIAAgIIAAgIIAAgJIAAgIIAIAAIAAgJIAAgIIAAgIIAAgIQgDAAgDgCQgCgDAAgEIAAgHIAAgJIAAgIIAAgIIAIAAIAAgIIAJAAIAAgIIAIAAIAJAAIAJAAIAIAAQAFAAACABQACACAAAFIAJAAIAAgIIAJAAIAIAAQAFAAABABQADACAAAFQAAADgDADQgBABgFABIgIAAIAAAIQAEAAACACQACACAAAEIAAAJIAAAHQAAAEgCADQgCACgEAAQAAAEgCACQgDACgEAAQAAAEgCACQgDACgEAAIgJAAIgIAAIgJAAIAAAIIAJAAIAIAAIAJAAIAJAAIAJAAQAEABACACQACACAAAEQAFAAABACQADACAAAEIAAAJIAAAIQAAADgDACQgBADgFAAQAAAEgCACQgCACgEAAQAAAEgCACQgDACgEAAIgJAAgAFXGHIAAAIQAEgBADADQABACAAAEIAJAAIAJAAIAIAAIAJAAIAJAAIAAgIIAJAAIAAgIQgGgBgBgCQgCgCAAgEIgJAAIgJAAIgIAAIgJAAIgJAAIgIAAIAAAJgAFeExQgDADgEAAIAAAIIAAAJIAAAHQAEAAADADQABACAAAEIAJAAIAJAAIAIAAIAAgJIAJAAIAAgHIAJAAIAAgJQgFAAgCgCQgCgCAAgEQgEAAgDgDQgCgBAAgEIgIAAIgJAAIgJAAQAAAEgBABgAiZGnIgIAAIgJAAIgJAAIgJAAQgEAAgCgCQgCgCAAgEQgEAAgDgCQgCgCAAgEQgEAAgDgDQgCgCAAgDIAAgIIAAgJIAJAAIAAgIIAAgJIAJAAIAAgIIAAgIQgEAAgDgCQgCgCAAgEIAAgJQgEAAgDgCQgCgBAAgEIAAgJIAAgIIAJAAIAAgIIAAgIIAJAAIAIAAIAAgIIAJAAIAJAAIAJAAIAIAAIAJAAIAJAAIAIAAIAIAAQAFAAACABQACACAAAFQAAADgCADQgCABgFABIgIAAIAAAIIAAAIIAAAJIAAAHQAAAEgCADQgDACgDAAQAAAEgDACQgCACgEAAQAAAEgDACQgBACgFAAIgIAAIgJAAIAAAIIAJAAIAIAAIAJAAIAJAAQADABADACQACACAAAEQAEAAACACQACACAAAEQAFABACABQACADAAAEQAAADgCADQgCACgFAAIAAAIQAAAEgCACQgCACgEAAIgIAAQAAAEgDACQgCACgEAAIgJAAgAi8GHIAAAIQAFgBADADQABACAAAEIAJAAIAJAAIAIAAIAJAAIAAgIIAJAAIAAgIIAAgJIgJAAIgJAAIgIAAIgJAAIgJAAIgJAAIAAAJgAi0ExQgDADgFAAIAAAIIAAAJIAAAHQAFAAADADQABACAAAEIAJAAIAJAAIAIAAIAAgJIAJAAIAAgHIAAgJIAAgIQgEAAgDgDQgCgBAAgEIgIAAIgJAAIgJAAQAAAEgBABgAEoF+QgFggAAgiQgDAAgDgCQgDgCAAgEQgDAAgCgDQgCgBgBgEIgJAAIgIAAIgIAAQAAAEgDABQgCADgEAAQAAAEgDACQgBACgEAAIAAAxIAAAJQAAADgDADQgCACgEAAIgFAAQgEguAAgsIAAgIIAJAAQAEAAACABQADACAAAFIAIAAIAJAAIAAgIIAIAAIAIAAIAJAAQAFAAABABQACACAAAFIAJAAQAEAAADABQACACAAAFIAAAIQAEAAACACQACACAAAEIABAJQAGAmgPATIgEAAgACvF+QgDgugBgsIAAgIIAJAAQAEAAACABQACACAAAFIABAIQAFAzgOAfIgFAAgACGF+QgFggAAgiIAAgIQgEAAgCgDQgDgBAAgEIgJAAIgIAAIgJAAQAAAEgCABQgCADgDAAIgKAAIAAAIIABAJQAFAmgOATIgFAAQgEguABgsIAAgIIAIAAQAEAAACABQACACAAAFIAKAAIAAgIIAHAAIAJAAIAIAAIAJAAQAEAAADABQACACAAAFQAEAAADABQACACgBAFQAGAAABABQADADgBAEIAAAIIAAAxIAAAJQABADgDADQgBACgGAAIgDAAgAAVF+QgEggAAgiIAAgIQgEAAgDgDQgBgBAAgEIgJAAIgHAAIgJAAQAAAEgBABQgCADgFAAIgJAAIAAAIIABAJQAGAmgPATIgEAAQgFguAAgsIAAgIIAJAAQAEAAADABQACACgBAFIAJAAIAAgIIAIAAIAJAAIAHAAIAJAAQAEAAACABQACACAAAFQAFAAABABQACACABAFQAEAAADABQACADAAAEIAAAIIAAAxIAAAJQAAADgCADQgDACgEAAIgFAAgAhhF+QgEguAAgsIAAgIIAIAAQAFAAABABQADACAAAFIAABJIAAAJQAAADgDADQgBACgFAAIgEAAgAj4F+IgIAAIgJAAIgJAAIgIAAIgJAAIgJAAQgEAAgCgCQgCgDAAgDQgEgBgCgBQgCgCAAgFIAAgIQgFAAgCgCQgCgCAAgEIAAgIIAAgJIAAgHIAAgJIAAgIIAJAAIAAgIIAIAAIAAgIIAIAAIAAgIIAJAAIAJAAIAIAAIAJAAQAEAAACABQADACAAAFIAIAAQAFAAACABQACACgBAFQAFAAACABQADADgBAEIAAAIIAAAJIAAAHQABAEgDADQgCACgFAAIgIAAIgIAAIgJAAIgJAAIgIAAIgJAAIgJAAIgIAAIAAAIQAEAAACACQACACAAAEQAFAAABACQADADAAADIAJAAIAIAAIAJAAIAJAAIAIAAIAAgIIAIAAQAFAAACACQADADgBADIAAAJQABADgDADQgCACgFAAIgIAAgAkmExQgBADgFAAQAAAEgCACQgCACgEAAIAAAJIAIAAIAJAAIAJAAIAIAAIAJAAIAJAAIAIAAIAAgJQgEAAgCgCQgCgCAAgEQgFAAgBgDQgDgBAAgEIgJAAIgIAAIgJAAQAAAEgDABgAl5F+IgIAAIgJAAIgJAAIgJAAIgIAAIgJAAIgEAAQgEhCgBhCIAAgIIAJAAQAEAAADACQADADgBADIAAAiIAAAIIAIAAIAAgIIAJAAIAJAAIAJAAIAIAAQAFAAACABQACACAAAFIAIAAQAFAAABABQADACAAAFQADAAADABQADADAAAEIAAAIIAAAJIAAAHIAAAJIAAAIIAAAIQAAAFgDACQgDABgDAAQAAAFgDACQgBABgFABQAAADgCADQgCACgEAAIgJAAgAmVExQgCADgFAAQAAAEgBACQgDACgEAAIAAAZIAAAIQAEAAADACQABACAAAEIAAAIIAJAAIAJAAIAJAAIAIAAIAJAAIAAgIIAAgIIAIAAIAAgIIAAgJIAAgHIAAgJQgEAAgCgCQgCgCAAgEQgEAAgDgDQgCgBAAgEIgIAAIgJAAIgJAAQAAAEgCABgAhdELQgEAAgCgCQgCgCAAgFIAAgIIAIAAIAAgIQAFAAABACQADADAAADQAEAAACADQACACAAADQAAAFgCACQgCACgEAAIgJAAgACrECIAAgIIAAgIQAJAAAHAEQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAAAIQAAACAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgHADgEAAQgGAAABgIgAlhDNQgDAAgDgCQgCgCAAgFIAAgHIAIAAIAAgJIAIAAIAAgHIAJAAIAAgIIAAhaIAAgJIAIAAQAFAAACACQACACAAAFIAABaIAAAIQAAADgCACQgCACgFAAIAAAJQAAAEgCACQgBABgFAAQAAAFgCACQgCACgFAAIgIAAgAEzClIgIAAIgJAAIgHAAIgKAAIgIAAQgEAAgCgCQgCgDAAgEQgFgBgCgBQgCgBAAgFQgEAAgCgCQgCgCAAgEIAAgIQgEAAgDgCQgCgCAAgFIAAgIIAAgIIAJAAIAAgJIAAgHIAAgIIAIAAIAAgIIAJAAIAIAAIAAgJIAIAAIAKAAIAHAAIAJAAQAFAAACACQACACgBAFQAFAAACABQADACAAAFQAEAAACABQACADAAAEQAFAAACACQABABABAEIAAAJIAAAIQgBAEgBACQgCACgFAAIgIAAIgKAAIgIAAIgJAAIgHAAIgKAAIgIAAIgIAAIAAAJIAAAIQAEAAACACQACACAAAEIAIAAIAKAAIAHAAIAJAAIAIAAIAAgIIAKAAQAEAAACACQACACAAAEIAAAIQAAAEgCADQgCACgEAAIgKAAgAEPBYQgCADgEAAQAAADgCADQgCABgEAAIAAAJIAIAAIAIAAIAKAAIAHAAIAJAAIAIAAIAAgJIAAgHQgDAAgDgDQgCgCAAgDIgJAAIgHAAIgKAAQAAADgCACgADJCkQgEggAAgiIAAgHQgFAAgCgDQgCgCABgDIgJAAIgJAAIgIAAQgBADgCACQgCADgEAAIgJAAIAAAHIAAAJQAHAmgPAUIgFgBQgDhCgBhBIAAgIIAJAAQAFAAACACQABACAAAEIAAAhIAAAJIAJAAIAAgJIAJAAIAIAAIAJAAIAJAAQADAAADACQACACAAAFQAEAAADABQABACAAAFQAFAAABABQADADAAAEIAAAHIAAAyIAAAIQAAAEgDADQgBACgFAAIgEgBgABeClIgJAAIgIAAIgIAAIgIAAQgGAAgCgCQgCgDAAgEIAAgIQgEAAgCgCQgCgCAAgEIAAgIIAAgxIgJAAQgEAAgCgCQgCgCAAgEIAAgJIAIAAIAJAAIAAgIIAAgIIAAgJIAIAAIAKAAQADAAABACQADADABAEIAAAIIAAAIIAIAAIAIAAIAJAAQAEAAACACQACACAAAFQAAAEgCACQgCACgEAAIgJAAIgIAAIgIAAIAAAxIAAAIIAAAIIAIAAIAIAAIAJAAIAIAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAIgIAAgAggClIgJAAIgJAAIgIAAIgJAAQgEAAgCgCQgDgDAAgEIAAgIQgDAAgDgCQgCgCAAgEIAAgIIAAgxIgIAAQgEAAgCgCQgDgCAAgEIAAgJIAJAAIAIAAIAAgIIAAgIIAAgJIAIAAIAJAAQAEAAACACQADADAAAEIAAAIIAAAIIAIAAIAJAAIAJAAQAEAAACACQACACAAAFQAAAEgCACQgCACgEAAIgJAAIgJAAIgIAAIAAAxIAAAIIAAAIIAIAAIAJAAIAJAAIAIAAQAEAAADACQABADAAADQAAAEgBADQgDACgEAAIgIAAgAh+ClIgJAAIgJAAIgIAAIgJAAIgIAAIgJAAQgFAAgCgCQgBgDgBgEIAAgIIAAgIIAJAAQAFAAACACQACACAAAEIAIAAIAJAAIAIAAIAJAAIAJAAIAAgIIAAgIIgJAAQgEAAgDgCQgCgCAAgFIgIAAIgJAAQgEAAgDgCQgCgCABgEQgEAAgDgCQgCgCAAgEQgFAAgCgDQgBgBgBgFIAAgHIAAgIIAJAAIAAgIIAJAAIAAgJIAIAAIAJAAIAIAAIAJAAIAJAAQADAAACACQADACAAAFQAEAAACABQACACAAAFQAAADgCACQgCADgEAAQgFAAgBgDQgCgCAAgDIgJAAIgJAAIgIAAIgJAAQgBADgBACQgCADgEAAIAAAHIAIAAQAEAAADADQACACAAAEIAIAAIAJAAQAEAAACACQADADAAADIAIAAQAEAAACADQACABAAAEQAFAAABACQADADAAAEIAAAIIAAAIQAAAFgDABQgBABgFABQAAAEgCADQgCACgEAAIgIAAgAjPClIgIAAQgFAAgCgCQgDgDAAgEIgIAAQAAAEgCADQgDACgDAAIgJAAIgJAAIgIAAIgJAAQgEAAgDgCQgCgDAAgEQgEgBgCgBQgCgBAAgFIAAgIIAAgIIAAgJIAAgwIAAgJIAIAAQAFAAADACQABACAAAFIAAAwIAAAJIAAAIQAEAAADACQACACAAAEIAIAAIAJAAIAJAAIAIAAIAAgIIAIAAIAAgIIAAgJIAAgwIAAgJIAKAAQADAAACACQADACAAAFIAAA5IAAAIIAAAIIAAAIQADAEAAAFgAlQApIAAgIIAAgIQAIAAAIAEQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIAAAIQAAACAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgHAEgEAAQgFAAAAgJgAG7gqIgJAAIgJAAIgIAAIgJAAIgJAAIgJAAQgEAAgCgDQgCgCAAgEIAAgLIAAgKIAIAAQAGAAABADQACADAAAEIAJAAIAJAAIAIAAIAJAAIAJAAIAAgKIAAgKIgJAAQgEAAgCgCQgCgCgBgFIgIAAIgJAAQgFAAgBgDQgDgDAAgEQgEgBgCgCQgDgDAAgEQgEgBgCgCQgCgDAAgEIAAgKIAAgKIAIAAIAAgKIAJAAIAAgKIAJAAIAJAAIAIAAIAJAAIAJAAQAFAAACACQACADAAAFQAEAAADACQACADAAAFQAAAFgCACQgDADgEAAQgEAAgDgDQgCgCAAgFIgJAAIgJAAIgIAAIgJAAQAAAFgCACQgDADgEAAIAAAKIAJAAQAFgBACADQACACAAAGIAIAAIAJAAQAGgBABADQADADgBAFIAJAAQAEAAADACQACACAAAGQAEAAACACQADADgBAEIAAAKIAAAKQABAFgDADQgCADgEAAQAAAEgCACQgDADgEAAIgJAAgAFegtQgDgCAAgEIgIAAQAAAEgDACQgCADgEAAIgJAAIgJAAIgIAAIgJAAIgJAAQgFAAgCgDQgCgCAAgEQgEAAgDgDQgCgDAAgFIAAgKIAAgKIAAgJIAJAAIAAgKIAAgKIAJAAIAJAAIAJAAIAIAAIAJAAIAJAAIAJAAIAAgKIAAgKQgFAAgCgDQgCgCAAgFIgJAAIgJAAIgIAAQAAAFgDACQgCADgEAAIgJAAQgFAAgCgDQgCgCAAgFIAAgKIAJAAIAAgKIAJAAIAJAAIARAAIAJAAIAJAAQAEAAACACQACADAAAFQAEAAACACQADADAAAFIAAAKQAEAAACACQADACAAAGIAAAnIAAAKIAAAKIAAALQAAAEgDACQgCADgEAAQgEAAgCgDgAEkhUQgCACgEAAIAAAKQAEAAACADQADADAAAEIAJAAIAIAAIAJAAIAJAAIAAgKIAJAAIAAgKIAAgJIgJAAIgJAAIgJAAIgIAAIgJAAQAAAFgDACgADhgqIgJAAQgFAAgCgDQgCgCAAgEIAAgLIAAgKQgFAAgCgCQgCgDAAgFIAAgJIAAgKIgJAAIgIAAIAAAKIAAAJIAAAKQAAAGgCABQgDADgEAAIAAALQAAAEgCACQgDADgEAAIgJAAQgDAAgDgDQgCgCgBgEIAAgLQgEAAgCgDQgBgBgBgGIAAgKIAAgJQgEAAgDgDQgBgDgBgEIAAgKIAAgKIAAgKQgEAAgCgDQgCgCgBgFIAAgKIAAgKIAJAAQAFAAACACQADADgBAFQAEAAADACQABADAAAFIAAAKIAAAKIAAAKQAFgBACADQADADgBAFIAAAKIAAAJIAJAAIAAgJIAAgKIAAgKIAJAAIAAgKIAAgKIAAgKIAAgKIAJAAIAAgKIAIAAIAJAAQAFAAACACQACADAAAFIAAAKIAAAKIAAAKQAFgBACADQACACAAAGIAAAKIAAAKIAJAAIAAgKIAIAAIAAgKIAAgKIAAgKIAAgKIAJAAIAAgKIAAgKIAJAAQAEAAADACQACADAAAFIAAAKIAAAKQAAAFgCACQgDACgEABIAAAKIAAAKIAAAKQAAAFgCACQgDACgEAAIAAAKIAAAKIAAALQAAAEgCACQgDADgEAAIgIAAgAAPguQgFAAgBgCQgDgCAAgEIAAgJQgEAAgCgCQgBgCAAgEIAAgKIAAgIQgDAAgDgCQgCgCAAgEIAAgIQgEgBgDgCQgBgCAAgEIAAgIIAAgJQgFAAgCgDQgCgBAAgFIAAgIIAAgJQgFAAgCgCQgBgCAAgEIAAgJIAAgJIgJAAQAAAEgCADQgCACgFAAIgIAAIgJAAIgIAAIgJAAIAABnIAAAIQABAEgDACQgCADgEAAIgEgBQgFg7AAg8IgIAAIgJAAIgHAAIgJAAQgFAAgBgCQgDgDAAgEIAAgIIAJAAIAJAAIAHAAIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAIAJAAIAJAAIAIAAQAEAAADACQACACAAAEIAAAJIAAAJQAEAAACABQACADAAAEIAAAJQAEgBACADQACACAAAEIAAAJIAAAJQACAAACACQADACAAAEIAAAJIAAAIQAEAAACACQACACABAEIAAAIIAHAAIAAgIIAAgIIAAgIIAJAAIAAgJIAAgIIAAgJIAJAAIAAgJIAAgIIAIAAIAAgJIAAgIIAAgJIAJAAIAAgJIAAgIIAIAAQAFAAACACQACACAAAEIAAAJIAAAJQAAAEgCACQgCACgFAAIAAAJQAAAEgBACQgDACgEAAIAAAJIAAAJQAAADgDACQgCADgEAAIAAAJIAAAIQAAAEgCACQgCACgEAAIAAAIIAAAKQAAAEgDACQgBACgFAAIAAAJQAAAEgCACQgBACgGAAIgHAAgAjeg2IgIAAIgJAAIgIAAIgJAAIgIAAQgEAAgCgDQgCgCgBgEQgEAAgBgCQgCgCAAgEQgGAAgBgDQgCgCAAgFIAAgIQgFAAgBgCQgDgCAAgEIAAgIIAAgJIAJAAIAAgIIAAgJIAAgJIAJAAIAAgIIAHAAIAJAAIAAgJIAIAAIAJAAIAIAAIAJAAQAEAAADACQABACAAAFQAFgBACADQACACAAAEQAFAAACACQACACAAAFQAEAAACACQACACAAAFIAAAIIAAAJQAAAEgCACQgCACgEAAIgJAAIgJAAIgIAAIgJAAIgIAAIgJAAIgIAAIgJAAIAAAIIAAAIQAFAAACADQACACAAAFIAIAAIAJAAIAIAAIAJAAIAIAAIAAgKIAJAAQAFAAACADQACACAAAFIAAAIQAAAEgCACQgCADgFAAIgJAAgAkCiGQgCADgEAAQAAAEgCACQgCADgFAAIAAAIIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAIAAgIIAAgJQgEAAgCgDQgCgBAAgFIgJAAIgIAAIgJAAQAAAFgCABgAldg2QgEAAgCgDQgCgCAAgEQgFAAgCgCQgCgCAAgEIAAgKIAAgIQgEAAgCgCQgCgCgBgEIAAgIQgEgBgCgCQgBgCgBgEIAAgIIAAgJQgEAAgCgDQgCgBgBgFIAAgIIAAgJIAJAAQAEAAADACQABACAAAFIAAAIQAFAAACACQACACAAAFIAAAJQAEAAADACQACACAAAEIAAAJIAAAIQAEAAACACQABACABAEIAJAAIAAgIIAAgIIAIAAIAAgJIAAgIIAAgJIAJAAIAAgJIAAgIIAAgJIAIAAIAJAAQAEAAACACQACACAAAFQAAAEgCACQgCACgEAAIAAAJIAAAJQAAADgDACQgBADgFAAIAAAJQAAAEgDACQgBACgEAAIAAAIIAAAIQgBAFgBACQgCADgFAAIAAAIQAAAEgCACQgDADgDAAIgJAAgAmlg3QgEgvgBguIAAgJIAJAAQAFAAABACQACACAAAFIAABNIAAAIQAAAEgCACQgBADgFAAIgEgBgAnQg3QgEhEAAhEIAAgJIAJAAQAEAAABACQADACAAAFIAAB4IAAAIQAAAEgDACQgBADgEAAIgFgBgAmhiuQgEAAgCgCQgCgDgBgEIAAgIIAJAAIAAgJQAFAAABACQACACAAAFQAFAAACACQACACAAAEQAAAEgCADQgCACgFAAIgIAAgAEvjlIgIAAIgJAAIgIAAIgJAAQgEAAgDgCQgBgDAAgDQgEAAgDgDQgCgDAAgDQgFgBgCgCQgCgCABgFIAAgIIAAgJIAIAAIAAgJIAAgIIAJAAIAAgKIAAgJQgEAAgDgBQgCgCAAgFIAAgJQgFAAgCgBQgCgDABgFIAAgIIAAgJIAIAAIAAgJIAAgJIAJAAIAIAAIAAgIIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAQAEAAADADQACACAAADQAAAGgCABQgDACgEAAIgIAAIAAAJIAAAJIAAAIIAAAJQAAAFgCACQgCADgFgBQAAAFgCACQgCABgEAAQgBAFgCADQgBABgFAAIgIAAIgJAAIAAAKIAJAAIAIAAIAJAAIAIAAQAFAAACACQACACAAAEQAEAAACACQACACAAAFQAEAAADACQACADAAAEQAAAEgCADQgDABgEAAIAAAKQAAADgCADQgCADgEAAIgJAAQAAADgCADQgCACgEAAIgJAAgAENkIIAAAIQAEAAADADQACACAAAFIAIAAIAJAAIAIAAIAJAAIAAgKIAIAAIAAgIIAAgJIgIAAIgJAAIgIAAIgJAAIgIAAIgJAAIAAAJgAEUliQgDACgEAAIAAAJIAAAIIAAAJQAEABADABQACADAAAEIAIAAIAJAAIAIAAIAAgJIAJAAIAAgJIAAgIIAAgJQgEAAgCgCQgDgCAAgFIgIAAIgJAAIgIAAQAAAFgCACgADWkRQgFgkAAgiQgEAAgCgCQgCgCgBgFQgEAAgBgCQgDgCAAgFIgIAAIgJAAIgIAAQAAAFgDACQgCACgEAAQAAAFgCACQgCACgEAAIAAA1IAAAIQAAAFgDACQgCACgEAAIgEAAQgEgwAAgxIAAgIIAIAAQAEAAACADQADACAAADIAIAAIAJAAIAAgIIAIAAIAJAAIAIAAQAEAAADADQABACAAADIAJAAQAFABACACQACACgBAEIAAAJQAFAAACACQADADgBAEIAAAIQAHAqgQAUIgDAAgABekRQgEgwAAgxIAAgIIAJAAQAEAAACADQACACAAADIAABQIAAAIQAAAFgCACQgCACgEAAIgFAAgAAnkRIgJAAIgJAAIgIAAIgJAAIgFAAQgGAAgBgCQgCgCAAgFIAAgIIAAgKIAJAAQABABACACQACACAAAFIAJAAIAIAAIAJAAIAJAAIAIAAIAAgKIAAgJIgIAAQgFAAgBgBQgDgCAAgFIgJAAIgIAAQgEABgCgDQgCgCgBgFIgFAAQgGAAgBgBQgCgDAAgFIAAgIIAAgJIAAgJIAAgJIAJAAIAFAAIAAgIIAJAAIAIAAIAJAAIAJAAIAIAAQAFAAACADQACACAAADQAEABACACQADACgBAEQABAFgDACQgCACgEAAIgJAAQgEAAgDgCQgBgCAAgFIgJAAIgJAAIgIAAQAAAFgCACQgCACgFAAIAAAJQAFAAACACQACACAAAEIAIAAIAJAAIAJAAQAEABACACQACADAAADIAJAAQAEABACABQADADgBAEIAAAIIAAAJIAAAKQABAEgDACQgCACgEAAQAAAFgCACQgCACgFAAIgIAAgAgkkRIgIAAQgFAAgCgCQgCgCAAgFIgIAAQAAAFgCACQgDACgEAAIgJAAIgIAAIgJAAIgIAAQgFAAgCgCQgCgCAAgFQgEAAgCgCQgCgCgBgEIAAgKIAAgJIAAgIIAAg1IAAgIIAJAAQAEAAADADQACACAAADIAAA1IAAAIIAAAJQAEABADACQABACAAAFIAJAAIAIAAIAJAAIAJAAIAAgKIAIAAIAAgJIAAgIIAAg1IAAgIIAJAAQAEAAACADQACACAAADIAAA9IAAAJIAAAKIAAAIQAFAFgBAEgAibkRQgFAAgCgCQgCgCAAgFIgIAAQgBAFgCACQgCACgEAAIgIAAIgJAAIgIAAIgJAAQgFAAgCgCQgCgCAAgFQgDAAgDgCQgDgCABgEIAAgKIAAgJIAAgIIAAgJIAIAAIAAgJIAJAAIAJAAIAIAAIAJAAIAIAAIAJAAIAIAAIAAgIIAAgJQgEAAgCgCQgCgCAAgFIgJAAIgIAAIgJAAIgIAAQAAAFgCACQgDACgEAAQgFAAgCgCQgCgCAAgFIAAgJIAJAAIAAgIIAJAAIAIAAIARAAIAJAAQAEAAABADQADACAAADQAEABACACQADACAAAEQADAAADACQACADAAAEIAAAJIAAAiIAAAJIAAAKQAFAAABACQACACAAAEQAAAFgCACQgBACgFAAIgIAAgAjXk1IAAAJIAAAKIAJAAIAIAAIAJAAIAIAAIAJAAIAAgKIAIAAIAAgJIAAgIIgIAAIgJAAIgRAAIgIAAIgJAAIAAAIgAlPkRIgEAAQgEhCAAhBIAAgJIAIAAIARAAIAJAAIAIAAIAJAAIAIAAQAGABABACQACACAAAEIAJAAQAEAAACADQADABgBAFIAAAIQAEAAADADQACABAAAFIAAAIIAAAJIAAAJQAAAFgCACQgDACgEAAIAAAIQABAFgDADQgCABgEAAIgJAAQAAAFgCACQgBADgGgBIgIAAIgJAAIgIAAIgJAAIAAAbIAAAIQAAAFgCACQgCACgEAAIgJAAgAk+lXIAAAIIAJAAIAIAAIAJAAIAAgIIAIAAIAJAAIAAgJIAAgJIAJAAIAAgJQgEABgDgCQgCgCAAgFIAAgJIgJAAQgEAAgCgCQgCgCAAgEIgJAAIgIAAIgJAAIAAA0gABjmLQgFAAgCgDQgCgCAAgEIAAgJIAJAAIAAgJQAEAAACACQACADAAAEQAFABABACQACACABAEQgBAEgCACQgBADgFAAIgIAAg");
	mask.setTransform(61.1,71.5);

	// Sheen
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(-115.7,-75.5,1.953,7.887);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:164.4,y:-53.5},22).wait(3));

	// Layer 1
	this.instance_1 = new lib.frame_1_copy();
	this.instance_1.setTransform(0,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,600);


// stage content:
(lib.glint = function() {
	this.initialize();

	// Layer 2
	this.end_copy = new lib.end_copy();
	this.end_copy.setTransform(150,125);

	// Layer 1
	this.copy1 = new lib.copy1_mc();
	this.copy1.setTransform(5,7.5);

	this.addChild(this.copy1,this.end_copy);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.7,234.8,235.7,672.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;