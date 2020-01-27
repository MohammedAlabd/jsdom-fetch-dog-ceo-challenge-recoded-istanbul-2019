console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let message = "";
fetch(imgUrl).then(resp => resp.json()).then(json => renderimages(json.message))
fetch(breedUrl).then(res=>res.json()).then(json => {
    message = json.message
    renderUl(message,"a")

})


function renderimages(json) {
    const main = document.querySelector('#dog-image-container')
    json.forEach(url => {
      const img = document.createElement('img')
      img.setAttribute('src',url)
      img.setAttribute("width",'300px')
      main.appendChild(img)
    })
}

function renderUl(array,letter){

    let ul = document.querySelector("#dog-breeds");
        ul.innerHTML = ""
    for(const li in array ){
        if (li[0]==letter){
        const elementNew = document.createElement("li")
        elementNew.innerHTML = li;
        elementNew.addEventListener('click',function(){
            this.style.color = "red";
        })
        ul.appendChild(elementNew)
        }
    }
}

document.querySelector("#breed-dropdown").addEventListener('change',function (){
    renderUl(message,document.querySelector("#breed-dropdown").value)
})
// document.querySelector("option[value='a']").addEventListener
