(function(){var e=null,h,k=this;function l(a,c){var b=a.split("."),d=k;!(b[0]in d)&&d.execScript&&d.execScript("var "+b[0]);for(var f;b.length&&(f=b.shift());)!b.length&&c!==void 0?d[f]=c:d=d[f]?d[f]:d[f]={}}function aa(a,c,b){return a.call.apply(a.bind,arguments)}
function ba(a,c,b){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}else return function(){return a.apply(c,arguments)}}function n(a,c,b){n=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?aa:ba;return n.apply(e,arguments)}
function o(a,c){function b(){}b.prototype=c.prototype;a.ha=c.prototype;a.prototype=new b};k.requestAnimationFrame=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.mozRequestAnimationFrame||k.oRequestAnimationFrame||k.msRequestAnimationFrame||function(a){return k.setTimeout(a,1E3/60)};k.cancelRequestAnimationFrame=k.cancelRequestAnimationFrame||k.webkitCancelRequestAnimationFrame||k.mozCancelRequestAnimationFrame||k.oCancelRequestAnimationFrame||k.msCancelRequestAnimationFrame||function(a){k.clearTimeout(a)};function r(a,c){this.c=a||new s;this.d=typeof c==="undefined"?1:c}h=r.prototype;h.m=function(){return new r(this.c.m(),-this.d)};h.Q=function(){return Math.sqrt(this.r())};h.r=function(){return this.d*this.d+this.c.r()};h.t=function(){return this.k(this.Q())};h.M=function(){return new r(this.c.m(),this.d)};h.w=function(){return this.M().k(this.r())};h.f=function(a){if(typeof a==="number")return new r(this.c,this.d+a);else if(a instanceof r)return new r(this.c.f(a.c),this.d+a.d);return e};
h.l=function(a){if(typeof a==="number")return new r(this.c,this.d-a);else if(a instanceof r)return new r(this.c.l(a.c),this.d-a.d);return e};h.b=function(a){if(typeof a==="number")return new r(this.c.b(a),this.d*a);else if(a instanceof r)return new r(a.c.b(this.d).f(this.c.b(a.d)).f(this.c.O(a.c)),this.d*a.d-this.c.A(a.c));return e};h.k=function(a){if(typeof a==="number")return new r(this.c.k(a),this.d/a);else if(a instanceof r)return this.b(a.w());return e};h.transform=function(a){return this.b(a).b(this.w()).c};
h.toString=function(){return this.c+" + "+this.d};function s(a,c,b){this.d=0;this.c=this;this.x=a||0;this.y=c||0;this.a=b||0}o(s,r);var u=new s(1,0,0),w=new s(0,1,0),A=new s(0,0,1);h=s.prototype;h.m=function(){return new s(-this.x,-this.y,-this.a)};h.r=function(){return this.A(this)};h.f=function(a){return a instanceof s?new s(this.x+a.x,this.y+a.y,this.a+a.a):r.prototype.f.call(this,a)};h.l=function(a){return a instanceof s?new s(this.x-a.x,this.y-a.y,this.a-a.a):r.prototype.f.call(this,a)};
h.b=function(a){return typeof a==="number"?new s(this.x*a,this.y*a,this.a*a):r.prototype.b.call(this,a)};h.k=function(a){return typeof a==="number"?new s(this.x/a,this.y/a,this.a/a):r.prototype.k.call(this,a)};h.O=function(a){return new s(this.y*a.a-this.a*a.y,this.a*a.x-this.x*a.a,this.x*a.y-this.y*a.x)};h.A=function(a){return this.x*a.x+this.y*a.y+this.a*a.a};h.toString=function(){return this.x+"i + "+this.y+"j + "+this.a+"k"};function D(a,c){this.h=a||0;this.i=c||0}h=D.prototype;h.s=function(){return new D(this.h,-this.i)};h.f=function(a){return new D(this.h+a.h,this.i+a.i)};h.l=function(a){return new D(this.h-a.h,this.i-a.i)};h.m=function(){return new D(-this.h,-this.i)};h.b=function(a){return new D(this.h*a.h,this.h*a.i+this.i*a.h)};h.inverse=function(){return new D(1/this.h,-this.i/this.h/this.h)};h.k=function(a){return this.b(a.inverse())};h.sqrt=function(){return new D(Math.sqrt(this.h),this.i/2/Math.sqrt(this.h))};
h.toString=function(){return this.h+" + "+this.i+"e"};function G(a,c){this.c=a||new H;this.d=typeof c==="undefined"?new D(1):c}function I(a){return new G(new H(new D(0,a.x/2),new D(0,a.y/2),new D(0,a.a/2)),new D(1))}function J(a,c){var b=a.t().b(Math.sin(c/2));return new G(new H(new D(b.x),new D(b.y),new D(b.a)),new D(Math.cos(c/2)))}h=G.prototype;h.h=function(){return new r(this.c.h(),this.d.h)};h.i=function(){return new r(this.c.i(),this.d.i)};h.m=function(){return new G(this.c.m(),this.d.m())};h.Q=function(){return this.r().sqrt()};h.r=function(){return this.d.b(this.d).f(this.c.r())};
h.t=function(){return this.k(this.Q())};h.M=function(){return new G(this.c.m(),this.d)};h.s=function(){return new G(this.c.s(),this.d.s())};h.w=function(){return this.M().k(this.r())};h.f=function(a){if(a instanceof D)return new G(this.c,this.d.f(a));else if(a instanceof G)return new G(this.c.f(a.c),this.d.f(a.d));return e};h.l=function(a){if(a instanceof D)return new G(this.c,this.d.l(a));else if(a instanceof G)return new G(this.c.l(a.c),this.d.l(a.d));return e};
h.b=function(a){if(a instanceof D)return new G(this.c.b(a),this.d.b(a));else if(a instanceof G)return new G(a.c.b(this.d).f(this.c.b(a.d)).f(this.c.O(a.c)),this.d.b(a.d).l(this.c.A(a.c)));else if(a instanceof K){for(var c=new K,b=0;b<a.n.length;++b)c.set(b,this.b(a.n[b]));return c}return e};h.k=function(a){if(a instanceof D)return new G(this.c.k(a),this.d.k(a));else if(a instanceof G)return this.b(a.w());return e};
h.transform=function(a){return this.b(new G(new H(new D(0,a.x),new D(0,a.y),new D(0,a.a)),new D(1))).b(this.s().w()).c.i()};h.toString=function(){return this.c+" + "+this.d};function H(a,c,b){this.d=new D;this.c=this;this.x=a||new D;this.y=c||new D;this.a=b||new D}o(H,G);h=H.prototype;h.h=function(){return new s(this.x.h,this.y.h,this.a.h)};h.i=function(){return new s(this.x.i,this.y.i,this.a.i)};h.s=function(){return new H(this.x.s(),this.y.s(),this.a.s())};h.m=function(){return new H(this.x.m(),this.y.m(),this.a.m())};h.r=function(){return this.A(this)};h.f=function(a){return a instanceof H?new H(this.x.f(a.x),this.y.f(a.y),this.a.f(a.a)):G.prototype.f.call(this,a)};
h.l=function(a){return a instanceof H?new H(this.x.l(a.x),this.y.l(a.y),this.a.l(a.a)):G.prototype.f.call(this,a)};h.b=function(a){return a instanceof D?new H(this.x.b(a),this.y.b(a),this.a.b(a)):G.prototype.b.call(this,a)};h.k=function(a){return a instanceof D?new H(this.x.k(a),this.y.k(a),this.a.k(a)):G.prototype.k.call(this,a)};h.O=function(a){return new H(this.y.b(a.a).l(this.a.b(a.y)),this.a.b(a.x).l(this.x.b(a.a)),this.x.b(a.y).l(this.y.b(a.x)))};h.A=function(a){return this.x.b(a.x).f(this.y.b(a.y)).f(this.a.b(a.a))};
h.toString=function(){return"("+this.x+")i + ("+this.y+")j + ("+this.a+")k"};function ca(){this.J=10;this.o=128;this.j=[4,4,4];this.R=this.N=e}function L(a,c,b){return new s(a.J*Math.sin(c)*Math.sin(b),a.J*Math.cos(c),a.J*Math.sin(c)*Math.cos(b))};function M(a,c){this.ia=a;this.e=c;this.reset()}h=M.prototype;
h.P=function(a,c){this.F=a;this.H=this.F.getContext("experimental-webgl");var b=this.K=c,d=this.H;b.e.P();var f=new N("v0",d.VERTEX_SHADER,"vec3 rotate(vec4 q, vec3 v){vec3 r=q.xyz;float a=q.w;return v+cross(2.0*r,cross(r,v)+a*v);}vec4 inverse(vec4 q){return vec4(vec3(-1.),1.)*q/dot(q,q);}uniform mat4 uProjection;uniform vec4 uTransform[2];uniform vec4 uCamera[2];attribute vec3 aPosition;attribute vec3 aNormal;attribute vec3 aColor;attribute vec2 aTexCoord;varying vec3 vPosition;varying vec3 vNormal;varying vec3 vTexCoord;varying vec3 vColor;void main(){float len=length(uTransform[0]);vec4 transf[2];transf[0]=uTransform[0]/len;transf[1]=uTransform[1]/len;vec3 pos=rotate(transf[0],aPosition);vec3 transl=2.0*(transf[0].w*transf[1].xyz-transf[1].w*transf[0].xyz+cross(transf[0].xyz,transf[1].xyz));pos+=transl;len=length(uCamera[0]);vec4 camera[2];camera[0]=uCamera[0]/len;vNormal=rotate(transf[0],aNormal);vTexCoord=rotate(inverse(camera[0]),reflect(pos,vNormal));vColor=aColor;gl_Position=uProjection*vec4(pos,1.0);vPosition=pos;}"),g=
new N("f0",d.FRAGMENT_SHADER,"uniform highp vec3 uLightPos;uniform samplerCube uTexture;varying highp vec3 vPosition;varying highp vec3 vNormal;varying highp vec3 vTexCoord;varying lowp vec3 vColor;const highp float AMBIENT=0.25;void main(){highp vec3 light=uLightPos-vPosition;highp float spec=pow(clamp(-dot(normalize(vPosition),normalize(reflect(-light,vNormal))),0.,1.),99.0);highp float dot=dot(normalize(light),vNormal);highp vec3 diffuse=vec3(max(dot,AMBIENT));highp vec3 color=textureCube(uTexture,normalize(vTexCoord)).xyz*vColor;gl_FragColor=vec4(diffuse*color+vec3(spec),1.);}");
b.p=new O(f,g);b.p.create(d);b.p.link(d);f=new N("v1",d.VERTEX_SHADER,"vec3 rotate(vec4 q, vec3 v){vec3 r=q.xyz;float a=q.w;return v+cross(2.0*r,cross(r,v)+a*v);}vec4 inverse(vec4 q){return vec4(vec3(-1.),1.)*q/dot(q,q);}uniform mat4 uProjection;uniform highp vec3 uLightPos;uniform vec4 uTransform[2];uniform vec4 uCamera[2];attribute vec3 aPosition;attribute vec3 aNormal;attribute vec3 aColor;attribute vec2 aTexCoord;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vTexCoord;varying vec3 vColor;void main(){float len=length(uTransform[0]);vec4 transf[2];transf[0]=uTransform[0]/len;transf[1]=uTransform[1]/len;vec3 pos=rotate(transf[0],aPosition);vec3 transl=2.0*(transf[0].w*transf[1].xyz-transf[1].w*transf[0].xyz+cross(transf[0].xyz,transf[1].xyz));pos+=transl;vNormal=rotate(transf[0],aNormal);vec4 plane=vec4(vec3(0.,0.,1.),-100.);vec3 ab=reflect(pos-uLightPos,vNormal);float t=(plane.w-dot(plane.xyz,pos))/(dot(plane.xyz,ab));vec3 q=pos+t*ab;if(t<=0.){q=vec3(0.);}vTexCoord=aTexCoord;vColor=ab;gl_Position=uProjection*vec4(q,1.0);vPosition=pos;}");
g=new N("f1",d.FRAGMENT_SHADER,"uniform sampler2D uTexture;varying highp vec2 vTexCoord;varying highp vec3 vColor;void main(){highp vec3 diffuse=vec3(-dot(normalize(vColor),vec3(0.,0.,1.)));diffuse*=texture2D(uTexture,vTexCoord).rgb;diffuse=max(vec3(.1),diffuse);gl_FragColor=vec4(diffuse,1.);}");b.u=new O(f,g);b.u.create(d);b.u.link(d);f=new N("v2",d.VERTEX_SHADER,"vec3 rotate(vec4 q, vec3 v){vec3 r=q.xyz;float a=q.w;return v+cross(2.0*r,cross(r,v)+a*v);}vec4 inverse(vec4 q){return vec4(vec3(-1.),1.)*q/dot(q,q);}uniform mat4 uProjection;uniform vec4 uTransform[2];attribute vec3 aPosition;attribute vec3 aNormal;varying vec3 vPosition;varying vec3 vNormal;void main(){float len=length(uTransform[0]);vec4 transf[2];transf[0]=uTransform[0]/len;transf[1]=uTransform[1]/len;vec3 pos=rotate(transf[0],aPosition);vec3 transl=2.0*(transf[0].w*transf[1].xyz-transf[1].w*transf[0].xyz+cross(transf[0].xyz,transf[1].xyz));pos+=transl;vPosition=pos;vNormal=rotate(transf[0],aNormal);gl_Position=uProjection*vec4(pos,1.0);}");
g=new N("f2",d.FRAGMENT_SHADER,"uniform highp vec3 uLightPos;varying highp vec3 vPosition;varying highp vec3 vNormal;void main(){highp vec3 light=normalize(uLightPos-vPosition);highp float spec=pow(clamp(length(cross(normalize(vPosition),normalize(light))),0.,1.),99.0);gl_FragColor=vec4(vec3(spec),1.);}");b.v=new O(f,g);b.v.create(d);b.v.link(d);d.enable(d.DEPTH_TEST);d.enable(d.CULL_FACE);b.D=d.createBuffer();b.Z=d.createBuffer();d.clearColor(0.1,0.1,0.1,1);b.g=I(new s(0,0,-15));b.L=new G;for(var f=
new ca,g=2*Math.PI*f.J,m=g/f.o,i=[],B=f.N=0;B<f.o/2;++B){var C=Math.random(),E=B*2*Math.PI/f.o,y=(B+1)*2*Math.PI/f.o,x=(E+y)/2,z=0.0025/Math.sin(x),x=Math.floor(Math.sin(x)*g/m);f.N+=x;for(var F=0;F<x;++F){var v=F*2*Math.PI/x,j=(F+1)*2*Math.PI/x,p=L(f,E+0.0025*Math.random(),v+z*Math.random()+C),t=L(f,E+0.0025*Math.random(),j-z*Math.random()+C),j=L(f,y-0.0025*Math.random(),j-z*Math.random()+C),v=L(f,y-0.0025*Math.random(),v+z*Math.random()+C),q=[p,t,j,v,p.f(t),t.f(j),j.f(v),v.f(p),p.f(t).f(j).f(v)][Math.floor(Math.random()*
9)].t(),P=new s(0.15,0.15),X=new s(0.15,0.85),Q=new s(0.85,0.85),Y=new s(0.85,0.15);i.push(p.x,p.y,p.a);i.push(q.x,q.y,q.a);i.push(f.j[0],f.j[1],f.j[2]);i.push(P.x,P.y);i.push(j.x,j.y,j.a);i.push(q.x,q.y,q.a);i.push(f.j[0],f.j[1],f.j[2]);i.push(Q.x,Q.y);i.push(t.x,t.y,t.a);i.push(q.x,q.y,q.a);i.push(f.j[0],f.j[1],f.j[2]);i.push(X.x,X.y);i.push(p.x,p.y,p.a);i.push(q.x,q.y,q.a);i.push(f.j[0],f.j[1],f.j[2]);i.push(P.x,P.y);i.push(v.x,v.y,v.a);i.push(q.x,q.y,q.a);i.push(f.j[0],f.j[1],f.j[2]);i.push(Y.x,
Y.y);i.push(j.x,j.y,j.a);i.push(q.x,q.y,q.a);i.push(f.j[0],f.j[1],f.j[2]);i.push(Q.x,Q.y)}}g=new Float32Array(i);b.W=f.N*6;d.bindBuffer(d.ARRAY_BUFFER,b.D);d.bufferData(d.ARRAY_BUFFER,g.byteLength,d.STATIC_DRAW);d.bufferSubData(d.ARRAY_BUFFER,0,g);g=[];m=new s;for(i=f.R=0;i<f.o/2;++i){B=i*2*Math.PI/f.o;C=(i+1)*2*Math.PI/f.o;f.R+=f.o;for(E=0;E<f.o;++E)t=E*2*Math.PI/f.o,j=(E+1)*2*Math.PI/f.o,y=L(f,B,t).b(0.99),z=L(f,B,t).t(),x=L(f,B,j).b(0.99),F=L(f,B,j).t(),p=L(f,C,j).b(0.99),j=L(f,C,j).t(),v=L(f,
C,t).b(0.99),t=L(f,C,t).t(),y.f(x).f(p).f(v).t(),g.push(y.x,y.y,y.a),g.push(z.x,z.y,z.a),g.push(m.x,m.y,m.a),g.push(0,0),g.push(p.x,p.y,p.a),g.push(j.x,j.y,j.a),g.push(m.x,m.y,m.a),g.push(0,0),g.push(x.x,x.y,x.a),g.push(F.x,F.y,F.a),g.push(m.x,m.y,m.a),g.push(0,0),g.push(y.x,y.y,y.a),g.push(z.x,z.y,z.a),g.push(m.x,m.y,m.a),g.push(0,0),g.push(v.x,v.y,v.a),g.push(t.x,t.y,t.a),g.push(m.x,m.y,m.a),g.push(0,0),g.push(p.x,p.y,p.a),g.push(j.x,j.y,j.a),g.push(m.x,m.y,m.a),g.push(0,0)}g=new Float32Array(g);
b.ea=f.R*6;d.bindBuffer(d.ARRAY_BUFFER,b.Z);d.bufferData(d.ARRAY_BUFFER,g.byteLength,d.STATIC_DRAW);d.bufferSubData(d.ARRAY_BUFFER,0,g);b.da=d.createTexture();d.bindTexture(d.TEXTURE_2D,b.da);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR_MIPMAP_LINEAR);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.LINEAR);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE);d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE);f=document.createElement("img");f.onload=R(d,d.TEXTURE_2D,
f,!0);f.src="light.png";b.q=0;S(b,d,b.q)};h.start=function(){this.$()};
h.$=function(){var a=this.F.width,c=this.F.height;if(this.aa!==a||this.Y!==c){this.aa=a;this.Y=c;var b=this.K;this.H.viewport(0,0,a,c);a/=c;b.S=[0.2/(a/10- -a/10),0,0,0,0,1,0,0,(a/10+-a/10)/(a/10- -a/10),0,-300.1/299.9,-1,0,0,-60/299.9,0]}b=this.K;a=this.H;if(b.T)b.L=b.L.b(J(w,T/16));if(b.e.e[74]&&!b.e.I[74])b.T=!b.T;if(b.e.e[78]&&!b.e.I[78]){++b.q;if(b.q>=U.length)b.q=0;S(b,a,b.q)}if(b.e.e[80]&&!b.e.I[80]){--b.q;if(b.q<0)b.q=U.length-1;S(b,a,b.q)}if(b.e.e[87])b.g=I(A.b(0.1)).b(b.g);if(b.e.e[83])b.g=
I(A.b(-0.1)).b(b.g);if(b.e.e[65])b.g=I(u.b(0.1)).b(b.g);if(b.e.e[68])b.g=I(u.b(-0.1)).b(b.g);if(b.e.e[90])b.g=I(w.b(0.1)).b(b.g);if(b.e.e[81])b.g=I(w.b(-0.1)).b(b.g);if(b.e.e[39])b.g=J(w,T).b(b.g);if(b.e.e[37])b.g=J(w,-T).b(b.g);if(b.e.e[40])b.g=J(u,T).b(b.g);if(b.e.e[38])b.g=J(u,-T).b(b.g);if(b.e.e[190])b.g=J(A,T).b(b.g);if(b.e.e[188])b.g=J(A,-T).b(b.g);a.clear(a.DEPTH_BUFFER_BIT|a.COLOR_BUFFER_BIT);a.useProgram(b.p.handle);a.cullFace(a.BACK);a.uniformMatrix4fv(b.p.uProjection,!1,b.S);a.uniform1i(b.p.uTexture,
b.U);c=(new K([b.g])).get();a.uniform4fv(b.p.uCamera,c);c=(new K([b.g.b(b.L)])).get();a.uniform4fv(b.p.uTransform,c);var d=b.g.transform(V);a.uniform3f(b.p.uLightPos,d.x,d.y,d.a);W(a,b.p,b.D,b.W,a.TRIANGLES);a.useProgram(b.v.handle);a.uniformMatrix4fv(b.v.uProjection,!1,b.S);a.uniform4fv(b.v.uTransform,c);a.uniform3f(b.v.uLightPos,d.x,d.y,d.a);W(a,b.v,b.Z,b.ea,a.TRIANGLES);a.useProgram(b.u.handle);a.cullFace(a.FRONT);a.uniformMatrix4fv(b.u.uProjection,!1,b.S);c=(new K([b.g.b(b.L)])).get();a.uniform4fv(b.u.uTransform,
c);c=b.g.transform(V);a.uniform3f(b.u.uLightPos,c.x,c.y,c.a);W(a,b.u,b.D,b.W,a.TRIANGLES);a.flush();this.e.update();this.X=k.requestAnimationFrame(n(this.$,this))};h.V=function(){k.cancelRequestAnimationFrame(this.X);this.reset()};h.reset=function(){this.Y=this.aa=this.X=this.K=this.H=this.F=e};function O(a,c){this.name=a.name+":"+c.name;this.C=a;this.B=c}var da=/(.*)\[.*/;function ea(a){var c=a.match(da);return c?c[1]:a}O.prototype.create=function(a){this.C.create(a);this.B.create(a);this.handle=a.createProgram()};O.prototype.z=function(a){a.detachShader(this.handle,this.C.handle);this.C.z(a);a.detachShader(this.handle,this.B.handle);this.B.z(a);a.deleteProgram(this.handle);this.handle=e};
O.prototype.link=function(a){this.C.compile(a);a.attachShader(this.handle,this.C.handle);this.B.compile(a);a.attachShader(this.handle,this.B.handle);a.linkProgram(this.handle);if(!a.getProgramParameter(this.handle,a.LINK_STATUS)){var c=a.getProgramInfoLog(this.handle);this.z(a);throw Error(c);}for(var c=a.getProgramParameter(this.handle,a.ACTIVE_UNIFORMS),b=0;b<c;++b){var d=ea(a.getActiveUniform(this.handle,b).name);this[d]=a.getUniformLocation(this.handle,d)}c=a.getProgramParameter(this.handle,a.ACTIVE_ATTRIBUTES);
for(b=0;b<c;++b)d=ea(a.getActiveAttrib(this.handle,b).name),this[d]=a.getAttribLocation(this.handle,d)};function fa(){};function N(a,c,b){this.name=a;this.ga=c;this.fa=b}N.prototype.create=function(a){this.handle=a.createShader(this.ga);a.shaderSource(this.handle,this.fa)};N.prototype.compile=function(a){a.compileShader(this.handle);if(!a.getShaderParameter(this.handle,a.COMPILE_STATUS)){var c=a.getShaderInfoLog(this.handle);this.z(a);throw Error(c);}};N.prototype.z=function(a){a.deleteShader(this.handle);this.handle=e};function ga(a){this.G=a;this.e={};this.I={}}h=ga.prototype;h.P=function(){this.G.onkeydown=n(this.ba,this);this.G.onkeyup=n(this.ca,this)};h.V=function(){this.G.onkeydown=this.G.onkeyup=e};h.ba=function(a){return this.e[a.keyCode]=!0};h.ca=function(a){this.e[a.keyCode]=!1;return!0};h.update=function(){for(var a in this.e)this.I[a]=this.e[a]};function K(a){this.n=a||[]}h=K.prototype;h.inverse=function(){for(var a=new K,c=0;c<this.n.length;++c)a.set(c,this.n[c].w());return a};h.b=function(a){for(var c=new K,b=0;b<this.n.length;++b)c.set(b,this.n[b].b(a.n[b]));return c};h.set=function(a,c){this.n[a]=c};h.reset=function(){this.n=[]};h.get=function(){for(var a=[],c=0;c<this.n.length;++c){var b=this.n[c];a.push(b.c.x.h,b.c.y.h,b.c.a.h,b.d.h,b.c.x.i,b.c.y.i,b.c.a.i,b.d.i)}return a};var Z=e;l("discoball.install",function(a){Z&&Z.V();var c=new ga(document);Z=new M(window,c);Z.P(a,new ha(c))});l("discoball.uninstall",function(){Z.V();Z=e});l("discoball.start",function(){Z.start()});function ha(a){this.e=a;this.D=this.p=e;this.T=!0}o(ha,fa);function $(a,c){return[a+"px."+c,a+"nx."+c,a+"py."+c,a+"ny."+c,a+"pz."+c,a+"nz."+c]}
var U=[$("a","jpg"),$("b","png"),$("c","png"),$("d","jpg"),$("e","png"),$("f","png"),$("g","png"),$("h","png"),$("i","png"),$("j","png"),$("k","jpg"),$("l","png"),$("m","png"),$("n","jpg"),$("o","png"),$("p","jpg"),$("q","png"),$("r","png"),$("s","png"),$("u","png"),$("v","png")];
function S(a,c,b){a.U&&c.deleteTexture(a.U);var b=U[b],d=c.createTexture();c.bindTexture(c.TEXTURE_CUBE_MAP,d);c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MIN_FILTER,c.LINEAR);c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MAG_FILTER,c.LINEAR);for(var f=[c.TEXTURE_CUBE_MAP_POSITIVE_X,c.TEXTURE_CUBE_MAP_NEGATIVE_X,c.TEXTURE_CUBE_MAP_POSITIVE_Y,c.TEXTURE_CUBE_MAP_NEGATIVE_Y,c.TEXTURE_CUBE_MAP_POSITIVE_Z,c.TEXTURE_CUBE_MAP_NEGATIVE_Z],g=0;g<6;++g){var m=document.createElement("img");m.onload=R(c,f[g],
m);m.src=b[g]}a.U=d}function R(a,c,b,d){return function(){a.texImage2D(c,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);d&&a.generateMipmap(c)}}
function W(a,c,b,d,f){a.bindBuffer(a.ARRAY_BUFFER,b);a.vertexAttribPointer(c.aPosition,3,a.FLOAT,!1,44,0);a.enableVertexAttribArray(c.aPosition);c.aNormal>=0&&(a.vertexAttribPointer(c.aNormal,3,a.FLOAT,!1,44,12),a.enableVertexAttribArray(c.aNormal));c.aColor>=0&&(a.vertexAttribPointer(c.aColor,3,a.FLOAT,!1,44,24),a.enableVertexAttribArray(c.aColor));c.aTexCoord>=0&&(a.vertexAttribPointer(c.aTexCoord,2,a.FLOAT,!1,44,36),a.enableVertexAttribArray(c.aTexCoord));a.drawArrays(f,0,d);a.disableVertexAttribArray(c.aPosition);
c.aNormal>=0&&a.disableVertexAttribArray(c.aNormal);c.aColor>=0&&a.disableVertexAttribArray(c.aColor);c.aTexCoord>=0&&a.disableVertexAttribArray(c.aTexCoord)}var V=new s(40,0,20),T=Math.PI/64;})();
