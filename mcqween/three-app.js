inputText = 'у тебя мать в канаве'


$.getJSON('http://ip.jsontest.com/', function(data) {
    console.log(JSON.stringify(data, null, 2));
});


// initialize scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x00ff00)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


// lights and helper for them
const alight = new THREE.AmbientLight(0x404040) // soft white light
scene.add(alight)

const plight = new THREE.PointLight(0x404040, 5, 100) // just white
plight.position.set(0, 2, 0)
scene.add(plight)


camera.position.z = 5


// control of movements
const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.update()


// load car
const loader = new THREE.GLTFLoader()
let car = null


loader.load( 'model/scene.gltf', function ( gltf ) {
    car = gltf.scene
    console.log(car)
    car.scale.set(0.5, 0.5, 0.5)
    car.position.y = -1

	scene.add(car)

}, undefined, function (error) {
	console.error(error)
})


// make a text
const tloader = new THREE.FontLoader()
let text = null
tloader.load('other/Montserrat Thin_Regular.json', function (font) {
        const textGeometry = new THREE.TextGeometry(inputText, {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    })
    const textMaterial = new THREE.MeshPhongMaterial( 
        {color: 0x000000}
    )
    text = new THREE.Mesh(textGeometry, textMaterial)
    text.position.y = 1
    text.position.x = -3
    text.scale.set(0.005, 0.005, 0.005)
    scene.add(text)
})


// animate this!
function animate() {
	requestAnimationFrame(animate)
    controls.update()
	renderer.render(scene, camera)
}
animate()