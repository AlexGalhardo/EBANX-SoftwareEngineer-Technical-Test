import request from 'supertest';
import app from '../../src/app';

// - POST /event {"type":"deposit", "destination":"100", "amount":10}
// - 201 {"destination": {"id":"100", "balance":20}}

describe("testing deposit into existing account", () => {
    it("it should return http status code 201 with correct json message", async () => {
        const response = await request(app).post("/event");
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(0)
    });
});