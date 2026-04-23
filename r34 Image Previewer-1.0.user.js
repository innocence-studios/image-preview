// ==UserScript==
// @name         r34 Image Previewer
// @namespace    ImgPreview
// @version      1.1
// @description  Lets you preview images in full resolution when hovering the thumbnail
// @author       haruusyren
// @source       https://github.com/innocence-studios/image-preview
// @license      MIT
// @match        *://*.rule34.xxx/*
// @icon         data:image/png;base64,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
// @run-at       document-end
// ==/UserScript==

(async function() {
    'use strict';

    document.querySelector('#post-list > span')?.remove(); // Removes the right container if it exists
    let con = document.createElement('div'); // Creates the preview container
    con.id = 'previewParent';
    (window.location.href.includes('page=favorites') ? document.body.appendChild(con) : document.querySelector('#post-list').appendChild(con));

    let extensions = [ 'png', 'jpg', 'jpeg', 'gif' ]; // Supported extensions
    let targets = [];

    let loaderParent = document.createElement('div'); // Loading animation
    loaderParent.className = 'prev';
    con.appendChild(loaderParent);
    let loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.display = 'none'
    loaderParent.appendChild(loader);

    for (let i in extensions){
        let target = document.createElement('img'); // One element per extension
        target.className = 'prev';
        target.alt = '';
        con.appendChild(target);
        targets.push(target);
    }

    let videoTarget = document.createElement('video'); // Video preview
    videoTarget.className = 'prev';
    videoTarget.autoplay = true;
    videoTarget.controls = false;
    videoTarget.loop = true;
    videoTarget.muted = getCookie('previewMuted') == 'true';
    videoTarget.disablepictureinpicture = true;
    con.appendChild(videoTarget);

    for (let el of document.querySelectorAll('.thumb')){ // Adds event for each thumbnail
        el.addEventListener('mouseenter', () => {
            loader.style.display = '';
            if ((Array.from(el.querySelectorAll('*')).map(a => a.title.includes('video'))).includes(true)) videoTarget.src = el.querySelector('img').src.replace('thumbnails', 'images').replace('thumbnail_', '').replace('wimg', 'ws-cdn-video').replace('.jpg', '.mp4');
            else {
                let url = el.querySelector('img').src.replace('thumbnails', 'images').replace('thumbnail_', '').replace('.jpg', '.EXTENSION');

                for (let i in targets) targets[i].src = url.replace('.EXTENSION', `.${extensions[i]}`);
            }
        });
        el.addEventListener('mouseleave', () => {
            loader.style.display = 'none';
            videoTarget.src = '';
            for (let i in targets) targets[i].src = '';
        });
    }

    let paramParent = document.createElement('div'); // Parameters container
    paramParent.className = 'param-parent';
    con.appendChild(paramParent);
    let muteParam = document.createElement('input'); // Mute preview video parameter
    muteParam.id = 'muteParam';
    muteParam.name = 'muteParam';
    muteParam.type = 'checkbox';
    muteParam.checked = getCookie('previewMuted') == 'true';
    paramParent.appendChild(muteParam);
    let muteLabel = document.createElement('label'); // Mute preview video parameter label
    muteLabel.for = 'muteParam';
    paramParent.appendChild(muteLabel);
    muteLabel.textContent = 'Mute preview';
    muteParam.addEventListener('change', () => {
        videoTarget.muted = !videoTarget.muted;
        document.cookie = `previewMuted=${videoTarget.muted}`;
    });

    let style = document.createElement('style'); // Usescript stylesheet
    style.id = 'previewStylesheet';
    document.head.appendChild(style);
    style.sheet.insertRule('.image-list { width: 56dvw !important; }', style.sheet.cssRules.length);
    style.sheet.insertRule('.param-parent { position: fixed; width: stretch; display: flex; justify-content: flex-start; flex-direction: row-reverse; }', style.sheet.cssRules.length);
    style.sheet.insertRule('@keyframes l1 { to { transform: rotate(.5turn) } }', style.sheet.cssRules.length);
    if (window.location.href.includes('page=favorites')){ // CSS on favorite page
        style.sheet.insertRule('#previewParent { position: fixed; min-height: 84dvh; right: 0; width: 39dvw; top: 50%; transform: translateY(-50%); }', style.sheet.cssRules.length);
        style.sheet.insertRule('.prev { position: fixed; max-height: 100dvh; object-fit: cover; width: stretch; top: 50%; transform: translateY(-50%); }', style.sheet.cssRules.length);
    }
    else { // CSS on search page
        style.sheet.insertRule('#previewParent { width: stretch; }', style.sheet.cssRules.length);
        style.sheet.insertRule('.prev { position: fixed; max-height: 100dvh; object-fit: cover; width: stretch; top: 50%; transform: translateY(-50%); }', style.sheet.cssRules.length);
        style.sheet.insertRule('.loader { animation: l1 1s infinite; aspect-ratio: 1; border-radius: 50%; border: 8px solid; border-color: #000 #0000; width: 50px; margin: auto; }', style.sheet.cssRules.length);
    }
})();

function getCookie(name){ // Get cookie value with name
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
