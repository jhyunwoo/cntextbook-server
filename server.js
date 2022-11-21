const http = require("http");
const express = require("express");
const { version } = require("./versionSetting");
const { year1Chapter } = require("./mainpage/list-v2-year1");
const { year2Chapter } = require("./mainpage/list-v2-year2");
const { Chapter2 } = require("./ERC2/chapter2");
const { erc2_1 } = require("./ERC2/erc2_1");
const { erc2_2 } = require("./ERC2/erc2_2");
const { erc2_3 } = require("./ERC2/erc2_3");
const { erc2_4 } = require("./ERC2/erc2_4");
const { erc2_5 } = require("./ERC2/erc2_5");
const { erc2_6 } = require("./ERC2/erc2_6");
const { erc2_7 } = require("./ERC2/erc2_7");
const { erc2_8 } = require("./ERC2/erc2_8");
const { erc2_9 } = require("./ERC2/erc2_9");
const { erc2_10 } = require("./ERC2/erc2_10");
const { Chapter4 } = require("./ERC4/chapter4");
const { erc4_1 } = require("./ERC4/erc4_1");
const { erc4_2 } = require("./ERC4/erc4_2");
const { erc4_3 } = require("./ERC4/erc4_3");
const { erc4_4 } = require("./ERC4/erc4_4");
const { erc4_5 } = require("./ERC4/erc4_5");
const { erc4_6 } = require("./ERC4/erc4_6");
const { erc4_7 } = require("./ERC4/erc4_7");
const { erc4_8 } = require("./ERC4/erc4_8");
const { erc4_9 } = require("./ERC4/erc4_9");
const { erc4_10 } = require("./ERC4/erc4_10");

const app = express();
app.use(express.json());

app.get("/", version);
app.get("/v2/y2", year2Chapter);
app.get("/v2/y1", year1Chapter);

app.get("/v2/y2/erc2", Chapter2);
app.get("/v2/y2/erc2/2-1", erc2_1);
app.get("/v2/y2/erc2/2-2", erc2_2);
app.get("/v2/y2/erc2/2-3", erc2_3);
app.get("/v2/y2/erc2/2-4", erc2_4);
app.get("/v2/y2/erc2/2-5", erc2_5);
app.get("/v2/y2/erc2/2-6", erc2_6);
app.get("/v2/y2/erc2/2-7", erc2_7);
app.get("/v2/y2/erc2/2-8", erc2_8);
app.get("/v2/y2/erc2/2-9", erc2_9);
app.get("/v2/y2/erc2/2-10", erc2_10);
app.get("/v2/y2/erc4", Chapter4);
app.get("/v2/y2/erc4/4-1", erc4_1);
app.get("/v2/y2/erc4/4-2", erc4_2);
app.get("/v2/y2/erc4/4-3", erc4_3);
app.get("/v2/y2/erc4/4-4", erc4_4);
app.get("/v2/y2/erc4/4-5", erc4_5);
app.get("/v2/y2/erc4/4-6", erc4_6);
app.get("/v2/y2/erc4/4-7", erc4_7);
app.get("/v2/y2/erc4/4-8", erc4_8);
app.get("/v2/y2/erc4/4-9", erc4_9);
app.get("/v2/y2/erc4/4-10", erc4_10);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000, http://localhost:8000");
});
