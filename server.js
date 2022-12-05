const http = require('http');
const express = require('express');
const { version } = require('./versionSetting');
const { year1Chapter } = require('./mainpage/list-v2-year1');
const { year2Chapter } = require('./mainpage/list-v2-year2');
const { Notification } = require('./notification');
const { Chapter2 } = require('./ERC2/chapter2');
const { erc2_1 } = require('./ERC2/erc2_1');
const { erc2_2 } = require('./ERC2/erc2_2');
const { erc2_3 } = require('./ERC2/erc2_3');
const { erc2_4 } = require('./ERC2/erc2_4');
const { erc2_5 } = require('./ERC2/erc2_5');
const { erc2_6 } = require('./ERC2/erc2_6');
const { erc2_7 } = require('./ERC2/erc2_7');
const { erc2_8 } = require('./ERC2/erc2_8');
const { erc2_9 } = require('./ERC2/erc2_9');
const { erc2_10 } = require('./ERC2/erc2_10');
const { Chapter4 } = require('./ERC4/chapter4');
const { erc4_1 } = require('./ERC4/erc4_1');
const { erc4_2 } = require('./ERC4/erc4_2');
const { erc4_3 } = require('./ERC4/erc4_3');
const { erc4_4 } = require('./ERC4/erc4_4');
const { erc4_5 } = require('./ERC4/erc4_5');
const { erc4_6 } = require('./ERC4/erc4_6');
const { erc4_7 } = require('./ERC4/erc4_7');
const { erc4_8 } = require('./ERC4/erc4_8');
const { erc4_9 } = require('./ERC4/erc4_9');
const { erc4_10 } = require('./ERC4/erc4_10');
const { Chapter10 } = require('./ERC10/chapter10');
const { erc10_1 } = require('./ERC10/erc10_1');
const { erc10_2 } = require('./ERC10/erc10_2');
const { erc10_3 } = require('./ERC10/erc10_3');
const { erc10_4 } = require('./ERC10/erc10_4');
const { erc10_5 } = require('./ERC10/erc10_5');
const { erc10_6 } = require('./ERC10/erc10_6');
const { erc10_7 } = require('./ERC10/erc10_7');
const { erc10_8 } = require('./ERC10/erc10_8');
const { erc10_9 } = require('./ERC10/erc10_9');
const { Chapter11 } = require('./ERC11/chapter11');
const { erc11_1 } = require('./ERC11/erc11_1');
const { erc11_2 } = require('./ERC11/erc11_2');
const { erc11_3 } = require('./ERC11/erc11_3');
const { erc11_4 } = require('./ERC11/erc11_4');
const { erc11_5 } = require('./ERC11/erc11_5');
const { erc11_6 } = require('./ERC11/erc11_6');
const { erc11_7 } = require('./ERC11/erc11_7');
const { erc11_8 } = require('./ERC11/erc11_8');
const { erc11_9 } = require('./ERC11/erc11_9');
const { Chapter12 } = require('./ERC12/chapter12');
const { erc12_1 } = require('./ERC12/erc12_1');
const { erc12_2 } = require('./ERC12/erc12_2');
const { erc12_3 } = require('./ERC12/erc12_3');
const { erc12_4 } = require('./ERC12/erc12_4');
const { erc12_5 } = require('./ERC12/erc12_5');
const { erc12_6 } = require('./ERC12/erc12_6');
const { erc12_7 } = require('./ERC12/erc12_7');
const { erc12_8 } = require('./ERC12/erc12_8');
const { erc12_9 } = require('./ERC12/erc12_9');

const app = express();
app.use(express.json());

app.get('/', version);
app.get('/v2/y2', year2Chapter);
app.get('/v2/y1', year1Chapter);
app.get('/noti', Notification);
// Year 2 Chapter 2
app.get('/v2/y2/erc2', Chapter2);
app.get('/v2/y2/erc2/enr2_1', erc2_1);
app.get('/v2/y2/erc2/enr2_2', erc2_2);
app.get('/v2/y2/erc2/enr2_3', erc2_3);
app.get('/v2/y2/erc2/enr2_4', erc2_4);
app.get('/v2/y2/erc2/enr2_5', erc2_5);
app.get('/v2/y2/erc2/enr2_6', erc2_6);
app.get('/v2/y2/erc2/enr2_7', erc2_7);
app.get('/v2/y2/erc2/enr2_8', erc2_8);
app.get('/v2/y2/erc2/enr2_9', erc2_9);
app.get('/v2/y2/erc2/enr2_10', erc2_10);

// Year 2 Chapter 4
app.get('/v2/y2/erc4', Chapter4);
app.get('/v2/y2/erc4/enr4_1', erc4_1);
app.get('/v2/y2/erc4/enr4_2', erc4_2);
app.get('/v2/y2/erc4/enr4_3', erc4_3);
app.get('/v2/y2/erc4/enr4_4', erc4_4);
app.get('/v2/y2/erc4/enr4_5', erc4_5);
app.get('/v2/y2/erc4/enr4_6', erc4_6);
app.get('/v2/y2/erc4/enr4_7', erc4_7);
app.get('/v2/y2/erc4/enr4_8', erc4_8);
app.get('/v2/y2/erc4/enr4_9', erc4_9);
app.get('/v2/y2/erc4/enr4_10', erc4_10);

// Year 2 Chapter 10
app.get('/v2/y2/erc10', Chapter10);
app.get('/v2/y2/erc10/enr10_1', erc10_1);
app.get('/v2/y2/erc10/enr10_2', erc10_2);
app.get('/v2/y2/erc10/enr10_3', erc10_3);
app.get('/v2/y2/erc10/enr10_4', erc10_4);
app.get('/v2/y2/erc10/enr10_5', erc10_5);
app.get('/v2/y2/erc10/enr10_6', erc10_6);
app.get('/v2/y2/erc10/enr10_7', erc10_7);
app.get('/v2/y2/erc10/enr10_8', erc10_8);
app.get('/v2/y2/erc10/enr10_9', erc10_9);

// Year 2 Chapter 11
app.get('/v2/y2/erc11', Chapter11);
app.get('/v2/y2/erc11/enr11_1', erc11_1);
app.get('/v2/y2/erc11/enr11_2', erc11_2);
app.get('/v2/y2/erc11/enr11_3', erc11_3);
app.get('/v2/y2/erc11/enr11_4', erc11_4);
app.get('/v2/y2/erc11/enr11_5', erc11_5);
app.get('/v2/y2/erc11/enr11_6', erc11_6);
app.get('/v2/y2/erc11/enr11_7', erc11_7);
app.get('/v2/y2/erc11/enr11_8', erc11_8);
app.get('/v2/y2/erc11/enr11_9', erc11_9);

// Year 2 Chapter 12
app.get('/v2/y2/erc12', Chapter12);
app.get('/v2/y2/erc12/enr12_1', erc12_1);
app.get('/v2/y2/erc12/enr12_2', erc12_2);
app.get('/v2/y2/erc12/enr12_3', erc12_3);
app.get('/v2/y2/erc12/enr12_4', erc12_4);
app.get('/v2/y2/erc12/enr12_5', erc12_5);
app.get('/v2/y2/erc12/enr12_6', erc12_6);
app.get('/v2/y2/erc12/enr12_7', erc12_7);
app.get('/v2/y2/erc12/enr12_8', erc12_8);
app.get('/v2/y2/erc12/enr12_9', erc12_9);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('server is listening on PORT 8000, http://localhost:8000');
});
