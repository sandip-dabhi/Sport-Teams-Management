const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");

const port = 4040;

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === "/submit" && req.method === "GET") {
        const query = parsedUrl.query;

        const newUser = {
            fullName: query.fullName,
            email: query.email,
            password: query.password
        };

        const filePath = path.join(__dirname, "userData.json");

        fs.readFile(filePath, "utf-8", (err, data) => {
            let users = [];
            if (!err && data) {
                try {
                    users = JSON.parse(data);
                } catch (e) {
                    users = [];
                }
            }

            users.push(newUser);

            fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    return res.end('Failed to save data.');
                }
                res.end('User registered successfully!');
            });
        });

    } else if (pathname === "/" || pathname === "/home.html") {
        fs.readFile("home.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading form.html');
            } else {
                res.end(data);
            }
        });

    } else if (pathname === "/contact.html") {
        fs.readFile("contact.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading contact.html');
            } else {
                res.end(data);
            }
        });

    } else if (pathname === "/teamscheduler.html") {
        fs.readFile("teamscheduler.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading teamscheduler.html');
            } else {
                res.end(data);
            }
        });

    } else if (pathname === "/teamlist.html") {
        fs.readFile("teamlist.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading teamlist.html');
            } else {
                res.end(data);
            }
        });

    } else if (pathname === "/statistics.html") {
        fs.readFile("statistics.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading statistics.html');
            } else {
                res.end(data);
            }
        });

    } else if (pathname === "/login.html") {
        fs.readFile("login.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading login.html');
            } else {
                res.end(data);
            }
        });

    } else if (pathname === "/register.html") {
        fs.readFile("register.html", "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading register.html');
            } else {
                res.end(data);
            }
        });

    } else {

        res.end("404 Page Not Found");
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
