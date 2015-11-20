var app = require( '../' ),
    request = require( 'supertest' ).agent( app.listen() );

describe( 'our amazing site', function(){
    it( 'has a welcome message', function( done ){
        request
            .get( '/' )
            .expect( 'Koa says hi' )
            .end( done );
    });

});