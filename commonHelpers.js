import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m=document.querySelector(".search-form"),d=document.querySelector(".search-input"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");c();m.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget,n=d.value;a.innerHTML="",L(),h(n).then(i=>{p(i),c()}).catch(i=>{g(i),c()}).finally(()=>t.reset())});function h(s){return new Promise((t,n)=>{const i="41984486-af85e40ac9c664bf86aaf37aa",r=`https://pixabay.com/api/?${new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(r).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}).then(o=>{o.hits.length===0?n("Sorry, there are no images matching your search query. Please try again!"):t(o.hits)}).catch(o=>n(o))})}const y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){a.innerHTML="",s.map(t=>{const n=document.createElement("li");n.innerHTML=`
         <a class="gallery-link" href="${t.largeImageURL}">
           <img
               class="gallery-image"
               src="${t.webformatURL}"
               alt="${t.tags}"
            />
            <ul class="info">
            <li class="info-items">Likes: ${t.likes}</li>
            <li class="info-items">Views: ${t.views}</li>
            <li class="info-items">Comments: ${t.comments}</li>
            <li class="info-items">Downloads: ${t.downloads}</li>
            </ul>
         </a>    
  `,a.appendChild(n)}).join(""),y.refresh()}function g(s){f.error({title:"Error",message:s,position:"topRight"})}function L(){l.style.display="block"}function c(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
