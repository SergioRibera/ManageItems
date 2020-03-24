function printF(f, p) {
  var str = f.toString();
    if (p.length) {
        var t = typeof p[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(p)
            : p[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    console.log(str);
}
function isVerify(a){
  if(isArray(a)){
    var b = [];
    for (var i = 0; i < a.length; i++) {
      b.push(isVerify(a[i]));
    }
    return b.reduce((sum, next) => sum && next, true);
  }else{
    return a != "" && a != " " && a != null;
  }
}
function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
function getPhp(u, d, done, fail){
  $.ajax({
    url: u,
    type: 'POST',
    data: d,
  }).done(function(data) {
    //some code going here if success 
    done(data);
  }).fail(function() {
    fail();
  });
}
function getElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute))
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
function eliminarElemento(element){
  if (element){
    var padre = element.parentNode;
    padre.removeChild(element);
  }
}
function remove_character(str, char_pos) 
{
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}
function Codificar(t){
  //ActivarEffect();
  return btoa(t);
}
function Decodificar(t){
  //ActivarEffect();
  return atob(t);
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}
function CopiarTexto(t){
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", t);
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy");
  // Elimina el campo de la página
  document.body.removeChild(aux);
}
function CopiarTextoElement(id_elemento){
  // Crea un campo de texto "oculto"
  var aux = document.createElement("input");
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById(id_elemento).value);
  // Añade el campo a la página
  document.body.appendChild(aux);
  // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy");
  // Elimina el campo de la página
  document.body.removeChild(aux);
}
function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}
function getNewId(max){
  LengthNewId = getRndInteger(7, max ? max :10);
  var mesage = '';
    var abecedarioMayus = "A-B-C-D-E-F-G-H-I-J-K-L-M-N-Ñ-O-P-Q-R-S-T-U-V-W-X-Y-Z";
    var abecedarioMinus = "a-b-c-d-e-f-g-h-i-j-k-l-m-n-ñ-o-p-q-r-s-t-u-v-w-x-y-z";
    var numeros = "1-2-3-4-5-6-7-8-9-0";
        for (var i = 0; i < LengthNewId; i++)
        {
            var value = getRndInteger(0, 1);
            var letra = "";
            switch (value)
            {
                case 0:
                    var proba_Char = getRndInteger(0, 5);
                    if (proba_Char == 2)
                    {
                        letra = abecedarioMayus.split('-')[getRndInteger(0, 26)];
                    }else if (proba_Char == 4)
                    {
                        letra = numeros.split('-')[getRndInteger(0, 10)];
                    }
                    else
                    {
                        letra = abecedarioMinus.split('-')[getRndInteger(0, 26)];
                    }
                    break;
                case 1:
                    var proba_Char2 = getRndInteger(0, 5);
                    if (proba_Char2 == 3)
                    {
                        letra = abecedarioMinus.split('-')[getRndInteger(0, 26)];
                    }
                    else if (proba_Char2 == 5)
                    {
                        letra = numeros.split('-')[getRndInteger(0, 10)];
                    }
                    else
                    {
                        letra = abecedarioMinus.split('-')[getRndInteger(0, 26)];
                    }
                    break;
            }
            mesage = mesage + letra;
    }

  return mesage;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}