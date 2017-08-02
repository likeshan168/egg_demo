const assert = require('assert')
const mock = require('egg-mock')
describe('test/app/controller/form.test.js',()=>{
    let app;
    before(()=>{
        app = mock.app();
        return app.ready();
    })
    afterEach(mock.restore);
    it('get the request form data', ()=>{
        app.mockCsrf();
        return app.httpRequest()
        .post('/form')
        .type('form')
        .send({bar:'bar'})
        .expect(200)
        .expect({
            bar:'bar'
        });
    })
})