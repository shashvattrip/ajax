// factory to load todo list from local storage

myapp.factory('todoStorageGet', function () 
{
		var STORAGE_ID = 'todo-list-shashvat';

		return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		
});
