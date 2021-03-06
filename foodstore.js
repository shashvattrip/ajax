var xmlHttp=createXmlHttpRequestObject();

function createXmlHttpRequestObject()
{
	var xmlHttp;
	// For IE
	if(window.ActiveXObject)
	{
		try
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			// Unable to create AJAX request, go buy a new computer
			xmlHttp=false;
		}
	}

	else
	{
		try
		{
			xmlHttp=new XMLHttpRequest();
		}
		catch(e)
		{
			xmlHttp=false;
		}
	}

	if(!xmlHttp)
		alert("Cant create ajax object!");
	else
		return xmlHttp;
}

// This is responsible for sending the ajax request
// it will be called as soon as the page loads
function process()
{
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4)
	{
		//The object is ready to communicate with the server
		var food=document.getElementById("userInput").value;
		var url="foodstore1.php?food=" + food;
		console.log(food);
		console.log(url);
		xmlHttp.open("GET",url,true);
		//we want to call handleServerResponse whenever onreadystatechange return something
		xmlHttp.onreadystatechange=handleServerResponse;
		// But when we use POST, we dont send null
		xmlHttp.send();
	}
	else
	{
		// in Milliseconds
		setTimeout('process()',1000); 
	}
}


function handleServerResponse()
{
	// whenever the object is done communicating
	if(xmlHttp.readyState==4)
	{
		// 200 means that the communication was ok
		if(xmlHttp.status==200)
		{
			var xmlResponse=xmlHttp.responseXML;
			var xmlDocumentElement=xmlResponse.documentElement;
			// Now we are pulling the echo between the 2 response tags
			var message=xmlDocumentElement.firstChild.data;
			document.getElementById("underInput").innerHTML='<span style="color:blue;">'+ message +'</span>';
			setTimeout('process()',1000);
		}
		else
		{
			alert('something went wrong');
		}

	}
}		


// Now using jQuery

function usingjQuery()
{
	$.getJSON(
		"foodstore2.php",
		function(data)
		{
			var message=[];
			for(var i=0;i<data.length;i++)
			{
				message+="\t" + data[i].age + " - > " + data[i].name + "\t||||";
			}
			document.getElementById('underInput2').innerHTML=message;
		}
		);
}







//Writes data to local Storage
function writeToLocalStorage()
{
	
	var dumArray=
	[
		{
			"name":"task1",
			"completed":false
		},
		{
			"name":"task2",
			"id":false
		},
		{
			"name":"task3",
			"id":true
		}
	];
	// dumArray.push("name":"Another", "id":"2");
	localStorage.setItem('todo-list-shashvat',JSON.stringify(dumArray));
	
}

//reads data from local storage
function loadFromLocalStorage()
{
	console.log('loadFromLocalStorage() function called\n');
	var data=[];
	data=JSON.parse((localStorage.getItem('todo-list-shashvat') || '[]'));
	console.log(data);
}

