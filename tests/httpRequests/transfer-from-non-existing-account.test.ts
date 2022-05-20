import request from 'supertest';
import app from '../../src/app';

describe("testing transfer from existing account", () => {
    it("it should return http status code 404 with 0 json response", async () => {
        const response = await request(app)
            .post("/event")
            .send({
                "type": "transfer",
                "origin": "100",
                "amount": 15,
                "destination": "300"
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        expect(response.statusCode).toBe(404);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(0))
    });
});