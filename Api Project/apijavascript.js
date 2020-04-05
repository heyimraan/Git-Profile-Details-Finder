window.onload = function(){

const client_id ="Iv1.38fb9ab603468bac";
const client_secret ="e937ce090141d79c49cfefe497b8e34724ac2116";
const inputValue = document.querySelector("#search");
const searchButton = document.querySelector("#button-addon2");
const login = this.document.getElementById("login");
const id = this.document.getElementById("id");
const node_id = this.document.getElementById("node_id");
const url = this.document.getElementById("url");
const name = this.document.getElementById("name");
const location = this.document.getElementById("location");
const created_at = this.document.getElementById("created_at");
const updated_at = this.document.getElementById("updated_at");


searchButton.addEventListener('click',function(){
    showData();
});

const fetchUsers = async (user) =>{
    
    
    
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    const data = await api_call.json();
    return {data};
}


const showData =()=>{
    fetchUsers(inputValue.value).then((res)=>{
        console.log(res);
        login.innerHTML = `Login:--${res.data.login}`;
        id.innerHTML =`ID:--${res.data.id}`;
        node_id.innerHTML = `NODE_ID:--${res.data.node_id}`;
        url.innerHTML = `URL:--${res.data.url}`;
        name.innerHTML = `NAME:--${res.data.name}`;
        location.innerHTML = `LOCATION:--${res.data.location}`;
        created_at.innerHTML = `CREATED-AT:--${res.data.created_at}`;
        updated_at.innerHTML = `UPDATED-AT:--${res.data.updated_at}`;

       
    })
}




}
