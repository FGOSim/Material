/*再臨用*/
/*	100剣ピース 101弓ピース 102槍ピース 103騎ピース 104術ピース 105殺ピース 106狂ピース*/
/*	110剣モニュ 111弓モニュ 112槍モニュ 113騎モニュ 114術モニュ 115殺モニュ 116狂モニュ*/
/*スキル用*/
/*	200剣の輝石 201弓の輝石 202槍の輝石 203騎の輝石 204術の輝石 205殺の輝石 206狂の輝石*/
/*	210剣の魔石 211弓の魔石 212槍の魔石 213騎の魔石 214術の魔石 215殺の魔石 216狂の魔石*/
/*	220剣の秘石 221弓の秘石 222槍の秘石 223騎の秘石 224術の秘石 225殺の秘石 226狂の秘石*/
/*素材用*/
/*	300英雄の証 301凶骨 302竜の牙 303虚影の塵 304愚者の鎖*/
/*	400世界樹の種 401ゴーストランタン 402八連双晶 403蛇の宝玉 404鳳凰の羽根 */
/*	405無間の歯車 406禁断の頁 407ﾎﾑﾝｸﾙｽﾍﾞﾋﾞｰ 408隕蹄鉄 409大騎士勲章 410追憶の貝殻 */
/*	500混沌の爪 501蛮神の心臓 502竜の逆鱗 503精霊根 504戦馬の幼角 */
/*	505血の涙石 506黒獣脂 507封魔のランプ 508知慧のスカラベ */
/*	800伝承結晶 900QP */
/*ステータス用*/
/* policy
1 秩序 policyLaw
2 中立 policyNeutral
3 混沌 policyChaos
*/
/* personality
1 善	personalGood
2 中庸	personalNeutral
3 悪	personalEvil
4 狂	personalMad
5 花嫁	personalBride
6 夏	personalSummer
*/
/* attribute
1 天 attrbuteSky
2 地 attrbuteEarth
3 人 attrbuteMan
4 星 attrbuteStar
5 獣 attrbuteBeast
*/
/* nptype
1 Q nptypeQ
2 A nptypeA
3 B nptypeB
*/
/* npeffect
1 全体 npeffectA
2 単体 npeffectO
3 補助 npeffectS
*/
/* EX
	male 男性
	female
	divine
	dragon
	
*/
var Servantdb = new Object()
Servantdb = [
{
	id:1, text:"マシュ・キリエライト",
	text2:"Mash Kyrielight",
	value:2, kind:9, event:0,
	icon1:200, icon2:205, icon3:206,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	riding:1,
	AdAgain1:{  },
	AdAgain2:{  },
	AdAgain3:{  },
	AdAgain4:{  },
	skill1:{ 300:5 },/* Lv1->2 */
	skill2:{ 302:5 },/* Lv2->3 */
	skill3:{ 400:5 },/* Lv3->4 */
	skill4:{ 402:5 },/* Lv4->5 */
	skill5:{ 303:5 },/* Lv5->6 */
	skill6:{ 405:5 },/* Lv6->7 */
	skill7:{ 404:5 },/* Lv7->8 */
	skill8:{ 502:5 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{	id:2, text:"アルトリア・ペンドラゴン",
	text2:"Artoria Pendragon",
	value:4, kind:0, event:0,
	icon1:105, icon2:103, icon3:402,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	dragon:1, riding:1, saberface:1, arthur:1, king:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 302:18 },
	AdAgain3:{ 110:5, 300:29, 404:4 },
	AdAgain4:{ 110:12, 404:8, 502:5 },
	skill1:{ 200:5 }, /* Lv1->2 */
	skill2:{ 200:12 }, /* Lv2->3 */
	skill3:{ 210:5 }, /* Lv3->4 */
	skill4:{ 210:12, 300:15 }, /* Lv4->5 */
	skill5:{ 220:5, 300:29 }, /* Lv5->6 */
	skill6:{ 220:12, 302:12 }, /* Lv6->7 */
	skill7:{ 302:24, 500:4 }, /* Lv7->8 */
	skill8:{ 500:11, 502:10 }, /* Lv8->9 */
	skill9:{ 800:1 } /* Lv9->10 */
},
{
	id:3, text:"アルトリア・ペンドラゴン\n〔オルタ〕",
	text2:"Artoria Pendragon\n(Alter)",
	value:3, kind:0, event:0,
	icon1:103, icon2:402, icon3:105,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	dragon:1, saberface:1, arthur:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 302:15 },
	AdAgain3:{ 110:4, 500:5, 502:2 },
	AdAgain4:{ 110:10, 501:4, 502:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 500:3 },/* Lv4->5 */
	skill5:{ 220:4, 500:5 },/* Lv5->6 */
	skill6:{ 220:10, 302:10 },/* Lv6->7 */
	skill7:{ 302:20, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 } /* Lv9->10 */
},
{
	id:4, text:"アルトリア・ペンドラゴン\n〔リリィ〕",
	text2:"Artoria Pendragon\n(Lily)",
	value:3, kind:0, event:0,
	icon1:402, icon2:103, icon3:601,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	dragon:1, riding:1, saberface:1, arthur:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 400:5, 302:20 },
	AdAgain4:{ 110:10, 400:10, 502:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 302:10 },/* Lv4->5 */
	skill5:{ 220:4, 302:20 },/* Lv5->6 */
	skill6:{ 220:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 500:3 },/* Lv7->8 */
	skill8:{ 500:9, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:5, text:"ネロ・クラウディウス",
	text2:"Nero Claudius",
	value:3, kind:0, event:0,
	icon1:305, icon2:300, icon3:203,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	roma:1, riding:1, saberface:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 402:6 },
	AdAgain3:{ 110:4, 404:7, 401:4 },
	AdAgain4:{ 110:10, 401:8, 405:10 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 404:4 },/* Lv4->5 */
	skill5:{ 220:4, 404:7 },/* Lv5->6 */
	skill6:{ 220:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 302:12 },/* Lv7->8 */
	skill8:{ 302:36, 405:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:6, text:"ジークフリート",
	text2:"Siegfried",
	value:3, kind:0, event:0,
	icon1:601, icon2:303, icon3:107,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	dragon:1, riding:1, love:1, davinci:1,
	npEXdragon:1, sEXdragon:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 302:15 },
	AdAgain3:{ 110:4, 400:10, 300:12 },
	AdAgain4:{ 110:10, 300:24, 502:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 400:5 },/* Lv4->5 */
	skill5:{ 220:4, 400:10 },/* Lv5->6 */
	skill6:{ 220:10, 302:10 },/* Lv6->7 */
	skill7:{ 302:20, 501:2 },/* Lv7->8 */
	skill8:{ 501:6, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:7, text:"ガイウス・ユリウス・カエサル",
	text2:"Gaius Julius Caesar",
	value:2, kind:0, event:0,
	icon1:106, icon2:105, icon3:108,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	divinity:1, roma:1, riding:1, love:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:8, 300:15 },
	AdAgain3:{ 110:4, 405:7, 406:4 },
	AdAgain4:{ 110:8, 406:7, 500:5 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:8 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:8, 405:4 },/* Lv4->5 */
	skill5:{ 220:4, 405:7 },/* Lv5->6 */
	skill6:{ 220:8, 300:10 },/* Lv6->7 */
	skill7:{ 300:20, 408:4 },/* Lv7->8 */
	skill8:{ 408:12, 500:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:8, text:"アルテラ",
	text2:"Attila",
	value:4, kind:0, event:0,
	icon1:106, icon2:305, icon3:105,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	divinity:1, riding:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 303:15 },
	AdAgain3:{ 110:5, 500:6, 408:5 },
	AdAgain4:{ 110:12, 408:10, 501:5 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12, 500:3 },/* Lv4->5 */
	skill5:{ 220:5, 500:6 },/* Lv5->6 */
	skill6:{ 220:12, 303:10 },/* Lv6->7 */
	skill7:{ 303:20, 301:18 },/* Lv7->8 */
	skill8:{ 301:54, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:9, text:"ジル・ド・レェ",
	text2:"Gilles de Rais",
	value:2, kind:0, event:0,
	icon1:106, icon2:601, icon3:103,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:8, 300:15 },
	AdAgain3:{ 110:4, 303:13, 301:10 },
	AdAgain4:{ 110:8, 301:20, 501:4 },
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1,
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:8 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:8, 303:7 },/* Lv4->5 */
	skill5:{ 220:4, 303:13 },/* Lv5->6 */
	skill6:{ 220:8, 300:10 },/* Lv6->7 */
	skill7:{ 300:20, 401:4 },/* Lv7->8 */
	skill8:{ 401:12, 501:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:10, text:"シュヴァリエ・デオン",
	text2:"Le Chevalier d'Eon",
	value:3, kind:0, event:0,
	icon1:204, icon2:303, icon3:207,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	riding:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 400:10, 404:4 },
	AdAgain4:{ 110:10, 404:7, 403:8 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 400:5 },/* Lv4->5 */
	skill5:{ 220:4, 400:10 },/* Lv5->6 */
	skill6:{ 220:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 406:5 },/* Lv7->8 */
	skill8:{ 406:15, 403:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:11, text:"エミヤ",
	text2:"EMIYA",
	value:3, kind:1, event:0,
	icon1:204, icon2:401, icon3:104,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	love:1, davinci:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 300:18 },
	AdAgain3:{ 111:4, 405:8, 501:2 },
	AdAgain4:{ 111:10, 501:4, 303:20 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 405:4 },/* Lv4->5 */
	skill5:{ 221:4, 405:8 },/* Lv5->6 */
	skill6:{ 221:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 404:4 },/* Lv7->8 */
	skill8:{ 404:12, 303:40 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:12, text:"ギルガメッシュ",
	text2:"Gilgamesh",
	value:4, kind:1, event:0,
	icon1:105, icon2:601, icon3:401,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1, davinci:1,
	npEXservant:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 403:6 },
	AdAgain3:{ 111:5, 300:29, 502:2 },
	AdAgain4:{ 111:12, 502:4, 501:5 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 300:15 },/* Lv4->5 */
	skill5:{ 221:5, 300:29 },/* Lv5->6 */
	skill6:{ 221:12, 403:4 },/* Lv6->7 */
	skill7:{ 403:8, 303:12 },/* Lv7->8 */
	skill8:{ 303:36, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:13, text:"ロビンフッド",
	text2:"Robin Hood",
	value:2, kind:1, event:0,
	icon1:700, icon2:601, icon3:204,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	love:1, davinci:1,
	npEXpoison:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 400:6 },
	AdAgain3:{ 111:4, 403:6, 302:8 },
	AdAgain4:{ 111:8, 302:16, 303:16 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:8 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:8, 403:3 },/* Lv4->5 */
	skill5:{ 221:4, 403:6 },/* Lv5->6 */
	skill6:{ 221:8, 400:4 },/* Lv6->7 */
	skill7:{ 400:8, 404:4 },/* Lv7->8 */
	skill8:{ 404:10, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:14, text:"アタランテ",
	text2:"Atalanta",
	value:3, kind:1, event:0,
	icon1:101, icon2:109, icon3:204,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 404:5 },
	AdAgain3:{ 111:4, 302:20, 403:4 },
	AdAgain4:{ 111:10, 403:7, 400:12 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 302:10 },/* Lv4->5 */
	skill5:{ 221:4, 302:20 },/* Lv5->6 */
	skill6:{ 221:10, 404:4 },/* Lv6->7 */
	skill7:{ 404:7, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 400:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:15, text:"エウリュアレ",
	text2:"Euryale",
	value:2, kind:1, event:0,
	icon1:800, icon2:803, icon3:102,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	npEXmale:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 403:4 },
	AdAgain3:{ 111:4, 502:3, 303:7 },
	AdAgain4:{ 111:8, 303:13, 501:4 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:8 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:8, 502:2 },/* Lv4->5 */
	skill5:{ 221:4, 502:3 },/* Lv5->6 */
	skill6:{ 221:8, 403:3 },/* Lv6->7 */
	skill7:{ 403:6, 500:3 },/* Lv7->8 */
	skill8:{ 500:8, 501:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:16, text:"アーラシュ",
	text2:"Arash",
	value:0, kind:1, event:0,
	icon1:200, icon2:401, icon3:600,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	love:1, davinci:1,
	AdAgain1:{ 101:2 },
	AdAgain2:{ 101:4, 400:3 },
	AdAgain3:{ 111:2, 300:10, 402:2 },
	AdAgain4:{ 111:4, 402:4, 303:8 },
	skill1:{ 201:2 },/* Lv1->2 */
	skill2:{ 201:4 },/* Lv2->3 */
	skill3:{ 211:2 },/* Lv3->4 */
	skill4:{ 211:4, 300:5 },/* Lv4->5 */
	skill5:{ 221:2, 300:10 },/* Lv5->6 */
	skill6:{ 221:4, 400:2 },/* Lv6->7 */
	skill7:{ 400:4, 407:2 },/* Lv7->8 */
	skill8:{ 407:6, 303:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:17, text:"クー・フーリン\n〔ランサー〕",
	text2:"Cu Chulainn",
	value:2, kind:2, event:0,
	icon1:203, icon2:204, icon3:303,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, love:1, davinci:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 500:3 },
	AdAgain3:{ 112:4, 400:8, 402:4 },
	AdAgain4:{ 112:8, 402:7, 404:7 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 400:4 },/* Lv4->5 */
	skill5:{ 222:4, 400:8 },/* Lv5->6 */
	skill6:{ 222:8, 500:2 },/* Lv6->7 */
	skill7:{ 500:4, 300:12 },/* Lv7->8 */
	skill8:{ 300:36, 404:13 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:18, text:"エリザベート・バートリー",
	text2:"Elizabeth Bathory",
	value:3, kind:2, event:0,
	icon1:105, icon2:701, icon3:203,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	dragon:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 302:15 },
	AdAgain3:{ 112:4, 502:4, 500:3 },
	AdAgain4:{ 112:10, 500:5, 404:8 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 502:2 },/* Lv4->5 */
	skill5:{ 222:4, 502:4 },/* Lv5->6 */
	skill6:{ 222:10, 302:10 },/* Lv6->7 */
	skill7:{ 302:20, 406:5 },/* Lv7->8 */
	skill8:{ 406:15, 404:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:19, text:"武蔵坊弁慶",
	text2:"Musashibou Benkei",
	value:1, kind:2, event:0,
	icon1:805, icon2:206, icon3:805,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	love:1, davinci:1,
	AdAgain1:{ 102:3 },
	AdAgain2:{ 102:6, 301:11 },
	AdAgain3:{ 112:3, 400:6, 407:3 },
	AdAgain4:{ 112:6, 407:5, 303:12 },
	skill1:{ 202:3 },/* Lv1->2 */
	skill2:{ 202:6 },/* Lv2->3 */
	skill3:{ 212:3 },/* Lv3->4 */
	skill4:{ 212:6, 400:3 },/* Lv4->5 */
	skill5:{ 222:3, 400:6 },/* Lv5->6 */
	skill6:{ 222:6, 301:8 },/* Lv6->7 */
	skill7:{ 301:15, 303:6 },/* Lv7->8 */
	skill8:{ 303:42 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:20, text:"クー・フーリン\n〔プロトタイプ〕",
	text2:"Cu Chulainn\n(Prototype)",
	value:2, kind:2, event:0,
	icon1:108, icon2:204, icon3:107,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, davinci:1,
	sEXsavagebeast:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 303:10 },
	AdAgain3:{ 112:4, 400:8, 500:2 },
	AdAgain4:{ 112:8, 500:4, 402:8 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 400:4 },/* Lv4->5 */
	skill5:{ 222:4, 400:8 },/* Lv5->6 */
	skill6:{ 222:8, 303:7 },/* Lv6->7 */
	skill7:{ 303:13, 300:12 },/* Lv7->8 */
	skill8:{ 300:36, 402:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:21, text:"レオニダス一世",
	text2:"Leonidas",
	value:1, kind:2, event:0,
	icon1:206, icon2:203, icon3:103,
	nptypeB:1, npeffectS:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 102:3 },
	AdAgain2:{ 102:6, 500:3 },
	AdAgain3:{ 112:3, 303:10, 402:3 },
	AdAgain4:{ 112:6, 402:5, 301:18 },
	skill1:{ 202:3 },/* Lv1->2 */
	skill2:{ 202:6 },/* Lv2->3 */
	skill3:{ 212:3 },/* Lv3->4 */
	skill4:{ 212:6, 303:5 },/* Lv4->5 */
	skill5:{ 222:3, 303:10 },/* Lv5->6 */
	skill6:{ 222:6, 500:2 },/* Lv6->7 */
	skill7:{ 500:3, 403:3 },/* Lv7->8 */
	skill8:{ 403:8, 301:36 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:22, text:"ロムルス",
	text2:"Romulus",
	value:2, kind:2, event:0,
	icon1:305, icon2:300, icon3:203,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteStar:1,
	roma:1, davinci:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 402:5 },
	AdAgain3:{ 112:4, 404:6, 301:10 },
	AdAgain4:{ 112:8, 301:20, 303:16 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 404:3 },/* Lv4->5 */
	skill5:{ 222:4, 404:6 },/* Lv5->6 */
	skill6:{ 222:8, 402:4 },/* Lv6->7 */
	skill7:{ 402:7, 405:4 },/* Lv7->8 */
	skill8:{ 405:12, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:23, text:"メドゥーサ",
	text2:"Medusa",
	value:2, kind:3, event:0,
	icon1:804, icon2:105, icon3:600,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	divinity:1, riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 403:4 },
	AdAgain3:{ 113:4, 303:13, 408:4 },
	AdAgain4:{ 113:8, 408:7, 404:7 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:8 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:8, 303:7 },/* Lv4->5 */
	skill5:{ 223:4, 303:13 },/* Lv5->6 */
	skill6:{ 223:8, 403:3 },/* Lv6->7 */
	skill7:{ 403:6, 501:2 },/* Lv7->8 */
	skill8:{ 501:5, 404:13 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:24, text:"ゲオルギウス",
	text2:"Saint George",
	value:1, kind:3, event:0,
	icon1:206, icon2:305, icon3:203,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 103:3 },
	AdAgain2:{ 103:6, 300:11 },
	AdAgain3:{ 113:3, 404:4, 406:3 },
	AdAgain4:{ 113:6, 406:5, 408:6 },
	skill1:{ 203:3 },/* Lv1->2 */
	skill2:{ 203:6 },/* Lv2->3 */
	skill3:{ 213:3 },/* Lv3->4 */
	skill4:{ 213:6, 404:2 },/* Lv4->5 */
	skill5:{ 223:3, 404:4 },/* Lv5->6 */
	skill6:{ 223:6, 300:8 },/* Lv6->7 */
	skill7:{ 300:15, 405:3 },/* Lv7->8 */
	skill8:{ 405:9, 408:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:25, text:"エドワード・ティーチ",
	text2:"Edward Teach",
	value:1, kind:3, event:0,
	icon1:106, icon2:105, icon3:300,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	
	AdAgain1:{ 103:3 },
	AdAgain2:{ 103:6, 301:11 },
	AdAgain3:{ 113:3, 402:5, 406:3 },
	AdAgain4:{ 113:6, 406:5, 401:6 },
	skill1:{ 203:3 },/* Lv1->2 */
	skill2:{ 203:6 },/* Lv2->3 */
	skill3:{ 213:3 },/* Lv3->4 */
	skill4:{ 213:6, 402:3 },/* Lv4->5 */
	skill5:{ 223:3, 402:5 },/* Lv5->6 */
	skill6:{ 223:6, 301:8 },/* Lv6->7 */
	skill7:{ 301:15, 407:3 },/* Lv7->8 */
	skill8:{ 407:9, 401:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:26, text:"ブーディカ",
	text2:"Boudica",
	value:2, kind:3, event:0,
	icon1:107, icon2:203, icon3:102,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	riding:1,
	sEXroma:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 404:4 },
	AdAgain3:{ 113:4, 301:20, 408:4 },
	AdAgain4:{ 113:8, 408:7, 303:16 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:8 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:8, 301:10 },/* Lv4->5 */
	skill5:{ 223:4, 301:20 },/* Lv5->6 */
	skill6:{ 223:8, 404:3 },/* Lv6->7 */
	skill7:{ 404:6, 403:4 },/* Lv7->8 */
	skill8:{ 403:10, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:27, text:"牛若丸",
	text2:"Ushiwakamaru",
	value:2, kind:3, event:0,
	icon1:601, icon2:105, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 300:15 },
	AdAgain3:{ 113:4, 408:7, 401:4 },
	AdAgain4:{ 113:8, 401:7, 402:8 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:8 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:8, 408:4 },/* Lv4->5 */
	skill5:{ 223:4, 408:7 },/* Lv5->6 */
	skill6:{ 223:8, 300:10 },/* Lv6->7 */
	skill7:{ 300:20, 405:4 },/* Lv7->8 */
	skill8:{ 405:12, 402:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:28, text:"アレキサンダー",
	text2:"Alexander",
	value:2, kind:3, event:0,
	icon1:105, icon2:803, icon3:101,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	divinity:1, riding:1, davinci:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 408:5 },
	AdAgain3:{ 113:4, 402:7, 404:3 },
	AdAgain4:{ 113:8, 404:6, 300:24 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:8 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:8, 402:4 },/* Lv4->5 */
	skill5:{ 223:4, 402:7 },/* Lv5->6 */
	skill6:{ 223:8, 408:4 },/* Lv6->7 */
	skill7:{ 408:7, 500:3 },/* Lv7->8 */
	skill8:{ 500:8, 300:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:29, text:"マリー・アントワネット",
	text2:"Marie Antoinette",
	value:3, kind:3, event:0,
	icon1:803, icon2:205, icon3:201,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	riding:1, 
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 404:5 },
	AdAgain3:{ 113:4, 403:7, 408:4 },
	AdAgain4:{ 113:10, 408:8, 405:10 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 403:4 },/* Lv4->5 */
	skill5:{ 223:4, 403:7 },/* Lv5->6 */
	skill6:{ 223:10, 404:4 },/* Lv6->7 */
	skill7:{ 404:7, 501:2 },/* Lv7->8 */
	skill8:{ 501:6, 405:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:30, text:"マルタ",
	text2:"Saint Martha",
	value:3, kind:3, event:0,
	icon1:305, icon2:300, icon3:300,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	divinity:1, riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 302:15 },
	AdAgain3:{ 113:4, 400:10, 500:3 },
	AdAgain4:{ 113:10, 500:5, 502:4 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 400:5 },/* Lv4->5 */
	skill5:{ 223:4, 400:10 },/* Lv5->6 */
	skill6:{ 223:10, 302:10 },/* Lv6->7 */
	skill7:{ 302:20, 404:4 },/* Lv7->8 */
	skill8:{ 404:12, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:31, text:"メディア",
	text2:"Medea",
	value:2, kind:4, event:0,
	icon1:600, icon2:300, icon3:303,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 302:12 },
	AdAgain3:{ 114:4, 303:13, 501:2 },
	AdAgain4:{ 114:8, 501:3, 406:8 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 303:7 },/* Lv4->5 */
	skill5:{ 224:4, 303:13 },/* Lv5->6 */
	skill6:{ 224:8, 302:8 },/* Lv6->7 */
	skill7:{ 302:16, 401:4 },/* Lv7->8 */
	skill8:{ 401:12, 406:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:32, text:"ジル・ド・レェ",
	text2:"Gilles de Rais",
	value:2, kind:4, event:0,
	icon1:201, icon2:703, icon3:804,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 401:5 },
	AdAgain3:{ 114:4, 407:7, 406:4 },
	AdAgain4:{ 114:8, 406:7, 501:4 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 407:4 },/* Lv4->5 */
	skill5:{ 224:4, 407:7 },/* Lv5->6 */
	skill6:{ 224:8, 401:4 },/* Lv6->7 */
	skill7:{ 401:7, 303:8 },/* Lv7->8 */
	skill8:{ 303:24, 501:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:33, text:"ハンス・クリスチャン・\nアンデルセン",
	text2:"Hans Christian\nAndersen",
	value:1, kind:4, event:0,
	icon1:108, icon2:600, icon3:400,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 104:3 },
	AdAgain2:{ 104:6, 406:4 },
	AdAgain3:{ 114:3, 407:5, 405:3 },
	AdAgain4:{ 114:6, 405:5, 408:6 },
	skill1:{ 204:3 },/* Lv1->2 */
	skill2:{ 204:6 },/* Lv2->3 */
	skill3:{ 214:3 },/* Lv3->4 */
	skill4:{ 214:6, 407:3 },/* Lv4->5 */
	skill5:{ 224:3, 407:5 },/* Lv5->6 */
	skill6:{ 224:6, 406:3 },/* Lv6->7 */
	skill7:{ 406:5, 303:6 },/* Lv7->8 */
	skill8:{ 303:18, 408:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:34, text:"ウィリアム・\nシェイクスピア",
	text2:"William\nShakespeare",
	value:1, kind:4, event:0,
	icon1:103, icon2:205, icon3:600,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 104:3 },
	AdAgain2:{ 104:6, 401:4 },
	AdAgain3:{ 114:3, 406:5, 407:3 },
	AdAgain4:{ 114:6, 407:5, 403:5 },
	skill1:{ 204:3 },/* Lv1->2 */
	skill2:{ 204:6 },/* Lv2->3 */
	skill3:{ 214:3 },/* Lv3->4 */
	skill4:{ 214:6, 406:3 },/* Lv4->5 */
	skill5:{ 224:3, 406:5 },/* Lv5->6 */
	skill6:{ 224:6, 401:3 },/* Lv6->7 */
	skill7:{ 401:5, 303:6 },/* Lv7->8 */
	skill8:{ 303:18, 403:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:35, text:"メフィストフェレス",
	text2:"Mephistopheles",
	value:2, kind:4, event:0,
	icon1:800, icon2:400, icon3:802,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	davinci:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 303:10 },
	AdAgain3:{ 114:4, 407:7, 501:2 },
	AdAgain4:{ 114:8, 501:3, 401:8 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 407:4 },/* Lv4->5 */
	skill5:{ 224:4, 407:7 },/* Lv5->6 */
	skill6:{ 224:8, 303:7 },/* Lv6->7 */
	skill7:{ 303:13, 405:4 },/* Lv7->8 */
	skill8:{ 405:12, 401:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:36, text:"ヴォルフガング・アマデウス・\nモーツァルト",
	text2:"Wolfgang Amadeus\nMozart",
	value:0, kind:4, event:0,
	icon1:102, icon2:703, icon3:402,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	love:1, davinci:1,
	AdAgain1:{ 104:2 },
	AdAgain2:{ 104:4, 301:8 },
	AdAgain3:{ 114:2, 405:4, 406:2 },
	AdAgain4:{ 114:4, 406:4, 501:2 },
	skill1:{ 204:2 },/* Lv1->2 */
	skill2:{ 204:4 },/* Lv2->3 */
	skill3:{ 214:2 },/* Lv3->4 */
	skill4:{ 214:4, 405:2 },/* Lv4->5 */
	skill5:{ 224:2, 405:4 },/* Lv5->6 */
	skill6:{ 224:4, 301:5 },/* Lv6->7 */
	skill7:{ 301:10, 404:2 },/* Lv7->8 */
	skill8:{ 404:5, 501:4 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:37, text:"諸葛孔明〔エルメロイⅡ世〕",
	text2:"Zhuge Liang\n(Lord El-Melloi II)",
	value:4, kind:4, event:0,
	icon1:108, icon2:200, icon3:105,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	love:1, davinci:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 303:15 },
	AdAgain3:{ 114:5, 406:10, 405:5 },
	AdAgain4:{ 114:12, 405:10, 404:10 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 406:5 },/* Lv4->5 */
	skill5:{ 224:5, 406:10 },/* Lv5->6 */
	skill6:{ 224:12, 303:10 },/* Lv6->7 */
	skill7:{ 303:20, 501:3 },/* Lv7->8 */
	skill8:{ 501:8, 404:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:38, text:"クー・フーリン\n〔キャスター〕",
	text2:"Cu Chulainn\n(Caster)",
	value:2, kind:4, event:0,
	icon1:108, icon2:108, icon3:204,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, love:1, davinci:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 400:6 },
	AdAgain3:{ 114:4, 406:7, 500:2 },
	AdAgain4:{ 114:8, 500:4, 405:8 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 406:4 },/* Lv4->5 */
	skill5:{ 224:4, 406:7 },/* Lv5->6 */
	skill6:{ 224:8, 400:4 },/* Lv6->7 */
	skill7:{ 400:8, 404:4 },/* Lv7->8 */
	skill8:{ 404:10, 405:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:39, text:"佐々木小次郎",
	text2:"Sasaki Kojirou",
	value:0, kind:5, event:0,
	icon1:204, icon2:303, icon3:500,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 105:2 },
	AdAgain2:{ 105:4, 300:8 },
	AdAgain3:{ 115:2, 303:7, 405:2 },
	AdAgain4:{ 115:4, 405:4, 402:4 },
	skill1:{ 205:2 },/* Lv1->2 */
	skill2:{ 205:4 },/* Lv2->3 */
	skill3:{ 215:2 },/* Lv3->4 */
	skill4:{ 215:4, 303:4 },/* Lv4->5 */
	skill5:{ 225:2, 303:7 },/* Lv5->6 */
	skill6:{ 225:4, 300:5 },/* Lv6->7 */
	skill7:{ 300:10, 301:6 },/* Lv7->8 */
	skill8:{ 301:18, 402:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:40, text:"呪腕のハサン",
	text2:"Cursed Arm\nHassan",
	value:1, kind:5, event:0,
	icon1:402, icon2:108, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 105:3 },
	AdAgain2:{ 105:6, 301:11 },
	AdAgain3:{ 115:3, 405:5, 303:5 },
	AdAgain4:{ 115:6, 303:10, 407:6 },
	skill1:{ 205:3 },/* Lv1->2 */
	skill2:{ 205:6 },/* Lv2->3 */
	skill3:{ 215:3 },/* Lv3->4 */
	skill4:{ 215:6, 405:3 },/* Lv4->5 */
	skill5:{ 225:3, 405:5 },/* Lv5->6 */
	skill6:{ 225:6, 301:8 },/* Lv6->7 */
	skill7:{ 301:15, 401:3 },/* Lv7->8 */
	skill8:{ 401:9, 407:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:41, text:"ステンノ",
	text2:"Stheno",
	value:3, kind:5, event:0,
	icon1:800, icon2:803, icon3:105,
	nptypeB:1, npeffectS:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 403:5 },
	AdAgain3:{ 115:4, 501:4, 303:8 },
	AdAgain4:{ 115:10, 303:16, 502:4 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 501:2 },/* Lv4->5 */
	skill5:{ 225:4, 501:4 },/* Lv5->6 */
	skill6:{ 225:10, 403:4 },/* Lv6->7 */
	skill7:{ 403:7, 500:3 },/* Lv7->8 */
	skill8:{ 500:9, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:42, text:"荊軻",
	text2:"Jing Ke",
	value:2, kind:5, event:0,
	icon1:109, icon2:401, icon3:101,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:8, 301:15 },
	AdAgain3:{ 115:4, 402:7, 401:4 },
	AdAgain4:{ 115:8, 401:7, 303:16 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:8 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:8, 402:4 },/* Lv4->5 */
	skill5:{ 225:4, 402:7 },/* Lv5->6 */
	skill6:{ 225:8, 301:10 },/* Lv6->7 */
	skill7:{ 301:20, 404:4 },/* Lv7->8 */
	skill8:{ 404:10, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:43, text:"シャルル＝アンリ・サンソン",
	text2:"Charles-Henri Sanson",
	value:1, kind:5, event:0,
	icon1:107, icon2:300, icon3:107,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	sEXevil:1, sEXhuman:1,
	AdAgain1:{ 105:3 },
	AdAgain2:{ 105:6, 301:11 },
	AdAgain3:{ 115:3, 303:10, 501:1 },
	AdAgain4:{ 115:6, 501:2, 407:6 },
	skill1:{ 205:3 },/* Lv1->2 */
	skill2:{ 205:6 },/* Lv2->3 */
	skill3:{ 215:3 },/* Lv3->4 */
	skill4:{ 215:6, 303:5 },/* Lv4->5 */
	skill5:{ 225:3, 303:10 },/* Lv5->6 */
	skill6:{ 225:6, 301:8 },/* Lv6->7 */
	skill7:{ 301:15, 406:3 },/* Lv7->8 */
	skill8:{ 406:9, 407:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:44, text:"ファントム・オブ・ジ・オペラ",
	text2:"The Phantom\nof the Opera",
	value:1, kind:5, event:0,
	icon1:400, icon2:803, icon3:201,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 105:3 },
	AdAgain2:{ 105:6, 401:4 },
	AdAgain3:{ 115:3, 303:10, 405:3 },
	AdAgain4:{ 115:6, 405:5, 301:18 },
	skill1:{ 205:3 },/* Lv1->2 */
	skill2:{ 205:6 },/* Lv2->3 */
	skill3:{ 215:3 },/* Lv3->4 */
	skill4:{ 215:6, 303:5 },/* Lv4->5 */
	skill5:{ 225:3, 303:10 },/* Lv5->6 */
	skill6:{ 225:6, 401:3 },/* Lv6->7 */
	skill7:{ 401:5, 501:2 },/* Lv7->8 */
	skill8:{ 501:4, 301:36 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:45, text:"マタ・ハリ",
	text2:"Mata Hari",
	value:0, kind:5, event:0,
	icon1:401, icon2:803, icon3:805,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 105:2 },
	AdAgain2:{ 105:4, 404:2 },
	AdAgain3:{ 115:2, 405:4, 401:2 },
	AdAgain4:{ 115:4, 401:4, 403:4 },
	skill1:{ 205:2 },/* Lv1->2 */
	skill2:{ 205:4 },/* Lv2->3 */
	skill3:{ 215:2 },/* Lv3->4 */
	skill4:{ 215:4, 405:2 },/* Lv4->5 */
	skill5:{ 225:2, 405:4 },/* Lv5->6 */
	skill6:{ 225:4, 404:2 },/* Lv6->7 */
	skill7:{ 404:3, 407:2 },/* Lv7->8 */
	skill8:{ 407:6, 403:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:46, text:"カーミラ",
	text2:"Carmilla",
	value:3, kind:5, event:0,
	icon1:800, icon2:701, icon3:702,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	npEXfemale:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 403:5 },
	AdAgain3:{ 115:4, 407:8, 501:2 },
	AdAgain4:{ 115:10, 501:4, 500:6 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 407:4 },/* Lv4->5 */
	skill5:{ 225:4, 407:8 },/* Lv5->6 */
	skill6:{ 225:10, 403:4 },/* Lv6->7 */
	skill7:{ 403:7, 301:15 },/* Lv7->8 */
	skill8:{ 301:45, 500:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:47, text:"ヘラクレス",
	text2:"Heracles",
	value:3, kind:6, event:0,
	icon1:105, icon2:204, icon3:203,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalMad:1, attrbuteSky:1,
	divinity:1, 
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 402:6 },
	AdAgain3:{ 116:4, 501:4, 500:3 },
	AdAgain4:{ 116:10, 500:5, 502:4 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 501:2 },/* Lv4->5 */
	skill5:{ 226:4, 501:4 },/* Lv5->6 */
	skill6:{ 226:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 300:15 },/* Lv7->8 */
	skill8:{ 300:45, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:48, text:"ランスロット",
	text2:"Lancelot",
	value:3, kind:6, event:0,
	icon1:109, icon2:401, icon3:601,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalMad:1, attrbuteEarth:1,
	davinci:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 502:3 },
	AdAgain3:{ 116:4, 500:5, 303:8 },
	AdAgain4:{ 116:10, 303:16, 302:24 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 500:3 },/* Lv4->5 */
	skill5:{ 226:4, 500:5 },/* Lv5->6 */
	skill6:{ 226:10, 502:2 },/* Lv6->7 */
	skill7:{ 502:4, 408:5 },/* Lv7->8 */
	skill8:{ 408:15, 302:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:49, text:"呂布奉先",
	text2:"Lu Bu",
	value:2, kind:6, event:0,
	icon1:105, icon2:200, icon3:106,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:8, 408:5 },
	AdAgain3:{ 116:4, 301:20, 500:2 },
	AdAgain4:{ 116:8, 500:4, 303:16 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:8 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:8, 301:10 },/* Lv4->5 */
	skill5:{ 226:4, 301:20 },/* Lv5->6 */
	skill6:{ 226:8, 408:4 },/* Lv6->7 */
	skill7:{ 408:7, 402:4 },/* Lv7->8 */
	skill8:{ 402:12, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:50, text:"スパルタクス",
	text2:"Spartacus",
	value:0, kind:6, event:0,
	icon1:302, icon2:203, icon3:103,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	roma:1,
	AdAgain1:{ 106:2 },
	AdAgain2:{ 106:4, 402:3 },
	AdAgain3:{ 116:2, 300:10, 407:2 },
	AdAgain4:{ 116:4, 407:4, 301:12 },
	skill1:{ 206:2 },/* Lv1->2 */
	skill2:{ 206:4 },/* Lv2->3 */
	skill3:{ 216:2 },/* Lv3->4 */
	skill4:{ 216:4, 300:5 },/* Lv4->5 */
	skill5:{ 226:2, 300:10 },/* Lv5->6 */
	skill6:{ 226:4, 402:2 },/* Lv6->7 */
	skill7:{ 402:4, 400:3 },/* Lv7->8 */
	skill8:{ 400:8, 301:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:51, text:"坂田金時",
	text2:"Sakata Kintoki",
	value:4, kind:6, event:0,
	icon1:105, icon2:600, icon3:305,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	divinity:1, love:1, davinci:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 300:22 },
	AdAgain3:{ 116:5, 402:10, 400:6 },
	AdAgain4:{ 116:12, 400:12, 501:5 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12, 402:5 },/* Lv4->5 */
	skill5:{ 226:5, 402:10 },/* Lv5->6 */
	skill6:{ 226:12, 300:15 },/* Lv6->7 */
	skill7:{ 300:29, 303:12 },/* Lv7->8 */
	skill8:{ 303:36, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:52, text:"ヴラド三世",
	text2:"Vlad III",
	value:4, kind:6, event:0,
	icon1:800, icon2:200, icon3:203,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	love:1, davinci:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 502:3 },
	AdAgain3:{ 116:5, 500:6, 406:5 },
	AdAgain4:{ 116:12, 406:10, 303:24 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12, 500:3 },/* Lv4->5 */
	skill5:{ 226:5, 500:6 },/* Lv5->6 */
	skill6:{ 226:12, 502:2 },/* Lv6->7 */
	skill7:{ 502:4, 301:18 },/* Lv7->8 */
	skill8:{ 301:54, 303:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:53, text:"アステリオス",
	text2:"Asterios",
	value:0, kind:6, event:0,
	icon1:105, icon2:305, icon3:109,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 106:2 },
	AdAgain2:{ 106:4, 402:3 },
	AdAgain3:{ 116:2, 300:10, 408:2 },
	AdAgain4:{ 116:4, 408:4, 400:5 },
	skill1:{ 206:2 },/* Lv1->2 */
	skill2:{ 206:4 },/* Lv2->3 */
	skill3:{ 216:2 },/* Lv3->4 */
	skill4:{ 216:4, 300:5 },/* Lv4->5 */
	skill5:{ 226:2, 300:10 },/* Lv5->6 */
	skill6:{ 226:4, 402:2 },/* Lv6->7 */
	skill7:{ 402:4, 303:4 },/* Lv7->8 */
	skill8:{ 303:12, 400:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:54, text:"カリギュラ",
	text2:"Caligula",
	value:1, kind:6, event:0,
	icon1:105, icon2:300, icon3:103,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	roma:1,
	AdAgain1:{ 106:3 },
	AdAgain2:{ 106:6, 402:4 },
	AdAgain3:{ 116:3, 403:4, 401:3 },
	AdAgain4:{ 116:6, 401:5, 406:6 },
	skill1:{ 206:3 },/* Lv1->2 */
	skill2:{ 206:6 },/* Lv2->3 */
	skill3:{ 216:3 },/* Lv3->4 */
	skill4:{ 216:6, 403:2 },/* Lv4->5 */
	skill5:{ 226:3, 403:4 },/* Lv5->6 */
	skill6:{ 226:6, 402:3 },/* Lv6->7 */
	skill7:{ 402:5, 408:3 },/* Lv7->8 */
	skill8:{ 408:9, 406:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:55, text:"ダレイオス三世",
	text2:"Darius III",
	value:2, kind:6, event:0,
	icon1:601, icon2:303, icon3:203,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:8, 402:5 },
	AdAgain3:{ 116:4, 404:6, 301:10 },
	AdAgain4:{ 116:8, 301:20, 408:8 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:8 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:8, 404:3 },/* Lv4->5 */
	skill5:{ 226:4, 404:6 },/* Lv5->6 */
	skill6:{ 226:8, 402:4 },/* Lv6->7 */
	skill7:{ 402:7, 303:8 },/* Lv7->8 */
	skill8:{ 303:24, 408:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:56, text:"清姫",
	text2:"Kiyohime",
	value:2, kind:6, event:0,
	icon1:200, icon2:701, icon3:103,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	dragon:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:8, 401:5 },
	AdAgain3:{ 116:4, 301:20, 302:8 },
	AdAgain4:{ 116:8, 302:16, 502:4 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:8 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:8, 301:10 },/* Lv4->5 */
	skill5:{ 226:4, 301:20 },/* Lv5->6 */
	skill6:{ 226:8, 401:4 },/* Lv6->7 */
	skill7:{ 401:7, 400:5 },/* Lv7->8 */
	skill8:{ 400:15, 502:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:57, text:"エイリーク・ブラッドアクス",
	text2:"Eric Bloodaxe",
	value:1, kind:6, event:0,
	icon1:700, icon2:203, icon3:303,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 106:3 },
	AdAgain2:{ 106:6, 301:11 },
	AdAgain3:{ 116:3, 407:5, 403:2 },
	AdAgain4:{ 116:6, 403:4, 303:12 },
	skill1:{ 206:3 },/* Lv1->2 */
	skill2:{ 206:6 },/* Lv2->3 */
	skill3:{ 216:3 },/* Lv3->4 */
	skill4:{ 216:6, 407:3 },/* Lv4->5 */
	skill5:{ 226:3, 407:5 },/* Lv5->6 */
	skill6:{ 226:6, 301:8 },/* Lv6->7 */
	skill7:{ 301:15, 500:2 },/* Lv7->8 */
	skill8:{ 500:6, 303:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:58, text:"タマモキャット",
	text2:"Tamamo Cat",
	value:3, kind:6, event:0,
	icon1:105, icon2:800, icon3:200,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	savagebeast:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 401:6 },
	AdAgain3:{ 116:4, 407:8, 500:3 },
	AdAgain4:{ 116:10, 500:5, 501:4 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 407:4 },/* Lv4->5 */
	skill5:{ 226:4, 407:8 },/* Lv5->6 */
	skill6:{ 226:10, 401:4 },/* Lv6->7 */
	skill7:{ 401:8, 402:5 },/* Lv7->8 */
	skill8:{ 402:15, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:59, text:"ジャンヌ・ダルク",
	text2:"Jeanne d'Arc",
	value:4, kind:7, event:0,
	icon1:400, icon2:703, icon3:804,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteStar:1,
	saberface:1,
	AdAgain1:{ 100:5, 102:5, 101:5 },
	AdAgain2:{ 103:5, 104:5, 105:5, 106:5 },
	AdAgain3:{ 110:5, 112:5, 111:5 },
	AdAgain4:{ 113:5, 114:5, 115:5, 116:5 },
	skill1:{ 200:5, 202:5, 201:5 },/* Lv1->2 */
	skill2:{ 203:5, 204:5, 205:5, 206:5 },/* Lv2->3 */
	skill3:{ 210:5, 212:5, 211:5 },/* Lv3->4 */
	skill4:{ 213:5, 214:5, 215:5, 216:5 },/* Lv4->5 */
	skill5:{ 220:5, 222:5, 221:5 },/* Lv5->6 */
	skill6:{ 223:5, 224:5, 225:5, 226:5 },/* Lv6->7 */
	skill7:{ 501:5 },/* Lv7->8 */
	skill8:{ 501:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:60, text:"オリオン",
	text2:"Orion",
	value:4, kind:1, event:0,
	icon1:200, icon2:107, icon3:204,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	sEXmale:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 501:3 },
	AdAgain3:{ 111:5, 403:8, 500:3 },
	AdAgain4:{ 111:12, 500:6, 404:10 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 403:4 },/* Lv4->5 */
	skill5:{ 221:5, 403:8 },/* Lv5->6 */
	skill6:{ 221:12, 501:2 },/* Lv6->7 */
	skill7:{ 501:4, 303:12 },/* Lv7->8 */
	skill8:{ 303:36, 404:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:61, text:"エリザベート・バートリー\n〔キャスター〕",
	text2:"Elizabeth Bathory\n(Caster)",
	value:3, kind:4, event:1,
	icon1:400, icon2:103, icon3:203,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	dragon:1,
	AdAgain1:{ 600:1 },
	AdAgain2:{ 600:1 },
	AdAgain3:{ 600:1 },
	AdAgain4:{ 600:1 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 401:4 },/* Lv4->5 */
	skill5:{ 224:4, 401:8 },/* Lv5->6 */
	skill6:{ 224:10, 301:12 },/* Lv6->7 */
	skill7:{ 301:24, 302:12 },/* Lv7->8 */
	skill8:{ 302:36, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:62, text:"玉藻の前",
	text2:"Tamamo no Mae",
	value:4, kind:4, event:0,
	icon1:800, icon2:200, icon3:102,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalEvil:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 401:8 },
	AdAgain3:{ 114:5, 301:29, 501:2 },
	AdAgain4:{ 114:12, 501:4, 406:12 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 301:15 },/* Lv4->5 */
	skill5:{ 224:5, 301:29 },/* Lv5->6 */
	skill6:{ 224:12, 401:5 },/* Lv6->7 */
	skill7:{ 401:10, 400:8 },/* Lv7->8 */
	skill8:{ 400:22, 406:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:63, text:"ダビデ",
	text2:"David",
	value:2, kind:1, event:0,
	icon1:200, icon2:303, icon3:105,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteSky:1,
	davinci:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 303:10 },
	AdAgain3:{ 111:4, 407:7, 501:2 },
	AdAgain4:{ 111:8, 501:3, 402:8 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:8 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:8, 407:4 },/* Lv4->5 */
	skill5:{ 221:4, 407:7 },/* Lv5->6 */
	skill6:{ 221:8, 303:7 },/* Lv6->7 */
	skill7:{ 303:13, 300:12 },/* Lv7->8 */
	skill8:{ 300:36, 402:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:64, text:"ヘクトール",
	text2:"Hector",
	value:2, kind:2, event:0,
	icon1:106, icon2:800, icon3:303,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	riding:1, davinci:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 408:5 },
	AdAgain3:{ 112:4, 300:20, 400:4 },
	AdAgain4:{ 112:8, 400:8, 404:7 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 300:10 },/* Lv4->5 */
	skill5:{ 222:4, 300:20 },/* Lv5->6 */
	skill6:{ 222:8, 408:4 },/* Lv6->7 */
	skill7:{ 408:7, 402:4 },/* Lv7->8 */
	skill8:{ 402:12, 404:13 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:65, text:"フランシス・ドレイク",
	text2:"Francis Drake",
	value:4, kind:3, event:0,
	icon1:106, icon2:601, icon3:600,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteStar:1,
	riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 301:22 },
	AdAgain3:{ 113:5, 302:24, 502:2 },
	AdAgain4:{ 113:12, 502:4, 501:5 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 302:12 },/* Lv4->5 */
	skill5:{ 223:5, 302:24 },/* Lv5->6 */
	skill6:{ 223:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 401:6 },/* Lv7->8 */
	skill8:{ 401:18, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:66, text:"アン・ボニー\n＆メアリー・リード",
	text2:"Anne Bonny\n& Mary Read",
	value:3, kind:3, event:0,
	icon1:401, icon2:108, icon3:109,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 407:6 },
	AdAgain3:{ 113:4, 401:8, 301:12 },
	AdAgain4:{ 113:10, 301:24, 500:6 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 401:4 },/* Lv4->5 */
	skill5:{ 223:4, 401:8 },/* Lv5->6 */
	skill6:{ 223:10, 407:4 },/* Lv6->7 */
	skill7:{ 407:8, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 500:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:67, text:"メディア\n〔リリィ〕",
	text2:"Medea\n(Lily)",
	value:3, kind:4, event:0,
	icon1:600, icon2:303, icon3:300,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 303:12 },
	AdAgain3:{ 114:4, 401:8, 404:4 },
	AdAgain4:{ 114:10, 404:7, 406:10 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 401:4 },/* Lv4->5 */
	skill5:{ 224:4, 401:8 },/* Lv5->6 */
	skill6:{ 224:10, 303:8 },/* Lv6->7 */
	skill7:{ 303:16, 501:2 },/* Lv7->8 */
	skill8:{ 501:6, 406:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:68, text:"沖田総司",
	text2:"Okita Souji",
	value:4, kind:0, event:0,
	icon1:101, icon2:109, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	riding:1, saberface:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 303:15 },
	AdAgain3:{ 110:5, 302:24, 405:5 },
	AdAgain4:{ 110:12, 405:10, 404:10 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12, 302:12 },/* Lv4->5 */
	skill5:{ 220:5, 302:24 },/* Lv5->6 */
	skill6:{ 220:12, 303:10 },/* Lv6->7 */
	skill7:{ 303:20, 500:4 },/* Lv7->8 */
	skill8:{ 500:11, 404:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:69, text:"織田信長",
	text2:"Oda Nobunaga",
	value:3, kind:1, event:1,
	icon1:601, icon2:107, icon3:108,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	npEXriding:1, sEXdivine:1,
	AdAgain1:{ 601:1 },
	AdAgain2:{ 601:1 },
	AdAgain3:{ 601:1 },
	AdAgain4:{ 601:1 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 301:12 },/* Lv4->5 */
	skill5:{ 221:4, 301:24 },/* Lv5->6 */
	skill6:{ 221:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 500:3 },/* Lv7->8 */
	skill8:{ 500:9, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:70, text:"スカサハ",
	text2:"Scathach",
	value:4, kind:2, event:0,
	icon1:204, icon2:101, icon3:107,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	sEXdivine:1, sEXundead:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 301:22 },
	AdAgain3:{ 112:5, 303:20, 500:3 },
	AdAgain4:{ 112:12, 500:6, 501:5 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 303:10 },/* Lv4->5 */
	skill5:{ 222:5, 303:20 },/* Lv5->6 */
	skill6:{ 222:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 404:5 },/* Lv7->8 */
	skill8:{ 404:15, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:71, text:"ディルムッド・オディナ",
	text2:"Diarmuid\nUa Duibhne",
	value:2, kind:2, event:0,
	icon1:204, icon2:700, icon3:401,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteEarth:1,
	love:1, davinci:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 400:6 },
	AdAgain3:{ 112:4, 404:6, 403:3 },
	AdAgain4:{ 112:8, 403:6, 303:16 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 404:3 },/* Lv4->5 */
	skill5:{ 222:4, 404:6 },/* Lv5->6 */
	skill6:{ 222:8, 400:4 },/* Lv6->7 */
	skill7:{ 400:8, 300:12 },/* Lv7->8 */
	skill8:{ 300:36, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:72, text:"フェルグス・マック・ロイ",
	text2:"Fergus Mac Roich",
	value:2, kind:0, event:0,
	icon1:105, icon2:200, icon3:204,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteEarth:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:8, 300:15 },
	AdAgain3:{ 110:4, 402:7, 501:2 },
	AdAgain4:{ 110:8, 501:3, 408:8 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:8 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:8, 402:4 },/* Lv4->5 */
	skill5:{ 220:4, 402:7 },/* Lv5->6 */
	skill6:{ 220:8, 300:10 },/* Lv6->7 */
	skill7:{ 300:20, 400:5 },/* Lv7->8 */
	skill8:{ 400:15, 408:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:73, text:"アルトリア・ペンドラゴン\n〔サンタオルタ〕",
	text2:"Artoria Pendragon\n(Santa Alter)",
	value:3, kind:3, event:1,
	icon1:300, icon2:402, icon3:103,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	dragon:1, riding:1, saberface:1, arthur:1,
	AdAgain1:{ 602:1 },
	AdAgain2:{ 602:1 },
	AdAgain3:{ 602:1 },
	AdAgain4:{ 602:1 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 302:10 },/* Lv4->5 */
	skill5:{ 223:4, 302:20 },/* Lv5->6 */
	skill6:{ 223:10, 408:4 },/* Lv6->7 */
	skill7:{ 408:8, 502:2 },/* Lv7->8 */
	skill8:{ 502:6, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:74, text:"ナーサリー・ライム",
	text2:"Nursery Rhyme",
	value:3, kind:4, event:0,
	icon1:108, icon2:200, icon3:600,
	nptypeA:1, npeffectA:1,
	policy:0, personality:0, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 400:8 },
	AdAgain3:{ 114:4, 401:8, 406:4 },
	AdAgain4:{ 114:10, 406:8, 404:8 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 401:4 },/* Lv4->5 */
	skill5:{ 224:4, 401:8 },/* Lv5->6 */
	skill6:{ 224:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 407:5 },/* Lv7->8 */
	skill8:{ 407:15, 404:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:75, text:"ジャック・ザ・リッパー",
	text2:"Jack the Ripper",
	value:4, kind:5, event:0,
	icon1:204, icon2:805, icon3:300,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	npEXfemale:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 301:22 },
	AdAgain3:{ 115:5, 303:20, 405:5 },
	AdAgain4:{ 115:12, 405:10, 500:8 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 303:10 },/* Lv4->5 */
	skill5:{ 225:5, 303:20 },/* Lv5->6 */
	skill6:{ 225:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 501:3 },/* Lv7->8 */
	skill8:{ 501:8, 500:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:76, text:"モードレッド",
	text2:"Mordred",
	value:4, kind:0, event:0,
	icon1:103, icon2:402, icon3:200,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	dragon:1, riding:1, saberface:1,
	npEXarthur:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 302:18 },
	AdAgain3:{ 110:5, 402:10, 501:2 },
	AdAgain4:{ 110:12, 501:4, 502:5 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12, 402:5 },/* Lv4->5 */
	skill5:{ 220:5, 402:10 },/* Lv5->6 */
	skill6:{ 220:12, 302:12 },/* Lv6->7 */
	skill7:{ 302:24, 500:4 },/* Lv7->8 */
	skill8:{ 500:11, 502:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:77, text:"ニコラ・テスラ",
	text2:"Nikola Tesla",
	value:4, kind:1, event:0,
	icon1:601, icon2:203, icon3:600,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteStar:1,
	love:1, davinci:1,
	npEXskyearth:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 303:15 },
	AdAgain3:{ 111:5, 406:10, 405:5 },
	AdAgain4:{ 111:12, 405:10, 401:12 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 406:5 },/* Lv4->5 */
	skill5:{ 221:5, 406:10 },/* Lv5->6 */
	skill6:{ 221:12, 303:10 },/* Lv6->7 */
	skill7:{ 303:20, 404:5 },/* Lv7->8 */
	skill8:{ 404:15, 401:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:78, text:"アルトリア・ペンドラゴン\n〔オルタ〕",
	text2:"Artoria Pendragon\n(Alter Lancer)",
	value:3, kind:2, event:0,
	icon1:103, icon2:109, icon3:105,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	dragon:1, riding:1, saberface:1, arthur:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 408:6 },
	AdAgain3:{ 112:4, 404:7, 502:2 },
	AdAgain4:{ 112:10, 502:4, 501:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 404:4 },/* Lv4->5 */
	skill5:{ 222:4, 404:7 },/* Lv5->6 */
	skill6:{ 222:10, 408:4 },/* Lv6->7 */
	skill7:{ 408:8, 302:12 },/* Lv7->8 */
	skill8:{ 302:36, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:79, text:"ヴァン・ホーエンハイム・\nパラケルスス",
	text2:"Paracelsus\nVan Hohenheim",
	value:2, kind:4, event:0,
	icon1:600, icon2:102, icon3:203,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	love:1, davinci:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 406:5 },
	AdAgain3:{ 114:4, 405:7, 407:4 },
	AdAgain4:{ 114:8, 407:7, 301:24 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 405:4 },/* Lv4->5 */
	skill5:{ 224:4, 405:7 },/* Lv5->6 */
	skill6:{ 224:8, 406:4 },/* Lv6->7 */
	skill7:{ 406:7, 303:8 },/* Lv7->8 */
	skill8:{ 303:24, 301:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:80, text:"チャールズ・バベッジ",
	text2:"Charles Babbage",
	value:2, kind:4, event:0,
	icon1:601, icon2:105, icon3:106,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 405:5 },
	AdAgain3:{ 114:4, 402:7, 406:4 },
	AdAgain4:{ 114:8, 406:7, 303:16 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 402:4 },/* Lv4->5 */
	skill5:{ 224:4, 402:7 },/* Lv5->6 */
	skill6:{ 224:8, 405:4 },/* Lv6->7 */
	skill7:{ 405:7, 401:4 },/* Lv7->8 */
	skill8:{ 401:12, 303:32 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:81, text:"ヘンリー・ジキル\n＆ハイド",
	text2:"Henry Jekyll\n& Hyde",
	value:2, kind:5, event:0,
	icon1:105, icon2:804, icon3:108,
	nptypeB:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	love:1, davinci:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:8, 301:15 },
	AdAgain3:{ 115:4, 303:13, 402:4 },
	AdAgain4:{ 115:8, 402:7, 407:8 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:8 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:8, 303:7 },/* Lv4->5 */
	skill5:{ 225:4, 303:13 },/* Lv5->6 */
	skill6:{ 225:8, 301:10 },/* Lv6->7 */
	skill7:{ 301:20, 501:2 },/* Lv7->8 */
	skill8:{ 501:5, 407:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:82, text:"フランケンシュタイン",
	text2:"Frankenstein",
	value:3, kind:6, event:0,
	icon1:601, icon2:804, icon3:106,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 407:6 },
	AdAgain3:{ 116:4, 301:24, 401:4 },
	AdAgain4:{ 116:10, 401:8, 405:10 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 301:12 },/* Lv4->5 */
	skill5:{ 226:4, 301:24 },/* Lv5->6 */
	skill6:{ 226:10, 407:4 },/* Lv6->7 */
	skill7:{ 407:8, 402:5 },/* Lv7->8 */
	skill8:{ 402:15, 405:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:83, text:"ソロモン",
	text2:"Solomon",
	value:4, kind:4, event:0,
	icon1:0, icon2:0, icon3:0,
	nptype:0, npeffect:0,
	AdAgain1:{ 900:-100000 },
	AdAgain2:{ 900:-300000 },
	AdAgain3:{ 900:-1000000 },
	AdAgain4:{ 900:-3000000 },
	skill1:{ 900:-200000 },/* Lv1->2 */
	skill2:{ 900:-400000 },/* Lv2->3 */
	skill3:{ 900:-1200000 },/* Lv3->4 */
	skill4:{ 900:-1600000 },/* Lv4->5 */
	skill5:{ 900:-4000000 },/* Lv5->6 */
	skill6:{ 900:-5000000 },/* Lv6->7 */
	skill7:{ 900:-10000000 },/* Lv7->8 */
	skill8:{ 900:-12000000 },/* Lv8->9 */
	skill9:{ 900:-20000000 }/* Lv9->10 */
},
{
	id:84, text:"アルジュナ",
	text2:"Arjuna",
	value:4, kind:1, event:0,
	icon1:401, icon2:600, icon3:103,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, davinci:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 300:22 },
	AdAgain3:{ 111:5, 404:8, 403:4 },
	AdAgain4:{ 111:12, 403:8, 501:5 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 404:4 },/* Lv4->5 */
	skill5:{ 221:5, 404:8 },/* Lv5->6 */
	skill6:{ 221:12, 300:15 },/* Lv6->7 */
	skill7:{ 300:29, 400:8 },/* Lv7->8 */
	skill8:{ 400:22, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:85, text:"カルナ",
	text2:"Karna",
	value:4, kind:2, event:0,
	icon1:805, icon2:103, icon3:600,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1, love:1, davinci:1,
	npEXdivine:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 402:8 },
	AdAgain3:{ 112:5, 405:10, 404:4 },
	AdAgain4:{ 112:12, 404:8, 501:5 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 405:5 },/* Lv4->5 */
	skill5:{ 222:5, 405:10 },/* Lv5->6 */
	skill6:{ 222:12, 402:5 },/* Lv6->7 */
	skill7:{ 402:10, 300:18 },/* Lv7->8 */
	skill8:{ 300:54, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:86, text:"謎のヒロインＸ",
	text2:"Mysterious Heroine\nX",
	value:4, kind:5, event:0,
	icon1:804, icon2:402, icon3:401,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteStar:1,
	dragon:1, riding:1, saberface:1, arthur:1,
	npEXface:1, sEXsaber:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 302:18 },
	AdAgain3:{ 115:5, 404:8, 502:2 },
	AdAgain4:{ 115:12, 502:4, 300:36 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 404:4 },/* Lv4->5 */
	skill5:{ 225:5, 404:8 },/* Lv5->6 */
	skill6:{ 225:12, 302:12 },/* Lv6->7 */
	skill7:{ 302:24, 303:12 },/* Lv7->8 */
	skill8:{ 303:36, 402:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:87, text:"フィン・マックール",
	text2:"Fionn mac Cumhaill",
	value:3, kind:2, event:0,
	icon1:401, icon2:204, icon3:102,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, davinci:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 404:5 },
	AdAgain3:{ 112:4, 301:24, 500:3 },
	AdAgain4:{ 112:10, 500:5, 303:20 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 301:12 },/* Lv4->5 */
	skill5:{ 222:4, 301:24 },/* Lv5->6 */
	skill6:{ 222:10, 404:4 },/* Lv6->7 */
	skill7:{ 404:7, 402:5 },/* Lv7->8 */
	skill8:{ 402:15, 403:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:88, text:"ブリュンヒルデ",
	text2:"Brynhildr",
	value:4, kind:2, event:0,
	icon1:103, icon2:702, icon3:109,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1,
	npEXlove:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 501:3 },
	AdAgain3:{ 112:5, 400:12, 300:15 },
	AdAgain4:{ 112:12, 300:29, 401:12 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 400:6 },/* Lv4->5 */
	skill5:{ 222:5, 400:12 },/* Lv5->6 */
	skill6:{ 222:12, 501:2 },/* Lv6->7 */
	skill7:{ 501:4, 404:5 },/* Lv7->8 */
	skill8:{ 404:15, 500:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:89, text:"ベオウルフ",
	text2:"Beowulf",
	value:3, kind:6, event:0,
	icon1:105, icon2:402, icon3:203,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	love:1, davinci:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 300:18 },
	AdAgain3:{ 116:4, 402:8, 502:2 },
	AdAgain4:{ 116:10, 502:4, 301:30 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 402:4 },/* Lv4->5 */
	skill5:{ 226:4, 402:8 },/* Lv5->6 */
	skill6:{ 226:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 400:6 },/* Lv7->8 */
	skill8:{ 400:18, 302:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:90, text:"ネロ・クラウディウス\n〔ブライド〕",
	text2:"Nero Claudius\n(Bride)",
	value:4, kind:0, event:0,
	icon1:601, icon2:105, icon3:300,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalBride:1, attrbuteMan:1,
	roma:1, riding:1, saberface:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 402:8 },
	AdAgain3:{ 110:5, 401:10, 404:4 },
	AdAgain4:{ 110:12, 404:8, 400:15 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12, 401:5 },/* Lv4->5 */
	skill5:{ 220:5, 401:10 },/* Lv5->6 */
	skill6:{ 220:12, 402:5 },/* Lv6->7 */
	skill7:{ 402:10, 403:5 },/* Lv7->8 */
	skill8:{ 403:15, 405:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:91, text:"両儀式\n〔セイバー〕",
	text2:"Ryougi Shiki\n(Saber)",
	value:4, kind:0, event:0,
	icon1:906, icon2:105, icon3:304,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 303:15 },
	AdAgain3:{ 110:5, 404:8, 500:3 },
	AdAgain4:{ 110:12, 500:6, 501:5 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12, 404:4 },/* Lv4->5 */
	skill5:{ 220:5, 404:8 },/* Lv5->6 */
	skill6:{ 220:12, 303:10 },/* Lv6->7 */
	skill7:{ 303:20, 402:6 },/* Lv7->8 */
	skill8:{ 402:18, 401:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:92, text:"両儀式\n〔アサシン〕",
	text2:"Ryougi Shiki\n(Assassin)",
	value:3, kind:5, event:1,
	icon1:906, icon2:204, icon3:304,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 603:1 },
	AdAgain2:{ 603:1 },
	AdAgain3:{ 603:1 },
	AdAgain4:{ 603:1 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 301:12 },/* Lv4->5 */
	skill5:{ 225:4, 301:24 },/* Lv5->6 */
	skill6:{ 225:10, 500:3 },/* Lv6->7 */
	skill7:{ 500:5, 405:5 },/* Lv7->8 */
	skill8:{ 405:15, 407:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:93, text:"天草四郎",
	text2:"Amakusa Shirou",
	value:4, kind:7, event:0,
	icon1:400, icon2:602, icon3:804,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 103:5, 104:5, 105:5 },
	AdAgain2:{ 100:5, 101:5, 103:5, 106:5 },
	AdAgain3:{ 113:5, 114:5, 115:5 },
	AdAgain4:{ 110:5, 111:5, 112:5, 116:5 },
	skill1:{ 203:5, 204:5, 205:5 },/* Lv1->2 */
	skill2:{ 200:5, 202:5, 201:5, 206:5 },/* Lv2->3 */
	skill3:{ 213:5, 214:5, 215:5 },/* Lv3->4 */
	skill4:{ 210:5, 212:5, 211:5, 216:5 },/* Lv4->5 */
	skill5:{ 223:5, 224:5, 225:5 },/* Lv5->6 */
	skill6:{ 220:5, 222:5, 221:5, 226:5 },/* Lv6->7 */
	skill7:{ 501:5 },/* Lv7->8 */
	skill8:{ 501:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:94, text:"アストルフォ",
	text2:"Astolfo",
	value:3, kind:3, event:0,
	icon1:105, icon2:804, icon3:400,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	riding:1, davinci:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 408:6 },
	AdAgain3:{ 113:4, 402:8, 404:4 },
	AdAgain4:{ 113:10, 404:7, 500:6 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 402:4 },/* Lv4->5 */
	skill5:{ 223:4, 402:8 },/* Lv5->6 */
	skill6:{ 223:10, 408:4 },/* Lv6->7 */
	skill7:{ 408:8, 406:5 },/* Lv7->8 */
	skill8:{ 406:15, 400:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:95, text:"子ギル",
	text2:"Young Gil",
	value:2, kind:1, event:0,
	icon1:105, icon2:803, icon3:601,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1, davinci:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 400:6 },
	AdAgain3:{ 111:4, 403:6, 502:2 },
	AdAgain4:{ 111:8, 502:3, 300:24 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:8 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:8, 403:3 },/* Lv4->5 */
	skill5:{ 221:4, 403:6 },/* Lv5->6 */
	skill6:{ 221:8, 400:4 },/* Lv6->7 */
	skill7:{ 400:8, 303:8 },/* Lv7->8 */
	skill8:{ 303:24, 404:13 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:96, text:"巌窟王\nエドモン・ダンテス",
	text2:"Edmond Dantes",
	value:4, kind:8, event:0,
	icon1:502, icon2:601, icon3:800,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 301:10, 402:10 },
	AdAgain2:{ 403:10, 406:10 },
	AdAgain3:{ 303:10, 405:10 },
	AdAgain4:{ 404:10, 501:10 },
	skill1:{ 300:10 },/* Lv1->2 */
	skill2:{ 400:10 },/* Lv2->3 */
	skill3:{ 302:12 },/* Lv3->4 */
	skill4:{ 401:12 },/* Lv4->5 */
	skill5:{ 408:12 },/* Lv5->6 */
	skill6:{ 407:15 },/* Lv6->7 */
	skill7:{ 500:15 },/* Lv7->8 */
	skill8:{ 502:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:97, text:"ナイチンゲール",
	text2:"Nightingale",
	value:4, kind:6, event:0,
	icon1:300, icon2:107, icon3:103,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	sEXhumanoid:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 404:6 },
	AdAgain3:{ 116:5, 400:12, 500:3 },
	AdAgain4:{ 116:12, 500:6, 407:12 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12, 400:6 },/* Lv4->5 */
	skill5:{ 226:5, 400:12 },/* Lv5->6 */
	skill6:{ 226:12, 404:4 },/* Lv6->7 */
	skill7:{ 404:8, 505:4 },/* Lv7->8 */
	skill8:{ 505:11, 401:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:98, text:"クー・フーリン\n〔オルタ〕",
	text2:"Cu Chulainn\n(Alter)",
	value:4, kind:6, event:0,
	icon1:702, icon2:204, icon3:203,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, love:1, davinci:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 301:22 },
	AdAgain3:{ 116:5, 500:6, 501:2 },
	AdAgain4:{ 116:12, 501:4, 505:8 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12, 500:3 },/* Lv4->5 */
	skill5:{ 226:5, 500:6 },/* Lv5->6 */
	skill6:{ 226:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 403:5 },/* Lv7->8 */
	skill8:{ 403:15, 303:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:99, text:"女王メイヴ",
	text2:"Medb",
	value:4, kind:3, event:0,
	icon1:302, icon2:105, icon3:803,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	riding:1,
	npEXmale:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 403:6 },
	AdAgain3:{ 113:5, 404:8, 408:5 },
	AdAgain4:{ 113:12, 408:10, 504:8 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 404:4 },/* Lv4->5 */
	skill5:{ 223:5, 404:8 },/* Lv5->6 */
	skill6:{ 223:12, 403:4 },/* Lv6->7 */
	skill7:{ 403:8, 401:6 },/* Lv7->8 */
	skill8:{ 401:18, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:100, text:"エレナ・ブラヴァツキー",
	text2:"Helena Blavatsky",
	value:3, kind:4, event:0,
	icon1:600, icon2:400, icon3:104,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 303:12 },
	AdAgain3:{ 114:4, 401:8, 407:4 },
	AdAgain4:{ 114:10, 407:8, 406:10 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 401:4 },/* Lv4->5 */
	skill5:{ 224:4, 401:8 },/* Lv5->6 */
	skill6:{ 224:10, 303:8 },/* Lv6->7 */
	skill7:{ 303:16, 506:3 },/* Lv7->8 */
	skill8:{ 506:9, 404:16 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:101, text:"ラーマ",
	text2:"Rama",
	value:3, kind:0, event:0,
	icon1:109, icon2:105, icon3:203,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1, love:1, davinci:1,
	npEXdemonic:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 400:8 },
	AdAgain3:{ 110:4, 501:4, 402:4 },
	AdAgain4:{ 110:10, 402:8, 503:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 501:2 },/* Lv4->5 */
	skill5:{ 220:4, 501:4 },/* Lv5->6 */
	skill6:{ 220:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 500:3 },/* Lv7->8 */
	skill8:{ 500:9, 301:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:102, text:"神槍 李書文",
	text2:"Li Shuwen\n(Lancer)",
	value:3, kind:2, event:0,
	icon1:500, icon2:204, icon3:502,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 302:15 },
	AdAgain3:{ 112:4, 402:8, 500:3 },
	AdAgain4:{ 112:10, 500:5, 502:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 402:4 },/* Lv4->5 */
	skill5:{ 222:4, 402:8 },/* Lv5->6 */
	skill6:{ 222:10, 302:10 },/* Lv6->7 */
	skill7:{ 302:20, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 504:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:103, text:"トーマス・エジソン",
	text2:"Thomas Edison",
	value:3, kind:4, event:0,
	icon1:200, icon2:400, icon3:905,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 406:6 },
	AdAgain3:{ 114:4, 300:24, 405:4 },
	AdAgain4:{ 114:10, 405:8, 506:6 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 300:12 },/* Lv4->5 */
	skill5:{ 224:4, 300:24 },/* Lv5->6 */
	skill6:{ 224:10, 406:4 },/* Lv6->7 */
	skill7:{ 406:8, 501:2 },/* Lv7->8 */
	skill8:{ 501:6, 500:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:104, text:"ジェロニモ",
	text2:"Geronimo",
	value:2, kind:4, event:0,
	icon1:103, icon2:102, icon3:101,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	love:1, davinci:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 300:15 },
	AdAgain3:{ 114:4, 400:8, 401:4 },
	AdAgain4:{ 114:8, 401:7, 402:8 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 400:4 },/* Lv4->5 */
	skill5:{ 224:4, 400:8 },/* Lv5->6 */
	skill6:{ 224:8, 300:10 },/* Lv6->7 */
	skill7:{ 300:20, 301:12 },/* Lv7->8 */
	skill8:{ 301:36, 503:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:105, text:"ビリー・ザ・キッド",
	text2:"Billy the Kid",
	value:2, kind:1, event:0,
	icon1:108, icon2:600, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	riding:1, davinci:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 408:5 },
	AdAgain3:{ 111:4, 301:20, 404:3 },
	AdAgain4:{ 111:8, 404:6, 500:5 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:8 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:8, 301:10 },/* Lv4->5 */
	skill5:{ 221:4, 301:20 },/* Lv5->6 */
	skill6:{ 221:8, 408:4 },/* Lv6->7 */
	skill7:{ 408:7, 303:8 },/* Lv7->8 */
	skill8:{ 303:24, 505:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:106, text:"ジャンヌ・ダルク\n〔オルタ〕",
	text2:"Jeanne d'Arc\n(Alter)",
	value:4, kind:8, event:0,
	icon1:108, icon2:105, icon3:103,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	saberface:1,
	AdAgain1:{ 300:10, 303:10 },
	AdAgain2:{ 402:10, 405:10 },
	AdAgain3:{ 404:10, 500:10 },
	AdAgain4:{ 505:10, 501:10 },
	skill1:{ 302:10 },/* Lv1->2 */
	skill2:{ 301:10 },/* Lv2->3 */
	skill3:{ 400:12 },/* Lv3->4 */
	skill4:{ 406:12 },/* Lv4->5 */
	skill5:{ 403:12 },/* Lv5->6 */
	skill6:{ 401:15 },/* Lv6->7 */
	skill7:{ 504:15 },/* Lv7->8 */
	skill8:{ 501:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:107, text:"アンリマユ",
	text2:"Angra Mainyu",
	value:0, kind:8, event:0,
	icon1:702, icon2:800, icon3:101,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 300:10, 301:10, 900:5000 },
	AdAgain2:{ 303:10, 506:10, 900:15000 },
	AdAgain3:{ 405:10, 505:10, 900:60000 },
	AdAgain4:{ 503:10, 502:10, 900:150000 },
	skill1:{ 300:10 },/* Lv1->2 */
	skill2:{ 303:10 },/* Lv2->3 */
	skill3:{ 301:12 },/* Lv3->4 */
	skill4:{ 407:12 },/* Lv4->5 */
	skill5:{ 401:12 },/* Lv5->6 */
	skill6:{ 405:15 },/* Lv6->7 */
	skill7:{ 505:15 },/* Lv7->8 */
	skill8:{ 503:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:108, text:"イスカンダル",
	text2:"Iskandar",
	value:4, kind:3, event:0,
	icon1:105, icon2:106, icon3:103,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	divinity:1, riding:1, love:1, davinci:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 408:8 },
	AdAgain3:{ 113:5, 300:29, 402:5 },
	AdAgain4:{ 113:12, 402:10, 504:8 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 300:15 },/* Lv4->5 */
	skill5:{ 223:5, 300:29 },/* Lv5->6 */
	skill6:{ 223:12, 408:5 },/* Lv6->7 */
	skill7:{ 408:10, 400:8 },/* Lv7->8 */
	skill8:{ 400:22, 404:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:109, text:"エミヤ\n〔アサシン〕",
	text2:"EMIYA\n(Assassin)",
	value:3, kind:5, event:0,
	icon1:102, icon2:502, icon3:206,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	love:1, davinci:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 300:18 },
	AdAgain3:{ 115:4, 301:24, 303:8 },
	AdAgain4:{ 115:10, 303:16, 505:6 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 301:12 },/* Lv4->5 */
	skill5:{ 225:4, 301:24 },/* Lv5->6 */
	skill6:{ 225:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 407:5 },/* Lv7->8 */
	skill8:{ 407:15, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:110, text:"百の貌のハサン",
	text2:"Hundred-Faced\nHassan",
	value:2, kind:5, event:0,
	icon1:601, icon2:104, icon3:300,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:8, 303:10 },
	AdAgain3:{ 115:4, 402:7, 403:3 },
	AdAgain4:{ 115:8, 403:6, 506:5 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:8 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:8, 402:4 },/* Lv4->5 */
	skill5:{ 225:4, 402:7 },/* Lv5->6 */
	skill6:{ 225:8, 303:7 },/* Lv6->7 */
	skill7:{ 303:13, 301:12 },/* Lv7->8 */
	skill8:{ 301:36, 500:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:111, text:"アイリスフィール\n〔天の衣〕",
	text2:"Irisviel\n(Dress of Heaven)",
	value:3, kind:4, event:1,
	icon1:301, icon2:205, icon3:300,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1, 
	AdAgain1:{ 604:1 },
	AdAgain2:{ 604:1 },
	AdAgain3:{ 604:1 },
	AdAgain4:{ 604:1 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 400:5 },/* Lv4->5 */
	skill5:{ 224:4, 400:10 },/* Lv5->6 */
	skill6:{ 224:10, 407:4 },/* Lv6->7 */
	skill7:{ 407:8, 404:4 },/* Lv7->8 */
	skill8:{ 404:12, 503:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:112, text:"酒呑童子",
	text2:"Shuten Douji",
	value:4, kind:5, event:0,
	icon1:803, icon2:105, icon3:203,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, dragon:1, devilish:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 301:22 },
	AdAgain3:{ 115:5, 403:8, 401:5 },
	AdAgain4:{ 115:12, 401:10, 501:5 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 403:4 },/* Lv4->5 */
	skill5:{ 225:5, 403:8 },/* Lv5->6 */
	skill6:{ 225:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 500:4 },/* Lv7->8 */
	skill8:{ 500:11, 503:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:113, text:"玄奘三蔵",
	text2:"Xuanzang",
	value:4, kind:4, event:0,
	icon1:600, icon2:206, icon3:601,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	divinity:1, 
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 400:9 },
	AdAgain3:{ 114:5, 402:10, 404:4 },
	AdAgain4:{ 114:12, 404:8, 503:5 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 402:5 },/* Lv4->5 */
	skill5:{ 224:5, 402:10 },/* Lv5->6 */
	skill6:{ 224:12, 400:6 },/* Lv6->7 */
	skill7:{ 400:12, 408:6 },/* Lv7->8 */
	skill8:{ 408:18, 406:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:114, text:"源頼光",
	text2:"Minamoto no\nYorimitsu",
	value:4, kind:6, event:0,
	icon1:109, icon2:103, icon3:107,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1,
	sEXdemonic:1, sEXskyearth:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 500:5 },
	AdAgain3:{ 116:5, 301:29, 505:3 },
	AdAgain4:{ 116:12, 505:6, 502:5 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12, 301:15 },/* Lv4->5 */
	skill5:{ 226:5, 301:29 },/* Lv5->6 */
	skill6:{ 226:12, 500:3 },/* Lv6->7 */
	skill7:{ 500:6, 402:6 },/* Lv7->8 */
	skill8:{ 402:18, 503:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:115, text:"坂田金時\n〔ライダー〕",
	text2:"Sakata Kintoki\n(Rider)",
	value:3, kind:3, event:1,
	icon1:101, icon2:600, icon3:305,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	divinity:1, love:1, davinci:1,
	AdAgain1:{ 605:1 },
	AdAgain2:{ 605:1 },
	AdAgain3:{ 605:1 },
	AdAgain4:{ 605:1 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 402:4 },/* Lv4->5 */
	skill5:{ 223:4, 402:8 },/* Lv5->6 */
	skill6:{ 223:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 408:5 },/* Lv7->8 */
	skill8:{ 408:15, 504:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:116, text:"茨木童子",
	text2:"Ibaraki Douji",
	value:3, kind:6, event:0,
	icon1:105, icon2:303, icon3:200,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	devilish:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 402:6 },
	AdAgain3:{ 116:4, 500:5, 404:4 },
	AdAgain4:{ 116:10, 404:7, 501:4 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 500:3 },/* Lv4->5 */
	skill5:{ 226:4, 500:5 },/* Lv5->6 */
	skill6:{ 226:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 505:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:117, text:"風魔小太郎",
	text2:"Fuuma Kotarou",
	value:2, kind:5, event:0,
	icon1:700, icon2:204, icon3:801,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	davinci:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:8, 301:15 },
	AdAgain3:{ 115:4, 303:13, 402:4 },
	AdAgain4:{ 115:8, 402:7, 506:5 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:8 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:8, 303:7 },/* Lv4->5 */
	skill5:{ 225:4, 303:13 },/* Lv5->6 */
	skill6:{ 225:8, 301:10 },/* Lv6->7 */
	skill7:{ 301:20, 400:5 },/* Lv7->8 */
	skill8:{ 400:15, 500:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:118, text:"オジマンディアス",
	text2:"Ramesses II",
	value:4, kind:3, event:0,
	icon1:105, icon2:300, icon3:600,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, riding:1, love:1, davinci:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 304:22 },
	AdAgain3:{ 113:5, 403:8, 501:2 },
	AdAgain4:{ 113:12, 501:4, 508:5 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 403:4 },/* Lv4->5 */
	skill5:{ 223:5, 403:8 },/* Lv5->6 */
	skill6:{ 223:12, 304:15 },/* Lv6->7 */
	skill7:{ 304:29, 406:6 },/* Lv7->8 */
	skill8:{ 406:18, 507:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:119, text:"アルトリア・ペンドラゴン",
	text2:"Artoria Pendragon\n(Lancer)",
	value:4, kind:2, event:0,
	icon1:103, icon2:105, icon3:600,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	dragon:1, riding:1, saberface:1, arthur:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 302:18 },
	AdAgain3:{ 112:5, 409:20, 504:3 },
	AdAgain4:{ 112:12, 504:6, 502:5 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 409:10 },/* Lv4->5 */
	skill5:{ 222:5, 409:20 },/* Lv5->6 */
	skill6:{ 222:12, 302:12 },/* Lv6->7 */
	skill7:{ 302:24, 408:6 },/* Lv7->8 */
	skill8:{ 408:18, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:120, text:"ニトクリス",
	text2:"Nitocris",
	value:3, kind:4, event:0,
	icon1:900, icon2:600, icon3:203,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 406:6 },
	AdAgain3:{ 114:4, 304:24, 508:2 },
	AdAgain4:{ 114:10, 508:4, 507:6 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 304:12 },/* Lv4->5 */
	skill5:{ 224:4, 304:24 },/* Lv5->6 */
	skill6:{ 224:10, 406:4 },/* Lv6->7 */
	skill7:{ 406:8, 501:2 },/* Lv7->8 */
	skill8:{ 501:6, 301:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:121, text:"ランスロット",
	text2:"Lancelot\n(Saber)",
	value:3, kind:0, event:0,
	icon1:600, icon2:109, icon3:400,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 405:6 },
	AdAgain3:{ 110:4, 409:16, 302:10 },
	AdAgain4:{ 110:10, 302:20, 502:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 409:8 },/* Lv4->5 */
	skill5:{ 220:4, 409:16 },/* Lv5->6 */
	skill6:{ 220:10, 405:4 },/* Lv6->7 */
	skill7:{ 405:8, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 505:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:122, text:"トリスタン",
	text2:"Tristan",
	value:3, kind:1, event:0,
	icon1:303, icon2:600, icon3:805,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	davinci:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 409:12 },
	AdAgain3:{ 111:4, 404:7, 406:4 },
	AdAgain4:{ 111:10, 406:8, 505:6 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 404:4 },/* Lv4->5 */
	skill5:{ 221:4, 404:7 },/* Lv5->6 */
	skill6:{ 221:10, 409:8 },/* Lv6->7 */
	skill7:{ 409:16, 401:5 },/* Lv7->8 */
	skill8:{ 401:15, 304:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:123, text:"ガウェイン",
	text2:"Gawain",
	value:3, kind:0, event:0,
	icon1:105, icon2:105, icon3:600,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 402:6 },
	AdAgain3:{ 110:4, 502:4, 409:8 },
	AdAgain4:{ 110:10, 409:16, 300:30 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 502:2 },/* Lv4->5 */
	skill5:{ 220:4, 502:4 },/* Lv5->6 */
	skill6:{ 220:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 302:12 },/* Lv7->8 */
	skill8:{ 302:36, 503:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:124, text:"静謐のハサン",
	text2:"Hassan\nof Serenity",
	value:2, kind:5, event:0,
	icon1:702, icon2:907, icon3:900,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:8, 301:15 },
	AdAgain3:{ 115:4, 304:20, 505:2 },
	AdAgain4:{ 115:8, 505:4, 506:5 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:8 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:8, 304:10 },/* Lv4->5 */
	skill5:{ 225:4, 304:20 },/* Lv5->6 */
	skill6:{ 225:8, 301:10 },/* Lv6->7 */
	skill7:{ 301:20, 303:8 },/* Lv7->8 */
	skill8:{ 303:24, 507:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:125, text:"俵藤太",
	text2:"Tawara Touta",
	value:2, kind:1, event:0,
	icon1:103, icon2:204, icon3:901,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	love:1, davinci:1,
	npEXdemonic:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 400:6 },
	AdAgain3:{ 111:4, 300:20, 404:3 },
	AdAgain4:{ 111:8, 404:6, 503:4 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:8 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:8, 300:10 },/* Lv4->5 */
	skill5:{ 221:4, 300:20 },/* Lv5->6 */
	skill6:{ 221:8, 400:4 },/* Lv6->7 */
	skill7:{ 400:8, 402:4 },/* Lv7->8 */
	skill8:{ 402:12, 508:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:126, text:"ベディヴィエール",
	text2:"Bedivere",
	value:2, kind:0, event:0,
	icon1:106, icon2:600, icon3:200,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteStar:1,
	riding:1, love:1, davinci:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:8, 300:15 },
	AdAgain3:{ 110:4, 303:13, 405:4 },
	AdAgain4:{ 110:8, 405:7, 409:16 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:8 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:8, 303:7 },/* Lv4->5 */
	skill5:{ 220:4, 303:13 },/* Lv5->6 */
	skill6:{ 220:8, 300:10 },/* Lv6->7 */
	skill7:{ 300:20, 304:12 },/* Lv7->8 */
	skill8:{ 304:36, 505:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:127, text:"レオナルド・ダ・ヴィンチ",
	text2:"Leonardo\nDa Vinci",
	value:4, kind:4, event:0,
	icon1:203, icon2:302, icon3:600,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteStar:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 405:8 },
	AdAgain3:{ 114:5, 404:8, 503:2 },
	AdAgain4:{ 114:12, 503:4, 508:5 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 404:4 },/* Lv4->5 */
	skill5:{ 224:5, 404:8 },/* Lv5->6 */
	skill6:{ 224:12, 405:5 },/* Lv6->7 */
	skill7:{ 405:10, 406:6 },/* Lv7->8 */
	skill8:{ 406:18, 506:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:128, text:"玉藻の前\n〔ランサー〕",
	text2:"Tamamo no Mae\n(Lancer)",
	value:4, kind:2, event:0,
	icon1:105, icon2:803, icon3:205,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalSummer:1, attrbuteSky:1,
	divinity:1, riding:1,
	npEXmale:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 404:6 },
	AdAgain3:{ 112:5, 400:12, 504:3 },
	AdAgain4:{ 112:12, 504:6, 410:12 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 400:6 },/* Lv4->5 */
	skill5:{ 222:5, 400:12 },/* Lv5->6 */
	skill6:{ 222:12, 404:4 },/* Lv6->7 */
	skill7:{ 404:8, 500:4 },/* Lv7->8 */
	skill8:{ 500:11, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:129, text:"アルトリア・ペンドラゴン\n〔アーチャー〕",
	text2:"Artoria Pendragon\n(Archer)",
	value:4, kind:1, event:0,
	icon1:102, icon2:300, icon3:105,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	dragon:1, saberface:1, arthur:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 410:8 },
	AdAgain3:{ 111:5, 302:24, 409:10 },
	AdAgain4:{ 111:12, 409:20, 502:5 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 302:12 },/* Lv4->5 */
	skill5:{ 221:5, 302:24 },/* Lv5->6 */
	skill6:{ 221:12, 410:5 },/* Lv6->7 */
	skill7:{ 410:10, 504:4 },/* Lv7->8 */
	skill8:{ 504:11, 503:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:130, text:"マリー・アントワネット\n〔キャスター〕",
	text2:"Marie Antoinette\n(Caster)",
	value:3, kind:4, event:0,
	icon1:105, icon2:400, icon3:205,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 400:8 },
	AdAgain3:{ 114:4, 410:8, 404:4 },
	AdAgain4:{ 114:10, 404:7, 508:4 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 410:4 },/* Lv4->5 */
	skill5:{ 224:4, 410:8 },/* Lv5->6 */
	skill6:{ 224:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 403:4 },/* Lv7->8 */
	skill8:{ 403:12, 405:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:131, text:"アン・ボニー\n＆メアリー・リード",
	text2:"Anne Bonny &\nMary Read (Archer)",
	value:3, kind:1, event:0,
	icon1:105, icon2:109, icon3:105,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 403:5 },
	AdAgain3:{ 111:4, 402:8, 410:4 },
	AdAgain4:{ 111:10, 410:8, 500:6 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 402:4 },/* Lv4->5 */
	skill5:{ 221:4, 402:8 },/* Lv5->6 */
	skill6:{ 221:10, 403:4 },/* Lv6->7 */
	skill7:{ 403:7, 304:15 },/* Lv7->8 */
	skill8:{ 304:45, 506:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:132, text:"モードレッド\n〔ライダー〕",
	text2:"Mordred\n(Rider)",
	value:3, kind:3, event:0,
	icon1:102, icon2:204, icon3:203,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	dragon:1, saberface:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 410:6 },
	AdAgain3:{ 113:4, 409:16, 302:10 },
	AdAgain4:{ 113:10, 302:20, 502:4 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 409:8 },/* Lv4->5 */
	skill5:{ 223:4, 409:16 },/* Lv5->6 */
	skill6:{ 223:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 407:5 },/* Lv7->8 */
	skill8:{ 407:15, 505:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:133, text:"スカサハ\n〔アサシン〕",
	text2:"Scathach\n(Assassin)",
	value:3, kind:5, event:1,
	icon1:206, icon2:300, icon3:502,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	AdAgain1:{ 606:1 },
	AdAgain2:{ 606:1 },
	AdAgain3:{ 606:1 },
	AdAgain4:{ 606:1 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 400:5 },/* Lv4->5 */
	skill5:{ 225:4, 400:10 },/* Lv5->6 */
	skill6:{ 225:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 503:2 },/* Lv7->8 */
	skill8:{ 503:6, 508:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:134, text:"清姫\n〔ランサー〕",
	text2:"Kiyohime\n(Lancer)",
	value:3, kind:2, event:0,
	icon1:702, icon2:103, icon3:701,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	dragon:1, 
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 402:6 },
	AdAgain3:{ 112:4, 410:8, 506:3 },
	AdAgain4:{ 112:10, 506:5, 507:6 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 410:4 },/* Lv4->5 */
	skill5:{ 222:4, 410:8 },/* Lv5->6 */
	skill6:{ 222:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 302:12 },/* Lv7->8 */
	skill8:{ 302:36, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:135, text:"マルタ\n〔ルーラー〕",
	text2:"Saint Martha\n(Ruler)",
	value:3, kind:7, event:0,
	icon1:600, icon2:202, icon3:107,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	sEXdivine:1, sEXundead:1, sEXdemon:1,
	AdAgain1:{ 100:4, 103:4, 106:4 },
	AdAgain2:{ 101:4, 102:4, 104:4, 105:4 },
	AdAgain3:{ 110:4, 113:4, 116:4 },
	AdAgain4:{ 111:4, 112:4, 114:4, 115:4 },
	skill1:{ 200:4, 203:4, 206:4 },/* Lv1->2 */
	skill2:{ 201:4, 202:4, 204:4, 205:4 },/* Lv2->3 */
	skill3:{ 210:4, 213:4, 216:4 },/* Lv3->4 */
	skill4:{ 211:4, 212:4, 214:4, 215:4 },/* Lv4->5 */
	skill5:{ 220:4, 223:4, 226:4 },/* Lv5->6 */
	skill6:{ 221:4, 222:4, 224:4, 225:4 },/* Lv6->7 */
	skill7:{ 505:6 },/* Lv7->8 */
	skill8:{ 502:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:136, text:"イリヤスフィール・フォン・\nアインツベルン",
	text2:"Illyasviel von\nEinzbern",
	value:4, kind:4, event:0,
	icon1:103, icon2:205, icon3:300,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 400:9 },
	AdAgain3:{ 114:5, 406:10, 404:4 },
	AdAgain4:{ 114:12, 404:8, 508:5 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 406:5 },/* Lv4->5 */
	skill5:{ 224:5, 406:10 },/* Lv5->6 */
	skill6:{ 224:12, 400:6 },/* Lv6->7 */
	skill7:{ 400:12, 407:6 },/* Lv7->8 */
	skill8:{ 407:18, 503:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:137, text:"クロエ・フォン・\nアインツベルン",
	text2:"Chloe\nvon Einzbern",
	value:3, kind:1, event:1,
	icon1:204, icon2:104, icon3:600,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	AdAgain1:{ 607:1 },
	AdAgain2:{ 607:1 },
	AdAgain3:{ 607:1 },
	AdAgain4:{ 607:1 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 405:4 },/* Lv4->5 */
	skill5:{ 221:4, 405:8 },/* Lv5->6 */
	skill6:{ 221:10, 407:4 },/* Lv6->7 */
	skill7:{ 407:8, 505:3 },/* Lv7->8 */
	skill8:{ 505:9, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:138, text:"エリザベート・バートリー\n〔ブレイブ〕",
	text2:"Elizabeth Bathory\n(Brave)",
	value:3, kind:0, event:1,
	icon1:205, icon2:103, icon3:107,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	dragon:1,
	AdAgain1:{ 608:1 },
	AdAgain2:{ 608:1 },
	AdAgain3:{ 608:1 },
	AdAgain4:{ 608:1 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 300:12 },/* Lv4->5 */
	skill5:{ 220:4, 300:24 },/* Lv5->6 */
	skill6:{ 220:10, 302:10 },/* Lv6->7 */
	skill7:{ 302:20, 409:10 },/* Lv7->8 */
	skill8:{ 409:30, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:139, text:"クレオパトラ",
	text2:"Cleopatra",
	value:4, kind:5, event:0,
	icon1:300, icon2:602, icon3:205,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	divinity:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 404:6 },
	AdAgain3:{ 115:5, 507:6, 505:3 },
	AdAgain4:{ 115:12, 505:6, 403:10 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 507:3 },/* Lv4->5 */
	skill5:{ 225:5, 507:6 },/* Lv5->6 */
	skill6:{ 225:12, 404:4 },/* Lv6->7 */
	skill7:{ 404:8, 410:6 },/* Lv7->8 */
	skill8:{ 410:18, 508:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:140, text:"ヴラド三世〔EXTRA〕",
	text2:"Vlad III\n(EXTRA)",
	value:3, kind:2, event:0,
	icon1:305, icon2:106, icon3:400,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	davinci:1,
	npEXevil:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 300:18 },
	AdAgain3:{ 112:4, 304:24, 506:3 },
	AdAgain4:{ 112:10, 506:5, 502:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 304:12 },/* Lv4->5 */
	skill5:{ 222:4, 304:24 },/* Lv5->6 */
	skill6:{ 222:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 402:5 },/* Lv7->8 */
	skill8:{ 402:15, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:141, text:"ジャンヌ・ダルク・\nオルタ・サンタ・リリィ",
	text2:"Jeanne d'Arc\n(Alter) (Santa Lily)",
	value:3, kind:2, event:1,
	icon1:300, icon2:600, icon3:103,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 609:1 },
	AdAgain2:{ 609:1 },
	AdAgain3:{ 609:1 },
	AdAgain4:{ 609:1 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 410:4 },/* Lv4->5 */
	skill5:{ 222:4, 410:8 },/* Lv5->6 */
	skill6:{ 222:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 504:3 },/* Lv7->8 */
	skill8:{ 504:9, 503:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:142, text:"イシュタル",
	text2:"Ishtar",
	value:4, kind:1, event:0,
	icon1:105, icon2:600, icon3:902,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 402:8 },
	AdAgain3:{ 111:5, 404:8, 508:2 },
	AdAgain4:{ 111:12, 508:4, 505:8 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 404:4 },/* Lv4->5 */
	skill5:{ 221:5, 404:8 },/* Lv5->6 */
	skill6:{ 221:12, 402:5 },/* Lv6->7 */
	skill7:{ 402:10, 403:5 },/* Lv7->8 */
	skill8:{ 403:15, 507:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:143, text:"エルキドゥ",
	text2:"Enkidu",
	value:4, kind:2, event:0,
	icon1:103, icon2:702, icon3:300,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteSky:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 304:22 },
	AdAgain3:{ 112:5, 402:10, 503:2 },
	AdAgain4:{ 112:12, 503:4, 501:5 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 402:5 },/* Lv4->5 */
	skill5:{ 222:5, 402:10 },/* Lv5->6 */
	skill6:{ 222:12, 304:15 },/* Lv6->7 */
	skill7:{ 304:29, 407:6 },/* Lv7->8 */
	skill8:{ 407:18, 509:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:144, text:"ケツァル・コアトル",
	text2:"Quetzalcoatl",
	value:4, kind:3, event:0,
	icon1:105, icon2:203, icon3:109,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 302:18 },
	AdAgain3:{ 113:5, 403:8, 502:2 },
	AdAgain4:{ 113:12, 404:10, 502:4 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 403:4 },/* Lv4->5 */
	skill5:{ 223:5, 403:8 },/* Lv5->6 */
	skill6:{ 223:12, 302:12 },/* Lv6->7 */
	skill7:{ 302:24, 304:18 },/* Lv7->8 */
	skill8:{ 304:54, 510:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:145, text:"ギルガメッシュ\n〔キャスター〕",
	text2:"Gilgamesh\n(Caster)",
	value:3, kind:4, event:0,
	icon1:401, icon2:105, icon3:102,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	divinity:1, love:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 300:18 },
	AdAgain3:{ 114:4, 406:8, 509:3 },
	AdAgain4:{ 114:10, 509:5, 508:4 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 406:4 },/* Lv4->5 */
	skill5:{ 224:4, 406:8 },/* Lv5->6 */
	skill6:{ 224:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 401:5 },/* Lv7->8 */
	skill8:{ 401:15, 305:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:146, text:"メドゥーサ\n〔ランサー〕",
	text2:"Medusa\n(Lancer)",
	value:3, kind:2, event:0,
	icon1:803, icon2:105, icon3:203,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 410:6 },
	AdAgain3:{ 112:4, 400:10, 404:4 },
	AdAgain4:{ 112:10, 404:7, 305:24 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 400:5 },/* Lv4->5 */
	skill5:{ 222:4, 400:10 },/* Lv5->6 */
	skill6:{ 222:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 509:3 },/* Lv7->8 */
	skill8:{ 403:16, 509:9 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:147, text:"ゴルゴーン",
	text2:"Gorgon",
	value:3, kind:8, event:0,
	icon1:105, icon2:203, icon3:804,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 301:8, 403:8 },
	AdAgain2:{ 305:8, 304:8 },
	AdAgain3:{ 303:8, 509:8 },
	AdAgain4:{ 500:8, 510:8 },
	skill1:{ 301:8 },/* Lv1->2 */
	skill2:{ 304:8 },/* Lv2->3 */
	skill3:{ 403:10 },/* Lv3->4 */
	skill4:{ 305:10 },/* Lv4->5 */
	skill5:{ 505:10 },/* Lv5->6 */
	skill6:{ 509:12 },/* Lv6->7 */
	skill7:{ 501:12 },/* Lv7->8 */
	skill8:{ 510:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:148, text:"ジャガーマン",
	text2:"Jaguar Man",
	value:2, kind:2, event:0,
	icon1:103, icon2:105, icon3:108,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	divinity:1, savagebeast:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 400:6 },
	AdAgain3:{ 112:4, 500:4, 506:2 },
	AdAgain4:{ 112:8, 506:4, 509:5 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 500:2 },/* Lv4->5 */
	skill5:{ 222:4, 500:4 },/* Lv5->6 */
	skill6:{ 222:8, 400:4 },/* Lv6->7 */
	skill7:{ 400:8, 510:2 },/* Lv7->8 */
	skill8:{ 510:5, 504:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:149, text:"マーリン",
	text2:"Merlin",
	value:4, kind:4, event:0,
	icon1:105, icon2:205, icon3:103,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12,405:8 },
	AdAgain3:{ 114:5,406:10,508:2 },
	AdAgain4:{ 114:12,502:5,508:4 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12,406:5 },/* Lv4->5 */
	skill5:{ 224:5,406:10 },/* Lv5->6 */
	skill6:{ 224:12,405:5 },/* Lv6->7 */
	skill7:{ 405:10,503:3 },/* Lv7->8 */
	skill8:{ 503:8,501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:150, text:"宮本武蔵",
	text2:"Miyamoto Musashi",
	value:4, kind:0, event:0,
	icon1:904, icon2:502, icon3:205,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12,300:22 },
	AdAgain3:{ 110:5,402:10,405:5 },
	AdAgain4:{ 110:12,405:10,501:5 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12,402:5 },/* Lv4->5 */
	skill5:{ 220:5,402:10 },/* Lv5->6 */
	skill6:{ 220:12,300:15 },/* Lv6->7 */
	skill7:{ 303:12,300:29 },/* Lv7->8 */
	skill8:{ 303:36,509:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:151, text:"“山の翁”",
	text2:"King Hassan",
	value:4, kind:5, event:0,
	icon1:203, icon2:305, icon3:903,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	love:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 301:22 },
	AdAgain3:{ 115:5, 304:29, 510:2 },
	AdAgain4:{ 115:12, 510:4, 303:24 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 304:15 },/* Lv4->5 */
	skill5:{ 225:5, 304:29 },/* Lv5->6 */
	skill6:{ 225:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 305:15 },/* Lv7->8 */
	skill8:{ 305:44, 401:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:152, text:"エレシュキガル",
	text2:"Ereshkigal",
	value:4, kind:2, event:0,
	icon1:205, icon2:103, icon3:908,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, queen:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 401:8 },
	AdAgain3:{ 112:5, 304:29, 501:2 },
	AdAgain4:{ 112:12, 501:4, 511:5 },
	skill1:{ 202:5 },/* Lv1->2 */
	skill2:{ 202:12 },/* Lv2->3 */
	skill3:{ 212:5 },/* Lv3->4 */
	skill4:{ 212:12, 304:15 },/* Lv4->5 */
	skill5:{ 222:5, 304:29 },/* Lv5->6 */
	skill6:{ 222:12, 401:5 },/* Lv6->7 */
	skill7:{ 401:10 , 411:6 },/* Lv7->8 */
	skill8:{ 411:18 , 307:72 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:153, text:"謎のヒロインＸ\n〔オルタ〕",
	text2:"Mysterious\nHeroine X (Alter)",
	value:4, kind:6, event:0,
	icon1:300, icon2:402, icon3:704,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteStar:1,
	dragon:1, saberface:1, arthur:1,
	npEXsaber:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12,302:18 },
	AdAgain3:{ 116:5,409:20,509:3 },
	AdAgain4:{ 116:12,509:6,502:5 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12,409:10 },/* Lv4->5 */
	skill5:{ 226:5,409:20 },/* Lv5->6 */
	skill6:{ 226:12,302:12 },/* Lv6->7 */
	skill7:{ 302:24,506:4 },/* Lv7->8 */
	skill8:{ 506:11,510:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:154, text:"新宿のアーチャー",
	text2:"Archer of Shinjuku",
	value:4, kind:1, event:0,
	icon1:502, icon2:600, icon3:105,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12,406:8 },
	AdAgain3:{ 111:5,305:24,500:3 },
	AdAgain4:{ 111:12,500:6,508:5 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12,305:12 },/* Lv4->5 */
	skill5:{ 221:5,305:24 },/* Lv5->6 */
	skill6:{ 221:12,406:5 },/* Lv6->7 */
	skill7:{ 406:10,303:12 },/* Lv7->8 */
	skill8:{ 303:36,306:72 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:155, text:"エミヤ\n〔オルタ〕",
	text2:"EMIYA (Alter)",
	value:3, kind:1, event:0,
	icon1:200, icon2:104, icon3:105,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10,304:18 },
	AdAgain3:{ 111:4,405:8,506:3 },
	AdAgain4:{ 111:10,506:5,306:30 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10,405:4 },/* Lv4->5 */
	skill5:{ 221:4,405:8 },/* Lv5->6 */
	skill6:{ 221:10,304:12 },/* Lv6->7 */
	skill7:{ 304:24,510:2 },/* Lv7->8 */
	skill8:{ 510:6,410:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:156, text:"新宿のアヴェンジャー",
	text2:"Avenger of Shinjuku",
	value:3, kind:8, event:0,
	icon1:109, icon2:105, icon3:903,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	savagebeast:1,
	AdAgain1:{ 301:8,401:8 },
	AdAgain2:{ 506:8,303:8 },
	AdAgain3:{ 505:8,306:8 },
	AdAgain4:{ 510:8,509:8 },
	skill1:{ 301:8 },/* Lv1->2 */
	skill2:{ 303:8 },/* Lv2->3 */
	skill3:{ 401:10 },/* Lv3->4 */
	skill4:{ 410:10 },/* Lv4->5 */
	skill5:{ 500:10 },/* Lv5->6 */
	skill6:{ 506:12 },/* Lv6->7 */
	skill7:{ 505:12 },/* Lv7->8 */
	skill8:{ 510:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:157, text:"新宿のアサシン",
	text2:"Assassin of Shinjuku",
	value:3, kind:5, event:0,
	icon1:109, icon2:401, icon3:704,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	love:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10,303:12 },
	AdAgain3:{ 115:4,401:8,402:4 },
	AdAgain4:{ 115:10,402:8,404:8 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10,401:4 },/* Lv4->5 */
	skill5:{ 225:4,401:8 },/* Lv5->6 */
	skill6:{ 225:10,303:8 },/* Lv6->7 */
	skill7:{ 303:16,306:15 },/* Lv7->8 */
	skill8:{ 306:45,407:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:158, text:"アーサー・ペンドラゴン",
	text2:"Arthur Pendragon",
	value:4, kind:0, event:0,
	icon1:103, icon2:402, icon3:107,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	dragon:1, riding:1, love:1, arthur:1,
	sEXlarge:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12,409:15 },
	AdAgain3:{ 110:5,300:29,302:12 },
	AdAgain4:{ 110:12,302:24,502:5 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12,300:15 },/* Lv4->5 */
	skill5:{ 220:5,300:29 },/* Lv5->6 */
	skill6:{ 220:12,409:10 },/* Lv6->7 */
	skill7:{ 409:20,509:4 },/* Lv7->8 */
	skill8:{ 509:11,503:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:159, text:"土方歳三",
	text2:"Hijikata Toshizo",
	value:4, kind:6, event:0,
	icon1:103, icon2:303, icon3:109,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 300:22 },
	AdAgain3:{ 116:5, 304:29, 505:3 },
	AdAgain4:{ 116:12, 505:6, 510:5 },
	skill1:{ 206:5 },/* Lv1->2 */
	skill2:{ 206:12 },/* Lv2->3 */
	skill3:{ 216:5 },/* Lv3->4 */
	skill4:{ 216:12, 304:15 },/* Lv4->5 */
	skill5:{ 226:5, 304:29 },/* Lv5->6 */
	skill6:{ 226:12, 300:15 },/* Lv6->7 */
	skill7:{ 300:29, 306:18 },/* Lv7->8 */
	skill8:{ 306:54, 405:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:160, text:"茶々",
	text2:"Chacha",
	value:3, kind:6, event:1,
	icon1:602, icon2:400, icon3:701,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 610:1 },
	AdAgain2:{ 610:1 },
	AdAgain3:{ 610:1 },
	AdAgain4:{ 610:1 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 402:4 },/* Lv4->5 */
	skill5:{ 226:4, 402:8 },/* Lv5->6 */
	skill6:{ 226:10, 404:4 },/* Lv6->7 */
	skill7:{ 404:7, 507:3 },/* Lv7->8 */
	skill8:{ 507:9, 508:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:161, text:"メルトリリス",
	text2:"Meltlilith",
	value:4, kind:11, event:0,
	icon1:204, icon2:105, icon3:703,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	divinity:1, riding:1,
	AdAgain1:{ 102:5, 105:5 },
	AdAgain2:{ 102:12, 105:12 },
	AdAgain3:{ 112:5, 115:5 },
	AdAgain4:{ 112:12, 115:12 },
	skill1:{ 202:5, 205:5 },/* Lv1->2 */
	skill2:{ 202:12, 205:12 },/* Lv2->3 */
	skill3:{ 212:5, 215:5 },/* Lv3->4 */
	skill4:{ 212:12, 215:12 },/* Lv4->5 */
	skill5:{ 222:5, 225:5 },/* Lv5->6 */
	skill6:{ 222:12, 225:12 },/* Lv6->7 */
	skill7:{ 504:5, 509:5 },/* Lv7->8 */
	skill8:{ 502:9, 508:9 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:162, text:"パッションリップ",
	text2:"Passionlip",
	value:3, kind:11, event:0,
	icon1:200, icon2:206, icon3:105,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 101:4, 106:4 },
	AdAgain2:{ 101:10, 106:10 },
	AdAgain3:{ 111:4, 116:4 },
	AdAgain4:{ 111:10, 116:10 },
	skill1:{ 201:4, 206:4 },/* Lv1->2 */
	skill2:{ 201:10, 206:10 },/* Lv2->3 */
	skill3:{ 211:4, 216:4 },/* Lv3->4 */
	skill4:{ 211:10, 216:10 },/* Lv4->5 */
	skill5:{ 221:4, 226:4 },/* Lv5->6 */
	skill6:{ 221:10, 226:10 },/* Lv6->7 */
	skill7:{ 505:4, 500:4 },/* Lv7->8 */
	skill8:{ 503:7, 510:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:163, text:"鈴鹿御前",
	text2:"Suzuka Gozen",
	value:3, kind:0, event:0,
	icon1:103, icon2:803, icon3:602,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteSky:1,
	divinity:1, riding:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 301:18 },
	AdAgain3:{ 110:4, 400:10, 404:4 },
	AdAgain4:{ 110:10, 404:7, 508:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 400:5 },/* Lv4->5 */
	skill5:{ 220:4, 400:10 },/* Lv5->6 */
	skill6:{ 220:10, 301:12 },/* Lv6->7 */
	skill7:{ 301:24, 410:5 },/* Lv7->8 */
	skill8:{ 410:15, 503:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:164, text:"BB",
	text2:"BB",
	value:3, kind:10, event:1,
	icon1:303, icon2:804, icon3:108,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 611:1 },
	AdAgain2:{ 611:1 },
	AdAgain3:{ 611:1 },
	AdAgain4:{ 611:1 },
	skill1:{ 204:4, 203:4 },/* Lv1->2 */
	skill2:{ 204:10, 203:10 },/* Lv2->3 */
	skill3:{ 214:4, 213:4 },/* Lv3->4 */
	skill4:{ 214:10, 213:10 },/* Lv4->5 */
	skill5:{ 224:4, 223:4 },/* Lv5->6 */
	skill6:{ 224:10, 223:10 },/* Lv6->7 */
	skill7:{ 509:4, 507:4 },/* Lv7->8 */
	skill8:{ 503:7, 508:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:165, text:"殺生院キアラ",
	text2:"Sessyoin Kiara",
	value:4, kind:11, event:0,
	icon1:801, icon2:800, icon3:205,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteBeast:1,
	AdAgain1:{ 100:5, 104:5 },
	AdAgain2:{ 100:12, 104:12 },
	AdAgain3:{ 110:5, 114:5 },
	AdAgain4:{ 110:12, 114:12 },
	skill1:{ 200:5, 204:5 },/* Lv1->2 */
	skill2:{ 200:12, 204:12 },/* Lv2->3 */
	skill3:{ 210:5, 214:5 },/* Lv3->4 */
	skill4:{ 210:12, 214:12 },/* Lv4->5 */
	skill5:{ 220:5, 224:5 },/* Lv5->6 */
	skill6:{ 220:12, 224:12 },/* Lv6->7 */
	skill7:{ 506:5, 507:5 },/* Lv7->8 */
	skill8:{ 510:9, 501:9 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:166, text:"不夜城のキャスター",
	text2:"Caster of\nNightless City",
	value:4, kind:4, event:0,
	icon1:800, icon2:803, icon3:203,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 404:6 },
	AdAgain3:{ 114:5, 403:8, 507:3 },
	AdAgain4:{ 114:12, 507:6, 511:5 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 403:4 },/* Lv4->5 */
	skill5:{ 224:5, 403:8 },/* Lv5->6 */
	skill6:{ 224:12, 404:4 },/* Lv6->7 */
	skill7:{ 404:8, 410:6 },/* Lv7->8 */
	skill8:{ 410:18, 508:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:167, text:"不夜城のアサシン",
	text2:"Assassin of\nNightless City",
	value:3, kind:5, event:0,
	icon1:701, icon2:300, icon3:105,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	king:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 305:15 },
	AdAgain3:{ 115:4, 304:24, 506:3 },
	AdAgain4:{ 115:10, 506:5, 510:4 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 304:12 },/* Lv4->5 */
	skill5:{ 225:4, 304:24 },/* Lv5->6 */
	skill6:{ 225:10, 305:10 },/* Lv6->7 */
	skill7:{ 305:20, 511:2 },/* Lv7->8 */
	skill8:{ 511:6, 306:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:168, text:"エルドラドのバーサーカー",
	text2:"Berserker of\nEl Dorado",
	value:3, kind:6, event:0,
	icon1:105, icon2:202, icon3:103,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	divinity:1, king:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 402:6 },
	AdAgain3:{ 116:4, 408:8, 505:3 },
	AdAgain4:{ 116:10, 505:5, 503:4 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 408:4 },/* Lv4->5 */
	skill5:{ 226:4, 408:8 },/* Lv5->6 */
	skill6:{ 226:10, 402:4 },/* Lv6->7 */
	skill7:{ 402:8, 510:2 },/* Lv7->8 */
	skill8:{ 510:6, 511:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:169, text:"レジスタンスのライダー",
	text2:"Rider of\nResistance",
	value:2, kind:3, event:0,
	icon1:106, icon2:203, icon3:103,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 304:15 },
	AdAgain3:{ 113:4, 511:3, 305:8 },
	AdAgain4:{ 113:8, 305:16, 401:8 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:8 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:8, 511:2 },/* Lv4->5 */
	skill5:{ 223:4, 511:3 },/* Lv5->6 */
	skill6:{ 223:8, 304:10 },/* Lv6->7 */
	skill7:{ 304:20, 306:12 },/* Lv7->8 */
	skill8:{ 306:36, 510:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:170, text:"シャーロック・ホームズ",
	text2:"Sherlock Holmes",
	value:4, kind:7, event:0,
	icon1:805, icon2:401, icon3:102,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	AdAgain1:{ 101:5, 104:5, 105:5 },
	AdAgain2:{ 100:5, 102:5, 103:5, 106:5 },
	AdAgain3:{ 111:5, 114:5, 115:5 },
	AdAgain4:{ 110:5, 112:5, 113:5, 116:5 },
	skill1:{ 201:5, 204:5, 205:5 },/* Lv1->2 */
	skill2:{ 200:5, 202:5, 203:5, 206:5 },/* Lv2->3 */
	skill3:{ 211:5, 214:5, 215:5 },/* Lv3->4 */
	skill4:{ 210:5, 212:5, 213:5, 216:5 },/* Lv4->5 */
	skill5:{ 221:5, 224:5, 225:5 },/* Lv5->6 */
	skill6:{ 220:5, 222:5, 223:5, 226:5 },/* Lv6->7 */
	skill7:{ 406:12 },/* Lv7->8 */
	skill8:{ 508:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:171, text:"ポール・バニヤン",
	text2:"Paul Bunyan",
	value:0, kind:6, event:0,
	icon1:103, icon2:300, icon3:701,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	AdAgain1:{ 106:2 },
	AdAgain2:{ 106:4, 400:3 },
	AdAgain3:{ 116:2, 402:4, 503:1 },
	AdAgain4:{ 116:4, 503:2, 303:8 },
	skill1:{ 206:2 },/* Lv1->2 */
	skill2:{ 206:4 },/* Lv2->3 */
	skill3:{ 216:2 },/* Lv3->4 */
	skill4:{ 216:4, 402:2 },/* Lv4->5 */
	skill5:{ 226:2, 402:4 },/* Lv5->6 */
	skill6:{ 226:4, 400:2 },/* Lv6->7 */
	skill7:{ 400:4, 304:6 },/* Lv7->8 */
	skill8:{ 304:18, 407:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:172, text:"ネロ・クラウディウス\n〔キャスター〕",
	text2:"Nero Claudius\n(Caster)",
	value:4, kind:4, event:0,
	icon1:600, icon2:105, icon3:203,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalSummer:1, attrbuteMan:1,
	riding:1, roma:1, saberface:1, king:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 406:8 },
	AdAgain3:{ 114:5, 404:8, 508:2 },
	AdAgain4:{ 114:12, 508:4, 511:5 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 404:4 },/* Lv4->5 */
	skill5:{ 224:5, 404:8 },/* Lv5->6 */
	skill6:{ 224:12, 406:5 },/* Lv6->7 */
	skill7:{ 406:10, 410:6 },/* Lv7->8 */
	skill8:{ 410:18, 509:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:173, text:"フランケンシュタイン\n〔セイバー〕",
	text2:"Frankenstein\n(Saber)",
	value:3, kind:0, event:0,
	icon1:601, icon2:700, icon3:105,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalSummer:1, attrbuteEarth:1,
	riding:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 410:6 },
	AdAgain3:{ 110:4, 506:5, 402:4 },
	AdAgain4:{ 110:10, 402:8, 405:10 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 506:3 },/* Lv4->5 */
	skill5:{ 220:4, 506:5 },/* Lv5->6 */
	skill6:{ 220:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 407:5 },/* Lv7->8 */
	skill8:{ 407:15, 306:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:174, text:"ニトクリス\n〔アサシン〕",
	text2:"Nitocris\n(Assassin)",
	value:3, kind:5, event:0,
	icon1:200, icon2:206, icon3:105,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	divinity:1, king:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 401:6 },
	AdAgain3:{ 115:4, 410:8, 404:4 },
	AdAgain4:{ 115:10, 404:7, 508:4 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 410:4 },/* Lv4->5 */
	skill5:{ 225:4, 410:8 },/* Lv5->6 */
	skill6:{ 225:10, 401:4 },/* Lv6->7 */
	skill7:{ 401:8, 503:2 },/* Lv7->8 */
	skill8:{ 503:6, 507:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:175, text:"織田信長\n〔バーサーカー〕",
	text2:"Oda Nobunaga\n(Berserker)",
	value:3, kind:6, event:0,
	icon1:204, icon2:400, icon3:109,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalSummer:1, attrbuteMan:1,
	npEXdivine:1,
	king:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 306:18 },
	AdAgain3:{ 116:4, 511:4, 305:10 },
	AdAgain4:{ 116:10, 305:20, 500:6 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 511:2 },/* Lv4->5 */
	skill5:{ 226:4, 511:4 },/* Lv5->6 */
	skill6:{ 226:10, 306:12 },/* Lv6->7 */
	skill7:{ 306:24, 410:5 },/* Lv7->8 */
	skill8:{ 410:15, 510:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:176, text:"イシュタル\n〔ライダー〕",
	text2:"Ishtar\n(Rider)",
	value:3, kind:3, event:1,
	icon1:110, icon2:204, icon3:205,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1,
	AdAgain1:{ 612:1 },
	AdAgain2:{ 612:1 },
	AdAgain3:{ 612:1 },
	AdAgain4:{ 612:1 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 410:4 },/* Lv4->5 */
	skill5:{ 223:4, 410:8 },/* Lv5->6 */
	skill6:{ 223:10, 509:3 },/* Lv6->7 */
	skill7:{ 509:5, 508:2 },/* Lv7->8 */
	skill8:{ 508:6, 511:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:177, text:"アルトリア・ペンドラゴン\n〔ライダーオルタ〕",
	text2:"Artoria Pendragon\n(Rider Alter)",
	value:4, kind:3, event:0,
	icon1:105, icon2:806, icon3:101,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	riding:1, dragon:1, saberface:1, arthur:1, king:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 409:15 },
	AdAgain3:{ 113:5, 502:4, 410:5 },
	AdAgain4:{ 113:12, 410:10, 510:5 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 502:2 },/* Lv4->5 */
	skill5:{ 223:5, 502:4 },/* Lv5->6 */
	skill6:{ 223:12, 409:10 },/* Lv6->7 */
	skill7:{ 409:20, 302:15 },/* Lv7->8 */
	skill8:{ 302:44, 408:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:178, text:"エレナ・ブラヴァツキー\n〔アーチャー〕",
	text2:"Helena Blavatsky\n(Archer)",
	value:3, kind:1, event:0,
	icon1:600, icon2:107, icon3:102,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 403:5 },
	AdAgain3:{ 111:4, 507:5, 506:3 },
	AdAgain4:{ 111:10, 506:5, 410:10 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 507:3 },/* Lv4->5 */
	skill5:{ 221:4, 507:5 },/* Lv5->6 */
	skill6:{ 221:10, 403:4 },/* Lv6->7 */
	skill7:{ 403:7, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 505:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:179, text:"源頼光\n〔ランサー〕",
	text2:"Minamoto no Yorimitsu\n(Lancer)",
	value:3, kind:2, event:0,
	icon1:109, icon2:103, icon3:105,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 410:6 },
	AdAgain3:{ 112:4, 300:24, 405:4 },
	AdAgain4:{ 112:10, 405:8, 501:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 300:12 },/* Lv4->5 */
	skill5:{ 222:4, 300:24 },/* Lv5->6 */
	skill6:{ 222:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 511:2 },/* Lv7->8 */
	skill8:{ 511:6, 504:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:180, text:"パールヴァティー",
	text2:"Parvati",
	value:3, kind:2, event:0,
	icon1:101, icon2:105, icon3:600,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 403:5 },
	AdAgain3:{ 112:4, 504:5, 507:3 },
	AdAgain4:{ 112:10, 507:5, 511:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 504:3 },/* Lv4->5 */
	skill5:{ 222:4, 504:5 },/* Lv5->6 */
	skill6:{ 222:10, 403:4 },/* Lv6->7 */
	skill7:{ 403:7, 508:2 },/* Lv7->8 */
	skill8:{ 508:6, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:181, text:"アーチャー・\nインフェルノ",
	text2:"Archer Inferno",
	value:3, kind:1, event:0,
	icon1:105, icon2:109, icon3:203,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	devilish:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 408:6 },
	AdAgain3:{ 111:4, 404:7, 411:4 },
	AdAgain4:{ 111:10, 411:8, 506:6 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 404:4 },/* Lv4->5 */
	skill5:{ 221:4, 404:7 },/* Lv5->6 */
	skill6:{ 221:10, 408:4 },/* Lv6->7 */
	skill7:{ 408:8, 511:2 },/* Lv7->8 */
	skill8:{ 511:6, 505:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:182, text:"アサシン・\nパライソ",
	text2:"Assassin Paraiso",
	value:3, kind:5, event:0,
	icon1:805, icon2:102, icon3:204,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 305:15 },
	AdAgain3:{ 115:4, 411:8, 503:2 },
	AdAgain4:{ 115:10, 503:4, 510:4 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 411:4 },/* Lv4->5 */
	skill5:{ 225:4, 411:8 },/* Lv5->6 */
	skill6:{ 225:10, 305:10 },/* Lv6->7 */
	skill7:{ 305:20, 500:3 },/* Lv7->8 */
	skill8:{ 500:9, 303:40 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:183, text:"宝蔵院胤舜",
	text2:"Hozoin Inshun",
	value:2, kind:2, event:0,
	icon1:500, icon2:101, icon3:805,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	love:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:8, 504:3 },
	AdAgain3:{ 112:4, 402:7, 404:3 },
	AdAgain4:{ 112:8, 404:6, 501:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:8 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:8, 402:4 },/* Lv4->5 */
	skill5:{ 222:4, 402:7 },/* Lv5->6 */
	skill6:{ 222:8, 504:2 },/* Lv6->7 */
	skill7:{ 504:4, 411:4 },/* Lv7->8 */
	skill8:{ 411:12, 301:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:184, text:"柳生但馬守宗矩",
	text2:"Yagyu Munenori",
	value:3, kind:0, event:0,
	icon1:102, icon2:204, icon3:700,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	riding:1, love:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 303:12 },
	AdAgain3:{ 110:4, 300:24, 509:3 },
	AdAgain4:{ 110:10, 509:5, 411:10 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 300:12 },/* Lv4->5 */
	skill5:{ 220:4, 300:24 },/* Lv5->6 */
	skill6:{ 220:10, 303:8 },/* Lv6->7 */
	skill7:{ 303:16, 402:5 },/* Lv7->8 */
	skill8:{ 402:15, 511:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:185, text:"加藤段蔵",
	text2:"Kato Danzo",
	value:3, kind:5, event:0,
	icon1:110, icon2:204, icon3:205,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	npEXdemonic:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 304:18 },
	AdAgain3:{ 115:4, 401:8, 306:12 },
	AdAgain4:{ 115:10, 306:24, 405:10 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 401:4 },/* Lv4->5 */
	skill5:{ 225:4, 401:8 },/* Lv5->6 */
	skill6:{ 225:10, 304:12 },/* Lv6->7 */
	skill7:{ 304:24, 303:10 },/* Lv7->8 */
	skill8:{ 303:30, 411:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:186, text:"刑部姫",
	text2:"Osakabehime",
	value:4, kind:5, event:0,
	icon1:200, icon2:600, icon3:701,
	nptypeQ:1, npeffectS:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 400:9 },
	AdAgain3:{ 115:5, 303:20, 406:5 },
	AdAgain4:{ 115:12, 406:10, 503:5 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 303:10 },/* Lv4->5 */
	skill5:{ 225:5, 303:20 },/* Lv5->6 */
	skill6:{ 225:12, 400:6 },/* Lv6->7 */
	skill7:{ 400:12, 511:3 },/* Lv7->8 */
	skill8:{ 511:8, 411:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:187, text:"メカエリチャン",
	text2:"Mecha Eli-chan",
	value:3, kind:11, event:1,
	icon1:400, icon2:600, icon3:106,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 613:1 },
	AdAgain2:{ 613:1 },
	AdAgain3:{ 613:1 },
	AdAgain4:{ 613:1 },
	skill1:{ 203:4, 206:4 },/* Lv1->2 */
	skill2:{ 203:10, 206:10 },/* Lv2->3 */
	skill3:{ 213:4, 216:4 },/* Lv3->4 */
	skill4:{ 213:10, 216:10 },/* Lv4->5 */
	skill5:{ 223:4, 226:4 },/* Lv5->6 */
	skill6:{ 223:10, 226:10 },/* Lv6->7 */
	skill7:{ 505:4, 506:4 },/* Lv7->8 */
	skill8:{ 502:7, 511:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:188, text:"オケアノスのキャスター",
	text2:"Caster of Okeanos",
	value:3, kind:4, event:0,
	icon1:600, icon2:907, icon3:401,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 406:6 },
	AdAgain3:{ 114:4, 509:5, 404:4 },
	AdAgain4:{ 114:10, 404:7, 508:4 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 509:3 },/* Lv4->5 */
	skill5:{ 224:4, 509:5 },/* Lv5->6 */
	skill6:{ 224:10, 406:4 },/* Lv6->7 */
	skill7:{ 406:8, 307:15 },/* Lv7->8 */
	skill8:{ 307:45, 501:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:189, text:"ナタ",
	text2:"Nezha",
	value:3, kind:2, event:0,
	icon1:110, icon2:203, icon3:109,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteSky:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 405:6 },
	AdAgain3:{ 112:4, 407:8, 500:3 },
	AdAgain4:{ 112:10, 500:5, 504:6 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 407:4 },/* Lv4->5 */
	skill5:{ 222:4, 407:8 },/* Lv5->6 */
	skill6:{ 222:10, 405:4 },/* Lv6->7 */
	skill7:{ 405:8, 306:15 },/* Lv7->8 */
	skill8:{ 306:45, 411:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:190, text:"ミドラーシュの\nキャスター",
	text2:"Caster of\nMidrash",
	value:3, kind:4, event:0,
	icon1:105, icon2:108, icon3:111,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	queen:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 404:5 },
	AdAgain3:{ 114:4, 307:24, 403:4 },
	AdAgain4:{ 114:10, 403:7, 507:6 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 307:12 },/* Lv4->5 */
	skill5:{ 224:4, 307:24 },/* Lv5->6 */
	skill6:{ 224:10, 404:4 },/* Lv6->7 */
	skill7:{ 404:7, 304:15 },/* Lv7->8 */
	skill8:{ 304:45, 508:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:191, text:"アビゲイル・ウィリアムズ",
	text2:"Abigail Williams",
	value:4, kind:12, event:0,
	icon1:602, icon2:804, icon3:800,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, threat:1,
	AdAgain1:{ 303:10, 406:10 },
	AdAgain2:{ 403:10, 500:10 },
	AdAgain3:{ 506:10, 505:10 },
	AdAgain4:{ 307:10, 510:10 },
	skill1:{ 400:10 },/* Lv1->2 */
	skill2:{ 304:10 },/* Lv2->3 */
	skill3:{ 306:12 },/* Lv3->4 */
	skill4:{ 407:12 },/* Lv4->5 */
	skill5:{ 404:12 },/* Lv5->6 */
	skill6:{ 507:15 },/* Lv6->7 */
	skill7:{ 503:15 },/* Lv7->8 */
	skill8:{ 501:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:192, text:"アルテラ\n・ザ・サン〔タ〕",
	text2:"Attila the San(ta)",
	value:3, kind:1, event:0,
	icon1:600, icon2:106, icon3:502,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteStar:1,
	divinity:1, riding:1, king:1,
	AdAgain1:{ 614:1 },
	AdAgain2:{ 614:1 },
	AdAgain3:{ 614:1 },
	AdAgain4:{ 614:1 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 400:5 },/* Lv4->5 */
	skill5:{ 221:4, 400:10 },/* Lv5->6 */
	skill6:{ 221:10, 408:4 },/* Lv6->7 */
	skill7:{ 408:8, 503:2 },/* Lv7->8 */
	skill8:{ 503:6, 509:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:193, text:"葛飾北斎",
	text2:"Katsushika Hokusai",
	value:4, kind:12, event:0,
	icon1:204, icon2:102, icon3:909,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	divinity:1, threat:1,
	AdAgain1:{ 302:10, 400:10 },
	AdAgain2:{ 404:10, 408:10 },
	AdAgain3:{ 509:10, 503:10 },
	AdAgain4:{ 411:10, 508:10 },
	skill1:{ 301:10 },/* Lv1->2 */
	skill2:{ 303:10 },/* Lv2->3 */
	skill3:{ 406:12 },/* Lv3->4 */
	skill4:{ 402:12 },/* Lv4->5 */
	skill5:{ 401:12 },/* Lv5->6 */
	skill6:{ 506:15 },/* Lv6->7 */
	skill7:{ 502:15 },/* Lv7->8 */
	skill8:{ 510:15 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:194, text:"セミラミス",
	text2:"Semiramis",
	value:4, kind:5, event:0,
	icon1:600, icon2:601, icon3:907,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, queen:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 302:18 },
	AdAgain3:{ 115:5, 305:24, 403:4 },
	AdAgain4:{ 115:12, 403:8, 508:5 },
	skill1:{ 205:5 },/* Lv1->2 */
	skill2:{ 205:12 },/* Lv2->3 */
	skill3:{ 215:5 },/* Lv3->4 */
	skill4:{ 215:12, 305:12 },/* Lv4->5 */
	skill5:{ 225:5, 305:24 },/* Lv5->6 */
	skill6:{ 225:12, 302:12 },/* Lv6->7 */
	skill7:{ 302:24, 404:5 },/* Lv7->8 */
	skill8:{ 404:15, 503:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:195, text:"浅上藤乃",
	text2:"Asagami Fujino",
	value:3, kind:1, event:0,
	icon1:103, icon2:500, icon3:200,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 301:18 },
	AdAgain3:{ 111:4, 303:16, 510:2 },
	AdAgain4:{ 111:10, 510:4, 505:6 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 303:8 },/* Lv4->5 */
	skill5:{ 221:4, 303:16 },/* Lv5->6 */
	skill6:{ 221:10, 301:12 },/* Lv6->7 */
	skill7:{ 301:24, 307:15 },/* Lv7->8 */
	skill8:{ 307:45, 306:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:196, text:"アナスタシア",
	text2:"Anastasia",
	value:4, kind:4, event:0,
	icon1:502, icon2:105, icon3:600,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 303:15 },
	AdAgain3:{ 114:5, 410:10, 505:3 },
	AdAgain4:{ 114:12, 505:6, 412:12 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 410:5 },/* Lv4->5 */
	skill5:{ 224:5, 410:10 },/* Lv5->6 */
	skill6:{ 224:12, 303:10 },/* Lv6->7 */
	skill7:{ 303:20, 406:6 },/* Lv7->8 */
	skill8:{ 406:18, 308:72 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:197, text:"アタランテ\n〔オルタ〕",
	text2:"Atalanta\n(Alter)",
	value:3, kind:6, event:0,
	icon1:109, icon2:101, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	savagebeast:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 400:8 },
	AdAgain3:{ 116:4, 506:5, 503:2 },
	AdAgain4:{ 116:10, 503:4, 509:6 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 506:3 },/* Lv4->5 */
	skill5:{ 226:4, 506:5 },/* Lv5->6 */
	skill6:{ 226:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 308:15 },/* Lv7->8 */
	skill8:{ 308:45, 500:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:198, text:"アヴィケブロン",
	text2:"Avicebron",
	value:2, kind:4, event:0,
	icon1:111, icon2:600, icon3:910,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 402:5 },
	AdAgain3:{ 114:4, 407:7, 507:2 },
	AdAgain4:{ 114:8, 507:4, 508:4 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:8 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:8, 407:4 },/* Lv4->5 */
	skill5:{ 224:4, 407:7 },/* Lv5->6 */
	skill6:{ 224:8, 402:4 },/* Lv6->7 */
	skill7:{ 402:7, 412:4 },/* Lv7->8 */
	skill8:{ 412:12, 308:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:199, text:"アントニオ・サリエリ",
	text2:"Antonio Salieri",
	value:2, kind:8, event:0,
	icon1:400, icon2:102, icon3:701,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	love:1,
	AdAgain1:{ 303:8, 301:8 },
	AdAgain2:{ 406:8, 405:8 },
	AdAgain3:{ 401:8, 507:8 },
	AdAgain4:{ 501:8, 505:8 },
	skill1:{ 304:8 },/* Lv1->2 */
	skill2:{ 305:8 },/* Lv2->3 */
	skill3:{ 306:10 },/* Lv3->4 */
	skill4:{ 404:10 },/* Lv4->5 */
	skill5:{ 307:10 },/* Lv5->6 */
	skill6:{ 308:12 },/* Lv6->7 */
	skill7:{ 412:12 },/* Lv7->8 */
	skill8:{ 508:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:200, text:"イヴァン雷帝",
	text2:"Ivan the Terrible",
	value:4, kind:3, event:0,
	icon1:601, icon2:400, icon3:205,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteSky:1,
	king:1, savagebeast:1, riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 301:22 },
	AdAgain3:{ 113:5, 408:10, 509:3 },
	AdAgain4:{ 113:12, 509:6, 510:5 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 408:5 },/* Lv4->5 */
	skill5:{ 223:5, 408:10 },/* Lv5->6 */
	skill6:{ 223:12, 301:15 },/* Lv6->7 */
	skill7:{ 301:29, 305:15 },/* Lv7->8 */
	skill8:{ 305:44, 412:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:201, text:"アキレウス",
	text2:"Achilles",
	value:4, kind:3, event:0,
	icon1:101, icon2:205, icon3:206,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteEarth:1,
	divinity:1, love:1, riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 300:22 },
	AdAgain3:{ 113:5, 405:10, 504:3 },
	AdAgain4:{ 113:12, 504:6, 404:10 },
	skill1:{ 203:5 },/* Lv1->2 */
	skill2:{ 203:12 },/* Lv2->3 */
	skill3:{ 213:5 },/* Lv3->4 */
	skill4:{ 213:12, 405:5 },/* Lv4->5 */
	skill5:{ 223:5, 405:10 },/* Lv5->6 */
	skill6:{ 223:12, 300:15 },/* Lv6->7 */
	skill7:{ 300:29, 408:6 },/* Lv7->8 */
	skill8:{ 408:18, 501:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:202, text:"ケイローン",
	text2:"Chiron",
	value:3, kind:1, event:0,
	icon1:204, icon2:108, icon3:104,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 408:6,  },
	AdAgain3:{ 111:4, 406:8, 503:2 },
	AdAgain4:{ 111:10, 503:4, 508:4 },
	skill1:{ 201:4 },/* Lv1->2 */
	skill2:{ 201:10 },/* Lv2->3 */
	skill3:{ 211:4 },/* Lv3->4 */
	skill4:{ 211:10, 406:4 },/* Lv4->5 */
	skill5:{ 221:4, 406:8 },/* Lv5->6 */
	skill6:{ 221:10, 408:4 },/* Lv6->7 */
	skill7:{ 408:8, 403:4 },/* Lv7->8 */
	skill8:{ 403:12, 305:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:203, text:"ジーク",
	text2:"Sieg",
	value:3, kind:4, event:0,
	icon1:601, icon2:102, icon3:107,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	dragon:1,
	AdAgain1:{ 615:1 },
	AdAgain2:{ 615:1 },
	AdAgain3:{ 615:1 },
	AdAgain4:{ 615:1 },
	skill1:{ 204:4 },/* Lv1->2 */
	skill2:{ 204:10 },/* Lv2->3 */
	skill3:{ 214:4 },/* Lv3->4 */
	skill4:{ 214:10, 302:10 },/* Lv4->5 */
	skill5:{ 224:4, 302:20 },/* Lv5->6 */
	skill6:{ 224:10, 409:8 },/* Lv6->7 */
	skill7:{ 409:16, 501:2 },/* Lv7->8 */
	skill8:{ 501:6, 502:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:204, text:"沖田総司\n〔オルタ〕",
	text2:"Okita Souji\n(alter)",
	value:4, kind:11, event:0,
	icon1:110, icon2:600, icon3:106,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	saberface:1, love:1,
	AdAgain1:{ 100:5, 105:5 },
	AdAgain2:{ 100:12, 105:12 },
	AdAgain3:{ 110:5, 115:5 },
	AdAgain4:{ 110:12, 115:12 },
	skill1:{ 200:5, 205:5 },/* Lv1->2 */
	skill2:{ 200:12, 205:12 },/* Lv2->3 */
	skill3:{ 210:5, 215:5 },/* Lv3->4 */
	skill4:{ 210:12, 215:12 },/* Lv4->5 */
	skill5:{ 220:5, 225:5 },/* Lv5->6 */
	skill6:{ 220:12, 225:12 },/* Lv6->7 */
	skill7:{ 402:8, 412:8 },/* Lv7->8 */
	skill8:{ 510:9, 511:9 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:205, text:"岡田以蔵",
	text2:"Okada Izou",
	value:2, kind:5, event:0,
	icon1:107, icon2:204, icon3:109,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteMan:1,
	sEXhumanoid:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:8, 301:15 },
	AdAgain3:{ 115:4, 411:7, 304:10 },
	AdAgain4:{ 115:8, 304:20, 511:4 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:8 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:8, 411:4 },/* Lv4->5 */
	skill5:{ 225:4, 411:7 },/* Lv5->6 */
	skill6:{ 225:8, 301:10 },/* Lv6->7 */
	skill7:{ 301:20, 307:12 },/* Lv7->8 */
	skill8:{ 307:36, 505:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:206, text:"坂本龍馬",
	text2:"Sakamoto Ryouma",
	value:3, kind:3, event:1,
	icon1:105, icon2:600, icon3:102,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	riding:1, love:1,
	AdAgain1:{ 616:1 },
	AdAgain2:{ 616:1 },
	AdAgain3:{ 616:1 },
	AdAgain4:{ 616:1 },
	skill1:{ 203:4 },/* Lv1->2 */
	skill2:{ 203:10 },/* Lv2->3 */
	skill3:{ 213:4 },/* Lv3->4 */
	skill4:{ 213:10, 401:4 },/* Lv4->5 */
	skill5:{ 223:4, 401:8 },/* Lv5->6 */
	skill6:{ 223:10, 308:12 },/* Lv6->7 */
	skill7:{ 308:24, 411:5 },/* Lv7->8 */
	skill8:{ 411:15, 508:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:207, text:"ナポレオン",
	text2:"Napoleon\nBonaparte",
	value:4, kind:1, event:0,
	icon1:105, icon2:106, icon3:600,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	love:1, king:1,
	npEXdivine:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 300:22 },
	AdAgain3:{ 111:5, 308:29, 504:3 },
	AdAgain4:{ 111:12, 504:6, 508:5 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 308:15 },/* Lv4->5 */
	skill5:{ 221:5, 308:29 },/* Lv5->6 */
	skill6:{ 221:12, 300:15 },/* Lv6->7 */
	skill7:{ 300:29, 304:18 },/* Lv7->8 */
	skill8:{ 304:54, 412:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:208, text:"シグルド",
	text2:"Sigurd",
	value:4, kind:0, event:0,
	icon1:108, icon2:103, icon3:401,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	divinity:1, dragon:1, love:1, riding:1,
	npEXdragon:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 302:18 },
	AdAgain3:{ 110:5, 408:10, 507:3 },
	AdAgain4:{ 110:12, 507:6, 502:5 },
	skill1:{ 200:5 },/* Lv1->2 */
	skill2:{ 200:12 },/* Lv2->3 */
	skill3:{ 210:5 },/* Lv3->4 */
	skill4:{ 210:12, 408:5 },/* Lv4->5 */
	skill5:{ 220:5, 408:10 },/* Lv5->6 */
	skill6:{ 220:12, 302:12 },/* Lv6->7 */
	skill7:{ 302:24, 502:3 },/* Lv7->8 */
	skill8:{ 502:8, 413:24 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:209, text:"ワルキューレ",
	text2:"Valkyrie",
	value:3, kind:2, event:0,
	icon1:101, icon2:204, icon3:602,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 400:8 },
	AdAgain3:{ 112:4, 300:24, 404:4 },
	AdAgain4:{ 112:10, 404:7, 414:10 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 300:12 },/* Lv4->5 */
	skill5:{ 222:4, 300:24 },/* Lv5->6 */
	skill6:{ 222:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 401:5 },/* Lv7->8 */
	skill8:{ 401:15, 414:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:210, text:"スカサハ＝スカディ",
	text2:"Scathach-Skadi",
	value:4, kind:4, event:0,
	icon1:101, icon2:701, icon3:600,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1, king:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 509:5 },
	AdAgain3:{ 114:5, 412:10, 501:2 },
	AdAgain4:{ 114:12, 501:4, 413:12 },
	skill1:{ 204:5 },/* Lv1->2 */
	skill2:{ 204:12 },/* Lv2->3 */
	skill3:{ 214:5 },/* Lv3->4 */
	skill4:{ 214:12, 412:5 },/* Lv4->5 */
	skill5:{ 224:5, 412:10 },/* Lv5->6 */
	skill6:{ 224:12, 509:3 },/* Lv6->7 */
	skill7:{ 509:6, 414:6 },/* Lv7->8 */
	skill8:{ 414:18, 303:48 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:211, text:"メカエリチャン\nⅡ号機",
	text2:"Mecha Eli-chan\nMk.II",
	value:3, kind:11, event:1,
	icon1:400, icon2:600, icon3:106,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	nptypeB:1, npeffectO:1,
	AdAgain1:{ 613:1 },
	AdAgain2:{ 613:1 },
	AdAgain3:{ 613:1 },
	AdAgain4:{ 613:1 },
	skill1:{ 203:4, 206:4 },/* Lv1->2 */
	skill2:{ 203:10, 206:10 },/* Lv2->3 */
	skill3:{ 213:4, 216:4 },/* Lv3->4 */
	skill4:{ 213:10, 216:10 },/* Lv4->5 */
	skill5:{ 223:4, 226:4 },/* Lv5->6 */
	skill6:{ 223:10, 226:10 },/* Lv6->7 */
	skill7:{ 505:4, 506:4 },/* Lv7->8 */
	skill8:{ 502:7, 511:7 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:212, text:"ジャンヌ・ダルク\n〔アーチャー〕",
	text2:"Jeanne d'Arc\n(Archer)",
	value:4, kind:1, event:0,
	icon1:102, icon2:600, icon3:105,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalSummer:1, attrbuteMan:1,
	saberface:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 412:8 },
	AdAgain3:{ 111:5, 410:10, 414:5 },
	AdAgain4:{ 111:12, 414:10, 508:5 },
	skill1:{ 201:5 },/* Lv1->2 */
	skill2:{ 201:12 },/* Lv2->3 */
	skill3:{ 211:5 },/* Lv3->4 */
	skill4:{ 211:12, 410:5 },/* Lv4->5 */
	skill5:{ 221:5, 410:10 },/* Lv5->6 */
	skill6:{ 221:12, 412:5 },/* Lv6->7 */
	skill7:{ 412:10, 404:5 },/* Lv7->8 */
	skill8:{ 404:15, 511:10 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:213, text:"茨木童子\n〔ランサー〕",
	text2:"Ibaraki Doji\n(Lancer)",
	value:3, kind:2, event:0,
	icon1:105, icon2:303, icon3:109,
	nptypeB:0, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	devilish:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 301:18 },
	AdAgain3:{ 112:4, 507:5, 506:3 },
	AdAgain4:{ 112:10, 506:5, 511:4 },
	skill1:{ 202:4 },/* Lv1->2 */
	skill2:{ 202:10 },/* Lv2->3 */
	skill3:{ 212:4 },/* Lv3->4 */
	skill4:{ 212:10, 507:3 },/* Lv4->5 */
	skill5:{ 222:4, 507:5 },/* Lv5->6 */
	skill6:{ 222:10, 301:12 },/* Lv6->7 */
	skill7:{ 301:24, 308:15 },/* Lv7->8 */
	skill8:{ 308:45, 410:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:214, text:"牛若丸\n〔アサシン〕",
	text2:"Ushiwakamaru\n(Assassin)",
	value:3, kind:5, event:0,
	icon1:600, icon2:204, icon3:109,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalSummer:1, attrbuteMan:1,
	love:1, riding:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 400:8 },
	AdAgain3:{ 115:4, 411:8, 504:3 },
	AdAgain4:{ 115:10, 504:5, 510:4 },
	skill1:{ 205:4 },/* Lv1->2 */
	skill2:{ 205:10 },/* Lv2->3 */
	skill3:{ 215:4 },/* Lv3->4 */
	skill4:{ 215:10, 411:4 },/* Lv4->5 */
	skill5:{ 225:4, 411:8 },/* Lv5->6 */
	skill6:{ 225:10, 400:5 },/* Lv6->7 */
	skill7:{ 400:10, 410:5 },/* Lv7->8 */
	skill8:{ 410:15, 413:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:215, text:"ジャンヌ・ダルク\n〔バーサーカー〕",
	text2:"Jeanne d'Arc\n(Berserker Alter)",
	value:3, kind:6, event:0,
	icon1:204, icon2:105, icon3:103,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalSummer:1, attrbuteMan:1,
	saberface:1,
	AdAgain1:{ 617:1 },
	AdAgain2:{ 617:1 },
	AdAgain3:{ 617:1 },
	AdAgain4:{ 617:1 },
	skill1:{ 206:4 },/* Lv1->2 */
	skill2:{ 206:10 },/* Lv2->3 */
	skill3:{ 216:4 },/* Lv3->4 */
	skill4:{ 216:10, 406:4 },/* Lv4->5 */
	skill5:{ 226:4, 406:8 },/* Lv5->6 */
	skill6:{ 226:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 411:5 },/* Lv7->8 */
	skill8:{ 411:15, 510:8 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:216, text:"BB",
	text2:"BB",
	value:4, kind:10, event:0,
	icon1:108, icon2:600, icon3:911,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 100:5, 106:5 },
	AdAgain2:{ 100:12, 106:12 },
	AdAgain3:{ 110:5, 116:5 },
	AdAgain4:{ 110:12, 116:12 },
	skill1:{ 200:5, 206:5 },/* Lv1->2 */
	skill2:{ 200:12, 206:12 },/* Lv2->3 */
	skill3:{ 210:5, 216:5 },/* Lv3->4 */
	skill4:{ 210:12, 216:12 },/* Lv4->5 */
	skill5:{ 220:5, 226:5 },/* Lv5->6 */
	skill6:{ 220:12, 226:12 },/* Lv6->7 */
	skill7:{ 506:5, 500:5 },/* Lv7->8 */
	skill8:{ 511:9, 501:9 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:217, text:"メイヴ\n〔セイバー〕",
	text2:"Medb\n(Saber)",
	value:3, kind:0, event:0,
	icon1:600, icon2:803, icon3:105,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	riding:1, king:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 410:6 },
	AdAgain3:{ 110:4, 509:5, 404:4 },
	AdAgain4:{ 110:10, 404:7, 503:4 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 509:3 },/* Lv4->5 */
	skill5:{ 220:4, 509:5 },/* Lv5->6 */
	skill6:{ 220:10, 410:4 },/* Lv6->7 */
	skill7:{ 410:8, 414:5 },/* Lv7->8 */
	skill8:{ 414:15, 412:20 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:218, text:"謎のヒロインＸＸ",
	text2:"Mysterious Heroine\nXX(Foreigner)",
	value:3, kind:12, event:0,
	icon1:205, icon2:402, icon3:502,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteStar:1,
	npEXthreat:1,
	love:1, riding:1, dragon:1, king:1, saberface:1, saberface:1, arthur:1,
	AdAgain1:{ 302:8, 405:8 },
	AdAgain2:{ 506:8, 409:8 },
	AdAgain3:{ 505:8, 413:8 },
	AdAgain4:{ 502:8, 509:8 },
	skill1:{ 300:8 },/* Lv1->2 */
	skill2:{ 302:8 },/* Lv2->3 */
	skill3:{ 405:10 },/* Lv3->4 */
	skill4:{ 409:10 },/* Lv4->5 */
	skill5:{ 414:10 },/* Lv5->6 */
	skill6:{ 413:12 },/* Lv6->7 */
	skill7:{ 509:12 },/* Lv7->8 */
	skill8:{ 502:12 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:219, text:"ディルムッド・オディナ",
	text2:"Diarmuid\nUa Duibhne\n(Saber)",
	value:3, kind:0, event:0,
	icon1:204, icon2:109, icon3:200,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteEarth:1,
	love:1, riding:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 409:16, 510:2 },
	AdAgain4:{ 110:10, 510:4, 505:6 },
	skill1:{ 200:4 },/* Lv1->2 */
	skill2:{ 200:10 },/* Lv2->3 */
	skill3:{ 210:4 },/* Lv3->4 */
	skill4:{ 210:10, 409:8 },/* Lv4->5 */
	skill5:{ 220:4, 409:16 },/* Lv5->6 */
	skill6:{ 220:10, 300:12 },/* Lv6->7 */
	skill7:{ 300:24, 305:12 },/* Lv7->8 */
	skill8:{ 305:36, 307:60 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:220, text:"シトナイ",
	text2:"Sitonai",
	value:4, kind:11, event:0,
	icon1:205, icon2:102, icon3:600,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 104:5, 106:5 },
	AdAgain2:{ 104:12, 106:12 },
	AdAgain3:{ 114:5, 116:5 },
	AdAgain4:{ 114:12, 116:12 },
	skill1:{ 204:5, 206:5 },/* Lv1->2 */
	skill2:{ 204:12, 206:12 },/* Lv2->3 */
	skill3:{ 214:5, 216:5 },/* Lv3->4 */
	skill4:{ 214:12, 216:12 },/* Lv4->5 */
	skill5:{ 224:5, 226:5 },/* Lv5->6 */
	skill6:{ 224:12, 226:12 },/* Lv6->7 */
	skill7:{ 507:5, 509:5 },/* Lv7->8 */
	skill8:{ 502:9, 501:9 },/* Lv8->9 */
	skill9:{ 800:1 }/* Lv9->10 */
},
{
	id:221, text:"酒呑童子",
	text2:"Shuten Douji",
	value:3, kind:4, event:1,
	icon1:805, icon2:111, icon3:105,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, dragon:1, devilish:1,
	AdAgain1:{ 618:1 },
	AdAgain2:{ 618:1 },
	AdAgain3:{ 618:1 },
	AdAgain4:{ 618:1 },
	skill1:{ 204:4 },
	skill2:{ 204:10 },
	skill3:{ 214:4 },
	skill4:{ 214:10, 301:12 },
	skill5:{ 224:4, 301:24 },
	skill6:{ 224:10, 305:10 },
	skill7:{ 305:20, 404:4 },
	skill8:{ 404:12, 414:20 },
	skill9:{ 800:1 }
},
{
	id:222, text:"項羽",
	text2:"Xiang Yu",
	value:4, kind:6, event:0,
	icon1:204, icon2:110, icon3:400,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 405:8 },
	AdAgain3:{ 116:5, 308:29, 506:3 },
	AdAgain4:{ 116:12, 506:6, 512:8 },
	skill1:{ 206:5 },
	skill2:{ 206:12 },
	skill3:{ 216:5 },
	skill4:{ 216:12, 308:15 },
	skill5:{ 226:5, 308:29 },
	skill6:{ 226:12, 405:5 },
	skill7:{ 405:10, 413:6 },
	skill8:{ 413:18, 512:15 },
	skill9:{ 800:1 }
},
{
	id:223, text:"蘭陵王",
	text2:"Lanling Wang",
	value:3, kind:0, event:0,
	icon1:205, icon2:600, icon3:102,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	love:1, riding:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 404:7, 302:10 },
	AdAgain4:{ 110:10, 302:20, 502:4 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 404:4 },
	skill5:{ 220:4, 404:7 },
	skill6:{ 220:10, 300:12 },
	skill7:{ 300:24, 305:12 },
	skill8:{ 305:36, 508:8 },
	skill9:{ 800:1 }
},
{
	id:224, text:"秦良玉",
	text2:"Qin Liangyu",
	value:3, kind:2, event:0,
	icon1:112, icon2:109, icon3:203,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	love:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 400:8 },
	AdAgain3:{ 112:4, 403:7, 404:4 },
	AdAgain4:{ 112:10, 404:7, 500:6 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 403:4 },
	skill5:{ 222:4, 403:7 },
	skill6:{ 222:10, 400:5 },
	skill7:{ 400:10, 414:5 },
	skill8:{ 414:15, 415:20 },
	skill9:{ 800:1 }
},
{
	id:225, text:"赤兎馬",
	text2:"Red Hare",
	value:2, kind:3, event:0,
	icon1:101, icon2:204, icon3:108,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	love:1, riding:1, savagebeast:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 408:5 },
	AdAgain3:{ 113:4, 306:20, 304:10 },
	AdAgain4:{ 113:8, 304:20, 510:4 },
	skill1:{ 203:4 },
	skill2:{ 203:8 },
	skill3:{ 213:4 },
	skill4:{ 213:8, 306:10 },
	skill5:{ 223:4, 306:20 },
	skill6:{ 223:8, 408:4 },
	skill7:{ 408:7, 415:4 },
	skill8:{ 415:12, 505:10 },
	skill9:{ 800:1 }
},
{
	id:226, text:"虞美人",
	text2:"Yu Miaoyi",
	value:3, kind:5, event:0,
	icon1:602, icon2:302, icon3:800,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteEarth:1,
	devilish:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 303:12 },
	AdAgain3:{ 115:4, 415:8, 505:3 },
	AdAgain4:{ 115:10, 505:5, 503:4 },
	skill1:{ 205:4 },
	skill2:{ 205:10 },
	skill3:{ 215:4 },
	skill4:{ 215:10, 415:4 },
	skill5:{ 225:4, 415:8 },
	skill6:{ 225:10, 303:8 },
	skill7:{ 303:16, 307:15 },
	skill8:{ 307:45, 512:12 },
	skill9:{ 800:1 }
},
{
	id:227, text:"始皇帝",
	text2:"Shi Huang Di",
	value:4, kind:7, event:0,
	icon1:800, icon2:804, icon3:600,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	king:1,
	AdAgain1:{ 100:5, 104:5, 103:5 },
	AdAgain2:{ 101:5, 102:5, 105:5, 106:5 },
	AdAgain3:{ 110:5, 114:5, 113:5 },
	AdAgain4:{ 111:5, 112:5, 115:5, 116:5 },
	skill1:{ 200:5, 204:5, 203:5 },
	skill2:{ 201:5, 202:5, 205:5, 206:5 },
	skill3:{ 210:5, 214:5, 213:5 },
	skill4:{ 211:5, 212:5, 215:5, 216:5 },
	skill5:{ 220:5, 224:5, 223:5 },
	skill6:{ 221:5, 222:5, 225:5, 226:5 },
	skill7:{ 415:12 },
	skill8:{ 512:20 },
	skill9:{ 800:1 }
},
{
	id:228, text:"ブラダマンテ",
	text2:"Bradamante",
	value:4, kind:2, event:0,
	icon1:112, icon2:203, icon3:600,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	love:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 300:22 },
	AdAgain3:{ 112:5, 409:20, 504:3 },
	AdAgain4:{ 112:12, 504:6, 404:10 },
	skill1:{ 202:5 },
	skill2:{ 202:12 },
	skill3:{ 212:5 },
	skill4:{ 212:12, 409:10 },
	skill5:{ 222:5, 409:20 },
	skill6:{ 222:12, 300:15 },
	skill7:{ 300:29, 410:6 },
	skill8:{ 410:18, 414:24 },
	skill9:{ 800:1 }
},
{
	id:229, text:"ケツァル・コアトル\n〔サンバ／サンタ〕",
	text2:"Quetzalcoatl\n(Samba/Santa)",
	value:3, kind:7, event:0,
	icon1:105, icon2:109, icon3:103,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, king:1,
	AdAgain1:{ 619:1 },
	AdAgain2:{ 619:1 },
	AdAgain3:{ 619:1 },
	AdAgain4:{ 619:1 },
	skill1:{ 202:4, 203:4, 206:4 },
	skill2:{ 200:4, 201:4, 204:4, 205:4 },
	skill3:{ 212:4, 213:4, 216:4 },
	skill4:{ 210:4, 211:4, 214:4, 215:4 },
	skill5:{ 222:4, 223:4, 226:4 },
	skill6:{ 220:4, 221:4, 224:4, 225:4 },
	skill7:{ 413:10 },
	skill8:{ 511:12 },
	skill9:{ 800:1 }
},
{
	id:230, text:"紅閻魔",
	text2:"Beni-enma",
	value:4, kind:0, event:0,
	icon1:204, icon2:912, icon3:913,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 400:9 },
	AdAgain3:{ 110:5, 401:10, 404:4 },
	AdAgain4:{ 110:12, 404:8, 508:5 },
	skill1:{ 200:5 },
	skill2:{ 200:12 },
	skill3:{ 210:5 },
	skill4:{ 210:12, 401:5 },
	skill5:{ 220:5, 401:10 },
	skill6:{ 220:12, 400:6 },
	skill7:{ 400:12, 415:6 },
	skill8:{ 415:18, 411:24 },
	skill9:{ 800:1 }
},
{
	id:231, text:"李書文",
	text2:"Li Shuwen",
	value:4, kind:5, event:0,
	icon1:502, icon2:204, icon3:105,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteMan:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 301:22 },
	AdAgain3:{ 115:5, 402:10, 511:2 },
	AdAgain4:{ 115:12, 511:4, 415:12 },
	skill1:{ 205:5 },
	skill2:{ 205:12 },
	skill3:{ 215:5 },
	skill4:{ 215:12, 402:5 },
	skill5:{ 225:5, 402:10 },
	skill6:{ 225:12, 301:15 },
	skill7:{ 301:29, 305:15 },
	skill8:{ 305:44, 415:24 },
	skill9:{ 800:1 }
},
{
	id:232, text:"美遊・エーデルフェルト",
	text2:"Miyu Edelfelt",
	value:3, kind:4, event:0,
	icon1:102, icon2:203, icon3:600,
	nptypeA:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 300:18 },
	AdAgain3:{ 114:4, 303:16, 503:2 },
	AdAgain4:{ 114:10, 503:4, 404:8 },
	skill1:{ 204:4 },
	skill2:{ 204:10 },
	skill3:{ 214:4 },
	skill4:{ 214:10, 303:8 },
	skill5:{ 224:4, 303:16 },
	skill6:{ 224:10, 300:12 },
	skill7:{ 300:24, 509:3 },
	skill8:{ 509:9, 410:20 },
	skill9:{ 800:1 }
},
{
	id:233, text:"紫式部",
	text2:"Murasaki Shikibu",
	value:4, kind:4, event:0,
	icon1:701, icon2:805, icon3:200,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 406:8 },
	AdAgain3:{ 114:5, 506:6, 509:3 },
	AdAgain4:{ 114:12, 509:6, 508:5 },
	skill1:{ 204:5 },
	skill2:{ 204:12 },
	skill3:{ 214:5 },
	skill4:{ 214:12, 506:3 },
	skill5:{ 224:5, 506:6 },
	skill6:{ 224:12, 406:5 },
	skill7:{ 406:10, 415:6 },
	skill8:{ 415:18, 513:10 },
	skill9:{ 800:1 }
},
{
	id:234, text:"キングプロテア",
	text2:"Kingprotea",
	value:4, kind:11, event:0,
	icon1:901, icon2:806, icon3:105,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 100:5, 103:5 },
	AdAgain2:{ 100:12, 103:12 },
	AdAgain3:{ 110:5, 113:5 },
	AdAgain4:{ 110:12, 113:12 },
	skill1:{ 200:5, 203:5 },
	skill2:{ 200:12, 203:12 },
	skill3:{ 210:5, 213:5 },
	skill4:{ 210:12, 213:12 },
	skill5:{ 220:5, 223:5 },
	skill6:{ 220:12, 223:12 },
	skill7:{ 413:5, 512:5 },
	skill8:{ 502:9, 503:9 },
	skill9:{ 800:1 }
},
{
	id:235, text:"カーマ",
	text2:"Kama",
	value:4, kind:5, event:0,
	icon1:905, icon2:203, icon3:600,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteSky:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 505:5 },
	AdAgain3:{ 115:5, 511:4, 513:2 },
	AdAgain4:{ 115:12, 513:4, 303:24 },
	skill1:{ 205:5 },
	skill2:{ 205:12 },
	skill3:{ 215:5 },
	skill4:{ 215:12, 511:2 },
	skill5:{ 225:5, 511:4 },
	skill6:{ 225:12, 505:3 },
	skill7:{ 505:6, 501:3 },
	skill8:{ 501:8, 507:15 },
	skill9:{ 800:1 }
},
{
	id:236, text:"司馬懿〔ライネス〕",
	text2:"Sima Yi (Reines)",
	value:4, kind:3, event:0,
	icon1:200, icon2:600, icon3:205,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 405:8 },
	AdAgain3:{ 113:5, 406:10, 504:3 },
	AdAgain4:{ 113:12, 504:6, 508:5 },
	skill1:{ 203:5 },
	skill2:{ 203:12 },
	skill3:{ 213:5 },
	skill4:{ 213:12, 406:5 },
	skill5:{ 223:5, 406:10 },
	skill6:{ 223:12, 405:5 },
	skill7:{ 405:10, 307:18 },
	skill8:{ 307:54, 415:24 },
	skill9:{ 800:1 }
},
{
	id:237, text:"アストライア",
	text2:"Astraea",
	value:3, kind:7, event:0,
	icon1:113, icon2:102, icon3:109,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, roma:1,
	AdAgain1:{ 100:4, 104:4, 106:4 },
	AdAgain2:{ 102:4, 101:4, 103:4, 105:4 },
	AdAgain3:{ 110:4, 114:4, 116:4 },
	AdAgain4:{ 112:4, 111:4, 113:4, 115:4 },
	skill1:{ 200:4, 204:4, 206:4 },
	skill2:{ 202:4, 201:4, 203:4, 205:4 },
	skill3:{ 210:4, 214:4, 216:4 },
	skill4:{ 212:4, 211:4, 213:4, 215:4 },
	skill5:{ 220:4, 224:4, 226:4 },
	skill6:{ 222:4, 221:4, 223:4, 225:4 },
	skill7:{ 414:10 },
	skill8:{ 513:12 },
	skill9:{ 800:1 }
},
{
	id:238, text:"グレイ",
	text2:"Gray",
	value:3, kind:5, event:0,
	icon1:105, icon2:110, icon3:600,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	saberface:1,
	AdAgain1:{ 620:1 },
	AdAgain2:{ 620:1 },
	AdAgain3:{ 620:1 },
	AdAgain4:{ 620:1 },
	skill1:{ 205:4 },
	skill2:{ 205:10 },
	skill3:{ 215:4 },
	skill4:{ 215:10, 301:12 },
	skill5:{ 225:4, 301:24 },
	skill6:{ 225:10, 401:4 },
	skill7:{ 401:8, 303:10 },
	skill8:{ 303:30, 502:8 },
	skill9:{ 800:1 }
},
{
	id:239, text:"大いなる石像神",
	text2:"Great Statue God",
	value:4, kind:10, event:0,
	icon1:600, icon2:206, icon3:205,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 102:5, 104:5 },
	AdAgain2:{ 102:12, 104:12 },
	AdAgain3:{ 112:5, 114:5 },
	AdAgain4:{ 112:12, 114:12 },
	skill1:{ 202:5, 204:5 },
	skill2:{ 202:12, 204:12 },
	skill3:{ 212:5, 214:5 },
	skill4:{ 212:12, 214:12 },
	skill5:{ 222:5, 224:5 },
	skill6:{ 222:12, 224:12 },
	skill7:{ 413:8, 415:8 },
	skill8:{ 508:9, 513:9 },
	skill9:{ 800:1 }
},
{
	id:240, text:"ラクシュミー・\nバーイー",
	text2:"Lakshmibai",
	value:3, kind:0, event:0,
	icon1:105, icon2:205, icon3:203,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	divinity:1, riding:1, saberface:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 504:5, 404:4 },
	AdAgain4:{ 110:10, 404:7, 513:4 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 504:3 },
	skill5:{ 220:4, 504:5 },
	skill6:{ 220:10, 300:12 },
	skill7:{ 300:24, 308:15 },
	skill8:{ 308:45, 414:20 },
	skill9:{ 800:1 }
},
{
	id:241, text:"ウィリアム・テル",
	text2:"William Tell",
	value:2, kind:1, event:0,
	icon1:805, icon2:102, icon3:109,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	love:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:8, 400:6 },
	AdAgain3:{ 111:4, 304:20, 509:2 },
	AdAgain4:{ 111:8, 509:4, 503:4 },
	skill1:{ 201:4 },
	skill2:{ 201:8 },
	skill3:{ 211:4 },
	skill4:{ 211:8, 304:10 },
	skill5:{ 221:4, 304:20 },
	skill6:{ 221:8, 400:4 },
	skill7:{ 400:8, 505:3 },
	skill8:{ 505:8, 416:16 },
	skill9:{ 800:1 }
},
{
	id:242, text:"アルジュナ\n（オルタ）",
	text2:"Arjuna\n(Alter)",
	value:4, kind:6, event:0,
	icon1:105, icon2:114, icon3:203,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, personalEvil:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 506:5 },
	AdAgain3:{ 116:5, 507:6, 501:2 },
	AdAgain4:{ 116:12, 501:4, 514:5 },
	skill1:{ 206:5 },
	skill2:{ 206:12 },
	skill3:{ 216:5 },
	skill4:{ 216:12, 507:3 },
	skill5:{ 226:5, 507:6 },
	skill6:{ 226:12, 506:3 },
	skill7:{ 506:6, 413:6 },
	skill8:{ 413:18, 514:10 },
	skill9:{ 800:1 }
},
{
	id:243, text:"アシュヴァッターマン",
	text2:"Asvatthaman",
	value:3, kind:1, event:0,
	icon1:205, icon2:103, icon3:101,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, love:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 505:4 },
	AdAgain3:{ 111:4, 307:24, 507:3 },
	AdAgain4:{ 111:10, 507:5, 416:10 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 307:12 },
	skill5:{ 221:4, 307:24 },
	skill6:{ 221:10, 505:3 },
	skill7:{ 505:5, 416:5 },
	skill8:{ 416:15, 512:12 },
	skill9:{ 800:1 }
},
{
	id:244, text:"アスクレピオス",
	text2:"Asclepius",
	value:2, kind:4, event:0,
	icon1:300, icon2:805, icon3:600,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	divinity:1, love:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:8, 406:5 },
	AdAgain3:{ 114:4, 403:6, 407:4 },
	AdAgain4:{ 114:8, 407:7, 508:4 },
	skill1:{ 204:4 },
	skill2:{ 204:8 },
	skill3:{ 214:4 },
	skill4:{ 214:8, 403:3 },
	skill5:{ 224:4, 403:6 },
	skill6:{ 224:8, 406:4 },
	skill7:{ 406:7, 306:12 },
	skill8:{ 306:36, 514:7 },
	skill9:{ 800:1 }
},
{
	id:245, text:"魔王信長",
	text2:"Demon King Nobunaga",
	value:4, kind:8, event:0,
	icon1:105, icon2:205, icon3:400,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	king:1,
	AdAgain1:{ 301:10, 303:10 },
	AdAgain2:{ 401:10, 405:10 },
	AdAgain3:{ 506:10, 505:10 },
	AdAgain4:{ 510:10, 511:10 },
	skill1:{ 408:10 },
	skill2:{ 304:10 },
	skill3:{ 507:12 },
	skill4:{ 306:12 },
	skill5:{ 411:12 },
	skill6:{ 308:15 },
	skill7:{ 415:15 },
	skill8:{ 512:15 },
	skill9:{ 800:1 }
},
{
	id:246, text:"森長可",
	text2:"Mori Nagayoshi",
	value:2, kind:6, event:0,
	icon1:108, icon2:115, icon3:109,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalMad:1, attrbuteMan:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:8, 300:15 },
	AdAgain3:{ 116:4, 301:20, 402:4 },
	AdAgain4:{ 116:8, 402:7, 500:5 },
	skill1:{ 206:4 },
	skill2:{ 206:8 },
	skill3:{ 216:4 },
	skill4:{ 216:8, 301:10 },
	skill5:{ 226:4, 301:20 },
	skill6:{ 226:8, 300:10 },
	skill7:{ 300:20, 411:4 },
	skill8:{ 411:12, 511:7 },
	skill9:{ 800:1 }
},
{
	id:247, text:"長尾景虎",
	text2:"Nagao Kagetora",
	value:3, kind:2, event:1,
	icon1:102, icon2:204, icon3:105,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	divinity:1, riding:1,
	AdAgain1:{ 621:1 },
	AdAgain2:{ 621:1 },
	AdAgain3:{ 621:1 },
	AdAgain4:{ 621:1 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 300:12 },
	skill5:{ 222:4, 300:24 },
	skill6:{ 222:10, 302:10 },
	skill7:{ 302:20, 412:5 },
	skill8:{ 412:15, 414:20 },
	skill9:{ 800:1 }
},
{
	id:248, text:"レオナルド・ダ・ヴィンチ\n〔ライダー〕",
	text2:"Leonardo Da Vinci\n(Rider)",
	value:4, kind:3, event:0,
	icon1:302, icon2:204, icon3:106,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 407:8 },
	AdAgain3:{ 113:5, 408:10, 405:5 },
	AdAgain4:{ 113:12, 405:10, 508:5 },
	skill1:{ 203:5 },
	skill2:{ 203:12 },
	skill3:{ 213:5 },
	skill4:{ 213:12, 408:5 },
	skill5:{ 223:5, 408:10 },
	skill6:{ 223:12, 407:5 },
	skill7:{ 407:10, 512:4 },
	skill8:{ 512:11, 514:10 },
	skill9:{ 800:1 }
},
{
	id:249, text:"イアソン",
	text2:"Jason",
	value:0, kind:0, event:0,
	icon1:300, icon2:204, icon3:105,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	riding:1, love:1, argo:1,
	AdAgain1:{ 100:2 },
	AdAgain2:{ 100:4, 302:6 },
	AdAgain3:{ 110:2, 300:10, 404:2 },
	AdAgain4:{ 110:4, 404:3, 509:3 },
	skill1:{ 200:2 },
	skill2:{ 200:4 },
	skill3:{ 210:2 },
	skill4:{ 210:4, 300:5 },
	skill5:{ 220:2, 300:10 },
	skill6:{ 220:4, 302:4 },
	skill7:{ 302:8, 413:2 },
	skill8:{ 413:6, 514:4 },
	skill9:{ 800:1 }
},
{
	id:250, text:"パリス",
	text2:"Paris",
	value:1, kind:1, event:0,
	icon1:204, icon2:113, icon3:600,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	love:1, argo:1,
	AdAgain1:{ 101:3 },
	AdAgain2:{ 101:6, 400:5 },
	AdAgain3:{ 111:3, 305:12, 500:2 },
	AdAgain4:{ 111:6, 500:3, 503:3 },
	skill1:{ 201:3 },
	skill2:{ 201:6 },
	skill3:{ 211:3 },
	skill4:{ 211:6, 305:6 },
	skill5:{ 221:3, 305:12 },
	skill6:{ 221:6, 400:3 },
	skill7:{ 400:6, 509:2 },
	skill8:{ 509:6, 416:12 },
	skill9:{ 800:1 }
},
{
	id:251, text:"ガレス",
	text2:"Gareth",
	value:1, kind:2, event:0,
	icon1:203, icon2:600, icon3:206,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	riding:1, love:1,
	AdAgain1:{ 102:3 },
	AdAgain2:{ 102:6, 300:11 },
	AdAgain3:{ 112:3, 504:3, 409:5 },
	AdAgain4:{ 112:6, 409:10, 502:3 },
	skill1:{ 202:3 },
	skill2:{ 202:6 },
	skill3:{ 212:3 },
	skill4:{ 212:6, 504:2 },
	skill5:{ 222:3, 504:3 },
	skill6:{ 222:6, 300:8 },
	skill7:{ 300:15, 409:6 },
	skill8:{ 409:18, 414:12 },
	skill9:{ 800:1 }
},
{
	id:252, text:"バーソロミュー・ロバーツ",
	text2:"Bartholomew Roberts",
	value:0, kind:3, event:0,
	icon1:106, icon2:704, icon3:101,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteMan:1,
	riding:1, love:1,
	AdAgain1:{ 103:2 },
	AdAgain2:{ 103:4, 304:8 },
	AdAgain3:{ 113:2, 506:2, 401:2 },
	AdAgain4:{ 113:4, 401:4, 403:4 },
	skill1:{ 203:2 },
	skill2:{ 203:4 },
	skill3:{ 213:2 },
	skill4:{ 213:4, 506:1 },
	skill5:{ 223:2, 506:2 },
	skill6:{ 223:4, 304:5 },
	skill7:{ 304:10, 410:2 },
	skill8:{ 410:6, 308:24 },
	skill9:{ 800:1 }
},
{
	id:253, text:"陳宮",
	text2:"Chen Gong",
	value:1, kind:4, event:0,
	icon1:206, icon2:200, icon3:103,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:3 },
	AdAgain2:{ 104:6, 406:4 },
	AdAgain3:{ 114:3, 405:5, 402:3 },
	AdAgain4:{ 114:6, 402:5, 508:3 },
	skill1:{ 204:3 },
	skill2:{ 204:6 },
	skill3:{ 214:3 },
	skill4:{ 214:6, 405:3 },
	skill5:{ 224:3, 405:5 },
	skill6:{ 224:6, 406:3 },
	skill7:{ 406:5, 411:3 },
	skill8:{ 411:9, 415:12 },
	skill9:{ 800:1 }
},
{
	id:254, text:"シャルロット・コルデー",
	text2:"Charlotte Corday",
	value:0, kind:5, event:0,
	icon1:900, icon2:502, icon3:107,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 105:2 },
	AdAgain2:{ 105:4, 303:5 },
	AdAgain3:{ 115:2, 505:2, 307:5 },
	AdAgain4:{ 115:4, 307:10, 513:2 },
	skill1:{ 205:2 },
	skill2:{ 205:4 },
	skill3:{ 215:2 },
	skill4:{ 215:4, 505:1 },
	skill5:{ 225:2, 505:2 },
	skill6:{ 225:4, 303:4 },
	skill7:{ 303:7, 510:1 },
	skill8:{ 510:3, 307:24 },
	skill9:{ 800:1 }
},
{
	id:255, text:"サロメ",
	text2:"Salome",
	value:1, kind:6, event:0,
	icon1:107, icon2:202, icon3:302,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 106:3 },
	AdAgain2:{ 106:6, 301:11 },
	AdAgain3:{ 116:3, 507:3, 303:5 },
	AdAgain4:{ 116:6, 303:10, 511:3 },
	skill1:{ 206:3 },
	skill2:{ 206:6 },
	skill3:{ 216:3 },
	skill4:{ 216:6, 507:2 },
	skill5:{ 226:3, 507:3 },
	skill6:{ 226:6, 301:8 },
	skill7:{ 301:15, 306:9 },
	skill8:{ 306:27, 412:12 },
	skill9:{ 800:1 }
},
{
	id:256, text:"宮本武蔵\n〔バーサーカー〕",
	text2:"Miyamoto Musashi\n(Berserker)",
	value:4, kind:6, event:0,
	icon1:204, icon2:914, icon3:502,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	riding:1, divinity:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 300:22 },
	AdAgain3:{ 116:5, 410:10, 507:3 },
	AdAgain4:{ 116:12, 507:6, 510:5 },
	skill1:{ 206:5 },
	skill2:{ 206:12 },
	skill3:{ 216:5 },
	skill4:{ 216:12, 410:5 },
	skill5:{ 226:5, 410:10 },
	skill6:{ 226:12, 300:15 },
	skill7:{ 300:29, 413:6 },
	skill8:{ 413:18, 513:10 },
	skill9:{ 800:1 }
},
{
	id:257, text:"刑部姫\n〔アーチャー〕",
	text2:"Osakabehime\n(Archer)",
	value:3, kind:1, event:0,
	icon1:108, icon2:206, icon3:111,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalSummer:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 303:12 },
	AdAgain3:{ 111:4, 308:24, 410:4 },
	AdAgain4:{ 111:10, 410:8, 405:10 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 308:12 },
	skill5:{ 221:4, 308:24 },
	skill6:{ 221:10, 303:8 },
	skill7:{ 303:16, 512:3 },
	skill8:{ 512:9, 416:20 },
	skill9:{ 800:1 }
},
{
	id:258, text:"カーミラ\n〔ライダー〕",
	text2:"Carmilla\n(Rider)",
	value:3, kind:3, event:0,
	icon1:805, icon2:800, icon3:300,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 305:15 },
	AdAgain3:{ 113:4, 505:5, 403:4 },
	AdAgain4:{ 113:10, 403:7, 410:10 },
	skill1:{ 203:4 },
	skill2:{ 203:10 },
	skill3:{ 213:4 },
	skill4:{ 213:10, 505:3 },
	skill5:{ 223:4, 505:5 },
	skill6:{ 223:10, 305:10 },
	skill7:{ 305:20, 307:15 },
	skill8:{ 307:45, 306:60 },
	skill9:{ 800:1 }
},
{
	id:259, text:"葛飾北斎\n〔セイバー〕",
	text2:"Katsushika Hokusai\n(Saber)",
	value:3, kind:0, event:1,
	icon1:600, icon2:109, icon3:102,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	divinity:1,
	AdAgain1:{ 622:1 },
	AdAgain2:{ 622:1 },
	AdAgain3:{ 622:1 },
	AdAgain4:{ 622:1 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 400:5 },
	skill5:{ 220:4, 400:10 },
	skill6:{ 220:10, 410:4 },
	skill7:{ 410:8, 411:5 },
	skill8:{ 411:15, 415:20 },
	skill9:{ 800:1 }
},
{
	id:260, text:"アルトリア・ペンドラゴン\n〔ルーラー〕",
	text2:"Artoria Pendragon\n(Ruler)",
	value:4, kind:7, event:0,
	icon1:600, icon2:916, icon3:105,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalSummer:1, attrbuteSky:1,
	dragon:1, saberface:1, arthur:1, king:1,
	AdAgain1:{ 101:5, 102:5, 104:5 },
	AdAgain2:{ 100:5, 103:5, 105:5, 106:5 },
	AdAgain3:{ 111:5, 112:5, 114:5 },
	AdAgain4:{ 110:5, 113:5, 115:5, 116:5 },
	skill1:{ 201:5, 202:5, 204:5 },
	skill2:{ 200:5, 203:5, 205:5, 206:5 },
	skill3:{ 211:5, 212:5, 214:5 },
	skill4:{ 210:5, 213:5, 215:5, 216:5 },
	skill5:{ 221:5, 222:5, 224:5 },
	skill6:{ 220:5, 223:5, 225:5, 226:5 },
	skill7:{ 410:12 },
	skill8:{ 502:15 },
	skill9:{ 800:1 }
},
{
	id:261, text:"謎のアルターエゴ・Λ",
	text2:"Mysterious Alter Ego\nΛ",
	value:3, kind:2, event:0,
	icon1:102, icon2:915, icon3:800,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	dragon:1, devilish:1, divinity:1, riding:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 410:6 },
	AdAgain3:{ 112:4, 504:5, 404:4 },
	AdAgain4:{ 112:10, 404:7, 414:10 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 504:3 },
	skill5:{ 222:4, 504:5 },
	skill6:{ 222:10, 410:4 },
	skill7:{ 410:8, 412:5 },
	skill8:{ 412:15, 514:8 },
	skill9:{ 800:1 }
},
{
	id:262, text:"オキタ・Ｊ・ソウジ",
	text2:"Okita J Soji",
	value:3, kind:5, event:0,
	icon1:108, icon2:204, icon3:101,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalSummer:1, attrbuteMan:1,
	saberface:1,
	AdAgain1:{ 105:4 },
	AdAgain2:{ 105:10, 506:4 },
	AdAgain3:{ 115:4, 410:8, 500:3 },
	AdAgain4:{ 115:10, 500:5, 501:4 },
	skill1:{ 205:4 },
	skill2:{ 205:10 },
	skill3:{ 215:4 },
	skill4:{ 215:10, 410:4 },
	skill5:{ 225:4, 410:8 },
	skill6:{ 225:10, 506:3 },
	skill7:{ 506:5, 409:10 },
	skill8:{ 409:30, 512:12 },
	skill9:{ 800:1 }
},
{
	id:263, text:"スペース・\nイシュタル",
	text2:"Space Ishtar",
	value:4, kind:8, event:0,
	icon1:105, icon2:106, icon3:600,
	nptypeB:1, nptypeQ:1, nptypeA:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteStar:1,
	AdAgain1:{ 402:10, 506:10 },
	AdAgain2:{ 403:10, 509:10 },
	AdAgain3:{ 505:10, 512:10 },
	AdAgain4:{ 508:10, 501:10 },
	skill1:{ 405:10 },
	skill2:{ 404:10 },
	skill3:{ 306:12 },
	skill4:{ 307:12 },
	skill5:{ 308:12 },
	skill6:{ 414:15 },
	skill7:{ 510:15 },
	skill8:{ 514:15 },
	skill9:{ 800:1 }
},
{
	id:264, text:"カラミティ・\nジェーン",
	text2:"Calamity Jane",
	value:3, kind:1, event:0,
	icon1:700, icon2:800, icon3:305,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 303:12 },
	AdAgain3:{ 111:4, 308:24, 404:4 },
	AdAgain4:{ 111:10, 404:7, 500:6 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 308:12 },
	skill5:{ 221:4, 308:24 },
	skill6:{ 221:10, 303:8 },
	skill7:{ 303:16, 412:5 },
	skill8:{ 412:15, 416:20 },
	skill9:{ 800:1 }
},
{
	id:265, text:"アストルフォ\n〔セイバー〕",
	text2:"Astolfo\n(Saber)",
	value:4, kind:0, event:0,
	icon1:600, icon2:804, icon3:105,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 300:22 },
	AdAgain3:{ 110:5, 409:20, 504:3 },
	AdAgain4:{ 110:12, 504:6, 502:5 },
	skill1:{ 200:5 },
	skill2:{ 200:12 },
	skill3:{ 210:5 },
	skill4:{ 210:12, 409:10 },
	skill5:{ 220:5, 409:20 },
	skill6:{ 220:12, 300:15 },
	skill7:{ 300:29, 414:6 },
	skill8:{ 414:18, 413:24 },
	skill9:{ 800:1 }
},
{
	id:266, text:"ナイチンゲール\n〔サンタ〕",
	text2:"Nightingale\n(Santa)",
	value:3, kind:1, event:1,
	icon1:805, icon2:203, icon3:105,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 623:1 },
	AdAgain2:{ 623:1 },
	AdAgain3:{ 623:1 },
	AdAgain4:{ 623:1 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 407:4 },
	skill5:{ 221:4, 407:8 },
	skill6:{ 221:10, 507:3 },
	skill7:{ 507:5, 306:15 },
	skill8:{ 306:45, 308:60 },
	skill9:{ 800:1 }
},
{
	id:267, text:"超人オリオン",
	text2:"Super Orion",
	value:4, kind:1, event:0,
	icon1:103, icon2:203, icon3:109,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	divinity:1, love:1,
	sEXsavagebeast:1, sEXdemonic:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 300:22 },
	AdAgain3:{ 111:5, 402:10, 509:3 },
	AdAgain4:{ 111:12, 509:6, 510:5 },
	skill1:{ 201:5 },
	skill2:{ 201:12 },
	skill3:{ 211:5 },
	skill4:{ 211:12, 402:5 },
	skill5:{ 221:5, 402:10 },
	skill6:{ 221:12, 300:15 },
	skill7:{ 300:29, 416:6 },
	skill8:{ 416:18, 515:10 },
	skill9:{ 800:1 }
},
{
	id:268, text:"マンドリカルド",
	text2:"Mandricardo",
	value:2, kind:3, event:0,
	icon1:113, icon2:105, icon3:112,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	love:1, riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:8, 303:10 },
	AdAgain3:{ 113:4, 304:20, 408:4 },
	AdAgain4:{ 113:8, 408:7, 409:16 },
	skill1:{ 203:4 },
	skill2:{ 203:8 },
	skill3:{ 213:4 },
	skill4:{ 213:8, 304:10 },
	skill5:{ 223:4, 304:20 },
	skill6:{ 223:8, 303:7 },
	skill7:{ 303:13, 504:3 },
	skill8:{ 504:8, 417:16 },
	skill9:{ 800:1 }
},
{
	id:269, text:"エウロペ",
	text2:"Europa",
	value:4, kind:3, event:0,
	icon1:205, icon2:111, icon3:803,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteSky:1,
	riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 400:9 },
	AdAgain3:{ 113:5, 503:4, 512:3 },
	AdAgain4:{ 113:12, 512:6, 515:5 },
	skill1:{ 203:5 },
	skill2:{ 203:12 },
	skill3:{ 213:5 },
	skill4:{ 213:12, 503:2 },
	skill5:{ 223:5, 503:4 },
	skill6:{ 223:12, 400:6 },
	skill7:{ 400:12, 417:6 },
	skill8:{ 417:18, 515:10 },
	skill9:{ 800:1 }
},
{
	id:270, text:"楊貴妃",
	text2:"Yang Guifei",
	value:4, kind:12, event:0,
	icon1:205, icon2:800, icon3:917,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 301:10, 303:10 },
	AdAgain2:{ 404:10, 500:10 },
	AdAgain3:{ 505:10, 508:10 },
	AdAgain4:{ 507:10, 501:10 },
	skill1:{ 304:10 },
	skill2:{ 401:10 },
	skill3:{ 403:12 },
	skill4:{ 307:12 },
	skill5:{ 415:12 },
	skill6:{ 512:15 },
	skill7:{ 513:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:271, text:"清少納言",
	text2:"Sei Shonagon",
	value:4, kind:1, event:0,
	icon1:105, icon2:204, icon3:101,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 101:5 },
	AdAgain2:{ 101:12, 411:8 },
	AdAgain3:{ 111:5, 414:10, 415:5 },
	AdAgain4:{ 111:12, 415:10, 515:5 },
	skill1:{ 201:5 },
	skill2:{ 201:12 },
	skill3:{ 211:5 },
	skill4:{ 211:12, 414:5 },
	skill5:{ 221:5, 414:10 },
	skill6:{ 221:12, 411:5 },
	skill7:{ 411:10, 513:3 },
	skill8:{ 513:8, 514:10 },
	skill9:{ 800:1 }
},
{
	id:272, text:"オデュッセウス",
	text2:"Odysseus",
	value:4, kind:3, event:0,
	icon1:112, icon2:600, icon3:205,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	love:1, riding:1, king:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 405:8 },
	AdAgain3:{ 113:5, 408:10, 404:4 },
	AdAgain4:{ 113:12, 404:8, 508:5 },
	skill1:{ 203:5 },
	skill2:{ 203:12 },
	skill3:{ 213:5 },
	skill4:{ 213:12, 408:5 },
	skill5:{ 223:5, 408:10 },
	skill6:{ 223:12, 405:5 },
	skill7:{ 405:10, 512:4 },
	skill8:{ 512:11, 417:24 },
	skill9:{ 800:1 }
},
{
	id:273, text:"ディオスクロイ",
	text2:"Dioscuri",
	value:4, kind:0, event:0,
	icon1:115, icon2:106, icon3:112,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	love:1, riding:1, divinity:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 304:22 },
	AdAgain3:{ 110:5, 507:6, 512:3 },
	AdAgain4:{ 110:12, 512:6, 418:12 },
	skill1:{ 200:5 },
	skill2:{ 200:12 },
	skill3:{ 210:5 },
	skill4:{ 210:12, 507:3 },
	skill5:{ 220:5, 507:6 },
	skill6:{ 220:12, 304:15 },
	skill7:{ 304:29, 515:3 },
	skill8:{ 515:8, 418:24 },
	skill9:{ 800:1 }
},
{
	id:274, text:"カイニス",
	text2:"Caenis",
	value:3, kind:2, event:0,
	icon1:105, icon2:115, icon3:113,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	love:1, divinity:1, king:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 402:6 },
	AdAgain3:{ 112:4, 307:24, 505:3 },
	AdAgain4:{ 112:10, 505:5, 516:6 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 307:12 },
	skill5:{ 222:4, 307:24 },
	skill6:{ 222:10, 402:4 },
	skill7:{ 402:8, 417:5 },
	skill8:{ 417:15, 404:16 },
	skill9:{ 800:1 }
},
{
	id:275, text:"ロムルス＝クィリヌス",
	text2:"Romulus-Quirinus",
	value:4, kind:2, event:0,
	icon1:105, icon2:205, icon3:103,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, roma:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 400:9 },
	AdAgain3:{ 112:5, 413:10, 503:2 },
	AdAgain4:{ 112:12, 503:4, 514:5 },
	skill1:{ 202:5 },
	skill2:{ 202:12 },
	skill3:{ 212:5 },
	skill4:{ 212:12, 413:5 },
	skill5:{ 222:5, 413:10 },
	skill6:{ 222:12, 400:6 },
	skill7:{ 400:12, 418:6 },
	skill8:{ 418:18, 516:15 },
	skill9:{ 800:1 }
},
{
	id:276, text:"ボイジャー",
	text2:"Voyager",
	value:4, kind:12, event:0,
	icon1:600, icon2:204, icon3:109,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	AdAgain1:{ 303:10, 405:10 },
	AdAgain2:{ 408:10, 506:10 },
	AdAgain3:{ 306:10, 508:10 },
	AdAgain4:{ 410:10, 515:10 },
	skill1:{ 405:10 },
	skill2:{ 306:10 },
	skill3:{ 308:12 },
	skill4:{ 414:12 },
	skill5:{ 512:12 },
	skill6:{ 514:15 },
	skill7:{ 418:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:277, text:"鬼女紅葉",
	text2:"Kijyo Koyo",
	value:3, kind:6, event:0,
	icon1:200, icon2:110, icon3:300,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	dragon:1, devilish:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 302:15 },
	AdAgain3:{ 116:4, 500:5, 506:3 },
	AdAgain4:{ 116:10, 506:5, 502:4 },
	skill1:{ 206:4 },
	skill2:{ 206:10 },
	skill3:{ 216:4 },
	skill4:{ 216:10, 500:3 },
	skill5:{ 226:4, 500:5 },
	skill6:{ 226:10, 302:10 },
	skill7:{ 302:20, 413:5 },
	skill8:{ 413:15, 513:8 },
	skill9:{ 800:1 }
},
{
	id:278, text:"宇津見エリセ",
	text2:"Utsumi Erice",
	value:3, kind:2, event:1,
	icon1:102, icon2:500, icon3:900,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	divinity:1,
	AdAgain1:{ 624:1 },
	AdAgain2:{ 624:1 },
	AdAgain3:{ 624:1 },
	AdAgain4:{ 624:1 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 301:12 },
	skill5:{ 222:4, 301:24 },
	skill6:{ 222:10, 401:4 },
	skill7:{ 401:8, 307:15 },
	skill8:{ 307:45, 416:20 },
	skill9:{ 800:1 }
},
{
	id:279, text:"アルトリア・キャスター",
	text2:"Artoria Pendragon\n(Caster)",
	value:4, kind:4, event:0,
	icon1:105, icon2:600, icon3:102,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	saberface:1, arthur:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 400:9 },
	AdAgain3:{ 114:5, 406:10, 503:2 },
	AdAgain4:{ 114:12, 503:4, 515:5 },
	skill1:{ 204:5 },
	skill2:{ 204:12 },
	skill3:{ 214:5 },
	skill4:{ 214:12, 406:5 },
	skill5:{ 224:5, 406:10 },
	skill6:{ 224:12, 400:6 },
	skill7:{ 400:12, 514:3 },
	skill8:{ 514:8, 515:10 },
	skill9:{ 800:1 }
},
{
	id:280, text:"殺生院キアラ",
	text2:"Sesshoin Kiara\n(Moon Cancer)",
	value:4, kind:10, event:0,
	icon1:918, icon2:600, icon3:204,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteEarth:1,
	AdAgain1:{ 103:5, 105:5 },
	AdAgain2:{ 103:12, 105:12 },
	AdAgain3:{ 113:5, 115:5 },
	AdAgain4:{ 113:12, 115:12 },
	skill1:{ 203:5, 205:5 },
	skill2:{ 203:12, 205:12 },
	skill3:{ 213:5, 215:5 },
	skill4:{ 213:12, 215:12 },
	skill5:{ 223:5, 225:5 },
	skill6:{ 223:12, 225:12 },
	skill7:{ 410:8, 505:5 },
	skill8:{ 513:9, 516:12 },
	skill9:{ 800:1 }
},
{
	id:281, text:"イリヤスフィール・フォン・\nアインツベルン",
	text2:"Illyasviel von\nEinzbern(Archer)",
	value:3, kind:1, event:0,
	icon1:101, icon2:205, icon3:600,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalSummer:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 500:4 },
	AdAgain3:{ 111:4, 410:8, 404:4 },
	AdAgain4:{ 111:10, 404:7, 514:4 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 410:4 },
	skill5:{ 221:4, 410:8 },
	skill6:{ 221:10, 500:3 },
	skill7:{ 500:5, 306:15 },
	skill8:{ 306:45, 418:20 },
	skill9:{ 800:1 }
},
{
	id:282, text:"ブリュンヒルデ",
	text2:"Brynhildr\n(Berserker)",
	value:3, kind:6, event:0,
	icon1:204, icon2:602, icon3:111,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 410:6 },
	AdAgain3:{ 116:4, 401:8, 412:4 },
	AdAgain4:{ 116:10, 412:8, 414:10 },
	skill1:{ 206:4 },
	skill2:{ 206:10 },
	skill3:{ 216:4 },
	skill4:{ 216:10, 401:4 },
	skill5:{ 226:4, 401:8 },
	skill6:{ 226:10, 410:4 },
	skill7:{ 410:8, 414:5 },
	skill8:{ 414:15, 417:20 },
	skill9:{ 800:1 }
},
{
	id:283, text:"虞美人",
	text2:"Yu Miaoy\n(Lancer)",
	value:3, kind:2, event:1,
	icon1:203, icon2:600, icon3:101,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalEvil:1, attrbuteEarth:1,
	devilish:1,
	AdAgain1:{ 625:1 },
	AdAgain2:{ 625:1 },
	AdAgain3:{ 625:1 },
	AdAgain4:{ 625:1 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 410:4 },
	skill5:{ 222:4, 410:8 },
	skill6:{ 222:10, 504:3 },
	skill7:{ 504:5, 415: 5},
	skill8:{ 415:15, 516:12 },
	skill9:{ 800:1 }
},
{
	id:284, text:"アビゲイル・ウィリアムズ\n〔夏〕",
	text2:"Abigail Williams\n(Summer)",
	value:4, kind:12, event:0,
	icon1:919, icon2:804, icon3:600,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 303:10, 400:10 },
	AdAgain2:{ 408:10, 504:10 },
	AdAgain3:{ 509:10, 507:10 },
	AdAgain4:{ 410:10, 501:10 },
	skill1:{ 301:10 },
	skill2:{ 303:10 },
	skill3:{ 304:12 },
	skill4:{ 410:12 },
	skill5:{ 412:12 },
	skill6:{ 413:15 },
	skill7:{ 514:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:285, text:"巴御前",
	text2:"Tomoe Gozen\n(Saber)",
	value:3, kind:0, event:0,
	icon1:203, icon2:102, icon3:402,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	devilish:1, riding:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 405:8, 411:4 },
	AdAgain4:{ 110:10, 411:8, 410:10 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 405:4 },
	skill5:{ 220:4, 405:8 },
	skill6:{ 220:10, 300:12 },
	skill7:{ 300:24, 411:5 },
	skill8:{ 411:15, 512:12 },
	skill9:{ 800:1 }
},
{
	id:286, text:"紫式部",
	text2:"Murasaki Shikibu\n(Rider)",
	value:3, kind:3, event:0,
	icon1:805, icon2:801, icon3:602,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 301:18 },
	AdAgain3:{ 113:4, 305:20, 410:4 },
	AdAgain4:{ 113:10, 410:8, 307:30 },
	skill1:{ 203:4 },
	skill2:{ 203:10 },
	skill3:{ 213:4 },
	skill4:{ 213:10, 305:10 },
	skill5:{ 223:4, 305:20 },
	skill6:{ 223:10, 301:12 },
	skill7:{ 301:24, 416:5 },
	skill8:{ 416:15, 513:8 },
	skill9:{ 800:1 }
},
{
	id:287, text:"卑弥呼",
	text2:"Himiko",
	value:4, kind:7, event:0,
	icon1:105, icon2:103, icon3:600,
	nptypeB:1, npeffectS:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	king:1,
	AdAgain1:{ 101:5, 103:5, 104:5 },
	AdAgain2:{ 100:5, 102:5, 105:5, 106:5 },
	AdAgain3:{ 111:5, 113:5, 114:5 },
	AdAgain4:{ 110:5, 112:5, 115:5, 116:5 },
	skill1:{ 201:5, 203:5, 204:5 },
	skill2:{ 200:5, 202:5, 205:5, 206:5 },
	skill3:{ 211:5, 213:5, 214:5 },
	skill4:{ 210:5, 212:5, 215:5, 216:5 },
	skill5:{ 221:5, 223:5, 224:5 },
	skill6:{ 220:5, 222:5, 225:5, 226:5 },
	skill7:{ 411:12 },
	skill8:{ 513:15 },
	skill9:{ 800:1 }
},
{
	id:288, text:"斎藤一",
	text2:"Saito Hajime",
	value:3, kind:0, event:0,
	icon1:111, icon2:204, icon3:105,
	nptypeA:1, npeffectO:1,
	policyLaw:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 301:24, 306:12 },
	AdAgain4:{ 110:10, 306:24, 511:4 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 301:12 },
	skill5:{ 220:4, 301:24 },
	skill6:{ 220:10, 300:12 },
	skill7:{ 300:24, 307:15 },
	skill8:{ 307:45, 415:20 },
	skill9:{ 800:1 }
},
{
	id:289, text:"織田信勝",
	text2:"Oda Nobukatsu",
	value:0, kind:1, event:0,
	icon1:805, icon2:400, icon3:206,
	nptypeB:1, npeffectS:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 101:2 },
	AdAgain2:{ 101:4, 303:5 },
	AdAgain3:{ 111:2, 402:4, 411:2 },
	AdAgain4:{ 111:4, 411:4, 512:3 },
	skill1:{ 201:2 },
	skill2:{ 201:4 },
	skill3:{ 211:2 },
	skill4:{ 211:4, 402:2 },
	skill5:{ 221:2, 402:4 },
	skill6:{ 221:4, 303:4 },
	skill7:{ 303:7, 308:6 },
	skill8:{ 308:18, 416:8 },
	skill9:{ 800:1 }
},
{
	id:290, text:"ヴァン・ゴッホ",
	text2:"Van Gogh",
	value:4, kind:12, event:0,
	icon1:203, icon2:701, icon3:105,
	nptypeA:1, npeffectS:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 303:10, 304:10 },
	AdAgain2:{ 404:10, 506:10 },
	AdAgain3:{ 500:10, 509:10 },
	AdAgain4:{ 505:10, 503:10 },
	skill1:{ 303:10 },
	skill2:{ 400:10 },
	skill3:{ 406:12 },
	skill4:{ 407:12 },
	skill5:{ 414:12 },
	skill6:{ 503:15 },
	skill7:{ 516:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:291, text:"ネモ",
	text2:"Nemo",
	value:4, kind:3, event:0,
	icon1:106, icon2:203, icon3:102,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteSky:1,
	divinity:1, love:1, riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 405:8 },
	AdAgain3:{ 113:5, 410:10, 414:5 },
	AdAgain4:{ 113:12, 414:10, 418:12 },
	skill1:{ 203:5 },
	skill2:{ 203:12 },
	skill3:{ 213:5 },
	skill4:{ 213:12, 410:5 },
	skill5:{ 223:5, 410:10 },
	skill6:{ 223:12, 405:5 },
	skill7:{ 405:10, 512:4 },
	skill8:{ 512:11, 418:24 },
	skill9:{ 800:1 }
},
{
	id:292, text:"蘆屋道満",
	text2:"Ashiya Doman",
	value:4, kind:11, event:0,
	icon1:700, icon2:203, icon3:600,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	divinity:1, devilish:1,
	AdAgain1:{ 104:5, 105:5 },
	AdAgain2:{ 104:12, 105:12 },
	AdAgain3:{ 114:5, 115:5 },
	AdAgain4:{ 114:12, 115:12 },
	skill1:{ 204:5, 205:5 },
	skill2:{ 204:12, 205:12 },
	skill3:{ 214:5, 215:5 },
	skill4:{ 214:12, 215:12 },
	skill5:{ 224:5, 225:5 },
	skill6:{ 224:12, 225:12 },
	skill7:{ 419:5, 515:5 },
	skill8:{ 501:9, 517:9 },
	skill9:{ 800:1 }
},
{
	id:293, text:"渡辺綱",
	text2:"Watanabe no Tsuna",
	value:3, kind:0, event:0,
	icon1:114, icon2:204, icon3:103,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteMan:1,
	riding:1, love:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 300:18 },
	AdAgain3:{ 110:4, 411:8, 404:4 },
	AdAgain4:{ 110:10, 404:7, 513:4 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 411:4 },
	skill5:{ 220:4, 411:8 },
	skill6:{ 220:10, 300:12 },
	skill7:{ 300:24, 415:5 },
	skill8:{ 415:15, 419:20 },
	skill9:{ 800:1 }
},
{
	id:294, text:"伊吹童子",
	text2:"Ibuki Doji",
	value:4, kind:0, event:0,
	icon1:105, icon2:103, icon3:805,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteSky:1,
	divinity:1, devilish:1, dragon:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 403:6 },
	AdAgain3:{ 110:5, 301:29, 511:2 },
	AdAgain4:{ 110:12, 511:4, 517:5 },
	skill1:{ 200:5 },
	skill2:{ 200:12 },
	skill3:{ 210:5 },
	skill4:{ 210:12, 301:15 },
	skill5:{ 220:5, 301:29 },
	skill6:{ 220:12, 403:4 },
	skill7:{ 403:8, 502:3 },
	skill8:{ 502:8, 517:10 },
	skill9:{ 800:1 }
},
{
	id:295, text:"カルナ\n〔サンタ〕",
	text2:"Karna\n(Santa)",
	value:3, kind:0, event:1,
	icon1:110, icon2:204, icon3:600,
	nptypeQ:1, npeffectO:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1,
	AdAgain1:{ 626:1 },
	AdAgain2:{ 626:1 },
	AdAgain3:{ 626:1 },
	AdAgain4:{ 626:1 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 303:8 },
	skill5:{ 220:4, 303:16 },
	skill6:{ 220:10, 304:12 },
	skill7:{ 304:24, 417:5 },
	skill8:{ 417:15, 418:20 },
	skill9:{ 800:1 }
},
{
	id:296, text:"ヴリトラ",
	text2:"Vritra",
	value:4, kind:2, event:0,
	icon1:102, icon2:107, icon3:203,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteSky:1,
	devilish:1, dragon:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 302:18 },
	AdAgain3:{ 112:5, 403:8, 307:15 },
	AdAgain4:{ 112:12, 307:29, 502:5 },
	skill1:{ 202:5 },
	skill2:{ 202:12 },
	skill3:{ 212:5 },
	skill4:{ 212:12, 403:4 },
	skill5:{ 222:5, 403:8 },
	skill6:{ 222:12, 302:12 },
	skill7:{ 302:24, 412:6 },
	skill8:{ 412:18, 413:24 },
	skill9:{ 800:1 }
},
{
	id:297, text:"千子村正",
	text2:"Senji\nMuramasa",
	value:4, kind:0, event:0,
	icon1:104, icon2:502, icon3:600,
	nptypeA:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 402:8 },
	AdAgain3:{ 110:5, 401:10, 414:5 },
	AdAgain4:{ 110:12, 414:10, 515:5 },
	skill1:{ 200:5 },
	skill2:{ 200:12 },
	skill3:{ 210:5 },
	skill4:{ 210:12, 401:5 },
	skill5:{ 220:5, 401:10 },
	skill6:{ 220:12, 402:5 },
	skill7:{ 402:10, 411:6 },
	skill8:{ 411:18, 517:10 },
	skill9:{ 800:1 }
},
{
	id:298, text:"平景清",
	text2:"Taira no\nKagekiyo",
	value:4, kind:8, event:0,
	icon1:107, icon2:203, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	love:1,
	AdAgain1:{ 401:10, 507:10 },
	AdAgain2:{ 411:10, 509:10 },
	AdAgain3:{ 505:10, 506:10 },
	AdAgain4:{ 510:10, 517:10 },
	skill1:{ 301:10 },
	skill2:{ 304:10 },
	skill3:{ 401:12 },
	skill4:{ 307:12 },
	skill5:{ 416:12 },
	skill6:{ 505:15 },
	skill7:{ 510:15 },
	skill8:{ 513:15 },
	skill9:{ 800:1 }
},
{
	id:299, text:"鬼一法眼",
	text2:"Kiichi Hogen",
	value:3, kind:5, event:1,
	icon1:101, icon2:600, icon3:105,
	nptypeQ:1, npeffectA:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	devilish:1,
	AdAgain1:{ 627:1 },
	AdAgain2:{ 627:1 },
	AdAgain3:{ 627:1 },
	AdAgain4:{ 627:1 },
	skill1:{ 205:4 },
	skill2:{ 205:10 },
	skill3:{ 215:4 },
	skill4:{ 215:10, 400:5 },
	skill5:{ 225:4, 400:10 },
	skill6:{ 225:10, 406:4 },
	skill7:{ 406:8, 415:5 },
	skill8:{ 415:15, 511:8 },
	skill9:{ 800:1 }
},
{
	id:300, text:"アムール〔カレン〕",
	text2:"Amor(Caren)",
	value:4, kind:7, event:0,
	icon1:205, icon2:206, icon3:112,
	nptypeQ:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteSky:1,
	divinity:1, roma:1,
	AdAgain1:{ 101:5, 104:5, 106:5 },
	AdAgain2:{ 100:5, 102:5, 103:5, 105:5 },
	AdAgain3:{ 111:5, 114:5, 116:5 },
	AdAgain4:{ 110:5, 112:5, 113:5, 115:5 },
	skill1:{ 201:5, 204:5, 206:5 },
	skill2:{ 200:5, 202:5, 203:5, 205:5 },
	skill3:{ 211:5, 214:5, 216:5 },
	skill4:{ 210:5, 212:5, 213:5, 215:5 },
	skill5:{ 221:5, 224:5, 226:5 },
	skill6:{ 220:5, 222:5, 223:5, 225:5 },
	skill7:{ 416:12 },
	skill8:{ 419:15 },
	skill9:{ 800:1 }
},
{
	id:301, text:"ガラテア",
	text2:"Galatea",
	value:4, kind:6, event:0,
	icon1:111, icon2:203, icon3:302,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteEarth:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 306:22 },
	AdAgain3:{ 116:5, 414:10, 413:5 },
	AdAgain4:{ 116:12, 413:10, 516:8 },
	skill1:{ 206:5 },
	skill2:{ 206:12 },
	skill3:{ 216:5 },
	skill4:{ 216:12, 414:5 },
	skill5:{ 226:5, 414:10 },
	skill6:{ 226:12, 306:15 },
	skill7:{ 306:29, 417:6 },
	skill8:{ 417:18, 516:15 },
	skill9:{ 800:1 }
},
{
	id:302, text:"ミス・クレーン",
	text2:"Miss Crane",
	value:4, kind:4, event:0,
	icon1:205, icon2:600, icon3:109,
	nptypeA:1, npeffectS:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 404:6 },
	AdAgain3:{ 114:5, 507:6, 405:5 },
	AdAgain4:{ 114:12, 405:10, 419:12 },
	skill1:{ 204:5 },
	skill2:{ 204:12 },
	skill3:{ 214:5 },
	skill4:{ 214:12, 507:3 },
	skill5:{ 224:5, 507:6 },
	skill6:{ 224:12, 404:4 },
	skill7:{ 404:8, 513:3 },
	skill8:{ 513:8, 419:24 },
	skill9:{ 800:1 }
},
{
	id:303, text:"謎のアイドルＸ\n〔オルタ〕",
	text2:"Mysterious Idol X\n(Alter)",
	value:3, kind:12, event:1,
	icon1:110, icon2:108, icon3:105,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteStar:1,
	dragon:1, arthur:1,
	AdAgain1:{ 628:1 },
	AdAgain2:{ 628:1 },
	AdAgain3:{ 628:1 },
	AdAgain4:{ 628:1 },
	skill1:{ 302:8 },
	skill2:{ 408:8 },
	skill3:{ 405:10 },
	skill4:{ 504:10 },
	skill5:{ 414:10 },
	skill6:{ 418:12 },
	skill7:{ 512:12 },
	skill8:{ 515:12 },
	skill9:{ 800:1 }
},
{
	id:304, text:"モルガン",
	text2:"Morgan",
	value:4, kind:6, event:0,
	icon1:105, icon2:600, icon3:203,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteEarth:1,
	saberface:1,
	AdAgain1:{ 106:5 },
	AdAgain2:{ 106:12, 406:8 },
	AdAgain3:{ 116:5, 407:10, 508:2 },
	AdAgain4:{ 116:12, 508:4, 514:5 },
	skill1:{ 206:5 },
	skill2:{ 206:12 },
	skill3:{ 216:5 },
	skill4:{ 216:12, 407:5 },
	skill5:{ 226:5, 407:10 },
	skill6:{ 226:12, 406:5 },
	skill7:{ 406:10, 516:4 },
	skill8:{ 516:11, 420:24 },
	skill9:{ 800:1 }
},
{
	id:305, text:"妖精騎士\nガウェイン",
	text2:"Fairy Knight\nGawain",
	value:3, kind:0, event:0,
	icon1:105, icon2:103, icon3:200,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalGood:1, attrbuteEarth:1,
	love:1,
	AdAgain1:{ 100:4 },
	AdAgain2:{ 100:10, 301:18 },
	AdAgain3:{ 110:4, 409:18, 304:12 },
	AdAgain4:{ 110:10, 304:24, 510:4 },
	skill1:{ 200:4 },
	skill2:{ 200:10 },
	skill3:{ 210:4 },
	skill4:{ 210:10, 409:8 },
	skill5:{ 220:4, 409:16 },
	skill6:{ 220:10, 301:12 },
	skill7:{ 301:24, 506:3 },
	skill8:{ 506:9, 309:60 },
	skill9:{ 800:1 }
},
{
	id:306, text:"妖精騎士\nトリスタン",
	text2:"Fairy Knight\nTristan",
	value:3, kind:1, event:0,
	icon1:101, icon2:805, icon3:800,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	riding:1, devilish:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 409:12 },
	AdAgain3:{ 111:4, 307:24, 408:4 },
	AdAgain4:{ 111:10, 408:8, 505:6 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 307:12 },
	skill5:{ 221:4, 307:24 },
	skill6:{ 221:10, 409:8 },
	skill7:{ 409:16, 416:5 },
	skill8:{ 416:15, 420:20 },
	skill9:{ 800:1 }
},
{
	id:307, text:"妖精騎士\nランスロット",
	text2:"Fairy Knight\nLancelot",
	value:4, kind:2, event:0,
	icon1:105, icon2:109, icon3:920,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	love:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 409:15 },
	AdAgain3:{ 112:5, 302:24, 512:3 },
	AdAgain4:{ 112:12, 512:6, 502:5 },
	skill1:{ 202:5 },
	skill2:{ 202:12 },
	skill3:{ 212:5 },
	skill4:{ 212:12, 302:12 },
	skill5:{ 222:5, 302:24 },
	skill6:{ 222:12, 409:10 },
	skill7:{ 409:20, 414:6 },
	skill8:{ 414:18, 309:72 },
	skill9:{ 800:1 }
},
{
	id:308, text:"パーシヴァル",
	text2:"Percival",
	value:3, kind:2, event:0,
	icon1:102, icon2:206, icon3:205,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	riding:1, love:1,
	AdAgain1:{ 102:4 },
	AdAgain2:{ 102:10, 300:18 },
	AdAgain3:{ 112:4, 409:16, 402:4 },
	AdAgain4:{ 112:10, 402:8, 504:6 },
	skill1:{ 202:4 },
	skill2:{ 202:10 },
	skill3:{ 212:4 },
	skill4:{ 212:10, 409:8 },
	skill5:{ 222:4, 409:16 },
	skill6:{ 222:10, 300:12 },
	skill7:{ 300:24, 504:3 },
	skill8:{ 504:9, 516:12 },
	skill9:{ 800:1 }
},
{
	id:309, text:"光のコヤンスカヤ",
	text2:"Koyanskaya\nof Light",
	value:4, kind:5, event:0,
	icon1:600, icon2:107, icon3:103,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalEvil:1, attrbuteBeast:1,
	divinity:1, devilish:1, riding:1,
	AdAgain1:{ 105:5 },
	AdAgain2:{ 105:12, 306:22 },
	AdAgain3:{ 115:5, 308:29, 307:15 },
	AdAgain4:{ 115:12, 307:29, 512:8 },
	skill1:{ 205:5 },
	skill2:{ 205:12 },
	skill3:{ 215:5 },
	skill4:{ 215:12, 308:15 },
	skill5:{ 225:5, 308:29 },
	skill6:{ 225:12, 306:15 },
	skill7:{ 306:29, 416:6 },
	skill8:{ 416:18, 514:10 },
	skill9:{ 800:1 }
},
{
	id:310, text:"ハベトロット",
	text2:"Habetrot",
	value:3, kind:3, event:0,
	icon1:300, icon2:102, icon3:205,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	love:1, riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 404:5 },
	AdAgain3:{ 113:4, 509:5, 419:4 },
	AdAgain4:{ 113:10, 419:8, 420:10 },
	skill1:{ 203:4 },
	skill2:{ 203:10 },
	skill3:{ 213:4 },
	skill4:{ 213:10, 410:4 },
	skill5:{ 223:4, 410:8 },
	skill6:{ 223:10, 413:4 },
	skill7:{ 413:8, 419:5 },
	skill8:{ 419:15, 420:20 },
	skill9:{ 800:1 }
},
{
	id:311, text:"オベロン",
	text2:"Oberon",
	value:4, kind:13, event:0,
	icon1:106, icon2:600, icon3:103,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteEarth:1,
	riding:1, dragon:1,
	AdAgain1:{ 303:10, 404:10 },
	AdAgain2:{ 401:10, 507:10 },
	AdAgain3:{ 500:10, 506:10 },
	AdAgain4:{ 305:10, 420:10 },
	skill1:{ 400:10 },
	skill2:{ 305:10 },
	skill3:{ 503:12 },
	skill4:{ 505:12 },
	skill5:{ 417:12 },
	skill6:{ 516:15 },
	skill7:{ 309:15 },
	skill8:{ 420:15 },
	skill9:{ 800:1 }
},
{
	id:312, text:"沖田総司\n〔オルタ〕",
	text2:"Okita Soji\n(Saber Alter)",
	value:4, kind:0, event:0,
	icon1:105, icon2:600, icon3:205,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	saberface:1,
	AdAgain1:{ 100:5 },
	AdAgain2:{ 100:12, 410:8 },
	AdAgain3:{ 110:5, 407:10, 411:5 },
	AdAgain4:{ 110:12, 411:10, 513:5 },
	skill1:{ 200:5 },
	skill2:{ 200:12 },
	skill3:{ 210:5 },
	skill4:{ 210:12, 407:5 },
	skill5:{ 220:5, 407:10 },
	skill6:{ 220:12, 410:5 },
	skill7:{ 410:10, 512:4 },
	skill8:{ 512:11, 511:10 },
	skill9:{ 800:1 }
},
{
	id:313, text:"アナスタシア\n＆ヴィイ",
	text2:"Anastasia & Viy",
	value:3, kind:1, event:0,
	icon1:102, icon2:205, icon3:500,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalSummer:1, attrbuteMan:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 410:6 },
	AdAgain3:{ 111:4, 401:8, 412:4 },
	AdAgain4:{ 111:10, 412:8, 419:10 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 401:4 },
	skill5:{ 221:4, 401:8 },
	skill6:{ 221:10, 410:4 },
	skill7:{ 410:8, 404:4 },
	skill8:{ 404:12, 416:20 },
	skill9:{ 800:1 }
},
{
	id:314, text:"シャルロット・コルデー",
	text2:"Charlotte Corday\n(Caster)",
	value:3, kind:4, event:0,
	icon1:102, icon2:805, icon3:600,
	nptypeA:1, npeffectO:1,
	policyChaos:1, personalSummer:1, attrbuteMan:1,
	AdAgain1:{ 104:4 },
	AdAgain2:{ 104:10, 406:6 },
	AdAgain3:{ 114:4, 410:8, 403:4 },
	AdAgain4:{ 114:10, 403:7, 507:6 },
	skill1:{ 204:4 },
	skill2:{ 204:10 },
	skill3:{ 214:4 },
	skill4:{ 214:10, 410:4 },
	skill5:{ 224:4, 410:8 },
	skill6:{ 224:10, 406:4 },
	skill7:{ 406:8, 308:15 },
	skill8:{ 308:45, 306:60 },
	skill9:{ 800:1 }
},
{
	id:315, text:"レオナルド\n・ダ・ヴィンチ",
	text2:"Leonardo Da Vinci\n(Ruler)",
	value:3, kind:7, event:1,
	icon1:104, icon2:600, icon3:106,
	nptypeB:1, npeffectO:1,
	policyLaw:1, personalSummer:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 629:1 },
	AdAgain2:{ 629:1 },
	AdAgain3:{ 629:1 },
	AdAgain4:{ 629:1 },
	skill1:{ 201:4, 203:4, 206:4 },
	skill2:{ 200:4, 202:4, 204:4, 205:4 },
	skill3:{ 211:4, 213:4, 216:4 },
	skill4:{ 210:4, 212:4, 214:4, 215:4 },
	skill5:{ 221:4, 223:4, 226:4 },
	skill6:{ 220:4, 222:4, 224:4, 225:4 },
	skill7:{ 410:10 },
	skill8:{ 514:12 },
	skill9:{ 800:1 }
},
{
	id:316, text:"カーマ",
	text2:"Kama\n(Avenger)",
	value:4, kind:8, event:0,
	icon1:102, icon2:106, icon3:600,
	nptypeA:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteSky:1,
	riding:1, divinity:1,
	AdAgain1:{ 304:10, 410:10 },
	AdAgain2:{ 401:10, 407:10 },
	AdAgain3:{ 404:10, 507:10 },
	AdAgain4:{ 501:10, 515:10 },
	skill1:{ 304:10 },
	skill2:{ 401:10 },
	skill3:{ 407:12 },
	skill4:{ 410:12 },
	skill5:{ 413:12 },
	skill6:{ 416:15 },
	skill7:{ 419:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:317, text:"カイニス",
	text2:"Caenis\n(Rider)",
	value:3, kind:3, event:0,
	icon1:105, icon2:111, icon3:203,
	nptypeB:1, npeffectO:1,
	policyNeutral:1, personalSummer:1, attrbuteEarth:1,
	riding:1, divinity:1, love:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 410:6 },
	AdAgain3:{ 113:4, 304:24, 504:3 },
	AdAgain4:{ 113:10, 504:5, 501:4 },
	skill1:{ 203:4 },
	skill2:{ 203:10 },
	skill3:{ 213:4 },
	skill4:{ 213:10, 304:12 },
	skill5:{ 223:4, 304:24 },
	skill6:{ 223:10, 410:4 },
	skill7:{ 410:8, 408:5 },
	skill8:{ 408:15, 418:20 },
	skill9:{ 800:1 }
},
{
	id:318, text:"清少納言",
	text2:"Sei Shonagon\n(Berserker)",
	value:3, kind:6, event:0,
	icon1:105, icon2:204, icon3:300,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalSummer:1, attrbuteMan:1,
	AdAgain1:{ 106:4 },
	AdAgain2:{ 106:10, 405:6 },
	AdAgain3:{ 116:4, 410:8, 502:2 },
	AdAgain4:{ 116:10, 502:4, 515:4 },
	skill1:{ 206:4 },
	skill2:{ 206:10 },
	skill3:{ 216:4 },
	skill4:{ 216:10, 410:4 },
	skill5:{ 226:4, 410:8 },
	skill6:{ 226:10, 405:4 },
	skill7:{ 405:8, 516:3 },
	skill8:{ 516:9, 517:8 },
	skill9:{ 800:1 }
},
{
	id:319, text:"ジャック・ド・モレー",
	text2:"Jacques de Molay",
	value:4, kind:12, event:0,
	icon1:105, icon2:205, icon3:400,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalEvil:1, attrbuteEarth:1,
	divinity:1,
	AdAgain1:{ 301:10, 304:10 },
	AdAgain2:{ 409:10, 406:10 },
	AdAgain3:{ 306:10, 501:10 },
	AdAgain4:{ 514:10, 515:10 },
	skill1:{ 301:10 },
	skill2:{ 304:10 },
	skill3:{ 409:12 },
	skill4:{ 406:12 },
	skill5:{ 306:12 },
	skill6:{ 501:15 },
	skill7:{ 514:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:320, text:"ゼノビア",
	text2:"Zenobia",
	value:3, kind:1, event:0,
	icon1:102, icon2:203, icon3:105,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	king:1, riding:1,
	AdAgain1:{ 101:4 },
	AdAgain2:{ 101:10, 300:18 },
	AdAgain3:{ 111:4, 304:24, 505:3 },
	AdAgain4:{ 111:10, 505:5, 508:4 },
	skill1:{ 201:4 },
	skill2:{ 201:10 },
	skill3:{ 211:4 },
	skill4:{ 211:10, 304:12 },
	skill5:{ 221:4, 304:24 },
	skill6:{ 221:10, 300:12 },
	skill7:{ 300:24, 416:5 },
	skill8:{ 416:15, 417:20 },
	skill9:{ 800:1 }
},
{
	id:321, text:"エリザベート・バートリー\n〔シンデレラ〕",
	text2:"Elizabeth Bathory\n(Cinderella)",
	value:3, kind:3, event:1,
	icon1:205, icon2:103, icon3:402,
	nptypeB:1, npeffectO:1,
	policyChaos:1, personalNeutral:1, attrbuteMan:1,
	dragon:1, riding:1,
	AdAgain1:{ 630:1 },
	AdAgain2:{ 630:1 },
	AdAgain3:{ 630:1 },
	AdAgain4:{ 630:1 },
	skill1:{ 203:4 },
	skill2:{ 203:10 },
	skill3:{ 213:4 },
	skill4:{ 213:10, 400:5 },
	skill5:{ 223:4, 400:10 },
	skill6:{ 223:10, 507:3 },
	skill7:{ 507:5, 414:5 },
	skill8:{ 414:15, 418:20 },
	skill9:{ 800:1 }
},
{
	id:322, text:"出雲阿国",
	text2:"Izumo no Okuni",
	value:4, kind:4, event:0,
	icon1:110, icon2:109, icon3:806,
	nptypeQ:1, npeffectO:1,
	policyChaos:1, personalGood:1, attrbuteMan:1,
	AdAgain1:{ 104:5 },
	AdAgain2:{ 104:12, 405:8 },
	AdAgain3:{ 114:5, 411:10, 404:4 },
	AdAgain4:{ 114:12, 404:8, 513:5 },
	skill1:{ 204:5 },
	skill2:{ 204:12 },
	skill3:{ 214:5 },
	skill4:{ 214:12, 411:5 },
	skill5:{ 224:5, 411:10 },
	skill6:{ 224:12, 405:5 },
	skill7:{ 405:10, 419:6 },
	skill8:{ 419:18, 517:10 },
	skill9:{ 800:1 }
},
{
	id:323, text:"謎の蘭丸Ｘ",
	text2:"Mysterious\nRanmaru X",
	value:3, kind:8, event:1,
	icon1:109, icon2:803, icon3:102,
	nptypeA:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteStar:1,
	AdAgain1:{ 631:1 },
	AdAgain2:{ 631:1 },
	AdAgain3:{ 631:1 },
	AdAgain4:{ 631:1 },
	skill1:{ 300:8 },
	skill2:{ 301:8 },
	skill3:{ 304:10 },
	skill4:{ 505:10 },
	skill5:{ 411:10 },
	skill6:{ 512:12 },
	skill7:{ 501:12 },
	skill8:{ 515:12 },
	skill9:{ 800:1 }
},
{
	id:324, text:"坂本龍馬",
	text2:"Sakamoto Ryoma",
	value:4, kind:2, event:0,
	icon1:102, icon2:600, icon3:111,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalNeutral:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 102:5 },
	AdAgain2:{ 102:12, 300:22 },
	AdAgain3:{ 112:5, 303:20, 504:3 },
	AdAgain4:{ 112:12, 504:6, 502:5 },
	skill1:{ 202:5 },
	skill2:{ 202:12 },
	skill3:{ 212:5 },
	skill4:{ 212:12, 303:10 },
	skill5:{ 222:5, 303:20 },
	skill6:{ 222:12, 300:15 },
	skill7:{ 300:29, 415:6 },
	skill8:{ 415:18, 502:10 },
	skill9:{ 800:1 }
},
{
	id:325, text:"マルタ\n〔サンタ〕",
	text2:"Martha\n(Santa)",
	value:3, kind:4, event:1,
	icon1:105, icon2:805, icon3:109,
	nptypeQ:1, npeffectS:1,
	policyLaw:1, personalGood:1, attrbuteMan:1,
	riding:1,
	AdAgain1:{ 632:1 },
	AdAgain2:{ 632:1 },
	AdAgain3:{ 632:1 },
	AdAgain4:{ 632:1 },
	skill1:{ 204:4 },
	skill2:{ 204:10 },
	skill3:{ 214:4 },
	skill4:{ 214:10, 302:10 },
	skill5:{ 224:4, 302:20 },
	skill6:{ 224:10, 406:4 },
	skill7:{ 406:8, 503:2 },
	skill8:{ 503:6, 412:20 },
	skill9:{ 800:1 }
},
{
	id:326, text:"太公望",
	text2:"Tai Gong Wang",
	value:4, kind:3, event:0,
	icon1:101, icon2:805, icon3:600,
	nptypeQ:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	love:1, riding:1,
	AdAgain1:{ 103:5 },
	AdAgain2:{ 103:12, 406:8 },
	AdAgain3:{ 113:5, 509:6, 501:2 },
	AdAgain4:{ 113:12, 501:4, 511:5 },
	skill1:{ 203:5 },
	skill2:{ 203:12 },
	skill3:{ 213:5 },
	skill4:{ 213:12, 509:3 },
	skill5:{ 223:5, 509:6 },
	skill6:{ 223:12, 406:5 },
	skill7:{ 406:10, 507:4 },
	skill8:{ 507:11, 514:10 },
	skill9:{ 800:1 }
},
{
	id:327, text:"ドブルイニャ・ニキチッチ",
	text2:"Dobrynya Nikitich",
	value:3, kind:3, event:0,
	icon1:203, icon2:111, icon3:600,
	nptypeB:1, npeffectA:1,
	policyNeutral:1, personalGood:1, attrbuteEarth:1,
	love:1, dragon:1, riding:1,
	AdAgain1:{ 103:4 },
	AdAgain2:{ 103:10, 302:15 },
	AdAgain3:{ 113:4, 403:7, 408:4 },
	AdAgain4:{ 113:10, 408:4, 502:4 },
	skill1:{ 203:4 },
	skill2:{ 203:10 },
	skill3:{ 213:4 },
	skill4:{ 213:10, 403:4 },
	skill5:{ 223:4, 403:7 },
	skill6:{ 223:10, 302:10 },
	skill7:{ 302:20, 504:3 },
	skill8:{ 504:9, 413:20 },
	skill9:{ 800:1 }
},
{
	id:328, text:"闇のコヤンスカヤ",
	text2:"Koyanskaya\nof Darkness",
	value:4, kind:12, event:0,
	icon1:103, icon2:905, icon3:502,
	nptypeB:1, npeffectA:1,
	policyChaos:1, personalEvil:1, attrbuteBeast:1,
	divinity:1, devilish:1,
	AdAgain1:{ 303:10, 304:10 },
	AdAgain2:{ 404:10, 506:10 },
	AdAgain3:{ 500:10, 509:10 },
	AdAgain4:{ 505:10, 515:10 },
	skill1:{ 300:10 },
	skill2:{ 301:10 },
	skill3:{ 407:12 },
	skill4:{ 306:12 },
	skill5:{ 413:12 },
	skill6:{ 512:15 },
	skill7:{ 513:15 },
	skill8:{ 515:15 },
	skill9:{ 800:1 }
},
{
	id:329, text:"ヘファイスティオン",
	text2:"Hephaestion",
	value:3, kind:13, event:0,
	icon1:111, icon2:600, icon3:206,
	nptypeA:1, npeffectO:1,
	policyNeutral:1, personalNeutral:1, attrbuteEarth:1,
	love:1,
	AdAgain1:{ 300:8, 303:8 },
	AdAgain2:{ 408:8, 406:8 },
	AdAgain3:{ 405:8, 410:8 },
	AdAgain4:{ 508:8, 511:8 },
	skill1:{ 300:8 },
	skill2:{ 303:8 },
	skill3:{ 408:10 },
	skill4:{ 406:10 },
	skill5:{ 410:10 },
	skill6:{ 509:12 },
	skill7:{ 511:12 },
	skill8:{ 514:12 },
	skill9:{ 800:1 }
},
{
	id:330, text:"マナナン・マク・リール\n〔バゼット〕",
	text2:"Manannan mac Lir\n(Bazett)",
	value:4, kind:11, event:0,
	icon1:110, icon2:600, icon3:204,
	nptypeQ:1, npeffectO:1,
	policyNeutral:1, personalGood:1, attrbuteSky:1,
	divinity:1, riding:1, king:1,
	AdAgain1:{ 103:5, 104:5 },
	AdAgain2:{ 103:12, 104:12 },
	AdAgain3:{ 113:5, 114:5 },
	AdAgain4:{ 113:12, 114:12 },
	skill1:{ 203:5, 204:5 },
	skill2:{ 203:12, 204:12 },
	skill3:{ 213:5, 214:5 },
	skill4:{ 213:12, 214:12 },
	skill5:{ 223:5, 224:5 },
	skill6:{ 223:12, 224:12 },
	skill7:{ 410:8, 406:8 },
	skill8:{ 508:9, 514:9 },
	skill9:{ 800:1 }
}
/*,
{
	id:3, text:"\n",
	text2:"\n",
	value:, kind:, event:0,
	icon1:, icon2:, icon3:,
	nptypeB:1, npeffectA:1,
	policyLaw:1, personalGood:1, attrbuteEarth:1,
	AdAgain1:{ 10:4 },
	AdAgain2:{ 10:10, : },
	AdAgain3:{ 11:4, :, : },
	AdAgain4:{ 11:10, :, : },
	skill1:{ 20:4 },
	skill2:{ 20:10 },
	skill3:{ 21:4 },
	skill4:{ 21:10, : },
	skill5:{ 22:4, : },
	skill6:{ 22:10, : },
	skill7:{ :, : },
	skill8:{ :, : },
	skill9:{ 800:1 }
}*/
];
/*再臨用*/
/*	100剣ピース 101弓ピース 102槍ピース 103騎ピース 104術ピース 105殺ピース 106狂ピース 7*/
/*	110剣モニュ 111弓モニュ 112槍モニュ 113騎モニュ 114術モニュ 115殺モニュ 116狂モニュ 7*/
/*スキル用*/
/*	200剣の輝石 201弓の輝石 202槍の輝石 203騎の輝石 204術の輝石 205殺の輝石 206狂の輝石 7*/
/*	210剣の魔石 211弓の魔石 212槍の魔石 213騎の魔石 214術の魔石 215殺の魔石 216狂の魔石 7*/
/*	220剣の秘石 221弓の秘石 222槍の秘石 223騎の秘石 224術の秘石 225殺の秘石 226狂の秘石 7*/
/*素材用*/
/*	300英雄の証 301凶骨 302竜の牙 303虚影の塵 304愚者の鎖 */
/*	305万死の毒針 306魔術髄液 307宵哭きの鉄杭 308励振火薬 309赦免の小鐘 10*/
/*	400世界樹の種 401ゴーストランタン 402八連双晶 403蛇の宝玉 404鳳凰の羽根 */
/*	405無間の歯車 406禁断の頁 407ﾎﾑﾝｸﾙｽﾍﾞﾋﾞｰ 408隕蹄鉄 409大騎士勲章 */
/*	410追憶の貝殻 411枯淡勾玉 412永遠結氷 413巨人の指輪 414オーロラ鋼 */
/*	415閑古鈴 416禍罪の矢尻 417光銀の冠 418神脈霊子 419虹の糸玉 */
/*	420夢幻の鱗粉 21*/
/*	500混沌の爪 501蛮神の心臓 502竜の逆鱗 503精霊根 504戦馬の幼角 */
/*	505血の涙石 506黒獣脂 507封魔のランプ 508知慧のスカラベ 509原初の産毛 */
/*	510呪獣胆石 511奇々神酒 512炉心 513八咫鏡 514真理の卵 */
/*	515煌星のカケラ 516悠久の実 517鬼炎鬼灯 18*/
/*	800伝承結晶 900QP 1*/
/*ステータス用*/
/* kind 0セイバー 1アーチャー 2ランサー 3ライダー 4キャスター */
/*		5アサシン 6バーサーカー 7ルーラー 8アベンジャー 9シールダー */
/*		10キャンサー 11アルターエゴ 12フォーリナー 13プリテンダー 14ALL(clnum=99) */
/* policy		1秩序 2中立 3混沌 */
/* personality	1善 2中庸 3悪 4狂 5花嫁 6夏 */
/* attribute	1天 2地 3人 4獣 */

/* テンプレート */
/* id 不要かも。消す候補 */
/* text 鯖名 */
/* value 鯖のレア */
/* kind 鯖のクラス */
/* 0剣 1弓 2槍 3騎 4術 5殺 6狂 7秤 8復讐 9盾 10月 11分 12降 */
/* event イベント配布鯖判定用 これも不要か*/
/*
{
	id:, text:"",
	text2:"",
	value:, kind:, event:, attribute:,
	
	
	
	AdAgain1:{  },
	AdAgain2:{  },
	AdAgain3:{  },
	AdAgain4:{  },
	skill1:{  },// Lv1->2
	skill2:{  },// Lv2->3
	skill3:{  },// Lv3->4
	skill4:{  },// Lv4->5
	skill5:{  },// Lv5->6
	skill6:{  },// Lv6->7
	skill7:{  },// Lv7->8
	skill8:{  },// Lv8->9
	skill9:{ 800:1 }// Lv9->10
}
*/

var mTotalNum = new Object();
mTotalNum = {
	100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
	110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
	
	200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
	210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
	220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
	
	300:0, 301:0, 302:0, 303:0, 304:0,
	305:0, 306:0, 307:0, 308:0, 309:0,
	400:0, 401:0, 402:0, 403:0, 404:0,
	405:0, 406:0, 407:0, 408:0, 409:0,
	410:0, 411:0, 412:0, 413:0, 414:0,
	415:0, 416:0, 417:0, 418:0, 419:0,
	420:0,
	500:0, 501:0, 502:0, 503:0, 504:0,
	505:0, 506:0, 507:0, 508:0, 509:0,
	510:0, 511:0, 512:0, 513:0, 514:0,
	515:0, 516:0, 517:0,
	
	600:0, 601:0, 602:0, 603:0, 604:0,
	605:0, 606:0, 607:0, 608:0, 609:0,
	610:0, 611:0, 612:0, 613:0, 614:0,
	615:0, 616:0, 617:0, 618:0, 619:0,
	620:0, 621:0, 622:0, 623:0, 624:0,
	625:0, 626:0, 627:0, 628:0, 629:0,
	630:0, 631:0, 632:0,
	
	800:0,
	
	900:0, sithona:0
};
var mTotalUsed = new Object();
mTotalUsed = {
	100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
	110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
	
	200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
	210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
	220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
	
	300:0, 301:0, 302:0, 303:0, 304:0,
	305:0, 306:0, 307:0, 308:0, 309:0,
	400:0, 401:0, 402:0, 403:0, 404:0,
	405:0, 406:0, 407:0, 408:0, 409:0,
	410:0, 411:0, 412:0, 413:0, 414:0,
	415:0, 416:0, 417:0, 418:0, 419:0,
	420:0,
	500:0, 501:0, 502:0, 503:0, 504:0,
	505:0, 506:0, 507:0, 508:0, 509:0,
	510:0, 511:0, 512:0, 513:0, 514:0,
	515:0, 516:0, 517:0,
	
	600:0, 601:0, 602:0, 603:0, 604:0,
	605:0, 606:0, 607:0, 608:0, 609:0,
	610:0, 611:0, 612:0, 613:0, 614:0,
	615:0, 616:0, 617:0, 618:0, 619:0,
	620:0, 621:0, 622:0, 623:0, 624:0,
	625:0, 626:0, 627:0, 628:0, 629:0,
	630:0, 631:0, 632:0,
	
	800:0,
	
	900:0
};
var mTotalChaldea = new Object();
mTotalChaldea = {
	100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
	110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
	
	200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
	210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
	220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
	
	300:0, 301:0, 302:0, 303:0, 304:0,
	305:0, 306:0, 307:0, 308:0, 309:0,
	400:0, 401:0, 402:0, 403:0, 404:0,
	405:0, 406:0, 407:0, 408:0, 409:0,
	410:0, 411:0, 412:0, 413:0, 414:0,
	415:0, 416:0, 417:0, 418:0, 419:0,
	420:0,
	500:0, 501:0, 502:0, 503:0, 504:0,
	505:0, 506:0, 507:0, 508:0, 509:0,
	510:0, 511:0, 512:0, 513:0, 514:0,
	515:0, 516:0, 517:0,
	
	600:0, 601:0, 602:0, 603:0, 604:0,
	605:0, 606:0, 607:0, 608:0, 609:0,
	610:0, 611:0, 612:0, 613:0, 614:0,
	615:0, 616:0, 617:0, 618:0, 619:0,
	620:0, 621:0, 622:0, 623:0, 624:0,
	625:0, 626:0, 627:0, 628:0, 629:0,
	630:0, 631:0, 632:0,
	
	800:0,
	
	900:0
};
var mUsedChaldea = new Object();
mUsedChaldea = {
	100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
	110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
	
	200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
	210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
	220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
	
	300:0, 301:0, 302:0, 303:0, 304:0,
	305:0, 306:0, 307:0, 308:0, 309:0,
	400:0, 401:0, 402:0, 403:0, 404:0,
	405:0, 406:0, 407:0, 408:0, 409:0,
	410:0, 411:0, 412:0, 413:0, 414:0,
	415:0, 416:0, 417:0, 418:0, 419:0,
	420:0,
	500:0, 501:0, 502:0, 503:0, 504:0,
	505:0, 506:0, 507:0, 508:0, 509:0,
	510:0, 511:0, 512:0, 513:0, 514:0,
	515:0, 516:0, 517:0,
	
	600:0, 601:0, 602:0, 603:0, 604:0,
	605:0, 606:0, 607:0, 608:0, 609:0,
	610:0, 611:0, 612:0, 613:0, 614:0,
	615:0, 616:0, 617:0, 618:0, 619:0,
	620:0, 621:0, 622:0, 623:0, 624:0,
	625:0, 626:0, 627:0, 628:0, 629:0,
	630:0, 631:0, 632:0,
	
	800:0,
	
	900:0
};

var inventoryNum = new Object();
inventoryNum = {
	100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
	110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
	
	200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
	210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
	220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
	
	300:0, 301:0, 302:0, 303:0, 304:0,
	305:0, 306:0, 307:0, 308:0, 309:0,
	400:0, 401:0, 402:0, 403:0, 404:0,
	405:0, 406:0, 407:0, 408:0, 409:0,
	410:0, 411:0, 412:0, 413:0, 414:0,
	415:0, 416:0, 417:0, 418:0, 419:0,
	420:0,
	500:0, 501:0, 502:0, 503:0, 504:0,
	505:0, 506:0, 507:0, 508:0, 509:0,
	510:0, 511:0, 512:0, 513:0, 514:0,
	515:0, 516:0, 517:0,
	
	600:0, 601:0, 602:0, 603:0, 604:0,
	605:0, 606:0, 607:0, 608:0, 609:0,
	610:0, 611:0, 612:0, 613:0, 614:0,
	615:0, 616:0, 617:0, 618:0, 619:0,
	620:0, 621:0, 622:0, 623:0, 624:0,
	625:0, 626:0, 627:0, 628:0, 629:0,
	630:0, 631:0, 632:0,
	
	800:0,
	
	900:0
};

var sairinQP = new Array();
sairinQP = [
[10000,30000,90000,300000],
[15000,45000,150000,450000],
[30000,100000,300000,900000],
[50000,150000,500000,1500000],
[100000,300000,1000000,3000000]
];

var skillQP = new Array();
skillQP = [
[10000,20000,60000,80000,200000,250000,500000,600000,1000000],
[20000,40000,120000,160000,400000,500000,1000000,1200000,2000000],
[50000,100000,300000,400000,1000000,1250000,2500000,3000000,5000000],
[100000,200000,600000,800000,2000000,2500000,5000000,6000000,10000000],
[200000,400000,1200000,1600000,4000000,5000000,10000000,12000000,20000000]
];

/* 選択言語 */
var language = 0;

var showBox = 0;
var numServantSelect;

var numCalcServantId = new Array();
var numCalcServantMaterial = new Object();
var numIndividual = 0;
var lockSetting = new Array();
var FormidNum = new Object();
var FormidUsed = new Object();
var FormChaldeaNum = new Object();
var FormChaldeaUsed = new Object();

var myServantdb = new Array();

var clnum=200;
var renum=0;
var rev=10;
var statusnum=0;
var filternum=0;
var statusArray=[
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0];
/* statusArray
	0  policy
	1  personal
	2  attribute
	3  divinity
	4  dragon
	5  roma
	6  savagebeast
	7  riding
	8  love
	9  devilish
	10 davinci
	11 saber face
	12 arthur
	13 nptype
	14 npeffect
	15 npEX
	16 sEX
*/
var chaldeanum = 0;
var chaldeaFuncnum=0;
var tempNum;
var tempNumtotal;
var numItems = 64;
var numInv;
var useInv = 0;
$(function(){
	$(document).ready(function(){
		for( var i=0 ; i<Servantdb.length ; i++ ){
			numCalcServantId[i] = 0;
			numCalcServantMaterial[i] = {};
			numCalcServantMaterial[i] = {
			100:[0,0,0,0], 101:[0,0,0,0], 102:[0,0,0,0], 103:[0,0,0,0], 104:[0,0,0,0], 105:[0,0,0,0], 106:[0,0,0,0],
			110:[0,0,0,0], 111:[0,0,0,0], 112:[0,0,0,0], 113:[0,0,0,0], 114:[0,0,0,0], 115:[0,0,0,0], 116:[0,0,0,0],
			200:[0,0,0,0], 201:[0,0,0,0], 202:[0,0,0,0], 203:[0,0,0,0], 204:[0,0,0,0], 205:[0,0,0,0], 206:[0,0,0,0],
			210:[0,0,0,0], 211:[0,0,0,0], 212:[0,0,0,0], 213:[0,0,0,0], 214:[0,0,0,0], 215:[0,0,0,0], 216:[0,0,0,0],
			220:[0,0,0,0], 221:[0,0,0,0], 222:[0,0,0,0], 223:[0,0,0,0], 224:[0,0,0,0], 225:[0,0,0,0], 226:[0,0,0,0],
			300:[0,0,0,0], 301:[0,0,0,0], 302:[0,0,0,0], 303:[0,0,0,0], 304:[0,0,0,0],
			305:[0,0,0,0], 306:[0,0,0,0], 307:[0,0,0,0], 308:[0,0,0,0], 309:[0,0,0,0],
			400:[0,0,0,0], 401:[0,0,0,0], 402:[0,0,0,0], 403:[0,0,0,0], 404:[0,0,0,0],
			405:[0,0,0,0], 406:[0,0,0,0], 407:[0,0,0,0], 408:[0,0,0,0], 409:[0,0,0,0],
			410:[0,0,0,0], 411:[0,0,0,0], 412:[0,0,0,0], 413:[0,0,0,0], 414:[0,0,0,0],
			415:[0,0,0,0], 416:[0,0,0,0], 417:[0,0,0,0], 418:[0,0,0,0], 419:[0,0,0,0],
			420:[0,0,0,0],
			500:[0,0,0,0], 501:[0,0,0,0], 502:[0,0,0,0], 503:[0,0,0,0], 504:[0,0,0,0],
			505:[0,0,0,0], 506:[0,0,0,0], 507:[0,0,0,0], 508:[0,0,0,0], 509:[0,0,0,0],
			510:[0,0,0,0], 511:[0,0,0,0], 512:[0,0,0,0], 513:[0,0,0,0], 514:[0,0,0,0],
			515:[0,0,0,0], 516:[0,0,0,0], 517:[0,0,0,0],
			600:[0,0,0,0], 601:[0,0,0,0], 602:[0,0,0,0], 603:[0,0,0,0], 604:[0,0,0,0],
			605:[0,0,0,0], 606:[0,0,0,0], 607:[0,0,0,0], 608:[0,0,0,0], 609:[0,0,0,0],
			610:[0,0,0,0], 611:[0,0,0,0], 612:[0,0,0,0], 613:[0,0,0,0], 614:[0,0,0,0],
			615:[0,0,0,0], 616:[0,0,0,0], 617:[0,0,0,0], 618:[0,0,0,0], 619:[0,0,0,0],
			620:[0,0,0,0], 621:[0,0,0,0], 622:[0,0,0,0], 623:[0,0,0,0], 624:[0,0,0,0],
			625:[0,0,0,0], 626:[0,0,0,0], 627:[0,0,0,0], 628:[0,0,0,0], 629:[0,0,0,0],
			630:[0,0,0,0], 631:[0,0,0,0], 632:[0,0,0,0],
			800:[0,0,0,0],
			900:[0,0,0,0]};
			
			lockSetting[i] = [0,0,0,0];
			FormidNum[i] = [{
			100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
			110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
			200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
			210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
			220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
			300:0, 301:0, 302:0, 303:0, 304:0,
			305:0, 306:0, 307:0, 308:0, 309:0,
			400:0, 401:0, 402:0, 403:0, 404:0,
			405:0, 406:0, 407:0, 408:0, 409:0,
			410:0, 411:0, 412:0, 413:0, 414:0,
			415:0, 416:0, 417:0, 418:0, 419:0,
			420:0,
			500:0, 501:0, 502:0, 503:0, 504:0,
			505:0, 506:0, 507:0, 508:0, 509:0,
			510:0, 511:0, 512:0, 513:0, 514:0,
			515:0, 516:0, 517:0,
			600:0, 601:0, 602:0, 603:0, 604:0,
			605:0, 606:0, 607:0, 608:0, 609:0,
			610:0, 611:0, 612:0, 613:0, 614:0,
			615:0, 616:0, 617:0, 618:0, 619:0,
			620:0, 621:0, 622:0, 623:0, 624:0,
			625:0, 626:0, 627:0, 628:0, 629:0,
			630:0, 631:0, 632:0,
			800:0,
			900:0}];
			myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
			FormidUsed[i] = [{
			100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
			110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
			200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
			210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
			220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
			300:0, 301:0, 302:0, 303:0, 304:0,
			305:0, 306:0, 307:0, 308:0, 309:0,
			400:0, 401:0, 402:0, 403:0, 404:0,
			405:0, 406:0, 407:0, 408:0, 409:0,
			410:0, 411:0, 412:0, 413:0, 414:0,
			415:0, 416:0, 417:0, 418:0, 419:0,
			420:0,
			500:0, 501:0, 502:0, 503:0, 504:0,
			505:0, 506:0, 507:0, 508:0, 509:0,
			510:0, 511:0, 512:0, 513:0, 514:0,
			515:0, 516:0, 517:0,
			600:0, 601:0, 602:0, 603:0, 604:0,
			605:0, 606:0, 607:0, 608:0, 609:0,
			610:0, 611:0, 612:0, 613:0, 614:0,
			615:0, 616:0, 617:0, 618:0, 619:0,
			620:0, 621:0, 622:0, 623:0, 624:0,
			625:0, 626:0, 627:0, 628:0, 629:0,
			630:0, 631:0, 632:0,
			800:0,
			900:0}];
			FormChaldeaNum[i] = [{
			100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
			110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
			200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
			210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
			220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
			300:0, 301:0, 302:0, 303:0, 304:0,
			305:0, 306:0, 307:0, 308:0, 309:0,
			400:0, 401:0, 402:0, 403:0, 404:0,
			405:0, 406:0, 407:0, 408:0, 409:0,
			410:0, 411:0, 412:0, 413:0, 414:0,
			415:0, 416:0, 417:0, 418:0, 419:0,
			420:0,
			500:0, 501:0, 502:0, 503:0, 504:0,
			505:0, 506:0, 507:0, 508:0, 509:0,
			510:0, 511:0, 512:0, 513:0, 514:0,
			515:0, 516:0, 517:0,
			600:0, 601:0, 602:0, 603:0, 604:0,
			605:0, 606:0, 607:0, 608:0, 609:0,
			610:0, 611:0, 612:0, 613:0, 614:0,
			615:0, 616:0, 617:0, 618:0, 619:0,
			620:0, 621:0, 622:0, 623:0, 624:0,
			625:0, 626:0, 627:0, 628:0, 629:0,
			630:0, 631:0, 632:0,
			800:0,
			900:0}];
			FormChaldeaUsed[i] = [{
			100:0, 101:0, 102:0, 103:0, 104:0, 105:0, 106:0,
			110:0, 111:0, 112:0, 113:0, 114:0, 115:0, 116:0,
			200:0, 201:0, 202:0, 203:0, 204:0, 205:0, 206:0,
			210:0, 211:0, 212:0, 213:0, 214:0, 215:0, 216:0,
			220:0, 221:0, 222:0, 223:0, 224:0, 225:0, 226:0,
			300:0, 301:0, 302:0, 303:0, 304:0,
			305:0, 306:0, 307:0, 308:0, 309:0,
			400:0, 401:0, 402:0, 403:0, 404:0,
			405:0, 406:0, 407:0, 408:0, 409:0,
			410:0, 411:0, 412:0, 413:0, 414:0,
			415:0, 416:0, 417:0, 418:0, 419:0,
			420:0,
			500:0, 501:0, 502:0, 503:0, 504:0,
			505:0, 506:0, 507:0, 508:0, 509:0,
			510:0, 511:0, 512:0, 513:0, 514:0,
			515:0, 516:0, 517:0,
			600:0, 601:0, 602:0, 603:0, 604:0,
			605:0, 606:0, 607:0, 608:0, 609:0,
			610:0, 611:0, 612:0, 613:0, 614:0,
			615:0, 616:0, 617:0, 618:0, 619:0,
			620:0, 621:0, 622:0, 623:0, 624:0,
			625:0, 626:0, 627:0, 628:0, 629:0,
			630:0, 631:0, 632:0,
			800:0,
			900:0}];
		}
		
		/* Inventoryの処理 */
		//先にクッキーデータの有無を確認
		if( Cookies.get('fgosm_com') != null ||
			Cookies.get('fgosm_brnz') != null ||
			Cookies.get('fgosm_slv') != null ||
			Cookies.get('fgosm_gld') != null ){
			
			var temp_item = "";
			var test_item = "";
			//クッキー読み込み
			if( Cookies.get('fgosm_com') != null ){
				test_item = Cookies.get('fgosm_com');
				
				if(test_item.length < 152){
					for( i=test_item.length ; i<152 ; i++ ){
						test_item += "0";
					}
				}
				// 一時データにデータを取得
				temp_item += test_item;
				//ローカルストレージに以降するため最後にクッキーを消去
				Cookies.remove('fgosm_com');
			} else {
				for( i=0 ; i<189 ; i++ ){
					temp_item += "0";
				}
			}
			if( Cookies.get('fgosm_brnz') != null ){
				test_item = Cookies.get('fgosm_brnz');
				if(test_item.length < 38){
					for( i=test_item.length ; i<38 ; i++ ){
						test_item += "0";
					}
				}
				// 一時データにデータを取得
				temp_item += test_item;
				//ローカルストレージに以降するため最後にクッキーを消去
				Cookies.remove('fgosm_brnz');
			} else {
				for( i=0 ; i<45 ; i++ ){
					temp_item += "0";
				}
			}
			if( Cookies.get('fgosm_slv') != null ){
				test_item = Cookies.get('fgosm_slv');
				
				/* 新素材追加用チェック */
				if(test_item.length < 54){
					for( i=test_item.length ; i<54 ; i++ ){
						test_item += "0";
					}
				}
				// 一時データにデータを取得
				temp_item += test_item;
				//ローカルストレージに以降するため最後にクッキーを消去
				Cookies.remove('fgosm_slv');
			} else {
				for( i=0 ; i<65 ; i++ ){
					temp_item += "0";
				}
			}
			if( Cookies.get('fgosm_gld') != null ){
				test_item = Cookies.get('fgosm_gld');
				if(test_item.length < 50){
					for( i=test_item.length ; i<50 ; i++ ){
						test_item += "0";
					}
				}
				// 一時データにデータを取得
				temp_item += test_item;
				//ローカルストレージに以降するため最後にクッキーを消去
				Cookies.remove('fgosm_gld');
			} else {
				for( i=0 ; i<60 ; i++ ){
					temp_item += "0";
				}
			}	
			loadInventory(temp_item);
		} else {
			if(typeof localStorage !== 'undefined'){
				try{
					localStorage.setItem('dummy', '1');
					if(localStorage.getItem('dummy') === '1'){
						localStorage.removeItem('dummy');
						// OK!! 完全に localStorage が使える
						
						loadLocalStorageInventory();
						
					} else {
						// NG...localStorageが無効化(？)されてる
						alert('LocalStorageの機能が使えないため、入力されたデータが保存できません。LocalStorageの機能が無効化されているかもしれません。\nブラウザの設定を見直してください。');
					}
				} catch(e) {
					// NG... localStorageの機能が使えない
					alert('LocalStorageの機能が使えないため、入力されたデータが保存できません。\nブラウザの設定等を見直してください。');
				}
			} else {
				// NG... localStorage にそもそも未対応...
				alert('LocalStorageの機能が使えないため、入力されたデータが保存できません。LocalStorageの機能がご使用のブラウザで非対応の可能性があります。');
			}
		
		}
		
		/* MyChaldeaサーヴァントの処理*/
		/* Summonsクッキーの有無を確認 */
		if( Cookies.get('fgosm_smmn') != null){
			var temp_smmn = "";
			temp_smmn = Cookies.get('fgosm_smmn');
			
			loadServant(temp_smmn);
			//ローカルストレージに以降するため最後にクッキーを消去
			Cookies.remove('fgosm_smmn');
		} else {
			loadLocalStorageServant();
		}
		
	});
});

function materialCalc(idNum)
{
	var sairin_from = parseInt( $("#sairin_from_"+idNum).val() );
	var sairin_to = parseInt( $("#sairin_to_"+idNum).val() );
	var skill1_from = parseInt( $("#skill1_from_"+idNum).val() );
	var skill1_to = parseInt( $("#skill1_to_"+idNum).val() );
	var skill2_from = parseInt( $("#skill2_from_"+idNum).val() );
	var skill2_to = parseInt( $("#skill2_to_"+idNum).val() );
	var skill3_from = parseInt( $("#skill3_from_"+idNum).val() );
	var skill3_to = parseInt( $("#skill3_to_"+idNum).val() );
	
	for( var i=0 ; i<Servantdb.length ; i++ )
	{
		if(Servantdb[i].id == numCalcServantId[idNum-1])
		{
			var tcl = Servantdb[i].kind;
			var rarity = Servantdb[i].value;
			var servantid = i;
			
			myServantdb[i][0] = Servantdb[i].id;
			myServantdb[i][1] = sairin_from;
			myServantdb[i][2] = sairin_to;
			myServantdb[i][3] = skill1_from;
			myServantdb[i][4] = skill1_to;
			myServantdb[i][5] = skill2_from;
			myServantdb[i][6] = skill2_to;
			myServantdb[i][7] = skill3_from;
			myServantdb[i][8] = skill3_to;
			if( sairin_from > 0 || sairin_to < 4 || skill1_from > 1 || skill1_to < 10 || skill2_from > 1 || skill2_to < 10 || skill3_from > 1 || skill3_to < 10) myServantdb[i][9] = 1;
			else if( sairin_from == 0 && sairin_to == 4 && skill1_from == 1 && skill1_to == 10 && skill2_from == 1 && skill2_to == 10 && skill3_from == 1 && skill3_to == 10) myServantdb[i][9] = 0;
		}
	}
	
	saveLocalStorageServant();
	
	/*
	var deb1 = document.getElementById("debug1");
	deb1.innerText = "debug1 : " + test;
	*/
	/*
	var deb2 = document.getElementById("debug2");
	var deb3 = document.getElementById("debug3");
	var deb4 = document.getElementById("debug4");
	var deb5 = document.getElementById("debug5");
	*/
	/*
	deb2.innerText = ("debug2 : tid " + tid);
	deb3.innerText = ("debug3 : rarity" + rarity);
	deb4.innerText = ("debug4 : " + ServantClass);
	deb5.innerText = ("debug5 : " + ServantClass);
	*/
	/*
	$("#bci0_" + numCalcServantId[idNum-1]).text(sairin_from +" → " + sairin_to);
	$("#bci1_" + numCalcServantId[idNum-1]).text(skill1_from +" → " + skill1_to);
	$("#bci2_" + numCalcServantId[idNum-1]).text(skill2_from +" → " + skill2_to);
	$("#bci3_" + numCalcServantId[idNum-1]).text(skill3_from +" → " + skill3_to);
	*/
	
	$("#bci0_" + idNum).text(sairin_from +" → " + sairin_to);
	$("#bci1_" + idNum).text(skill1_from +" → " + skill1_to);
	$("#bci2_" + idNum).text(skill2_from +" → " + skill2_to);
	$("#bci3_" + idNum).text(skill3_from +" → " + skill3_to);
	
	
	/* 素材格納庫の初期化 */
	var count = 0;
	
	/* ピース系 */
	for(var i=0 ; i<2 ; i++){
		for(j=0 ; j<7 ; j++){
			count = 100 + i*10 + j;
			FormidNum[idNum-1][count] = 0;
			FormidUsed[idNum-1][count] = 0;
			numCalcServantMaterial[idNum-1][count][0] = 0;
			numCalcServantMaterial[idNum-1][count][1] = 0;
			numCalcServantMaterial[idNum-1][count][2] = 0;
			numCalcServantMaterial[idNum-1][count][3] = 0;
		}
	}
	/* 輝石系 */
	for(i=0 ; i<3 ; i++){
		for(j=0 ; j<7 ; j++){
			count = 200 + i*10 + j;
			FormidNum[idNum-1][count] = 0;
			FormidUsed[idNum-1][count] = 0;
			numCalcServantMaterial[idNum-1][count][0] = 0;
			numCalcServantMaterial[idNum-1][count][1] = 0;
			numCalcServantMaterial[idNum-1][count][2] = 0;
			numCalcServantMaterial[idNum-1][count][3] = 0;
		}
	}
	/* 素材系 */
	/* rare1 bronze */
	for(i=0 ; i<10 ; i++){
		count = 300 + i;
		FormidNum[idNum-1][count] = 0;
		FormidUsed[idNum-1][count] = 0;
		numCalcServantMaterial[idNum-1][count][0] = 0;
		numCalcServantMaterial[idNum-1][count][1] = 0;
		numCalcServantMaterial[idNum-1][count][2] = 0;
		numCalcServantMaterial[idNum-1][count][3] = 0;
	}
	
	/* rare2 silver */
	for(i=0 ; i<21 ; i++){
		count = 400 + i;
		FormidNum[idNum-1][count] = 0;
		FormidUsed[idNum-1][count] = 0;
		numCalcServantMaterial[idNum-1][count][0] = 0;
		numCalcServantMaterial[idNum-1][count][1] = 0;
		numCalcServantMaterial[idNum-1][count][2] = 0;
		numCalcServantMaterial[idNum-1][count][3] = 0;
	}
	
	/* rare3 gold */
	for(i=0 ; i<18 ; i++){
		count = 500 + i;
		FormidNum[idNum-1][count] = 0;
		FormidUsed[idNum-1][count] = 0;
		numCalcServantMaterial[idNum-1][count][0] = 0;
		numCalcServantMaterial[idNum-1][count][1] = 0;
		numCalcServantMaterial[idNum-1][count][2] = 0;
		numCalcServantMaterial[idNum-1][count][3] = 0;
	}
	
	/* イベントアイテム系 */
	for(i=0 ; i<33 ; i++){
		count = 600 + i;
		FormidNum[idNum-1][count] = 0;
		FormidUsed[idNum-1][count] = 0;
		numCalcServantMaterial[idNum-1][count][0] = 0;
		numCalcServantMaterial[idNum-1][count][1] = 0;
		numCalcServantMaterial[idNum-1][count][2] = 0;
		numCalcServantMaterial[idNum-1][count][3] = 0;
	}
	
	/* 伝承結晶 */
	FormidNum[idNum-1][800] = 0;
	FormidUsed[idNum-1][800] = 0;
	numCalcServantMaterial[idNum-1][800][0] = 0;
	numCalcServantMaterial[idNum-1][800][1] = 0;
	numCalcServantMaterial[idNum-1][800][2] = 0;
	numCalcServantMaterial[idNum-1][800][3] = 0;
	
	/* QP */
	FormidNum[idNum-1][900] = 0;
	FormidUsed[idNum-1][900] = 0;
	numCalcServantMaterial[idNum-1][900][0] = 0;
	numCalcServantMaterial[idNum-1][900][1] = 0;
	numCalcServantMaterial[idNum-1][900][2] = 0;
	numCalcServantMaterial[idNum-1][900][3] = 0;
	
	/* 初期化ここまで */
	
	
	/*霊基再臨*/
	var tempM=0;
	var tempQ=0;
	
	for(var i=0 ; i<sairin_to ; i++)
	{
		switch(i){
			case 0:
				if( sairin_from > i ){
					for(var k in Servantdb[servantid].AdAgain1){
						FormidUsed[idNum-1][k] += Servantdb[servantid].AdAgain1[k];
					}
					if( tcl != 9 ) FormidUsed[idNum-1][900] += sairinQP[rarity][i];
				} else {
					for(var k in Servantdb[servantid].AdAgain1){
						FormidNum[idNum-1][k] += Servantdb[servantid].AdAgain1[k];
						numCalcServantMaterial[idNum-1][k][0] += Servantdb[servantid].AdAgain1[k];
					}
					if( tcl != 9 ){
						FormidNum[idNum-1][900] += sairinQP[rarity][i];
						numCalcServantMaterial[idNum-1][900][0] += sairinQP[rarity][i];
					}
				}
				break;
			case 1:
				if( sairin_from > i ){
					for(var k in Servantdb[servantid].AdAgain2){
						FormidUsed[idNum-1][k] += Servantdb[servantid].AdAgain2[k];
					}
					if( tcl != 9 ) FormidUsed[idNum-1][900] += sairinQP[rarity][i];
				} else {
					for(var k in Servantdb[servantid].AdAgain2){
						FormidNum[idNum-1][k] += Servantdb[servantid].AdAgain2[k];
						numCalcServantMaterial[idNum-1][k][0] += Servantdb[servantid].AdAgain2[k];
					}
					if( tcl != 9 ){
						FormidNum[idNum-1][900] += sairinQP[rarity][i];
						numCalcServantMaterial[idNum-1][900][0] += sairinQP[rarity][i];
					}
				}
				break;
			case 2:
				if( sairin_from > i ){
					for(var k in Servantdb[servantid].AdAgain3){
						FormidUsed[idNum-1][k] += Servantdb[servantid].AdAgain3[k];
					}
					if( tcl != 9 ) FormidUsed[idNum-1][900] += sairinQP[rarity][i];
				} else {
					for(var k in Servantdb[servantid].AdAgain3){
						FormidNum[idNum-1][k] += Servantdb[servantid].AdAgain3[k];
						numCalcServantMaterial[idNum-1][k][0] += Servantdb[servantid].AdAgain3[k];
					}
					if( tcl != 9 ){
						FormidNum[idNum-1][900] += sairinQP[rarity][i];
						numCalcServantMaterial[idNum-1][900][0] += sairinQP[rarity][i];
					}
				}
				break;
			case 3:
				if( sairin_from > i ){
					for(var k in Servantdb[servantid].AdAgain4){
						FormidUsed[idNum-1][k] += Servantdb[servantid].AdAgain4[k];
					}
					if( tcl != 9 ) FormidUsed[idNum-1][900] += sairinQP[rarity][i];
				} else {
					for(var k in Servantdb[servantid].AdAgain4){
						FormidNum[idNum-1][k] += Servantdb[servantid].AdAgain4[k];
						numCalcServantMaterial[idNum-1][k][0] += Servantdb[servantid].AdAgain4[k];
					}
					if( tcl != 9 ){
						FormidNum[idNum-1][900] += sairinQP[rarity][i];
						numCalcServantMaterial[idNum-1][900][0] += sairinQP[rarity][i];
					}
				}
				break;
			default:
				break;
		}
	}
	/*スキル1*/
	for(var i=1 ; i<skill1_to ; i++)
	{
		switch(i)
		{
			case 1:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill1){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill1[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill1){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill1[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill1[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 2:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill2){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill2[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill2){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill2[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill2[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 3:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill3){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill3[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill3){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill3[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill3[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 4:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill4){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill4[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill4){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill4[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill4[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 5:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill5){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill5[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill5){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill5[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill5[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 6:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill6){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill6[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill6){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill6[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill6[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 7:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill7){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill7[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill7){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill7[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill7[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 8:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill8){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill8[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill8){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill8[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill8[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			case 9:
				if( skill1_from > i ){
					for(var k in Servantdb[servantid].skill9){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill9[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill9){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill9[k];
						numCalcServantMaterial[idNum-1][k][1] += Servantdb[servantid].skill9[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][1] += skillQP[rarity][i-1];
				}
				break;
			default:break;
		}
	}
	/*スキル2*/
	for(var i=1 ; i<skill2_to ; i++)
	{
		switch(i)
		{
			case 1:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill1){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill1[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill1){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill1[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill1[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 2:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill2){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill2[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill2){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill2[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill2[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 3:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill3){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill3[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill3){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill3[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill3[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 4:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill4){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill4[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill4){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill4[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill4[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 5:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill5){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill5[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill5){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill5[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill5[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 6:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill6){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill6[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill6){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill6[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill6[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 7:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill7){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill7[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill7){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill7[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill7[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 8:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill8){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill8[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill8){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill8[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill8[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			case 9:
				if( skill2_from > i ){
					for(var k in Servantdb[servantid].skill9){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill9[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill9){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill9[k];
						numCalcServantMaterial[idNum-1][k][2] += Servantdb[servantid].skill9[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][2] += skillQP[rarity][i-1];
				}
				break;
			default:break;
		}
	}
	/*スキル3*/
	for(var i=1 ; i<skill3_to ; i++)
	{
		switch(i)
		{
			case 1:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill1){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill1[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill1){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill1[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill1[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 2:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill2){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill2[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill2){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill2[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill2[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 3:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill3){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill3[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill3){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill3[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill3[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 4:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill4){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill4[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill4){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill4[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill4[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 5:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill5){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill5[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill5){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill5[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill5[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 6:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill6){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill6[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill6){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill6[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill6[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 7:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill7){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill7[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill7){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill7[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill7[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 8:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill8){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill8[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill8){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill8[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill8[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			case 9:
				if( skill3_from > i ){
					for(var k in Servantdb[servantid].skill9){
						FormidUsed[idNum-1][k] += Servantdb[servantid].skill9[k];
					}
					FormidUsed[idNum-1][900] += skillQP[rarity][i-1];
				} else {
					for(var k in Servantdb[servantid].skill9){
						FormidNum[idNum-1][k] += Servantdb[servantid].skill9[k];
						numCalcServantMaterial[idNum-1][k][3] += Servantdb[servantid].skill9[k];
					}
					FormidNum[idNum-1][900] += skillQP[rarity][i-1];
					numCalcServantMaterial[idNum-1][900][3] += skillQP[rarity][i-1];
				}
				break;
			default:break;
		}
	}
	
	/*
	for( i=0 ; i<33 ; i++ )
	{
		tdb.rows[idNum].cells[i+3].innerText = material[i];
	}
	*/
	materialTotal();
}

function chaldeaCalc(cNum)
{
	/* FormChaldeaNumの初期化 */
	/* ピース系 */
	for(var i=0 ; i<2 ; i++){
		for(var j=0 ; j<7 ; j++){
			count = 100 + i*10 + j;
			for( var k=0 ; k<Servantdb.length ; k++ ){
				FormChaldeaNum[k][count] = 0;
				FormChaldeaUsed[k][count] = 0;
			}
		}
	}
	/* 輝石系 */
	for(i=0 ; i<3 ; i++){
		for(j=0 ; j<7 ; j++){
			count = 200 + i*10 + j;
			for( var k=0 ; k<Servantdb.length ; k++ ){
				FormChaldeaNum[k][count] = 0;
				FormChaldeaUsed[k][count] = 0;
			}
		}
	}
	/* 素材系 */
	/* rare1 bronze */
	for(i=0 ; i<10 ; i++){
		count = 300 + i;
		for( var k=0 ; k<Servantdb.length ; k++ ){
			FormChaldeaNum[k][count] = 0;
			FormChaldeaUsed[k][count] = 0;
		}
	}
	/* rare2 silver */
	for(i=0 ; i<21 ; i++){
		count = 400 + i;
		for( var k=0 ; k<Servantdb.length ; k++ ){
			FormChaldeaNum[k][count] = 0;
			FormChaldeaUsed[k][count] = 0;
		}
	}
	
	/* rare3 gold */
	for(i=0 ; i<18 ; i++){
		count = 500 + i;
		for( var k=0 ; k<Servantdb.length ; k++ ){
			FormChaldeaNum[k][count] = 0;
			FormChaldeaUsed[k][count] = 0;
		}
	}
	
	/* イベントアイテム系 */
	for(i=0 ; i<33 ; i++){
		count = 600 + i;
		for( var k=0 ; k<Servantdb.length ; k++ ){
			FormChaldeaNum[k][count] = 0;
			FormChaldeaUsed[k][count] = 0;
		}
	}
	
	/* 伝承結晶 */
	for( var k=0 ; k<Servantdb.length ; k++ ){
		FormChaldeaNum[k][800] = 0;
		FormChaldeaUsed[k][800] = 0;
	}
	
	/* QP */
	for( var k=0 ; k<Servantdb.length ; k++ ){
		FormChaldeaNum[k][900] = 0;
		FormChaldeaUsed[k][900] = 0;
	}
	/* 初期化ここまで */
	
	
	/* myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0]; */
	for(var j=0 ; j<myServantdb.length ; j++ )
	{
		var tcl = Servantdb[j].kind;
		var rarity = Servantdb[j].value;
		if(cNum==99)
		{/* MyChaldeaのクラス選択が全 */
			if( myServantdb[j][9]==1 && myServantdb[j][10]==0 )
			{
				/* 霊基再臨 */
				for(var i=0 ; i<myServantdb[j][2] ; i++)
				{
					switch(i){
						case 0:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain1){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain1[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain1){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain1[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						case 1:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain2){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain2[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain2){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain2[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						case 2:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain3){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain3[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain3){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain3[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						case 3:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain4){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain4[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain4){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain4[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						default:
							break;
					}
				}
				/*スキル1*/
				for(var i=1 ; i<myServantdb[j][4] ; i++)
				{
					switch(i)
					{
						case 1:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill1){
									FormChaldeaUsed[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill1){
									FormChaldeaNum[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 2:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill2){
									FormChaldeaUsed[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill2){
									FormChaldeaNum[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 3:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill3){
									FormChaldeaUsed[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill3){
									FormChaldeaNum[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 4:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill4){
									FormChaldeaUsed[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill4){
									FormChaldeaNum[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 5:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill5){
									FormChaldeaUsed[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill5){
									FormChaldeaNum[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 6:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill6){
									FormChaldeaUsed[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill6){
									FormChaldeaNum[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 7:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill7){
									FormChaldeaUsed[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill7){
									FormChaldeaNum[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 8:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill8){
									FormChaldeaUsed[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill8){
									FormChaldeaNum[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 9:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill9){
									FormChaldeaUsed[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill9){
									FormChaldeaNum[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						default:break;
					}
				}
				/*スキル2*/
				for(var i=1 ; i<myServantdb[j][6] ; i++)
				{
					switch(i)
					{
						case 1:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill1){
									FormChaldeaUsed[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill1){
									FormChaldeaNum[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 2:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill2){
									FormChaldeaUsed[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill2){
									FormChaldeaNum[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 3:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill3){
									FormChaldeaUsed[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill3){
									FormChaldeaNum[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 4:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill4){
									FormChaldeaUsed[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill4){
									FormChaldeaNum[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 5:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill5){
									FormChaldeaUsed[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill5){
									FormChaldeaNum[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 6:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill6){
									FormChaldeaUsed[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill6){
									FormChaldeaNum[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 7:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill7){
									FormChaldeaUsed[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill7){
									FormChaldeaNum[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 8:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill8){
									FormChaldeaUsed[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill8){
									FormChaldeaNum[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 9:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill9){
									FormChaldeaUsed[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill9){
									FormChaldeaNum[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						default:break;
					}
				}
				/*スキル3*/
				for(var i=1 ; i<myServantdb[j][8] ; i++)
				{
					switch(i)
					{
						case 1:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill1){
									FormChaldeaUsed[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill1){
									FormChaldeaNum[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 2:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill2){
									FormChaldeaUsed[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill2){
									FormChaldeaNum[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 3:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill3){
									FormChaldeaUsed[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill3){
									FormChaldeaNum[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 4:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill4){
									FormChaldeaUsed[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill4){
									FormChaldeaNum[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 5:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill5){
									FormChaldeaUsed[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill5){
									FormChaldeaNum[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 6:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill6){
									FormChaldeaUsed[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill6){
									FormChaldeaNum[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 7:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill7){
									FormChaldeaUsed[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill7){
									FormChaldeaNum[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 8:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill8){
									FormChaldeaUsed[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill8){
									FormChaldeaNum[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 9:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill9){
									FormChaldeaUsed[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill9){
									FormChaldeaNum[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						default:break;
					}
				}
			}
		} else {
		 	if( myServantdb[j][9]==1 && myServantdb[j][10]==0 && Servantdb[j].kind == cNum)
			{/* クラス選択が全でないとき */
				/* 霊基再臨 */
				for(var i=0 ; i<myServantdb[j][2] ; i++)
				{
					switch(i){
						case 0:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain1){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain1[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain1){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain1[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						case 1:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain2){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain2[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain2){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain2[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						case 2:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain3){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain3[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain3){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain3[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						case 3:
							if( myServantdb[j][1] > i ){
								for(var k in Servantdb[j].AdAgain4){
									FormChaldeaUsed[j][k] += Servantdb[j].AdAgain4[k];
								}
								if( tcl != 9 ) FormChaldeaUsed[j][900] += sairinQP[rarity][i];
							} else {
								for(var k in Servantdb[j].AdAgain4){
									FormChaldeaNum[j][k] += Servantdb[j].AdAgain4[k];
								}
								if( tcl != 9 ) FormChaldeaNum[j][900] += sairinQP[rarity][i];
							}
							break;
						default:
							break;
					}
				}
				/*スキル1*/
				for(var i=1 ; i<myServantdb[j][4] ; i++)
				{
					switch(i)
					{
						case 1:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill1){
									FormChaldeaUsed[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill1){
									FormChaldeaNum[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 2:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill2){
									FormChaldeaUsed[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill2){
									FormChaldeaNum[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 3:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill3){
									FormChaldeaUsed[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill3){
									FormChaldeaNum[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 4:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill4){
									FormChaldeaUsed[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill4){
									FormChaldeaNum[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 5:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill5){
									FormChaldeaUsed[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill5){
									FormChaldeaNum[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 6:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill6){
									FormChaldeaUsed[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill6){
									FormChaldeaNum[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 7:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill7){
									FormChaldeaUsed[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill7){
									FormChaldeaNum[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 8:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill8){
									FormChaldeaUsed[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill8){
									FormChaldeaNum[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 9:
							if( myServantdb[j][3] > i ){
								for(var k in Servantdb[j].skill9){
									FormChaldeaUsed[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill9){
									FormChaldeaNum[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						default:break;
					}
				}
				/*スキル2*/
				for(var i=1 ; i<myServantdb[j][6] ; i++)
				{
					switch(i)
					{
						case 1:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill1){
									FormChaldeaUsed[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill1){
									FormChaldeaNum[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 2:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill2){
									FormChaldeaUsed[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill2){
									FormChaldeaNum[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 3:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill3){
									FormChaldeaUsed[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill3){
									FormChaldeaNum[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 4:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill4){
									FormChaldeaUsed[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill4){
									FormChaldeaNum[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 5:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill5){
									FormChaldeaUsed[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill5){
									FormChaldeaNum[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 6:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill6){
									FormChaldeaUsed[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill6){
									FormChaldeaNum[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 7:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill7){
									FormChaldeaUsed[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill7){
									FormChaldeaNum[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 8:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill8){
									FormChaldeaUsed[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill8){
									FormChaldeaNum[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 9:
							if( myServantdb[j][5] > i ){
								for(var k in Servantdb[j].skill9){
									FormChaldeaUsed[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill9){
									FormChaldeaNum[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						default:break;
					}
				}
				/*スキル3*/
				for(var i=1 ; i<myServantdb[j][8] ; i++)
				{
					switch(i)
					{
						case 1:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill1){
									FormChaldeaUsed[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill1){
									FormChaldeaNum[j][k] += Servantdb[j].skill1[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 2:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill2){
									FormChaldeaUsed[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill2){
									FormChaldeaNum[j][k] += Servantdb[j].skill2[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 3:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill3){
									FormChaldeaUsed[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill3){
									FormChaldeaNum[j][k] += Servantdb[j].skill3[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 4:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill4){
									FormChaldeaUsed[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill4){
									FormChaldeaNum[j][k] += Servantdb[j].skill4[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 5:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill5){
									FormChaldeaUsed[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill5){
									FormChaldeaNum[j][k] += Servantdb[j].skill5[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 6:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill6){
									FormChaldeaUsed[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill6){
									FormChaldeaNum[j][k] += Servantdb[j].skill6[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 7:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill7){
									FormChaldeaUsed[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill7){
									FormChaldeaNum[j][k] += Servantdb[j].skill7[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 8:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill8){
									FormChaldeaUsed[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill8){
									FormChaldeaNum[j][k] += Servantdb[j].skill8[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						case 9:
							if( myServantdb[j][7] > i ){
								for(var k in Servantdb[j].skill9){
									FormChaldeaUsed[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaUsed[j][900] += skillQP[rarity][i-1];
							} else {
								for(var k in Servantdb[j].skill9){
									FormChaldeaNum[j][k] += Servantdb[j].skill9[k];
								}
								FormChaldeaNum[j][900] += skillQP[rarity][i-1];
							}
							break;
						default:break;
					}
				}
			}
		}
	}
	
	chaldeaTotal();
}
function chaldeaTotal()
{
	/* 統合配列の中身を初期化 */
	var count = 0;
	
	/* ピース系 */
	for(var i=0 ; i<2 ; i++){
		for(var j=0 ; j<7 ; j++){
			count = 100 + i*10 + j;
			mTotalChaldea[count] = 0;
			mUsedChaldea[count] = 0;
		}
	}
	
	/* 輝石系 */
	for(i=0 ; i<3 ; i++){
		for(j=0 ; j<7 ; j++){
			count = 200 + i*10 + j;
			mTotalChaldea[count] = 0;
			mUsedChaldea[count] = 0;
		}
	}
	
	/* 素材系 */
	/* rare1 bronze */
	for(i=0 ; i<10 ; i++){
		count = 300 + i;
		mTotalChaldea[count] = 0;
		mUsedChaldea[count] = 0;
	}
	/* rare2 silver */
	for(i=0 ; i<21 ; i++){
		count = 400 + i;
		mTotalChaldea[count] = 0;
		mUsedChaldea[count] = 0;
	}
	/* rare3 gold */
	for(i=0 ; i<18 ; i++){
		count = 500 + i;
		mTotalChaldea[count] = 0;
		mUsedChaldea[count] = 0;
	}
	
	/* イベントアイテム系 */
	for(i=0 ; i<33 ; i++){
		count = 600 + i;
		mTotalChaldea[count] = 0;
		mUsedChaldea[count] = 0;
	}
	
	/* 伝承結晶 */
	mTotalChaldea[800] = 0;
	mUsedChaldea[800] = 0;
	
	/* QP */
	mTotalChaldea[900] = 0;
	mUsedChaldea[900] = 0;
	
	/* 初期化ここまで */
	
	/*各素材の数値を合計*/
	for(i=0 ; i<Servantdb.length ; i++)
	{
		for(var k in FormChaldeaNum[i])
		{
			mTotalChaldea[k] += FormChaldeaNum[i][k];
		}
		for(var k in FormChaldeaNum[i])
		{
			mUsedChaldea[k] += FormChaldeaUsed[i][k];
		}
	}
	
	if( useInv == 0 ){
		$(".num-chaldea").css("color","rgb(255,255,255)");
		$(".chaldea-qp").css("color","rgb(25,25,25)");
	} else if( useInv == 1 ) {
		$(".num-chaldea").css("color","rgb(255,117,117)");
		$(".chaldea-qp").css("color","rgb(225,25,25)");
	} else {
		$(".num-chaldea").css("color","rgb(187,222,251)");
		$(".chaldea-qp").css("color","rgb(64,146,220)");
	}
	var num=0;
	count = 0;
	
	if(useInv == 0){
		/*合計表 ピース系入力*/
		for( i=0 ; i<2 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 100 + i*10 + j;
				$("#chaldea_" + count).text(mTotalChaldea[count]);
				
				if( mTotalChaldea[count] > 0 ){
					$("#chaldea_box_" + count).fadeIn('fast');
				} else if( mTotalChaldea[count] == 0 ){
					$("#chaldea_box_" + count).fadeOut('fast');
				}
				num += mTotalChaldea[count];
			}
		}
		/*合計表 輝石系入力*/
		for( i=0 ; i<3 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 200 + i*10 + j;
				$("#chaldea_" + count).text(mTotalChaldea[count]);
				
				if( mTotalChaldea[count] > 0 ){
					$("#chaldea_box_" + count).fadeIn('fast');
				} else if ( mTotalChaldea[count] == 0 ){
					$("#chaldea_box_" + count).fadeOut('fast');
				}
				num += mTotalChaldea[count];
			}
		}
		/*合計表 素材アイテム系入力*/
		/* rare1 bronze */
		for( i=0 ; i<10 ; i++ ){
			count = 300 + i;
			$("#chaldea_" + count).text(mTotalChaldea[count]);
			
			if( mTotalChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mTotalChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			num += mTotalChaldea[count];
		}
		/* rare2 silver */
		for( i=0 ; i<21 ; i++ ){
			count = 400 + i;
			$("#chaldea_" + count).text(mTotalChaldea[count]);
			
			if( mTotalChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mTotalChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			num += mTotalChaldea[count];
		}
		/* rare3 gold */
		for( i=0 ; i<18 ; i++ ){
			count = 500 + i;
			$("#chaldea_" + count).text(mTotalChaldea[count]);
			
			if( mTotalChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mTotalChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			num += mTotalChaldea[count];
		}
		/*合計表 イベント専用アイテム系入力 */
		for( i=0 ; i<33 ; i++ ){
			count = 600 + i;
			$("#chaldea_" + count).text(mTotalChaldea[count]);
			
			if( mTotalChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mTotalChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			num += mTotalChaldea[count];
		}
		/*合計表 伝承結晶入力*/
		count = 800;
		$("#chaldea_" + count).text(mTotalChaldea[count]);
		
		if( mTotalChaldea[count] > 0 ){
			$("#chaldea_box_" + count).fadeIn('fast');
		} else if ( mTotalChaldea[count] == 0 ){
			$("#chaldea_box_" + count).fadeOut('fast');
		}
		num += mTotalChaldea[count];
		/*合計表 QP入力*/
		count = 900;
		document.getElementById("chaldea_" + count).rows[0].cells[1].innerText = separate(mTotalChaldea[count]);
		
		if( mTotalChaldea[count] > 0 ){
			$("#chaldea_box_" + count).fadeIn('fast');
		} else if ( mTotalChaldea[count] == 0 ){
			$("#chaldea_box_" + count).fadeOut('fast');
		}
		num += mTotalChaldea[count];
	} else if(useInv == 1){
		/*合計表 ピース系入力*/
		for( i=0 ; i<2 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				tempNum = 0;
				count = 100 + i*10 + j;
				
				tempNum = mTotalChaldea[count] - inventoryNum[count];
				if( tempNum < 0 ) tempNum = 0;
				
				if( tempNum > 0 ){
					$("#chaldea_box_" + count).fadeIn('fast');
				} else if( tempNum == 0 ){
					$("#chaldea_box_" + count).fadeOut('fast');
				}
				$("#chaldea_" + count).text(tempNum);
				num += mTotalChaldea[count];
			}
		}
		/*合計表 輝石系入力*/
		for( i=0 ; i<3 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				tempNum = 0;
				count = 200 + i*10 + j;
				
				tempNum = mTotalChaldea[count] - inventoryNum[count];
				if( tempNum < 0 ) tempNum = 0;
				
				if( tempNum > 0 ){
					$("#chaldea_box_" + count).fadeIn('fast');
				} else if ( tempNum == 0 ){
					$("#chaldea_box_" + count).fadeOut('fast');
				}
				$("#chaldea_" + count).text(tempNum);
				num += mTotalChaldea[count];
			}
		}
		/*合計表 素材アイテム系入力*/
		/* rare1 bronze */
		for( i=0 ; i<10 ; i++ ){
			tempNum = 0;
			count = 300 + i;
			
			tempNum = mTotalChaldea[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( tempNum == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(tempNum);
			num += mTotalChaldea[count];
		}
		/* rare2 silver */
		for( i=0 ; i<21 ; i++ ){
			tempNum = 0;
			count = 400 + i;
			
			tempNum = mTotalChaldea[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( tempNum == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(tempNum);
			num += mTotalChaldea[count];
		}
		/* rare3 gold */
		for( i=0 ; i<18 ; i++ ){
			tempNum = 0;
			count = 500 + i;
			
			tempNum = mTotalChaldea[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( tempNum == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(tempNum);
			num += mTotalChaldea[count];
		}
		/*合計表 イベント専用アイテム系入力 */
		for( i=0 ; i<33 ; i++ ){
			count = 600 + i;
			
			if( mTotalChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mTotalChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(mTotalChaldea[count]);
			num += mTotalChaldea[count];
		}
		/*合計表 伝承結晶入力*/
		tempNum = 0;
		count = 800;
		
		tempNum = mTotalChaldea[count] - inventoryNum[count];
		if( tempNum < 0 ) tempNum = 0;
		
		if( tempNum > 0 ){
			$("#chaldea_box_" + count).fadeIn('fast');
		} else if ( tempNum == 0 ){
			$("#chaldea_box_" + count).fadeOut('fast');
		}
		$("#chaldea_" + count).text(tempNum);
		num += mTotalChaldea[count];
		/*合計表 QP入力*/
		tempNum = 0;
		count = 900;
		
		tempNum = mTotalChaldea[count] - inventoryNum[count];
		if( tempNum < 0 ) tempNum = 0;
		
		if( tempNum > 0 ){
			$("#chaldea_box_" + count).fadeIn('fast');
		} else if ( tempNum == 0 ){
			$("#chaldea_box_" + count).fadeOut('fast');
		}
		document.getElementById("chaldea_" + count).rows[0].cells[1].innerText = separate(tempNum);
		num += mTotalChaldea[count];
	} else {
		/*合計表 ピース系入力*/
		for( i=0 ; i<2 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 100 + i*10 + j;
				
				if( mUsedChaldea[count] > 0 ){
					$("#chaldea_box_" + count).fadeIn('fast');
				} else if ( mUsedChaldea[count] == 0 ){
					$("#chaldea_box_" + count).fadeOut('fast');
				}
				$("#chaldea_" + count).text(mUsedChaldea[count]);
				num += mUsedChaldea[count];
			}
		}
		/*合計表 輝石系入力*/
		for( i=0 ; i<3 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 200 + i*10 + j;
				
				if( mUsedChaldea[count] > 0 ){
					$("#chaldea_box_" + count).fadeIn('fast');
				} else if ( mUsedChaldea[count] == 0 ){
					$("#chaldea_box_" + count).fadeOut('fast');
				}
				$("#chaldea_" + count).text(mUsedChaldea[count]);
				num += mUsedChaldea[count];
			}
		}
		/*合計表 素材アイテム系入力*/
		/* rare1 bronze */
		for( i=0 ; i<10 ; i++ ){
			count = 300 + i;
			
			if( mUsedChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mUsedChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(mUsedChaldea[count]);
			num += mUsedChaldea[count];
		}
		/* rare2 silver */
		for( i=0 ; i<21 ; i++ ){
			count = 400 + i;
			
			if( mUsedChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mUsedChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(mUsedChaldea[count]);
			num += mUsedChaldea[count];
		}
		/* rare3 gold */
		for( i=0 ; i<18 ; i++ ){
			count = 500 + i;
			
			if( mUsedChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mUsedChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(mUsedChaldea[count]);
			num += mUsedChaldea[count];
		}
		/*合計表 イベント専用アイテム系入力 */
		for( i=0 ; i<33 ; i++ ){
			count = 600 + i;
			
			if( mUsedChaldea[count] > 0 ){
				$("#chaldea_box_" + count).fadeIn('fast');
			} else if ( mUsedChaldea[count] == 0 ){
				$("#chaldea_box_" + count).fadeOut('fast');
			}
			$("#chaldea_" + count).text(mUsedChaldea[count]);
			num += mUsedChaldea[count];
		}
		/*合計表 伝承結晶入力*/
		count = 800;
		
		if( mUsedChaldea[count] > 0 ){
			$("#chaldea_box_" + count).fadeIn('fast');
		} else if ( mUsedChaldea[count] == 0 ){
			$("#chaldea_box_" + count).fadeOut('fast');
		}
		$("#chaldea_" + count).text(mUsedChaldea[count]);
		num += mUsedChaldea[count];
		
		/*合計表 QP入力*/
		count = 900;
		document.getElementById("chaldea_" + count).rows[0].cells[1].innerText = separate(mUsedChaldea[count]);
		
		if( mUsedChaldea[count] > 0 ){
			$("#chaldea_box_" + count).fadeIn('fast');
		} else if ( mUsedChaldea[count] == 0 ){
			$("#chaldea_box_" + count).fadeOut('fast');
		}
		num += mUsedChaldea[count];
	}
}


function materialTotal()
{
/*合計素材スキル用表示テーブル ID*/
	var qpTotal = document.getElementById('qpTM');
	var num = 0;
	
	/*
	var deb1 = document.getElementById('debug1');
	var deb5 = document.getElementById('debug5');
	var deb6 = document.getElementById('debug6');
	var deb10 = document.getElementById('debug10');
	*/
	
	
	/* 統合配列の中身を初期化 */
	var count = 0;
	
	/* ピース系 */
	for(var i=0 ; i<2 ; i++){
		for(j=0 ; j<7 ; j++){
			count = 100 + i*10 + j;
			mTotalNum[count] = 0;
			mTotalUsed[count] = 0;
		}
	}
	
	/* 輝石系 */
	for(i=0 ; i<3 ; i++){
		for(j=0 ; j<7 ; j++){
			count = 200 + i*10 + j;
			mTotalNum[count] = 0;
			mTotalUsed[count] = 0;
		}
	}
	
	/* 素材系 */
	/* rare1 bronze */
	for(i=0 ; i<10 ; i++){
		count = 300 + i;
		mTotalNum[count] = 0;
		mTotalUsed[count] = 0;
	}
	/* rare2 silver */
	for(i=0 ; i<21 ; i++){
		count = 400 + i;
		mTotalNum[count] = 0;
		mTotalUsed[count] = 0;
	}
	/* rare3 gold */
	for(i=0 ; i<18 ; i++){
		count = 500 + i;
		mTotalNum[count] = 0;
		mTotalUsed[count] = 0;
	}
	
	/* イベントアイテム系 */
	for(i=0 ; i<33 ; i++){
		count = 600 + i;
		mTotalNum[count] = 0;
		mTotalUsed[count] = 0;
	}
	
	/* 伝承結晶 */
	mTotalNum[800] = 0;
	mTotalUsed[800] = 0;
	
	/* QP */
	mTotalNum[900] = 0;
	mTotalUsed[900] = 0;
	
	/* 初期化ここまで */
	
	/*各素材の数値を合計*/
	for(i=0 ; i<Servantdb.length ; i++)
	{
		for(var k in FormidNum[i])
		{
			mTotalNum[k] += FormidNum[i][k];
		}
		for(var k in FormidUsed[i])
		{
			mTotalUsed[k] += FormidUsed[i][k];
		}
	}
	if( useInv == 0 ){
		$(".num-icon").css("color","rgb(255,255,255)");
		$(".num-qp").css("color","rgb(25,25,25)");
	} else if( useInv == 1 ) {
		$(".num-icon").css("color","rgb(255,117,117)");
		$(".num-qp").css("color","rgb(225,25,25)");
	} else {
		$(".num-icon").css("color","rgb(187,222,251)");
		$(".num-qp").css("color","rgb(64,146,220)");
	}
	var count = 0;
	if( useInv == 0 ){
		/*合計表 ピース系入力*/
		for( i=0 ; i<2 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 100 + i*10 + j;
				document.getElementById(count).innerText = mTotalNum[count];
				document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
				
				if( mTotalNum[count] > 0 ){
					$("#box_" + count).fadeIn('fast');
				} else if( mTotalNum[count] == 0 ){
					$("#box_" + count).fadeOut('fast');
				}
				num += mTotalNum[count];
			}
		}
		/*合計表 輝石系入力*/
		for( i=0 ; i<3 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 200 + i*10 + j;
				document.getElementById(count).innerText = mTotalNum[count];
				document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
				
				if( mTotalNum[count] > 0 ){
					$("#box_" + count).fadeIn('fast');
				} else if ( mTotalNum[count] == 0 ){
					$("#box_" + count).fadeOut('fast');
				}
				num += mTotalNum[count];
			}
		}
		/*合計表 素材アイテム系入力*/
		/* rare1 bronze */
		for( i=0 ; i<10 ; i++ ){
			count = 300 + i;
			document.getElementById(count).innerText = mTotalNum[count];
			document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
			
			if( mTotalNum[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalNum[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalNum[count];
		}
		/* rare2 silver */
		for( i=0 ; i<21 ; i++ ){
			count = 400 + i;
			document.getElementById(count).innerText = mTotalNum[count];
			document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
			
			if( mTotalNum[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalNum[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalNum[count];
		}
		/* rare3 gold */
		for( i=0 ; i<18 ; i++ ){
			count = 500 + i;
			document.getElementById(count).innerText = mTotalNum[count];
			document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
			
			if( mTotalNum[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalNum[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalNum[count];
		}
		/*合計表 イベント専用アイテム系入力 */
		for( i=0 ; i<33 ; i++ ){
			count = 600 + i;
			document.getElementById(count).innerText = mTotalNum[count];
			document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
			
			if( mTotalNum[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalNum[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalNum[count];
		}
		/*合計表 伝承結晶入力*/
		count = 800;
		document.getElementById(count).innerText = mTotalNum[count];
		document.getElementById("chaldea_" + count).innerText = mTotalChaldea[count];
		
		if( mTotalNum[count] > 0 ){
			$("#box_" + count).fadeIn('fast');
		} else if ( mTotalNum[count] == 0 ){
			$("#box_" + count).fadeOut('fast');
		}
		num += mTotalNum[count];
		/*合計表 QP入力*/
		count = 900;
		document.getElementById(count).rows[0].cells[1].innerText = separate(mTotalNum[count]);
		document.getElementById("chaldea_" + count).rows[0].cells[1].innerText = separate(mTotalChaldea[count]);
		
		if( mTotalNum[count] > 0 ){
			$("#box_" + count).fadeIn('fast');
		} else if ( mTotalNum[count] == 0 ){
			$("#box_" + count).fadeOut('fast');
		}
	}else if( useInv == 1 ){
		/*合計表 ピース系入力*/
		for( i=0 ; i<2 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				tempNum = 0;
				count = 100 + i*10 + j;
				
				tempNum = mTotalNum[count] - inventoryNum[count];
				if( tempNum < 0 ) tempNum = 0;
				
				if( tempNum > 0 ){
					$("#box_" + count).fadeIn('fast');
				} else {
					$("#box_" + count).fadeOut('fast');
				}
				document.getElementById(count).innerText = tempNum;
				num += mTotalNum[count];
			}
		}
		/*合計表 輝石系入力*/
		for( i=0 ; i<3 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				tempNum = 0;
				count = 200 + i*10 + j;
				
				tempNum = mTotalNum[count] - inventoryNum[count];
				if( tempNum < 0 ) tempNum = 0;
				
				if( tempNum > 0 ){
					$("#box_" + count).fadeIn('fast');
				} else {
					$("#box_" + count).fadeOut('fast');
				}
				document.getElementById(count).innerText = tempNum;
				num += mTotalNum[count];
			}
		}
		/*合計表 素材アイテム系入力*/
		/* rare1 bronze */
		for( i=0 ; i<10 ; i++ ){
			tempNum = 0;
			count = 300 + i;
			
			tempNum = mTotalNum[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else {
				$("#box_" + count).fadeOut('fast');
			}
			document.getElementById(count).innerText = tempNum;
			num += mTotalNum[count];
		}
		/* rare2 silver */
		for( i=0 ; i<21 ; i++ ){
			tempNum = 0;
			count = 400 + i;
			
			tempNum = mTotalNum[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else {
				$("#box_" + count).fadeOut('fast');
			}
			document.getElementById(count).innerText = tempNum;
			num += mTotalNum[count];
		}
		/* rare3 gold */
		for( i=0 ; i<18 ; i++ ){
			tempNum = 0;
			count = 500 + i;
			
			tempNum = mTotalNum[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else {
				$("#box_" + count).fadeOut('fast');
			}
			document.getElementById(count).innerText = tempNum;
			num += mTotalNum[count];
		}
		/*合計表 イベント専用アイテム系入力 */
		for( i=0 ; i<33 ; i++ ){
			tempNum = 0;
			count = 600 + i;
			
			tempNum = mTotalNum[count] - inventoryNum[count];
			if( tempNum < 0 ) tempNum = 0;
			
			if( tempNum > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else {
				$("#box_" + count).fadeOut('fast');
			}
			document.getElementById(count).innerText = tempNum;
			num += mTotalNum[count];
		}
		/*合計表 伝承結晶入力*/
		tempNum = 0;
		count = 800;
	
		tempNum = mTotalNum[count] - inventoryNum[count];
		if( tempNum < 0 ) tempNum = 0;
		
		if( tempNum > 0 ){
			$("#box_" + count).fadeIn('fast');
		} else {
			$("#box_" + count).fadeOut('fast');
		}
		document.getElementById(count).innerText = tempNum;
		num += mTotalNum[count];
		
		/*合計表 QP入力*/
		tempNum = 0;
		count = 900;
		
		tempNum = mTotalNum[count] - inventoryNum[count];
		if( tempNum < 0 ) tempNum = 0;
		
		if( tempNum > 0 ){
			$("#box_" + count).fadeIn('fast');
		} else {
			$("#box_" + count).fadeOut('fast');
		}
		document.getElementById(count).rows[0].cells[1].innerText = separate(tempNum);
		num += mTotalNum[count];
		
	}else{
		/*合計表 ピース系入力*/
		for( i=0 ; i<2 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 100 + i*10 + j;
				document.getElementById(count).innerText = mTotalUsed[count];
				
				if( mTotalUsed[count] > 0 ){
					$("#box_" + count).fadeIn('fast');
				} else if ( mTotalUsed[count] == 0 ){
					$("#box_" + count).fadeOut('fast');
				}
				num += mTotalUsed[count];
			}
		}
		/*合計表 輝石系入力*/
		for( i=0 ; i<3 ; i++ ){
			for( j=0 ; j<7 ; j++ ){
				count = 200 + i*10 + j;
				document.getElementById(count).innerText = mTotalUsed[count];
				
				if( mTotalUsed[count] > 0 ){
					$("#box_" + count).fadeIn('fast');
				} else if ( mTotalUsed[count] == 0 ){
					$("#box_" + count).fadeOut('fast');
				}
				num += mTotalUsed[count];
			}
		}
		/*合計表 素材アイテム系入力*/
		/* rare1 bronze */
		for( i=0 ; i<10 ; i++ ){
			count = 300 + i;
			document.getElementById(count).innerText = mTotalUsed[count];
			
			if( mTotalUsed[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalUsed[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalUsed[count];
		}
		/* rare2 silver */
		for( i=0 ; i<21 ; i++ ){
			count = 400 + i;
			document.getElementById(count).innerText = mTotalUsed[count];
			
			if( mTotalUsed[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalUsed[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalUsed[count];
		}
		/* rare3 gold */
		for( i=0 ; i<18 ; i++ ){
			count = 500 + i;
			document.getElementById(count).innerText = mTotalUsed[count];
			
			if( mTotalUsed[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalUsed[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalUsed[count];
		}
		/*合計表 イベント専用アイテム系入力 */
		for( i=0 ; i<33 ; i++ ){
			count = 600 + i;
			document.getElementById(count).innerText = mTotalUsed[count];
			
			if( mTotalUsed[count] > 0 ){
				$("#box_" + count).fadeIn('fast');
			} else if ( mTotalUsed[count] == 0 ){
				$("#box_" + count).fadeOut('fast');
			}
			num += mTotalUsed[count];
		}
		/*合計表 伝承結晶入力*/
		count = 800;
		document.getElementById(count).innerText = mTotalUsed[count];
		
		if( mTotalUsed[count] > 0 ){
			$("#box_" + count).fadeIn('fast');
		} else if ( mTotalUsed[count] == 0 ){
			$("#box_" + count).fadeOut('fast');
		}
		num += mTotalUsed[count];
		
		/*合計表 QP入力*/
		count = 900;
		document.getElementById(count).rows[0].cells[1].innerText = separate(mTotalUsed[count]);
		
		if( mTotalUsed[count] > 0 ){
			$("#box_" + count).fadeIn('fast');
		} else if ( mTotalUsed[count] == 0 ){
			$("#box_" + count).fadeOut('fast');
		}
		num += mTotalUsed[count];
	}
	
	/* インスト表示切替 */
	if( num <= 0 ){
		$("#inst").show();
	}
	else if( num > 0 ){
		$("#inst").hide();
	}
}


function StatusSearch(sel){
	
	$('#icon-img14').show();
	$(".filterBox").hide();
	$("[name='class-btn']:checked").prop('checked', false);
	$('input[name=class-btn]:eq(12)').prop('checked', true);
	
	clnum = $("[name='class-btn']:checked").val();
	statusnum = 1;
	
	$(".setting-btn").show();
	
	/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
	$(this).blur() ; /* ボタンからフォーカスを外す */
	if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない*/
	
	/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
	$("body").append('<div id="modal-overlay"></div>');
	
	/* [$modal-overlay]をフェードインさせる */
	$("#modal-overlay").fadeIn("fast");
	
	/*コンテンツをセンタリングする*/
	centeringModalSyncer(3);
	
	ChangeServantIcon();
	$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.status-filter').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
	$("#select-servant").fadeIn("fast");
	//var st = $(window).height() - ( $('.select-servant-title').outerHeight() + $('.status-filter').outerHeight() + $('.select-class').outerHeight()/* + 38*/ );
}

function ReverseSearch(sel){
	/*
	numServantSelect = sel;
	*/
	$('#icon-img14').show();
	
	/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
	$(this).blur() ; /* ボタンからフォーカスを外す */
	if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない*/
	
	/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
	$("body").append('<div id="modal-overlay"></div>');
	
	/* [$modal-overlay]をフェードインさせる */
	$("#modal-overlay").fadeIn("fast");
	
	/*コンテンツをセンタリングする*/
	centeringModalSyncer(3);
	
	$('.reverseBox').show();
	$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.reverseBox').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
	$('#select-servant').fadeIn("fast");
}

function ServantSearch(sel){
	
	/*
	numServantSelect = sel;
	*/
	
	/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
	$(this).blur() ; /* ボタンからフォーカスを外す */
	if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない*/
	
	$("[name='class-btn']:checked").prop('checked', false);
	$("[name='class-btn'][value='0']").prop('checked', true);
	clnum = $("[name='class-btn']:checked").val();
	renum=0;
	ChangeServantIcon();
	
	/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
	$("body").append('<div id="modal-overlay"></div>');
	
	/* [$modal-overlay]をフェードインさせる */
	$("#modal-overlay").fadeIn("fast");
	
	/*コンテンツをセンタリングする*/
	centeringModalSyncer(3);
	$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
	$('#select-servant').fadeIn("fast");
}

function ChangeServantIcon(){
	$('div[class="box_focus_total"]:has(.selected-material-icon)').remove();
	$(".selectedMaterial").append('<div class="box_focus_total"><figure class="fig-relative"><img src="./i/icon/item_'+ renum +'.jpg" class="selected-material-icon"><figcaption class="num-focus_total"><span id="focus_total"></span></figcaption></figure></div>');
	console.log(renum);
	/*
	numServantSelect = showBox+1;
	*/
	
	//clnum = $("[name='class-btn']:checked").val();
	rev = $("[name='reverse-btn']:checked").val();
	
	$('.servant-icon').remove();
	$('div[class="box_focus"]').remove();
	$('div[class="box-chaldea"]').remove();
	
	/*
	var deb1 = document.getElementById("debug1");
	deb1.innerText = "debug1 : " + renum +" "+clnum;
	*/
	
	if( renum==0 && statusnum==0 && chaldeanum==0){
		tempNum = 0;
		tempNumtotal = 0;
		if(clnum==99){
			for( i=0 ; i<Servantdb.length ; i++ ){
				if( $.inArray(Servantdb[i].id, numCalcServantId)==-1 ){
					switch( Servantdb[i].value ){
						case 4:
							$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 3:
							$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 2:
							$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 1:
							$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 0:
							$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						default:
							break;
					}
				} else if( $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
					switch( Servantdb[i].value ){
						case 4:
							$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 3:
							$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 2:
							$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 1:
							$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 0:
							$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						default:
							break;
					}
				}
			}
		} else {
			for( i=0 ; i<Servantdb.length ; i++ ){
				if( Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)==-1 ){
					switch( Servantdb[i].value ){
						case 4:
							$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 3:
							$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 2:
							$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 1:
							$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						case 0:
							$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
							break;
						default:
							break;
					}
				} else if( Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
					switch( Servantdb[i].value ){
						case 4:
							$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 3:
							$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 2:
							$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 1:
							$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						case 0:
							$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
							break;
						default:
							break;
					}
				}
			}
		}
	} else if(chaldeanum==1 && clnum==99){
		for( i=0 ; i<Servantdb.length ; i++ ){
			if( myServantdb[i][9] == 1 && $.inArray(Servantdb[i].id, numCalcServantId)==-1 ){
				switch( Servantdb[i].value ){
					case 4:
						$(".icon-chaldea-r5").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 3:
						$(".icon-chaldea-r4").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 2:
						$(".icon-chaldea-r3").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 1:
						$(".icon-chaldea-r2").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 0:
						$(".icon-chaldea-r1").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					default:
						break;
				}
			} else if( myServantdb[i][9] == 1 && $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
				switch( Servantdb[i].value ){
					case 4:
						$(".icon-chaldea-r5").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 3:
						$(".icon-chaldea-r4").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 2:
						$(".icon-chaldea-r3").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 1:
						$(".icon-chaldea-r2").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 0:
						$(".icon-chaldea-r1").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					default:
						break;
				}
				$('.input_chaldea,input[value=" + Servantdb[i].id + "]').css('border', '#ff0000 2px solid');
			}
		}
	} else if( chaldeanum==1 ){
		for( i=0 ; i<Servantdb.length ; i++ ){
			if( myServantdb[i][9] == 1 && Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)==-1 ){
				switch( Servantdb[i].value ){
					case 4:
						$(".icon-chaldea-r5").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 3:
						$(".icon-chaldea-r4").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 2:
						$(".icon-chaldea-r3").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 1:
						$(".icon-chaldea-r2").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 0:
						$(".icon-chaldea-r1").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="input_chaldea"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					default:
						break;
				}
			} else if( myServantdb[i][9] == 1 && Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
				switch( Servantdb[i].value ){
					case 4:
						$(".icon-chaldea-r5").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 3:
						$(".icon-chaldea-r4").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 2:
						$(".icon-chaldea-r3").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 1:
						$(".icon-chaldea-r2").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					case 0:
						$(".icon-chaldea-r1").append('<div class="box-chaldea"><div class="box-c_image"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"></div><div class="box-c_ascension"><span>'+ myServantdb[i][1] +'</span></div><div class="box-c_skill"><span>'+ myServantdb[i][3] +'/'+ myServantdb[i][5] +'/'+ myServantdb[i][7] +'</span></div></div>');
						break;
					default:
						break;
				}
				$('.input_chaldea,input[value=" + Servantdb[i].id + "]').css('border', '#ff0000 2px solid');
			}
		}
	} else if(statusnum==1 && clnum==99){
		/* statusArray
			0  policy
			1  personal
			2  attribute
			3  divinity
			4  dragon
			5  roma
			6  savagebeast
			7  riding
			8 love
			9 devilish
			10 davinci
			11 saber face
			12 arthur
			13 nptype
			14 npeffect
			15 npEX
			16 exSKILL
		*/
		var filtered;
		switch(statusArray[0]){
			case 0:
				filtered = Servantdb;
				break;
			case "1":
				filtered = jQuery.grep(Servantdb, function(item){
					if(item.policyLaw) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(Servantdb, function(item){
					if(item.policyNeutral) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(Servantdb, function(item){
					if(item.policyChaos) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		/*
		personalGood
		personalNeutral
		personalEvil
		personalMad
		personalBride
		personalSummer
		*/
		switch(statusArray[1]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalGood) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalNeutral) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalEvil) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalMad) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalBride) return true; else return false;
				});
				break;
			case "6":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalSummer) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[2]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteSky) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteEarth) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteMan) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteStar) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteBeast) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		if(statusArray[3]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.divinity) return true; else return false;
			});
		}
		
		if(statusArray[4]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.dragon) return true; else return false;
			});
		}
		
		if(statusArray[5]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.roma) return true; else return false;
			});
		}
		
		if(statusArray[6]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.savagebeast) return true; else return false;
			});
		}
		
		if(statusArray[7]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.riding) return true; else return false;
			});
		}
		
		if(statusArray[8]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.love) return true; else return false;
			});
		}
		
		if(statusArray[9]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.devilish) return true; else return false;
			});
		}
		
		if(statusArray[10]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.davinci) return true; else return false;
			});
		}
		
		if(statusArray[11]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.saberface) return true; else return false;
			});
		}
		
		if(statusArray[12]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.arthur) return true; else return false;
			});
		}
		
		switch(statusArray[13]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.nptypeQ) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.nptypeA) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.nptypeB) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[14]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npeffectA) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npeffectO) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npeffectS) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[15]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXmale) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXfemale) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXdivine) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXdragon) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXpoison) return true; else return false;
				});
				break;
			case "6":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXriding) return true; else return false;
				});
				break;
			case "7":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXlove) return true; else return false;
				});
				break;
			case "8":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXevil) return true; else return false;
				});
				break;
			case "9":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXdemonic) return true; else return false;
				});
				break;
			case "10":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXskyearth) return true; else return false;
				});
				break;
			case "11":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXservant) return true; else return false;
				});
				break;
			case "12":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXface) return true; else return false;
				});
				break;
			case "13":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXarthur) return true; else return false;
				});
				break;
			case "14":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXsaber) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[16]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXmale) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdivine) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdragon) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXroma) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXsavagebeast) return true; else return false;
				});
				break;
			case "6":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXevil) return true; else return false;
				});
				break;
			case "7":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdemonic) return true; else return false;
				});
				break;
			case "8":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXskyearth) return true; else return false;
				});
				break;
			case "9":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXhuman) return true; else return false;
				});
				break;
			case "10":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXhumanoid) return true; else return false;
				});
				break;
			case "11":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXundead) return true; else return false;
				});
				break;
			case "12":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdemon) return true; else return false;
				});
				break;
			case "13":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXlarge) return true; else return false;
				});
				break;
			case "14":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXsaber) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		for( i=0 ; i<filtered.length ; i++ ){
			if( $.inArray(filtered[i].id, numCalcServantId)==-1 ){
				switch( filtered[i].value ){
					case 4:
						$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 3:
						$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 2:
						$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 1:
						$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 0:
						$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					default:
						break;
				}
			} else if( $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
				switch( filtered[i].value ){
					case 4:
						$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 3:
						$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 2:
						$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 1:
						$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 0:
						$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					default:
						break;
				}
			}
		}
		
	} else if(statusnum==1){
		/* statusArray
			0  policy
			1  personal
			2  attribute
			3  divinity
			4  dragon
			5  roma
			6  savagebeast
			7  riding
			8 love
			9 devilish
			10 davinci
			11 saber face
			12 arthur
			13 nptype
			14 npeffect
			15 npEX
			16 exSKILL
		*/
		var filtered;
		switch(statusArray[0]){
			case 0:
				filtered = Servantdb;
				break;
			case "1":
				filtered = jQuery.grep(Servantdb, function(item){
					if(item.policyLaw) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(Servantdb, function(item){
					if(item.policyNeutral) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(Servantdb, function(item){
					if(item.policyChaos) return true; else return false;
				});
				break;
		}
		
		switch(statusArray[1]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalGood) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalNeutral) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalEvil) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalMad) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalBride) return true; else return false;
				});
				break;
			case "6":
				filtered = jQuery.grep(filtered, function(item){
					if(item.personalSummer) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[2]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteSky) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteEarth) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteMan) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteStar) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.attrbuteBeast) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		if(statusArray[3]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.divinity) return true; else return false;
			});
		}
		
		if(statusArray[4]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.dragon) return true; else return false;
			});
		}
		
		if(statusArray[5]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.roma) return true; else return false;
			});
		}
		
		if(statusArray[6]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.savagebeast) return true; else return false;
			});
		}
		
		if(statusArray[7]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.riding) return true; else return false;
			});
		}
		
		if(statusArray[8]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.love) return true; else return false;
			});
		}
		
		if(statusArray[9]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.devilish) return true; else return false;
			});
		}
		
		if(statusArray[10]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.davinci) return true; else return false;
			});
		}
		
		if(statusArray[11]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.saberface) return true; else return false;
			});
		}
		
		if(statusArray[12]>0){
			filtered = jQuery.grep(filtered, function(item){
				if(item.arthur) return true; else return false;
			});
		}
		
		switch(statusArray[13]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.nptypeQ) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.nptypeA) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.nptypeB) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[14]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npeffectA) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npeffectO) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npeffectS) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[15]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXmale) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXfemale) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXdivine) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXdragon) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXpoison) return true; else return false;
				});
				break;
			case "6":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXriding) return true; else return false;
				});
				break;
			case "7":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXlove) return true; else return false;
				});
				break;
			case "8":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXevil) return true; else return false;
				});
				break;
			case "9":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXdemonic) return true; else return false;
				});
				break;
			case "10":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXskyearth) return true; else return false;
				});
				break;
			case "11":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXservant) return true; else return false;
				});
				break;
			case "12":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXface) return true; else return false;
				});
				break;
			case "13":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXarthur) return true; else return false;
				});
				break;
			case "14":
				filtered = jQuery.grep(filtered, function(item){
					if(item.npEXsaber) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		switch(statusArray[16]){
			case 0:
				filtered = filtered;
				break;
			case "1":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXmale) return true; else return false;
				});
				break;
			case "2":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdivine) return true; else return false;
				});
				break;
			case "3":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdragon) return true; else return false;
				});
				break;
			case "4":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXroma) return true; else return false;
				});
				break;
			case "5":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXsavagebeast) return true; else return false;
				});
				break;
			case "6":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXevil) return true; else return false;
				});
				break;
			case "7":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdemonic) return true; else return false;
				});
				break;
			case "8":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXskyearth) return true; else return false;
				});
				break;
			case "9":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXhuman) return true; else return false;
				});
				break;
			case "10":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXhumanoid) return true; else return false;
				});
				break;
			case "11":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXundead) return true; else return false;
				});
				break;
			case "12":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXdemon) return true; else return false;
				});
				break;
			case "13":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXlarge) return true; else return false;
				});
				break;
			case "14":
				filtered = jQuery.grep(filtered, function(item){
					if(item.sEXsaber) return true; else return false;
				});
				break;
			default:
				break;
		}
		
		for( i=0 ; i<filtered.length ; i++ ){
			if( filtered[i].kind==clnum && $.inArray(filtered[i].id, numCalcServantId)==-1 ){
				switch( filtered[i].value ){
					case 4:
						$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 3:
						$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 2:
						$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 1:
						$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					case 0:
						$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-focus"></figure></div>');
						break;
					default:
						break;
				}
			} else if( filtered[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
				switch( filtered[i].value ){
					case 4:
						$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 3:
						$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 2:
						$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 1:
						$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					case 0:
						$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + filtered[i].id + '" src="./i/icon_servants/' + filtered[i].id + '.jpg?20190827" class="servant-selected"></figure></div>');
						break;
					default:
						break;
				}
			}
		}
		
	} else {
		tempNumtotal = 0;
		if( clnum==99 ){
			for( clnum=0 ; clnum<13 ; clnum++ ){
				for( i=0 ; i<Servantdb.length ; i++ ){
					tempNum = 0;
					if( Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)==-1 ){
						if(rev==10){
							if( renum in Servantdb[i].AdAgain1 == true || renum in Servantdb[i].AdAgain2 == true || renum in Servantdb[i].AdAgain3 == true || renum in Servantdb[i].AdAgain4 == true ){
								
								if( renum in Servantdb[i].AdAgain1 == true ) tempNum += Servantdb[i].AdAgain1[renum];
								if( renum in Servantdb[i].AdAgain2 == true ) tempNum += Servantdb[i].AdAgain2[renum];
								if( renum in Servantdb[i].AdAgain3 == true ) tempNum += Servantdb[i].AdAgain3[renum];
								if( renum in Servantdb[i].AdAgain4 == true ) tempNum += Servantdb[i].AdAgain4[renum];
								
								switch( Servantdb[i].value ){
									case 4:
										$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 3:
										$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 2:
										$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 1:
										$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 0:
										$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									default:
										break;
									}
								tempNumtotal += tempNum;
							}
						} else {
							if( renum in Servantdb[i].skill1 == true || renum in Servantdb[i].skill2 == true || renum in Servantdb[i].skill3 == true || renum in Servantdb[i].skill4 == true || renum in Servantdb[i].skill5 == true || renum in Servantdb[i].skill6 == true || renum in Servantdb[i].skill7 == true || renum in Servantdb[i].skill8 == true || renum in Servantdb[i].skill9 == true ){
								
								if( renum in Servantdb[i].skill1 == true ) tempNum += Servantdb[i].skill1[renum];
								if( renum in Servantdb[i].skill2 == true ) tempNum += Servantdb[i].skill2[renum];
								if( renum in Servantdb[i].skill3 == true ) tempNum += Servantdb[i].skill3[renum];
								if( renum in Servantdb[i].skill4 == true ) tempNum += Servantdb[i].skill4[renum];
								if( renum in Servantdb[i].skill5 == true ) tempNum += Servantdb[i].skill5[renum];
								if( renum in Servantdb[i].skill6 == true ) tempNum += Servantdb[i].skill6[renum];
								if( renum in Servantdb[i].skill7 == true ) tempNum += Servantdb[i].skill7[renum];
								if( renum in Servantdb[i].skill8 == true ) tempNum += Servantdb[i].skill8[renum];
								if( renum in Servantdb[i].skill9 == true ) tempNum += Servantdb[i].skill9[renum];
								tempNum = tempNum * 3;
								
								switch( Servantdb[i].value ){
									case 4:
										$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 3:
										$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 2:
										$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 1:
										$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 0:
										$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									default:
										break;
									}
								tempNumtotal += tempNum;
							}
						}
					} else if( Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
						if(rev==10){
							if( renum in Servantdb[i].AdAgain1 == true && $.inArray(Servantdb[i].id, numCalcServantId)>-1  || renum in Servantdb[i].AdAgain2 == true || renum in Servantdb[i].AdAgain3 == true || renum in Servantdb[i].AdAgain4 == true ){
								if( renum in Servantdb[i].AdAgain1 == true ) tempNum += Servantdb[i].AdAgain1[renum];
								if( renum in Servantdb[i].AdAgain2 == true ) tempNum += Servantdb[i].AdAgain2[renum];
								if( renum in Servantdb[i].AdAgain3 == true ) tempNum += Servantdb[i].AdAgain3[renum];
								if( renum in Servantdb[i].AdAgain4 == true ) tempNum += Servantdb[i].AdAgain4[renum];
								
								switch( Servantdb[i].value ){
									case 4:
										$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 3:
										$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 2:
										$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 1:
										$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 0:
										$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									default:
										break;
									}
							}
						} else {
							if( renum in Servantdb[i].skill1 == true || renum in Servantdb[i].skill2 == true || renum in Servantdb[i].skill3 == true || renum in Servantdb[i].skill4 == true || renum in Servantdb[i].skill5 == true || renum in Servantdb[i].skill6 == true || renum in Servantdb[i].skill7 == true || renum in Servantdb[i].skill8 == true || renum in Servantdb[i].skill9 == true ){
								
								if( renum in Servantdb[i].skill1 == true ) tempNum += Servantdb[i].skill1[renum];
								if( renum in Servantdb[i].skill2 == true ) tempNum += Servantdb[i].skill2[renum];
								if( renum in Servantdb[i].skill3 == true ) tempNum += Servantdb[i].skill3[renum];
								if( renum in Servantdb[i].skill4 == true ) tempNum += Servantdb[i].skill4[renum];
								if( renum in Servantdb[i].skill5 == true ) tempNum += Servantdb[i].skill5[renum];
								if( renum in Servantdb[i].skill6 == true ) tempNum += Servantdb[i].skill6[renum];
								if( renum in Servantdb[i].skill7 == true ) tempNum += Servantdb[i].skill7[renum];
								if( renum in Servantdb[i].skill8 == true ) tempNum += Servantdb[i].skill8[renum];
								if( renum in Servantdb[i].skill9 == true ) tempNum += Servantdb[i].skill9[renum];
								tempNum = tempNum * 3;
								
								switch( Servantdb[i].value ){
									case 4:
										$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 3:
										$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 2:
										$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 1:
										$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									case 0:
										$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
										break;
									default:
										break;
									}
							}
						}
					}
				}
			}
			clnum=13;
		} else {
			for( i=0 ; i<Servantdb.length ; i++ ){
				tempNum = 0;
				if( Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)==-1 ){
					if(rev==10){
						if( renum in Servantdb[i].AdAgain1 == true || renum in Servantdb[i].AdAgain2 == true || renum in Servantdb[i].AdAgain3 == true || renum in Servantdb[i].AdAgain4 == true ){
						
						if( renum in Servantdb[i].AdAgain1 == true ) tempNum += Servantdb[i].AdAgain1[renum];
						if( renum in Servantdb[i].AdAgain2 == true ) tempNum += Servantdb[i].AdAgain2[renum];
						if( renum in Servantdb[i].AdAgain3 == true ) tempNum += Servantdb[i].AdAgain3[renum];
						if( renum in Servantdb[i].AdAgain4 == true ) tempNum += Servantdb[i].AdAgain4[renum];
						
						switch( Servantdb[i].value ){
							case 4:
								$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 3:
								$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 2:
								$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 1:
								$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 0:
								$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							default:
								break;
							}
						tempNumtotal += tempNum;
						}
					} else {
						if( renum in Servantdb[i].skill1 == true || renum in Servantdb[i].skill2 == true || renum in Servantdb[i].skill3 == true || renum in Servantdb[i].skill4 == true || renum in Servantdb[i].skill5 == true || renum in Servantdb[i].skill6 == true || renum in Servantdb[i].skill7 == true || renum in Servantdb[i].skill8 == true || renum in Servantdb[i].skill9 == true ){
							
							if( renum in Servantdb[i].skill1 == true ) tempNum += Servantdb[i].skill1[renum];
							if( renum in Servantdb[i].skill2 == true ) tempNum += Servantdb[i].skill2[renum];
							if( renum in Servantdb[i].skill3 == true ) tempNum += Servantdb[i].skill3[renum];
							if( renum in Servantdb[i].skill4 == true ) tempNum += Servantdb[i].skill4[renum];
							if( renum in Servantdb[i].skill5 == true ) tempNum += Servantdb[i].skill5[renum];
							if( renum in Servantdb[i].skill6 == true ) tempNum += Servantdb[i].skill6[renum];
							if( renum in Servantdb[i].skill7 == true ) tempNum += Servantdb[i].skill7[renum];
							if( renum in Servantdb[i].skill8 == true ) tempNum += Servantdb[i].skill8[renum];
							if( renum in Servantdb[i].skill9 == true ) tempNum += Servantdb[i].skill9[renum];
							tempNum = tempNum * 3;
							
							switch( Servantdb[i].value ){
								case 4:
									$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 3:
									$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 2:
									$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 1:
									$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 0:
									$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-focus"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								default:
									break;
							}
							tempNumtotal += tempNum;
						}
					}
				} else if( Servantdb[i].kind==clnum && $.inArray(Servantdb[i].id, numCalcServantId)>-1 ){
					if(rev==10){
						if( renum in Servantdb[i].AdAgain1 == true || renum in Servantdb[i].AdAgain2 == true || renum in Servantdb[i].AdAgain3 == true || renum in Servantdb[i].AdAgain4 == true ){
						
						if( renum in Servantdb[i].AdAgain1 == true ) tempNum += Servantdb[i].AdAgain1[renum];
						if( renum in Servantdb[i].AdAgain2 == true ) tempNum += Servantdb[i].AdAgain2[renum];
						if( renum in Servantdb[i].AdAgain3 == true ) tempNum += Servantdb[i].AdAgain3[renum];
						if( renum in Servantdb[i].AdAgain4 == true ) tempNum += Servantdb[i].AdAgain4[renum];
						
						switch( Servantdb[i].value ){
							case 4:
								$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 3:
								$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 2:
								$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 1:
								$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							case 0:
								$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
								break;
							default:
								break;
							}
						}
					} else {
						if( renum in Servantdb[i].skill1 == true || renum in Servantdb[i].skill2 == true || renum in Servantdb[i].skill3 == true || renum in Servantdb[i].skill4 == true || renum in Servantdb[i].skill5 == true || renum in Servantdb[i].skill6 == true || renum in Servantdb[i].skill7 == true || renum in Servantdb[i].skill8 == true || renum in Servantdb[i].skill9 == true ){
							
							if( renum in Servantdb[i].skill1 == true ) tempNum += Servantdb[i].skill1[renum];
							if( renum in Servantdb[i].skill2 == true ) tempNum += Servantdb[i].skill2[renum];
							if( renum in Servantdb[i].skill3 == true ) tempNum += Servantdb[i].skill3[renum];
							if( renum in Servantdb[i].skill4 == true ) tempNum += Servantdb[i].skill4[renum];
							if( renum in Servantdb[i].skill5 == true ) tempNum += Servantdb[i].skill5[renum];
							if( renum in Servantdb[i].skill6 == true ) tempNum += Servantdb[i].skill6[renum];
							if( renum in Servantdb[i].skill7 == true ) tempNum += Servantdb[i].skill7[renum];
							if( renum in Servantdb[i].skill8 == true ) tempNum += Servantdb[i].skill8[renum];
							if( renum in Servantdb[i].skill9 == true ) tempNum += Servantdb[i].skill9[renum];
							tempNum = tempNum * 3;
							
							switch( Servantdb[i].value ){
								case 4:
									$(".icon-place-r5").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 3:
									$(".icon-place-r4").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 2:
									$(".icon-place-r3").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 1:
									$(".icon-place-r2").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								case 0:
									$(".icon-place-r1").append('<div class="box_focus"><figure class="fig-relative"><input type="image" value="' + Servantdb[i].id + '" src="./i/icon_servants/' + Servantdb[i].id + '.jpg?20190827" class="servant-selected"><figcaption class="num-focus"><span id="focus_'+ Servantdb[i].id +'">'+ tempNum +'</span></figcaption></figure></div>');
									break;
								default:
									break;
							}
						}
					}
				}
			}
		}
		document.getElementById("focus_total").innerText = tempNumtotal;
	}
}

function locking(idNum,num){
	if( num == 4 ){
		if($("#sairin_to_"+idNum).val() == $("#sairin_from_"+idNum).val()){
			lockSetting[idNum-1][0] = 1;
			if( $("#sairin_from_"+idNum).val() == 4 ) $('[name=stage2_0_'+idNum+']').html('<img src="i/Finish.png">');
			else $('[name=stage2_0_'+idNum+']').html('<span>'+$("#sairin_from_"+idNum).val()+'</span><img src="i/Lock.png">');
			$('[name=stage2_0_'+idNum+']').show();
		} else {
			$('[name=stage2_0_'+idNum+']').hide();
		}
		if($("#skill1_to_"+idNum).val() == $("#skill1_from_"+idNum).val()){
			lockSetting[idNum-1][1] = 1;
			if( $("#skill1_from_"+idNum).val() == 10 ) $('[name=stage2_1_'+idNum+']').html('<img src="i/Finish.png">');
			else $('[name=stage2_1_'+idNum+']').html('<span>'+$("#skill1_from_"+idNum).val()+'</span><img src="i/Lock.png">');
			$('[name=stage2_1_'+idNum+']').show();
		} else {
			$('[name=stage2_1_'+idNum+']').hide();
		}
		if($("#skill2_to_"+idNum).val() == $("#skill2_from_"+idNum).val()){
			lockSetting[idNum-1][2] = 1;
			if( $("#skill2_from_"+idNum).val() == 10 ) $('[name=stage2_2_'+idNum+']').html('<img src="i/Finish.png">');
			else $('[name=stage2_2_'+idNum+']').html('<span>'+$("#skill2_from_"+idNum).val()+'</span><img src="i/Lock.png">');
			$('[name=stage2_2_'+idNum+']').show();
		} else {
			$('[name=stage2_2_'+idNum+']').hide();
		}
		if($("#skill3_to_"+idNum).val() == $("#skill3_from_"+idNum).val()){
			lockSetting[idNum-1][3] = 1;
			if( $("#skill3_from_"+idNum).val() == 10 ) $('[name=stage2_3_'+idNum+']').html('<img src="i/Finish.png">');
			else $('[name=stage2_3_'+idNum+']').html('<span>'+$("#skill3_from_"+idNum).val()+'</span><img src="i/Lock.png">');
			$('[name=stage2_3_'+idNum+']').show();
		} else {
			$('[name=stage2_3_'+idNum+']').hide();
		}
		materialCalc(idNum);
	} else {
		if(lockSetting[idNum-1][num] == 0){
			lockSetting[idNum-1][num] = 1;
			
			switch(num){
				case 0:
					$("#sairin_to_"+idNum).val($("#sairin_from_"+idNum).val());
					if( $("#sairin_from_"+idNum).val() == 4 ) $('[name=stage2_0_'+idNum+']').html('<img src="i/Finish.png">');
					else $('[name=stage2_0_'+idNum+']').html('<span>'+$("#sairin_from_"+idNum).val()+'</span><img src="i/Lock.png">');
					break;
				case 1:
					$("#skill1_to_"+idNum).val($("#skill1_from_"+idNum).val());
					if( $("#skill1_from_"+idNum).val() == 10 ) $('[name=stage2_1_'+idNum+']').html('<img src="i/Finish.png">');
					else $('[name=stage2_1_'+idNum+']').html('<span>'+$("#skill1_from_"+idNum).val()+'</span><img src="i/Lock.png">');
					break;
				case 2:
					$("#skill2_to_"+idNum).val($("#skill2_from_"+idNum).val());
					if( $("#skill2_from_"+idNum).val() == 10 ) $('[name=stage2_2_'+idNum+']').html('<img src="i/Finish.png">');
					else $('[name=stage2_2_'+idNum+']').html('<span>'+$("#skill2_from_"+idNum).val()+'</span><img src="i/Lock.png">');
					break;
				case 3:
					$("#skill3_to_"+idNum).val($("#skill3_from_"+idNum).val());
					if( $("#skill3_from_"+idNum).val() == 10 ) $('[name=stage2_3_'+idNum+']').html('<img src="i/Finish.png">');
					else $('[name=stage2_3_'+idNum+']').html('<span>'+$("#skill3_from_"+idNum).val()+'</span><img src="i/Lock.png">');
					break;
				default:
					break;
			}
			$('[name=stage2_'+num+'_'+idNum+']').fadeIn(100);
			materialCalc(idNum);
		} else if(lockSetting[idNum-1][num] == 1) {
			lockSetting[idNum-1][num] = 0;
			
			switch(num){
				case 0:
					$("#sairin_to_"+idNum).val(4);
					break;
				case 1:
					$("#skill1_to_"+idNum).val(10);
					break;
				case 2:
					$("#skill2_to_"+idNum).val(10);
					break;
				case 3:
					$("#skill3_to_"+idNum).val(10);
					break;
				default:
					break;
			}
			$('[name=stage2_'+num+'_'+idNum+']').fadeOut(100);
			materialCalc(idNum);
		}
	}
}

function aiming(num,idNum){
	
	switch(num){
		case 0:
			$("#sairin_from_"+idNum).val(4);
			if( $("#sairin_to_"+idNum).val() < 4 ) $("#sairin_to_"+idNum).val(4);
			break;
		case 1:
			if( $("#skill1_from_"+idNum).val() < 4 ){
				$("#skill1_from_"+idNum).val(4);
				if( $("#skill1_to_"+idNum).val() <= 4 ) $("#skill1_to_"+idNum).val(10);
			}else if( $("#skill1_from_"+idNum).val() < 6 ){
				$("#skill1_from_"+idNum).val(6);
				if( $("#skill1_to_"+idNum).val() <= 6 ) $("#skill1_to_"+idNum).val(10);
			}else if( $("#skill1_from_"+idNum).val() < 9 ){
				$("#skill1_from_"+idNum).val(9);
				if( $("#skill1_to_"+idNum).val() <= 9 ) $("#skill1_to_"+idNum).val(10);
			} else {
				$("#skill1_from_"+idNum).val(10);
				if( $("#skill1_to_"+idNum).val() < 10 ) $("#skill1_to_"+idNum).val(10);
			}
			break;
		case 2:
			if( $("#skill2_from_"+idNum).val() < 4 ){
				$("#skill2_from_"+idNum).val(4);
				if( $("#skill2_to_"+idNum).val() <= 4 ) $("#skill2_to_"+idNum).val(10);
			}else if( $("#skill2_from_"+idNum).val() < 6 ){
				$("#skill2_from_"+idNum).val(6);
				if( $("#skill2_to_"+idNum).val() <= 6 ) $("#skill2_to_"+idNum).val(10);
			}else if( $("#skill2_from_"+idNum).val() < 9 ){
				$("#skill2_from_"+idNum).val(9);
				if( $("#skill2_to_"+idNum).val() <= 9 ) $("#skill2_to_"+idNum).val(10);
			} else {
				$("#skill2_from_"+idNum).val(10);
				if( $("#skill2_to_"+idNum).val() < 10 ) $("#skill2_to_"+idNum).val(10);
			}
			break;
		case 3:
			if( $("#skill3_from_"+idNum).val() < 4 ){
				$("#skill3_from_"+idNum).val(4);
				if( $("#skill3_to_"+idNum).val() <= 4 ) $("#skill3_to_"+idNum).val(10);
			}else if( $("#skill3_from_"+idNum).val() < 6 ){
				$("#skill3_from_"+idNum).val(6);
				if( $("#skill3_to_"+idNum).val() <= 6 ) $("#skill3_to_"+idNum).val(10);
			}else if( $("#skill3_from_"+idNum).val() < 9 ){
				$("#skill3_from_"+idNum).val(9);
				if( $("#skill3_to_"+idNum).val() <= 9 ) $("#skill3_to_"+idNum).val(10);
			} else {
				$("#skill3_from_"+idNum).val(10);
				if( $("#skill3_to_"+idNum).val() < 10 ) $("#skill3_to_"+idNum).val(10);
			}
			break;
		default:
			break;
	}
	materialCalc(idNum);
}

function separate(num){
	/* 文字列にする */
	num = String(num);
	
	var len = num.length;
	
	/* 再帰的に呼び出すよ */
	if(len > 3){
		/* 前半を引数に再帰呼び出し + 後半3桁 */
		return separate(num.substring(0,len-3))+','+num.substring(len-3);
	}
	else{
		return num;
    }
}
function saveLocalStorageServant(){
	var setArr = new Array();
	
	// ジョークはコード化しない
	myServantdb[82] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
	
	if( localStorage.getItem('servant') == null ){
		localStorage.removeItem('servant');
	}
	
	for( var i=0 ; i<Servantdb.length ; i++ ){
		/* 所持判定があるサーヴァントのみコード化 */
		if(myServantdb[i][9]==1){
			/*[i][10]が0以外の値のときは0に戻してからセーブする*/
			if(myServantdb[i][10]!=0) myServantdb[i][10]=0;
			setArr.push(myServantdb[i]);
		}
	}
	$('#handover_code').val(JSON.stringify(setArr));
	localStorage.setItem('servant', JSON.stringify(setArr));
}
function loadLocalStorageServant(){
	if( localStorage.getItem('servant') == null ){
		localStorage.removeItem('servant');
	}
	
	if('servant' in localStorage){
		var getArr = localStorage.getItem('servant');
		getArr = JSON.parse(getArr);
		
		for( var i=0 ; i<getArr.length ; i++ ){
			//myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
			/*[i][10]が0以外の値のときは0に戻してから*/
			if(getArr[i][10]!=0) getArr[i][10]=0;
			myServantdb[getArr[i][0]-1] = getArr[i];
		}
	} else {
		saveLocalStorageServant();
	}
}
function saveLocalStorageInventory(){
	if( localStorage.getItem('inventory') == null ){
		localStorage.removeItem('inventory');
	}
	
	$('#handover_code').val(JSON.stringify(inventoryNum));
	
	var setjson = inventoryNum;
	localStorage.setItem('inventory', JSON.stringify(setjson));
}
function loadLocalStorageInventory(){
	if( localStorage.getItem('inventory') == null ){
		localStorage.removeItem('inventory');
	}
	
	if('inventory' in localStorage){
		var getjson = localStorage.getItem('inventory');
		getjson = JSON.parse(getjson);
		
		/*
		for(var key in getjson){
			inventoryNum[key] = getjson[key];
		}*/
		inventoryNum = getjson;
		
		/* inventoryNumのチェック */
		var count = 0;
		
		/* ピース系 */
		for(var i=0 ; i<2 ; i++){
			for(j=0 ; j<7 ; j++){
				count = 100 + i*10 + j;
				if( count in inventoryNum == false ) inventoryNum[count]=0;
			}
		}
		/* 輝石系 */
		for(i=0 ; i<3 ; i++){
			for(j=0 ; j<7 ; j++){
				count = 200 + i*10 + j;
				if( count in inventoryNum == false ) inventoryNum[count]=0;
			}
		}
		/* 素材系 */
		/* rare1 bronze */
		for(i=0 ; i<10 ; i++){
			count = 300 + i;
				if( count in inventoryNum == false ) inventoryNum[count]=0;
		}
		/* rare2 silver */
		for(i=0 ; i<21 ; i++){
			count = 400 + i;
				if( count in inventoryNum == false ) inventoryNum[count]=0;
		}
		/* rare3 gold */
		for(i=0 ; i<18 ; i++){
			count = 500 + i;
				if( count in inventoryNum == false ) inventoryNum[count]=0;
		}
		/* イベントアイテム系 */
		for(i=0 ; i<33 ; i++){
			count = 600 + i;
			delete inventoryNum[count];
		}
		
		// Inventory画面に反映
		for( var k in inventoryNum ){
			if(k==900){
				document.getElementById("inv_"+k).rows[0].cells[1].innerText = separate(inventoryNum[k]);
			} else if(k>=600 && k<=620){
				
			} else {
				document.getElementById("inv_"+k).innerText = separate(inventoryNum[k]);
			}
			if( inventoryNum[k]>0 ){
				useInv = 1;
				$("[name='result-btn']:checked").prop('checked', false);
				$("[name='result-btn'][value='1']").prop('checked', true);
				$("[name='result-chaldea']:checked").prop('checked', false);
				$("[name='result-chaldea'][value='1']").prop('checked', true);
			}
		}
		saveLocalStorageInventory();
	} else {
		saveLocalStorageInventory();
	}
}

function saveServant(){
		var temp = "";
		var tempSave = "";
		
		/* ジョークはコード化しない */
		myServantdb[82][9] = 0;
		
		tempSave = "#";
		
		for( var i=0 ; i<Servantdb.length ; i++ ){
			/* 所持判定があるサーヴァントのみコード化 */
			if(myServantdb[i][9]==1){
				/* サーヴァントIDを36進数で格納 */
				/* サーヴァント数が1296まで2桁内 */
				temp = Number(myServantdb[i][0]).toString(36);
				/* 2桁にならない時は先頭に0を加えて2桁にする */
				if( temp.length < 2 ) temp = "0" + temp;
				tempSave = tempSave + temp;
				
				/* 設定状況を8桁に並べてから36進数に */
				/* 必ず5桁におさまる */
				temp = String(Number(myServantdb[i][1]) + 1) + String(Number(myServantdb[i][2]) + 1) + String(Number(myServantdb[i][3]) - 1) + String(Number(myServantdb[i][4]) - 1) + String(Number(myServantdb[i][5]) - 1) + String(Number(myServantdb[i][6]) - 1) + String(Number(myServantdb[i][7]) - 1) + String(Number(myServantdb[i][8]) - 1);
				temp = Number(temp).toString(36);
				tempSave = tempSave + temp;
			}
		}
		$('#handover_code').val(tempSave);
		Cookies.set('fgosm_smmn', tempSave, { expires: 730 });
}
function loadServant(temp_smmn){
	var tNum = "";
	var sNum;
	
	/* 読み込んだコードの検査 */
	/* コード中にスペースなどの文字が入ってる場合、一括で削除 */
	/*
	temp_smmn = temp_smmn.replace(/[^0-9a-z#*]+/g,'');
	*/
	
	/* アイテム用コードをロードしたとき */
	if( temp_smmn.substr(0,1) == '[' ){
		/* ローカルストレージデータをロードしたとき */
		var getArr = temp_smmn;
		getArr = JSON.parse(getArr);
		
		for( var i=0 ; i<getArr.length ; i++ ){
			//代入する前に配列要素のチェック
			if( getArr[i].length == 11 && getArr[i][0]<=Servantdb.length ){
				//myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
				//[0]鯖ID Servantdb
				//[1]再臨 現在値
				//[2]再臨 予定値
				//[3]スキル１ 現在値
				//[4]スキル１ 予定
				//[5]スキル２ 現在
				//[6]スキル２ 予定
				//[7]スキル３ 現在
				//[8]スキル３ 予定
				//[9]MyChaldea保有判定
				//[10]MyChaldea内素材計算判定（予定）
				if( getArr[i][1]<0 || 4<getArr[i][1] ) getArr[i][1]=0;
				if( getArr[i][2]<0 || 4<getArr[i][2] ) getArr[i][2]=0;
				if( getArr[i][3]<1 || 10<getArr[i][3] ) getArr[i][3]=1;
				if( getArr[i][4]<1 || 10<getArr[i][4] ) getArr[i][4]=1;
				if( getArr[i][5]<1 || 10<getArr[i][5] ) getArr[i][5]=1;
				if( getArr[i][6]<1 || 10<getArr[i][6] ) getArr[i][6]=1;
				if( getArr[i][7]<1 || 10<getArr[i][7] ) getArr[i][7]=1;
				if( getArr[i][8]<1 || 10<getArr[i][8] ) getArr[i][8]=1;
				if( getArr[i][9]!=1 ) getArr[i][9]=1;
				if( getArr[i][10]!=0 ) getArr[i][10]=0;
				myServantdb[getArr[i][0]-1] = getArr[i];
			}
		}
		saveLocalStorageServant();
		$('#handover_code').val("サーヴァントコード読込み完了");
	} else if( temp_smmn.substr(0,1) == '#' ){
		/* 先頭の#を削除 */
		temp_smmn = temp_smmn.slice(1);
		
		if( temp_smmn.length%7 == 0 ){
			/* myServantdbを初期化する */
			for( var i=0 ; i<Servantdb.length ; i++ ){
				myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
			}
			
			for( i=0 ; i < temp_smmn.length/7 ; i++ ){
				tNum = temp_smmn.substr( i*7, 2);
				sNum = parseInt( tNum, 36);
				myServantdb[sNum-1][0] = sNum;
				
				tNum = temp_smmn.substr( 2 + i * 7 , 5);
				tNum = String(parseInt( tNum, 36 ));
				
				myServantdb[sNum-1][1] = parseInt(tNum.substr(0,1)) - 1;
				myServantdb[sNum-1][2] = parseInt(tNum.substr(1,1)) - 1;
				myServantdb[sNum-1][3] = parseInt(tNum.substr(2,1)) + 1;
				myServantdb[sNum-1][4] = parseInt(tNum.substr(3,1)) + 1;
				myServantdb[sNum-1][5] = parseInt(tNum.substr(4,1)) + 1;
				myServantdb[sNum-1][6] = parseInt(tNum.substr(5,1)) + 1;
				myServantdb[sNum-1][7] = parseInt(tNum.substr(6,1)) + 1;
				myServantdb[sNum-1][8] = parseInt(tNum.substr(7,1)) + 1;
				myServantdb[sNum-1][9] = 1;
			}
		}
		saveLocalStorageServant();
		$('#handover_code').val("サーヴァントコード読込み完了");
	} else if( temp_smmn.substr(0,1) == '*' ){
		/* エラーメッセージを表示 */
		$('#handover_code').val("アイテムコードを検知しました。サーヴァントコードを入力してください。");
	} else {
		/* myServantdbを初期化する */
		for( var i=0 ; i<Servantdb.length ; i++ ){
			myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
		}
		
		for( var i=0 ; i<Servantdb.length ; i++ ){
			if( temp_smmn.substr(i*12,3) != '' ){
				myServantdb[i][0] = parseInt(temp_smmn.substr(i*12,3));
				myServantdb[i][1] = parseInt(temp_smmn.substr(i*12+3,1));
				myServantdb[i][2] = parseInt(temp_smmn.substr(i*12+4,1));
				myServantdb[i][3] = parseInt(temp_smmn.substr(i*12+5,1)) + 1;
				myServantdb[i][4] = parseInt(temp_smmn.substr(i*12+6,1)) + 1;
				myServantdb[i][5] = parseInt(temp_smmn.substr(i*12+7,1)) + 1;
				myServantdb[i][6] = parseInt(temp_smmn.substr(i*12+8,1)) + 1;
				myServantdb[i][7] = parseInt(temp_smmn.substr(i*12+9,1)) + 1;
				myServantdb[i][8] = parseInt(temp_smmn.substr(i*12+10,1)) + 1;
				myServantdb[i][9] = parseInt(temp_smmn.substr(i*12+11,1));
				myServantdb[i][10] = 0;
			} else {
				myServantdb[i] = [0, 0, 4, 1, 10, 1, 10, 1, 10, 0, 0];
			}
		}
		saveLocalStorageServant();
	}
}
/* クッキー[セーブ] */
/*$("#saveCookie").click(function(){*/
/*
function saveCookie(){
	// 保存用一時データの作成
	var temp_com = "*c";
	var temp_brnz = "*b";
	var temp_slv = "*s";
	var temp_gld = "*g";
	var tempStr = "";
	
	// 共通用temp_comの処理
	// QPを36進数に変換
	tempStr = inventoryNum[900].toString(36);
	// 必ず6桁にする
	if( tempStr.length < 6 ){
		switch( String(tempStr).length )
		{
			case 5:
				tempStr = "0" + tempStr;
				break;
			case 4:
				tempStr = "00" + tempStr;
				break;
			case 3:
				tempStr = "000" + tempStr;
				break;
			case 2:
				tempStr = "0000" + tempStr;
				break;
			case 1:
				tempStr = "00000" + tempStr;
				break;
			case 0:
				tempStr = "000000";
				break;
			default:
				break;
		}
	}
	temp_com = temp_com + tempStr;
	
	// 伝承結晶
	// 必ず4桁に
	tempStr = inventoryNum[800].toString(36);
	if( String(tempStr).length < 4 )
	{
		switch( String(tempStr).length )
		{
			case 3:
				tempStr = "0" + tempStr;
				break;
			case 2:
				tempStr = "00" + tempStr;
				break;
			case 1:
				tempStr = "000" + tempStr;
				break;
			case 0:
				tempStr = "0000";
				break;
			default:
				break;
		}
	}
	temp_com = temp_com + tempStr;
	
	// ピース
	for( i=100 ; i<107 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_com = temp_com + tempStr;
	}
	
	// モニュメント
	for( i=110 ; i<117 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_com = temp_com + tempStr;
	}
	
	// 輝石
	for( i=200 ; i<207 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_com = temp_com + tempStr;
	}
	
	// 魔石
	for( i=210 ; i<217 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_com = temp_com + tempStr;
	}
	
	// 秘石
	for( i=220 ; i<227 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_com = temp_com + tempStr;
	}
	
	// 銅素材
	for( i=300 ; i<309 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_brnz = temp_brnz + tempStr;
	}
	
	// 銀素材
	for( i=400 ; i<415 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_slv = temp_slv + tempStr;
	}
	
	// 金素材
	for( i=500 ; i<512 ; i++ ){
		tempStr = inventoryNum[i].toString(36);
		if( String(tempStr).length < 4 )
		{
			switch( String(tempStr).length )
			{
				case 3:
					tempStr = "0" + tempStr;
					break;
				case 2:
					tempStr = "00" + tempStr;
					break;
				case 1:
					tempStr = "000" + tempStr;
					break;
				case 0:
					tempStr = "0000";
					break;
				default:
					break;
			}
		}
		temp_gld = temp_gld + tempStr;
	}
	$('#handover_code').val("" + temp_com + "" + temp_brnz + "" + temp_slv + "" + temp_gld);
	Cookies.set('fgosm_com', temp_com, { expires: 730 });
	Cookies.set('fgosm_brnz', temp_brnz, { expires: 730 });
	Cookies.set('fgosm_slv', temp_slv, { expires: 730 });
	Cookies.set('fgosm_gld', temp_gld, { expires: 730 });
	*/
	
	/* 動作検証用コード
	for( var k in inventoryNum ){
		inventoryNum[k] = 0;
		if(k==900){
			document.getElementById("inv_"+k).rows[0].cells[1].innerText = separate(inventoryNum[k]);
		} else {
			document.getElementById("inv_"+k).innerText = separate(inventoryNum[k]);
		}
	}
	var deb1 = document.getElementById("debug1");
	var deb2 = document.getElementById("debug2");
	var deb3 = document.getElementById("debug3");
	var deb4 = document.getElementById("debug4");
	deb1.innerText = "debug1 : "+temp_com;
	deb2.innerText = "debug1 : "+temp_brnz;
	deb3.innerText = "debug1 : "+temp_slv;
	deb4.innerText = "debug1 : "+temp_gld;
	動作検証用コード（ここまで）*/
	/*
}
*/


function loadInventory(temp_item){
	
	var codeL = 2 + 6 + 4 + 140 + 2 + 36 + 2 + 60 + 2 + 48;
	var temp_com;
	var temp_brnz;
	var temp_slv;
	var temp_gld;
	
	
	// コード中のスペースなどのゴミを一括で削除
	/*
	temp_item = temp_item.replace(/[^0-9a-z#*]+/g,'');
	*/
	if( temp_item.substr(0,2) == '{"' ){//ローカルストレージデータを読み込んだとき
		getjson = JSON.parse(temp_item);
		
		console.log(getjson);
		console.log(inventoryNum);
		/*
		for(var key in getjson){
			inventoryNum[key] = getjson[key];
		}*/
		inventoryNum = getjson;
		console.log(inventoryNum);
		
		// Inventory画面に反映
		for( var k in inventoryNum ){
			if(k==900){
				document.getElementById("inv_"+k).rows[0].cells[1].innerText = separate(inventoryNum[k]);
			} else if(k>=600 && k<=620){
				
			} else {
				document.getElementById("inv_"+k).innerText = separate(inventoryNum[k]);
			}
			if( inventoryNum[k]>0 ){
				useInv = 1;
				$("[name='result-btn']:checked").prop('checked', false);
				$("[name='result-btn'][value='1']").prop('checked', true);
				$("[name='result-chaldea']:checked").prop('checked', false);
				$("[name='result-chaldea'][value='1']").prop('checked', true);
			}
		}
		saveLocalStorageInventory();
		$('#handover_code').val("アイテムコード読込み完了");
	} else if ( temp_item.substr(0,1) == '#' ){// サーヴァント用コードをロードしたとき
		// エラーメッセージを表示
		$('#handover_code').val("サーヴァントコードを検知しました。アイテムコードを入力してください。");
	} else if ( temp_item.substr(0,2) == '*c' ){// 圧縮してあるデータの場合
		// 読み込んだコードの検査
		
		// 不要文字のチェック後、もう一度検査
		// 長さが変数codeL 以外の時は調整する
		if( temp_item.length != codeL ){
			// 各識別子までの文字長検査
			// *bは 152文字目
			// 共通素材（QP・伝承結晶・ピース・輝石類）に変更ない限り
			// *c+QP+素材 2+6+144
			temp_brnz = temp_item.indexOf("*b",0);
			// *sは 190文字目
			// 銅素材は現在9種 *b+銅素材 2+36
			temp_slv = temp_item.indexOf("*s",0);
			// 銀素材は現在15種 *s+銀素材 2+60
			// *gは 252文字目
			temp_gld = temp_item.indexOf("*g",0);
			// 金素材は現在12種 48
			
			// 各種コードが短い場合(アイテムの新規実装対策)調整する
			if( temp_brnz < 152 ){
				for( var i=temp_brnz ; temp_brnz < 152 ; i++ ){
					temp_item = temp_item.slice(0,i) + "0" + temp_item.slice(i);
				}
			}
			if( temp_slv < 190 ){
				for( var i=temp_slv ; temp_slv < 190 ; i++ ){
					temp_item = temp_item.slice(0,i) + "0" + temp_item.slice(i);
				}
			}
			if( temp_gld < 252 ){
				for( var i=temp_gld ; temp_gld < 252 ; i++ ){
					temp_item = temp_item.slice(0,i) + "0" + temp_item.slice(i);
				}
			}
			if( temp_item.length < codeL ){
				temp_item = "0";
				for( i=0 ; temp_item.length < codeL ; i++ ){
					temp_item += "0";
				}
			}
			// コードが長すぎる場合は不正なデータなのでエラーを返す
		}
		
		// 各種別ごとに、識別子までのデータ取り込み
		// 識別子を読み込まないよう注意
		temp_com  = temp_item.substr( 2, 150 );
		temp_brnz = temp_item.substr( 154 ,4 * 9 );
		temp_slv  = temp_item.substr( 192 ,4 * 15 );
		temp_gld  = temp_item.substr( 254 ,4 * 12 );
		
		// QP
		inventoryNum[900] = parseInt(temp_com.substr(0,6),36);
		// 伝承結晶 
		inventoryNum[800] = parseInt(temp_com.substr(6,4),36);
		
		// ピース
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[100+i] = parseInt(temp_com.substr(10+i*4,4),36);
		}
		// モニュメント
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[110+i] = parseInt(temp_com.substr(38+i*4,4),36);
		}
		// 輝石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[200+i] = parseInt(temp_com.substr(66+i*4,4),36);
		}
		// 魔石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[210+i] = parseInt(temp_com.substr(94+i*4,4),36);
		}
		// 秘石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[220+i] = parseInt(temp_com.substr(122+i*4,4),36);
		}
		// 銅素材
		for( var i=0 ; i<10 ; i++ ){
			inventoryNum[300+i] = parseInt(temp_brnz.substr(i*4,4),36);
		}
		// 銀素材
		for( var i=0 ; i<21 ; i++ ){
			inventoryNum[400+i] = parseInt(temp_slv.substr(i*4,4),36);
		}
		// 金素材
		for( var i=0 ; i<18 ; i++ ){
			inventoryNum[500+i] = parseInt(temp_gld.substr(i*4,4),36);
		}
		saveLocalStorageInventory();
		$('#handover_code').val("アイテムコード読込み完了");
	} else {// 圧縮してない場合
		
		// データチェック
		if( temp_item.length < 349 ){
			for( var i=temp_item.length ; i<349 ; i++ ){
				temp_item += "0";
			}
		}
		// データをまず分割
		temp_com = temp_item.substr( 0, 189);
		temp_brnz = temp_item.substr( 189, 45);
		temp_slv = temp_item.substr( 234, 75);
		temp_gld = temp_item.substr( 309, 60);
		
		// 共通系アイテム
		// QP
		inventoryNum[900] = parseInt(temp_com.substr(0,9));
		// 伝承結晶 
		inventoryNum[800] = parseInt(temp_com.substr(9,5));
		
		// ピース
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[100+i] = parseInt( temp_com.substr(14+i*5,5) );
		}
		// モニュメント
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[110+i] = parseInt( temp_com.substr(49+i*5,5) );
		}
		// 輝石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[200+i] = parseInt( temp_com.substr(84+i*5,5) );
		}
		// 魔石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[210+i] = parseInt( temp_com.substr(119+i*5,5) );
		}
		// 秘石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[220+i] = parseInt( temp_com.substr(154+i*5,5) );
		}
		
		// 銅素材
		// [temp_brnz]の処理
		for( var i=0 ; i<10 ; i++ ){
			inventoryNum[300+i] = parseInt( temp_brnz.substr(i*5,5) );
		}
		
		// 銀素材
		// [temp_slv]の処理
		for( var i=0 ; i<21 ; i++ ){
			inventoryNum[400+i] = parseInt(temp_slv.substr(i*5,5));
		}
		
		// 金素材
		// [temp_gld]の処理
		for( var i=0 ; i<18 ; i++ ){
			inventoryNum[500+i] = parseInt(temp_gld.substr(i*5,5));
		}
		saveLocalStorageInventory();
		$('#handover_code').val("アイテムコード読込み完了");
	}
	// Inventory画面に反映
	for( var k in inventoryNum ){
		if(k==900){
			document.getElementById("inv_"+k).rows[0].cells[1].innerText = separate(inventoryNum[k]);
		} else if(k>=600 && k<=620){
			
		} else {
			document.getElementById("inv_"+k).innerText = separate(inventoryNum[k]);
		}
		if( inventoryNum[k]>0 ){
			useInv = 1;
			$("[name='result-btn']:checked").prop('checked', false);
			$("[name='result-btn'][value='1']").prop('checked', true);
			$("[name='result-chaldea']:checked").prop('checked', false);
			$("[name='result-chaldea'][value='1']").prop('checked', true);
		}
	}
}

function statusSetting(){
	$(".status-filter").slideToggle();
	$(".filterBox").slideToggle();
}
function attrSetting(){
	if( $(".filterABox").is(':hidden') ){
		$({deg:0}).animate({deg:180}, {
			duration:100,
			easing:'linear',
			progress:function() {
				$('#arrow-a').css({
					transform:'rotate(' + this.deg + 'deg)'
				});
			}
		});
	} else {
		$({deg:180}).animate({deg:0}, {
			duration:100,
			easing:'linear',
			progress:function() {
				$('#arrow-a').css({
					transform:'rotate(' + this.deg + 'deg)'
				});
			}
		});
	}
	$(".filterABox").slideToggle();
}
function NPSetting(){
	if( $(".filterNPBox").is(':hidden') ){
		$({deg:0}).animate({deg:180}, {
			duration:100,
			easing:'linear',
			progress:function() {
				$('#arrow-np').css({
					transform:'rotate(' + this.deg + 'deg)'
				});
			}
		});
	} else {
		$({deg:180}).animate({deg:0}, {
			duration:100,
			easing:'linear',
			progress:function() {
				$('#arrow-np').css({
					transform:'rotate(' + this.deg + 'deg)'
				});
			}
		});
	}
	$(".filterNPBox").slideToggle();
}
function SkillSetting(){
	if( $(".filterSBox").is(':hidden') ){
		$({deg:0}).animate({deg:180}, {
			duration:100,
			easing:'linear',
			progress:function() {
				$('#arrow-s').css({
					transform:'rotate(' + this.deg + 'deg)'
				});
			}
		});
	} else {
		$({deg:180}).animate({deg:0}, {
			duration:100,
			easing:'linear',
			progress:function() {
				$('#arrow-s').css({
					transform:'rotate(' + this.deg + 'deg)'
				});
			}
		});
	}
	$(".filterSBox").slideToggle();
}
var predicate = function( x, i, a){
	if( x == 0){
		return true;
	} else {
		return false;
	}
}
/*センタリングを実行する関数*/
function centeringModalSyncer(num) {
	
	/*画面(ウィンドウ)の幅、高さを取得*/
	var w = $( window ).width() ;
	var h = $( window ).height() ;
	
	/* コンテンツ(#modal-content)の幅、高さを取得*/
	/* jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。*/
	/* var cw = $( "#modal-content" ).outerWidth( {margin:true} ); */
	/* var ch = $( "#modal-content" ).outerHeight( {margin:true} ); */
	
	switch(num)
	{
		case 1:
			var cw = $( "#modal-content" ).outerWidth();
			var ch = $( "#modal-content" ).outerHeight();
			break;
		case 2:
			var cw = $( "#footer" ).outerWidth();
			var ch = $( "#footer" ).outerHeight();
			break;
		case 3:
			var cw = $( "#select-servant" ).outerWidth();
			var ch = $( "#select-servant" ).outerHeight();
			$(".select-slide").css( {"width": cw + "px"} );
			break;
		case 4:
			var cw = $( "#reverse-search" ).outerWidth();
			var ch = $( "#reverse-search" ).outerHeight();
			break;
		case 5:
			var cw = $( "#modal-inventory" ).outerWidth();
			var ch = $( "#modal-inventory" ).outerHeight();
			break;
		case 6:
			var cw = $( "#inventory-input" ).outerWidth();
			var ch = $( "#inventory-input" ).outerHeight();
			break;
		case 7:
			var cw = $( "#check-delete" ).outerWidth();
			var ch = $( "#check-delete" ).outerHeight();
			break;
		case 8:
			var cw = $( "#changeLng" ).outerWidth();
			var ch = $( "#changeLng" ).outerHeight();
			break;
		case 9:
			var cw = $( ".filterBox" ).outerWidth();
			var ch = $( ".filterBox" ).outerHeight();
			break;
		default:break;
	}
	
	/*センタリングを実行する*/
	switch(num){
		case 1:
			$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": "0px"} ) ;
			break;
		case 2:
			$( "#footer" ).css( {"left": ((w - cw)/2) + "px","top": "0px"} ) ;
			break;
		case 3:
			$( "#select-servant" ).css( {"left": ((w - cw)/2) + "px","top": "0px"} ) ;
			break;
		case 4:
			$( "#reverse-search" ).css( {"left": ((w - cw)/2) + "px","top": "0px"} ) ;
			break;
		case 5:
			$( "#modal-inventory" ).css( {"left": ((w - cw)/2) + "px","top": "0px"} ) ;
			break;
		case 6:
			$( "#inventory-input" ).css( {"left": ((w - cw)/2) + "px","top":"50px"} ) ;
			break;
		case 7:
			$( "#check-delete" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
			break;
		case 8:
			$( "#changeLng" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
			break;
		case 9:
			$( ".filterBox" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
			break;
		default:break;
	}
}

$(function(){
	/*[#modal-overlay]、または[#modal-close]をクリックしたら…*/
	$(document).on('click', "#modal-overlay,[name='close-btn']", function(){
		/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
		$( "#select-servant,#modal-inventory,#modal-content,#modal-overlay" ).fadeOut( 200 , function(){
			
			$('.reverseBox').hide();
			$(".status-filter").show();
			$(".filterBox").hide();
			$("[name='class-btn']:checked").prop('checked', false);
			$("[name='class-btn'][value='0']").prop('checked', true);
			$('div[class="box_focus_total"]:has(.selected-material-icon)').remove();
			$(".setting-btn").hide();
			
			
			clnum=200;
			renum=0;
			statusnum=0;
			chaldeanum = 0;
			/*[#modal-overlay]を削除する*/
			$('#modal-overlay').remove();
			}
		);
	} );
	
	$(document).on('click', "[name='reverse-func']", function(){
		switch( $("[name='reverse-func']:checked").val() ){
			case "0":
				$(".reverse-content").show();
				$(".reverse-login").hide();
				$(".reverse-event").hide();
				break;
			case "1":
				$(".reverse-login").show();
				$(".reverse-content").hide();
				$(".reverse-event").hide();
				break;
			case "2":
				$(".reverse-event").show();
				$(".reverse-content").hide();
				$(".reverse-login").hide();
				break;
			default:
				break;
		}
		if( renum==0 ){
			$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
		} else {
			$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.reverseBox').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
		}
		if( statusnum==1 ) $(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.status-filter').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
	});
	
	$("[name='class-btn'],[name='reverse-btn']").click(function(){
		clnum = $("[name='class-btn']:checked").val();
		ChangeServantIcon();
		if( renum==0 ){
			$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
		} else {
			$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.reverseBox').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
		}
		if( statusnum==1 ) $(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.status-filter').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
	});
	
	/* statusArray
		0  policy
		1  personal
		2  attribute
		3  divinity
		4  dragon
		5  roma
		6  savagebeast
		7  riding
		8 love
		9 devilish
		10 davinci
		11 saber face
		12 arthur
		13 nptype
		14 npeffect
		15 npEX
		16 exSKILL
	*/
	
	$("[name='policy-btn']").click(function(){
		if($(this).val() == statusArray[0]){
			$(this).prop('checked', false);
			statusArray[0] = 0;
			$(".filterIcon-policy").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[0] = $(this).val();
			$("#filter-nofilter,.filterIcon-policy").hide();
			$("#filter-policy"+statusArray[0]).show();
		}
		ChangeServantIcon();
	});
	
	$("[name='personal-btn']").click(function(){
		if($(this).val() == statusArray[1]){
			$(this).prop('checked', false);
			statusArray[1] = 0;
			$(".filterIcon-personal").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[1] = $(this).val();
			$("#filter-nofilter,.filterIcon-personal").hide();
			$("#filter-personal"+statusArray[1]).show();
		}
		ChangeServantIcon();
	});
	
	$("[name='attribute-btn']").click(function(){
		if($(this).val() == statusArray[2]){
			$(this).prop('checked', false);
			statusArray[2] = 0;
			$(".filterIcon-attribute").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[2] = $(this).val();
			$("#filter-nofilter,.filterIcon-attribute").hide();
			$("#filter-attribute"+statusArray[2]).show();
		}
		ChangeServantIcon();
	});
	
	$("#status_divinity").click(function(){
		if( $('#status_divinity').prop('checked') ){
			statusArray[3] = 1;
			$("#filter-nofilter").hide();
				$("#filter-divinity").show();
		} else {
			statusArray[3] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-divinity").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_dragon").click(function(){
		if( $('#status_dragon').prop('checked') ){
			statusArray[4] = 1;
			$("#filter-nofilter").hide();
			$("#filter-dragon").show();
		} else {
			statusArray[4] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-dragon").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_roma").click(function(){
		if( $('#status_roma').prop('checked') ){
			statusArray[5] = 1;
			$("#filter-nofilter").hide();
			$("#filter-roma").show();
		} else {
			statusArray[5] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-roma").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_savagebeast").click(function(){
		if( $('#status_savagebeast').prop('checked') ){
			statusArray[6] = 1;
			$("#filter-nofilter").hide();
			$("#filter-savagebeast").show();
			filternum++;
		} else {
			statusArray[6] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-savagebeast").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_riding").click(function(){
		if( $('#status_riding').prop('checked') ){
			statusArray[7] = 1;
			$("#filter-nofilter").hide();
			$("#filter-riding").show();
		} else {
			statusArray[7] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-riding").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_love").click(function(){
		if( $('#status_love').prop('checked') ){
			statusArray[8] = 1;
			$("#filter-nofilter").hide();
			$("#filter-love").show();
		} else {
			statusArray[8] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-love").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_devilish").click(function(){
		if( $('#status_devilish').prop('checked') ){
			statusArray[9] = 1;
			$("#filter-nofilter").hide();
			$("#filter-devilish").show();
		} else {
			statusArray[9] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-devilish").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_davinci").click(function(){
		if( $('#status_davinci').prop('checked') ){
			statusArray[10] = 1;
			$("#filter-nofilter").hide();
			$("#filter-davinci").show();
		} else {
			statusArray[10] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-davinci").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_face").click(function(){
		if( $('#status_face').prop('checked') ){
			statusArray[11] = 1;
			$("#filter-nofilter").hide();
			$("#filter-face").show();
		} else {
			statusArray[11] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-face").hide();
		}
		ChangeServantIcon();
	});
	
	$("#status_arthur").click(function(){
		if( $('#status_arthur').prop('checked') ){
			statusArray[12] = 1;
			$("#filter-nofilter").hide();
			$("#filter-arthur").show();
		} else {
			statusArray[12] = 0;
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
			$("#filter-arthur").hide();
		}
		ChangeServantIcon();
	});
	
	$("[name='nptype-btn']").click(function(){
		if($(this).val() == statusArray[13]){
			$(this).prop('checked', false);
			statusArray[13] = 0;
			$(".filterIcon-npType").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[13] = $(this).val();
			$("#filter-nofilter,.filterIcon-npType").hide();
			$("#filter-nptype"+statusArray[13]).show();
		}
		ChangeServantIcon();
	});
	
	$("[name='npeffect-btn']").click(function(){
		if($(this).val() == statusArray[14]){
			$(this).prop('checked', false);
			statusArray[14] = 0;
			$(".filterIcon-npEffect").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[14] = $(this).val();
			$("#filter-nofilter,.filterIcon-npEffect").hide();
			$("#filter-npeffect"+statusArray[14]).show();
		}
		ChangeServantIcon();
	});
	
	$("[name='npEX-btn']").click(function(){
		if($(this).val() == statusArray[15]){
			$(this).prop('checked', false);
			statusArray[15] = 0;
			$(".filterIcon-npEX").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[15] = $(this).val();
			$("#filter-nofilter,.filterIcon-npEX").hide();
			switch(statusArray[15]){
				case "1":
					$("#filter-npEXmale").show();
					break;
				case "2":
					$("#filter-npEXfemale").show();
					break;
				case "3":
					$("#filter-npEXdivine").show();
					break;
				case "4":
					$("#filter-npEXdragon").show();
					break;
				case "5":
					$("#filter-npEXpoison").show();
					break;
				case "6":
					$("#filter-npEXriding").show();
					break;
				case "7":
					$("#filter-npEXlove").show();
					break;
				case "8":
					$("#filter-npEXevil").show();
					break;
				case "9":
					$("#filter-npEXdemonic").show();
					break;
				case "10":
					$("#filter-npEXskyearth").show();
					break;
				case "11":
					$("#filter-pEXservant").show();
					break;
				case "12":
					$("#filter-npEXface").show();
					break;
				case "13":
					$("#filter-npEXarthur").show();
					break;
				case "14":
					$("#filter-npEXsaber").show();
					break;
				default:
					break;
			}
		}
		ChangeServantIcon();
	});
	
	$("[name='sEX-btn']").click(function(){
		if($(this).val() == statusArray[16]){
			$(this).prop('checked', false);
			statusArray[16] = 0;
			$(".filterIcon-sEX").hide();
			if( statusArray.every( predicate ) == 1 ){
				$("#filter-nofilter").show();
			}
		} else {
			statusArray[16] = $(this).val();
			$("#filter-nofilter,.filterIcon-sEX").hide();
			switch(statusArray[16]){
				case "1":
					$("#filter-sEXmale").show();
					break;
				case "2":
					$("#filter-sEXdivine").show();
					break;
				case "3":
					$("#filter-sEXdragon").show();
					break;
				case "4":
					$("#filter-sEXroma").show();
					break;
				case "5":
					$("#filter-sEXsavagebeast").show();
					break;
				case "6":
					$("#filter-sEXevil").show();
					break;
				case "7":
					$("#filter-sEXdemonic").show();
					break;
				case "8":
					$("#filter-sEXskyearth").show();
					break;
				case "9":
					$("#filter-sEXhuman").show();
					break;
				case "10":
					$("#filter-sEXhumanoid").show();
					break;
				case "11":
					$("#filter-sEXundead").show();
					break;
				case "12":
					$("#filter-sEXdemon").show();
					break;
				case "13":
					$("#filter-sEXlarge").show();
					break;
				case "14":
					$("#filter-sEXsaber").show();
					break;
				default:
					break;
			}
		}
		ChangeServantIcon();
	});
	
	$("#reset_filter").click(function(){
		for( i=0 ; i<18 ; i++ ){
			statusArray[i] = 0;
		}
		
		$(".policyBox>input,.personalBox>input,.attributeBox>input,.etcBox>input,.nptypeBox>input,.npeffectBox>input,.exNPBox>input,.exSkillBox>input").prop({'checked':false});
		$(".filterIcon-policy,.filterIcon-personal,.filterIcon-attribute,.filterIcon-etc,.filterIcon-npType,.filterIcon-npEffect,.filterIcon-npEX,.filterIcon-sEX").hide();
		$("#filter-nofilter").show();
		
		ChangeServantIcon();
	});
	
	$('.material-icon').click( function(){
		renum = $(this).val();
		$("[name='class-btn']:checked").prop('checked', false);
		$("[name='class-btn'][value='0']").prop('checked', true);
		clnum = $("[name='class-btn']:checked").val();
		$(".reverse-show").fadeOut("fast");
		ChangeServantIcon();
		//$(".select-slide").css( {"height": Math.floor( $(window).height() - ( $('.select-servant-title').outerHeight() + $('.reverseBox').outerHeight() + $('.select-class').outerHeight() + 69 ) ) + "px"} );
		//$(".select-slide").css( {"height":"568px"} );
		$('.select-show').delay(200).fadeIn('fast');
	});
	$('.selectedMaterial').click(function(){
		renum = 0;
		$('.select-show').fadeOut("fast");
		$(".reverse-show").delay(200).fadeIn('fast');
	});
	
	/*サーヴァントアイコンをクリック*/
	$(document).on('click', '.servant-icon,.servant-focus,.input_chaldea', function(){
		$(this).removeClass('servant-icon');
		$(this).removeClass('servant-focus');
		$(this).removeClass('input_chaldea');
		$(this).addClass('servant-selected');
			/*
			var numSelectId = $(this).val();
			*/
			numCalcServantId[numServantSelect-1] = parseInt($(this).val());
			var temp = parseInt($(this).val()) - 1;
			/*
			numServantSelect = showBox+1;
			'+numServantSelect+'
			select要素 change "calcSet_btn"
			*/
			if( language == 0 ){
				if(numServantSelect>showBox){
					$(".boxContainer").append('<div id="sBox_'+numServantSelect+'"class="box"><table border="0" id="calc_'+numServantSelect+'" class="totaltable"><tr id="stage0_'+numServantSelect+'"><form id="'+numServantSelect+'"><td class="box-servant-icon" name="'+numServantSelect+'"><img src="i/icon_servants/missing.jpg?20190827"></td><td colspan="4" class="servantName" name="'+numServantSelect+'"><span id="servantName_'+numServantSelect+'">NO DATA</span></td></tr><tr id="stage2_0_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="霊基再臨" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_0_'+numServantSelect+'"></div><select id="sairin_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></td><td><img src="i/11.png" class="arrow" name="0_'+numServantSelect+'"></td><td><select id="sairin_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option><option value="0">0</option></select></td></tr><tr id="stage2_1_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="SKILL 1" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_1_'+numServantSelect+'"></div><select id="skill1_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td><img src="i/11.png" class="arrow" name="1_'+numServantSelect+'"></td><td><select id="skill1_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="10">10</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></td></tr><tr id="stage2_2_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="SKILL 2" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_2_'+numServantSelect+'"></div><select id="skill2_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td><img src="i/11.png" class="arrow" name="2_'+numServantSelect+'"></td><td><select id="skill2_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="10">10</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></td></tr><tr id="stage2_3_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="SKILL 3" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_3_'+numServantSelect+'"></div><select id="skill3_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td><img src="i/11.png" class="arrow" name="3_'+numServantSelect+'"></td><td><select id="skill3_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="10">10</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></td></form></tr></table><div class="delete-btn" name="'+numServantSelect+'">Delete</div><div class="change-btn" name="'+numServantSelect+'">Change</div></div>');
					document.getElementById("servantName_"+numServantSelect).innerText = Servantdb[numCalcServantId[numServantSelect-1]-1].text;
					$("#modai_CalcIcon").append('<div class="boxCalcIconContainer" id="CalcIcon'+numServantSelect+'"><div class="box_calcicon"><figure class="fig-relative" id="sci0_'+ numServantSelect +'"><img src="i/icon_servants/' + numCalcServantId[numServantSelect-1] + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci0_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici0_' + numServantSelect + '">0</span></div></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci1_'+ numServantSelect +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon1 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci1_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici1_' + numServantSelect + '">0</span></div></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci2_'+ numServantSelect +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon2 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci2_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici2_' + numServantSelect + '">0</span></div></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci3_'+ numServantSelect +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon3 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci3_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici3_' + numServantSelect + '">0</span></div></figure></div></div>');
				} else {
					document.getElementById("servantName_"+numServantSelect).innerText = Servantdb[numCalcServantId[numServantSelect-1]-1].text;
					document.getElementById("sci0_"+numServantSelect).innerHTML = '<img src="i/icon_servants/' + numCalcServantId[numServantSelect-1] + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci0_' + numServantSelect + '"></span></figcaption>';
					document.getElementById("sci1_"+numServantSelect).innerHTML = '<img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon1 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci1_' + numServantSelect + '"></span></figcaption>';
					document.getElementById("sci2_"+numServantSelect).innerHTML = '<img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon2 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci2_' + numServantSelect + '"></span></figcaption>';
					document.getElementById("sci3_"+numServantSelect).innerHTML = '<img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon3 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci3_' + numServantSelect + '"></span></figcaption>';
				}
			} else {
				if(numServantSelect>showBox){
					$(".boxContainer").append('<div id="sBox_'+numServantSelect+'"class="box"><table border="0" id="calc_'+numServantSelect+'" class="totaltable"><tr id="stage0_'+numServantSelect+'"><form id="'+numServantSelect+'"><td class="box-servant-icon" name="'+numServantSelect+'"><img src="i/icon_servants/missing.jpg"></td><td colspan="4" class="servantName" name="'+numServantSelect+'"><span id="servantName_'+numServantSelect+'">NO DATA</span></td></tr><tr id="stage2_0_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="Ascension" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_0_'+numServantSelect+'"></div><select id="sairin_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></td><td><img src="i/11.png" class="arrow" name="0_'+numServantSelect+'"></td><td><select id="sairin_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option><option value="0">0</option></select></td></tr><tr id="stage2_1_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="SKILL 1" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_1_'+numServantSelect+'"></div><select id="skill1_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td><img src="i/11.png" class="arrow" name="1_'+numServantSelect+'"></td><td><select id="skill1_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="10">10</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></td></tr><tr id="stage2_2_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="SKILL 2" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_2_'+numServantSelect+'"></div><select id="skill2_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td><img src="i/11.png" class="arrow" name="2_'+numServantSelect+'"></td><td><select id="skill2_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="10">10</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></td></tr><tr id="stage2_3_'+numServantSelect+'" class="stage"><td colspan="2" class="stage-title"><input type="button" value="SKILL 3" class="lock_btn" name="'+numServantSelect+'"></td><td><div class="lock-select" name="stage2_3_'+numServantSelect+'"></div><select id="skill3_from_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td><td><img src="i/11.png" class="arrow" name="3_'+numServantSelect+'"></td><td><select id="skill3_to_'+numServantSelect+'" class="calcSet_btn" name="'+numServantSelect+'"><option value="10">10</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></td></form></tr></table><div class="delete-btn" name="'+numServantSelect+'">Delete</div><div class="change-btn" name="'+numServantSelect+'">Change</div></div>');
					document.getElementById("servantName_"+numServantSelect).innerText = Servantdb[numCalcServantId[numServantSelect-1]-1].text2;
					$("#modai_CalcIcon").append('<div class="boxCalcIconContainer" id="CalcIcon'+numServantSelect+'"><div class="box_calcicon"><figure class="fig-relative" id="sci0_'+ numServantSelect +'"><img src="i/icon_servants/' + numCalcServantId[numServantSelect-1] + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci0_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici0_' + numServantSelect + '">0</span></div></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci1_'+ numServantSelect +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon1 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci1_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici1_' + numServantSelect + '">0</span></div></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci2_'+ numServantSelect +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon2 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci2_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici2_' + numServantSelect + '">0</span></div></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci3_'+ numServantSelect +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon3 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci3_' + numServantSelect + '"></span></figcaption><div class="num-Individual"><span id="ici3_' + numServantSelect + '">0</span></div></figure></div></div>');
				} else {
					document.getElementById("servantName_"+numServantSelect).innerText = Servantdb[numCalcServantId[numServantSelect-1]-1].text2;
					document.getElementById("sci0_"+numServantSelect).innerHTML = '<img src="i/icon_servants/' + numCalcServantId[numServantSelect-1] + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci0_' + numServantSelect + '"></span></figcaption>';
					document.getElementById("sci1_"+numServantSelect).innerHTML = '<img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon1 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci1_' + numServantSelect + '"></span></figcaption>';
					document.getElementById("sci2_"+numServantSelect).innerHTML = '<img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon2 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci2_' + numServantSelect + '"></span></figcaption>';
					document.getElementById("sci3_"+numServantSelect).innerHTML = '<img src="i/icon_skills/' + Servantdb[numCalcServantId[numServantSelect-1]-1].icon3 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci3_' + numServantSelect + '"></span></figcaption>';
				}
			}
			
			
			document.getElementById("calc_"+numServantSelect).rows[0].cells[0].innerHTML = '<img src="i/icon_servants/' + numCalcServantId[numServantSelect-1] + '.jpg?20190827">';
			$('#sairin_from_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][1]);
			$('#sairin_to_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][2]);
			$('#skill1_from_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][3]);
			$('#skill1_to_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][4]);
			$('#skill2_from_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][5]);
			$('#skill2_to_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][6]);
			$('#skill3_from_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][7]);
			$('#skill3_to_'+numServantSelect).val(myServantdb[numCalcServantId[numServantSelect-1]-1][8]);
			myServantdb[numCalcServantId[numServantSelect-1]-1][10] = 1;
			locking(numServantSelect,4);
			
			if( renum > 0 ){
				if( clnum == 13 ){
					if( rev == 10 ){
						if( renum in Servantdb[temp].AdAgain1 == true ) tempNumtotal -= Servantdb[temp].AdAgain1[renum];
						if( renum in Servantdb[temp].AdAgain2 == true ) tempNumtotal -= Servantdb[temp].AdAgain2[renum];
						if( renum in Servantdb[temp].AdAgain3 == true ) tempNumtotal -= Servantdb[temp].AdAgain3[renum];
						if( renum in Servantdb[temp].AdAgain4 == true ) tempNumtotal -= Servantdb[temp].AdAgain4[renum];
					} else {
						if( renum in Servantdb[temp].skill1 == true ) tempNumtotal -= Servantdb[temp].skill1[renum] * 3;
						if( renum in Servantdb[temp].skill2 == true ) tempNumtotal -= Servantdb[temp].skill2[renum] * 3;
						if( renum in Servantdb[temp].skill3 == true ) tempNumtotal -= Servantdb[temp].skill3[renum] * 3;
						if( renum in Servantdb[temp].skill4 == true ) tempNumtotal -= Servantdb[temp].skill4[renum] * 3;
						if( renum in Servantdb[temp].skill5 == true ) tempNumtotal -= Servantdb[temp].skill5[renum] * 3;
						if( renum in Servantdb[temp].skill6 == true ) tempNumtotal -= Servantdb[temp].skill6[renum] * 3;
						if( renum in Servantdb[temp].skill7 == true ) tempNumtotal -= Servantdb[temp].skill7[renum] * 3;
						if( renum in Servantdb[temp].skill8 == true ) tempNumtotal -= Servantdb[temp].skill8[renum] * 3;
						if( renum in Servantdb[temp].skill9 == true ) tempNumtotal -= Servantdb[temp].skill9[renum] * 3;
					}
				} else {
					if( rev == 10 ){
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].AdAgain1 == true ) tempNumtotal -= Servantdb[temp].AdAgain1[renum];
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].AdAgain2 == true ) tempNumtotal -= Servantdb[temp].AdAgain2[renum];
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].AdAgain3 == true ) tempNumtotal -= Servantdb[temp].AdAgain3[renum];
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].AdAgain4 == true ) tempNumtotal -= Servantdb[temp].AdAgain4[renum];
					} else {
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill1 == true ) tempNumtotal -= Servantdb[temp].skill1[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill2 == true ) tempNumtotal -= Servantdb[temp].skill2[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill3 == true ) tempNumtotal -= Servantdb[temp].skill3[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill4 == true ) tempNumtotal -= Servantdb[temp].skill4[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill5 == true ) tempNumtotal -= Servantdb[temp].skill5[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill6 == true ) tempNumtotal -= Servantdb[temp].skill6[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill7 == true ) tempNumtotal -= Servantdb[temp].skill7[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill8 == true ) tempNumtotal -= Servantdb[temp].skill8[renum] * 3;
						if( Servantdb[temp].kind == clnum && renum in Servantdb[temp].skill9 == true ) tempNumtotal -= Servantdb[temp].skill9[renum] * 3;
					}
				}
			}document.getElementById("focus_total").innerText = tempNumtotal;
			
			if(numServantSelect>showBox){
				showBox++;
				numServantSelect++;
			}
			if( numServantSelect <= showBox ){
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#select-servant,#modal-overlay" ).fadeOut( "fast" , function(){
					
					$('.reverseBox').hide();
					$(".filterBox").hide();
					$("[name='class-btn']:checked").prop('checked', false);
					$("[name='class-btn'][value='0']").prop('checked', true);
					$('div[class="box_focus_total"]:has(.selected-material-icon)').remove();
					$(".setting-btn").hide();
					clnum=200;
					renum=0;
					statusnum=0;
					/* [#modal-overlay]を削除する */
					$('#modal-overlay').remove();
				});
			}
			if( numServantSelect > Servantdb.length ){
				$('.box_plus').fadeOut("fast");
				showBox = Servantdb.length;
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#select-servant,#modal-overlay" ).fadeOut( "fast" , function(){
					
					$('.reverseBox').hide();
					$(".status-filter").show();
					$(".filterBox").hide();
					$("[name='class-btn']:checked").prop('checked', false);
					$("[name='class-btn'][value='0']").prop('checked', true);
					$('div[class="box_focus_total"]:has(.selected-material-icon)').remove();
					$(".setting-btn").hide();
					clnum=200;
					renum=0;
					statusnum=0;
					/* [#modal-overlay]を削除する */
					$('#modal-overlay').remove();
				});
			}
			
			//$(this).parent().parent().hide();
		}
	);
	
	$("#modal-open").click(
		function(){
			/* [id:modal-open]をクリックしたら起こる処理 */
			
			materialTotal();
			
			/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
			$(this).blur() ; /* ボタンからフォーカスを外す */
			if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない [下とどちらか選択] */
			
			/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
			$("body").append('<div id="modal-overlay"></div>');
			
			/* [$modal-overlay]をフェードインさせる */
			$("#modal-overlay").fadeIn("fast");
			
			/*コンテンツをセンタリングする*/
			centeringModalSyncer(1);
			
			/* [$modal-content]をフェードインさせる */
			$("#modal-content").fadeIn("fast");
		}
	);
	$("[name='result-btn']").click(function(){
		var resSelect = $("[name='result-btn']:checked").val();
		if( resSelect == 0 ) useInv = 0;
		else if( resSelect == 1 ) useInv = 1;
		else useInv = 2;
		
		for(var k in mTotalNum){
			if( mTotalNum[k] > 0 )
			$("#box_" + k).show('fast');
		}
		$(".num-Individual").hide('fast');
		numIndividual = 0;
		for( i=0 ; i<showBox ; i++){
			var j = i+1;
			$('#ici0_' + j).css('color', 'Silver');
			$('#ici1_' + j).css('color', 'Silver');
			$('#ici2_' + j).css('color', 'Silver');
			$('#ici3_' + j).css('color', 'Silver');
			$('.num-Individual').css('fontSize', '1.7em');
		}
		
		materialTotal();
	});
	$("[name='result-chaldea']").click(function(){
		var resSelect = $("[name='result-chaldea']:checked").val();
		if( resSelect == 0 ) useInv = 0;
		else if( resSelect == 1 ) useInv = 1;
		else useInv = 2;
		
		for(var k in mTotalChaldea){
			if( mTotalChaldea[k] > 0 )
			$("#chaldea_box_" + k).show('fast');
		}
		$(".num-Individual").hide('fast');
		numIndividual = 0;
		for( i=0 ; i<showBox ; i++){
			var j = i+1;
			$('#ici0_' + j).css('color', 'Silver');
			$('#ici1_' + j).css('color', 'Silver');
			$('#ici2_' + j).css('color', 'Silver');
			$('#ici3_' + j).css('color', 'Silver');
			$('.num-Individual').css('fontSize', '1.7em');
		}
		
		chaldeaTotal();
	});
	$(".box_item").click(function(){
		var id =  $(this).attr("id");
		//alert(id.slice(4));
		id = Number(id.slice(4));
		//alert(numCalcServantMaterial[0][id][0]);
		
		if(numIndividual == 0){
			for( i=0 ; i<showBox ; i++){
				var j = i+1;
				
				if(id == 900) $('.num-Individual').css('fontSize', '0.6em');
				
				if(Number(numCalcServantMaterial[i][id][0]) > 0){
					if(id == 900){
						$('#ici0_' + j).text(separate(Number(numCalcServantMaterial[i][id][0])));
					} else {
						$('#ici0_' + j).text(Number(numCalcServantMaterial[i][id][0]));
					}
					$('#ici0_' + j).css('color', 'Black');
				} else {
					$('#ici0_' + j).text(Number(numCalcServantMaterial[i][id][0]));
				}
				if(Number(numCalcServantMaterial[i][id][1]) > 0){
					if(id == 900){
						$('#ici1_' + j).text(separate(Number(numCalcServantMaterial[i][id][1])));
					} else {
						$('#ici1_' + j).text(Number(numCalcServantMaterial[i][id][1]));
					}
					$('#ici1_' + j).css('color', 'Black');
				} else {
					$('#ici1_' + j).text(Number(numCalcServantMaterial[i][id][1]));
				}
				if(Number(numCalcServantMaterial[i][id][2]) > 0){
					if(id == 900){
						$('#ici2_' + j).text(separate(Number(numCalcServantMaterial[i][id][2])));
					} else {
						$('#ici2_' + j).text(Number(numCalcServantMaterial[i][id][2]));
					}
					$('#ici2_' + j).css('color', 'Black');
				} else {
					$('#ici2_' + j).text(Number(numCalcServantMaterial[i][id][2]));
				}
				if(Number(numCalcServantMaterial[i][id][3]) > 0){
					if(id == 900){
						$('#ici3_' + j).text(separate(Number(numCalcServantMaterial[i][id][3])));
					} else {
						$('#ici3_' + j).text(Number(numCalcServantMaterial[i][id][3]));
					}
					$('#ici3_' + j).css('color', 'Black');
				} else {
					$('#ici3_' + j).text(Number(numCalcServantMaterial[i][id][3]));
				}
			}
			$(".box_item").not("#box_" + id).hide('fast');
			$(".num-Individual").show('fast');
			numIndividual = 1;
		} else {
			for(var k in mTotalNum){
				if( mTotalNum[k] > 0 )
				$("#box_" + k).show('fast');
			}
			$(".num-Individual").hide('fast');
			numIndividual = 0;
			for( i=0 ; i<showBox ; i++){
				var j = i+1;
				$('#ici0_' + j).css('color', 'Silver');
				$('#ici1_' + j).css('color', 'Silver');
				$('#ici2_' + j).css('color', 'Silver');
				$('#ici3_' + j).css('color', 'Silver');
				$('.num-Individual').css('fontSize', '1.7em');
			}
		}
	});
	
	$("#show-inst").click(
		function(){
			/* [id:modal-open]をクリックしたら起こる処理 */
			/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
			$(this).blur() ; /* ボタンからフォーカスを外す */
			if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない*/
			
			/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
			$("body").append('<div id="modal-overlay"></div>');
			
			/* [$modal-overlay]をフェードインさせる */
			$("#modal-overlay").fadeIn("fast");
			
			/* コンテンツをセンタリングする */
			centeringModalSyncer(2);
			
			/* [$modal-content]をフェードインさせる */
			$("#footer").fadeIn("fast");
			
			/*[#modal-overlay]、または[#modal-close]をクリックしたら…*/
			$( "#modal-overlay,.input-close" ).unbind().click( function(){
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#footer,#modal-overlay" ).fadeOut( "fast" , function(){
					
					/*[#modal-overlay]を削除する*/
					$('#modal-overlay').remove();
					}
				);
			});
		}
	);
	
	/* リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する */
	$( window ).resize( centeringModalSyncer ) ;
	
	$("#add-servant1,#add-servant2").click(
		function(){
			$('.select-title').show();
			$('.select-show').show();
			$('.reverse-title').hide();
			$('.reverse-show').hide();
			$('.reverseBox').hide();
			$('.status-title').hide();
			$('.statusBox').hide();
			numServantSelect = showBox+1;
			ServantSearch(showBox+1);
			
			if( showBox>=Servantdb.length ){
				$('.box_plus').fadeOut("fast");
			}
		}
	);
	
	$("#add-reverse").click(
		function(){
			$('.select-title').hide();
			$('.select-show').hide();
			$('.status-title').hide();
			$('.statusBox').hide();
			$(".reverse-show").css( {"height": Math.floor( $(window).height() - $('.select-servant-title').outerHeight() ) + "px"} );
			$('.reverse-title').show();
			$('.reverse-show').show();
			$('.reverseBox').show();
			numServantSelect = showBox+1;
			ReverseSearch(showBox+1);
			
			if( showBox>=Servantdb.length ){
				$('.box_plus').fadeOut("fast");
			}
		}
	);
	$("#add-status").click(
		function(){
			$('.select-title').hide();
			$('.select-show').show();
			$('.reverse-title').hide();
			$('.reverse-show').hide();
			$('.reverseBox').hide();
			$('.status-title').show();
			$('.statusBox').show();
			numServantSelect = showBox+1;
			StatusSearch(showBox+1);
			
			if( showBox>=Servantdb.length ){
				$('.box_plus').fadeOut("fast");
			}
		}
	);
	/*
	$("#add-servant2").click(
		function(){
			ServantSearch(showBox+1);
			showBox++;
		}
	);
	*/
	
	$("#all-clear").click(
		function(){
			/* [id:all-clear]をクリックしたら起こる処理 */
			
			/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
			$(this).blur() ; /* ボタンからフォーカスを外す */
			if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない [下とどちらか選択] */
			
			if( language == 0 ){
				if( showBox < 1 ){
					$('.checkText').html('<span class="checkText">サーヴァントの登録がありません</span>');
					$('#checkTool').hide();
					$('#check-no').val("OK");
				} else {
					$('.checkText').html('<span class="checkText">登録したサーヴァントを<br />全て削除します</span>');
					$('#checkTool').show();
					$('#check-no').val("No");
				}
			} else {
				if( showBox < 1 ){
					$('.checkText').html('<span class="checkText">No servant registration.</span>');
					$('#checkTool').hide();
					$('#check-no').val("OK");
				} else {
					$('.checkText').html('<span class="checkText">Delete all registered servants.</span>');
					$('#checkTool').show();
					$('#check-no').val("No");
				}
			}
			
			/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
			$("body").append('<div id="modal-overlay"></div>');
			
			/* [$modal-overlay]をフェードインさせる */
			$("#modal-overlay").fadeIn("fast");
			
			/*コンテンツをセンタリングする*/
			centeringModalSyncer(7);
			
			/* [$modal-content]をフェードインさせる */
			$("#check-delete").fadeIn("fast");
			
			/*[#modal-overlay]、または[close-btn]をクリックしたら…*/
			$( "#modal-overlay,#check-no" ).unbind().click( function(){
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#check-delete,#modal-overlay" ).fadeOut( "fast" , function(){
					
					/*[#modal-overlay]を削除する*/
					$('#modal-overlay').remove() ;
					}
				);
			});
			
			$("#check-yes").click( function(){
				for( i=1 ; i<=Servantdb.length ; i++ ){
					$('#sBox_'+ i).remove();
					$("#CalcIcon"+i).remove();
					for( j=0 ; j<4 ; j++ ){
						lockSetting[i-1][j] = 0;
					}
					numCalcServantId[i-1] = 0;
					
					for(var k in FormidNum[i-1])
					{
						FormidNum[i-1][k] = 0;
					}
					for(var k in FormidUsed[i-1])
					{
						FormidUsed[i-1][k] = 0;
					}
				}
				
				for(var k in mTotalNum)
				{
					mTotalNum[k] = 0;
				}
				for(var k in mTotalUsed)
				{
					mTotalUsed[k] = 0;
				}
				
				for(i=0; i<Servantdb.length ;i++)
				{
					myServantdb[i][10] = 0;
				}
				chaldeaCalc();
				materialTotal();
				showBox = 0;
				$('.box_plus').fadeIn("fast");
				
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#check-delete,#modal-overlay" ).fadeOut( "fast" , function(){
					
					/*[#modal-overlay]を削除する*/
					$('#modal-overlay').remove() ;
					}
				);
			});
		}
	);
	
	$(document).on('click', '.delete-btn', function(){
	/*
	$('.delete-btn').on('click', function(){*/
		var temp;
		var next;
		//materialCalc(parseInt($(this).attr('name')));
		//$("#CalcIcon"+parseInt($(this).attr('name'))).remove();
		myServantdb[numCalcServantId[parseInt($(this).attr('name'))-1]-1][10] = 0;
		
		if( showBox>1 ){
			if( language == 0 ){
				for( temp = parseInt($(this).attr('name')) ; temp<showBox ; temp++ ){
					next = temp + 1;
					document.getElementById("calc_"+temp).rows[0].cells[0].innerHTML = '<img src="i/icon_servants/' + numCalcServantId[temp] + '.jpg?20190827">';
					document.getElementById("calc_"+temp).rows[0].cells[1].innerText = Servantdb[numCalcServantId[temp]-1].text;
					$("#sairin_from_"+temp).val( $("#sairin_from_"+next).val() );
					$("#sairin_to_"+temp).val( $("#sairin_to_"+next).val() );
					$("#skill1_from_"+temp).val( $("#skill1_from_"+next).val() );
					$("#skill1_to_"+temp).val( $("#skill1_to_"+next).val() );
					$("#skill2_from_"+temp).val( $("#skill2_from_"+next).val() );
					$("#skill2_to_"+temp).val( $("#skill2_to_"+next).val() );
					$("#skill3_from_"+temp).val( $("#skill3_from_"+next).val() );
					$("#skill3_to_"+temp).val( $("#skill3_to_"+next).val() );
					
					document.getElementById("CalcIcon"+temp).innerHTML = '<div class="box_calcicon"><figure class="fig-relative" id="sci0_'+ temp +'"><img src="i/icon_servants/' + numCalcServantId[next-1] + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci0_' + temp + '"></span></figcaption></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci1_'+ temp +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[next-1]-1].icon1 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci1_' + temp + '"></span></figcaption></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci2_'+ temp +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[next-1]-1].icon2 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci2_' + temp + '"></span></figcaption></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci3_'+ temp +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[next-1]-1].icon3 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci3_' + temp + '"></span></figcaption></figure></div>';
					
					numCalcServantId[temp-1] = numCalcServantId[temp];
					locking(temp,4);
					
					for( j=0 ; j<4 ; j++ ){
						lockSetting[temp][j] = 0;
					}
				}
			} else {
				for( temp = parseInt($(this).attr('name')) ; temp<showBox ; temp++ ){
					next = temp + 1;
					document.getElementById("calc_"+temp).rows[0].cells[0].innerHTML = '<img src="i/icon_servants/' + numCalcServantId[temp] + '.jpg?20190827">';
					document.getElementById("calc_"+temp).rows[0].cells[1].innerText = Servantdb[numCalcServantId[temp]-1].text2;
					$("#sairin_from_"+temp).val( $("#sairin_from_"+next).val() );
					$("#sairin_to_"+temp).val( $("#sairin_to_"+next).val() );
					$("#skill1_from_"+temp).val( $("#skill1_from_"+next).val() );
					$("#skill1_to_"+temp).val( $("#skill1_to_"+next).val() );
					$("#skill2_from_"+temp).val( $("#skill2_from_"+next).val() );
					$("#skill2_to_"+temp).val( $("#skill2_to_"+next).val() );
					$("#skill3_from_"+temp).val( $("#skill3_from_"+next).val() );
					$("#skill3_to_"+temp).val( $("#skill3_to_"+next).val() );
					
					document.getElementById("CalcIcon"+temp).innerHTML = '<div class="box_calcicon"><figure class="fig-relative" id="sci0_'+ temp +'"><img src="i/icon_servants/' + numCalcServantId[next-1] + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci0_' + temp + '"></span></figcaption></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci1_'+ temp +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[next-1]-1].icon1 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci1_' + temp + '"></span></figcaption></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci2_'+ temp +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[next-1]-1].icon2 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci2_' + temp + '"></span></figcaption></figure></div><div class="box_calcicon"><figure class="fig-relative" id="sci3_'+ temp +'"><img src="i/icon_skills/' + Servantdb[numCalcServantId[next-1]-1].icon3 + '.jpg?20190827"><figcaption class="num-CalcIcon"><span id="bci3_' + temp + '"></span></figcaption></figure></div>';
					
					numCalcServantId[temp-1] = numCalcServantId[temp];
					locking(temp,4);
					
					for( j=0 ; j<4 ; j++ ){
						lockSetting[temp][j] = 0;
					}
				}
			}
			$("#sBox_"+showBox).remove();
			$("#CalcIcon"+showBox).remove();
			lockSetting[temp-1] = [0,0,0,0];
			numCalcServantId[showBox-1] = 0;
			for(var k in FormidNum[showBox-1])
			{
				FormidNum[showBox-1][k] = 0;
			}
			for(var k in FormidUsed[showBox-1])
			{
				FormidUsed[showBox-1][k] = 0;
			}
			showBox--;
			$('.box_plus').fadeIn("fast");
		} else {
			$("#sBox_"+showBox).remove();
			$("#CalcIcon"+showBox).remove();
			lockSetting[showBox-1] = [0,0,0,0];
			numCalcServantId[showBox-1] = 0;
			for(var k in FormidNum[showBox-1])
			{
				FormidNum[showBox-1][k] = 0;
			}
			for(var k in FormidUsed[showBox-1])
			{
				FormidUsed[showBox-1][k] = 0;
			}
			showBox = 0;
		}
	});
	
	$(document).on('click', '.change-btn', function(){
	/*
	$('.change-btn').on('click',function(){*/
		numServantSelect = parseInt($(this).attr('name'));
		ServantSearch(parseInt($(this).attr('name')));
	});
	
	$(document).on('click', '.lock_btn', function(){
		/*
		var deb1 = document.getElementById("debug1");
		deb1.innerText = "debug1 : " + $(this).val();
		*/
		
		switch($(this).val()){
			case '霊基再臨':
				locking(parseInt($(this).attr('name')),0);
				break;
			case 'Ascension':
				locking(parseInt($(this).attr('name')),0);
				break;
			case 'SKILL 1':
				locking(parseInt($(this).attr('name')),1);
				break;
			case 'SKILL 2':
				locking(parseInt($(this).attr('name')),2);
				break;
			case 'SKILL 3':
				locking(parseInt($(this).attr('name')),3);
				break;
			default: break;
		}
	});
	$(document).on('click', '.arrow', function(){
		var num = $(this).attr('name');
		var idNum = $(this).attr('name');
		
		aiming(parseInt(num.slice(0,1)),parseInt(idNum.slice(2)));
	});
	
	$(document).on('change', '.calcSet_btn', function(){
	/*
	$('.calcSet_btn').on('change', function(){*/
		materialCalc(parseInt($(this).attr('name')));
	});
	
	
	$("#inventory-setting").click(
		function(){
			/* [id:inventory-setting]をクリックしたら起こる処理 */
			
			/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
			$(this).blur() ; /* ボタンからフォーカスを外す */
			if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない [下とどちらか選択] */
			
			/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
			$("body").append('<div id="modal-overlay"></div>');
			
			/* [#modal-overlay]をフェードインさせる */
			$("#modal-overlay").fadeIn(200);
			
			/*コンテンツをセンタリングする*/
			centeringModalSyncer(5);
			
			$(".chaldea-slide").css( {"height": Math.floor( $(window).height() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
			
			renum = 0;
			statusnum = 0;
			chaldeanum = 1;
			numServantSelect = showBox+1;
			$('div.box-chaldea').remove();
			$("[name='chaldea-class-btn']:checked").prop('checked', false);
			$("[name='chaldea-class-btn'][value='0']").prop('checked', true);
			clnum = $("[name='chaldea-class-btn']:checked").val();
			$("[name='chaldea-btn']:checked").prop('checked', false);
			$("[name='chaldea-btn'][value='0']").prop('checked', true);
			chaldeaFuncnum = 0;
			
			ChangeServantIcon();
			$('#chaldea_inventory').hide();
			$('#chaldea_handover').hide();
			$('#chaldea_calc').hide();
			$(".chaldea-slide").css( {"height": Math.floor( $(window).innerHeight() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
			$('#chaldea_servant').show();
			
			/* [#modal-inventory]をフェードインさせる */
			$("#modal-inventory").fadeIn(200);
			
		}
	);
	$("[name='chaldea-class-btn']").click(function(){
		clnum = $("[name='chaldea-class-btn']:checked").val();
		console.log(clnum);
		
		switch( clnum ){
			case '0':
				$("input[name='chaldea-calcclass-btn']:eq(0)").prop('checked', true);
				break;
			case '1':
				$("input[name='chaldea-calcclass-btn']:eq(1)").prop('checked', true);
				break;
			case '2':
				$("input[name='chaldea-calcclass-btn'][value='2']").prop('checked', true);
				break;
			case '3':
				$("[name='chaldea-calcclass-btn']").val(['3']);
				break;
			case '4':
				$("input[name='chaldea-calcclass-btn']").val(['4']);
				break;
			case '5':
				$("input[name='chaldea-calcclass-btn']").val(['5']);
				break;
			case '6':
				$("input[name='chaldea-calcclass-btn']").val(['6']);
				break;
			case '7':
				$("input[name='chaldea-calcclass-btn']").val(['7']);
				break;
			case '8':
				$("input[name='chaldea-calcclass-btn']").val(['8']);
				break;
			case '9':
				$("input[name='chaldea-calcclass-btn']").val(['9']);
				break;
			case '10':
				$("input[name='chaldea-calcclass-btn']").val(['10']);
				break;
			case '11':
				$("input[name='chaldea-calcclass-btn']").val(['11']);
				break;
			case '12':
				$("input[name='chaldea-calcclass-btn']").val(['12']);
				break;
			case '13':
				$("input[name='chaldea-calcclass-btn']").val(['13']);
				break;
			default:
				break;
		}
		ChangeServantIcon();
		$(".chaldea-slide").css( {"height": Math.floor( $(window).innerHeight() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
	});
	$("[name='chaldea-calcclass-btn']").click(function(){
		clnum = $("[name='chaldea-calcclass-btn']:checked").val();
		
		console.log(clnum);
		
		switch( clnum ){
			case '0':
				$("input[name='chaldea-class-btn']:eq(0)").prop('checked', true);
				break;
			case '1':
				$("input[name='chaldea-class-btn']:eq(1)").prop('checked', true);
				break;
			case '2':
				$("input[name='chaldea-class-btn'][value='2']").prop('checked', true);
				break;
			case '3':
				$("[name='chaldea-class-btn']").val(['3']);
				break;
			case '4':
				$("input[name='chaldea-class-btn']").val(['4']);
				break;
			case '5':
				$("input[name='chaldea-class-btn']").val(['5']);
				break;
			case '6':
				$("input[name='chaldea-class-btn']").val(['6']);
				break;
			case '7':
				$("input[name='chaldea-class-btn']").val(['7']);
				break;
			case '8':
				$("input[name='chaldea-class-btn']").val(['8']);
				break;
			case '9':
				$("input[name='chaldea-class-btn']").val(['9']);
				break;
			case '10':
				$("input[name='chaldea-class-btn']").val(['10']);
				break;
			case '11':
				$("input[name='chaldea-class-btn']").val(['11']);
				break;
			case '12':
				$("input[name='chaldea-class-btn']").val(['12']);
				break;
			case '13':
				$("input[name='chaldea-class-btn']").val(['13']);
				break;
			default:
				break;
		}
		chaldeaCalc(clnum);
		$("#chaldea_calc").css( {"height": Math.floor( $(window).height() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() ) ) + "px"} );
	});
	
	$("[name='chaldea-btn']").click(function(){
		if( $(this).val() != chaldeaFuncnum ){
			chaldeaFuncnum = parseInt( $(this).val() );
			switch( chaldeaFuncnum ){
				case 0:
					ChangeServantIcon();
					$('#chaldea_inventory').hide();
					$('#chaldea_handover').hide();
					$('#chaldea_calc').hide();
					$(".chaldea-slide").css( {"height": Math.floor( $(window).innerHeight() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() + $('.select-class').outerHeight() ) ) + "px"} );
					$('#chaldea_servant').fadeIn(200);
					break;
				case 1:
					$('#chaldea_servant').hide();
					$('#chaldea_handover').hide();
					$('#chaldea_calc').hide();
					$("#chaldea_inventory").css( {"height": Math.floor( $(window).innerHeight() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() ) ) + "px"} );
					$('#chaldea_inventory').fadeIn(200);
					break;
				case 2:
					switch( $('[name="cho-select2-btn"]:checked').val() ){
						case "0":
							if( $('[name="cho-select1-btn"]:checked').val() == 0 ){
								saveLocalStorageServant();
							} else {
								/* saveCookie();
								*/
								saveLocalStorageInventory();
							}
							break;
						case "1":
							$('#handover_code').val("");
							break;
						default:
							break;
					}
					$('#chaldea_servant').hide();
					$('#chaldea_inventory').hide();
					$('#chaldea_calc').hide();
					$('#chaldea_handover').fadeIn(200);
					break;
				case 3:
					chaldeaCalc(clnum);
					$('#chaldea_servant').hide();
					$('#chaldea_inventory').hide();
					$('#chaldea_handover').hide();
					$("#chaldea_calc").css( {"height": Math.floor( $(window).height() - ( $('#inv-title').outerHeight() + $('#chaldea_select').outerHeight() ) ) + "px"} );
					$('#chaldea_calc').fadeIn(200);
					break;
				default:
					break;
			}
		}
	});
	/* inventoryアイテムアイコンをクリック */
	$(".inv_item").click( function(){
		/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
		$(this).blur() ; /* ボタンからフォーカスを外す */
		
		numInv = $(this).attr("id");
		numInv = parseInt(numInv.slice(9));
		document.getElementById("table-invinput").rows[0].cells[0].innerHTML='<img src="i/icon/item_' + numInv + '.jpg?20190827" class="icon">';
		var inputtemp = inventoryNum[numInv];
		
		$("#inventory-overlay").fadeIn("fast");
		
		/*コンテンツをセンタリングする*/
		centeringModalSyncer(6);
		
		$("#inventory-input-form").val(inputtemp);
		$("#inventory-input-slider").val(inputtemp);
		
		$("#inventory-input").fadeIn("fast");
		
		$("#inventory-input-form").select();
		
		/* テキストエリア選択時 */
		$( '#inventory-input-form' ).focus( function () {
			$(this).select();
		} );
		/* テキストエリア変更中 */
		$( '#inventory-input-form' ).on( 'input', function () {
			inputtemp = parseInt($(this).val());
			if(numInv == 900){
				if(inputtemp<0){
					inputtemp=0;
					$("#inventory-input-form").val(inputtemp);
				} else if(inputtemp > 999999999){
					inputtemp=999999999;
					$("#inventory-input-form").val(inputtemp);
				}
			} else {
				if(inputtemp<0){
					inputtemp=0;
					$("#inventory-input-form").val(inputtemp);
				} else if(inputtemp > 99999){
					inputtemp=99999;
					$("#inventory-input-form").val(inputtemp);
				}
			}
		} );
		/* テキストエリア変更後 */
		$( '#inventory-input-form' ).change( function () {
			inputtemp = parseInt($(this).val());
			if(numInv == 900){
				if(inputtemp<0){
					inputtemp=0;
					$("#inventory-input-form").val(inputtemp);
				} else if(inputtemp > 999999999){
					inputtemp=999999999;
					$("#inventory-input-form").val(inputtemp);
				}
			} else {
				if(inputtemp<0){
					inputtemp=0;
					$("#inventory-input-form").val(inputtemp);
				} else if(inputtemp > 99999){
					inputtemp=99999;
					$("#inventory-input-form").val(inputtemp);
				}
			}
		} );
		
		$("#inventory-input-form").keydown(
			function(event){
				/* Enterキーでも入力完了する */
				if(event.keyCode == 13){
					if(numInv==900){
						document.getElementById("inv_"+numInv).rows[0].cells[1].innerText = separate(inputtemp);
					} else {
						document.getElementById("inv_"+numInv).innerText = separate(inputtemp);
					}
					inventoryNum[numInv] = inputtemp;
					
					inputtemp = 0;
					for(var k in inventoryNum)
					{
						inputtemp += inventoryNum[k];
					}
					if( inputtemp > 0 ){
						useInv = 1;
						$("[name='result-btn']:checked").prop('checked', false);
						$("[name='result-btn'][value='1']").prop('checked', true);
						$("[name='result-chaldea']:checked").prop('checked', false);
						$("[name='result-chaldea'][value='1']").prop('checked', true);
					} else {
						useInv = 0;
						$("[name='result-btn']:checked").prop('checked', false);
						$("[name='result-btn'][value='0']").prop('checked', true);
						$("[name='result-chaldea']:checked").prop('checked', false);
						$("[name='result-chaldea'][value='0']").prop('checked', true);
					}
					/*
					saveCookie();
					*/
					saveLocalStorageInventory();
					
					$("#inv-input-minus10,#inv-input-minus1,#inv-input-plus1,#inv-input-plus10" ).unbind();
					$("#inventory-overlay,#inventory-input").fadeOut("fast");
				}
			}
		);
		
		$("#inputnum-inventory" ).click( function(){
			if(numInv==900){
				document.getElementById("inv_"+numInv).rows[0].cells[1].innerText = separate(inputtemp);
			} else {
				document.getElementById("inv_"+numInv).innerText = separate(inputtemp);
			}
			inventoryNum[numInv] = inputtemp;
			
			inputtemp = 0;
			for(var k in inventoryNum)
			{
				inputtemp += inventoryNum[k];
			}
			if( inputtemp > 0 ){
				useInv = 1;
				$("[name='result-btn']:checked").prop('checked', false);
				$("[name='result-btn'][value='1']").prop('checked', true);
				$("[name='result-chaldea']:checked").prop('checked', false);
				$("[name='result-chaldea'][value='1']").prop('checked', true);
			} else {
				useInv = 0;
				$("[name='result-btn']:checked").prop('checked', false);
				$("[name='result-btn'][value='0']").prop('checked', true);
				$("[name='result-chaldea']:checked").prop('checked', false);
				$("[name='result-chaldea'][value='0']").prop('checked', true);
			}
			/*
			saveCookie();
			*/
			saveLocalStorageInventory();
			$("[name='result-btn']:checked").prop('checked', false);
			$("[name='result-btn'][value='1']").prop('checked', true);
			$("[name='result-chaldea']:checked").prop('checked', false);
			$("[name='result-chaldea'][value='1']").prop('checked', true);
			
			$("#inv-input-minus10,#inv-input-minus1,#inv-input-plus1,#inv-input-plus10" ).unbind();
			$("#inventory-overlay,#inventory-input").fadeOut("fast");
		});
		
		$("#inventory-overlay,.input-close" ).click( function(){
			$("#inv-input-minus10,#inv-input-minus1,#inv-input-plus1,#inv-input-plus10" ).unbind();
			$("#inventory-overlay,#inventory-input").fadeOut("fast");
		});
	});
	$('[name="cho-select1-btn"]').click(function(){
		$('#handover_code').val("");
		if( $('#cho_issue').prop('checked') ){
			switch( $(this).val() ){
				case "0":
					/*
					saveServant();
					*/
					saveLocalStorageServant();
					break;
				case "1":
					/*
					saveCookie();
					*/
					saveLocalStorageInventory();
					break;
				default:
					break;
			}
		}
	});
	$('[name="cho-select2-btn"]').click(function(){
		$('#handover_code').val("");
		if( $(this).val()==1 ) $('#load_handover').fadeIn(100);
		else {
			switch( $('[name="cho-select1-btn"]:checked').val() ){
				case "0":
					/*
					saveServant();
					*/
					saveLocalStorageServant();
					break;
				case "1":
					/*
					saveCookie();
					*/
					saveLocalStorageInventory();
					break;
				default:
					break;
			}
			$('#load_handover').fadeOut(100);
		}
	});
	$('#handover_code').focus(function(){
		$('#handover_code').select();
	});
	$('#load_handover').click(function(){
		if( $('#handover_code').val() != "" ){
			switch( $('[name="cho-select1-btn"]:checked').val() ){
				case "0":
					loadServant( $('#handover_code').val() );
					break;
				case "1":
					loadInventory( $('#handover_code').val() );
					break;
				default:
					break;
			}
		}
	});
	/*
	$('#result_title').click(function(){
		if( useInv == 0 ){
			useInv = 1;
			$(".num-icon").css("color","rgb(255,117,117)");
			$(".num-qp").css("color","rgb(225,25,25)");
			materialTotal();
		} else {
			useInv = 0;
			$(".num-icon").css("color","rgb(255,255,255)");
			$(".num-qp").css("color","rgb(25,25,25)");
			materialTotal();
		}
	});
	*/
	
	/* クッキー動作検証用[ロード] */
	/*
	$("#loadCookie").click(function(){
		
		// 一時データにデータを取得
		var temp_com = Cookies.get('fgosm_com');
		var temp_brnz = Cookies.get('fgosm_brnz');
		var temp_slv = Cookies.get('fgosm_slv');
		var temp_gld = Cookies.get('fgosm_gld');
		
		
		// ロードしたデータの確認
		if( temp_com.length < 189 ){
			for( var i=temp_com.length ; i<189 ; i++ ){
				temp_com += "0";
			}
		}
		if( temp_brnz.length < 30 ){
			for( var i=temp_brnz.length ; i<33 ; i++ ){
				temp_brnz += "0";
			}
		}
		if( temp_slv.length < 55 ){
			for( var i=temp_slv.length ; i<55 ; i++ ){
				temp_slv += "0";
			}
		}
		if( temp_gld.length < 55 ){
			for( var i=temp_gld.length ; i<55 ; i++ ){
				temp_gld += "0";
			}
		}
		// [temp_com]の処理
		// QP
		inventoryNum[900] = parseInt(temp_com.substr(0,9));
		// 伝承結晶
		inventoryNum[800] = parseInt(temp_com.substr(9,5));
		// ピース
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[100+i] = parseInt(temp_com.substr(14+i*5,5));
		}
		// モニュメント
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[110+i] = parseInt(temp_com.substr(49+i*5,5));
		}
		// 輝石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[200+i] = parseInt(temp_com.substr(84+i*5,5));
		}
		// 魔石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[210+i] = parseInt(temp_com.substr(119+i*5,5));
		}
		// 秘石
		for( var i=0 ; i<7 ; i++ ){
			inventoryNum[220+i] = parseInt(temp_com.substr(154+i*5,5));
		}
		// [temp_brnz]の処理
		for( var i=0 ; i<6 ; i++ ){
			inventoryNum[300+i] = parseInt(temp_brnz.substr(i*5,5));
		}
		// [temp_slv]の処理
		for( var i=0 ; i<21 ; i++ ){
			inventoryNum[400+i] = parseInt(temp_slv.substr(i*5,5));
		}
		// [temp_gld]の処理
		for( var i=0 ; i<18 ; i++ ){
			inventoryNum[500+i] = parseInt(temp_gld.substr(i*5,5));
		}
		// Inventory画面に反映
		for( var k in inventoryNum ){
			if(k==900){
				document.getElementById("inv_"+k).rows[0].cells[1].innerText = separate(inventoryNum[k]);
			} else {
				document.getElementById("inv_"+k).innerText = separate(inventoryNum[k]);
			}
		}
		
		// 動作検証用コード
		var deb1 = document.getElementById("debug1");
		var deb2 = document.getElementById("debug2");
		var deb3 = document.getElementById("debug3");
		var deb4 = document.getElementById("debug4");
		deb1.innerText = "debug1 : "+temp_com;
		deb2.innerText = "debug1 : "+temp_brnz;
		deb3.innerText = "debug1 : "+temp_slv;
		deb4.innerText = "debug1 : "+temp_gld;
		//動作検証用コード（ここまで）
	});
	*/
	/*
	function saveServant(){
		var temp = "";
		var tempSave = "";
		
		
	//	myServantdb[i] = [{
	//		id:i+1,
	//		aFrom:0, aTo:0,
	//		s1From:0, s1To:0,
	//		s2From:0, s2To:0,
	//		s3From:0, s3To:0,
	//		}];
		
		for( var i=0 ; i<Servantdb.length ; i++ ){
			temp = myServantdb[i][0];
			if( String(temp).length < 3 ){
				switch( String(temp).length ){
					case 2:
						temp = "0" + temp;
						break;
					case 1:
						temp = "00" + temp;
						break;
					default:
						break;
				}
			}
			tempSave = tempSave + temp;
			
			temp = myServantdb[i][1];
			tempSave = tempSave + String(temp);
			temp = myServantdb[i][2];
			tempSave = tempSave + String(temp);
			
			temp = myServantdb[i][3] - 1;
			tempSave = tempSave + String(temp);
			temp = myServantdb[i][4] - 1;
			tempSave = tempSave + String(temp);
			
			temp = myServantdb[i][5] - 1;
			tempSave = tempSave + String(temp);
			temp = myServantdb[i][6] - 1;
			tempSave = tempSave + String(temp);
			
			temp = myServantdb[i][7] - 1;
			tempSave = tempSave + String(temp);
			temp = myServantdb[i][8] - 1;
			tempSave = tempSave + String(temp);
		}
		
		// 動作検証用コード
		var deb1 = document.getElementById("debug1");
		deb1.innerText = "debug1 : "+tempSave;
		
		var deb2 = document.getElementById("debug2");
		deb2.innerText = "debug1 : "+temp_brnz;
		var deb3 = document.getElementById("debug3");
		deb3.innerText = "debug1 : "+temp_slv;
		var deb4 = document.getElementById("debug4");
		deb4.innerText = "debug1 : "+temp_gld;
		//動作検証用コード（ここまで）
		
	}*/
	
	$(".lngChangeBtn").click(
		function(){
			/* [class:lngBtn]をクリックしたら起こる処理 */
			/* キーボード操作などにより、オーバーレイが多重起動するのを防止する */
			$(this).blur() ; /* ボタンからフォーカスを外す */
			if($("#modal-overlay")[0]) return false ;/* 新しくモーダルウィンドウを起動しない*/
			
			/* オーバーレイ用のHTMLコードを、[body]内の最後に生成する */
			$("body").append('<div id="modal-overlay"></div>');
			
			/* [$modal-overlay]をフェードインさせる */
			$("#modal-overlay").fadeIn("fast");
			
			/* コンテンツをセンタリングする */
			centeringModalSyncer(8);
			
			/* [$modal-content]をフェードインさせる */
			$("#changeLng").fadeIn("fast");
			
			$("#lngJp").click(function(){
				/*
				$(".lngProgress1").text('イベント期間');
				$(".lngProgress2").text('目標完走率');
				$("#instBtn").text('説明書');
				$(".lngResult1").text('日');
				$(".lngResult2").text('時間');
				$(".lngResult3").text('分');
				$(".lngItem1").text('目標個数');
				$(".lngItem2").text('獲得 / 周');
				$(".lngItem3").text('AP / 周');
				$(".lngInst1").text('説明書');
				$(".lngInst2").html('はじめに<br />このシミュレータはイベント専用タイマーです<br /><br />');
				$(".lngInst3").html('1.<br />ページ上部に、『イベント期間』と『目標完走率』をプロセスバーで表示しています。<br/>上段のバーは『イベント期間』を視覚的に表示したものです。<br />内部青色のバーは時間経過を表しています。<br />「右端まで到達したとき」＝「イベント終了時刻になった」<br />という意味になります。<br /><br />下段のバーは『目標完走率』を視覚的に表示しています。<br />『目標完走率』とは、イベントの残り時間内に設定したアイテムをどれだけ回収できるかを表しています。<br />「100%」＝「時間が足りている」＝「目標を全て回収できる」<br />ということになります。<br /><br />');
				$(".lngInst4").html('2.<br />【Player Setting】で主にAP関連の設定をします。<br />『PlayerLV』を選択することで最大APの設定ができます。<br />『MaxAP』の入力欄に直接入力しても問題はありません。<br />『金リンゴ』でイベント中に使用する金リンゴの数を設定します。<br /><br />');
				$(".lngInst5").html('3.<br />【Item Setting】でイベントアイテムの各種設定をします。<br />目標個数、クエスト1周あたりの獲得個数、クエスト1周に必要なAPをそれぞれ入力します。<br /><br /><br/>');
				$(".lngInst6").html('※注意点※<br />このシミュレータで計算するのは『必要な自然回復時間』です。<br />クエスト周回に必要な時間は考慮していません。<br />このシミュレータを使ってイベント期限ギリギリの計画を立てると、<br />イベントアイテム回収が<font color="red">間に合わなくなる可能性がかなり高い</font>です。<br />ご注意ください。<br /><br /><br /><br />');
				$(".lngInst7").html('このページは「Fate/Grand Order」の開発・運営等とは一切関係のない、ただの１ユーザが趣味で作ったものです。<br />この計算機を使用したことによる何らかの損害があっても一切責任は負いかねます。<br />ご意見・ご要望は当サイト運営用のツイッターアカウントまでご連絡ください。<br />');
				*/
				/*
				<div class="tools"><input type="button" id="inventory-setting" value="Inventory"></div>
				<div class="tools"><input type="button" id="all-clear" value="AllDelete"></div>
				<div class="tools"><input type="button" id="add-servant2" value="Servant"></div>
				<div class="tools"><input type="button" id="add-reverse" value="Material"></div>
				<div class="tools"><input type="button" id="modal-open" value="Result"></div>
				*/
				language = 0;
				document.getElementById("all-clear").innerHTML = "登録<br>全解除";
				document.getElementById("add-servant2").innerHTML = "検索";
				document.getElementById("add-reverse").innerHTML = "逆引き<br>検索";
				document.getElementById("add-status").innerHTML = "ステータス<br>検索";
				document.getElementById("modal-open").innerText = "結果表示";
				document.getElementById("inventory-setting").innerHTML = "所持<br>アイテム";
				document.getElementById("show-inst").innerText = "説明書";
				
				/*
				document.getElementsByClassName("result_title").innerText = "計算結果";
				*/
				$(".personalModeration").css('width','50px');
				$(".personalInsanity").css('width','50px');
				$(".personalSummer").css('width','50px');
				document.getElementById("check-title").innerText = "確認";
				$("span.select-title").text("サーヴァント検索");
				$("span.reverse-title").text("サーヴァント逆引き検索");
				$("span.status-title").text("サーヴァントステータス検索");
				$("span.inv-title").text("所持アイテム");
				$("span.result_title").text("結果表示");
				
				$("label.Result").text("計算結果");
				$("label.Required").text("不足分");
				$("label.Consumed").text("使用済");
				
				$("label.Ascention").text("霊基再臨");
				$("label.skillReinforce").text("スキル強化");
				
				$("#titleFilterAttr").text("属性系フィルター");
				$("#titleFilterNP").text("宝具系フィルター");
				$("#titleFilterSkills").text("スキル系フィルター");
				$("#filTitleReset").text("フィルターの初期化");
				
				$("label.policyLaw").text("秩序");
				$("label.policyNeutral").text("中立");
				$("label.policyChaos").text("混沌");
				
				$("label.personalGood").text("善");
				$("label.personalModeration").text("中庸");
				$("label.personalBad").text("悪");
				$("label.personalInsanity").text("狂");
				$("label.personalBride").text("花嫁");
				$("label.personalSummer").text("夏");
				
				$("label.attributeSky").text("天");
				$("label.attributeEarth").text("地");
				$("label.attributeMan").text("人");
				$("label.attributeStar").text("星");
				$("label.attributeBeast").text("獣");
				
				$("label.etcDivinity").text("神性");
				$("label.etcDragon").text("龍");
				$("label.etcRoma").text("ローマ");
				$("label.etcSavageBeast").text("猛獣");
				$("label.etcRiding").text("騎乗");
				$("label.etcLove").text("愛する");
				$("label.etcDevilish").text("魔性");
				$("label.etcDavinci").text("ダヴィンチ");
				$("label.etcFace").text("アルトリア顔");
				$("label.etcArthur").text("アーサー");
				
				$("label.np_typeQ").text("Ｑ宝具");
				$("label.np_typeA").text("Ａ宝具");
				$("label.np_typeB").text("Ｂ宝具");
				
				$("label.np-effectA").text("全体");
				$("label.np-effectO").text("単体");
				$("label.np-effectS").text("補助");
				
				$("label.np_EXmale").text("男性");
				$("label.np_EXfemale").text("女性");
				$("label.np_EXdivine").text("神性");
				$("label.np_EXdragon").text("竜");
				$("label.np_EXpoison").text("毒");
				$("label.np_EXriding").text("騎乗");
				$("label.np_EXlove").text("愛する");
				$("label.np_EXevil").text("悪");
				$("label.np_EXdemonic").text("魔性");
				$("label.np_EXskyearth").text("天地");
				$("label.np_EXservant").text("サーヴァント");
				$("label.np_EXface").text("アルトリア顔");
				$("label.np_EXarthur").text("アーサー");
				$("label.np_EXsaber").text("セイバー");
				
				$("label.s_EXmale").text("男性");
				$("label.s_EXdivine").text("神性");
				$("label.s_EXdragon").text("竜");
				$("label.s_EXroma").text("ローマ");
				$("label.s_EXsavagebeast").text("猛獣");
				$("label.s_EXevil").text("悪");
				$("label.s_EXdemonic").text("魔性");
				$("label.s_EXskyearth").text("天地");
				$("label.s_EXhuman").text("人間");
				$("label.s_EXhumanoid").text("人型");
				$("label.s_EXundead").text("死霊");
				$("label.s_EXdemon").text("悪魔");
				$("label.s_EXlarge").text("巨大");
				$("label.s_EXsaber").text("セイバー");
				
				$("label.reset_filter").text("リセット");
				
				$("#filter-policy1").text("秩序");
				$("#filter-policy2").text("中立");
				$("#filter-policy3").text("混沌");
				
				$("#filter-personal1").text("善");
				$("#filter-personal2").text("中庸");
				$("#filter-personal3").text("悪");
				$("#filter-personal4").text("狂");
				$("#filter-personal5").text("花嫁");
				$("#filter-personal6").text("夏");
				
				$("#filter-attribute1").text("天");
				$("#filter-attribute2").text("地");
				$("#filter-attribute3").text("人");
				$("#filter-attribute4").text("星");
				$("#filter-attribute5").text("獣");
				
				$("#filter-divinity").text("神性");
				$("#filter-dragon").text("竜");
				$("#filter-roma").text("ローマ");
				$("#filter-savagebeast").text("猛獣");
				$("#filter-riding").text("騎乗");
				$("#filter-love").text("愛する");
				$("#filter-devilish").text("魔性");
				$("#filter-davinci").text("ダヴィンチ");
				$("#filter-face").text("アルトリア顔");
				$("#filter-arthur").text("アーサー");
				
				$("#filter-nptype1").text("Ｑ宝具");
				$("#filter-nptype2").text("Ａ宝具");
				$("#filter-nptype3").text("Ｂ宝具");
				
				$("#filter-npeffect1").text("全体宝具");
				$("#filter-npeffect2").text("単体宝具");
				$("#filter-npeffect3").text("補助宝具");
				
				$("#filter-npEXmale").text("宝具 男性特攻");
				$("#filter-npEXfemale").text("宝具 女性特攻");
				$("#filter-npEXdivine").text("宝具 神性特攻");
				$("#filter-npEXdragon").text("宝具 竜特攻");
				$("#filter-npEXpoison").text("宝具 毒特攻");
				$("#filter-npEXriding").text("宝具 騎乗特攻");
				$("#filter-npEXlove").text("宝具 愛する者特攻");
				$("#filter-npEXevil").text("宝具 悪特攻");
				$("#filter-npEXdemonic").text("宝具 魔性特攻");
				$("#filter-npEXskyearth").text("宝具 天地特攻");
				$("#filter-npEXservant").text("宝具 サーヴァント特攻");
				$("#filter-npEXface").text("宝具 アルトリア顔特攻");
				$("#filter-npEXarthur").text("宝具 アーサー特攻");
				$("#filter-npEXsaber").text("宝具 セイバー特攻");
				
				$("#filter-sEXmale").text("スキル 男性特攻");
				$("#filter-sEXdivine").text("スキル 神性特攻");
				$("#filter-sEXdragon").text("スキル 竜特攻");
				$("#filter-sEXroma").text("スキル ローマ特攻");
				$("#filter-sEXsavagebeast").text("スキル 猛獣特攻");
				$("#filter-sEXevil").text("スキル 悪特攻");
				$("#filter-sEXdemonic").text("スキル 魔性特攻");
				$("#filter-sEXskyearth").text("スキル 天地特攻");
				$("#filter-sEXhuman").text("スキル 人間特攻");
				$("#filter-sEXhumanoid").text("スキル 人型特攻");
				$("#filter-sEXundead").text("スキル 死霊特攻");
				$("#filter-sEXdemon").text("スキル 悪魔特攻");
				$("#filter-sEXlarge").text("スキル 超巨大特攻");
				$("#filter-sEXsaber").text("スキル セイバー特攻");
				
				$("h2.instTitle").text("説明書");
				document.getElementById("instText1").innerHTML = '　Fate/Grand Order専用素材計算シミュレータです。<br />　霊基再臨、スキル強化に必要な素材やＱＰ等を合計します。<br /><big><font color="red">　※スマホ等で利用される場合、縦向きでの使用を推奨しています。</font></big><br /><br />';
				document.getElementById("instText2").innerHTML = '1.<br />　サーヴァントの登録は「検索」ボタン、「＋」アイコンまたは「逆引き検索」をクリックしてください。<br />「検索」ボタン、「＋」アイコンからはクラス別の検索が行なえます。上段からレアリティ順にサーヴァントのアイコンが表示されます。<br />「逆引き検索」ボタンは、サーヴァントを使用する素材から逆引きに検索することができます。<br /><br />';
				document.getElementById("instText3").innerHTML = '2.<br />　霊基再臨・SKILLの各項目を設定してください。設定数値の左側から右側までの間を計算します。<br />　入力補助として「霊基再臨」「SKILL」の各項目名をクリックすることで、それぞれ個別に計算から除外することができます。<br />　インスタントで設定できるので、ご活用ください<br />　サーヴァントに設定した内容は全てCookie機能で自動保存されます。Cookie機能がオフになっていると保存されません。<br /><br />';
				document.getElementById("instText4").innerHTML = '3.<br />　アイコン画像すぐ上の「Delete」ボタンをクリックすることで、サーヴァントを個別に登録解除できます。<br />　「登録全解除」ボタンで登録している全てのサーヴァントを解除できます。<br /><br />';
				document.getElementById("instText5").innerHTML = '4.<br />　名前表示欄すぐ上の「Change」をクリックすることで、登録済みのサーヴァントを個別に変更できます。<br /><br />';
				document.getElementById("instText6").innerHTML = '5.<br />　「結果表示」で、設定内容に応じた計算結果が「計算結果」に表示されます。<br /><br />「不足分」は、「所持アイテム」との連携機能です。「計算結果」から現在所持している数を差し引き、不足している数を表示します。不足していない素材等は表示から消えます。<br />「所持アイテム」ボタンから設定できます。自身の今所持しているアイテムの数を入力してください。<br />　一度入力した内容はCookieで保存されます。Cookie機能がオフになっていると保存されません。<br /><br />「使用済」は、登録されているサーヴァントの左側の設定数値を参照しています。<br />「初期状態から現在の状態になるまで」を表示しています。<br />　たまには、サーヴァント達に投資してきた今までを振り返ってみるのもいいかもしれません。<br /><br />';
				document.getElementById("instText7").innerHTML = '6.<br />　同時に計算するサーヴァント数に制限はありません。<br />　ただし、端末の性能によっては一部機能の動作が重くなりますのでご注意ください。<br /><br />';
				document.getElementById("instText8").innerHTML = '7.<br />　新規実装でデータが不足しているサーヴァントなど、霊基再臨、またはスキル強化のアイテムデータが存在していない場合があります。<br />　また、イベント配布サーヴァントの霊基再臨に必要な特殊アイテムには対応していません。<br /><br />';
				document.getElementById("instText9").innerHTML = '8.<br />　各種必要素材、アイテムやＱＰ等のデータは、攻略ｗｉｋｉ等を参照しています。<br />　誤りを発見された場合、ご連絡ください。<br /><br />';
				document.getElementById("instText10").innerHTML = '9.<br />　サーヴァントによっては3つ目のスキルが無い場合がありますが、設定項目を非表示にするなどの対応はしていません。<br /><br />';
				document.getElementById("instText11").innerHTML = '10.<br />　ソロモンはジョークです。<br /><br />';
				document.getElementById("instText12").innerHTML = 'このページは「Fate/Grand Order」の開発・運営等とは一切関係のない、ただの１ユーザが趣味で作ったものです。このシミュレータを使用したことによる何らかの損害があっても一切責任は負いかねます。';
				document.getElementById("instText13").innerHTML = 'フォームに入力後、<br />このウインドウに必要なアイテムが表示されます。';
				
				$(".tools").css('font-family',"ヒラギノ角ゴシック");
				if( window.innerWidth < 480){
					$(".tools > #all-clear").css('font-size',"90%");
					$(".tools > #inventory-setting").css('font-size',"90%");
				} else {
					$(".tools > #all-clear").css('font-size',"110%");
					$(".tools > #inventory-setting").css('font-size',"110%");
				}
				
				if( showBox>1 ){
					for( i=1 ; i<=showBox ; i++ ){
						document.getElementById("servantName_"+i).innerText = Servantdb[numCalcServantId[i-1]-1].text;
					}
				} else if( showBox==1 ) {
					document.getElementById("servantName_1").innerText = Servantdb[numCalcServantId[showBox]-1].text;
				}
				$('input[value="Ascension"]').val("霊基再臨");
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#changeLng,#modal-overlay" ).fadeOut( "fast" , function(){
					
					/*[#modal-overlay]を削除する*/
					$('#modal-overlay').remove();
					}
				);
			});
			
			$("#lngEn").click(function(){
				/*
				$(".lngProgress1").text('EventTerm');
				$(".lngProgress2").text('TargetCompletionRate');
				$("#instBtn").text('Instr.');
				$(".lngResult1").text('days');
				$(".lngResult2").text('hrs');
				$(".lngResult3").text('mins');
				$(".lngItem1").text('Need');
				$(".lngItem2").html('Gain<br />/lap');
				$(".lngItem3").html('AP<br />/lap');
				$(".lngInst1").text('Instructions');
				$(".lngInst2").html('Introduction<br />This simulator is for event term only.<br />This instructions is translated by Google translation.<br />Sorry if wrong English.<br /><br />');
				$(".lngInst3").html('1.<br />"EventTerm" and "TargetCompletionRate" are displayed on the process bar at the top of the page.<br/>The upper bar visually displays "event term".<br />The internal blue bar represents the passage of time.<br />"The blue bar has reached the right end" = "The event end time has come"<br /><br />The lower bar visually displays "target completion rate".<br />"Target completion rate" is how many items you can collect within the remaining time of the event.<br />"100%" = "Remaining time is enough" = "You can collect all targets"<br /><br />');
				$(".lngInst4").html('2.<br />【Player Settings】<br />When you select the "LV", the "MaxAP" can be automatically set.<br />Of course, you can input directly into "MaxAP".<br />"Saint Quartz" or "Gold Apple" input field, set the number to use during the event term.<br /><br />');
				$(".lngInst5").html('3.<br />【Item Settings】<br />Input the number "Need", "Gain / lap" and "AP / lap".<br /><br /><br/>');
				$(".lngInst6").html('※important point※<br />This simulator calculates "necessary regenerate time".<br />This simulator does not consider the time required for the quest laps.<br />If you plan your deadline with this simulator, <br />with high probability <font color="red">you will not be able to collect item in event term</font>.<br />Be careful.<br /><br /><br /><br />');
				$(".lngInst7").html('This page has nothing to do with the development / management etc of "Fate / Grand Order", just one user made it with hobby.<br />Even if there is any damage caused by using this simulator, we can not take responsibility at all.<br />Please contact us via Twitter account for this website.<br />');
				*/
				language = 1;
				document.getElementById("all-clear").innerText = "AllDelete";
				document.getElementById("add-servant2").innerHTML = "Look up<br>Servant";
				document.getElementById("add-reverse").innerHTML = "Reverse<br>Look up";
				document.getElementById("add-status").innerHTML = "Attributes<br>Look up";
				document.getElementById("modal-open").innerText = "Result";
				document.getElementById("inventory-setting").innerText = "Inventory";
				document.getElementById("show-inst").innerText = "Inst.";
				
				/*
				document.getElementsByClassName("result_title").innerText = "Result";
				*/
				$(".personalModeration").css('width','80px');
				$(".personalInsanity").css('width','60px');
				$(".personalSummer").css('width','60px');
				document.getElementById("check-title").innerText = "Confirmation";
				$("span.select-title").text("Look up Servant");
				$("span.reverse-title").text("Reverse Look up Servant");
				$("span.status-title").text("Attributes Look up Servant");
				$("span.inv-title").text("Inventory");
				$("span.result_title").text("Result");
				
				$("label.Result").text("Result");
				$("label.Required").text("Shortage");
				$("label.Consumed").text("Consumed");
				
				$("label.Ascention").text("Ascention");
				$("label.skillReinforce").text("SkillReinforce");
				
				$("#titleFilterAttr").text("Attributes");
				$("#titleFilterNP").text("Noble Phantasm");
				$("#titleFilterSkills").text("Skills");
				$("#filTitleReset").text("Reset All Settings");
				
				$("label.policyLaw").text("Lawful");
				$("label.policyNeutral").text("Neutral");
				$("label.policyChaos").text("Chaotic");
				
				$("label.personalGood").text("Good");
				$("label.personalModeration").text("Neutral");
				$("label.personalBad").text("Evil");
				$("label.personalInsanity").text("Mad");
				$("label.personalBride").text("Bride");
				$("label.personalSummer").text("Smmr");
				
				$("label.attributeSky").text("Sky");
				$("label.attributeEarth").text("Earth");
				$("label.attributeMan").text("Man");
				$("label.attributeStar").text("Star");
				$("label.attributeBeast").text("Beast");
				
				$("label.etcDivinity").text("Divine");
				$("label.etcDragon").text("Dragon");
				$("label.etcRoma").text("Roman");
				$("label.etcSavageBeast").text("Beast");
				$("label.etcRiding").text("Riding");
				$("label.etcLove").text("Beloved");
				$("label.etcDevilish").text("Demon");
				$("label.etcDavinci").text("Davinci");
				$("label.etcFace").text("Saberface");
				$("label.etcArthur").text("Arthur / Artoria");
				
				$("label.np_typeQ").text("NP Q");
				$("label.np_typeA").text("NP A");
				$("label.np_typeB").text("NP B");
				
				$("label.np-effectA").text("All");
				$("label.np-effectO").text("One");
				$("label.np-effectS").text("Support");
				
				$("label.np_EXmale").text("EX Male");
				$("label.np_EXfemale").text("EX Female");
				$("label.np_EXdivine").text("EX Divine");
				$("label.np_EXdragon").text("EX Dragon");
				$("label.np_EXpoison").text("EX Poison");
				$("label.np_EXriding").text("EX Riding");
				$("label.np_EXlove").text("EX Beloved");
				$("label.np_EXevil").text("EX Evil");
				$("label.np_EXdemonic").text("EX Demonic");
				$("label.np_EXskyearth").text("EX SkyEarth");
				$("label.np_EXservant").text("EX Servant");
				$("label.np_EXface").text("EX Saberface");
				$("label.np_EXarthur").text("EX Arthur");
				$("label.np_EXsaber").text("EX Saber");
				
				$("label.s_EXmale").text("EX Male");
				$("label.s_EXdivine").text("EX Divine");
				$("label.s_EXdragon").text("EX Dragon");
				$("label.s_EXroma").text("EX Roman");
				$("label.s_EXsavagebeast").text("EX Beast");
				$("label.s_EXevil").text("EX Evil");
				$("label.s_EXdemonic").text("EX Demonic");
				$("label.s_EXskyearth").text("EX SkyEarth");
				$("label.s_EXhuman").text("EX Human");
				$("label.s_EXhumanoid").text("EX Humanoid");
				$("label.s_EXundead").text("EX Undead");
				$("label.s_EXdemon").text("EX Demon");
				$("label.s_EXlarge").text("EX LargeEnemies");
				$("label.s_EXsaber").text("EX Saber");
				
				$("label.reset_filter").text("Reset");
				
				$("#filter-policy1").text("Lawful");
				$("#filter-policy2").text("Neutral");
				$("#filter-policy3").text("Chaotic");
				
				$("#filter-personal1").text("Good");
				$("#filter-personal2").text("Neutral");
				$("#filter-personal3").text("Evil");
				$("#filter-personal4").text("Mad");
				$("#filter-personal5").text("Bride");
				$("#filter-personal6").text("Summer");
				
				$("#filter-attribute1").text("Sky");
				$("#filter-attribute2").text("Earth");
				$("#filter-attribute3").text("Man");
				$("#filter-attribute4").text("Star");
				$("#filter-attribute5").text("Beast");
				
				$("#filter-divinity").text("Divine");
				$("#filter-dragon").text("Dragon");
				$("#filter-roma").text("Roman");
				$("#filter-savagebeast").text("Beast");
				$("#filter-riding").text("Riding");
				$("#filter-love").text("Beloved");
				$("#filter-devilish").text("Demon");
				$("#filter-davinci").text("Davinci");
				$("#filter-face").text("Saberface");
				$("#filter-arthur").text("Arthur");
				
				$("#filter-nptype1").text("NP Q");
				$("#filter-nptype2").text("NP A");
				$("#filter-nptype3").text("NP B");
				
				$("#filter-npeffect1").text("NP All");
				$("#filter-npeffect2").text("NP One");
				$("#filter-npeffect3").text("NP Support");
				
				$("#filter-npEXmale").text("NP EX Male");
				$("#filter-npEXfemale").text("NP EX Female");
				$("#filter-npEXdivine").text("NP EX Divine");
				$("#filter-npEXdragon").text("NP EX Dragon");
				$("#filter-npEXpoison").text("NP EX Poison");
				$("#filter-npEXriding").text("NP EX Riding");
				$("#filter-npEXlove").text("NP EX Beloved");
				$("#filter-npEXevil").text("NP EX Evil");
				$("#filter-npEXdemonic").text("NP EX Demonic");
				$("#filter-npEXskyearth").text("NP EX Sky Earth");
				$("#filter-npEXservant").text("NP EX Servant");
				$("#filter-npEXface").text("NP EX Saberface");
				$("#filter-npEXarthur").text("NP EX Arthur");
				$("#filter-npEXsaber").text("NP EX Saber");
				
				$("#filter-sEXmale").text("Skill EX Male");
				$("#filter-sEXdivine").text("Skill EX Divine");
				$("#filter-sEXdragon").text("Skill EX Dragon");
				$("#filter-sEXroma").text("Skill EX Roman");
				$("#filter-sEXsavagebeast").text("Skill EX Beast");
				$("#filter-sEXevil").text("Skill EX Evil");
				$("#filter-sEXdemonic").text("Skill EX Demonic");
				$("#filter-sEXskyearth").text("Skill EX SkyEarth");
				$("#filter-sEXhuman").text("Skill EX Human");
				$("#filter-sEXhumanoid").text("Skill EX Humanoid");
				$("#filter-sEXundead").text("Skill EX Undead");
				$("#filter-sEXdemon").text("Skill EX Demon");
				$("#filter-sEXlarge").text("Skill EX LargeEnemies");
				$("#filter-sEXsaber").text("Skill EX Saber");
				
				$("h2.instTitle").text("Instructions");
				document.getElementById("instText1").innerHTML = '　This simulator is material calculator for Fate/ Grand Order.<br />　This instructions is translated by Google translation.<br />　Sorry if wrong English.<br /><font color="red">　When using on a smartphone, we recommend in portrait orientation.</font><br /><br />';
				document.getElementById("instText2").innerHTML = '1.<br />　When you register a servant, you click the "Look up Servant" button, "+" icon or "Reverse Look up" button.<br />　You can look up the servants by class from "Look up Servant" button or "+" icon. The servants icon will be displayed in descending order of reality.<br />　You can reverse look up from the material that the servant uses for "Ascension" or "Skill Reinforcement" with the "Reverse Look up" button.<br /><br />';
				document.getElementById("instText3").innerHTML = '2.<br />　After registering the servants, set the value of "Ascension" and "SKILL". Calculate from left to right of the set value.<br /> As an input assist function, you can exclude items individually from the calculation by clicking "Ascension" or "SKILL".<br />　You can set it instantly.<br />　All your settings are automatically saved in the "Cookie". If the "Cookie" function is turned off, we can not save.<br /><br />';
				document.getElementById("instText4").innerHTML = '3.<br />　You can unregister servants individually by click the "Delete" button above the icon.<br />　You can unregister all servants by click "AllDelete" button.<br /><br />';
				document.getElementById("instText5").innerHTML = '4.<br />　You can change registered servants individually by click "Change".<br /><br />';
				document.getElementById("instText6").innerHTML = '5.<br />　When you click "Result", the calculation result of the registered content is displayed in "Result".<br /><br />　"Shortage" is a linkage function with "Inventory".<br />　"Shortage" displays the missing number by subtracting the number of items you have from "Result". Not missing materials will disappear from the display.<br />　You can set it by click the "Inventory" button. Please enter the number of items you have now.<br /><br />　"Consumed" is calculated by referring to the set value on the left side of the registered servant.<br />　In other words, "the number of materials consumed from the initial state to the current state" is displayed.<br />　You can look back on materials have been invested in servants by "Consumed".<br /><br />';
				document.getElementById("instText7").innerHTML = '6.<br />　You can register and calculate all the servants at the same time.<br />　However, some functions may be delayed depending on your terminal performance. Please be careful.<br /><br />';
				document.getElementById("instText8").innerHTML = '7.<br />　There may be a shortage of data on "Ascension" or "SKILL" for reasons a new servant coming.<br />　Moreover, we do not correspond to special items of event.<br /><br />';
				document.getElementById("instText9").innerHTML = '8.<br />　All data used for calculation refers to the wiki. If you find a mistake in the data, please contact us.<br /><br />';
				document.getElementById("instText10").innerHTML = '9.<br />　Some servants do not have the third skill, but the setting items are not hidden.<br /><br />';
				document.getElementById("instText11").innerHTML = '10.<br />　Solomon is unimplemented. This is joke.<br /><br />';
				document.getElementById("instText12").innerHTML = '　This page has nothing to do with the development / management etc of "Fate / Grand Order", just one user made it with hobby.<br />　Even if there is any damage caused by using this simulator, we can not take responsibility at all.';
				document.getElementById("instText13").innerHTML = '　NO DATA';
				
				$(".tools").css('font-family',"Times New Roman");
				if( window.innerWidth < 480){
					$(".tools > #all-clear").css('font-size',"90%");
					$(".tools > #inventory-setting").css('font-size',"90%");
				} else {
					$(".tools > #all-clear").css('font-size',"110%");
					$(".tools > #inventory-setting").css('font-size',"110%");
				}
				
				if( showBox>1 ){
					for( i=1 ; i<=showBox ; i++ ){
						document.getElementById("servantName_"+i).innerText = Servantdb[numCalcServantId[i-1]-1].text2;
					}
				} else if( showBox==1 ) {
					document.getElementById("servantName_1").innerText = Servantdb[numCalcServantId[showBox-1]-1].text2;
				}
				$('input[value="霊基再臨"]').val("Ascension");
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#changeLng,#modal-overlay" ).fadeOut( "fast" , function(){
					
					/*[#modal-overlay]を削除する*/
					$('#modal-overlay').remove();
					}
				);
			});
			
			/*[#modal-overlay]、または[#modal-close]をクリックしたら…*/
			$( "#modal-overlay" ).unbind().click( function(){
				
				/*[#modal-content]と[#modal-overlay]をフェードアウトした後に…*/
				$( "#changeLng,#modal-overlay" ).fadeOut( "fast" , function(){
					
					/*[#modal-overlay]を削除する*/
					$('#modal-overlay').remove();
					}
				);
			});
		}
	);
	
	$(".custom-select").each(function() {
		var classes = $(this).attr("class"),
		id = $(this).attr("id"),
		name = $(this).attr("name");
		var template =  '<div class="' + classes + '">';
		template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
		template += '<div class="custom-options">';
		$(this).find("option").each(function() {
			template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		});
		template += '</div></div>';
		
		$(this).wrap('<div class="custom-select-wrapper"></div>');
		$(this).hide();
		$(this).after(template);
	});
	$(".custom-option:first-of-type").hover(function() {
		$(this).parents(".custom-options").addClass("option-hover");
	}, function() {
		$(this).parents(".custom-options").removeClass("option-hover");
	});
	$(".custom-select-trigger").on("click", function() {
		$('html').one('click',function() {
			$(".custom-select").removeClass("opened");
		});
		$(this).parents(".custom-select").toggleClass("opened");
		event.stopPropagation();
	});
	$(".custom-option").on("click", function() {
		$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
		$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
		$(this).addClass("selection");
		$(this).parents(".custom-select").removeClass("opened");
		$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
	});
	
	var timer = false;
	$(window).resize(function(){
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if( window.innerWidth < 480){
				$(".tools > #all-clear").css('font-size',"90%");
				$(".tools > #inventory-setting").css('font-size',"90%");
			} else {
				$(".tools > #all-clear").css('font-size',"110%");
				$(".tools > #inventory-setting").css('font-size',"110%");
			}
		}, 200);
	});
	
	/* pageTopボタン */
	var topBtn=$('#pageTop');
	
	/* ボタンの表示設定 */
	$(window).scroll(
		function(){
			if($(this).scrollTop()>80){
				/* 画面を80pxスクロールしたら、ボタンを表示する */
				topBtn.fadeIn();
			} else {
				/* 画面が80pxより上なら、ボタンを表示しない */
				topBtn.fadeOut();
			}
		}
	);
	
	/* ボタンをクリックしたら、スクロールして上に戻る */
	topBtn.click(
		function(){
			$('body,html').animate({scrollTop: 0},500);
			return false;
		}
	);
	$(window).keydown(
		function(event){
			/* [Tab]キーのみfalseを返却してキー入力処理をキャンセル */
			if(event.keyCode == 9){
				return false;
			}
		}
	);
	
});
