_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{Jdgq:function(t,e,n){t.exports={article_wraper:"formations_article_wraper__2oOnL",download_article:"formations_download_article__Yj-H4",download_section:"formations_download_section__3BSE8",articleName:"formations_articleName__3j4BA",download_link_container:"formations_download_link_container__2a5m_",formation_title:"formations_formation_title__dj8Hj",cardFigure:"formations_cardFigure__3EgSb",cardDescription:"formations_cardDescription__3hgTg",logo_img:"formations_logo_img__20z7-",titleMargin:"formations_titleMargin__36U06",cardAuthor:"formations_cardAuthor__3Utbw",smallInfoStyle:"formations_smallInfoStyle__wj3g1",link:"formations_link__z2Ne5",link_to_article:"formations_link_to_article__3YUCB",links_label_container:"formations_links_label_container__ngWgb",links_label_1st_innerWrapper:"formations_links_label_1st_innerWrapper__1qzD0",links_label_2nd_innerWrapper:"formations_links_label_2nd_innerWrapper__3Hra8",read_dw_label:"formations_read_dw_label__-BdAz",link_container:"formations_link_container__1iXtZ",btn_links:"formations_btn_links__2wv7V",btn_text:"formations_btn_text__2E_QF"}},KGuq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formations",function(){return n("ig9b")}])},ig9b:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return Dt})),n.d(e,"default",(function(){return Nt}));var a=n("nKUr"),r=n("g4pe"),i=n.n(r),o=n("YFqc"),c=n.n(o),u=n("q1tI");function s(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}var l=36e5,f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},h=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,m=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,g=/^([+-])(\d{2})(?::?(\d{2}))?$/;function w(t){var e,n={},a=t.split(f.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?(n.date=null,e=a[0]):(n.date=a[0],e=a[1],f.timeZoneDelimiter.test(n.date)&&(n.date=t.split(f.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var r=f.timezone.exec(e);r?(n.time=e.replace(r[1],""),n.timezone=r[1]):n.time=e}return n}function b(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(n);if(!a)return{year:null};var r=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:null==i?r:100*i,restDateString:t.slice((a[1]||a[2]).length)}}function v(t,e){if(null===e)return null;var n=t.match(h);if(!n)return null;var a=!!n[4],r=p(n[1]),i=p(n[2])-1,o=p(n[3]),c=p(n[4]),u=p(n[5])-1;if(a)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,c,u)?function(t,e,n){var a=new Date(0);a.setUTCFullYear(t,0,4);var r=a.getUTCDay()||7,i=7*(e-1)+n+1-r;return a.setUTCDate(a.getUTCDate()+i),a}(e,c,u):new Date(NaN);var s=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(T[e]||(C(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(C(t)?366:365)}(e,r)?(s.setUTCFullYear(e,i,Math.max(r,o)),s):new Date(NaN)}function p(t){return t?parseInt(t):1}function y(t){var e=t.match(m);if(!e)return null;var n=_(e[1]),a=_(e[2]),r=_(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,a,r)?n*l+6e4*a+1e3*r:NaN}function _(t){return t&&parseFloat(t.replace(",","."))||0}function x(t){if("Z"===t)return 0;var e=t.match(g);if(!e)return 0;var n="+"===e[1]?-1:1,a=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,r)?n*(a*l+6e4*r):NaN}var T=[31,null,31,30,31,30,31,31,30,31,30,31];function C(t){return t%400===0||t%4===0&&t%100}function j(t){d(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function M(t){d(1,arguments);var e=j(t);return!isNaN(e)}var D={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var k={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function U(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var c=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[c]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function P(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],c=a.match(o);if(!c)return null;var u,s=c[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(s)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(s)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(s.length)}}}var S,W={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"===typeof D[t]?D[t]:1===e?D[t].one:D[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:k,formatRelative:function(t,e,n,a){return O[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:U({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:U({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:U({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:U({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:U({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(S.matchPattern);if(!r)return null;var i=r[0],o=n.match(S.parsePattern);if(!o)return null;var c=S.valueCallback?S.valueCallback(o[0]):o[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(i.length)}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(t,e){d(2,arguments);var n=j(t).getTime(),a=s(e);return new Date(n+a)}function Y(t,e){d(2,arguments);var n=s(e);return E(t,-n)}function q(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var F={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return q("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):q(n+1,2)},d:function(t,e){return q(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return q(t.getUTCHours()%12||12,e.length)},H:function(t,e){return q(t.getUTCHours(),e.length)},m:function(t,e){return q(t.getUTCMinutes(),e.length)},s:function(t,e){return q(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return q(Math.floor(a*Math.pow(10,n-3)),e.length)}},z=864e5;function H(t){d(1,arguments);var e=1,n=j(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function L(t){d(1,arguments);var e=j(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=H(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=H(i);return e.getTime()>=r.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function X(t){d(1,arguments);var e=L(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=H(n);return a}var A=6048e5;function B(t,e){d(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:s(r),o=null==n.weekStartsOn?i:s(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=j(t),u=c.getUTCDay(),l=(u<o?7:0)+u-o;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function G(t,e){d(1,arguments);var n=j(t,e),a=n.getUTCFullYear(),r=e||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,c=null==o?1:s(o),u=null==r.firstWeekContainsDate?c:s(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,u),l.setUTCHours(0,0,0,0);var f=B(l,e),h=new Date(0);h.setUTCFullYear(a,0,u),h.setUTCHours(0,0,0,0);var m=B(h,e);return n.getTime()>=f.getTime()?a+1:n.getTime()>=m.getTime()?a:a-1}function Q(t,e){d(1,arguments);var n=e||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:s(r),o=null==n.firstWeekContainsDate?i:s(n.firstWeekContainsDate),c=G(t,e),u=new Date(0);u.setUTCFullYear(c,0,o),u.setUTCHours(0,0,0,0);var l=B(u,e);return l}var R=6048e5;var I="midnight",J="noon",Z="morning",$="afternoon",K="evening",V="night";function tt(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+q(i,2)}function et(t,e){return t%60===0?(t>0?"-":"+")+q(Math.abs(t)/60,2):nt(t,e)}function nt(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+q(Math.floor(r/60),2)+n+q(r%60,2)}var at={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return F.y(t,e)},Y:function(t,e,n,a){var r=G(t,a),i=r>0?r:1-r;return"YY"===e?q(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):q(i,e.length)},R:function(t,e){return q(L(t),e.length)},u:function(t,e){return q(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return q(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return q(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return F.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return q(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){d(1,arguments);var n=j(t),a=B(n,e).getTime()-Q(n,e).getTime();return Math.round(a/R)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},I:function(t,e,n){var a=function(t){d(1,arguments);var e=j(t),n=H(e).getTime()-X(e).getTime();return Math.round(n/A)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):F.d(t,e)},D:function(t,e,n){var a=function(t){d(1,arguments);var e=j(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/z)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):q(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return q(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return q(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return q(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?J:0===r?I:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?K:r>=12?$:r>=4?Z:V,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return F.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):F.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):q(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):q(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):F.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):F.s(t,e)},S:function(t,e){return F.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return et(r);case"XXXX":case"XX":return nt(r);case"XXXXX":case"XXX":default:return nt(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return et(r);case"xxxx":case"xx":return nt(r);case"xxxxx":case"xxx":default:return nt(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+tt(r,":");case"OOOO":default:return"GMT"+nt(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+tt(r,":");case"zzzz":default:return"GMT"+nt(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return q(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return q((a._originalDate||t).getTime(),e.length)}};function rt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function it(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var ot={p:it,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return rt(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",rt(r,e)).replace("{{time}}",it(i,e))}},ct=6e4;function ut(t){return t.getTime()%ct}function st(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var a=n>0?(ct+ut(e))%ct:ut(e);return n*ct+a}var dt=["D","DD"],lt=["YY","YYYY"];function ft(t){return-1!==dt.indexOf(t)}function ht(t){return-1!==lt.indexOf(t)}function mt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var gt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,wt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,vt=/''/g,pt=/[a-zA-Z]/;function yt(t,e,n){d(2,arguments);var a=String(e),r=n||{},i=r.locale||W,o=i.options&&i.options.firstWeekContainsDate,c=null==o?1:s(o),u=null==r.firstWeekContainsDate?c:s(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=i.options&&i.options.weekStartsOn,f=null==l?0:s(l),h=null==r.weekStartsOn?f:s(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=j(t);if(!M(m))throw new RangeError("Invalid time value");var g=st(m),w=Y(m,g),b={firstWeekContainsDate:u,weekStartsOn:h,locale:i,_originalDate:m},v=a.match(wt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ot[e])(t,i.formatLong,b):t})).join("").match(gt).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return _t(n);var o=at[a];if(o)return!r.useAdditionalWeekYearTokens&&ht(n)&&mt(n,e,t),!r.useAdditionalDayOfYearTokens&&ft(n)&&mt(n,e,t),o(w,n,i.localize,b);if(a.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return v}function _t(t){return t.match(bt)[1].replace(vt,"'")}function xt(t){var e=t.dateString,n=function(t,e){d(1,arguments);var n=e||{},a=null==n.additionalDigits?2:s(n.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var r,i=w(t);if(i.date){var o=b(i.date,a);r=v(o.restDateString,o.year)}if(isNaN(r)||!r)return new Date(NaN);var c,u=r.getTime(),l=0;if(i.time&&(l=y(i.time),isNaN(l)||null===l))return new Date(NaN);if(!i.timezone){var f=new Date(u+l),h=new Date(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds());return h.setFullYear(f.getUTCFullYear()),h}return c=x(i.timezone),isNaN(c)?new Date(NaN):new Date(u+l+c)}(e);return Object(a.jsx)("time",{dateTime:e,children:yt(n,"dd/MM/yyyy")})}var Tt=n("Jax6"),Ct=n("Jdgq"),jt=n.n(Ct),Mt=n("WCZw"),Dt=!0;function Nt(t){var e=t.metadata,n=t.pageMetadata;Object(u.useEffect)((function(){Object(Mt.a)()}),[]);var r=e.map((function(t){return{key:t.id.join("/"),links:{read:{pdf:"/doc-pdf/f/".concat(t.id.slice(-1)),ppt:"/doc-ppt/f/".concat(t.id.slice(-1)),word:"/doc-word/f/".concat(t.id.slice(-1)),video:"/video/f/".concat(t.id.slice(-1))}},articlePath:"/formations/".concat(t.id.join("/")),logo:t.data.logo,logoAltTxt:t.data.logoAltTxt,title:t.data.title,titleHead:t.data.pageTitle,authors:t.data.authors,date:t.data.formationDate||void 0,where:t.data.where||void 0,doctypes:t.data.doctypes.split(";")}}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{children:Object(a.jsx)("title",{children:n.title})}),Object(a.jsx)(Tt.d,{metadata:n,children:Object(a.jsx)("div",{className:"".concat(jt.a.article_wraper," flex"),children:r.map((function(t){return Object(a.jsx)(kt,{data:t},t.key)}))})})]})}function kt(t){var e=t.data,n={ppt:{text:"Slide",icon:"fas fa-file-powerpoint"},word:{text:"Word",icon:"fas fa-file-word"},pdf:{text:"Pdf",icon:"fas fa-file-pdf"},video:{text:"Video",icon:"fas fa-video"}};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("article",{className:"".concat(jt.a.download_article," flex"),children:Object(a.jsxs)("section",{className:"".concat(jt.a.download_section," flex"),children:[Object(a.jsx)("h1",{className:jt.a.articleName,children:Object(a.jsx)(c.a,{href:e.articlePath,children:Object(a.jsx)("a",{className:jt.a.link,children:e.titleHead})})}),Object(a.jsx)("div",{className:"".concat(jt.a.download_link_container," flex"),children:Object(a.jsxs)("figure",{className:"".concat(jt.a.cardFigure," flex"),children:[Object(a.jsx)("img",{className:"".concat(jt.a.logo_img),src:e.logo,alt:e.logoAltTxt,width:"130"}),Object(a.jsxs)("figcaption",{className:"".concat(jt.a.cardDescription," flex"),children:[Object(a.jsx)("h2",{className:"".concat(jt.a.titleMargin," ").concat(jt.a.formation_title),children:Object(a.jsx)(c.a,{href:e.articlePath,children:Object(a.jsx)("a",{className:"".concat(jt.a.link_to_article),children:e.title})})}),Object(a.jsx)("h3",{className:"".concat(jt.a.Author),children:e.authors}),Object(a.jsxs)("small",{className:"".concat(jt.a.smallInfoStyle),children:[e.date?Object(a.jsxs)(a.Fragment,{children:["Le ",Object(a.jsx)(xt,{dateString:e.date})," "]}):"Date non d\xe9finie ",e.date&&e.where?"sur ".concat(e.where):"Lieu non d\xe9finie"]})]}),Object(a.jsx)("div",{className:"".concat(jt.a.links_label_container,"  flex"),children:Object(a.jsx)("div",{className:"".concat(jt.a.links_label_1st_innerWrapper," flex"),children:Object(a.jsxs)("div",{className:"".concat(jt.a.links_label_2nd_innerWrapper," flex"),children:[Object(a.jsx)("label",{className:"".concat(jt.a.read_dw_label),children:"Lire/T\xe9l\xe9charger"}),Object(a.jsx)("div",{className:"".concat(jt.a.link_container," flex"),children:e.doctypes.map((function(t){return Object(a.jsx)(Tt.b,{condition:t in n,children:Object(a.jsx)(c.a,{href:e.links.read[t],children:Object(a.jsxs)("a",{className:"".concat(jt.a.btn_links," flex"),children:[Object(a.jsx)("i",{className:"".concat(n[t].icon)}),Object(a.jsx)("span",{className:"".concat(jt.a.btn_text),children:n[t].text})]})})},t)}))})]})})})]})})]})})})}}},[["KGuq",0,2,1,3]]]);