"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(A,o){
var g=require('@stdlib/strided-base-reinterpret-complex64/dist');function j(e,r,a,y){var t,i,c,v;if(e<=0)return r;for(t=g(r,0),c=a*2,i=y*2+1,v=0;v<e;v++)t[i]=-t[i],i+=c;return r}o.exports=j
});var f=u(function(B,q){
var m=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(e,r,a){return R(e,r,a,m(e,a))}q.exports=_
});var d=u(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=f(),O=s();E(l,"ndarray",O);p.exports=l
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=d(),n,x=h(b(__dirname,"./native.js"));k(x)?n=w:n=x;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
