// Component that uses the gesture-detector and raycaster to drag and drop an object
AFRAME.registerComponent('hold', {
  schema: {
    cameraId: { default: 'camera' },
    groundId: { default: 'ground' },
    dragDelay: { default: 300 },
    loadingNike: { default: 'loadingNike' },


  },
  init: function () {
    this.camera = document.getElementById(this.data.cameraId)
    this.threeCamera = this.camera.getObject3D('camera')
    this.loadingNike = document.getElementById(this.data.loadingNike)



    this.internalState = {
      fingerDown: false,
      dragging: false,
      distance: 0,
      startDragTimeout: null,
      raycaster: new THREE.Raycaster(),
    }







    this.fingerDown = this.fingerDown.bind(this)
    this.startDrag = this.startDrag.bind(this)
    this.fingerMove = this.fingerMove.bind(this)
    this.fingerUp = this.fingerUp.bind(this)

    this.el.addEventListener('mousedown', this.fingerDown)
    this.el.sceneEl.addEventListener('onefingermove', this.fingerMove)
    this.el.sceneEl.addEventListener('onefingerend', this.fingerUp)
  },
  tick: function () {

  },
  remove: function () {
    this.el.removeEventListener('mousedown', fingerDown)
    this.el.scene.removeEventListener('onefingermove', fingerMove)
    this.el.scene.removeEventListener('onefingerend', fingerUp)

  },
  fingerDown: function (event) {
    this.internalState.fingerDown = true
    this.internalState.startDragTimeout = setTimeout(this.startDrag, this.data.dragDelay)
    this.internalState.positionRaw = event.detail.positionRaw
    this.loadingNike.setAttribute('animation', 'property: material.opacity; to: 1; dur: 1000; easing: linear; loop: false"')

  },
  startDrag: function (event) {
    if (!this.internalState.fingerDown) {
      return
    }


  },
  fingerMove: function (event) {
    this.internalState.positionRaw = event.detail.positionRaw


  },
  fingerUp: function (event) {
    this.internalState.fingerDown = false
    clearTimeout(this.internalState.startDragTimeout)


    this.loadingNike.setAttribute('animation', 'property: material.opacity; to: 0; dur: 1; easing: linear; loop: false"')

    this.internalState.positionRaw = null

    if (this.internalState.dragging) {
      return
    }


    this.internalState.dragging = false



  }
})
