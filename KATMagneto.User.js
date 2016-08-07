// ==UserScript==
// @name         KATMagneto
// @version      1.0
// @description  Make the Magnet button work again!
// @author       Favna
// @license http://www.apache.org/licenses/LICENSE-2.0
// @icon https://raw.githubusercontent.com/Favna/KATMagneto/master/Assets/icon.png
// @homepage https://github.com/Favna/KATMagneto
// @twitterURL https://twitter.com/Favna_
// @contactURL https://www.reddit.com/message/compose/?to=Favna
// @supportURL https://github.com/Favna/KATMagneto/issues
// @updateURL https://raw.githubusercontent.com/Favna/KATMagneto/master/KATMagneto.User.js
// @downloadURL https://raw.githubusercontent.com/Favna/KATMagneto/master/KATMagneto.User.js
// @match        http://kickasstorrentsan.com/*
// ==/UserScript==
var magnet = $("[data-sc-params]").attr("data-sc-params");
magnet = magnet.replace("{ 'magnet': '","");
magnet = magnet.split("'")[0];
$(".kaGiantButton").attr("href", magnet);