// consumo de apis - es un lugar en internet en dode hay informacion dispuesta para que nosotros podamos consumir. hay apis privadas y publicas dispuestas para que nosotros podamos consumir
//es una interfaz de comunicacion entre las cuales los programas se puedan comunicar
const users = [
  { name: "John", email: "jhon@email.com" },
  { name: "Jane", email: "jane@email.com" },
  { name: "Javi", email: "javi@email.com" },
  { name: "Caro", email: "caro@email.com" },
];

const getUsers = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve(users);
      }, 2000);
    } else {
      reject("No se pudo concretar tu solicitud");
    }
  });
};
getUsers()
.then((data) => {
  const usersDB = data;
  console.log(usersDB);
})
.catch((error) => {
    console.log(error);
});
