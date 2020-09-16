## GameObject 

Hello. This lib is a small container for simplifying ui composition without using templating libraries.



```javascript

// GameObject by extending
class App extends GameObject {}  // extent GameObject 
var app = new App() // extends GameObject 

// GameObject by wrapping 
var obj1 = GameObject( { ui:'/http/path.html'} )  // Use directly to wrap working chunks of HTML UI. So fun. 
var obj1 = GameObject( { ui:'/http/path.html' , gluemap:app_map1  } ) //  Map , Make big projects fun. 
```

### Install
```shell
npm install gameobject 
```
