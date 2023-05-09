var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(r){(function(){var c={}.hasOwnProperty;function s(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(!!t){var i=typeof t;if(i==="string"||i==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var f=s.apply(null,t);f&&n.push(f)}}else if(i==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var o in t)c.call(t,o)&&t[o]&&n.push(o)}}}return n.join(" ")}r.exports?(s.default=s,r.exports=s):window.classNames=s})()})(l);export{l as c};
