import request from "supertest";

import app from "../../src/app";
import { HTTP_STATUS_CODE_OK } from "../../src/shared/constants";

describe("testing reset state", () => {
    it("it should return http status code HTTP_STATUS_CODE_OK with text OK message", async () => {
        const response = await request(app).post("/reset");
        expect(response.statusCode).toBe(HTTP_STATUS_CODE_OK);
        expect(response.body).toBeDefined();
    });
});
