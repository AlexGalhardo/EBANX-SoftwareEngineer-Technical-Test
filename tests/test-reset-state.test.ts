import request from 'supertest';
import app from '../src/app';

describe("testing reset state", () => {
    it("it should return http status code 200 with OK message", async () => {
        const response = await request(app).post("/reset");
        expect(response.statusCode).toBe(200);
    });
});
