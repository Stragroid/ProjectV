import express from "express";
import { auth } from "express-openid-connect";

const router = express.Router();

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: "a long, randomly-generated string stored in env",
	baseURL: "http://localhost:3000",
	clientID: "Y6kfUecXPTGCDJeMWDYPstpKPR0rUsgJ",
	issuerBaseURL: "https://dev-4a748x68zk3w4tay.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

router.get("/", (req, res) => {
	return res.status(200).send("Server online");
});

// req.isAuthenticated is provided from the auth router
router.get("/check", (req, res) => {
	res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

router.get("/new", (req, res) => {
	return res.status(200).send("New user");
});

router.post("/register", (req, res) => {
	// Logic to register a new user
	return res.status(201).send("User registered successfully");
});

export default router;
