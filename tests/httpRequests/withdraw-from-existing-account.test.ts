import request from 'supertest';
import app from '../../src/app';

describe("testing withdraw from existing account", () => {
    it("it should return http status code 201 with correct json response", async () => {
        const response = await request(app)
            .post("/event")
            .send({
                "type": "withdraw",
                "origin": "100",
                "amount": 5
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        const responseBodyToBe = {
            origin: {
                id: "100",
                balance: 15
            }
        }

        expect(response.statusCode).toBe(201);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(responseBodyToBe))
    });
});