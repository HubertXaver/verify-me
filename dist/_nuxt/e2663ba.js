(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{664:function(n,r){},971:function(n,r,t){"use strict";t.r(r),function(n){t.d(r,"getED25519Key",(function(){return f}));var e=t(663);const o=t.n(e).a.lowlevel;function f(r){let t;t="string"==typeof r?n.from(r,"hex"):r;const e=new Uint8Array(64),p=[o.gf(),o.gf(),o.gf(),o.gf()],f=new Uint8Array([...new Uint8Array(t),...new Uint8Array(32)]),c=new Uint8Array(32);o.crypto_hash(e,f,32),e[0]&=248,e[31]&=127,e[31]|=64,o.scalarbase(p,e),o.pack(c,p);for(let i=0;i<32;i+=1)f[i+32]=c[i];return{sk:n.from(f),pk:n.from(c)}}}.call(this,t(16).Buffer)}}]);