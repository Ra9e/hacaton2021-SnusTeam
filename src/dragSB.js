/*
import React, { Component } from 'react'
import * as THREE from 'three'
import DragControls from 'drag-controls'
import './dragSB.css'

DragControls.install({THREE: THREE})

class Scene extends Component {

    constructor(props) {
        super(props)

        /!*this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)*!/
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
                className='dragScene'
                style={{ width: '200px', height: '200px' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}

export default Scene
*/

import React, {Component, createElement} from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import {createElementNS} from "three/src/utils";

class Draggable extends Component {
    constructor() {
        super()
        this.state = {
            width: 60,
            height: 60,
            top: 60,
            left: 60,
            rotateAngle: 0
        }
    }

    handleResize = (style, isShiftKey, type) => {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
        let { top, left, width, height } = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
        this.setState({
            top,
            left,
            width,
            height
        })
    }

    handleRotate = (rotateAngle) => {
        this.setState({
            rotateAngle
        })
    }

    handleDrag = (deltaX, deltaY) => {
        this.setState({
            left: this.state.left + deltaX,
            top: this.state.top + deltaY
        })
    }

    addRect() {
        var newRect = createElement('<ResizableRect left={left} top={top} width={width} height={height} rotateAngle={rotateAngle} zoomable="n, w, s, e, nw, ne, se, sw" onRotate={this.handleRotate} onResize={this.handleResize} onDrag={this.handleDrag}/>')
        document.getElementById('App').appendChild(newRect);
    }

    render() {
        const {width, top, left, height, rotateAngle} = this.state
        return (
            <div id='App' className="App">
                <button className="addRect" onClick="addRect()">Добавить ещё</button>
                <ResizableRect
                    left={left}
                    top={top}
                    width={width}
                    height={height}
                    rotateAngle={rotateAngle}
                    // aspectRatio={false}
                    // minWidth={10}
                    // minHeight={10}
                    zoomable='n, w, s, e, nw, ne, se, sw'
                    // rotatable={true}
                    // onRotateStart={this.handleRotateStart}
                    onRotate={this.handleRotate}
                    // onRotateEnd={this.handleRotateEnd}
                    // onResizeStart={this.handleResizeStart}
                    onResize={this.handleResize}
                    // onResizeEnd={this.handleUp}
                    // onDragStart={this.handleDragStart}
                    onDrag={this.handleDrag}
                    // onDragEnd={this.handleDragEnd}
                />
            </div>
        )
    }
}

export default Draggable