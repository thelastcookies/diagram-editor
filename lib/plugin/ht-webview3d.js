!function(Z){"use strict";function W(B){var J,I,P,z,A,p,L,q=[],k=0;J=x.createDiv(),J.style.overflow="hidden";var $=B.getView();$.insertBefore(J,B.getCanvas()),I=i.Default.createDiv(),I.style.WebkitTransformStyle="preserve-3d",I.style.MozTransformStyle="preserve-3d",I.style.transformStyle="preserve-3d",J.appendChild(I),[{event:"mousedown",style:"none"},{event:"mouseup",style:"auto"},{event:"touchstart",style:"none"},{event:"touchend",style:"auto"}].forEach(function(_){var U=_.style;$.addEventListener(_.event,function(){J.style.pointerEvents=U})}),this.updateWebView=function(){var j=B.getCanvas(),C=1*j.style.width.slice(0,-2),e=1*j.style.height.slice(0,-2);(q[0]!==C||q[1]!==e)&&(q[0]=C,q[1]=e,J.style.width=C+"px",J.style.height=e+"px",I.style.width=C+"px",I.style.height=e+"px");var M=B._projectMatrix[5]*q[1]/2;M!==P&&(P=M,J.style.WebkitPerspective=P+"px",J.style.MozPerspective=P+"px",J.style.perspective=P+"px"),p="translateZ("+P+"px)"+H(B._viewMatrix);var l=p+"translate("+q[0]/2+"px,"+q[1]/2+"px)";z===l||A||(I.style.WebkitTransform=l,I.style.MozTransform=l,I.style.transform=l,z=l),k++,L=!1,B.dm().each(function(W){W.isWebView&&Q(W)});for(var r,K=I.children,O=[],m=0,U=K.length;U>m;m++)r=K[m],r._isHtWebView&&r._renderCookie!==k&&O.push(r);O.length&&O.forEach(function(c){I.removeChild(c)})};var u=new Array(16),Q=function(K){var x=K.getAttach();if(x){x.parentElement!==I&&I.appendChild(x),x._renderCookie=k,L=!0;var E=K.getFinalScale3d(),U=K._prefrenceSize;U&&U[0]?U[1]||(U[1]=U[0]/E[0]*E[1]):U=[E[0],E[1]],x.style.width=U[0]+"px",x.style.height=U[1]+"px";var c=1/U[0],O=1/U[1],w=1,g=K.mat;u[0]=g[0]*c,u[1]=g[1]*c,u[2]=g[2]*c,u[3]=g[3]*c,u[4]=g[4]*O,u[5]=g[5]*O,u[6]=g[6]*O,u[7]=g[7]*O,u[8]=g[8]*w,u[9]=g[9]*w,u[10]=g[10]*w,u[11]=g[11]*w,u[12]=g[12],u[13]=g[13],u[14]=g[14],u[15]=g[15];var M=y(u,A?"translate("+q[0]/2+"px,"+q[1]/2+"px)"+p:""),R=x.$a2;R!==M&&(x.$a2=M,x.style.WebkitTransform=M,x.style.MozTransform=M,x.style.transform=M)}}}function n(l){return Math.abs(l)<1e-10?0:l}function H(i){var h=i;return"matrix3d("+n(h[0])+","+n(-h[1])+","+n(h[2])+","+n(h[3])+","+n(h[4])+","+n(-h[5])+","+n(h[6])+","+n(h[7])+","+n(h[8])+","+n(-h[9])+","+n(h[10])+","+n(h[11])+","+n(h[12])+","+n(-h[13])+","+n(h[14])+","+n(h[15])+")"}function y(Q,v){var F=Q,N="matrix3d("+n(F[0])+","+n(F[1])+","+n(F[2])+","+n(F[3])+","+n(-F[4])+","+n(-F[5])+","+n(-F[6])+","+n(-F[7])+","+n(F[8])+","+n(F[9])+","+n(F[10])+","+n(F[11])+","+n(F[12])+","+n(F[13])+","+n(F[14])+","+n(F[15])+")";return"translate(-50%,-50%)"+(v||"")+N}var l="ht",i=Z[l],x=i.Default,P=x.getInternal(),X=P.superCall,w=i.graph3d.Graph3dView,C=w.prototype.validateImpl;w.prototype.validateImpl=function(){C.call(this);var f=this._webViewRenderer;f||(f=this._webViewRenderer=new W(this)),f.updateWebView()};var t=i.WebView3d=function(){var O=this;X(t,O),O.s({shape3d:"billboard","shape3d.reverse.flip":!0})},q=[1,1,1,1],Y=[0,0,0,0];x.def(l+"."+"WebView3d",i.Node,{ms_ac:["attach"],isWebView:!0,attachDOM:function(D,Q,K){if(!D)return this.detachDOM();if("string"==typeof D){var V=document.createElement("iframe");V.src=D,D=V}var t=D.style;t.position="absolute",t.border=0,t.outline=0,t.padding=0,t.margin=0,D._isHtWebView=!0,this.setAttach(D),this._prefrenceSize=[Q,K],this.s("shape3d.blend",Y)},detachDOM:function(){this.setAttach(null),this.s("shape3d.blend",this.getBgColor())},setBgColor:function(U){this.a("defaultBgColor",U),this.getAttach()||this.s("shape3d.blend",U)},getBgColor:function(){return this.a("defaultBgColor")||q}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);