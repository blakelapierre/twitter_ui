// https://stackoverflow.com/a/49392671
import * as process from 'process';

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach(event => {
  process.on(<any>event, cleanUpServer);
});

function cleanUpServer () {
  saveData();
  return true;
}

const {
  CONSUMER_API_KEY,
  CONSUMER_API_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  port
} = process.env;

const keys = {
  consumer_key: CONSUMER_API_KEY,
  consumer_secret: CONSUMER_API_SECRET,
  token: ACCESS_TOKEN,
  token_secret: ACCESS_TOKEN_SECRET
};

const TwitterKeys = {
  consumer_key: CONSUMER_API_KEY,
  consumer_secret: CONSUMER_API_SECRET,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET
};

const follow = [
  // Trump
  '25073877',
  // Reps
  '838462994','818554054309715969','817076257770835968','811986281177772032','90639372','1240107944','1444015610','2253968388','76452765','2861616083','234469322','233693291','2968007206','1089859058','303861808','236279233','816157667882373120','29501253','24913074','239949176','942156122','22545491','2974648323','47798449','15764644','385429543','246769138','248699486','245451804','267938462','312134473','3044993235','806583915012046854','31611298','432771620','1071900114','2433737761','1060984272','1060487274','28599820','14275291','1140648348','234797704','463132556','281540744','242873057','22509548','85396297','25086658','26051676','137794015','249410485','2914163523','2973870195','816030424778543104','20467163','1339931490','789244177','1065995022','1074101017','234812598','384913290','267854863','233949261','937723303','310310133','1045110018','2293131060','237862972','2696643955','22012091','747806211983179776','124224165','2914571740','242426145','516880804','1262814457','14135426','2863006655','816047090849746945','163570705','815310506596691968','164369297','240812994','3353670647','1072467470','252819323','26778110','1531521632','18967498','239871673','2953922782','252249233','581141508','211420609','148453195','211530910','2966758114','18773159','20545793','236916916','1092757885','1155212191','4304448314','254082173','1058345042','818536152588238849','15856366','74198348','231510077','377534571','235251868','278145569','188019606','110545675','776664410','26424123','816284664658874368','39249305','162069635','52503751','462143773','1134292500','235190657','2976598347','168502762','15356407','78445977','1074129612','1077446982','2929491549','148006729','2933760046','18030431','816181091673448448','210926192','22669526','815966620300480514','1068499286','17976923','815733290955112448','240427862','2976606250','16102244','2962868158','37920978','242926427','2724095695','818472418620608512','193732179','1128514404','48117116','2962891515','224294785','33977070','18805303','24195214','1260172386','42337890','2852998461','2975091705','1074412920','14984637','305216911','816652616625168388','2966570782','479872233','550401754','114607567','242892689','229197216','19407835','2853309155','818975124460335106','816111677917851649','50452197','2964877294','17544524','1009269193','240760644','20552026','1135486501','237299871','975200486','381152398','816298918468259841','56864092','246341769','815241612154417152','1378000346','1880674038','1045853744','233842454','510516465','1305596696','811632636598910976','252819642','824281456079933442','796736612554117120','1055907624','2862577383','1089334250','3026622545','950783972','193872188','1080844782','1209417007','798973032362606600','50152441','1058917562','3686482216','2970279814','814103950404239360','168673083','808416682972770304','3018670151','232992031','30216513','305620929','33655490','787373558','20015903','2953974395','993153006','1058807868','2964287128','29450962','314205957','2964949642','88806753','2965083477','24745957','234014087','76132891','1055730738','1080509366','15954997','1037321378','37094727','364415553','235373000','2382685057','1069124515','814179031956488192','796183515998068736','19139963','1222257180','23600262','199325935','1071840474','38254095','161411080','17513304','41417564','442824717','29766367','23970171','1077121945','816833925456789505','1071102246','1092979962','2932617195','19739126','584012853','25781141','2951574214','816131319033950208','140519774','558769636','817050219007328258','155669457','613725908','18277655','237312687','797201048490430465','122174004','963480595','234057152','15394954','237814920','248735463','249348006','806906355214852096','15600527','1055685948','2962994194','296245061','249288197','235312723','976969338','111635527','1289319271','2962813893','816282029276938240','518644221','2847221717','2750127259','2968451607','111635980','1061385474','82453460','1410590874','1058256326','51228911','33563161','16256269','1060370282','816705409486618624','467823431','127941167','1382011333','258900199','1048784496','402719755','161791703','19929362','819744763020775425','2963445730','18166778','912608010','74508260','22523087','32010840','935368364','241207373','742735530287304704','242376736','240363117','18909919','153486399','80612021','156333623','817138492614524928','2560169238','20053279','2966205003','221792092','1058717720','295685416','3122099613','1051446626','23124635','40302336','995193054','161743731','18696134','27676828','1051127714','432676344','31801993','237763317','1072008757','816303263586914304','24735461','126171100','237348797','1058051748','1623308912','164007407','950328072','13491312','815931811348017152','1058460818','22055226','1883356866','2916086925','23976316','240393970','23712174','2966765501','1155335864','15751083','935033864','404132211','63169388','153944899','1499993378','112740986','2930635215','816719802328715264','234022257','58928690','2964526557','19926675','22527499','24183358','18566912','17800215','2970462034','1083448909','237750442','1206227149','18916432','2953713339','851621377','242772524','299883942','3091316093','84119348','234822928','815952318487298048','960962340','219429281','33576489','138770045','28602948','1064206014','36948268','190328374','19658173','3317799825','2914515430','37007274','818713465653051392','823552974253342721','828977216595849216','837722935095930883','843636970538618880','827279765287559171','818948638890217473','815985039485837312','854715071116849157','344972339','818460870573441028','15673703','26574496','398193180','61886317','36686040','22812754','816012124505931780','855240223432769538','1849261916','2869746172','1243902714',
  // Senators
  '24905240','239548513','172858784','432895323','2167097881','803694179079458816','262756641','29442313','2964174789','18632666','193794406','946549322','249787913','1099199839','11651202','221162525','234128524','20597460','202206694','2853793517','2955485182','600463589','296361085','19394188','19726613','293131808','476256944','57065141','76649729','486694111','10615232','811313565760163844','75364211','109071031','266133081','250188760','247334603','109287731','1058520120','242555999','968650362','43910797','73303753','60828944','339822881','225921757','1074480192','291756142','236511574','16056306','78403308','20546536','14845376','229966028','1068481578','72198806','171598736','18137749','555474658','21157904','18915145','515822213','18695134','5558312','92186819','234374703','1071402577','224285242','76456274','2962923040','1262099252','1096059529','88784440','970207298','278124059','2863210809','171968009','55677432','235217558','18061669','117501995','1074518754','216503958','264219447','33537967','1061029050','2856787757','15324851','7429102','13218102','233737858','242836537','17494010','816683274076614656','29201047','21269970','21111098','382791093','216881337','2891210047','217543151','21406834'
];

