    import * as THREE from './three.module.js';

    import { OBJLoader } from './jsm/loaders/OBJLoader.js';


    let container;

    let camera, scene, renderer;

    let mouseX = 0, mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    let object;

    var CANVAS_WIDTH = 50;
    var CANVAS_HEIGHT = 50;

    init();
    animate();


    function init() {

      container = document.createElement('div');
      document.body.appendChild(container);
      var scene3d = document.getElementById("scene3d");

      camera = new THREE.PerspectiveCamera(38, CANVAS_WIDTH / CANVAS_HEIGHT, 25, 800);
      camera.position.z = 300;

      // scene

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.01);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.01);
      camera.add(pointLight);
      scene.add(camera);

      // manager

      function loadModel() {

        object.traverse(function (child) {

          if (child.isMesh) child.material.map = texture;

        });
       
        object.position.y = - 55;
        scene.add(object);

      }

      const manager = new THREE.LoadingManager(loadModel);

      manager.onProgress = function (item, loaded, total) {

        console.log(item, loaded, total);

      };

      // texture

      const textureLoader = new THREE.TextureLoader(manager);
      const texture = textureLoader.load('textures/');

      // model

      function onProgress(xhr) {

        if (xhr.lengthComputable) {

          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

        }

      }

      function onError() { }

      const loader = new OBJLoader(manager);
      loader.load('models/lens.obj', function (obj) {

        object = obj;

      }, onProgress, onError);

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
      container.appendChild(renderer.domElement);

      document.addEventListener('mousemove', onDocumentMouseMove);

      //

      window.addEventListener('resize', onWindowResize);

    }

    function onWindowResize() {

      windowHalfX = CANVAS_WIDTH / 2;
      windowHalfY = CANVAS_HEIGHT / 2;

      camera.aspect = CANVAS_WIDTH / CANVAS_HEIGHT;
      camera.updateProjectionMatrix();

      renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

    }

    function onDocumentMouseMove(event) {

      mouseX = (event.clientX - windowHalfX) / 3;
      mouseY = (event.clientY - windowHalfY) / 2;

    }

    //

    function animate() {

      requestAnimationFrame(animate);
      render();

    }

    function render() {

      camera.position.x += (1 * mouseX - camera.position.x) * .08;
      camera.position.y += (-1 * mouseY - camera.position.y) * .05;

      camera.lookAt(scene.position);
      scene3d.appendChild(renderer.domElement);
      renderer.render(scene, camera);

    }
