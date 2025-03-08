import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes.js";

const port = process.env.PORT || 3000; // default port

const app = express();

app.disable("x-powered-by");

app.use(cookieParser());
app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(router);

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
