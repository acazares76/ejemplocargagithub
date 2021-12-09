var indexedDB = window.indexedDB || window.mozIndexedDB || 
window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;

function startDB() {
    dataBase = indexedDB.open("Consultorio", 1);

    dataBase.onupgradeneeded = function (e) {
        active = dataBase.result;
        usuarios = active.createObjectStore("Citas", { keyPath : 'id', autoIncrement : true });
    };
    dataBase.onsuccess = function (e) {
        console.log('Conectado existosamente');
    };

    dataBase.onerror = function (e)  {
        console.log('Error');
    };
}

function insert() {
    var active = dataBase.result;
    var data = active.transaction(["Citas"], "readwrite");
    var object = data.objectStore("Citas");

    object.put({
        nombre: document.querySelector("#name").value,
        apellido: document.querySelector("#apellido").value,
        dia: document.querySelector("#dia").value,
        hora: document.querySelector("#hora").value});
      
    request.onerror=event=>{
        console.log("Error", event)
    }
   

}







