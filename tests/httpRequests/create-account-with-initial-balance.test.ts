import request from "supertest";

import app from "../../src/app";
import { HTTP_STATUS_CODE_CREATED } from "../../src/shared/constants";

describe("testing create account with initial balance", () => {
    it("it should return http status code HTTP_STATUS_CODE_CREATED with the correct json response", async () => {
        const response = await request(app)
            .post("/event")
            .send({
                type: "deposit",
                destination: "100",
                amount: 10,
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        const responseBodyToBe = {
            destination: {
                id: "100",
                balance: 10,
            },
        };

        expect(response.statusCode).toBe(HTTP_STATUS_CODE_CREATED);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(responseBodyToBe));
    });
});
