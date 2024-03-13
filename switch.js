const usuario ={
    nombre: "Carlos",
    pais: "colombia"
};

/*
if (usuario.pais === "mexico"){
    console.log("El usuario es mexicano");
}else if (usuario.pais === "españa"){
    console.log("El usuario es español"); 
}else if (usuario.pais === "argentina"){
    console.log("El usuario es argentino"); 
}else{
    console.log("El usuario es de otro país")
}
*/

switch(usuario.pais){
    case "mexico" :
        console.log("El usuario es mexicano");
        break;
    case "españa" :
        console.log("El usuario es español");
        break;
    case "argentina" :
        console.log("El usuario es argentino");
        break;
        default:
        console.log("El usuario es de otro país");
}