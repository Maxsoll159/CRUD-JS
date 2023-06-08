let users = [];

const addUser = (event) => {
  event.preventDefault();
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  let data = {
    nombre: nombre.value,
    apellido: apellido.value,
  };
  users.push(data);
  nombre.value = "";
  apellido.value = "";
  mostrarDatos()
};


const deleteUser = (index) =>{
    users.splice(index, 1)
    mostrarDatos()
}


const editarUser = (index) =>{
    let nuevoUsuario = users[index]
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    nombre.value = nuevoUsuario.nombre
    apellido.value = nuevoUsuario.apellido
    deleteUser(index)
}

const mostrarDatos = () =>{
    const userList = document.querySelector("#userList")
    userList.innerHTML = ""
    users.forEach((elem, index)=>{

        const listItem = document.createElement("li")
        listItem.textContent = `Su nombre ${elem.nombre} y su apellido ${elem.apellido}`


        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Eliminar"

        deleteButton.addEventListener("click", ()=>{
           deleteUser(index)
        })

        let editarButton = document.createElement("button")
        editarButton.textContent = "Editar"

        editarButton.addEventListener("click", () =>{
            editarUser(index)
        })



        listItem.appendChild(deleteButton)
        listItem.appendChild(editarButton)
        userList.appendChild(listItem)

    })
}