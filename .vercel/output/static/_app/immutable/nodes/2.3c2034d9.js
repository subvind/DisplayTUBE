import{s as K,n as G,o as O,c as H}from"../chunks/scheduler.7c4769d9.js";import{S as R,i as Z,g as _,s as $,h as b,j,f as E,c as z,x as A,k as h,a as x,y as p,z as J,m as V,n as B,o as C}from"../chunks/index.40695441.js";import{e as M}from"../chunks/each.e59479a4.js";import{l as w,Z as L,T as P}from"../chunks/lg-zoom.es5.d5e898e1.js";function S(d,e,n){const m=d.slice();return m[4]=e[n],m}function q(d){let e,n,m,v,y,l,s=d[4].snippet.title+"",f,I,u,r=d[4].snippet.description+"",g,o,a,c;return{c(){e=_("a"),n=_("img"),y=$(),l=_("div"),f=V(s),I=$(),u=_("div"),g=V(r),o=$(),this.h()},l(t){e=b(t,"A",{href:!0,"data-lg-size":!0,"data-sub-html":!0,class:!0});var i=j(e);n=b(i,"IMG",{alt:!0,src:!0,class:!0}),y=z(i),l=b(i,"DIV",{class:!0});var k=j(l);f=B(k,s),k.forEach(E),I=z(i),u=b(i,"DIV",{class:!0});var D=j(u);g=B(D,r),D.forEach(E),o=z(i),i.forEach(E),this.h()},h(){h(n,"alt",m=d[4].snippet.title),H(n.src,v=d[4].image)||h(n,"src",v),h(n,"class","svelte-m0sfv5"),h(l,"class","title svelte-m0sfv5"),h(u,"class","description svelte-m0sfv5"),h(e,"href",a=d[4].image),h(e,"data-lg-size","1024-800"),h(e,"data-sub-html",c=`<p style="font-size: 1em;">${d[4].snippet.title}</p>
        <br />
        <a href="/playlists/${d[4].id}" target="_self">
          <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">view playlist</button>
        </a>
        <br />
        <br />`),h(e,"class","svelte-m0sfv5")},m(t,i){x(t,e,i),p(e,n),p(e,y),p(e,l),p(l,f),p(e,I),p(e,u),p(u,g),p(e,o)},p(t,i){i&1&&m!==(m=t[4].snippet.title)&&h(n,"alt",m),i&1&&!H(n.src,v=t[4].image)&&h(n,"src",v),i&1&&s!==(s=t[4].snippet.title+"")&&C(f,s),i&1&&r!==(r=t[4].snippet.description+"")&&C(g,r),i&1&&a!==(a=t[4].image)&&h(e,"href",a),i&1&&c!==(c=`<p style="font-size: 1em;">${t[4].snippet.title}</p>
        <br />
        <a href="/playlists/${t[4].id}" target="_self">
          <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">view playlist</button>
        </a>
        <br />
        <br />`)&&h(e,"data-sub-html",c)},d(t){t&&E(e)}}}function N(d){let e,n,m,v,y,l,s,f,I="Created playlists",u,r,g=M(d[0]),o=[];for(let a=0;a<g.length;a+=1)o[a]=q(S(d,g,a));return{c(){e=_("div"),n=_("div"),m=$(),v=_("br"),y=$(),l=_("br"),s=$(),f=_("h3"),f.textContent=I,u=$(),r=_("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0});var c=j(e);n=b(c,"DIV",{id:!0,class:!0}),j(n).forEach(E),m=z(c),v=b(c,"BR",{}),y=z(c),l=b(c,"BR",{}),s=z(c),f=b(c,"H3",{"data-svelte-h":!0}),A(f)!=="svelte-8pc5x7"&&(f.textContent=I),u=z(c),r=b(c,"DIV",{id:!0,class:!0});var t=j(r);for(let i=0;i<o.length;i+=1)o[i].l(t);t.forEach(E),c.forEach(E),this.h()},h(){h(n,"id","inline-gallery-container"),h(n,"class","inline-gallery-container svelte-m0sfv5"),h(r,"id","thumbnails-gallery"),h(r,"class","thumbnails-gallery svelte-m0sfv5"),h(e,"class","container svelte-m0sfv5")},m(a,c){x(a,e,c),p(e,n),p(e,m),p(e,v),p(e,y),p(e,l),p(e,s),p(e,f),p(e,u),p(e,r);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(r,null)},p(a,[c]){if(c&1){g=M(a[0]);let t;for(t=0;t<g.length;t+=1){const i=S(a,g,t);o[t]?o[t].p(i,c):(o[t]=q(i),o[t].c(),o[t].m(r,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=g.length}},i:G,o:G,d(a){a&&E(e),J(o,a)}}}let T="PLtoxeJ0aVT670BoNcI9x70HeKixrgoQ2Y";function Q(d,e,n){let m=[];function v(l){let s=document.getElementById("inline-gallery-container")||Object.create(HTMLElement);console.log(s);let f=[];l.forEach(u=>{let r="";u.snippet.thumbnails.standard?r=u.snippet.thumbnails.standard.url:u.snippet.thumbnails.high?r=u.snippet.thumbnails.high.url:u.snippet.thumbnails.medium?r=u.snippet.thumbnails.medium.url:r=u.snippet.thumbnails.default.url,f.push({src:r,thumb:r,subHtml:`<div class="lightGallery-captions" style="padding: 0.5em; background-color:rgba(0, 0, 0, 0.75);">
          <p style="font-size: 1em;">${u.snippet.title}</p>
          <br />
          <a href="/playlists/${T}/${u.snippet.resourceId.videoId}">
            <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">watch video</button>
          </a>
        </div>`})});const I=w(s,{container:s,dynamic:!0,hash:!1,closable:!1,showMaximizeIcon:!0,appendSubHtmlTo:".lg-item",slideDelay:400,dynamicEl:f,plugins:[L,P]});setTimeout(()=>{I.openGallery()},200)}function y(){let l=document.getElementById("thumbnails-gallery")||Object.create(HTMLElement);console.log(l),w(l,{plugins:[L,P],licenseKey:"your_license_key",speed:500,thumbnail:!0})}return O(async()=>{fetch(`/data/playlists/${T}.json`).then(l=>l.json()).then(l=>{console.log(`${T}.json`,l);let s=l;setTimeout(()=>{v(s)},0)}).catch(l=>(console.log(l),[])),fetch("/data/playlists.json").then(l=>l.json()).then(l=>{console.log("playlists.json",l),n(0,m=l),m.forEach(s=>{s.snippet.thumbnails.standard?s.image=s.snippet.thumbnails.standard.url:s.snippet.thumbnails.high?s.image=s.snippet.thumbnails.high.url:s.snippet.thumbnails.medium?s.image=s.snippet.thumbnails.medium.url:s.image=s.snippet.thumbnails.default.url}),setTimeout(()=>{y()},0)}).catch(l=>(console.log(l),[]))}),[m]}class X extends R{constructor(e){super(),Z(this,e,Q,N,K,{})}}export{X as component};