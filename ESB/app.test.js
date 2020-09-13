const index= require('../Cliente/routes/index');
const request = require('supertest')

test('ve la pagina vacia en html esb',  () => {
    request(index).get('/').expect(200)
    
})
