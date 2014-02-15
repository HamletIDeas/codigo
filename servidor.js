var express = require("express");
var dust = require("dustjs-linkedin");
var cons = require("consolidate");

var app = express();
app.listen(process.env.OPENSHIFT_NODEJS_PORT.process,env.OPENSHIFT_NODEJS_IP);

//NOMBRE_LOGICO NOMBRE_FISICO(carpeta real)
//---- configuracion de carpetas estaticas ----
app.use("/css", express.static(__dirname + "/css"));
app.use("/css", express.directory(__dirname + "/css"));

app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));

// ----- CONFIGURACION DEL SISTEMA DE TEMPLATES -----
//le decimos que sistema de template usamos
app.engine("dust",cons.dust);
//que carpeta contiene nuestras vistas
app.set("views",__dirname + "/vistas");
//define cual es la extension por default de esas vistas
app.set("view engine","dust");

app.use(express.urlencoded());

// ---- DEFINICION DE RUTAS -------

app.get("/inicio2", function(req, res){
	
	res.send("Bienvenido a mi pagina");	
});

app.get("/", function(req, res){
	
	//aqui de alguna forma se consulto una base
	//la variable frase contiene el resultado de esa base
	
	var frase = "Hola a todos!";
	
	res.render("index",{
		frase:"Hola a todos!",
		datos:{
			nombre:"ismael",
			apellido:"robles"
		}		
	});
	
});
app.get("/hola", function(req, res){
	
	//aqui de alguna forma se consulto una base
	//la variable frase contiene el resultado de esa base
	
	
	res.render("contacto");
	
});


//req = request = datos que envia el usuario
//res = response = lo que le mostramos al usuario
app.post("/suscribir", function(req, res){
	
	console.log("el email es:" + req.body.email);
	
	res.send("info recibida");
});
app.post("/Enviardatos", function(req, res){
	
	console.log("el nombre  es:" + req.body.nombre);
	console.log("el email es:" + req.body.email);
	console.log("el website es:" + req.body.website);
	console.log("el edad es:" + req.body.edad);
	console.log("el texto es:" + req.body.texto);
	
	res.send("info recibida");
});

console.log("hola mundo");