let searchButton = document.querySelector("#searchButton");
let image = document.querySelector("#image");
let Name = document.querySelector("#Name");
let userName = document.querySelector("#userName");
let profileCheckingBtn = document.querySelector("#profileCheckingBtn");
let about = document.querySelector("#about");
let followers = document.querySelector("#followers");
let followings = document.querySelector("#followings");
let rapoes = document.querySelector("#rapoes");

let card = document.querySelector(".card");
let inputSystem = document.querySelector("#inputsystem");

//From video
let url = "https://api.github.com";
const fetchProfile = async (event) => {
  event.preventDefault();
  let profileName = document.querySelector("#profileName").value;
  if (profileName) {
    setTimeout(()=>{
      card.classList.remove("hide");
    },300);
    
    inputSystem.reset();
    try {
      // let profileName = document.querySelector("#profileName").value;
      const res = await fetch(`${url}/users/${profileName}`);
      const data = await res.json();
      if(data != undefined)
      {
        image.src = data.avatar_url;
        Name.innerText = data.name;
        userName.innerText = data.login;
        profileCheckingBtn.href = data.html_url;
        followers.innerText = data.followers;
        followings.innerText = data.following;
        rapoes.innerText = data.public_repos;
        about.innerText = data.bio;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
//

searchButton.addEventListener("click", fetchProfile);
