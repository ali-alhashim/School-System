const http = require("http");

require("./config/dbConnect");

const app = require("./app/app");


const PORT = process.env.PORT || 2030



//server
const server = http.createServer(app);
app.listen(PORT, console.log(`server is running on port ${PORT}`));