(function () { //eslint-disable-line
  if (navigator.userAgent === 'Exokit') return;

  let width;
  let height;
  let header;
  let canvas;
  let ctx;
  let circles;

  // so we don't continue animating if header is out of viewport
  let animateHeader = true;

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height * 1.25);
      for (const i in circles) { //eslint-disable-line
        circles[i].draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function Circle() {
    const _this = this;

    function init() {
      _this.alpha = 0;
      _this.direction = 1;
      _this.pos.x = Math.random() * width;
      _this.pos.y = (Math.random() * (height * 1.2)) - (Math.random() * (height * 0.3));
      _this.maxAlpha = (0.15 + Math.random()) * 0.20;
      _this.scale = (0.1 + Math.random()) * 0.5;
      _this.velocity = Math.random() + 0.1;
    }

    this.draw = function () {
      _this.pos.y -= _this.velocity;
      _this.alpha += 0.0005 * _this.direction;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(240,240,255,${_this.alpha})`;
      ctx.fill();
      if (_this.alpha <= 0) {
        init();
      } else if (_this.alpha >= _this.maxAlpha) {
        _this.direction *= -1;
      }
    };

    // constructor
    (function () {
      _this.pos = {};
      init();
    }());
  }

  function initHeader() {
    // set size constraints
    width = window.innerWidth;
    height = window.innerHeight;

    header = document.getElementById('hero');
    // header.style.height = `${height * 1.25}px`;

    canvas = document.getElementById('canvas');
    canvas.width = width;
    // canvas.height = (height * 1.25);
    ctx = canvas.getContext('2d');

    // create circles and draw
    circles = [];
    for (let x = 0; x < width * 0.1; x++) {
      const c = new Circle();
      circles.push(c);
    }
    animate();
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height * 1.25;
  }

  function resize() {
    width = window.innerWidth;
    header.style.height = `${height * 1.25}px`;
    canvas.width = width;
  }

  // Event handling
  function addListeners() {
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }

  window.onload = () => {
    initHeader();
    addListeners();
  };
})();
