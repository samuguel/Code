//	Remove acentuação e procura a opção no dropdown
const termo = removeSpecialCharSimple('termo de busca');
let elemento = document.getElementById('id do elemento');
function removeSpecialCharSimple(strToReplace) {
strSChar = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
strNoSChars = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
var newStr = "";
for (var i = 0; i < strToReplace.length; i++) {
    if (strSChar.indexOf(strToReplace.charAt(i)) != -1) {
        newStr += strNoSChars.substr(strSChar.search(strToReplace.substr(i, 1)), 1);
    } else {
        newStr += strToReplace.substr(i, 1);
    }
}

return newStr.replace(/[^a-zA-Z 0-9]/g, '');
}
//#custasIniciaisProcessoForm\:listaBairros
for (i=1;i<elemento.options.length;i++){
     if (removeSpecialCharSimple(elemento.options[i].text).toUpperCase().includes(termo.toUpperCase())){
        return i;
        break;
    } 
}