import * as TS from 'twitter-stream-api';
import * as Twitter from 'twitter';
import * as ws from 'ws';
import * as https from 'https';
import * as http from 'http';

import * as fs from 'fs';

const cert = `-----BEGIN CERTIFICATE-----
MIIEnTCCA4WgAwIBAgITYLr/Jvzfx2x7kTJd3NOqi7SyPDANBgkqhkiG9w0BAQsF
ADCBizELMAkGA1UEBhMCVVMxGTAXBgNVBAoTEENsb3VkRmxhcmUsIEluYy4xNDAy
BgNVBAsTK0Nsb3VkRmxhcmUgT3JpZ2luIFNTTCBDZXJ0aWZpY2F0ZSBBdXRob3Jp
dHkxFjAUBgNVBAcTDVNhbiBGcmFuY2lzY28xEzARBgNVBAgTCkNhbGlmb3JuaWEw
HhcNMjAwMTIwMjA1NTAwWhcNMzUwMTE2MjA1NTAwWjBiMRkwFwYDVQQKExBDbG91
ZEZsYXJlLCBJbmMuMR0wGwYDVQQLExRDbG91ZEZsYXJlIE9yaWdpbiBDQTEmMCQG
A1UEAxMdQ2xvdWRGbGFyZSBPcmlnaW4gQ2VydGlmaWNhdGUwggEiMA0GCSqGSIb3
DQEBAQUAA4IBDwAwggEKAoIBAQC/GbLXQYZKenIrkLwkRrmIN0yrUp6mPz2nPZcn
+SyAyCfiUsxqqeBHBDQW/CE8IGcWkqcEYWVhxVabkr/hFYNYq8p0gf/f3nUFN/Kf
XiNdTy8MiS64wyG0RyBL9gAxTV4SlfnGpNN6NhS9g0j67etl1a/QgFwaUWspi70X
GP7nwKdBmABwykqYGvNtpTgx4HpVuR5u+1Hg+hxwPQDnPWDRjPSexX3s+Fgd5Nko
pdQ+MOb0VGp7c3nIusl6WPmlkx0bNg4vRgq+/pYHqK9Iz93E4A2xiJMX+vD+KlX+
gfTOCxtAtKfyUVhOEO7JLi6A8kq+Htk6U6r1IK9mK23Reo7rAgMBAAGjggEgMIIB
HDAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwIGCCsGAQUFBwMB
MAwGA1UdEwEB/wQCMAAwHQYDVR0OBBYEFEy6ujuLKYLIcKUEAZJIJh2VDaupMB8G
A1UdIwQYMBaAFCToU1ddfDRAh6nrlNu64RZ4/CmkMEAGCCsGAQUFBwEBBDQwMjAw
BggrBgEFBQcwAYYkaHR0cDovL29jc3AuY2xvdWRmbGFyZS5jb20vb3JpZ2luX2Nh
MCEGA1UdEQQaMBiCCyouY2hhbi5iZXN0ggljaGFuLmJlc3QwOAYDVR0fBDEwLzAt
oCugKYYnaHR0cDovL2NybC5jbG91ZGZsYXJlLmNvbS9vcmlnaW5fY2EuY3JsMA0G
CSqGSIb3DQEBCwUAA4IBAQBpY9EP9QzlxsBar5kVseY7Pa8efLDOk1ifPXnpGAao
c6j2lUz8PbC4d5kN4HxnAvt7BsCTw2ILcBnEiTpX0c04+BHMyuuNcYZQj91iRsnM
km9Y1BmxemCEcKai6m5nGNdRI/68gEpryxdc+X/qtwoUXS/j8nEKNgXtWX5a6Gi3
QqRNGP12AHO3JIdFBtBkFSlPguuOvZIvWHTtZzmUu11+9J1PLIP0wZj14CELc682
uD8ECNuVpGB28pGUdPlLo5eCeAOq2fKzYS1pGNzhM1p12Pr5SOBUfH4xfI0lvhoa
qFcF44Lmdh5SrfE9Uwq8K5tOaSiAEJH5uRRbjIVFjpFL
-----END CERTIFICATE-----`,//fs.readFileSync('cert'), 
      key = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/GbLXQYZKenIr
