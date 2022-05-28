import request from "supertest";
import app from "../../src/app";
import { HTTP_STATUS_CODE_NOT_FOUND } from "../../src/shared/constants";

describe("testing get balance for non existing account", () => {
    it("it should return http status code HTTP_STATUS_CODE_NOT_FOUND with 0 message", async () => {
        await request(app)
            .post("/event")
            .send({
                type: "deposit",
                destination: "100",
                amount: 10,
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        const response = await request(app).get("/balance?account_id=1234");

        expect(response.statusCode).toBe(HTTP_STATUS_CODE_NOT_FOUND);
        expect(response.body).toEqual(0);
    });
});
