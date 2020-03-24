let log_danger, log_success;
let cadd;

let showAlertBool, showSuccessBool = false;

function logAlert(t){
	if(!showAlertBool){
		log_danger = document.getElementById("alert_danger");
		document.getElementById("alert_success").setAttribute('style', 'display: none;')
		if(isVerify(t)){
			log_danger.innerHTML = '<span>'+t+'</span>';
			log_danger.setAttribute('style', 'display: block;');
			showAlertBool = true;
			setInterval(function(){ logAlert(''); }, 3000);
		}else{
			log_danger.innerHTML = '';
			log_danger.setAttribute('style', 'display: none;');
			showAlertBool = false;
		}
	}else if(showAlertBool && !isVerify(t)){
		log_danger.innerHTML = '';
		log_danger.setAttribute('style', 'display: none;');
		showAlertBool = false;
	}
}
function logSucces(t){
	if(!showSuccessBool){
		log_success = document.getElementById("alert_success");
		document.getElementById("alert_danger").setAttribute('style', 'display: none;')
		if(isVerify(t)){
			log_success.innerHTML = '<span>'+t+'</span>';
			log_success.setAttribute('style', 'display: block;');
			showSuccessBool = true;
			setInterval(function(){ logSucces(''); }, 3000);
		}else{
			log_success.innerHTML = '';
			log_success.setAttribute('style', 'display: none;');;
			showSuccessBool = false;
		}
	}else if(showSuccessBool && !isVerify(t)){
		log_success.innerHTML = '';
		log_success.setAttribute('style', 'display: none;');;
		showSuccessBool = false;
	}
}
function m(){
	cadd = document.getElementById("show_add_items");
	let code = document.getElementById("item_code").value;
	let desc = document.getElementById("item_decription").value;

	let qty = document.getElementById("item_qty").value;
	let pri = document.getElementById("item_price").value;
	let sus = document.getElementById("item_sus").value;

	if(isVerify([ code, desc, qty, pri, sus ])){
		addItem([ code, desc, qty, pri, sus ]);
		logSucces('Item añadido Correctamente');
	}else{
		logAlert('Debes rellenar todos los campos');
	}
}
let objS = [];
let obj = [];
function addItem(a){
	objS.push(a[0]+'|'+a[1]+'|'+a[2]+'|'+a[3]+'|'+a[4]);
	obj.push(a);
	showItems();
}
function showItems(){
	cadd.innerHTML = '';
	for (var i = 0; i < obj.length; i++) {
		cadd.innerHTML += item(obj[i]);
	}
}
function s(t){
	if(obj.length > 0 && objS.length > 0){
		cadd.innerHTML = '';
		for (var i = 0; i < obj.length; i++) {
			if(objS[i].toUpperCase().includes(t.toUpperCase())){
				cadd.innerHTML += item(obj[i]);
			}
		}
	}else{
		logAlert('Primero debes añadir un item');
	}
}
function item(a){
	return '<li><div class="row my-1"><div class="col-4"><span>Código:</span><input class="form-control" style="width: 100%;" type="text" value="'+a[0]+'" disabled></div><div class="col-8"><span>Descripción:</span><input class="form-control" style="width: 100%;" type="text" value="'+a[1]+'" disabled></div></div><div class="row my-1"><div class="col-4"><span>Cantidad:</span><input class="form-control" style="width: 100%;" type="text" value="'+a[2]+'" disabled></div><div class="col-4"><span>P/U:</span><input class="form-control" style="width: 100%;" type="text" value="'+a[3]+'" disabled></div><div class="col-4"><span>Descuento:</span><input class="form-control" style="width: 100%;" type="text" value="'+a[4]+'" disabled></div></div></li>';
}