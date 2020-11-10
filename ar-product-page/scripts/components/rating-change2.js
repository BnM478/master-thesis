AFRAME.registerComponent('rating-change2', {
    schema: {
        changeText: { default: 'changeText' },
        changeHeading: { default: 'changeHeading' },
        ratingNext: { default: 'ratingNext' },
        ratingBack: { default: 'ratingBack' },
        ratingAvatar: { default: 'ratingAvatar' },
        star1click: { default: 'star1click' },
        star2click: { default: 'star2click' },
        star3click: { default: 'star3click' },
        star4click: { default: 'star4click' },
        star5click: { default: 'star5click' },
        ratingName: { default: 'ratingName' },


    },
    init: function () {


        this.changeText = document.getElementById(this.data.changeText)
        this.changeHeading = document.getElementById(this.data.changeHeading)
        this.ratingNext = document.getElementById(this.data.ratingNext)
        this.ratingBack = document.getElementById(this.data.ratingBack)
        this.ratingAvatar = document.getElementById(this.data.ratingAvatar)
        this.star1click = document.getElementById(this.data.star1click)
        this.star2click = document.getElementById(this.data.star2click)
        this.star3click = document.getElementById(this.data.star3click)
        this.star4click = document.getElementById(this.data.star4click)
        this.star5click = document.getElementById(this.data.star5click)
        this.ratingName = document.getElementById(this.data.ratingName)







        const bewertungTextList = [" \n It is areally bad Product :(",
            " \n The colours are not like on the pictures!",
            " \n no comment "]
        const bewertungTextList2 = [" \n I aspected more!",
            " \n What not worth the money in the end",
            " \n Cannot why people like nike!"]
        const bewertungTextList3 = [" \n It is a very basic shoe",
            " \n Cannot see what people like about the design",
            " \n No special edition, Nike is really becoming boring! "]
        const bewertungTextList4 = [" \n Nothing to complain just a little bit expensive",
            " \n 4 Sterne! One of my favourite Shoes",
            " \n How could you not love this shoe?"]
        const bewertungTextList5 = [" \n Top Product!",
            " \n I am a big nike fan since the early days and this shoe is an absolute masterpiece!",
            " \n The design kills everything "]

        let choosenBewertungsList = bewertungTextList4

        const bewertungHeadingList = ["Never again", "Not happy", "Fail"]
        const bewertungHeadingList2 = ["Not worth it", "Improve!", "Wrong choice"]
        const bewertungHeadingList3 = ["Basic", "Not innovative", "Boring"]
        const bewertungHeadingList4 = ["Good shoe", "Four stars!", "Like it alot"]
        const bewertungHeadingList5 = ["Dream", "Nike fan since day one", "Design is hot"]

        let choosenHeadingList = bewertungHeadingList4

        const bewertungsNameList = ["Julius123", "Peterlustig", "Fake007"]
        const bewertungsNameList2 = ["Angie12", "Carlsberg", "Cole55"]
        const bewertungsNameList3 = ["030fred", "Dumdum", "Rayshow"]
        const bewertungsNameList4 = ["Jan32", "Lea080", "Dino22"]
        const bewertungsNameList5 = ["Rainbow2", "Nike4life", "Rudi33"]

        let choosenNameList = bewertungsNameList4




        const bewertungAvatarList = ["#my-profil1", "#my-profil2", "#my-profil3"]
        const bewertungAvatarList2 = ["#my-profil4", "#my-profil5", "#my-profil6"]
        const bewertungAvatarList3 = ["#my-profil2", "#my-profil5", "#my-profil1"]
        const bewertungAvatarList4 = ["#my-profil3", "#my-profil6", "#my-profil2"]
        const bewertungAvatarList5 = ["#my-profil3", "#my-profil4", "#my-profil1"]
        let choosenAvatarList = bewertungAvatarList4

        let idx = 0

        this.ratingNext.addEventListener('click', event => {
            // Create new entity for the new object
            if (idx === bewertungTextList.length - 1) {
                this.changeText.setAttribute('value', choosenBewertungsList[0])
                this.changeHeading.setAttribute('value', choosenHeadingList[0])
                this.ratingAvatar.setAttribute('src', choosenAvatarList[0])
                this.ratingName.setAttribute('value', choosenNameList[0])
                idx = 0

            }
            else {
                this.changeText.setAttribute('value', choosenBewertungsList[idx + 1])
                this.changeHeading.setAttribute('value', choosenHeadingList[idx + 1])
                this.ratingAvatar.setAttribute('src', choosenAvatarList[idx + 1])
                this.ratingName.setAttribute('value', choosenNameList[idx + 1])
                idx = idx + 1


            }







        })

        this.ratingBack.addEventListener('click', event => {
            // Create new entity for the new object
            if (idx == 0) {
                this.changeText.setAttribute('value', choosenBewertungsList[choosenBewertungsList.length - 1])
                this.changeHeading.setAttribute('value', choosenHeadingList[choosenBewertungsList.length - 1])
                this.ratingAvatar.setAttribute('src', choosenAvatarList[choosenBewertungsList.length - 1])
                this.ratingName.setAttribute('value', choosenNameList[choosenBewertungsList.length - 1])
                idx = choosenBewertungsList.length - 1

            }
            else {
                this.changeText.setAttribute('value', choosenBewertungsList[idx - 1])
                this.changeHeading.setAttribute('value', choosenHeadingList[idx - 1])
                this.ratingAvatar.setAttribute('src', choosenAvatarList[idx - 1])
                this.ratingName.setAttribute('value', choosenNameList[idx - 1])
                idx = idx - 1

            }






        })








        this.star1click.addEventListener('click', event => {
            // Create new entity for the new object
            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justGrey")
            this.star3click.setAttribute('src', "#justGrey")
            this.star4click.setAttribute('src', "#justGrey")
            this.star5click.setAttribute('src', "#justGrey")

            choosenNameList = bewertungsNameList
            choosenBewertungsList = bewertungTextList
            choosenHeadingList = bewertungHeadingList
            choosenAvatarList = bewertungAvatarList

            this.changeText.setAttribute('value', choosenBewertungsList[idx])
            this.changeHeading.setAttribute('value', choosenHeadingList[idx])
            this.ratingAvatar.setAttribute('src', choosenAvatarList[idx])
            this.ratingName.setAttribute('value', choosenNameList[idx])


        })

        this.star2click.addEventListener('click', event => {
            // Create new entity for the new object
            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justYellow")
            this.star3click.setAttribute('src', "#justGrey")
            this.star4click.setAttribute('src', "#justGrey")
            this.star5click.setAttribute('src', "#justGrey")

            choosenNameList = bewertungsNameList2
            choosenBewertungsList = bewertungTextList2
            choosenHeadingList = bewertungHeadingList2
            choosenAvatarList = bewertungAvatarList2

            this.ratingName.setAttribute('value', choosenNameList[idx])
            this.changeText.setAttribute('value', choosenBewertungsList[idx])
            this.changeHeading.setAttribute('value', choosenHeadingList[idx])
            this.ratingAvatar.setAttribute('src', choosenAvatarList[idx])



        })
        this.star3click.addEventListener('click', event => {
            // Create new entity for the new object
            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justYellow")
            this.star3click.setAttribute('src', "#justYellow")
            this.star4click.setAttribute('src', "#justGrey")
            this.star5click.setAttribute('src', "#justGrey")

            choosenNameList = bewertungsNameList3
            choosenBewertungsList = bewertungTextList3
            choosenHeadingList = bewertungHeadingList3
            choosenAvatarList = bewertungAvatarList3

            this.changeText.setAttribute('value', choosenBewertungsList[idx])
            this.changeHeading.setAttribute('value', choosenHeadingList[idx])
            this.ratingAvatar.setAttribute('src', choosenAvatarList[idx])
            this.ratingName.setAttribute('value', choosenNameList[idx])


        })

        this.star4click.addEventListener('click', event => {
            // Create new entity for the new object
            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justYellow")
            this.star3click.setAttribute('src', "#justYellow")
            this.star4click.setAttribute('src', "#justYellow")
            this.star5click.setAttribute('src', "#justGrey")

            choosenNameList = bewertungsNameList4
            choosenBewertungsList = bewertungTextList4
            choosenHeadingList = bewertungHeadingList4
            choosenAvatarList = bewertungAvatarList4

            this.changeText.setAttribute('value', choosenBewertungsList[idx])
            this.changeHeading.setAttribute('value', choosenHeadingList[idx])
            this.ratingAvatar.setAttribute('src', choosenAvatarList[idx])
            this.ratingName.setAttribute('value', choosenNameList[idx])


        })

        this.star5click.addEventListener('click', event => {
            // Create new entity for the new object
            this.star1click.setAttribute('src', "#justYellow")
            this.star2click.setAttribute('src', "#justYellow")
            this.star3click.setAttribute('src', "#justYellow")
            this.star4click.setAttribute('src', "#justYellow")
            this.star5click.setAttribute('src', "#justYellow")

            choosenNameList = bewertungsNameList5
            choosenBewertungsList = bewertungTextList5
            choosenHeadingList = bewertungHeadingList5
            choosenAvatarList = bewertungAvatarList5

            this.changeText.setAttribute('value', choosenBewertungsList[idx])
            this.changeHeading.setAttribute('value', choosenHeadingList[idx])
            this.ratingAvatar.setAttribute('src', choosenAvatarList[idx])
            this.ratingName.setAttribute('value', choosenNameList[idx])


        })

    }
})