// ==UserScript==
// @name         TextNow Ad Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove annoying ads from TextNow
// @author       Ryan Corrigal
// @match        https://www.textnow.com/messaging
// @icon         https://www.google.com/s2/favicons?domain=textnow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // remove the ads
    document.querySelectorAll('.rotation-manager-slot').forEach(function(pieceOfShit) {
        pieceOfShit.remove();
    });

    document.querySelector('#bannerContainer').remove();
})();