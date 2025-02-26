! function(t) {
    var e = {};
    var modal = document.querySelector("#myModal");
    var btn = document.querySelector(".leaderboard_pop");

    /////leaderboard pop up///////////
    btn.addEventListener("click", function(){
        modal.style.display = "block";
    })
    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", function(){
        modal.style.display = "none";
    })
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    function s(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }
    s.m = t, s.c = e, s.d = function(t, e, i) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) s.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "/", s(s.s = 0)
}([function(t, e, s) {
    t.exports = s(1)
}, function(t, e, s) {
    "use strict";

    function i(t, e) {
        for (var s = 0; s < e.length; s++) {
            var i = e[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    s.r(e);
    var r = function() {
        function t(e) {
            var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.image = e, this.state = Object.assign({
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                dx: 0,
                dy: 0,
                frames: [{
                    sX: 0,
                    sY: 0
                }],
                currentFrame: 0,
                frame: null,
                ticksPerFrame: 1,
                update: function(t, e) {
                    this.inGame && (this.x += this.dx, this.y += this.dy), e % this.ticksPerFrame == 0 && (this.currentFrame++, this.currentFrame = this.currentFrame % this.frames.length, this.frame = this.frames[this.currentFrame])
                },
                draw: function(t, e) {
                    t.drawImage(e, this.frame.sX, this.frame.sY, this.w, this.h, this.x, this.y, this.w, this.h)
                },
                shouldUpdate: !0,
                shouldDraw: !0,
                moving: !1
            }, s), this.state.frame = this.state.frames[this.state.currentFrame], this.originalState = Object.assign({}, this.state)
        }
        var e, s, r;
        return e = t, (s = [{
            key: "draw",
            value: function(t) {
                this.state.shouldDraw && this.state.draw(t, this.image)
            }
        }, {
            key: "update",
            value: function(t, e) {
                this.state.shouldUpdate && this.state.update(t, e)
            }
        }, {
            key: "reset",
            value: function() {
                this.state = Object.assign({}, this.originalState)
            }
        }, {
            key: "x",
            value: function() {
                return this.state.x
            }
        }, {
            key: "y",
            value: function() {
                return this.state.y
            }
        }, {
            key: "w",
            value: function() {
                return this.state.w
            }
        }, {
            key: "h",
            value: function() {
                return this.state.h
            }
        }]) && i(e.prototype, s), r && i(e, r), t
    }();

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(t, e) {
        for (var s = 0; s < e.length; s++) {
            var i = e[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function o(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var l = function(t) {
        function e(t) {
            var s, i, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), i = this, s = !(r = h(e).call(this, t, n)) || "object" !== a(r) && "function" != typeof r ? o(i) : r;
            var c = o(s);
            return s.state = Object.assign(s.state, {
                gravity: .25,
                jump: 4.6,
                rotation: 0,
                radius: 12,
                update: function(t, e) {
                    this.inGame && (this.dy += this.gravity, this.x += this.dx, this.y += this.dy), e % this.ticksPerFrame == 0 && (this.currentFrame++, this.currentFrame = this.currentFrame % this.frames.length, this.frame = this.frames[this.currentFrame]), this.rotation = 4 * this.dy, this.rotation > 10 && (this.currentFrame = 0)
                },
                draw: function(t, e) {
                    t.save(), t.translate(this.x, this.y), t.rotate(c.toRadians(this.rotation)), t.drawImage(e, this.frame.sX, this.frame.sY, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h), t.restore()
                }
            }), s.originalState = Object.assign({}, s.state), s
        }
        var s, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(e, t), s = e, (i = [{
            key: "flap",
            value: function() {
                this.state.dy = -this.state.jump
            }
        }, {
            key: "x",
            value: function() {
                return this.state.x - this.state.w / 2
            }
        }, {
            key: "y",
            value: function() {
                return this.state.y - this.state.h / 2
            }
        }, {
            key: "toRadians",
            value: function(t) {
                return t * Math.PI / 180
            }
        }]) && n(s.prototype, i), r && n(s, r), e
    }(r);

    function u(t, e) {
        for (var s = 0; s < e.length; s++) {
            var i = e[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var f = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.canvas = e, this.srcImage = new Image, this.sprites = {
                bg: [],
                pipes: [],
                player: [],
                fg: [],
                getReadyScreen: [],
                gameOverScreen: []
            }, this.map = ["bg", "pipes", "player", "fg", "getReadyScreen", "gameOverScreen"], this.pipe = {
                w: 53,
                h: 400,
                x: 0,
                y: -150,
                dx: -2
            }, this.topPipe = Object.assign({}, this.pipe, {
                frames: [{
                    sX: 553,
                    sY: 0
                }]
            }), this.bottomPipe = Object.assign({}, this.pipe, {
                frames: [{
                    sX: 502,
                    sY: 0
                }]
            })
        }
        var e, s, i;
        return e = t, (s = [{
            key: "initialize",
            value: function() {
                this.srcImage.src = "../../resources/flappy-bird/img/sprite.png", this.sprites.bg.push(new r(this.srcImage, {
                    y: this.canvas.clientHeight - 226,
                    w: 275,
                    h: 226,
                    dx: -1,
                    frames: [{
                        sX: 0,
                        sY: 0
                    }],
                    update: function(t) {
                        this.inGame && (this.x = (this.x + this.dx) % this.w)
                    },
                    draw: function(t, e) {
                        for (var s = 0; s < 3; s++) t.drawImage(e, this.frame.sX, this.frame.sY, this.w, this.h, this.x + this.w * s, this.y, this.w, this.h)
                    }
                })), this.sprites.fg.push(new r(this.srcImage, {
                    y: this.canvas.clientHeight - 112,
                    w: 224,
                    h: 112,
                    dx: -2,
                    frames: [{
                        sX: 276,
                        sY: 0
                    }],
                    update: function(t) {
                        this.inGame && (this.x = (this.x + this.dx) % (this.w / 2))
                    },
                    draw: function(t, e) {
                        for (var s = 0; s < 2; s++) t.drawImage(e, this.frame.sX, this.frame.sY, this.w, this.h, this.x + this.w * s, this.y, this.w, this.h)
                    }
                })), this.sprites.player.push(new l(this.srcImage, {
                    x: 50,
                    y: 150,
                    w: 34,
                    h: 26,
                    frames: [{
                        sX: 276,
                        sY: 112
                    }, {
                        sX: 276,
                        sY: 139
                    }, {
                        sX: 276,
                        sY: 164
                    }, {
                        sX: 276,
                        sY: 139
                    }],
                    ticksPerFrame: 5
                })), this.sprites.getReadyScreen.push(new r(this.srcImage, {
                    w: 173,
                    h: 152,
                    x: this.canvas.clientWidth / 2 - 86.5,
                    y: 80,
                    frames: [{
                        sX: 0,
                        sY: 228
                    }]
                })), this.sprites.gameOverScreen.push(new r(this.srcImage, {
                    w: 225,
                    h: 202,
                    x: this.canvas.clientWidth / 2 - 112.5,
                    y: 90,
                    frames: [{
                        sX: 175,
                        sY: 228
                    }]
                }))
            }
        }, {
            key: "addPipes",
            value: function(t, e, s) {
                var i = new r(this.srcImage, Object.assign({}, this.topPipe, {
                        x: t,
                        y: e
                    })),
                    a = new r(this.srcImage, Object.assign({}, this.bottomPipe, {
                        x: t,
                        y: i.y() + i.h() + s
                    }));
                this.sprites.pipes.push(i), this.sprites.pipes.push(a)
            }
        }, {
            key: "recyclePipes",
            value: function() {
                return this.sprites.pipes.length >= 2 && this.sprites.pipes[0].x() + this.sprites.pipes[0].w() < 0 && (this.sprites.pipes.shift(), this.sprites.pipes.shift(), !0)
            }
        }, {
            key: "resetPipes",
            value: function() {
                this.sprites.pipes.splice(0, this.sprites.pipes.length)
            }
        }]) && u(e.prototype, s), i && u(e, i), t
    }();

    function p(t, e) {
        for (var s = 0; s < e.length; s++) {
            var i = e[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var y = function() {
        function t(e) {
            for (var s in function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.collection = e, this.collection) {
                var i = new Audio;
                i.src = this.collection[s], this.collection[s] = i
            }
        }
        var e, s, i;
        return e = t, (s = [{
            key: "play",
            value: function(t) {
                this.collection[t].paused ? this.collection[t].play() : (this.collection[t].pause(), this.collection[t].currentTime = 0, this.collection[t].play())
            }
        }]) && p(e.prototype, s), i && p(e, i), t
    }();

    function v(t, e) {
        for (var s = 0; s < e.length; s++) {
            var i = e[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    new(function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.canvas = e, this.ctx = e.getContext("2d"), this.pipesGap = 85, this.scene = new f(this.canvas), this.player = null, this.restartBtn = {
                x: 120,
                y: 263,
                w: 83,
                h: 29
            }, this.fx = null, this.loopInterval = null, this.fps = 60, this.ticks = 0, this.states = {
                getReady: 0,
                game: 1,
                gameOver: 2
            }, this.state = this.states.getReady, this.score = 0, this.bestScore = parseInt(localStorage.getItem("bestScore")) || 0
        }
        var e, s, i;
        return e = t, (s = [{
            key: "loop",
            value: function() {
                if (this.state === this.states.game) {
                    if (this.ticks % 100 == 0) {
                        var t = -(this.canvas.clientHeight - this.scene.sprites.fg[0].h()) / 2 * (Math.random() + 1);
                        this.scene.addPipes(this.canvas.clientWidth, t, this.pipesGap)
                    }
                    this.scene.recyclePipes() && this.addScore()
                }
                this.update(), this.draw(), this.detectCollisions(), this.ticks++
            }
        }, {
            key: "update",
            value: function() {
                var t = !0,
                    e = !1,
                    s = void 0;
                try {
                    for (var i, r = this.scene.map[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                        var a = i.value,
                            n = !0,
                            h = !1,
                            o = void 0;
                        try {
                            for (var c, l = this.scene.sprites[a][Symbol.iterator](); !(n = (c = l.next()).done); n = !0) {
                                var u = c.value;
                                u.state.inGame = this.state === this.states.game, u.state.shouldUpdate = this.state === this.states.game, u.update(this.ctx, this.ticks)
                            }
                        } catch (t) {
                            h = !0, o = t
                        } finally {
                            try {
                                n || null == l.return || l.return()
                            } finally {
                                if (h) throw o
                            }
                        }
                    }
                } catch (t) {
                    e = !0, s = t
                } finally {
                    try {
                        t || null == r.return || r.return()
                    } finally {
                        if (e) throw s
                    }
                }
                this.state === this.states.gameOver && this.player.y() + this.player.h() < this.canvas.clientHeight - this.scene.sprites.fg[0].h() && (this.player.state.inGame = !0, this.player.state.update(this.ctx, this.ticks)), this.state === this.states.getReady && (this.player.state.shouldUpdate = !0, this.player.state.update(this.ctx, this.ticks))
            }
        }, {
            key: "draw",
            value: function() {
                this.ctx.fillStyle = "#70c5ce", this.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight), this.scene.sprites.getReadyScreen[0].state.shouldDraw = this.state === this.states.getReady, this.scene.sprites.gameOverScreen[0].state.shouldDraw = this.state === this.states.gameOver;
                var t = !0,
                    e = !1,
                    s = void 0;
                try {
                    for (var i, r = this.scene.map[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                        var a = i.value,
                            n = !0,
                            h = !1,
                            o = void 0;
                        try {
                            for (var c, l = this.scene.sprites[a][Symbol.iterator](); !(n = (c = l.next()).done); n = !0) c.value.draw(this.ctx)
                        } catch (t) {
                            h = !0, o = t
                        } finally {
                            try {
                                n || null == l.return || l.return()
                            } finally {
                                if (h) throw o
                            }
                        }
                    }
                } catch (t) {
                    e = !0, s = t
                } finally {
                    try {
                        t || null == r.return || r.return()
                    } finally {
                        if (e) throw s
                    }
                }
                this.ctx.fillStyle = "#fff", this.ctx.strokeStyle = "#000", this.state === this.states.game ? (this.ctx.lineWidth = 2, this.ctx.font = "35px Teko", this.ctx.fillText(this.score, this.canvas.width / 2, 50), this.ctx.strokeText(this.score, this.canvas.width / 2, 50)) : this.state === this.states.gameOver && (this.ctx.font = "25px Teko", this.ctx.fillText(this.score, 225, 186), this.ctx.strokeText(this.score, 225, 186), this.ctx.fillText(this.bestScore, 225, 228), this.ctx.strokeText(this.bestScore, 225, 228))
            }
        }, {
            key: "detectCollisions",
            value: function() {
                this.player.y() + this.player.h() >= this.canvas.clientHeight - this.scene.sprites.fg[0].h() && (this.player.state.y = this.canvas.clientHeight - this.scene.sprites.fg[0].h() - this.player.h() / 2, this.gameOver());
                var t = !0,
                    e = !1,
                    s = void 0;
                try {
                    for (var i, r = this.scene.sprites.pipes[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                        var a = i.value;
                        (this.player.x() + this.player.w() >= a.x() && this.player.x() + this.player.w() <= a.x() + a.w() && this.player.y() >= a.y() && this.player.y() <= a.y() + a.h() || this.player.x() + this.player.w() >= a.x() && this.player.x() + this.player.w() <= a.x() + a.w() && this.player.y() + this.player.h() >= a.y() && this.player.y() + this.player.h() <= a.y() + a.h() || this.player.x() >= a.x() && this.player.x() <= a.x() + a.w() && this.player.y() >= a.y() && this.player.y() <= a.y() + a.h() || this.player.x() >= a.x() && this.player.x() <= a.x() + a.w() && this.player.y() + this.player.h() >= a.y() && this.player.y() + this.player.h() <= a.y() + a.h()) && this.gameOver()
                    }
                } catch (t) {
                    e = !0, s = t
                } finally {
                    try {
                        t || null == r.return || r.return()
                    } finally {
                        if (e) throw s
                    }
                }
            }
        }, {
            key: "addScore",
            value: function() {
                this.score++, this.bestScore = Math.max(this.score, this.bestScore), localStorage.setItem("bestScore", this.bestScore), this.fx.play("score")
            }
        }, {
            key: "run",
            value: function() {
                var t = this;
                this.initialize(), this.player = this.scene.sprites.player[0], this.loopInterval = setInterval((function() {
                    t.loop()
                }), 1e3 / this.fps)
            }
        }, {
            key: "reset",
            value: function() {
                this.scene.resetPipes();
                var t = !0,
                    e = !1,
                    s = void 0;
                try {
                    for (var i, r = this.scene.map[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                        var a = i.value,
                            n = !0,
                            h = !1,
                            o = void 0;
                        try {
                            for (var c, l = this.scene.sprites[a][Symbol.iterator](); !(n = (c = l.next()).done); n = !0) c.value.reset()
                        } catch (t) {
                            h = !0, o = t
                        } finally {
                            try {
                                n || null == l.return || l.return()
                            } finally {
                                if (h) throw o
                            }
                        }
                    }
                } catch (t) {
                    e = !0, s = t
                } finally {
                    try {
                        t || null == r.return || r.return()
                    } finally {
                        if (e) throw s
                    }
                }
                this.score = 0
            }
        }, {
            key: "start",
            value: function() {
                this.ticks = 0, this.state = this.states.game, this.fx.play("swoosh")
            }
        }, {
            key: "gameOver",
            value: function() {
                this.state !== this.states.gameOver && (this.fx.play("hit"), this.state = this.states.gameOver)
            }
        }, {
            key: "initialize",
            value: function() {
                var t = this;
                this.scene.initialize(), this.fx = new y({
                    score: "../../resources/flappy-bird/audio/sfx_point.wav",
                    flap: "../../resources/flappy-bird/audio/sfx_flap.wav",
                    hit: "../../resources/flappy-bird/audio/sfx_hit.wav",
                    swoosh: "../../resources/flappy-bird/audio/sfx_swooshing.wav"
                }), this.canvas.addEventListener("click", (function(e) {
                    switch (t.state) {
                        case t.states.getReady:
                            t.start();
                            break;
                        case t.states.game:
                            t.player.flap(), t.fx.play("flap");
                            break;
                        case t.states.gameOver:
                            var s = t.canvas.getBoundingClientRect(),
                                i = e.clientX - s.left,
                                r = e.clientY - s.top;
                            i >= t.restartBtn.x && i <= t.restartBtn.x + t.restartBtn.w && r >= t.restartBtn.y && r <= t.restartBtn.y + t.restartBtn.h && (t.reset(), t.start(), t.state = t.states.getReady)
                    }
                }))
            }
        }]) && v(e.prototype, s), i && v(e, i), t
    }())(document.getElementById("canvas")).run()
}]);

function logout(){
    if(localStorage.getItem("JWT")){
        localStorage.removeItem("JWT");
    }
    window.location.href = "http://localhost:4000/login";
}

function checkLoginStatus(){
  if(!localStorage.getItem("JWT")){
    document.getElementById("login-btn").innerHTML = "Login";
  }
}