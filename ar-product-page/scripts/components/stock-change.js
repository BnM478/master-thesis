AFRAME.registerComponent('stock-change1', {

    schema: {
        stockArt1: { default: 'stockArt1' },
        shoeType: { default: 'shoeType' },
        shoeType1: { default: 'shoeType1' },
        shoeType2: { default: 'shoeType2' },
        shoeType3: { default: 'shoeType3' },
        shoeTypeShopping: { default: 'shoeTypeShopping' },


        icon3D: { default: 'icon3D' },
        color1Shoe: { default: 'color1Shoe' },
        color2Shoe: { default: 'color2Shoe' },
        color3Shoe: { default: 'color3Shoe' },
        color4Shoe: { default: 'color4Shoe' },
        shoeFront: { default: 'shoeFront' },


        ringShoe: { default: 'ringShoe' },
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

        uiButton3D: { default: 'uiButton3D' },
    },

    init: function () {


        this.billboard = document.getElementById(this.data.billboard)
        this.billboard1 = document.getElementById(this.data.billboard1)
        this.billboard2 = document.getElementById(this.data.billboard2)
        this.billboard3 = document.getElementById(this.data.billboard3)

        this.uiButton3D = document.getElementById(this.data.uiButton3D)



        this.ringShoe = document.getElementById(this.data.ringShoe)
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
        this.priceText = document.getElementById(this.data.priceText)


        this.icon3D = document.getElementById(this.data.icon3D)
        this.color1Shoe = document.getElementById(this.data.color1Shoe)
        this.color2Shoe = document.getElementById(this.data.color2Shoe)
        this.color3Shoe = document.getElementById(this.data.color3Shoe)
        this.color4Shoe = document.getElementById(this.data.color4Shoe)
        this.shoeFront = document.getElementById(this.data.shoeFront)




        this.stockArt1 = document.getElementById(this.data.stockArt1)
        this.shoeType = document.getElementById(this.data.shoeType)
        this.shoeType1 = document.getElementById(this.data.shoeType1)
        this.shoeType2 = document.getElementById(this.data.shoeType2)
        this.shoeType3 = document.getElementById(this.data.shoeType3)
        this.shoeTypeShopping = document.getElementById(this.data.shoeTypeShopping)



        this.shoeNameText = document.getElementById(this.data.shoeNameText)
        this.shoeNameText2 = document.getElementById(this.data.shoeNameText2)
        this.headingText = document.getElementById(this.data.headingText)
        this.headingText1 = document.getElementById(this.data.headingText1)
        this.priceArea = document.getElementById(this.data.priceArea)
        this.airmaxPic = document.getElementById(this.data.airmaxPic)













        const stockTypeList = [shoeType3, shoeType, shoeType1, shoeType2]



        let idxStock = 0










        this.color4Shoe.addEventListener('click', event => {
            this.stockArt1.setAttribute('visible', true)
            this.shoeType3.setAttribute('visible', true)
            this.shoeType.setAttribute('visible', false)
            this.shoeType1.setAttribute('visible', false)
            this.shoeType2.setAttribute('visible', false)
            this.shoeTypeShopping.setAttribute('gltf-model', '#shoe3')
            this.shoeFront.setAttribute('src', '#my-yellow')
            this.ringShoe.setAttribute('position', "-0.75 1 0")
            this.uiButton3D.setAttribute('style', 'background-color:black')
            this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')

            this.priceText.innerHTML = "83,93 $"
            this.shoeNameText.innerHTML = "Air Max Yellow"
            this.shoeNameText2.innerHTML = "Sneaker"

            this.headingText.setAttribute('text-geometry', "value: Air Max Yellow")
            this.headingText1.setAttribute('text-geometry', "value: Sneaker ")

            this.priceArea.setAttribute('text-geometry', "value: 83,93 $")
            this.airmaxPic.setAttribute('src', "#airmax2")
            this.billboard.setAttribute('visible', "true")
            this.billboard1.setAttribute('visible', "false")
            this.billboard2.setAttribute('visible', "false")
            this.billboard3.setAttribute('visible', "false")









        })
        this.color2Shoe.addEventListener('click', event => {
            this.stockArt1.setAttribute('visible', true)
            this.shoeType3.setAttribute('visible', false)
            this.shoeType.setAttribute('visible', true)
            this.shoeType1.setAttribute('visible', false)
            this.shoeType2.setAttribute('visible', false)
            this.shoeTypeShopping.setAttribute('gltf-model', '#shoe')
            this.shoeFront.setAttribute('src', '#my-turkis')
            this.ringShoe.setAttribute('position', "-0.3 1 0")
            this.uiButton3D.setAttribute('style', 'background-color:black')
            this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')

            this.shoeType.className = "3Dactivated"

            this.priceText.innerHTML = "83,93 $"
            this.shoeNameText.innerHTML = "Air Max Turkis"
            this.shoeNameText2.innerHTML = "Sneaker"

            this.headingText.setAttribute('text-geometry', "value: Air Max Turkis")
            this.headingText1.setAttribute('text-geometry', "value: Sneaker ")

            this.priceArea.setAttribute('text-geometry', "value: 83,93 $")
            this.airmaxPic.setAttribute('src', "#airmax4")
            this.billboard.setAttribute('visible', "false")
            this.billboard1.setAttribute('visible', "true")
            this.billboard2.setAttribute('visible', "false")
            this.billboard3.setAttribute('visible', "false")





        })
        this.color1Shoe.addEventListener('click', event => {
            this.stockArt1.setAttribute('visible', true)
            this.shoeType3.setAttribute('visible', false)
            this.shoeType.setAttribute('visible', false)
            this.shoeType1.setAttribute('visible', true)
            this.shoeType2.setAttribute('visible', false)
            this.shoeTypeShopping.setAttribute('gltf-model', '#shoe1')
            this.shoeFront.setAttribute('src', '#my-lila')
            this.ringShoe.setAttribute('position', "0.15 1 0")
            this.uiButton3D.setAttribute('style', 'background-color:black')
            this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')

            this.shoeType.className = "3Dactivated"

            this.priceText.innerHTML = "83,93 $"
            this.shoeNameText.innerHTML = "Air Max Lila"
            this.shoeNameText2.innerHTML = "Sneaker"

            this.headingText.setAttribute('text-geometry', "value: Air Max Lila")
            this.headingText1.setAttribute('text-geometry', "value: Sneaker ")

            this.priceArea.setAttribute('text-geometry', "value: 83,93 $")
            this.airmaxPic.setAttribute('src', "#airmax1")
            this.billboard.setAttribute('visible', "false")
            this.billboard1.setAttribute('visible', "false")
            this.billboard2.setAttribute('visible', "true")
            this.billboard3.setAttribute('visible', "false")




        })
        this.color3Shoe.addEventListener('click', event => {
            this.stockArt1.setAttribute('visible', true)
            this.shoeType3.setAttribute('visible', false)
            this.shoeType.setAttribute('visible', false)
            this.shoeType1.setAttribute('visible', false)
            this.shoeType2.setAttribute('visible', true)
            this.shoeTypeShopping.setAttribute('gltf-model', '#shoe2')
            this.shoeFront.setAttribute('src', '#my-pink')
            this.ringShoe.setAttribute('position', "0.6 1 0")
            this.uiButton3D.setAttribute('style', 'background-color:black')
            this.icon3D.setAttribute('style', 'padding-top: 8px; width: auto; height:auto ; color:white;font-size:36px;')

            this.shoeType.className = "3Dactivated"



            this.priceText.innerHTML = "83,93 $"
            this.shoeNameText.innerHTML = "Air Max Pink"
            this.shoeNameText2.innerHTML = "Sneaker"

            this.headingText.setAttribute('text-geometry', "value: Air Max Pink")
            this.headingText1.setAttribute('text-geometry', "value: Sneaker ")

            this.priceArea.setAttribute('text-geometry', "value: 83,93 $")
            this.airmaxPic.setAttribute('src', "#airmax3")
            this.billboard.setAttribute('visible', "false")
            this.billboard1.setAttribute('visible', "false")
            this.billboard2.setAttribute('visible', "false")
            this.billboard3.setAttribute('visible', "true")




        })

        this.shoesize1.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '1')
            this.shoesize1.setAttribute('color', '#ef2d5e')
            this.size1.setAttribute('material', 'color:#FFFFFF;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })

        this.shoesize2.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '1')
            this.shoesize2.setAttribute('color', '#ef2d5e')
            this.size2.setAttribute('material', 'color:#FFFFFF;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })

        this.shoesize3.addEventListener('click', event => {




            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '1')
            this.shoesize3.setAttribute('color', '#ef2d5e')
            this.size3.setAttribute('material', 'color:#FFFFFF;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })

        this.shoesize4.addEventListener('click', event => {



            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize4.setAttribute('opacity', '1')
            this.shoesize4.setAttribute('color', '#ef2d5e')
            this.size4.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })
        this.shoesize5.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize5.setAttribute('opacity', '1')
            this.shoesize5.setAttribute('color', '#ef2d5e')
            this.size5.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })
        this.shoesize6.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize6.setAttribute('opacity', '1')
            this.shoesize6.setAttribute('color', '#ef2d5e')
            this.size6.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })

        this.shoesize7.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize7.setAttribute('opacity', '1')
            this.shoesize7.setAttribute('color', '#ef2d5e')
            this.size7.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')



        })
        this.shoesize8.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize8.setAttribute('opacity', '1')
            this.shoesize8.setAttribute('color', '#ef2d5e')
            this.size8.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')





        })
        this.shoesize9.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize9.setAttribute('opacity', '1')
            this.shoesize9.setAttribute('color', '#ef2d5e')
            this.size9.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')





        })
        this.shoesize10.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', ':#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize10.setAttribute('opacity', '1')
            this.shoesize10.setAttribute('color', '#ef2d5e')
            this.size10.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })
        this.shoesize11.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize11.setAttribute('opacity', '1')
            this.shoesize11.setAttribute('color', '#ef2d5e')
            this.size11.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })
        this.shoesize12.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize12.setAttribute('opacity', '1')
            this.shoesize12.setAttribute('color', '#ef2d5e')
            this.size12.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })
        this.shoesize13.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', ':#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')
            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize13.setAttribute('opacity', '1')
            this.shoesize13.setAttribute('color', '#ef2d5e')
            this.size13.setAttribute('material', 'color:#FFFFFF;')

            this.shoesize14.setAttribute('opacity', '0.8')
            this.shoesize14.setAttribute('color', '#FFFFFF')
            this.size14.setAttribute('material', 'color:#ef2d5e;')




        })
        this.shoesize14.addEventListener('click', event => {

            this.shoesize1.setAttribute('opacity', '0.8')
            this.shoesize1.setAttribute('color', '#FFFFFF')
            this.size1.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize2.setAttribute('opacity', '0.8')
            this.shoesize2.setAttribute('color', '#FFFFFF')
            this.size2.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize3.setAttribute('opacity', '0.8')
            this.shoesize3.setAttribute('color', '#FFFFFF')
            this.size3.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize4.setAttribute('opacity', '0.8')
            this.shoesize4.setAttribute('color', '#FFFFFF')
            this.size4.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize5.setAttribute('opacity', '0.8')
            this.shoesize5.setAttribute('color', '#FFFFFF')
            this.size5.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize6.setAttribute('opacity', '0.8')
            this.shoesize6.setAttribute('color', '#FFFFFF')
            this.size6.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize7.setAttribute('opacity', '0.8')
            this.shoesize7.setAttribute('color', '#FFFFFF')
            this.size7.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize8.setAttribute('opacity', '0.8')
            this.shoesize8.setAttribute('color', '#FFFFFF')
            this.size8.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize9.setAttribute('opacity', '0.8')
            this.shoesize9.setAttribute('color', '#FFFFFF')
            this.size9.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize10.setAttribute('opacity', '0.8')
            this.shoesize10.setAttribute('color', '#FFFFFF')
            this.size10.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize11.setAttribute('opacity', '0.8')
            this.shoesize11.setAttribute('color', '#FFFFFF')
            this.size11.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize12.setAttribute('opacity', '0.8')
            this.shoesize12.setAttribute('color', '#FFFFFF')
            this.size12.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize13.setAttribute('opacity', '0.8')
            this.shoesize13.setAttribute('color', '#FFFFFF')
            this.size13.setAttribute('material', 'color:#ef2d5e;')

            this.shoesize14.setAttribute('opacity', '1')
            this.shoesize14.setAttribute('color', '#ef2d5e')
            this.size14.setAttribute('material', 'color:#FFFFFF;')




        })












    }



})
