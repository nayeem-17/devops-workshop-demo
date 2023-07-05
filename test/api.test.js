const request = require('supertest');
const { app, server } = require('../index');

describe('API Routes', () => {
    it('Hello, world! This is mehrab, this is ci/cd test', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, world!');
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