
## GameObject 
App and game building container system for JavaScript. Easy standard event bubbling, parent detection, and special gluemap injection. Gluemap eliminates templating libs or syntax that mixes template delimiters into your assets. No depenancies. Your UI assets are just standard HTML UI Chunks that work in any browser with zero dependencies and zero bundling/compiling. 

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


### Factory + Library
These modules make it possible to forget loading, callbacks, rendering. While it is possible to use GameObject acrynchronously, it is more fun and easy to eliminate callbacks all together by throwing in a list of your UI Chunks urls ( ['header.html','menu.html'] ).  This enables Factory to grab Chunks from the Library and inject them using Gluemap. Gluemap in next section.

### Gluemap
Easy Gluemap heuristics based data injection. Selective, inferred or brute. Many injection results may not be perfect but something will happen. 

### Techicals
GameObject uses Range objects ( standard Document.createRange() ) to enable element node selection and mutation, while event bubbling is handled via standard javascript addEventListener calls with CustomEvent. 

### Speed
May be slower than other frameworks that use virtual doms, compilers and template syntax because Gluemap + Factory + Library combo are geard towards intuitive nesting of interactive objects without using anything except standard HTML. This means it all happens at run-time, so if you need to render 10,000 nodes you may be better off with the more popular frameworks like react.


![GOBG](https://github.com/psytron/gameobject/raw/master/aux/gobg.png)
![GOBG](https://github.com/psytron/gameobject/raw/master/aux/gameobject_stripe.png)
Some icons future space in here

#more templates
