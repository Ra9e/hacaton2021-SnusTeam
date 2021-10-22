import React, { Component } from 'react'
import * as THREE from 'three'
import DragControls from 'drag-controls'
DragControls.install({THREE: THREE})

class Scene extends Component {

    constructor(props) {
        super(props)

        /*this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)*/
        this.animate = this.animate.bind(this)

    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(10, 10, 0)
        //const material = new THREE.MeshBasicMaterial({ color: '#433F81' })

        const ambientLight = new THREE.AmbientLight(0x0f0f0f);
        scene.add(ambientLight);
        const light = new THREE.SpotLight(0xffffff, 1.5);
        light.position.set(0, 500, 2000);
        scene.add(light);


        var objects = [];
        for (var i = 0; i < 5; i++)
        {
            var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff}));
            object.position.x = -20 * i + 1;
            object.position.y = 1;
            object.position.z = -100;

            scene.add(object);

            objects.push(object);
        }

        //const cube = new THREE.Mesh(geometry, material)
        const controls = new DragControls(objects, camera, renderer.domElement);

        camera.position.z = 6
        //scene.add(cube)
        renderer.setClearColor('#FFFFE0')
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.controls = controls
        //this.material = material
        //this.cube = cube

        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    animate() {
        //this.cube.rotation.x += 0.01
        //this.cube.rotation.y += 0.01

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div
                style={{ width: '300px', height: '300px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default Scene