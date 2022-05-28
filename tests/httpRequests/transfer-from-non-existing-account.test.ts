import request from "supertest";
import app from "../../src/app";
import { HTTP_STATUS_CODE_NOT_FOUND } from "../../src/shared/constants";

describe("testing transfer from existing account", () => {
    it("it should return http status code HTTP_STATUS_CODE_NOT_FOUND with 0 json response", async () => {
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

        expect(response.statusCode).toBe(HTTP_STATUS_CODE_NOT_FOUND);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(0));
    });
});
