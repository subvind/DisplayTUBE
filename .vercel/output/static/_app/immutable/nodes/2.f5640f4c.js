import{s as V,n as T,o as L,c as k}from"../chunks/scheduler.7c4769d9.js";import{S as P,i as S,g as _,s as I,h as v,j as z,f as $,c as E,x as q,k as o,a as D,y as f,z as K}from"../chunks/index.40695441.js";import{e as G}from"../chunks/each.e59479a4.js";import{l as H,Z as B,T as C}from"../chunks/lg-zoom.es5.d5e898e1.js";function M(d,e,s){const u=d.slice();return u[4]=e[s],u}function w(d){let e,s,u,g,b,t,l;return{c(){e=_("a"),s=_("img"),b=I(),this.h()},l(a){e=v(a,"A",{href:!0,"data-lg-size":!0,"data-sub-html":!0,class:!0});var c=z(e);s=v(c,"IMG",{alt:!0,src:!0,class:!0}),b=E(c),c.forEach($),this.h()},h(){o(s,"alt",u=d[4].snippet.title),k(s.src,g=d[4].image)||o(s,"src",g),o(s,"class","svelte-oyfjx5"),o(e,"href",t=d[4].image),o(e,"data-lg-size","1024-800"),o(e,"data-sub-html",l=`<p style="font-size: 1em;">${d[4].snippet.title}</p>
        <br />
        <a href="/playlists/${d[4].id}" target="_self">
          <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">view playlist</button>
        </a>
        <br />
        <br />`),o(e,"class","svelte-oyfjx5")},m(a,c){D(a,e,c),f(e,s),f(e,b)},p(a,c){c&1&&u!==(u=a[4].snippet.title)&&o(s,"alt",u),c&1&&!k(s.src,g=a[4].image)&&o(s,"src",g),c&1&&t!==(t=a[4].image)&&o(e,"href",t),c&1&&l!==(l=`<p style="font-size: 1em;">${a[4].snippet.title}</p>
        <br />
        <a href="/playlists/${a[4].id}" target="_self">
          <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">view playlist</button>
        </a>
        <br />
        <br />`)&&o(e,"data-sub-html",l)},d(a){a&&$(e)}}}function O(d){let e,s,u,g,b,t,l,a,c="Created playlists",p,h,y=G(d[0]),r=[];for(let i=0;i<y.length;i+=1)r[i]=w(M(d,y,i));return{c(){e=_("div"),s=_("div"),u=I(),g=_("br"),b=I(),t=_("br"),l=I(),a=_("h3"),a.textContent=c,p=I(),h=_("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var m=z(e);s=v(m,"DIV",{id:!0,class:!0}),z(s).forEach($),u=E(m),g=v(m,"BR",{}),b=E(m),t=v(m,"BR",{}),l=E(m),a=v(m,"H3",{"data-svelte-h":!0}),q(a)!=="svelte-8pc5x7"&&(a.textContent=c),p=E(m),h=v(m,"DIV",{id:!0,class:!0});var n=z(h);for(let j=0;j<r.length;j+=1)r[j].l(n);n.forEach($),m.forEach($),this.h()},h(){o(s,"id","inline-gallery-container"),o(s,"class","inline-gallery-container svelte-oyfjx5"),o(h,"id","thumbnails-gallery"),o(h,"class","thumbnails-gallery svelte-oyfjx5"),o(e,"class","container svelte-oyfjx5")},m(i,m){D(i,e,m),f(e,s),f(e,u),f(e,g),f(e,b),f(e,t),f(e,l),f(e,a),f(e,p),f(e,h);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(h,null)},p(i,[m]){if(m&1){y=G(i[0]);let n;for(n=0;n<y.length;n+=1){const j=M(i,y,n);r[n]?r[n].p(j,m):(r[n]=w(j),r[n].c(),r[n].m(h,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=y.length}},i:T,o:T,d(i){i&&$(e),K(r,i)}}}let x="PLtoxeJ0aVT670BoNcI9x70HeKixrgoQ2Y";function R(d,e,s){let u=[];function g(t){let l=document.getElementById("inline-gallery-container")||Object.create(HTMLElement);console.log(l);let a=[];t.forEach(p=>{let h="";p.snippet.thumbnails.standard?h=p.snippet.thumbnails.standard.url:p.snippet.thumbnails.high?h=p.snippet.thumbnails.high.url:p.snippet.thumbnails.medium?h=p.snippet.thumbnails.medium.url:h=p.snippet.thumbnails.default.url,a.push({src:h,thumb:h,subHtml:`<div class="lightGallery-captions" style="padding: 0.5em; background-color:rgba(0, 0, 0, 0.75);">
          <p style="font-size: 1em;">${p.snippet.title}</p>
          <br />
          <a href="/playlists/${x}/${p.snippet.resourceId.videoId}">
            <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">watch video</button>
          </a>
        </div>`})});const c=H(l,{container:l,dynamic:!0,hash:!1,closable:!1,showMaximizeIcon:!0,appendSubHtmlTo:".lg-item",slideDelay:400,dynamicEl:a,plugins:[B,C]});setTimeout(()=>{c.openGallery()},200)}function b(){let t=document.getElementById("thumbnails-gallery")||Object.create(HTMLElement);console.log(t),H(t,{plugins:[B,C],licenseKey:"your_license_key",speed:500,thumbnail:!0})}return L(async()=>{fetch(`/data/playlists/${x}.json`).then(t=>t.json()).then(t=>{console.log(`${x}.json`,t);let l=t;setTimeout(()=>{g(l)},0)}).catch(t=>(console.log(t),[])),fetch("/data/playlists.json").then(t=>t.json()).then(t=>{console.log("playlists.json",t),s(0,u=t),u.forEach(l=>{l.snippet.thumbnails.standard?l.image=l.snippet.thumbnails.standard.url:l.snippet.thumbnails.high?l.image=l.snippet.thumbnails.high.url:l.snippet.thumbnails.medium?l.image=l.snippet.thumbnails.medium.url:l.image=l.snippet.thumbnails.default.url}),setTimeout(()=>{b()},0)}).catch(t=>(console.log(t),[]))}),[u]}class Q extends P{constructor(e){super(),S(this,e,R,O,V,{})}}export{Q as component};