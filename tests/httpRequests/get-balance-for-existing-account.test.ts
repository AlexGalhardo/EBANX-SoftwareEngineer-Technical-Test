import request from 'supertest'
import app from '../../src/app'

describe("testing get balance for existing account", () => {

    it("it should return http status code 200 with text 20 message", async () => {

        await request(app)
            .post("/event")
            .send({
                "type": "deposit",
                "destination": "100",
                "amount": 20
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        const response = await request(app).get("/balance?account_id=100")

        expect(response.statusCode).toBe(200)
        expect(response.body).toBe(20)
    });
});