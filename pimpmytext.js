window.onload=function()
{
	document.getElementById('bigb').onclick=function()
	{
	document.getElementById('textt').style.fontSize="24pt";
	if(document.getElementById('checkk').checked){
			document.getElementById('textt').style.fontWeight="bold";
			document.getElementById('textt').style.textDecoration="underline";
			document.getElementById('textt').style.color="green";
			document.getElementById('textt').style.fontStyle="italic";
	}
}
document.getElementById('snoop').onclick=function(){
	document.getElementById('textt').style.textTransform="uppercase";
	//document.getElementById('textt').value+="!";
	var str=document.getElementById('textt').value;
	var parts=str.split(".");
	str=parts.join("-izzle.");
	document.getElementById('textt').value=str;
}
}