import request from 'supertest';
import app from '../src/app';

describe("testing reset state", () => {
    it("it should return http status code 404 with 0 message", async () => {
        const response = await request(app).get("/balance?account_id=1234");
        expect(response.statusCode).toBe(404);
    });
});
