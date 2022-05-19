import request from 'supertest';
import app from '../../src/app';

// - GET /balance?account_id=1234
// - 404 0

describe("testing get balance for non existing account", () => {
    it("it should return http status code 404 with 0 message", async () => {
        const response = await request(app).get("/balance?account_id=1234");
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(0)
    });
});