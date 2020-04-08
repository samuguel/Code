//	Converte o XPATH para um CSS Selector compativel com o winautomation

function converterXpath(xp){
	const rg1 = /^\//;
	const rg2 = /\//g;
	const rg3 = /\[(\d+)\]/g;
	xp = xp.replace(rg1,'');
	xp = xp.replace(rg2,' > ');
	xp = xp.replace(rg3,function(a,n){ return ":eq("+ (+n-1) +")"; });
	return xp;
}
