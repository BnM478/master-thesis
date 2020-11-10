AFRAME.registerComponent('ui-change1', {

    schema: {
        uiTabInfo: { default: 'uiTabInfo' },
        uiTabStock: { default: 'uiTabStock' },
        uiTabRating: { default: 'uiTabRating' },
        UIscene: { default: 'UIscene' },
        product2Ui: { default: 'product2Ui' },
        uiButtonScan: { default: 'uiButtonScan' },
        icon3D1: { default: 'icon3D1' },
        shoppingIcon: { default: 'shoppingIcon' },

        uiTotal: { default: 'uiTotal' },
        arrow: { default: 'arrow' },
        product2Arrow: { default: 'product2Arrow' },
        UIarrow: { default: 'UIarrow' },
        template: { default: 'template' },

        shoeType: { default: 'shoeType' },
        shoeType1: { default: 'shoeType1' },
        shoeType2: { default: 'shoeType2' },
        shoeType3: { default: 'shoeType3' },
        shoeTypeShopping: { default: 'shoeTypeShopping' },
        uiButton3D1: { default: 'uiButton3D1' },

        product2ArrowUI: { default: 'product2ArrowUI' },

        uiButtonReset: { default: 'uiButtonReset' },
        uiButtonInfo: { default: 'uiButtonInfo' },
        uiButtonStock: { default: 'uiButtonStock' },
        uiButtonRating: { default: 'uiButtonRating' },
        uiIconInfo: { default: 'uiIconInfo' },
        uiIconStock: { default: 'uiIconStock' },
        uiIconRating: { default: 'uiIconRating' },
        uiButton3D: { default: 'uiButton3D' },
        shoppingCartButton: { default: 'shoppingCartButton' },

        stockArt1: { default: 'stockArt1' },
        icon3D: { default: 'icon3D' },
        shoeType: { default: 'shoeType' },
        infoText: { default: 'infoText' },
        infoText1: { default: 'infoText1' },

        infoText4: { default: 'infoText4' },

        infoText6: { default: 'infoText6' },


        shoeTypeX2: { default: 'shoeTypeX2' },
        ground: { default: 'ground' },
        changableUI: { default: 'changableUI' },
        heart1: { default: 'heart1' },
        shoppingBag: { default: 'shoppingBag' },
        shoeFront: { default: 'shoeFront' },
        ringShoe: { default: 'ringShoe' },
        shoeTypeShopping: { default: 'shoeTypeShopping' },
        shoeType1: { default: 'shoeType1' },
        shoeType2: { default: 'shoeType2' },


        shoeType3: { default: 'shoeType3' },
        star1click: { default: 'star1click' },
        star2click: { default: 'star2click' },
        star3click: { default: 'star3click' },
        star4click: { default: 'star4click' },
        star5click: { default: 'star5click' },










        saleButton: { default: 'saleButton' },
        particleSystem: { default: 'particleSystem' },
        shoesizes: { default: 'shoesizes' },
        shoeiconButton: { default: 'shoeiconButton' },
        imagePictures: { default: 'imagePictures' },
        heartPicture: { default: 'heartPicture' },
        priceText: { default: 'priceText' },


        shoeNameText: { default: 'shoeNameText' },
        shoeNameText2: { default: 'shoeNameText2' },
        headingText: { default: 'headingText' },
        headingText1: { default: 'headingText1' },
        priceArea: { default: 'priceArea' },
        airmaxPic: { default: 'airmaxPic' },
        billboard: { default: 'billboard' },
        billboard1: { default: 'billboard1' },
        billboard2: { default: 'billboard2' },
        billboard3: { default: 'billboard3' },


        changeText: { default: 'changeText' },
        changeHeading: { default: 'changeHeading' },
        ratingAvatar: { default: 'ratingAvatar' },
        ratingName: { default: 'ratingName' },

        shoesize1: { default: 'shoesize1' },
        size1: { default: 'size1' },
        shoesize2: { default: 'shoesize2' },
        size2: { default: 'size2' },
        shoesize3: { default: 'shoesize3' },

        size3: { default: 'size3' },
        shoesize4: { default: 'shoesize4' },
        size4: { default: 'size4' },
        shoesize5: { default: 'shoesize5' },
        size5: { default: 'size5' },
        shoesize6: { default: 'shoesize6' },

        size6: { default: 'size6' },
        shoesize7: { default: 'shoesize7' },
        size7: { default: 'size7' },
        shoesize8: { default: 'shoesize8' },
        size8: { default: 'size8' },
        shoesize9: { default: 'shoesize9' },

        size9: { default: 'size9' },
        shoesize10: { default: 'shoesize10' },
        size10: { default: 'size10' },
        shoesize11: { default: 'shoesize11' },
        size11: { default: 'size11' },
        shoesize12: { default: 'shoesize12' },

        size12: { default: 'size12' },
        shoesize13: { default: 'shoesize13' },
        size13: { default: 'size13' },
        shoesize14: { default: 'shoesize14' },
        size14: { default: 'size14' },




    },

    init: function () {


        this.shoeNameText = document.getElementById(this.data.shoeNameText)
        this.shoeNameText2 = document.getElementById(this.data.shoeNameText2)
        this.headingText = document.getElementById(this.data.headingText)
        this.headingText1 = document.getElementById(this.data.headingText1)
        this.priceArea = document.getElementById(this.data.priceArea)
        this.airmaxPic = document.getElementById(this.data.airmaxPic)
        this.billboard = document.getElementById(this.data.billboard)
        this.billboard1 = document.getElementById(this.data.billboard1)
        this.billboard2 = document.getElementById(this.data.billboard2)
        this.billboard3 = document.getElementById(this.data.billboard3)

        this.icon3D1 = document.getElementById(this.data.icon3D1)
        this.shoppingCartButton = document.getElementById(this.data.shoppingCartButton)
        this.template = document.getElementById(this.data.template)

        this.shoeType = document.getElementById(this.data.shoeType)
        this.shoeType1 = document.getElementById(this.data.shoeType1)
        this.shoeType2 = document.getElementById(this.data.shoeType2)
        this.shoeType3 = document.getElementById(this.data.shoeType3)
        this.shoeTypeShopping = document.getElementById(this.data.shoeTypeShopping)




        this.shoppingIcon = document.getElementById(this.data.shoppingIcon)
        this.saleButton = document.getElementById(this.data.saleButton)
        this.particleSystem = document.getElementById(this.data.particleSystem)
        this.shoesizes = document.getElementById(this.data.shoesizes)
        this.shoeiconButton = document.getElementById(this.data.shoeiconButton)

        this.heartPicture = document.getElementById(this.data.heartPicture)
        this.priceText = document.getElementById(this.data.priceText)





        this.shoeType3 = document.getElementById(this.data.shoeType3)
        this.star1click = document.getElementById(this.data.star1click)
        this.star2click = document.getElementById(this.data.star2click)
        this.star3click = document.getElementById(this.data.star3click)
        this.star4click = document.getElementById(this.data.star4click)
        this.star5click = document.getElementById(this.data.star5click)







        this.shoeTypeX2 = document.getElementById(this.data.shoeTypeX2)
        this.ground = document.getElementById(this.data.ground)
        this.changableUI = document.getElementById(this.data.changableUI)
        this.heart1 = document.getElementById(this.data.heart1)
        this.shoppingBag = document.getElementById(this.data.shoppingBag)
        this.shoeFront = document.getElementById(this.data.shoeFront)
        this.ringShoe = document.getElementById(this.data.ringShoe)
        this.shoeTypeShopping = document.getElementById(this.data.shoeTypeShopping)
        this.shoeType1 = document.getElementById(this.data.shoeType1)
        this.shoeType2 = document.getElementById(this.data.shoeType2)




        this.stockArt1 = document.getElementById(this.data.stockArt1)
        this.icon3D = document.getElementById(this.data.icon3D)
        this.shoeType = document.getElementById(this.data.shoeType)
        this.infoText = document.getElementById(this.data.infoText)
        this.infoText1 = document.getElementById(this.data.infoText1)

        this.infoText4 = document.getElementById(this.data.infoText4)

        this.infoText6 = document.getElementById(this.data.infoText6)




        this.product2ArrowUI = document.getElementById(this.data.product2ArrowUI)

        this.uiButtonReset = document.getElementById(this.data.uiButtonReset)
        this.uiButtonInfo = document.getElementById(this.data.uiButtonInfo)
        this.uiButtonStock = document.getElementById(this.data.uiButtonStock)
        this.uiButtonRating = document.getElementById(this.data.uiButtonRating)
        this.uiIconInfo = document.getElementById(this.data.uiIconInfo)
        this.uiIconStock = document.getElementById(this.data.uiIconStock)
        this.uiIconRating = document.getElementById(this.data.uiIconRating)
        this.uiButton3D = document.getElementById(this.data.uiButton3D)
        this.uiButton3D1 = document.getElementById(this.data.uiButton3D1)






        this.uiTabInfo = document.getElementById(this.data.uiTabInfo)
        this.uiTabStock = document.getElementById(this.data.uiTabStock)
        this.uiTabRating = document.getElementById(this.data.uiTabRating)
        this.UIscene = document.getElementById(this.data.UIscene)
        this.product2Ui = document.getElementById(this.data.product2Ui)
        this.uiButtonScan = document.getElementById(this.data.uiButtonScan)
        this.uiTotal = document.getElementById(this.data.uiTotal)
        this.arrow = document.getElementById(this.data.arrow)
        this.product2Arrow = document.getElementById(this.data.product2Arrow)
        this.UIarrow = document.getElementById(this.data.UIarrow)

        this.ratingAvatar = document.getElementById(this.data.ratingAvatar)
        this.ratingName = document.getElementById(this.data.ratingName)
        this.changeText = document.getElementById(this.data.changeText)
        this.changeHeading = document.getElementById(this.data.changeHeading)

        this.shoesize1 = document.getElementById(this.data.shoesize1)
        this.size1 = document.getElementById(this.data.size1)
        this.shoesize2 = document.getElementById(this.data.shoesize2)
        this.size2 = document.getElementById(this.data.size2)
        this.shoesize3 = document.getElementById(this.data.shoesize3)


        this.size3 = document.getElementById(this.data.size3)
        this.shoesize4 = document.getElementById(this.data.shoesize4)
        this.size4 = document.getElementById(this.data.size4)
        this.shoesize5 = document.getElementById(this.data.shoesize5)
        this.size5 = document.getElementById(this.data.size5)
        this.shoesize6 = document.getElementById(this.data.shoesize6)

        this.size6 = document.getElementById(this.data.size6)
        this.shoesize7 = document.getElementById(this.data.shoesize7)
        this.size7 = document.getElementById(this.data.size7)
        this.shoesize8 = document.getElementById(this.data.shoesize8)
        this.size8 = document.getElementById(this.data.size8)
        this.shoesize9 = document.getElementById(this.data.shoesize9)


        this.size9 = document.getElementById(this.data.size9)
        this.shoesize10 = document.getElementById(this.data.shoesize10)
        this.size10 = document.getElementById(this.data.size10)
        this.shoesize11 = document.getElementById(this.data.shoesize11)
        this.size11 = document.getElementById(this.data.size11)
        this.shoesize12 = document.getElementById(this.data.shoesize12)



        this.size12 = document.getElementById(this.data.size12)
        this.shoesize13 = document.getElementById(this.data.shoesize13)
        this.size13 = document.getElementById(this.data.size13)
        this.shoesize14 = document.getElementById(this.data.shoesize14)
        this.size14 = document.getElementById(this.data.size14)















        let idx = 1 // Start with the 2nd animation because the model starts with idle animation
        const changeUiToInfo = () => {

            if (this.UIscene.className == "choosen") {

                this.uiTabRating.className = "notactiv"
                this.uiTabInfo.className = "activ"
                this.uiTabStock.className = "notactiv"

                this.uiTabInfo.setAttribute('visible', 'true')
                this.uiTabInfo.setAttribute('position', '0 0 0')
                this.uiTabStock.setAttribute('visible', 'false')
                this.uiTabStock.setAttribute('position', '0 0 -5')
                this.uiTabRating.setAttribute('visible', 'false')
                this.uiTabRating.setAttribute('position', '0 0 -5')
            } if (this.product2Ui.className == "choosen") {


            }

            this.uiIconInfo.setAttribute('style', 'width: auto; height:auto ; color: #ef2d5e;font-size:36px;')
            this.uiIconStock.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')
            this.uiIconRating.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')

        }



        const changeUiToStock = () => {


            if (this.UIscene.className == "choosen") {
                this.uiTabRating.className = "notactiv"
                this.uiTabInfo.className = "notactiv"
                this.uiTabStock.className = "activ"
                this.uiTabInfo.setAttribute('visible', 'false')
                this.uiTabInfo.setAttribute('position', '0 0 -5')
                this.uiTabStock.setAttribute('visible', 'true')
                this.uiTabStock.setAttribute('position', '0 0 0')
                this.uiTabRating.setAttribute('visible', 'false')
                this.uiTabRating.setAttribute('position', '0 0 -5')

            }
            if (this.product2Ui.className == "choosen") {


            }



            this.uiIconInfo.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')
            this.uiIconStock.setAttribute('style', 'width: auto; height:auto ; color: #ef2d5e;font-size:36px;')
            this.uiIconRating.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')

        }
        const changeUiToRating = () => {


            if (this.UIscene.className == "choosen") {
                this.uiTabRating.className = "activ"
                this.uiTabInfo.className = "notactiv"
                this.uiTabStock.className = "notactiv"
                this.uiTabInfo.setAttribute('visible', 'false')
                this.uiTabInfo.setAttribute('position', '0 0 -5')
                this.uiTabStock.setAttribute('visible', 'false')
                this.uiTabStock.setAttribute('position', '0 0 -5')
                this.uiTabRating.setAttribute('visible', 'true')
                this.uiTabRating.setAttribute('position', '0 0 0')
            }
            if (this.product2Ui.className == "choosen") {

            }

            this.uiIconInfo.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')
            this.uiIconStock.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')
            this.uiIconRating.setAttribute('style', 'width: auto; height:auto ; color: #ef2d5e;font-size:36px;')


        }

        const scanProduct = () => {

            this.infoText.setAttribute("style", "display:none")
            this.infoText1.setAttribute("style", "display:none")





            if (this.UIarrow.className != "scanned" && this.product2ArrowUI.className != "scanned" && this.UIarrow.className != "choosenScan" && this.product2ArrowUI.className != "choosenScan") {

            }
            else if (this.UIarrow.className == "scanned" && this.product2ArrowUI.className != "scanned" && this.product2ArrowUI.className != "choosenScan") {


                this.arrow.setAttribute('visible', 'false')
                this.product2Arrow.setAttribute('visible', 'false')
                this.arrow.setAttribute('position', '0 0 -5')
                this.product2Arrow.setAttribute('position', '0 0 -5')
                this.UIscene.className = "choosen"
                this.product2Ui.className = "notchoosen"
                this.stockArt1.setAttribute('visible', 'true')

                this.uiTabInfo.setAttribute('visible', 'true')
                this.uiTabInfo.setAttribute('position', '0 0 0')
                this.uiTotal.setAttribute('style', '')
                this.uiButtonScan.setAttribute('style', 'display:none')
                this.infoText.setAttribute("style", "display:none")
                this.infoText1.setAttribute("style", "display:none")

                this.template.setAttribute("style", "display:none")

                this.shoeTypeX2.setAttribute('pinch-scale', '')
                this.shoeTypeX2.className = "cantap startClass1"

                this.changableUI.className = "startClass1"
                this.infoText6.setAttribute("style", "")

            }




        }
        const element = document.documentElement
        const toggleFullScreen = () => {


            if (element.requestFullscreen) {
                element.requestFullscreen();        // W3C spec
            }
            else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();     // Firefox
            }
            else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();  // Safari
            }
            else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();      // IE/Edge
            }
        }


        const resetit = () => {

            this.product2Arrow.setAttribute('visible', false)
            this.arrow.setAttribute('visible', false)
            this.product2ArrowUI.className = "product2ArrowUIreseted"
            this.UIarrow.className = "arrowuireseted"
            this.shoppingIcon.innerHTML = "shopping_cart"
            this.infoText6.setAttribute("style", "display:none")




            this.UIscene.className = "notchoosen"
            this.product2Ui.className = "notchoosen"
            this.stockArt1.setAttribute('visible', false)
            this.uiButton3D.setAttribute('style', 'background-color: black')
            this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')
            idxClick = 0
            this.shoeType.className = "3Dnotactivated"
            this.product2Arrow.setAttribute('position', '0 1.5 0')
            this.arrow.setAttribute('position', '0 1.5 0')
            this.product2Arrow.setAttribute('scale', '0.5 0.5 0.5')
            this.arrow.setAttribute('scale', '0.5 0.5 0.5')
            this.uiTabInfo.setAttribute('visible', 'false')
            this.uiTabStock.setAttribute('visible', 'false')
            this.uiTabRating.setAttribute('visible', 'false')
            this.template.setAttribute("style", "")

            this.uiTabRating.className = "notactiv"
            this.uiTabInfo.className = "activ"
            this.uiTabStock.className = "notactiv"

            this.uiTabInfo.setAttribute('position', '0 0 -5')
            this.uiTabStock.setAttribute('position', '0 0 -5')
            this.uiTabRating.setAttribute('position', '0 0 -5')

            this.ground.setAttribute("visible", false)

            this.infoText.setAttribute("style", "")
            this.infoText1.setAttribute("style", "display:none")

            this.infoText4.setAttribute("style", "display:none")

            this.infoText6.setAttribute("style", "display:none")

            this.shoeTypeX2.className = "startClass"
            this.changableUI.className = "startClass"



            this.uiTotal.setAttribute('style', 'display: none;')
            this.uiButtonScan.setAttribute('style', '')
            this.uiIconInfo.setAttribute('style', 'width: auto; height:auto ; color: #ef2d5e;font-size:36px;')
            this.uiIconStock.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')
            this.uiIconRating.setAttribute('style', 'width: auto; height:auto ; color: black;font-size:36px;')
            this.heart1.setAttribute('position', '0 0 0')
            this.heart1.setAttribute('rotation', '0 0 0')
            this.shoeFront.setAttribute('src', '#my-yellow')
            this.ringShoe.setAttribute('position', "-0.75 1 0")

            this.heart1.setAttribute('visible', 'false')
            this.heart1.setAttribute('animation', 'property: position; to: 0 0 0; dur: 100; easing: linear; loop: false"')
            this.heart1.setAttribute('animation__1', 'property: rotation; to: 0 0 0; dur: 100; easing: linear; loop: false"')
            this.heartPicture.className = "cantap notclicked"
            this.heart1.setAttribute('rotation', '0 0 0')
            this.heartPicture.setAttribute("src", "#heartempty")
            this.shoppingBag.setAttribute('visible', 'false')
            this.shoppingBag.setAttribute('animation', 'property: position; to: 0 0 0; dur: 100; easing: linear; loop: false"')
            this.icon3D1.innerHTML = "directions_off"

            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justYellow")
            this.star3click.setAttribute('src', "#justYellow")
            this.star4click.setAttribute('src', "#justYellow")
            this.star5click.setAttribute('src', "#justYellow")

            this.uiButton3D1.className = "uiButton3D notclicked"
            this.uiButton3D1.setAttribute('style', 'background-color:#ccc9ca; ')
            this.icon3D1.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')


            this.shoeTypeX2.removeAttribute('hold-drag')
            this.shoeTypeX2.removeAttribute('pinch-scale')




            this.particleSystem.setAttribute('particle-system', "enabled:false; color: #ef2d5e,#ef2d5e;accelerationValue:0 -1 0; accelerationSpread: 3 3 3;maxAge:2; particleCount:10; size: 5; velocityValue: 0 3 0; velocitySpread: 3 0 3; texture:assets/img/30.png ")


            this.shoesizes.setAttribute('visible', true)

            this.shoeiconButton.setAttribute('src', '#shoeicon')


            this.billboard.setAttribute('visible', "true")
            this.billboard1.setAttribute('visible', "false")
            this.billboard2.setAttribute('visible', "false")
            this.billboard3.setAttribute('visible', "false")
            this.priceText.innerHTML = "83,93 $"
            this.shoeNameText.innerHTML = "Air Max Yellow"
            this.shoeNameText2.innerHTML = "Sneaker"

            this.headingText.setAttribute('text-geometry', "value: Air Max Yellow")
            this.headingText1.setAttribute('text-geometry', "value: Sneaker ")

            this.priceArea.setAttribute('text-geometry', "value: 83,93 $")

            this.infoText4.setAttribute("style", "display:none")

            this.infoText6.setAttribute("style", "display:none")
            this.airmaxPic.setAttribute("src", "#airmax2")


            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justYellow")
            this.star3click.setAttribute('src', "#justYellow")
            this.star4click.setAttribute('src', "#justYellow")
            this.star5click.setAttribute('src', "#justGrey")

            this.changeText.setAttribute('value', "\n Nothing to complain just a little bit expensive")
            this.changeHeading.setAttribute('value', "  Good shoe")
            this.ratingAvatar.setAttribute('src', "#my-profil1")
            this.ratingName.setAttribute('value', "  Jan32")


            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#ffffff')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#ffffff')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#ffffff')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#ffffff')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#ffffff')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#ffffff')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#ffffff')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#ffffff')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#ffffff')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#ffffff')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#ffffff')
            this.size11.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#ffffff')
            this.size12.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize13.setAttribute('opacity', '1')
            this.shoesize13.setAttribute('color', '#ef2d5e')
            this.size13.setAttribute('material', 'color:#ffffff;')

            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#ffffff')
            this.size14.setAttribute('material', 'color:#ef2d5e;')
            this.shoeType3.setAttribute('visible', true)
            this.shoeType.setAttribute('visible', false)
            this.shoeType1.setAttribute('visible', false)
            this.shoeType2.setAttribute('visible', false)
            this.shoeTypeShopping.setAttribute('gltf-model', '#shoe3')



        }

        const object3D = () => {

            if (this.shoeType.className == "3Dactivated") {

                this.uiButton3D.setAttribute('style', 'background-color:black')
                this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')
                this.icon3D.innerHTML = "subtitles"
                idxClick = 1
                this.shoeType.className = "3Dnotactivated"
                if (uiTabInfo.className == "activ") {
                    this.uiTabInfo.setAttribute('visible', 'true')
                }
                if (uiTabStock.className == "activ") {
                    this.uiTabStock.setAttribute('visible', 'true')
                }
                if (uiTabRating.className == "activ") {
                    this.uiTabRating.setAttribute('visible', 'true')
                }





            }
            else {


                this.uiButton3D.setAttribute('style', 'background-color:#ccc9ca; ')
                this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')
                this.icon3D.innerHTML = "subtitles_off"
                idxClick = 0
                this.shoeType.className = "3Dactivated"
                if (uiTabInfo.className == "activ") {
                    this.uiTabInfo.setAttribute('visible', 'false')
                }
                if (uiTabStock.className == "activ") {
                    this.uiTabStock.setAttribute('visible', 'false')
                }
                if (uiTabRating.className == "activ") {
                    this.uiTabRating.setAttribute('visible', 'false')
                }











            }
        }





        idxClickedShopping = 0
        const shoppingAnimation = () => {
            if (idxClickedShopping == 0) {
                this.shoppingBag.setAttribute('visible', 'true')
                this.shoppingBag.setAttribute('animation', 'property: position; to: 0 5 1; dur: 2000; easing: linear; loop: false"')
                setTimeout(heartAnimation2, 2000)

                this.shoppingIcon.innerHTML = "remove_shopping_cart"
                idxClickedShopping = 1
            } else {
                this.shoppingBag.setAttribute('visible', 'false')
                this.shoppingBag.setAttribute('animation', 'property: position; to: 0 0 0; dur: 100; easing: linear; loop: false"')

                this.shoppingIcon.innerHTML = "shopping_cart"

                idxClickedShopping = 0

            }
        }

        const heartAnimation2 = () => {
            this.shoppingBag.setAttribute('visible', 'false')
            this.shoppingBag.setAttribute('animation', 'property: position; to: 0 0 0; dur: 100; easing: linear; loop: false"')



        }

        const heartAnimation3 = () => {
            this.heart1.setAttribute('visible', 'false')
            this.heart1.setAttribute('animation', 'property: position; to: 0 0 0; dur: 100; easing: linear; loop: false"')



        }






        const replace = () => {

            if (uiButton3D1.className == "uiButton3D notclicked") {

                this.uiButton3D1.setAttribute('color', "#ef2d5e")
                this.shoeTypeX2.setAttribute('hold-drag', '')
                this.shoeTypeX2.className = "cantap startClass1"
                this.icon3D1.innerHTML = "directions"
                this.infoText6.setAttribute("style", "display:none")
                this.changableUI.className = "startClass1"
                this.ground.setAttribute("visible", true)
                this.uiButton3D1.className = "uiButton3D clicked"

                this.infoText4.setAttribute("style", "")

                this.infoText6.setAttribute("style", "display:none")
                this.uiButton3D1.setAttribute('style', 'background-color: black; ')
                this.icon3D1.setAttribute('style', ' padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')


            } else {

                this.uiButton3D1.setAttribute('style', 'background-color:#ccc9ca; ')
                this.icon3D1.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')

                this.uiButton3D1.setAttribute('color', "#ffffff")
                this.uiButton3D1.className = "uiButton3D notclicked"
                this.icon3D1.innerHTML = "directions_off"
                this.shoeTypeX2.removeAttribute('hold-drag')
                this.infoText6.setAttribute("style", "")
                this.infoText4.setAttribute("style", "display:none")


                this.shoeTypeX2.setAttribute('two-finger-spin', '')

            }



        }
        /*
                this.holdDragButton.addEventListener('click', event => {
         
                    if (holdDragButton.className == "cantap notclicked") {
                        
                        this.holdDragButton.setAttribute('color', "#ef2d5e")
                        this.shoeTypeX2.setAttribute('hold-drag', '')
                        this.shoeTypeX2.className = "cantap startClass1"
                        this.ui3D.className = "startClass1"
                        this.changableUI.className = "startClass1"
                        this.ground.setAttribute("visible", true)
                        this.holdDragButton.className = "cantap clicked"
                        this.iconReplace.setAttribute('src', '#replaceWhite')
                        this.infoText4.setAttribute("style", "")
         
                        this.infoText6.setAttribute("style", "display:none")
         
         
         
                    } else {
         
         
                        
                        this.holdDragButton.setAttribute('color', "#ffffff")
                        this.holdDragButton.className = "cantap notclicked"
                        this.shoeTypeX2.removeAttribute('hold-drag')
                        this.iconReplace.setAttribute('src', '#replacePink')
                        this.infoText4.setAttribute("style", "display:none")
         
                        this.infoText6.setAttribute("style", "display:none")
                        this.shoeTypeX2.setAttribute('two-finger-spin', '')
         
                    }
         
         
         
                })
         
        */
        /*
                this.pinchScaleButton.addEventListener('click', event => {
         
                    if (this.pinchScaleButton.className == "cantap notclicked") {
                        
                        this.pinchScaleButton.setAttribute('color', "#ef2d5e")
                        this.shoeTypeX2.setAttribute('pinch-scale', '')
                        this.pinchScaleButton.className = "cantap clicked"
                        this.shoeTypeX2.className = "cantap startClass1"
                        this.ui3D.className = "startClass1"
                        this.changableUI.className = "startClass1"
                        this.iconScale.setAttribute('src', '#scaleWhite')
                        this.infoText4.setAttribute("style", "display:none")
                        this.infoText5.setAttribute("style", "")
                        this.infoText6.setAttribute("style", "display:none")
         
         
         
         
         
         
                        this.holdDragButton.setAttribute('color', "#ffffff")
                        this.holdDragButton.className = "cantap notclicked"
                        this.shoeTypeX2.removeAttribute('hold-drag')
                        this.iconReplace.setAttribute('src', '#replacePink')
         
         
                    } else {
         
         
                     
                        this.pinchScaleButton.setAttribute('color', "#ffffff")
                        this.shoeTypeX2.removeAttribute('pinch-scale')
                        this.pinchScaleButton.className = "cantap notclicked"
                        this.iconScale.setAttribute('src', '#scalePink')
                        this.infoText4.setAttribute("style", "display:none")
                        this.infoText5.setAttribute("style", "display:none")
                        this.infoText6.setAttribute("style", "display:none")
                        this.shoeTypeX2.setAttribute('two-finger-spin', '')
         
                    }
                })
        */

        /*      Rotate Button
                this.rotateButton.addEventListener('click', event => {
         
                    if (rotateButton.className == "cantap notclicked") {
                       
                        this.rotateButton.setAttribute('color', "#ef2d5e")
                        this.shoeTypeX2.setAttribute('two-finger-spin', '')
                        this.rotateButton.className = "cantap clicked"
                        this.shoeTypeX2.className = "cantap startClass1"
                        this.ui3D.className = "startClass1"
                        this.changableUI.className = "startClass1"
                        this.iconRotate.setAttribute('src', '#rotateWhite')
                        this.infoText4.setAttribute("style", "display:none")
                        this.infoText5.setAttribute("style", "display:none")
                        this.infoText6.setAttribute("style", "")
         
         
                        this.pinchScaleButton.setAttribute('color', "#ffffff")
                        this.shoeTypeX2.removeAttribute('pinch-scale')
                        this.pinchScaleButton.className = "cantap notclicked"
                        this.iconScale.setAttribute('src', '#scalePink')
         
                        this.holdDragButton.setAttribute('color', "#ffffff")
                        this.holdDragButton.className = "cantap notclicked"
                        this.shoeTypeX2.removeAttribute('hold-drag')
                        this.iconReplace.setAttribute('src', '#replacePink')
         
         
         
                    } else {
         
         
                        
                        this.rotateButton.setAttribute('color', "#ffffff")
                        this.shoeTypeX2.removeAttribute('two-finger-spin')
                        this.rotateButton.className = "cantap notclicked"
                        this.iconRotate.setAttribute('src', '#rotatePink')
                        this.infoText4.setAttribute("style", "display:none")
                        this.infoText5.setAttribute("style", "display:none")
                        this.infoText6.setAttribute("style", "display:none")
         
                    }
                })
         
                */

        this.saleButton.addEventListener('click', event => {

            if (this.saleButton.className == "cantap notclicked") {
                this.saleButton.className = "cantap clicked"
                this.particleSystem.setAttribute('particle-system', "enabled:true; color: #ef2d5e,#ef2d5e;accelerationValue:0 -1 0; accelerationSpread: 3 3 3;maxAge:2; particleCount:10; size: 5; velocityValue: 0 3 0; velocitySpread: 3 0 3; texture:assets/img/30.png ")
            } else {
                this.saleButton.className = "cantap notclicked"
                this.particleSystem.setAttribute('particle-system', "enabled:false; color: #ef2d5e,#ef2d5e;accelerationValue:0 -1 0; accelerationSpread: 3 3 3;maxAge:2; particleCount:10; size: 5; velocityValue: 0 3 0; velocitySpread: 3 0 3; texture:assets/img/30.png ")
            }
        })

        this.heartPicture.addEventListener('click', event => {

            if (this.heartPicture.className == "cantap notclicked") {
                this.heartPicture.className = "cantap clicked"
                this.heartPicture.setAttribute("src", "#heartfull")
                this.heart1.setAttribute('visible', 'true')
                this.heart1.setAttribute('animation', 'property: position; to: 0 5 0; dur: 1000; easing: linear; loop: false"')
                this.heart1.setAttribute('animation__1', 'property: rotation; to: 0 360 0; dur: 1000; easing: linear; loop: false"')
                setTimeout(heartAnimation3, 1000)


            } else {

                this.heart1.setAttribute('visible', 'false')
                this.heart1.setAttribute('animation', 'property: position; to: 0 0 0; dur: 100; easing: linear; loop: false"')
                this.heart1.setAttribute('animation__1', 'property: rotation; to: 0 0 0; dur: 100; easing: linear; loop: false"')
                this.heartPicture.className = "cantap notclicked"
                this.heart1.setAttribute('rotation', '0 0 0')
                this.heartPicture.setAttribute("src", "#heartempty")




            }
        }

        )




        this.shoppingCartButton.onclick = shoppingAnimation
        this.uiButton3D.onclick = object3D
        this.uiButton3D1.onclick = replace


        this.uiButtonScan.onclick = scanProduct

        this.uiButtonReset.onclick = resetit






        this.uiButtonInfo.onclick = changeUiToInfo
        this.uiButtonStock.onclick = changeUiToStock
        this.uiButtonRating.onclick = changeUiToRating // Switch to the next animation when the button is pressed.
    }
})