kLwkRrmIN0yrUp6mPz2nPZcn+SyAyCfiUsxqqeBHBDQW/CE8IGcWkqcEYWVhxVab
kr/hFYNYq8p0gf/f3nUFN/KfXiNdTy8MiS64wyG0RyBL9gAxTV4SlfnGpNN6NhS9
g0j67etl1a/QgFwaUWspi70XGP7nwKdBmABwykqYGvNtpTgx4HpVuR5u+1Hg+hxw
PQDnPWDRjPSexX3s+Fgd5NkopdQ+MOb0VGp7c3nIusl6WPmlkx0bNg4vRgq+/pYH
qK9Iz93E4A2xiJMX+vD+KlX+gfTOCxtAtKfyUVhOEO7JLi6A8kq+Htk6U6r1IK9m
K23Reo7rAgMBAAECggEAD1/JaBDw9V/5fHDF+iMofQF57RSWB+jxlFlbpk8hGfFA
aDBiGri0/vGjITBCmjw/Hu1Ie408Y0vFhnmdb0XUTddwT8Q/qiqS/or8PX8M2E5t
ChSlSh8EwKSyP/o4FL9VMKiZMjaDfwMH0yFTR0DJ3eT9oogZINLpDKwd19ReeZV+
KF/zNYQtit3MSZ8LKtDUoGXahoN38zPYPTzU8CKY/7XhN7ul+HJOvaYwHi5/99vl
QqLNDcZzbe5h/Mh6BE/sZKNfFcnfhGGDnoQgn44gLQ3ttGCJ8/9ig2SQtOijH/YJ
iH0TSm1kY+pAhGizNyuazcPdb59hOr9cDM/KwJ8E6QKBgQDeEvYQEJGt9pZUhc2o
zDhJiVXc/cwNMjlSFoploIDV2og7vh8JY3523R+tYcTm/bJ8dRcteYzLepUmrgKX
XRMvFgnAkab/ZwJgXQY+y1Zzrs2sKDnVDkpFtl/hkm2P4ZMjq4Y9Hqd8nKZQHBRW
mFZKUs4KsBn8DeSdAr8lzVO4qQKBgQDcS2U+HLZpc/t5FgyXV6xxHwDEl6nw97De
G5gKAUEWlzpH0IM4NEyYKEc71Ipx9NRNSlY7++3CgmZpIepQFfVGPVANXwmUsKrP
JMixbAgHruPOKSKK1glmkDR90ZCRqUlbEXlMSUzvXd9rWNNDrhxa22TZibl1s1/2
gpopW9OjcwKBgB1ipOy7RIugdYP5sJ0FaO1SHup/KuEUJEGYefe4pVOm9x/wqGq1
n6Za3DY1Gbj3GQce91ItI1RJhDL6E52z0zYH1IKGw3JITygxJwJoJahpGQ4OxJhM
q8dNuqI+ngDL+IxfxgOQatkyYU94Z7iNr91l153Sb53KuNWN5305DjsBAoGBAJ/y
ni/a6Rbn/06Lk9jO74Wy3PvgoqMzNFgP8PRStM+SPd6mpp/IWVSg6hem2l6jRQJZ
VwN2h8sSowjydw5u4wd8vQL4Xhx3qY19R7qKlcn+Uaj+dPYZMfol+fbgkfcw0vIs
XcXl8tZZcj6e38XkRPIzGaZZOS8cbjCt4wDki2XBAoGAKWrlSKV7ny+vFgi5xw3E
KAP2LkDKqaLbxH19St2+jfXv+J+U0VjTfJ0cZx+XvBpEEO2CvEmOvoETZHi2XMBV
5dVLCjKeCCErDdTe81E+XYFsF2mqqLflLcs/SRqhNLR6cWvaRmiMHd4TPo4YFWeN
lAZ3mly/e7xheDiqTs8BiPY=
-----END PRIVATE KEY-----`;//fs.readFileSync('key');

const server = http.createServer()
// const server = https.createServer({cert, key})


const Server = new ws.Server({server});

server.listen(port || 7331);

console.log('listening on', port || 7331);

const wordCounts = {};
const tweetCounts = {};
const tweets = []; // store ids as key?
const home = [];

const nSkipWordPairCounts = {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}};

loadData();

function saveData() {
  const data = {
    wordCounts,
    tweetCounts,
    tweets,
    nSkipWordPairCounts
  };

  return fs.writeFileSync('tweet_data', JSON.stringify(data));
}

function loadData() {
  try {
    const data = JSON.parse(fs.readFileSync('tweet_data').toString());

    Object.assign(wordCounts, data.wordCounts);
    Object.assign(tweetCounts, data.tweetCounts);
    Object.assign(nSkipWordPairCounts, data.nSkipWordPairCounts);
    tweets.push(...data.tweets);

    console.log('data loaded');
  }
  catch (e) {
    console.log('error loading data', e);
  }
}

const twitter = new Twitter(TwitterKeys);
const TwitterStream = new TS(keys, false);

let since_id;
// const maxRequestsPerDayPerEndpoint = 100000;
// const requestFrequency = maxRequestsPerDayPerEndpoint / (24 * 60 * 60);
const requestFrequency = 1 / 60;
const requestDelay = 1 / requestFrequency;

console.log(requestFrequency, requestDelay);

start(getHomeTimeline, requestDelay);

function start(fn, delay) {
  fn();
  setInterval(fn, delay * 1000);
}

function getHomeTimeline() {
  const count = 200;
  console.log(count, since_id);
  if (since_id !== undefined) {
  console.log('getting home timeline');
    twitter.get('statuses/home_timeline', {count, 'since_id': since_id, 'tweet_mode': 'extended'}, (error, data, response) => {
      if (error) return console.log('get home_timeline error', error);

      console.log('home data', data);

      if (data.length > 0) since_id = data[data.length - 1].id_str;

      home.unshift(data);

      sendToWebSockets(['home data', data]);
    });
  }
  else {
    console.log('getting home timeline no since_id');
    twitter.get('statuses/home_timeline', {'count': count, 'tweet_mode': 'extended'}, (error, data, response) => {
      if (error) return console.log('get home_timeline error', error);

      console.log('home data', data);

      if (data.length > 0) since_id = data[data.length - 1].id_str;

      home.unshift(data);
      sendToWebSockets(['home data', data]);
    });
  }
}

// let stream;
// twitter.get('friends/ids', (error, {ids}, response) => {
//   const count = 100;
//   console.log('friends', ids.slice(0, count));
//   console.log(ids.length);
//   if (stream) stream.destroy();

//   const req = https.request('https://stream.twitter.com/1.1/statuses/filter.json', {
//     'method': 'POST'
//   }, response => {

//   })

//     // stream = twitter.stream('statuses/home_timeline', {
//     // follow: follow.join(','),
//     // follow: ids.slice(0, count).map(id => id.toString()).join(','), 
//     //'follow': ids.map(id => id.toString()).join(',')//,
//     //,'method': 'post'
//     //tweet_mode: 'extended'
//   // });

//   stream.on('data', data => {
//     console.log('twitter data', data);

//     const d = JSON.parse(data.toString());

//     if (!d.user) {
//       console.log('unknown data', d);

//       if (d.delete) {
//         const id_str = d.delete.status.id_str;

//         if (tweets[id_str]) {
//           delete tweets[id_str];
//           sendToWebSockets(['delete', id_str]);
//         }
//       }
//     }

//     else if (follow.indexOf(d.user.id_str) >= 0 && d.extended_tweet) {
//       console.log(d);
//       const author = d.user.name;
//       const text = d.extended_tweet.full_text;

//       console.log(`${author}: ${text}`);

//       sendToWebSockets(['tweet', {author, text, logTime: new Date().getTime()}]);

//       logWords(text);
//       logTweet(author, text);
//     }
//   });

//   stream.on('error', error => console.error('twitter error', error));

//   // TwitterStream.on('connection aborted', error => console.error('TwitterStream aborted', error));
//   // TwitterStream.on('connection error network', error => console.error('TwitterStream error network', error));
//   // TwitterStream.on('connection error stall', error => console.error('TwitterStream error stall', error));
//   // TwitterStream.on('connection error http', error => console.error('TwitterStream error http', error));
//   // TwitterStream.on('connection error unknown', error => console.error('TwitterStream error unknown', error));
//   // TwitterStream.on('connection rate limit', error => console.error('TwitterStream error', error));

//   // TwitterStream.on('connection success', event => {
//   //   console.log('connected', event);
//   // });

//   // TwitterStream.on('data', data => {
//   //   const d = JSON.parse(data.toString());

//   //   if (!d.user) {
//   //     console.log('unknown data', d);

//   //     if (d.delete) {
//   //       const id_str = d.delete.status.id_str;

//   //       if (tweets[id_str]) {
//   //         delete tweets[id_str];
//   //         sendToWebSockets(['delete', id_str]);
//   //       }
//   //     }
//   //   }

//   //   else if (follow.indexOf(d.user.id_str) >= 0 && d.extended_tweet) {
//   //     console.log(d);
//   //     const author = d.user.name;
//   //     const text = d.extended_tweet.full_text;

//   //     console.log(`${author}: ${text}`);

//   //     sendToWebSockets(['tweet', {author, text, logTime: new Date().getTime()}]);

//   //     logWords(text);
//   //     logTweet(author, text);
//   //   }
//   // });
// });

// let stream;
// twitter.get('friends/ids', (error, {ids}, response) => {
//   const count = 100;
//   console.log('friends', ids.slice(0, count));
//   console.log(ids.length);
//   if (stream) stream.destroy();
//   stream = TwitterStream.stream('statuses/filter', {
//     // follow: follow.join(','),
//     // follow: ids.slice(0, count).map(id => id.toString()).join(','), 
//     follow: ids.map(id => id.toString()).join(','), 
//     method: 'post',
//     tweet_mode: 'extended'
//   });

//   TwitterStream.on('connection aborted', error => console.error('TwitterStream aborted', error));
//   TwitterStream.on('connection error network', error => console.error('TwitterStream error network', error));
//   TwitterStream.on('connection error stall', error => console.error('TwitterStream error stall', error));
//   TwitterStream.on('connection error http', error => console.error('TwitterStream error http', error));
//   TwitterStream.on('connection error unknown', error => console.error('TwitterStream error unknown', error));
//   TwitterStream.on('connection rate limit', error => console.error('TwitterStream error', error));

//   TwitterStream.on('connection success', event => {
//     console.log('connected', event);
//   });

//   TwitterStream.on('data', data => {
//     const d = JSON.parse(data.toString());

//     if (!d.user) {
//       console.log('unknown data', d);

//       if (d.delete) {
//         const id_str = d.delete.status.id_str;

//         if (tweets[id_str]) {
//           delete tweets[id_str];
//           sendToWebSockets(['delete', id_str]);
//         }
//       }
//     }

//     else if (follow.indexOf(d.user.id_str) >= 0 && d.extended_tweet) {
//       console.log(d);
//       const author = d.user.name;
//       const text = d.extended_tweet.full_text;

//       console.log(`${author}: ${text}`);

//       sendToWebSockets(['tweet', {author, text, logTime: new Date().getTime()}]);

//       logWords(text);
//       logTweet(author, text);
//     }
//   });
// });





Server.on('connection', socket => {
  console.log('ws connection');

  home.every(segment => socket.readyState === ws.OPEN ? (socket.send(JSON.stringify(['home', segment])), true) : false);
  // if (socket.readyState === ws.OPEN) {
  //   //socket.send(JSON.stringify(['tweets', tweets]));
  //   //socket.send(JSON.stringify(['home', home]));
  //   home.forEach(segment => socket.send(JSON.stringify(['home', segment])));
  // }
});

function logTweet (author, text) {
  tweetCounts[author] = (tweetCounts[author] || 0) + 1;
  tweets.push({author, text, logTime: new Date().getTime()});
}

function logWords (text) {
  const words = text.split(' '); // may be other kinds of words, should maybe check for

  words.forEach(word => (wordCounts[word] = (wordCounts[word] || 0) + 1));

  for (let i = 0; i <= 5; i++) logNSkipWordPairs(words, i);
}

function logNSkipWordPairs (words, n) {
  for (let i = 0; i < words.length - n - 1; i += 2 + n) {
    const first = nSkipWordPairCounts[n][words[i]] = nSkipWordPairCounts[n][words[i]] || {};
    const second = first[words[i+n+1]] = (first[words[i+n+1]] || 0) + 1;
  }
}

function sendToWebSockets (data) {
  const msg = JSON.stringify(data);
  Server.clients.forEach(client => {
    if (client.readyState === ws.OPEN) {
      client.send(msg);
    }
  });
}