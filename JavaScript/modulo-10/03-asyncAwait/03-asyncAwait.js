const usersList = document.querySelector("#usersList");

const generateUsersHTML = (users) => {
    for (const user of users) {
        usersList.insertAdjacentHTML(
            "beforeend",
            `
            <div>
                <img src="${user.avatar}" alt="" />
                <h2>${user.first_name} ${user.last_name}</h2>
                <a href="mailto${user.email}">${user.email}</a>
                <hr/>
                <br/>
            </div>
            `
        );
    }

};


const getUsers = async () => {
  const response = await fetch("https://reqres.in/api/users").then((response) => response.json());
    const users = response.data;
    generateUsersHTML(users);
};
getUsers();
// const usersDB = fetch("https://reqres.in/api/users")
// .then((response) =>{
//     return response.json()
// })
// .then((info) =>{
//     return info;

// });
// .catch((error)=>{
//     console.log(error);
// })
// console.log(usersDB);

/*
for (const user of users) {
        usersList.insertAdjacentHTML(
            "beforeend",
            `
            <div>
                <img src="${user.avatar}" alt="" />
                <h2>${user.first_name} ${user.last_name}</h2>
                <a href="mailto${user.email}">${user.email}</a>
                <hr/>
                <br/>
            </div>
            `
        )
    }
*/
