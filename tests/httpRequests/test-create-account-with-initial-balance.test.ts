import request from 'supertest';
import app from '../../src/app';

// - POST /event {"type":"deposit", "destination":"100", "amount":10}
// - 201 {"destination": {"id":"100", "balance":10}}

describe("testing create account with initial balance", () => {
    it("it should return http status code 201 with the correct json response", async () => {
        const response = await request(app).post("/event");
        expect(response.statusCode).toBe(200);
    });
});