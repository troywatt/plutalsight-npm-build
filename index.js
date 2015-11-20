
// expose our app as an external module so other modules
// can import it
var app = module.exports = require( 'koa' )();

app.use(function *(){
    this.body = 'Koa says hi';
});

var port = process.env.PORT || process.argv[ 2 ];
port = ( typeof port === 'number' ) ? port : 3000;

if( !module.parent ) {
    app.listen( port );
}

console.log( 'Application started on port ' + port );
