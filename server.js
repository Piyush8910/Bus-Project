const express = require("express");
const http = require("http");
const ws = require("ws");
const cors  = require("cors")

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

const server = http.createServer(app);
const wss = new ws.WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log("Someone Connected...");

    ws.on("message", (message) => {
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(JSON.stringify(JSON.parse(message.toString())));
            }
        });
    });
});

server.listen(port, () => {
    console.log("Server Started on port " + port);
});