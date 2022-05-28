import request from "supertest";

import app from "../../src/app";
import { HTTP_STATUS_CODE_OK } from "../../src/shared/constants";

describe("testing get balance for existing account", () => {
    it("it should return http status code HTTP_STATUS_CODE_OK with text 20 message", async () => {
        await request(app)
            .post("/event")
            .send({
                type: "deposit",
                destination: "100",
                amount: 20,
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        const response = await request(app).get("/balance?account_id=100");

        expect(response.statusCode).toBe(HTTP_STATUS_CODE_OK);
        expect(response.body).toBe(20);
    });
});
