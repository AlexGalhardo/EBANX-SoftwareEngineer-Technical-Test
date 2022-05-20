import request from 'supertest';
import app from '../../src/app';

describe("testing withdraw from non existing account", () => {
    it("it should return http status code 404 with 0 json response", async () => {
        const response = await request(app)
            .post("/event")
            .send({
                "type": "withdraw",
                "origin": "100",
                "amount": 10
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        expect(response.statusCode).toBe(494);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(0))
    });
});