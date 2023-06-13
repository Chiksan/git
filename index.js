const API = "https://api.github.com/users/";

async function getGitUser(event) {
  event.preventDefault();
  const search = document.getElementById("userInput");
  const response = await fetch(API + search.value);
  const user = await response.json();
  console.log("user: ", user);

  card(user);
}

function card(user) {
  const img = document.getElementById("avatar");
  img.src = user.avatar_url;
  const following = document.getElementById("following");
  following.textContent = "Following: " + user.following;

  const followers = document.getElementById("followers");
  followers.textContent = "Followers: " + user.followers;

  const repositories = document.getElementById("public");
  repositories.textContent = "Repositories: " + user.public_repos;
}

// }

// const API = "https://api.github.com/users/";

// const card = document.getElementById("card");
// const search = document.getElementById("search");
// const img = document.getElementById("img");
// const followers = document.getElementById("followers");
// const following = document.getElementById("following");
// const public = document.getElementById("public");
// const login = document.getElementById("login");

// async function search1(event) {
//   event.preventDefault();
//   const response = await fetch(API + search.value);
//   const user = await response.json();
//   console.log("user: ", user);
//   img.src = user.avatar_url;
//   followers.innerHTML = user.followers;
//   following.innerHTML = user.following;
//   public.innerHTML = user.public;
//   login.innerHTML = user.login;
// }
