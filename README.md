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






### UI Chunks &copy;&trade;
UI Chunks are just plain webpages. Regular HTML which can load directly into any browser. If you sprinkle some attributes into the HTML it can pull in data chunks. 
```html
<body>
    <div id="theComponent">
        <div>
        </div>
    </div>
</body>
```
