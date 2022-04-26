function palis()
{ var n="";
var resultado="";
n=prompt("dime un texto: ");
i=n.length-1;
let arreglo=n.split("");
while(i>=0)
{
resultado=resultado+arreglo[i];
i=--;
}



alert("tu texto quedaria asi " +resultado);




}