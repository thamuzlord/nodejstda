let promedio2=(mensaje, callback)=>{
	setTimeout(function(){
		let resultado="hola"+mensaje;
		callback (resultado);	
	},2000);	
}


function mostrarMensaje(){

	for (let index = 0; index < 1; index++) {
		promedio2("mensaje", function(resultado){
			console.log(resultado);
		});
		
	}



}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();