import request from "supertest";

import app from "../../src/app";
import { HTTP_STATUS_CODE_CREATED } from "../../src/shared/constants";

describe("testing transfer from existing account", () => {
    it("it should return http status code HTTP_STATUS_CODE_CREATED with correct json response", async () => {
        await request(app).post("/reset");

        await request(app)
            .post("/event")
            .send({
                type: "deposit",
                destination: "100",
                amount: 15,
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        const response = await request(app)
            .post("/event")
            .send({
                type: "transfer",
                origin: "100",
                amount: 15,
                destination: "300",
            })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        const responseBodyToBe = {
            origin: {
                id: "100",
                balance: 0,
            },
            destination: {
                id: "300",
                balance: 15,
            },
        };

        expect(response.statusCode).toBe(HTTP_STATUS_CODE_CREATED);
        expect(JSON.stringify(response.body)).toEqual(JSON.stringify(responseBodyToBe));
    });
});
