let promedio2=(nota_uno,nota_dos,nota_tres, callback)=>{
	setTimeout(function(){
		let resultado=(nota_uno+nota_dos+nota_tres)/3;
		callback (resultado);	
	},2000);	
}

promedio2(5,5,5, function(resultado){
	console.log(resultado);
})