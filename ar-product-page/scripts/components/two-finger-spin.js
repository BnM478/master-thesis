AFRAME.registerComponent('two-finger-spin', {
  schema: {
    factor: { default: 5 },
    changableUIId: { default: 'changableUI' },

    shoeTypeX2: { default: 'shoeTypeX2' },
    rotateButton: { default: 'rotateButton' },


  },
  init: function () {
    this.changableUI = document.getElementById(this.data.changableUIId)

    this.shoeTypeX2 = document.getElementById(this.data.shoeTypeX2)
    this.rotateButton = document.getElementById(this.data.rotateButton)

    this.handleEvent = this.handleEvent.bind(this)

    this.el.sceneEl.addEventListener('twofingermove', this.handleEvent)
  },
  remove: function () {
    this.el.sceneEl.removeEventListener('twofingermove', this.handleEvent)
  },
  handleEvent: function (event) {
    this.el.object3D.rotation.y += event.detail.positionChange.x * this.data.factor
    this.changableUI.object3D.rotation.y += event.detail.positionChange.x * this.data.factor

  }
})
