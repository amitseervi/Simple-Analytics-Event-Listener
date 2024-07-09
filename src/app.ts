import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Express = express();
const port = process.env.PORT || 3000;

// Configure bodyParser to handle JSON data in POST requests
app.use(bodyParser.json());
app.post("/event", (req: Request, res: Response) => {
    // Access data from the request body
    const { data } = req.body;  // Assuming the data is sent in a JSON object with a "data" key

    if (!data) {
        res.status(400).send("Missing data in request body");
        return;
    }

    console.log("Received data:", data);
    res.send({ "success": true });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});