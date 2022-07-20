import express from "express";

const PORT = 5480;
const app = express(); 
const handleHome = (req, res) => {
    return res.send("<h1>I still love you.</h1>");
};

const handleLogin = (req, res) => {
    return res.send("Login here.");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => 
    console.log(`✅ Server Listening on PORT http://localhost:${PORT}`);

app.listen(PORT, handleListening);


