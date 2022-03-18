
	var RAPD, sequences = {}, keys = {
		left : 37,
		L : 37,
		'←' : 37,
		up : 38,
		U : 38,
		'↑' : 38,
		right : 39,
		R : 39,
		'→' : 39,
		down : 40,
		D : 40,
		'↓' : 40,
		'0' : 48,
		'1' : 49,
		'2' : 50,
		'3' : 51,
		'4' : 52,
		'5' : 53,
		'6' : 54,
		'7' : 55,
		'8' : 56,
		'9' : 57,
	}, Sequence, NOOP = function NOOP() {
	}, held = {};
	Sequence = function Sequence(str, next, fail, done) {
		var i;
		this.str = str;
		this.next = next ? next : NOOP;
		this.fail = fail ? fail : NOOP;
		this.done = done ? done : NOOP;
		this.seq = str.split(' ');
		this.keys = [];
		for (i = 0; i < this.seq.length; ++i) {
			this.keys.push(keys[this.seq[i]]);
		}
		this.idx = 0;
	};
	Sequence.prototype.keydown = function keydown(keyCode) {
		var i = this.idx;
		if (keyCode !== this.keys[i]) {
			if (i > 0) {
				this.reset();
				this.fail(this.str);
				RAPD.__fail(this.str);
			}
			return;
		}
		this.next(this.str, this.seq[i], i, this.seq);
		RAPD.__next(this.str, this.seq[i], i, this.seq);
		if (++this.idx === this.keys.length) {
			this.done(this.str);
			RAPD.__done(this.str);
			this.reset();
		}
	};
	Sequence.prototype.reset = function() {
		this.idx = 0;
	};
	RAPD = function RAPD(str, handlers) {
		var next, fail, done;
		if (typeof handlers === 'function') {
			done = handlers;
		} else if (handlers !== null && handlers !== undefined) {
			next = handlers.next;
			fail = handlers.fail;
			done = handlers.done;
		}
		sequences[str] = new Sequence(str, next, fail, done);
	};
	RAPD.disable = function disable(str) {
		delete sequences[str];
	};
	function keydown(e) {
		var id, k = e ? e.keyCode : event.keyCode;
		if (held[k])
			return;
		held[k] = true;
		for (id in sequences) {
			sequences[id].keydown(k);
		}
	}
	function keyup(e) {
		var k = e ? e.keyCode : event.keyCode;
		held[k] = false;
	}
	function resetHeldKeys(e) {
		var k;
		for (k in held) {
			held[k] = false;
		}
	}
	function on(obj, type, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(type, fn, false);
		} else if (obj.attachEvent) {
			obj['e' + type + fn] = fn;
			obj[type + fn] = function() {
				obj['e' + type + fn](window.event);
			};
			obj.attachEvent('on' + type, obj[type + fn]);
		}
	}
	on(window, 'keydown', keydown);
	on(window, 'keyup', keyup);
	on(window, 'blur', resetHeldKeys);
	on(window, 'focus', resetHeldKeys);
	RAPD.__next = NOOP;
	RAPD.next = function next(fn) {
		RAPD.__next = fn === null ? NOOP : fn;
	};
	RAPD.__fail = NOOP;
	RAPD.fail = function fail(fn) {
		RAPD.__fail = fn === null ? NOOP : fn;
	};
	RAPD.__done = NOOP;
	RAPD.done = function done(fn) {
		RAPD.__done = fn === null ? NOOP : fn;
	};
	RAPD.reset = function reset(id) {
		var seq = sequences[id];
		if (!(seq instanceof Sequence)) {
			console.warn('RAPD: Unknown sequence: ' + id);
			return;
		}
		seq.reset();
	};
	global.RAPD = RAPD;
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return RAPD;
		});
	} else if (typeof module !== 'undefined' && module !== null) {
		module.exports = RAPD;
	}