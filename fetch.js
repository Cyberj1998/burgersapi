let URL = "https://burgersapi.onrender.com/burgers"

const displayImage = document.querySelector(".displayImage")

fetch(URL).then(res => res.json()).then(data=>{
    console.log(data)
    displayImage.style.backgroundImage = `url(${data[0].image})`
})
