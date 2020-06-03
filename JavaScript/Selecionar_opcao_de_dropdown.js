var termo = "TERMO DE BUSCA";
var elemento = document.querySelector("SELETOR DO ELEMENTO");


for (i=1;i<elemento.options.length;i++)
{
 	if (elemento.options[i].text.toUpperCase().includes(termo.toUpperCase()))
 	{
	    elemento.selectedIndex=i;
	    break;
	} 
}
