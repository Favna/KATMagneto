// ==UserScript==
// @name KATMagneto
// @namespace KATMagneto
// @version 1.0
// @description Make the Magnet button work again!
// @author Favna
// @license http://www.apache.org/licenses/LICENSE-2.0
// @icon https://raw.githubusercontent.com/Favna/KATMagneto/master/Assets/icon.png
// @homepage https://github.com/Favna/KATMagneto
// @twitterURL https://twitter.com/Favna_
// @contactURL https://www.reddit.com/message/compose/?to=Favna
// @supportURL https://github.com/Favna/KATMagneto/issues
// @updateURL https://raw.githubusercontent.com/Favna/KATMagneto/master/KATMagneto.js
// @downloadURL https://raw.githubusercontent.com/Favna/KATMagneto/master/KATMagneto.js
// @installURL https://raw.githubusercontent.com/Favna/KATMagneto/master/KATMagneto.js
// @include https://kickasstorrentsan.com/*
// @include http://kickasstorrentsan.com/*
// @domain kickasstorrentsan.com
// @match https://kickasstorrentsan.com/*
// @match http://kickasstorrentsan.com/*
// @grant unsafeWindow
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_getMetadata
// ==/UserScript==
var magnet = $("[data-sc-params]").attr("data-sc-params");
magnet = magnet.replace("{ 'magnet': '", "");
magnet = magnet.split("'")[0];
$(".kaGiantButton").attr("href", magnet);