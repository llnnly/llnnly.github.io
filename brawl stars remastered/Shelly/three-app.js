function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
    object.rotation.x = THREE.Math.degToRad(degreeX)
    object.rotation.y = THREE.Math.degToRad(degreeY)
    object.rotation.z = THREE.Math.degToRad(degreeZ)
 }

 window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY
    if (scroll < window.innerHeight) {
        rotateObject(shelly, 0, (scroll/window.innerHeight)*360, 0)
    }
});

// initialize scene
width = 30
height = 100
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, ((window.innerWidth/height)*width) / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer( { alpha: true } );
body = document.querySelector('.landing')
container = document.querySelector('.landing aside')
body.appendChild(container)
renderer.setSize((window.innerWidth/height)*width, window.innerHeight)
container.appendChild( renderer.domElement );


// lights and helper for them
const alight = new THREE.AmbientLight(0x404040) // soft white light
alight.position.set(0, 5, 5)
scene.add(alight)

const plight1 = new THREE.PointLight(0x404040, 6, 100) // just white
plight1.position.set(0, 5, 5)
scene.add(plight1)

const plight2 = new THREE.PointLight(0x404040, 6, 100) // just white
plight2.position.set(0, 5, -5)
scene.add(plight2)

camera.position.z = 10


// control of movements
// const controls = new THREE.OrbitControls(camera, renderer.domElement)
// controls.update()


// instantiate a loader
let shelly = null
const loader = new THREE.GLTFLoader();

loader.load( 'model/scene.gltf', function ( gltf ) {
    shelly = gltf.scene
    console.log(shelly)
    shelly.scale.set(0.5, 0.5, 0.5)
    shelly.position.y = -2.5

	scene.add(shelly)

}, undefined, function (error) {
	console.error(error)
})


// animate this
function animate() {
	requestAnimationFrame(animate)
    // controls.update()
	renderer.render(scene, camera)
}
animate()
