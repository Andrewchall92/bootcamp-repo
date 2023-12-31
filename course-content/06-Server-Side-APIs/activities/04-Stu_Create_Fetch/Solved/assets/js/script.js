var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

//We create a function called getApi, as follows:
function getApi() {
  // replace `octocat` with anyone else's GitHub username
  // We save the full endpoint we would like to make a request to in a variable called requestUrl, replacing octocat with the username we want to search, as shown in the following example:
  // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
  // https://docs.github.com/en/free-pro-team@latest/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  var requestUrl = 'https://api.github.com/users/octocat/repos';
  //We then pass the requestUrl variable as an argument to the fetch() method, like in the following code:
  fetch(requestUrl)
    //We convert the response into JSON. Lastly, we return the JSON-formatted response, as follows:
    .then(function (response) {
      console.log("response", response)
      return response.json();
    })
    .then(function (data) {
      console.log("data", data);
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var linkItem = document.createElement('a');
        linkItem.setAttribute("href", data[i].html_url)
        linkItem.textContent = data[i].html_url;
   
        listItem.appendChild(linkItem);
        repoList.appendChild(listItem);
       
        // makeliEl(data);
      }
    });

}

fetchButton.addEventListener('click', getApi);


// function makeliEl(info){
//   for (var i = 0; i < info.length; i++) {
//     var listItem = document.createElement('li');
//     listItem.textContent = info[i].html_url;
//     repoList.appendChild(listItem);
//     // otherFun(data);
//   }
// }



