const index= require('../Cliente/routes/index');
const request = require('supertest')

test('pagina de inicio repartidor',  () => {
    request(index).get('/').expect(200)
    
})
