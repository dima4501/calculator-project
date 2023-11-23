function area()
{
	a=Number(document.getElementById("length").value);
	b=Number(document.getElementById("width").value);
	c=a*b;
	document.getElementById("result").value=c;
}
function perimeter()
{
	a=Number(document.getElementById("length").value);
	b=Number(document.getElementById("width").value);
	c=(a+b)*2;
	document.getElementById("result").value=c;
}