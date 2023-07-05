const request = require('supertest');
const { app, server } = require('../index');

describe('API Routes', () => {
    it('should return "Hello, world!" on /hello route', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, world! This is mehrab, this is ci/cd test');
    });

    it('should return "Goodbye, world!" on /goodbye route', async () => {
        const response = await request(app).get('/bye');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Goodbye, world!');
    });
});
afterAll((done) => {
    server.close(done);
});