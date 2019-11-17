
(function () {
  let pressingV = false;
  let pressingR = false;
  let forceVR = false;

  function runCanvas() {
    if (
      !navigator.userAgent.includes('Exokit') &&
      !navigator.userAgent.includes('Webmr') &&
      !forceVR
    ) return;

    document.querySelector('#app').classList.add('hide');

    // so webstorm stops whining about undef
    const { THREE } = window;

    let container;
    let camera;
    let scene;
    let renderer;
    let group;
    let cubes;

    const imgPaths = [
      'img/x_medean.png',
      'img/x_xosite.png',
      'img/x_sweetie.png',
      'img/x_mdgb.png',
      'img/x_green.png',
      'img/x_dod.png',
      'img/x_coaster.png',
      'img/x_selfie.png',
    ];

    const projectsImg = 'images/x_projects.png';

    const cubeX = 10;

    let targetRotation = 0;
    let targetRotationY = 0;
    let targetRotationOnMouseDown = 0;
    let targetRotationYOnMouseDown = 0;
    let mouseX = 0;
    let mouseY = 0;
    let mouseXOnMouseDown = 0;
    let mouseYOnMouseDown = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    const mouseDelta = 0;
    let fov;

    let onDocumentMouseOut;
    let onDocumentMouseUp;
    let onDocumentMouseMove;

    const fovMAX = 160;
    const fovMIN = 1;

    const geometry = new THREE.BoxBufferGeometry(1.5, 1.5, 1.5);

    function addCube(material) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(0, 0, 0);
      cube.rotation.set(0, 0, 0);
      cubes.add(cube);
    }

    function addImage(path) {
      new THREE.ImageLoader()
        .setCrossOrigin('*')
        .load(path, (image) => {
          const texture = new THREE.CanvasTexture(image);
          const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });
          addCube(material);
        });
    }

    function onDocumentKeyDown(evt) {
      const code = evt.keyCode;

      // press 'm' for magic leap (any other key for other vr)
      if (code !== 77) {
        scene.background = new THREE.Color(0x3B3961);
      }

      navigator.getVRDisplays().then((displays) => {
        if (displays.length > 0) {
          const display = displays[0];
          const canvas = renderer.domElement;
          display.requestPresent([{ source: canvas }]).then(() => {
            renderer.vr.enabled = true;
            renderer.vr.setDevice(display);
            const leftEye = display.getEyeParameters('left');
            const rightEye = display.getEyeParameters('right');
            canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
            console.log('am i presenting meow?');
          });
        }
      });
    }

    function onDocumentMouseDown(event) {
      event.preventDefault();
      window.addEventListener('mousemove', onDocumentMouseMove, false);
      window.addEventListener('mouseup', onDocumentMouseUp, false);
      window.addEventListener('mouseout', onDocumentMouseOut, false);
      mouseXOnMouseDown = event.clientX - windowHalfX;
      mouseYOnMouseDown = event.clientY - windowHalfY;
      targetRotationOnMouseDown = targetRotation;
      targetRotationYOnMouseDown = targetRotationY;
    }

    onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
      targetRotation = targetRotationOnMouseDown + ((mouseX - mouseXOnMouseDown) * 0.02);
      targetRotationY = targetRotationYOnMouseDown + ((mouseY - mouseYOnMouseDown) * 0.02);
    };

    onDocumentMouseOut = (event) => {
      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      document.removeEventListener('mouseup', onDocumentMouseUp, false);
      document.removeEventListener('mouseout', onDocumentMouseOut, false);
    };

    onDocumentMouseUp = (event) => {
      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      document.removeEventListener('mouseup', onDocumentMouseUp, false);
      document.removeEventListener('mouseout', onDocumentMouseOut, false);
    };

    function onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        targetRotation = targetRotationOnMouseDown + ((mouseX - mouseXOnMouseDown) * 0.05);
      }
    }

    function onDocumentMouseWheel(event) {
      const fovDelta = fov - (event.deltaY * 0.05);
      fov = Math.max(Math.min(fovDelta, fovMAX), fovMIN);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function init() {
      container = document.createElement('div');
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1500);
      camera.position.set(0, 4, 7);
      camera.lookAt(new THREE.Vector3());

      /* eslint-disable prefer-destructuring */
      fov = camera.fov;
      /* eslint-enable prefer-destructuring */

      scene = new THREE.Scene();

      group = new THREE.Group();

      scene.add(group);

      cubes = new THREE.Group();
      group.add(cubes);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(800, 800);
      container.appendChild(renderer.domElement);

      addImage(projectsImg);

      window.addEventListener('mousedown', onDocumentMouseDown, false);
      window.addEventListener('touchstart', onDocumentTouchStart, false);
      window.addEventListener('touchmove', onDocumentTouchMove, false);
      window.addEventListener('resize', onWindowResize, false);
      window.addEventListener('wheel', onDocumentMouseWheel, false);
      window.addEventListener('keydown', onDocumentKeyDown, false);
    }

    function animate() {
      renderer.state.reset();
      camera.fov = fov;
      camera.aspect = window.innerWidth / window.innerHeight;
      group.rotation.y += (targetRotation - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationY - group.rotation.x) * 0.05;
      renderer.render(scene, camera);
      camera.updateProjectionMatrix();
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }

  forceVR = false;
  runCanvas();

  // window.addEventListener('keydown', (evt) => {
  //   const key = evt.which;
  //   if (key === 86) pressingV = true;
  //   if (key === 82) pressingR = true;
  //   if (pressingV && pressingR) {
  //     forceVR = true;
  //     document.querySelector('#app').classList.add('hide');
  //     runCanvas();
  //   }
  // });

  window.addEventListener('keyup', (evt) => {
    const key = evt.which;
    if (key === 86) pressingV = false;
    if (key === 82) pressingR = false;
  });
}());