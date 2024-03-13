/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

    📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

/*if(true){

};*/

// 📌 Ejemplo #1

/*
const usuario = {
	edad: 18,
	pais: "Mexico",
	ticket: true,
};

if(usuario.edad >= 18){
	console.log("El usuario es mayor de edad, puede entrar al concierto");
} else {
	console.log("El usuario es menor de edad, no puedo entrar al concierto");
}
*/

//📌Ejemplo #2

/*
const usuario = {
	edad: 17,
	pais: "Mexico",
	ticket: false,
};

if(usuario.edad >= 18 && usuario.ticket){
	console.log("El usuario es mayor de edad y tiene ticket");
} else {
	console.log("El usuario es menor de edad y no tiene ticket");
}
*/

//📌Ejemplo #3 anidar condicionales

/*
const usuario = {
	edad: 16,
	pais: "Mexico",
	ticket: true,
};

if(usuario.edad >= 18){
	if(usuario.ticket){
		console.log("El usuario es mayor de edad y tiene ticket");
	}else{
		console.log("El usuario es mayor de edad pero no tiene ticket");
	}
} else{
	console.log("El usuario es menor de edad");
}*/

//📌Ejemplo #4

const usuario = {
	edad: 16,
	pais: "argentina",
	ticket: true,
};

if(usuario.pais === "mexico"){
	console.log("El usuario es mexicano");
}else if(usuario.pais === "colombia"){
	console.log("El usuario es colombiano");
}else if(usuario.pais === "españa"){
	console.log("El usuario es español");
}else{
	console.log("El usuario es de otro país");
}