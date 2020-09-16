## GameObject 

Standard event bubbling, containment detection and special injection which eliminates need for any templating libraries. 

- Pure JS
- Standard event bubbling
- No templating dependancy
- Standard HTML UI Chunks work in any browser 




```javascript



// GameObject by extending
class App extends GameObject {}  // extent GameObject 
var app = new App() // extends GameObject 

// Pretend to be React 
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
