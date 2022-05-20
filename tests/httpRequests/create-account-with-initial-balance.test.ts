import request from 'supertest';
import app from '../../src/app';

describe("testing create account with initial balance", () => {
    it("it should return http status code 201 with the correct json response", async () => {
        const response = await request(app)
            .post("/event")
            .send({
                "type": "deposit",
                "destination": "100",
                "amount": 10
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        const responseBodyToBe = {
            destination: {
                id: "100",
                balance: 10
            }
        }

        expect(response.statusCode).toBe(201);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(responseBodyToBe))
    });
});