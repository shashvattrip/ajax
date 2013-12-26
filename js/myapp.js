// Using AngularJS

var myapp=angular.module('myapp',[]);
		
myapp.controller('DataCtrl',function($scope,$http,$location,todoStorageGet)
{
	// Here's the code for making todos in AgnularJS using the MVC project on GitHub
	//Lets get Cracking!


	$scope.putData=function()
	{
		var STORAGE_ID='tasks-of-shashvat';
			var obj;
					obj=
					[
				{
					"PID":1,
					"TID":1,
					"TN":"Task1sdsdoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflow",
					"TD":"Task1D1212",
					"TC":"Task1C",
					"fol":[1,2,3,4,5],
					"star":1,
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					
					"PID":1,
					"TID":2,
					"TN":"Task2",
					"TD":"Task2D",
					"TC":"Task2C",
					"fol":[1,2],
					"star":0,
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				},
				{
					"PID":2,
					"TID":3,
					"TN":"Task3",
					"TD":"Task3D",
					"TC":"Task3C",
					"fol":[1,3,4,5],
					"star":1,
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					"PID":2,
					"TID":4,
					"TN":"Task4",
					"TD":"Task4D",
					"TC":"Task4C",
					"fol":[2,3,4,5],
					"star":1,
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				},
				{
					"PID":3,
					"TID":5,
					"TN":"Task5",
					"TD":"Task5D",
					"TC":"Task5C",
					"fol":[1,2,3,4,5],
					"star":1,
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					"PID":3,
					"TID":6,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				}, 
				{
					"PID":3,
					"TID":7,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				}, 
				{
					"PID":3,
					"TID":8,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				}, 
				{
					"PID":3,
					"TID":9,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					"PID":3,
					"TID":10,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					"PID":5,
					"TID":11,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				},
				{
					"PID":5,
					"TID":12,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					"PID":4,
					"TID":13,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS","Python","C++"],
					checked:false
				},
				{
					"PID":4,
					"TID":14,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1,3],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				},
				{
					"PID":4,
					"TID":15,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:false
				},
				{
					"PID":4,
					"TID":16,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1,3],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				},
				{
					"PID":4,
					"TID":17,
					"TN":"Task6",
					"TD":"Task6D",
					"TC":"Task6C",
					"fol":[1,3],
					"DueDate":"2013-1-24", "tags":["JS","AJAX","C#","iOS"],
					checked:true
				}
				]

		localStorage.setItem(STORAGE_ID,JSON.stringify(obj));
		console.log(JSON.parse(localStorage.getItem(STORAGE_ID) ||'[]'));
	}


	todoStoragePut=function (todos) 
	{
			var STORAGE_ID = 'todo-list-shashvat';

			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
	};

	$scope.testFunc=function()
	{
		var data=todoStorageGet;
		for(var i=0;i<todoStorageGet.length;i++)
			data[i].editing=false;
		
		todosLocal=data;
	}


	$scope.editedTodo=null;

	var todosLocal = [];

	$scope.$watch('todosLocal',function()
	{
		//This is the eventHandler for any chnage in $scope.todos
		// $scope.remainingCount=function()
		// {
		// 	var count=0;
		// 	for (var i =0; i < $scope.todos.length; i++) 
		// 	{
		// 		if($scope.todos[i].completed==false)
		// 			count++;
		// 	};

		// 	return count;
		// }
		
		
		// $scope.doneCount=$scope.todos.length-$scope.remainingCount();

		//Update the server with LocalTodos bound with the view
		todoStoragePut(todosLocal);
	},true);

	// This is for setting the url to switch view for filters
	if ($location.path() === '') 
	{
		$location.path('/');
	}


	$scope.location=$location;


	$scope.addTodo=function()
	{
		var newTodo=$scope.newTodo.trim(); //removes all the white-spaces before and after the string
		if(!newTodo.length)
			return;
		todosLocal.push(
		{
			"name":newTodo,
			"completed":false
		}
			);

		$scope.newTodo='';

	}


	$scope.startEditing=function(todo)
	{
		todo.editing=true;
		$scope.editedTodo=todo;
	}


	// $scope.editTodo=function(todo)
	// {
	// 	$scope.editedTodo=todo;
	// 	todo.editing=true;
	// }


	$scope.doneEditing=function(todo)
	{
		$scope.editedTodo=null;
		todo.TN=todo.TN.trim();
		todo.editing=false;
		if(!todo.name)
			$scope.removeTodo(todo);
	}

	$scope.removeTodo=function(todo)
	{
		todos.splice(todos.indexOf(todo),1);
	}






	// Here onwards is the code for AJAX using AngularJS

	$scope.message=[];

	//detecting when the return key was pressed
	document.getElementById('userInput3').onkeypress=function(e)
	{
		if(!e)
			e=window.event;
		var keyCode=e.which || e.keyCode;
		if(keyCode=='13')
		{
			//return key was pressed
			console.log('enter key was pressed\n');
			return false;
		}
	}

	$http(
		{
			method: 'GET', 
			url: 'foodstore2.php'
		})

  		.success(function(data, status, headers, config) 
  		{
	    	
			for(var i=0;i<data.length;i++)
			{
				$scope.message+="\t" + data[i].age + " - > " + data[i].name + "\t||||";
			}
  		})

  		. error(function(data, status, headers, config) 
  		{
		    alert("some shit happened!");
		    console.log(status);
  		});
});
