// https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

const url = "https://api.quotable.io/random";
// const img_url = "https://api.unsplash.com/photos/random/?client_id=DCEdsBlifmBj14jUCoocVR3f_R_jZy-Zcl3S5IoiuEk"
const img_url = "https://api.unsplash.com/photos/random/?client_id=DCEdsBlifmBj14jUCoocVR3f_R_jZy-Zcl3S5IoiuEk&query=nature-wallpaper&orientation=landscape"
// const img_url = "https://api.unsplash.com/photos/random/?client_id=DCEdsBlifmBj14jUCoocVR3f_R_jZy-Zcl3S5IoiuEk&collection=3656341"


// url('https://source.unsplash.com/collection/1240/1600x900');

function newQuote() {
fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
      document.getElementById('quote').innerHTML = data.content;
      document.getElementById('author').innerHTML = "- "+ data.author +" -"
    // document.querySelector(".author").innerHTML = "- " + data.author;
    console.log(data);
  });

}

function newBackground() {
    fetch(img_url)
        .then(function(imgdata) {
            return imgdata.json();

        })
        .then(function(imgdata) {
          document.body.style.backgroundImage = 'url('+imgdata.urls.full+')';
            // document.getElementById('background').src = imgdata.urls.regular;

        })
    }
    // document.getElementById('background').src = "https://source.unsplash.com/collection/1240/1600x900"



// {/* <img src="https://source.unsplash.com/user/erondu/1600x900"></img> */}
// https://source.unsplash.com/collection/1240/1600x900


// omponentDidMount() {
//     fetch("https://api.imgflip.com/get_memes")
//         .then(response => response.json())
//         .then(response => {
//             const {memes} = response.data
//             this.setState({ allMemeImgs: memes })
//         })
// }