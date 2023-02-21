import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Form, redirect, useSearchParams } from "react-router-dom";

const Authentication = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoginMode = searchParams.get("mode") === "login";

  const modeHandler = () => {
    if (isLoginMode) {
      setSearchParams({ mode: "signup" });
    } else {
      setSearchParams({ mode: "login" });
    }
  };
  return (
    <React.Fragment>
      <Container
        className="d-grid justify-content-center"
        style={{ marginTop: "150px" }}
      >
        <Card className="  m-5" style={{ width: "600px" }}>
          <Form method="post" className="p-5">
            <Row className="mb-3">
              <label className="me-3 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="rounded w-75 p-2 ms-3 border-0 bg-light"
              />
            </Row>
            <Row className="mb-4">
              <label className="me-3 mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="rounded w-75 p-2 ms-3 border-0 bg-light"
              />
            </Row>

            <Button className="mb-1" type="submit">
              {isLoginMode ? "Login" : "Signup"}
            </Button>
            <p className="mb-2 offset-9">
              {isLoginMode ? "New user?" : "Already a user?"}
            </p>
            <Button
              className="mb-1 offset-9"
              variant="warning"
              onClick={modeHandler}
            >
              {isLoginMode ? "Signup" : "Login"}
            </Button>
          </Form>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Authentication;

export async function authAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  const formData = await request.formData();
  const authData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let url = "";

  if (mode === "login") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCoUnsokWNGgMcfhonraQdASgdEONrBtyA";
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCoUnsokWNGgMcfhonraQdASgdEONrBtyA";
  }
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();
  const token = data.idToken;
  console.log("🚀 ~ file: Authentication.js:92 ~ authAction ~ token :", token);
  localStorage.setItem("token", token);

  if (mode === "login") {
    return redirect("/");
  } else {
    return redirect("/auth?mode=login");
  }
}
