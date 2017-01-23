var area;

	function Circle()
	{
		var radius=document.getElementById("radius").value;
		var pi=3.14;
		area=pi*(radius*radius);
		document.getElementById("area").innerHTML=area;
		console.log("Area of circle is:"+area);
	}
