var input=document.createElement("input");
document.body.appendChild(input);
input.setAttribute("id","siva");
var but=document.createElement("button");
document.body.appendChild(but);
but.innerHTML="click";


but.onclick=function()
{
	var str=String(document.getElementById('siva').value);
	var str2="";
	for(i=0;i<str.length;i++)
	{
		if((str.charAt(i)>='a'&&str.charAt(i)<='z')||(str.charAt(i)>='A'&&str.charAt(i)<='Z')||str.charAt(i)>=0)
		{
		//	str2=str2;
		//}
		//else
		//{
			str2+=str.charAt(i);
		}
	}
	document.write(str2);
}







