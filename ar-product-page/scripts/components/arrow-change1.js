AFRAME.registerComponent('arrow-change1', {
    schema: {
        factor: { default: 5 },
        changableUIId: { default: 'changableUI' },


        arrow: { default: 'arrow' },
        product2Arrow: { default: 'product2Arrow' },
        UIarrow: { default: 'UIarrow' },
        product2ArrowUI: { default: 'product2ArrowUI' },



    },
    init: function () {
        this.changableUI = document.getElementById(this.data.changableUIId)


        this.arrow = document.getElementById(this.data.arrow)
        this.product2Arrow = document.getElementById(this.data.product2Arrow)
        this.UIarrow = document.getElementById(this.data.UIarrow)
        this.product2ArrowUI = document.getElementById(this.data.product2ArrowUI)



        this.arrow.addEventListener('click', event => {
            if (this.UIarrow.className == "scanned" && this.product2ArrowUI.className == "scanned") {
                this.UIarrow.className = "choosenScan"
                this.product2Arrow.setAttribute("scale", "0.25 0.25 0.25")

            }
            else if (UIarrow.className == "scanned" && this.product2ArrowUI.className == "choosenScan") {
                this.UIarrow.className = "choosenScan"
                this.product2ArrowUIclassName = "scanned"
                this.product2Arrow.setAttribute("scale", "0.25 0.25 0.25")
                this.arrow.setAttribute("scale", "0.5 0.5 0.5")

            }
            else {



                return
            }
        })

        this.product2Arrow.addEventListener('click', event => {
            if (this.UIarrow.className == "scanned" && this.product2ArrowUI.className == "scanned") {
                this.product2ArrowUI.className = "choosenScan"
                this.arrow.setAttribute("scale", "0.25 0.25 0.25")

            }
            else if (this.product2ArrowUI.className == "scanned" && this.UIarrow.className == "choosenScan") {
                this.product2ArrowUI.className = "choosenScan"
                this.UIarrow.className = "scanned"
                this.arrow.setAttribute("scale", "0.25 0.25 0.25")
                this.product2Arrow.setAttribute("scale", "0.5 0.5 0.5")

            }
            else {

                return
            }
        })



    }
})
