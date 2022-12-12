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
const { Unit14 } = require('./unit14/unit14');
const { u14p90 } = require('./unit14/u14p90');
const { u14p92 } = require('./unit14/u14p92');
const { u14p93 } = require('./unit14/u14p93');
const { Unit15 } = require('./unit15/unit15');
const { u15p96 } = require('./unit15/u15p96');
const { u15p100 } = require('./unit15/u15p100');
const { u15p101 } = require('./unit15/u15p101');
const { Unit16 } = require('./unit16/unit16');
const { u16p104 } = require('./unit16/u16p104');
const { u16p106 } = require('./unit16/u16p106');
const { Unit19 } = require('./unit19/unit19');
const { u19p124 } = require('./unit19/u19p124');
const { u19p126 } = require('./unit19/u19p126');
const { u19p127 } = require('./unit19/u19p127');
const { Unit20 } = require('./unit20/unit20');
const { u20p130 } = require('./unit20/u20p130');
const { u20p131 } = require('./unit20/u20p131');
const { u20p133 } = require('./unit20/u20p133');
const { Unit21 } = require('./unit21/unit21');
const { u21p136 } = require('./unit21/u21p136');
const { u21p137 } = require('./unit21/u21p137');
const { u21p139 } = require('./unit21/u21p139');
const { Unit22 } = require('./unit22/unit22');
const { u22p142 } = require('./unit22/u22p142');
const { u22p143 } = require('./unit22/u22p143');
const { u22p144 } = require('./unit22/u22p144');
const { Unit23 } = require('./unit23/unit23');
const { u23p149 } = require('./unit23/u23p149');
const { u23p150 } = require('./unit23/u23p150');
const { u23p151 } = require('./unit23/u23p151');

const { y2nov } = require('./y2nov/y2nov');
const { q20 } = require('./y2nov/q20');
const { q24 } = require('./y2nov/q24');
const { q29 } = require('./y2nov/q29');
const { q30 } = require('./y2nov/q30');
const { q31 } = require('./y2nov/q31');
const { q34 } = require('./y2nov/q34');
const { q38 } = require('./y2nov/q38');
const { q41 } = require('./y2nov/q41');

const { y2textbook } = require('./y2textbook/y2textbook');
const { y2textbookc4 } = require('./y2textbook/y2textbookc4');

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

// Year 2 Nov
app.get('/v2/y2/y2nov', y2nov);
app.get('/v2/y2/y2nov/q20', q20);
app.get('/v2/y2/y2nov/q24', q24);
app.get('/v2/y2/y2nov/q29', q29);
app.get('/v2/y2/y2nov/q30', q30);
app.get('/v2/y2/y2nov/q31', q31);
app.get('/v2/y2/y2nov/q34', q34);
app.get('/v2/y2/y2nov/q38', q38);
app.get('/v2/y2/y2nov/q41', q41);

// Year 2 Textbook
app.get('/v2/y2/y2textbook', y2textbook);
app.get('/v2/y2/y2textbook/y2textbookc4', y2textbookc4);

// Year 1 Unit 14
app.get('/v2/y1/unit14', Unit14);
app.get('/v2/y1/unit14/u14p90', u14p90);
app.get('/v2/y1/unit14/u14p92', u14p92);
app.get('/v2/y1/unit14/u14p93', u14p93);

// Year 1 Unit 15
app.get('/v2/y1/unit15', Unit15);
app.get('/v2/y1/unit15/u15p96', u15p96);
app.get('/v2/y1/unit15/u15p100', u15p100);
app.get('/v2/y1/unit15/u15p101', u15p101);

// Year 1 Unit 16
app.get('/v2/y1/unit16', Unit16);
app.get('/v2/y1/unit16/u16p104', u16p104);
app.get('/v2/y1/unit16/u16p106', u16p106);

// Year 1 Unit 19
app.get('/v2/y1/unit19', Unit19);
app.get('/v2/y1/unit19/u19p124', u19p124);
app.get('/v2/y1/unit19/u19p126', u19p126);
app.get('/v2/y1/unit19/u19p127', u19p127);

// Year 1 Unit 20
app.get('/v2/y1/unit20', Unit20);
app.get('/v2/y1/unit20/u20p130', u20p130);
app.get('/v2/y1/unit20/u20p131', u20p131);
app.get('/v2/y1/unit20/u20p133', u20p133);

// Year 1 Unit 21
app.get('/v2/y1/unit21', Unit21);
app.get('/v2/y1/unit21/u21p136', u21p136);
app.get('/v2/y1/unit21/u21p137', u21p137);
app.get('/v2/y1/unit21/u21p139', u21p139);

// Year 1 Unit 22
app.get('/v2/y1/unit22', Unit22);
app.get('/v2/y1/unit22/u22p142', u22p142);
app.get('/v2/y1/unit22/u22p143', u22p143);
app.get('/v2/y1/unit22/u22p144', u22p144);

// Year 1 Unit 23
app.get('/v2/y1/unit23', Unit23);
app.get('/v2/y1/unit23/u23p149', u23p149);
app.get('/v2/y1/unit23/u23p150', u23p150);
app.get('/v2/y1/unit23/u23p151', u23p151);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('server is listening on PORT 8000, http://localhost:8000');
});
