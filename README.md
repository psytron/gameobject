
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
UI Chunks are plain webpages. Regular HTML can load directly into any browser. Sprinkle attributes as hints about event triggers. 
```html
<body>
    <div id="theComponent">
        <div>
            <span id='somefunk_x'></span>
        </div>
    </div>
</body>
```

### Techicals
GameObject uses Range objects ( standard Document.createRange() ) to enable element node selection and mutation, while event bubbling is handled via standard javascript addEventListener calls with CustomEvent. 


### Gluemap
Easy Gluemap heuristics based data injection. Selective, inferred or brute. Many injection results may not be perfect but something will happen. 




![GOBG](https://github.com/psytron/gameobject/blob/master/aux/gobg.png)

Some icons future space in here

#more templates
