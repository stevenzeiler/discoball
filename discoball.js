(function(){var d=null,g,j=this;function k(a,c){var b=a.split("."),e=j;!(b[0]in e)&&e.execScript&&e.execScript("var "+b[0]);for(var h;b.length&&(h=b.shift());)!b.length&&c!==void 0?e[h]=c:e=e[h]?e[h]:e[h]={}}function aa(a,c,b){return a.call.apply(a.bind,arguments)}
function ba(a,c,b){if(!a)throw Error();if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,e);return a.apply(c,b)}}else return function(){return a.apply(c,arguments)}}function l(a,c,b){l=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?aa:ba;return l.apply(d,arguments)}
function m(a,c){function b(){}b.prototype=c.prototype;a.ha=c.prototype;a.prototype=new b};j.requestAnimationFrame=j.requestAnimationFrame||j.webkitRequestAnimationFrame||j.mozRequestAnimationFrame||j.oRequestAnimationFrame||j.msRequestAnimationFrame||function(a){return j.setTimeout(a,1E3/60)};j.cancelRequestAnimationFrame=j.cancelRequestAnimationFrame||j.webkitCancelRequestAnimationFrame||j.mozCancelRequestAnimationFrame||j.oCancelRequestAnimationFrame||j.msCancelRequestAnimationFrame||function(a){j.clearTimeout(a)};function p(a,c){this.c=a||new q;this.d=typeof c==="undefined"?1:c}g=p.prototype;g.m=function(){return new p(this.c.m(),-this.d)};g.Q=function(){return Math.sqrt(this.r())};g.r=function(){return this.d*this.d+this.c.r()};g.t=function(){return this.k(this.Q())};g.M=function(){return new p(this.c.m(),this.d)};g.w=function(){return this.M().k(this.r())};g.f=function(a){if(typeof a==="number")return new p(this.c,this.d+a);else if(a instanceof p)return new p(this.c.f(a.c),this.d+a.d);return d};
g.l=function(a){if(typeof a==="number")return new p(this.c,this.d-a);else if(a instanceof p)return new p(this.c.l(a.c),this.d-a.d);return d};g.b=function(a){if(typeof a==="number")return new p(this.c.b(a),this.d*a);else if(a instanceof p)return new p(a.c.b(this.d).f(this.c.b(a.d)).f(this.c.O(a.c)),this.d*a.d-this.c.A(a.c));return d};g.k=function(a){if(typeof a==="number")return new p(this.c.k(a),this.d/a);else if(a instanceof p)return this.b(a.w());return d};g.transform=function(a){return this.b(a).b(this.w()).c};
g.toString=function(){return this.c+" + "+this.d};function q(a,c,b){this.d=0;this.c=this;this.x=a||0;this.y=c||0;this.a=b||0}m(q,p);var s=new q(1,0,0),v=new q(0,1,0),z=new q(0,0,1);g=q.prototype;g.m=function(){return new q(-this.x,-this.y,-this.a)};g.r=function(){return this.A(this)};g.f=function(a){return a instanceof q?new q(this.x+a.x,this.y+a.y,this.a+a.a):p.prototype.f.call(this,a)};g.l=function(a){return a instanceof q?new q(this.x-a.x,this.y-a.y,this.a-a.a):p.prototype.f.call(this,a)};
g.b=function(a){return typeof a==="number"?new q(this.x*a,this.y*a,this.a*a):p.prototype.b.call(this,a)};g.k=function(a){return typeof a==="number"?new q(this.x/a,this.y/a,this.a/a):p.prototype.k.call(this,a)};g.O=function(a){return new q(this.y*a.a-this.a*a.y,this.a*a.x-this.x*a.a,this.x*a.y-this.y*a.x)};g.A=function(a){return this.x*a.x+this.y*a.y+this.a*a.a};g.toString=function(){return this.x+"i + "+this.y+"j + "+this.a+"k"};function B(a,c){this.h=a||0;this.i=c||0}g=B.prototype;g.s=function(){return new B(this.h,-this.i)};g.f=function(a){return new B(this.h+a.h,this.i+a.i)};g.l=function(a){return new B(this.h-a.h,this.i-a.i)};g.m=function(){return new B(-this.h,-this.i)};g.b=function(a){return new B(this.h*a.h,this.h*a.i+this.i*a.h)};g.inverse=function(){return new B(1/this.h,-this.i/this.h/this.h)};g.k=function(a){return this.b(a.inverse())};g.sqrt=function(){return new B(Math.sqrt(this.h),this.i/2/Math.sqrt(this.h))};
g.toString=function(){return this.h+" + "+this.i+"e"};function E(a,c){this.c=a||new F;this.d=typeof c==="undefined"?new B(1):c}function G(a){return new E(new F(new B(0,a.x/2),new B(0,a.y/2),new B(0,a.a/2)),new B(1))}function H(a,c){var b=a.t().b(Math.sin(c/2));return new E(new F(new B(b.x),new B(b.y),new B(b.a)),new B(Math.cos(c/2)))}g=E.prototype;g.h=function(){return new p(this.c.h(),this.d.h)};g.i=function(){return new p(this.c.i(),this.d.i)};g.m=function(){return new E(this.c.m(),this.d.m())};g.Q=function(){return this.r().sqrt()};g.r=function(){return this.d.b(this.d).f(this.c.r())};
g.t=function(){return this.k(this.Q())};g.M=function(){return new E(this.c.m(),this.d)};g.s=function(){return new E(this.c.s(),this.d.s())};g.w=function(){return this.M().k(this.r())};g.f=function(a){if(a instanceof B)return new E(this.c,this.d.f(a));else if(a instanceof E)return new E(this.c.f(a.c),this.d.f(a.d));return d};g.l=function(a){if(a instanceof B)return new E(this.c,this.d.l(a));else if(a instanceof E)return new E(this.c.l(a.c),this.d.l(a.d));return d};
g.b=function(a){if(a instanceof B)return new E(this.c.b(a),this.d.b(a));else if(a instanceof E)return new E(a.c.b(this.d).f(this.c.b(a.d)).f(this.c.O(a.c)),this.d.b(a.d).l(this.c.A(a.c)));else if(a instanceof I){for(var c=new I,b=0;b<a.n.length;++b)c.set(b,this.b(a.n[b]));return c}return d};g.k=function(a){if(a instanceof B)return new E(this.c.k(a),this.d.k(a));else if(a instanceof E)return this.b(a.w());return d};
g.transform=function(a){return this.b(new E(new F(new B(0,a.x),new B(0,a.y),new B(0,a.a)),new B(1))).b(this.s().w()).c.i()};g.toString=function(){return this.c+" + "+this.d};function F(a,c,b){this.d=new B;this.c=this;this.x=a||new B;this.y=c||new B;this.a=b||new B}m(F,E);g=F.prototype;g.h=function(){return new q(this.x.h,this.y.h,this.a.h)};g.i=function(){return new q(this.x.i,this.y.i,this.a.i)};g.s=function(){return new F(this.x.s(),this.y.s(),this.a.s())};g.m=function(){return new F(this.x.m(),this.y.m(),this.a.m())};g.r=function(){return this.A(this)};g.f=function(a){return a instanceof F?new F(this.x.f(a.x),this.y.f(a.y),this.a.f(a.a)):E.prototype.f.call(this,a)};
g.l=function(a){return a instanceof F?new F(this.x.l(a.x),this.y.l(a.y),this.a.l(a.a)):E.prototype.f.call(this,a)};g.b=function(a){return a instanceof B?new F(this.x.b(a),this.y.b(a),this.a.b(a)):E.prototype.b.call(this,a)};g.k=function(a){return a instanceof B?new F(this.x.k(a),this.y.k(a),this.a.k(a)):E.prototype.k.call(this,a)};g.O=function(a){return new F(this.y.b(a.a).l(this.a.b(a.y)),this.a.b(a.x).l(this.x.b(a.a)),this.x.b(a.y).l(this.y.b(a.x)))};g.A=function(a){return this.x.b(a.x).f(this.y.b(a.y)).f(this.a.b(a.a))};
g.toString=function(){return"("+this.x+")i + ("+this.y+")j + ("+this.a+")k"};function ca(){this.J=10;this.o=128;this.j=[4,4,4];this.R=this.N=d}function J(a,c,b){return new q(a.J*Math.sin(c)*Math.sin(b),a.J*Math.cos(c),a.J*Math.sin(c)*Math.cos(b))};function K(a,c){this.ia=a;this.e=c;this.reset()}g=K.prototype;g.P=function(a,c){this.F=a;this.H=this.F.getContext("experimental-webgl");this.K=c};
g.start=function(){var a=this.K,c=this.H;a.e.P();var b=new L("v0",c.VERTEX_SHADER,"vec3 rotate(vec4 q, vec3 v){vec3 r=q.xyz;float a=q.w;return v+cross(2.0*r,cross(r,v)+a*v);}vec4 inverse(vec4 q){return vec4(vec3(-1.),1.)*q/dot(q,q);}uniform mat4 uProjection;uniform vec4 uTransform[2];uniform vec4 uCamera[2];attribute vec3 aPosition;attribute vec3 aNormal;attribute vec3 aColor;attribute vec2 aTexCoord;varying vec3 vPosition;varying vec3 vNormal;varying vec3 vTexCoord;varying vec3 vColor;void main(){float len=length(uTransform[0]);vec4 transf[2];transf[0]=uTransform[0]/len;transf[1]=uTransform[1]/len;vec3 pos=rotate(transf[0],aPosition);vec3 transl=2.0*(transf[0].w*transf[1].xyz-transf[1].w*transf[0].xyz+cross(transf[0].xyz,transf[1].xyz));pos+=transl;len=length(uCamera[0]);vec4 camera[2];camera[0]=uCamera[0]/len;vNormal=rotate(transf[0],aNormal);vTexCoord=rotate(inverse(camera[0]),reflect(pos,vNormal));vColor=aColor;gl_Position=uProjection*vec4(pos,1.0);vPosition=pos;}"),e=
new L("f0",c.FRAGMENT_SHADER,"uniform highp vec3 uLightPos;uniform samplerCube uTexture;varying highp vec3 vPosition;varying highp vec3 vNormal;varying highp vec3 vTexCoord;varying lowp vec3 vColor;const highp float AMBIENT=0.25;void main(){highp vec3 light=uLightPos-vPosition;highp float spec=pow(clamp(-dot(normalize(vPosition),normalize(reflect(-light,vNormal))),0.,1.),99.0);highp float dot=dot(normalize(light),vNormal);highp vec3 diffuse=vec3(max(dot,AMBIENT));highp vec3 color=textureCube(uTexture,normalize(vTexCoord)).xyz*vColor;gl_FragColor=vec4(diffuse*color+vec3(spec),1.);}");
a.p=new M(b,e);a.p.create(c);a.p.link(c);b=new L("v1",c.VERTEX_SHADER,"vec3 rotate(vec4 q, vec3 v){vec3 r=q.xyz;float a=q.w;return v+cross(2.0*r,cross(r,v)+a*v);}vec4 inverse(vec4 q){return vec4(vec3(-1.),1.)*q/dot(q,q);}uniform mat4 uProjection;uniform highp vec3 uLightPos;uniform vec4 uTransform[2];uniform vec4 uCamera[2];attribute vec3 aPosition;attribute vec3 aNormal;attribute vec3 aColor;attribute vec2 aTexCoord;varying vec3 vPosition;varying vec3 vNormal;varying vec2 vTexCoord;varying vec3 vColor;void main(){float len=length(uTransform[0]);vec4 transf[2];transf[0]=uTransform[0]/len;transf[1]=uTransform[1]/len;vec3 pos=rotate(transf[0],aPosition);vec3 transl=2.0*(transf[0].w*transf[1].xyz-transf[1].w*transf[0].xyz+cross(transf[0].xyz,transf[1].xyz));pos+=transl;vNormal=rotate(transf[0],aNormal);vec4 plane=vec4(vec3(0.,0.,1.),-100.);vec3 ab=reflect(pos-uLightPos,vNormal);float t=(plane.w-dot(plane.xyz,pos))/(dot(plane.xyz,ab));vec3 q=pos+t*ab;if(t<=0.){q=vec3(0.);}vTexCoord=aTexCoord;vColor=ab;gl_Position=uProjection*vec4(q,1.0);vPosition=pos;}");
e=new L("f1",c.FRAGMENT_SHADER,"uniform sampler2D uTexture;varying highp vec2 vTexCoord;varying highp vec3 vColor;void main(){highp vec3 diffuse=vec3(-dot(normalize(vColor),vec3(0.,0.,1.)));diffuse=max(vec3(.1),diffuse);gl_FragColor=vec4(diffuse,1.);}");a.u=new M(b,e);a.u.create(c);a.u.link(c);b=new L("v2",c.VERTEX_SHADER,"vec3 rotate(vec4 q, vec3 v){vec3 r=q.xyz;float a=q.w;return v+cross(2.0*r,cross(r,v)+a*v);}vec4 inverse(vec4 q){return vec4(vec3(-1.),1.)*q/dot(q,q);}uniform mat4 uProjection;uniform vec4 uTransform[2];attribute vec3 aPosition;attribute vec3 aNormal;varying vec3 vPosition;varying vec3 vNormal;void main(){float len=length(uTransform[0]);vec4 transf[2];transf[0]=uTransform[0]/len;transf[1]=uTransform[1]/len;vec3 pos=rotate(transf[0],aPosition);vec3 transl=2.0*(transf[0].w*transf[1].xyz-transf[1].w*transf[0].xyz+cross(transf[0].xyz,transf[1].xyz));pos+=transl;vPosition=pos;vNormal=rotate(transf[0],aNormal);gl_Position=uProjection*vec4(pos,1.0);}");
e=new L("f2",c.FRAGMENT_SHADER,"uniform highp vec3 uLightPos;varying highp vec3 vPosition;varying highp vec3 vNormal;void main(){highp vec3 light=normalize(uLightPos-vPosition);highp float spec=pow(clamp(length(cross(normalize(vPosition),normalize(light))),0.,1.),99.0);gl_FragColor=vec4(vec3(spec),1.);}");a.v=new M(b,e);a.v.create(c);a.v.link(c);c.enable(c.DEPTH_TEST);c.enable(c.CULL_FACE);a.D=c.createBuffer();a.Z=c.createBuffer();c.clearColor(0.1,0.1,0.1,1);a.g=G(new q(0,0,-15));a.L=new E;for(var b=
new ca,e=2*Math.PI*b.J,h=e/b.o,f=[],u=b.N=0;u<b.o/2;++u){var A=Math.random(),C=u*2*Math.PI/b.o,x=(u+1)*2*Math.PI/b.o,w=(C+x)/2,y=0.0025/Math.sin(w),w=Math.floor(Math.sin(w)*e/h);b.N+=w;for(var D=0;D<w;++D){var t=D*2*Math.PI/w,i=(D+1)*2*Math.PI/w,n=J(b,C+0.0025*Math.random(),t+y*Math.random()+A),r=J(b,C+0.0025*Math.random(),i-y*Math.random()+A),i=J(b,x-0.0025*Math.random(),i-y*Math.random()+A),t=J(b,x-0.0025*Math.random(),t+y*Math.random()+A),o=[n,r,i,t,n.f(r),r.f(i),i.f(t),t.f(n),n.f(r).f(i).f(t)][Math.floor(Math.random()*
9)].t(),N=new q(0.15,0.15),V=new q(0.15,0.85),O=new q(0.85,0.85),W=new q(0.85,0.15);f.push(n.x,n.y,n.a);f.push(o.x,o.y,o.a);f.push(b.j[0],b.j[1],b.j[2]);f.push(N.x,N.y);f.push(i.x,i.y,i.a);f.push(o.x,o.y,o.a);f.push(b.j[0],b.j[1],b.j[2]);f.push(O.x,O.y);f.push(r.x,r.y,r.a);f.push(o.x,o.y,o.a);f.push(b.j[0],b.j[1],b.j[2]);f.push(V.x,V.y);f.push(n.x,n.y,n.a);f.push(o.x,o.y,o.a);f.push(b.j[0],b.j[1],b.j[2]);f.push(N.x,N.y);f.push(t.x,t.y,t.a);f.push(o.x,o.y,o.a);f.push(b.j[0],b.j[1],b.j[2]);f.push(W.x,
W.y);f.push(i.x,i.y,i.a);f.push(o.x,o.y,o.a);f.push(b.j[0],b.j[1],b.j[2]);f.push(O.x,O.y)}}e=new Float32Array(f);a.W=b.N*6;c.bindBuffer(c.ARRAY_BUFFER,a.D);c.bufferData(c.ARRAY_BUFFER,e.byteLength,c.STATIC_DRAW);c.bufferSubData(c.ARRAY_BUFFER,0,e);e=[];h=new q;for(f=b.R=0;f<b.o/2;++f){u=f*2*Math.PI/b.o;A=(f+1)*2*Math.PI/b.o;b.R+=b.o;for(C=0;C<b.o;++C)r=C*2*Math.PI/b.o,i=(C+1)*2*Math.PI/b.o,x=J(b,u,r).b(0.99),y=J(b,u,r).t(),w=J(b,u,i).b(0.99),D=J(b,u,i).t(),n=J(b,A,i).b(0.99),i=J(b,A,i).t(),t=J(b,
A,r).b(0.99),r=J(b,A,r).t(),x.f(w).f(n).f(t).t(),e.push(x.x,x.y,x.a),e.push(y.x,y.y,y.a),e.push(h.x,h.y,h.a),e.push(0,0),e.push(n.x,n.y,n.a),e.push(i.x,i.y,i.a),e.push(h.x,h.y,h.a),e.push(0,0),e.push(w.x,w.y,w.a),e.push(D.x,D.y,D.a),e.push(h.x,h.y,h.a),e.push(0,0),e.push(x.x,x.y,x.a),e.push(y.x,y.y,y.a),e.push(h.x,h.y,h.a),e.push(0,0),e.push(t.x,t.y,t.a),e.push(r.x,r.y,r.a),e.push(h.x,h.y,h.a),e.push(0,0),e.push(n.x,n.y,n.a),e.push(i.x,i.y,i.a),e.push(h.x,h.y,h.a),e.push(0,0)}e=new Float32Array(e);
a.ea=b.R*6;c.bindBuffer(c.ARRAY_BUFFER,a.Z);c.bufferData(c.ARRAY_BUFFER,e.byteLength,c.STATIC_DRAW);c.bufferSubData(c.ARRAY_BUFFER,0,e);a.da=c.createTexture();c.bindTexture(c.TEXTURE_2D,a.da);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR_MIPMAP_LINEAR);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);b=document.createElement("img");b.onload=P(c,c.TEXTURE_2D,
b,!0);b.src="res/light.png";a.q=0;Q(a,c,a.q);this.$()};
g.$=function(){var a=this.F.width,c=this.F.height;if(this.aa!==a||this.Y!==c){this.aa=a;this.Y=c;var b=this.K;this.H.viewport(0,0,a,c);a/=c;b.S=[0.2/(a/10- -a/10),0,0,0,0,1,0,0,(a/10+-a/10)/(a/10- -a/10),0,-300.1/299.9,-1,0,0,-60/299.9,0]}b=this.K;a=this.H;if(b.T)b.L=b.L.b(H(v,R/16));if(b.e.e[74]&&!b.e.I[74])b.T=!b.T;if(b.e.e[78]&&!b.e.I[78]){++b.q;if(b.q>=S.length)b.q=0;Q(b,a,b.q)}if(b.e.e[80]&&!b.e.I[80]){--b.q;if(b.q<0)b.q=S.length-1;Q(b,a,b.q)}if(b.e.e[87])b.g=G(z.b(0.1)).b(b.g);if(b.e.e[83])b.g=
G(z.b(-0.1)).b(b.g);if(b.e.e[65])b.g=G(s.b(0.1)).b(b.g);if(b.e.e[68])b.g=G(s.b(-0.1)).b(b.g);if(b.e.e[90])b.g=G(v.b(0.1)).b(b.g);if(b.e.e[81])b.g=G(v.b(-0.1)).b(b.g);if(b.e.e[39])b.g=H(v,R).b(b.g);if(b.e.e[37])b.g=H(v,-R).b(b.g);if(b.e.e[40])b.g=H(s,R).b(b.g);if(b.e.e[38])b.g=H(s,-R).b(b.g);if(b.e.e[190])b.g=H(z,R).b(b.g);if(b.e.e[188])b.g=H(z,-R).b(b.g);a.clear(a.DEPTH_BUFFER_BIT|a.COLOR_BUFFER_BIT);a.useProgram(b.p.handle);a.cullFace(a.BACK);a.uniformMatrix4fv(b.p.uProjection,!1,b.S);a.uniform1i(b.p.uTexture,
b.U);c=(new I([b.g])).get();a.uniform4fv(b.p.uCamera,c);c=(new I([b.g.b(b.L)])).get();a.uniform4fv(b.p.uTransform,c);var e=b.g.transform(T);a.uniform3f(b.p.uLightPos,e.x,e.y,e.a);U(a,b.p,b.D,b.W,a.TRIANGLES);a.useProgram(b.v.handle);a.uniformMatrix4fv(b.v.uProjection,!1,b.S);a.uniform4fv(b.v.uTransform,c);a.uniform3f(b.v.uLightPos,e.x,e.y,e.a);U(a,b.v,b.Z,b.ea,a.TRIANGLES);a.useProgram(b.u.handle);a.cullFace(a.FRONT);a.uniformMatrix4fv(b.u.uProjection,!1,b.S);c=(new I([b.g.b(b.L)])).get();a.uniform4fv(b.u.uTransform,
c);c=b.g.transform(T);a.uniform3f(b.u.uLightPos,c.x,c.y,c.a);U(a,b.u,b.D,b.W,a.TRIANGLES);a.flush();this.e.update();this.X=j.requestAnimationFrame(l(this.$,this))};g.V=function(){j.cancelRequestAnimationFrame(this.X);this.reset()};g.reset=function(){this.Y=this.aa=this.X=this.K=this.H=this.F=d};function M(a,c){this.name=a.name+":"+c.name;this.C=a;this.B=c}var da=/(.*)\[.*/;function X(a){var c=a.match(da);return c?c[1]:a}M.prototype.create=function(a){this.C.create(a);this.B.create(a);this.handle=a.createProgram()};M.prototype.z=function(a){a.detachShader(this.handle,this.C.handle);this.C.z(a);a.detachShader(this.handle,this.B.handle);this.B.z(a);a.deleteProgram(this.handle);this.handle=d};
M.prototype.link=function(a){this.C.compile(a);a.attachShader(this.handle,this.C.handle);this.B.compile(a);a.attachShader(this.handle,this.B.handle);a.linkProgram(this.handle);if(!a.getProgramParameter(this.handle,a.LINK_STATUS)){var c=a.getProgramInfoLog(this.handle);this.z(a);throw Error(c);}for(var c=a.getProgramParameter(this.handle,a.ACTIVE_UNIFORMS),b=0;b<c;++b){var e=X(a.getActiveUniform(this.handle,b).name);this[e]=a.getUniformLocation(this.handle,e)}c=a.getProgramParameter(this.handle,a.ACTIVE_ATTRIBUTES);
for(b=0;b<c;++b)e=X(a.getActiveAttrib(this.handle,b).name),this[e]=a.getAttribLocation(this.handle,e)};function ea(){};function L(a,c,b){this.name=a;this.ga=c;this.fa=b}L.prototype.create=function(a){this.handle=a.createShader(this.ga);a.shaderSource(this.handle,this.fa)};L.prototype.compile=function(a){a.compileShader(this.handle);if(!a.getShaderParameter(this.handle,a.COMPILE_STATUS)){var c=a.getShaderInfoLog(this.handle);this.z(a);throw Error(c);}};L.prototype.z=function(a){a.deleteShader(this.handle);this.handle=d};function Y(a){this.G=a;this.e={};this.I={}}g=Y.prototype;g.P=function(){this.G.onkeydown=l(this.ba,this);this.G.onkeyup=l(this.ca,this)};g.V=function(){this.G.onkeydown=this.G.onkeyup=d};g.ba=function(a){return this.e[a.keyCode]=!0};g.ca=function(a){this.e[a.keyCode]=!1;return!0};g.update=function(){for(var a in this.e)this.I[a]=this.e[a]};function I(a){this.n=a||[]}g=I.prototype;g.inverse=function(){for(var a=new I,c=0;c<this.n.length;++c)a.set(c,this.n[c].w());return a};g.b=function(a){for(var c=new I,b=0;b<this.n.length;++b)c.set(b,this.n[b].b(a.n[b]));return c};g.set=function(a,c){this.n[a]=c};g.reset=function(){this.n=[]};g.get=function(){for(var a=[],c=0;c<this.n.length;++c){var b=this.n[c];a.push(b.c.x.h,b.c.y.h,b.c.a.h,b.d.h,b.c.x.i,b.c.y.i,b.c.a.i,b.d.i)}return a};var Z=d;k("discoball.install",function(a){Z&&Z.V();var c=new Y(document);Z=new K(window,c);Z.P(a,new fa(c))});k("discoball.uninstall",function(){Z.V();Z=d});k("discoball.start",function(){Z.start()});function fa(a){this.e=a;this.D=this.p=d;this.T=!0}m(fa,ea);function $(a,c){return["res/"+a+"px."+c,"res/"+a+"nx."+c,"res/"+a+"py."+c,"res/"+a+"ny."+c,"res/"+a+"pz."+c,"res/"+a+"nz."+c]}
var S=[$("a","jpg"),$("b","png"),$("c","png"),$("d","jpg"),$("e","png"),$("f","png"),$("g","png"),$("h","png"),$("i","png"),$("j","png"),$("k","jpg"),$("l","png"),$("m","png"),$("n","jpg"),$("o","png"),$("p","jpg"),$("q","png"),$("r","png"),$("s","png"),$("u","png"),$("v","png")];
function Q(a,c,b){a.U&&c.deleteTexture(a.U);var b=S[b],e=c.createTexture();c.bindTexture(c.TEXTURE_CUBE_MAP,e);c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MIN_FILTER,c.LINEAR);c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MAG_FILTER,c.LINEAR);for(var h=[c.TEXTURE_CUBE_MAP_POSITIVE_X,c.TEXTURE_CUBE_MAP_NEGATIVE_X,c.TEXTURE_CUBE_MAP_POSITIVE_Y,c.TEXTURE_CUBE_MAP_NEGATIVE_Y,c.TEXTURE_CUBE_MAP_POSITIVE_Z,c.TEXTURE_CUBE_MAP_NEGATIVE_Z],f=0;f<6;++f){var u=document.createElement("img");u.onload=P(c,h[f],
u);u.src=b[f]}a.U=e}function P(a,c,b,e){return function(){a.texImage2D(c,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);e&&a.generateMipmap(c)}}
function U(a,c,b,e,h){a.bindBuffer(a.ARRAY_BUFFER,b);a.vertexAttribPointer(c.aPosition,3,a.FLOAT,!1,44,0);a.enableVertexAttribArray(c.aPosition);c.aNormal>=0&&(a.vertexAttribPointer(c.aNormal,3,a.FLOAT,!1,44,12),a.enableVertexAttribArray(c.aNormal));c.aColor>=0&&(a.vertexAttribPointer(c.aColor,3,a.FLOAT,!1,44,24),a.enableVertexAttribArray(c.aColor));c.aTexCoord>=0&&(a.vertexAttribPointer(c.aTexCoord,2,a.FLOAT,!1,44,36),a.enableVertexAttribArray(c.aTexCoord));a.drawArrays(h,0,e);a.disableVertexAttribArray(c.aPosition);
c.aNormal>=0&&a.disableVertexAttribArray(c.aNormal);c.aColor>=0&&a.disableVertexAttribArray(c.aColor);c.aTexCoord>=0&&a.disableVertexAttribArray(c.aTexCoord)}var T=new q(40,0,20),R=Math.PI/64;})();
