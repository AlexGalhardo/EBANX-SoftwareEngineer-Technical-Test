import request from 'supertest'
import app from '../../src/app'

describe("testing transfer from existing account", () => {

    it("it should return http status code 201 with correct json response", async () => {

        await request(app).post("/reset")

        await request(app)
            .post("/event")
            .send({
                "type": "deposit",
                "destination": "100",
                "amount": 15
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

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

        const responseBodyToBe = {
            origin: {
                id: "100",
                balance: 0
            },
            destination: {
                id: "300",
                balance: 15
            }
        }

        expect(response.statusCode).toBe(201)
        expect(JSON.stringify(response.body)).toEqual(JSON.stringify(responseBodyToBe))
    });
});