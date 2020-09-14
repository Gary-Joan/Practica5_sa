const index= require('../Cliente/routes/index');
const request = require('supertest')

test('pagina inicio restaurante',  () => {
    request(index).get('/').expect(200)
    
})
