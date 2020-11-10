AFRAME.registerComponent('pinch-scale', {
  schema: {
    min: { default: 0.3 },
    max: { default: 12 },
    changableUIId: { default: 'changableUI' },

    particleSystem: { default: 'particleSystem' },

  },
  init: function () {
    this.initialScale = this.el.object3D.scale.clone()
    this.scaleFactor = 1
    this.handleEvent = this.handleEvent.bind(this)
    this.changableUI = document.getElementById(this.data.changableUIId)

    this.particleSystem = document.getElementById(this.data.particleSystem)
    let particleSize = 5

    this.el.sceneEl.addEventListener('twofingermove', this.handleEvent)

  },
  remove: function () {
    this.el.sceneEl.removeEventListener('twofingermove', this.handleEvent)
  },
  handleEvent: function (event) {
    this.scaleFactor *= 1 + event.detail.spreadChange / event.detail.startSpread

    this.scaleFactor = Math.min(Math.max(this.scaleFactor, this.data.min), this.data.max)


    this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x

    this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y

    this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z




    this.changableUI.object3D.scale.x = this.scaleFactor * this.initialScale.x
    this.changableUI.object3D.scale.y = this.scaleFactor * this.initialScale.y
    this.changableUI.object3D.scale.z = this.scaleFactor * this.initialScale.z




  }
})
