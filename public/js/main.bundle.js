!function r(o,e,n){function t(i,f){if(!e[i]){if(!o[i]){var l="function"==typeof require&&require;if(!f&&l)return l(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=e[i]={exports:{}};o[i][0].call(c.exports,function(r){var e=o[i][1][r];return t(e?e:r)},c,c.exports,r,o,e,n)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)t(n[i]);return t}({1:[function(r,o){o.exports={modulea:function(){return console.log("foo"),"Module A"}}},{}],2:[function(r){var o=r("./lib/module-a");console.log(o.modulea())},{"./lib/module-a":1}]},{},[2]);