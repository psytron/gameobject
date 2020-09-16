
## GameObject 
Simple UI lib for app building. Features easy event bubbling, container detection, and special injection. Eliminates the need for templating libs or mixed delimiters. Standard event bubbling and no depenancies. Standard HTML UI Chunks work in any browser. 

### Install
```shell
npm install gameobject 
```




### Usage
```javascript

// GameObject by wrapping 
var obj1 = GameObject( { ui:'/examples/bubble.html'} )  // Use directly to wrap working chunks of HTML UI. So fun. 
var obj2 = GameObject( { ui:'/examples/button.html'} ) //  Map , Make big projects fun. 

// GameObject by extending
class FunApp extends GameObject {}  // extent GameObject 
var app = new FunApp() // extends GameObject 

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






Some icons future space in here
![GOBG](https://github.com/psytron/gameobject/blob/master/aux/gobg.png)
