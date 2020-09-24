import { factory2d } from '/x_modules/factory/factory2d.js'
//import { library2d } from '/x_modules/factory/library2d.js'


class GameObject {
    
    constructor( initObj ) {    

        this.factory = factory2d;
        

        /// PARAMETERS ///
        if( ! initObj ){ initObj = {} }; 
        this.target = initObj.target ? initObj.target : document.body; // DEFAULTS TO BODY 
        this.data = initObj.data ? initObj.data : {};                  // DATA IS AVAILABLE TO SUBCLASS
        var ui_url =('ui' in initObj) ? initObj['ui'] : ( 'url' in initObj ) ? initObj['url'] : false;
        var future_id = this.constructor.name+'_'+Math.round( Math.random() * 9999 );
        

        /// ATTACH UI OR EMPTY CONTAINER // 
        if( ui_url ){ // NEW FRAGMENT WITH UI CHUNK
            this.container = factory2d.renderNodeSync( ui_url , this.data )
            this.container.setAttribute("id", future_id );
            this.ui = this.container; // standardized ui                                                                        // Should Fix ID return like Below?
        }else{  // NEW EMPTY CONTAINER
            this.container = document.createRange().createContextualFragment( '<div id="'+future_id+'"></div>' );
        }
        this.target.appendChild( this.container ) 
        this.container = this.target.querySelector( '#'+future_id )


        /// INJECT DATA if PRESENT:
        if( 'data' in initObj ){
            this.inject( this.container , this.data )
        }

    }
    

    renderNode( view_in , data_in ){
        var future_id = this.constructor.name+'_'+Math.round( Math.random() * 9999 );
        // this.container = factory2d.renderNodeSync( ui_url , this.data )
        // this.ui = this.container; // standardized ui 
        // this.target.appendChild( this.container ) 
        //var vnode = factory2d.renderNodeSync( view_in , data_in )         

        var vnode = new GameObject( { target:this.container , ui:view_in , data:data_in } )
               
        //var anode = this.container.appendChild( vnode ) // append vnode after all mutations         
        return vnode.container;
    }


    discoverParent( ){
        if( this.container.parentElement ){
            console.log(' auto parent: ', this.container.parentElement)
            // parentElement.class == 'Elx' // any number of layers 
        }else{
            console.log(' no parent discovered ')
        }
        this.dispatchEvent( new CustomEvent( 'discoverParentEvent', { 'detail':{'b':'a'}  }) )
    }
    inject( target , obj ){
        for( var p in obj){
            console.log( p , obj[p] )   
            
            try{
                var el = target.querySelector( '#'+p+'')
                
                switch( el.tagName ){
                    case 'IMG':
                        el.setAttribute('src' , obj[p] )
                        break;
                    case 'DIV':    
                        el.innerHTML = obj[p]
                        break;
                    case 'SPAN':    
                        el.innerHTML = obj[p]
                        break;

                    default:
                        console.log(' wow')
                }



            }catch(e){
                console.log(' Injection Error: ', e)
            }
        }
    }



    spawnUi( ui_url ){
        console.log(' this should enable spawning internal UI ')
        //this.ui = renderNodeSync( ui_url )
    }



    // SPAWN HOOKS 
    new( entry , obj ){
        
        function execFunction(){
            console.log( 'FUNCTION::' )
            // attach New class and HTML Element ?
            // .new (  obj )  init aram 
            // return reference to es6 with accessors to underlying DIV / Element 
        }
        function execObject(){
            console.log( 'OBJECT::' )
        }
        function execString(){
            console.log( 'STRING::' )            
        }
        var xclass_entries = { 
            'function':execFunction ,
            'object':execObject,
            'string':execString
        }

        xclass_entries[ typeof( entry ) ]()

        console.log(' ETNRY: ', entry )
        if( typeof(pin)=='function' ){
            console.log( 'FUNCTION YAY' )
        }
        if( typeof(pin)=='object' ){
            console.log( 'Initilization Object , look for target, container, data , etc.  ' )
        }
        if( typeof( pin)=='string' ){
            console.log( 'STRING YAY' )
        }

    }


    // DISCOVER / CONNECT
    discoverEventDispatchers( broadcaster_in ){
        var subjects = broadcaster_in.subjects()
        this.matchMerge( subjects , this.interests() )

    }

    newClass( container_in , xclass_in , dat , id_in ){
        // Auto cap 
        //var xclass = ( xclass_in.charAt(0).toUpperCase() + xclass_in.slice(1) ) + 'Panel';
        var xclass = ( xclass_in.charAt(0).toUpperCase() + xclass_in.slice(1) );
        var class_ref = this.futureclasses[ xclass ]
        var p =  new class_ref( container_in, dat , id_in )
        return p;
    }
    whoIsMyParent() {
        try {
            throw new Error();
        } catch (e) {
            const allMatches = e.stack.match(/(\w+)@|at (\w+) \(/g);         // matches this function, the caller and the parent
            console.log( allMatches , 'xxo')
            //const parentMatches = allMatches[2].match(/(\w+)@|at (\w+) \(/); // match parent function name
            //return parentMatches[1] || parentMatches[2]; // return only name
        }
    }
    child() {
        let caller = whoIsMyParent();
        console.log(caller);
    } 
    parent() {
        child();
    }
          

    // EVENT STUFF: 
    // PROXY EVENT HOOKS
    dispatchEvent( event_in ){
        this.container.dispatchEvent( event_in )
    }
    addEventListener( event_identifier , init_object ){
        this.container.addEventListener( event_identifier , init_object )
    }
    removeEventListener( event_identifier , init_object ){
        this.container.removeEventListener( event_identifier , init_object )
    }    
    




}
//customElements.define('game-component', GameComponent );
export { GameObject }



        // default to blank for sloppy constructor
        //this.parent = arguments.callee.caller;
        //var stackTrace = (new Error()).stack; 
        //var stackTrace = (new Error()).stack; // Only tested in latest FF and Chrome
        //var callerName = stackTrace.replace(/^Error\s+/, ''); // Sanitize Chrome
        //callerName = callerName.split("\n")[1]; // 1st item is this, 2nd item is caller
        //callerName = callerName.replace(/^\s+at Object./, ''); // Sanitize Chrome
        //callerName = callerName.replace(/ \(.+\)$/, ''); // Sanitize Chrome
        //callerName = callerName.replace(/\@.+/, ''); // Sanitize Firefox
        //console.log(callerName)
        
    // Can this attach its own children using innerHTML='<yo id="xix"><yo>'
    // this.yo = this.queryElement('#xix')
    // but in children do: 
    

    // var menu = await this.new( 'Menu', obj  )
    // var status = await this.new('Status', obj  )
    // var menu = await this.new( {class:'Menu', data:obj} )
    // addEventListener('customEvent' , function(){} )
    // addEventListener('customEvent' , function(){}  , capture:true )

        
        // finds class cache and creates  new Class() 
        // class Finds own UI and
        // Class(  this.container )    is automatically passed its own container 
        // so in instantiated reference its naturally nested.    
        // this.container.appendAdjactendHTML( <el-x id='xixi'></el-x> )
        // var elx_element = this.container.findElement('#xixi')
        // return  ['a1.b1.c6']
        /*
        <obj-x id='a1'>
            <obj-x id='b1'></obj-x>
            <obj-x id='b2'></obj-x>
            <obj-x id='b3'>
                <obj-x id='c6'></obj-x>
                <obj-x id='c5'></obj-x>
                <obj-x id='c4'></obj-x>
            </obj-x>
        </obj-x> */    