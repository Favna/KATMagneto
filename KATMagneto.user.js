// ==UserScript==
// @name KATMagneto
// @namespace KATMagneto
// @version 1.3.2
// @description Make the Magnet button work again!
// @author Favna
// @copyright 2016-2018, Favna (https://favna.xyz)
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
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

/*
 *   This file is part of KATMagneto
 *   Copyright (C) 2016-2018 Favna
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *   Additional Terms 7.b and 7.c of GPLv3 apply to this file:
 *       * Requiring preservation of specified reasonable legal notices or
 *         author attributions in that material or in the Appropriate Legal
 *         Notices displayed by works containing it.
 *       * Prohibiting misrepresentation of the origin of that material,
 *         or requiring that modified versions of such material be marked in
 *         reasonable ways as different from the original version.
 */


var magnet = $("[data-sc-params]").attr("data-sc-params");
magnet = magnet.replace("{ 'magnet': '", "");
magnet = magnet.split("'")[0];
$(".kaGiantButton").attr("href", magnet);
