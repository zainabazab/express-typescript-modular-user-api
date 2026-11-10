import request from "supertest";
import app from "../src/app.js";

describe("User API Tests", () => {
  it("should return all users with status 200", async () => {
    const response = await request(app)
      .get("/api/users")
      .set("x-api-key", "my-secret-key");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      success: true,
      count: 3,
      data: expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          name: "Ahmed Ali",
          email: "ahmed@gmail.com",
          status: "Active"
        })
      ])
    });
  });

  it("should return one user by ID", async () => {
    const response = await request(app)
      .get("/api/users/1")
      .set("x-api-key", "my-secret-key");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      success: true,
      data: {
        id: 1,
        name: "Ahmed Ali",
        email: "ahmed@gmail.com",
        status: "Active"
      }
    });
  });

  it("should return 404 when the user does not exist", async () => {
    const response = await request(app)
      .get("/api/users/999")
      .set("x-api-key", "my-secret-key");

    expect(response.status).toBe(404);

    expect(response.body).toEqual({
      success: false,
      message: "User not found"
    });
  });

  it("should return 401 when the API key is missing", async () => {
    const response = await request(app).get("/api/users");

    expect(response.status).toBe(401);

    expect(response.body.success).toBe(false);
  });
});