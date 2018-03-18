// ==UserScript==
// @name KATMagneto
// @namespace KATMagneto
// @version 1.3.1
// @description Make the Magnet button work again!
// @author Favna
// @icon https://raw.githubusercontent.com/Favna/KATMagneto/master/Assets/icon.png
// @homepage https://github.com/Favna/KATMagneto
// @twitterURL https://twitter.com/Favna_
// @contactURL https://www.reddit.com/message/compose/?to=Favna
// @supportURL https://github.com/Favna/KATMagneto/issues
// @include https://kickasstorrentsan.com/*
// @include http://kickasstorrentsan.com/*
// @include https://kat.am/*
// @include http://kat.am/*
// @include https://katcr.to/*
// @include http://katcr.to/*
// @include http://kickasstorrents.to
// @include https://kickasstorrents.to
// @domain kickasstorrentsan.com
// @domain kat.am
// @domain katcr.to
// @domain kickasstorrents.to
// @match https://kickasstorrentsan.com/*
// @match http://kickasstorrentsan.com/*
// @match https://kat.am/*
// @match http://kat.am/*
// @match https://katcr.to/*
// @match http://katcr.to/*
// @match http://kickasstorrents.to/*
// @match https://kickasstorrents.to/*
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
// @grant none
// ==/UserScript==
var magnet = $("[data-sc-params]").attr("data-sc-params");
magnet = magnet.replace("{ 'magnet': '", "");
magnet = magnet.split("'")[0];
$(".kaGiantButton").attr("href", magnet);
