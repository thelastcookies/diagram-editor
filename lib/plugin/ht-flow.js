!function(T){"use strict";var g="ht",d=T[g],p=d.Default,z=Math,b=z.PI,Z=2*b,c=z.sin,B=z.cos,t=z.atan2,j=z.sqrt,C=z.max,f=z.floor,A=(z.round,z.ceil),O=z.abs,E=d.Shape,I=d.Edge,m=d.List,X=d.Style,w=d.graph,$=p.getInternal(),N=$.ui(),Q=null,P="__segmentLengths",s="__lineTotalLength",G="__linePoints",y="__distance0",F="flow.count",e="flow.step",o="flow.element.max",H="flow.element.count",x="flow.element.min",W="flow.element.space",D="flow.element.autorotate",u="flow.element.background",K="flow.element.shadow.max",U="flow.element.shadow.min",S="flow.element.shadow.begincolor",r="flow.element.shadow.endcolor",_="flow.element.shadow.visible",M="flow.element.image",R="flow",i="prototype",n=w.GraphView[i],v=d.Data[i],a=N.DataUI[i],q=N.ShapeUI[i],h=N.EdgeUI[i],L=d.DataModel[i],J=q._80o,V=h._80o,l=L.prepareRemove,Y=h._79o,k=q._79o,_o=n.setDataModel,qk=function(Z){return document.createElement(Z)};n.calculatePointLength=function(P,X,N){var I=this,Z=I.getDataUI(P);N==Q&&(N=.1);var R=vh(Z),w=[];if(R){for(var e=R.length,C=0;e>C;C++){var K=R[C];K._as&&(K=K._as);for(var D=K[0],l=1;l<K.length;l++)w.push([D,K[l]]),D=K[l]}for(var Y=[],C=0;C<w.length;C++){var G=mk(w[C][0],w[C][1],X);Y.push(G)}var S=Y.slice(0);S.sort(function(t,m){return t.z>m.z?1:t.z<m.z?-1:0});var L=S[0];if(L.z<N){for(var d=Y.indexOf(L),W=0,C=0;d>=C;C++)W+=d>C?p.getDistance(w[C][0],w[C][1]):p.getDistance(w[C][0],L);return W}}},p.calculatePointLength=function(u,N,C,h){h==Q&&(h=.1);var a=vh(Q,u,N),N=[];if(a){for(var D=a.length,m=0;D>m;m++){var i=a[m];i._as&&(i=i._as);for(var R=i[0],S=1;S<i.length;S++)N.push([R,i[S]]),R=i[S]}for(var $=[],m=0;m<N.length;m++){var o=mk(N[m][0],N[m][1],C);$.push(o)}var y=$.slice(0);y.sort(function(O,l){return O.z>l.z?1:O.z<l.z?-1:0});var I=y[0];if(I.z<h){for(var M=$.indexOf(I),_=0,m=0;M>=m;m++)_+=M>m?p.getDistance(N[m][0],N[m][1]):p.getDistance(N[m][0],I);return _}}},n.calculateClosestPoint=function(d,B){var p=this,L=p.getDataUI(d),f=vh(L),t=[];if(f){for(var b=f.length,G=0;b>G;G++){var e=f[G];e._as&&(e=e._as);for(var E=e[0],W=1;W<e.length;W++)t.push([E,e[W]]),E=e[W]}for(var U=[],G=0;G<t.length;G++){var x=mk(t[G][0],t[G][1],B);U.push(x)}return U.sort(function(a,i){return a.z>i.z?1:a.z<i.z?-1:0}),U[0]}},p.calculateClosestPoint=function(T,g,k){var s=vh(Q,T,g),g=[];if(s){for(var X=s.length,c=0;X>c;c++){var F=s[c];F._as&&(F=F._as);for(var d=F[0],M=1;M<F.length;M++)g.push([d,F[M]]),d=F[M]}for(var G=[],c=0;c<g.length;c++){var V=mk(g[c][0],g[c][1],k);G.push(V)}return G.sort(function(t,N){return t.z>N.z?1:t.z<N.z?-1:0}),G[0]}},n.getPercentAngle=function(g,V){var f=this,C=f.getDataUI(g),v=g.getRotation?g.getRotation():0,S=vh(C);if(S)if(0===V){var W=S[0][0],J=S[0][1];v+=t(J.y-W.y,J.x-W.x)}else if(100===V){S=S[S.length-1];var W=S[S.length-2],J=S[S.length-1];v+=t(J.y-W.y,J.x-W.x)}else{for(var z=0,O=[],s=S.length,A=0;s>A;A++){var m=S[A],p=fp(m);z+=p,O.push(p)}for(var Z=z*V/100,Y=Ih(Z,O),I=0,M=0;Y>M;M++)I+=O[M];Z-=I;for(var w=Gb(S[Y],Z),P=S[Y],h=0,o=0,F=0;F<P.length-1;F++){var E=P[F],d=P[F+1],r=d.x-E.x,y=d.y-E.y,n=j(r*r+y*y);if(h+=n,h>Z){o=F;break}}var B=P[o];v+=t(w.y-B.y,w.x-B.x)}return v},p.getPercentAngle=function(Y,V,q){var u=0,x=vh(Q,Y,V);if(x)if(0===q){var G=x[0][0],W=x[0][1];u+=t(W.y-G.y,W.x-G.x)}else if(100===q){x=x[x.length-1];var G=x[x.length-2],W=x[x.length-1];u+=t(W.y-G.y,W.x-G.x)}else{for(var s=0,C=[],c=x.length,r=0;c>r;r++){var n=x[r],H=fp(n);s+=H,C.push(H)}for(var T=s*q/100,w=Ih(T,C),L=0,X=0;w>X;X++)L+=C[X];T-=L;for(var $=Gb(x[w],T),y=x[w],P=0,e=0,M=0;M<y.length-1;M++){var h=y[M],l=y[M+1],Z=l.x-h.x,a=l.y-h.y,m=j(Z*Z+a*a);if(P+=m,P>T){e=M;break}}var i=y[e];u+=t($.y-i.y,$.x-i.x)}return u},n.calculateLength=function(T){var z=this,p=z.getDataUI(T),i=vh(p),q=0;if(i)if(Array.isArray(i[0]))for(var N=i.length,n=0;N>n;n++){var l=i[n],B=fp(l);q+=B}else q=fp(i);return q},p.calculateLength=function(y,d){var y=vh(Q,y,d),f=0;if(y)if(Array.isArray(y[0]))for(var n=y.length,l=0;n>l;l++){var $=y[l],k=fp($);f+=k}else f=fp(y);return f};var mk=p.calculateClosestPointOnLine=function(c,m,$){var U=c.x,k=c.y,x=m.x,F=m.y,L=$.x,i=$.y,B={},e=x-U,u=F-k,V=Math.sqrt(e*e+u*u),s=e/V,t=u/V,S=(-U+L)*s+(-k+i)*t;return B.x=U+S*s,B.y=k+S*t,Vf(B,c,m)||(B.x=Math.abs(B.x-c.x)<Math.abs(B.x-m.x)?c.x:m.x,B.y=Math.abs(B.y-c.y)<Math.abs(B.y-m.y)?c.y:m.y),e=L-B.x,u=i-B.y,B.z=Math.sqrt(e*e+u*u),B},Vf=function(h,w,l){return h.x>=Math.min(w.x,l.x)&&h.x<=Math.max(w.x,l.x)&&h.y>=Math.min(w.y,l.y)&&h.y<=Math.max(w.y,l.y)},fp=function(u){for(var $=0,s=u.length-1,o=0;s>o;o++){var I=u[o],V=u[o+1],M=V.x-I.x,D=V.y-I.y,H=j(M*M+D*D);$+=H}return $},Gb=function(E,J){for(var s=0,L=0,l=0,u=E.length-1,T=0;u>T;T++){var n=E[T],Y=E[T+1],w=Y.x-n.x,K=Y.y-n.y;if(l=j(w*w+K*K),s+=l,s>J){s-=l,L=T;break}}var Z=E[L],e=E[L+1],z=t(e.y-Z.y,e.x-Z.x),X=J-s,K=c(z)*X,w=B(z)*X;return{x:Z.x+w,y:Z.y+K}},tn=function(X,T,m,q){var D=B(q),a=c(q),i=D*T-a*m,z=a*T+D*m;return X?{x:X.x+i,y:X.y+z}:{x:i,y:z}},Hl=function(z,M){z[P]=z[s]=z[G]=M[y]=Q},oj=function(C,M,W,J,Q,U){var d,_,N,D,f,k,P,s,g,R,x,e=[];if(O(J)>Z&&(J=Z),f=A(O(J)/(b/4)),d=J/f,_=-d,N=-W,f>0){k=C+B(W)*Q,P=M+c(-W)*U,e.push({x:k,y:P});for(var $=0;f>$;$++)N+=_,D=N-_/2,s=C+B(N)*Q,g=M+c(N)*U,R=C+B(D)*(Q/B(_/2)),x=M+c(D)*(U/B(_/2)),e.push({x:R,y:x}),e.push({x:s,y:g})}return e},vh=function(j,U,q){if(U==Q){var R=j._data;if(R instanceof E){if(U=R.getPoints(),q=R.getSegments(),(!q||0===q.size())&&U){q=new d.List([1]);for(var V=1;V<U.size();V++)q.add(2)}}else if(R instanceof I){var o=j._78o;if(o){var H=o.type,g=o.points,s=o.segments,L=o.edgeTypeInfo;if(!H||g){var r=o.sourcePoint,B=r.x,X=r.y,G=o.targetPoint,c=G.x,w=G.y;if(H)s?(U=new m({x:B,y:X}),U.addAll(g),U.add({x:c,y:w}),q=new m(s._as)):(U=new m({x:B,y:X}),q=new m([1]),g.each(function(Q){U.add(Q),q.add(2)}),U.add({x:c,y:w}),q.add(2));else if(o.looped){U=new m(oj(B,X,0,Z,o.radius,o.radius)),q=new m([1]);for(var V=0;V<(U.size()-1)/2;V++)q.add(3)}else U=new m,o.center?(U.add({x:o.c1.x,y:o.c1.y}),U.add({x:B,y:X}),U.add({x:c,y:w}),U.add({x:o.c2.x,y:o.c2.y}),q=new m([1,2,2,2])):(U.add({x:B,y:X}),U.add({x:c,y:w}),q=new m([1,2]))}else if(L)if(U=new m(L.points._as),L.segments)q=new m(L.segments._as);else{q=new m([1]);for(var V=1;V<L.points.size();V++)q.add(2)}}}}if(U){if(Array.isArray(U)&&(U=new m(U)),"number"==typeof U.get(0)){for(var N=new d.List,V=0;V<U.size();V+=2)N.add({x:U.get(V),y:U.get(V+1)});U=N}if(!q){q=[];for(var V=0;V<U.size();V++)0===V?q.push(1):q.push(2)}Array.isArray(q)&&(q=new m(q));for(var p=$.toPointsArray(U._as,q._as,50),l=p.length,u=[],V=0;l>V;V++){var t=p[V];t.length>1&&u.push(t)}return u}},Ko=function(x){var n=x._data,o=vh(x);if(o){n.s("flow.reverse")&&(o.reverse(),o.forEach(function(F){F.reverse()}));for(var b=0,w=[],Y=o.length,Z=0;Y>Z;Z++){var J=o[Z],X=fp(J);b+=X,w.push(X)}if(n[P]=w,n[s]=b,n[G]=o,n instanceof I){var f=p.unionPoint(o),E=f.x+f.width/2,i=f.y+f.height/2;n.$10e={x:E,y:i}}Af(x,!0)}},Af=(p.getPercentPositionOnPoints=function(h,q,K){if(h){var o=vh(Q,h,q);if(o){var F;if(0===K)F=o[0][0];else if(100===K)o=o[o.length-1],F=o[o.length-1];else{for(var V=0,d=[],B=o.length,i=0;B>i;i++){var P=o[i],x=fp(P);V+=x,d.push(x)}for(var X=V*K/100,J=Ih(X,d),t=0,Y=0;J>Y;Y++)t+=d[Y];X-=t,F=Gb(o[J],X)}return F}}},n.getPercentPosition=function(g,B){var m=this,S=m.getDataUI(g),a=vh(S);if(a){var Q;if(0===B)Q=a[0][0];else if(100===B)a=a[a.length-1],Q=a[a.length-1];else{for(var I=0,f=[],h=a.length,T=0;h>T;T++){var e=a[T],Y=fp(e);I+=Y,f.push(Y)}for(var U=I*B/100,r=Ih(U,f),V=0,C=0;r>C;C++)V+=f[C];U-=V,Q=Gb(a[r],U)}return Q}},function(E,J){var Z=E._data,V=Z[s],z=Z.s(F),S=Z.s(e),j=0,k=Z[P],Q=Z.s(o),T=Z.s(x),Y=Z.s(H),O=(Q-T)/(Y-1),t=[];if(k){if(1===Y)t.push(Q);else if(2===Y)t.push(Q),t.push(T);else{if(!(Y>2))return;t.push(Q);for(var m=Y-2;m>0;m--)t.push(T+O*m);t.push(T)}var $=0,l=0;t.forEach(function(n){Y-1>$&&(l+=Z.getFlowElementSpace(n)),$++}),l+=(Q+T)/2,j=(V-z*l+l)/z;var c=E[y];for(null==c&&(c=0),J||(c+=S);c>V+l;){var B=E._overCount;B?B++:B=1,B>=z&&(B=null),E._overCount=B,Z.s("flow.autoreverse")?B?c-=j+l:(c=0,Z.s("flow.reverse",!Z.s("flow.reverse"))):c-=j+l}E[y]=c}}),Op=function(J){var N=J.data,B=this.dm();if(N&&"add"===J.kind){var Y=B.$3e;Y&&N.s(R)&&Y.indexOf(N)<0&&Y.push(N)}"clear"===J.kind&&(B.$3e=[])},rd=function(Y){var T=Y.property,d=Y.data,h=Y.newValue,i=this.dm().$3e;if(i&&"s:flow"===T)if(h)i.indexOf(d)<0&&i.push(d);else for(var O=i.length,V=0;O>V;V++)if(i[V]===d){i.splice(V,1);break}},Ih=Ih=function(H,J){for(var n=0,i=J.length,D=0;i>D;D++){var Y=J[D];if(n+=Y,n>H)return D}return Math.min(D,i-1)},Vr=function(S){var C=this,q=C._data,J=q[s],L=q[P],a=q[G],u=q.s(F),B=0,z=C[y],b=q.s(o),l=q.s(x),i=q.s(H),O=q.s(U),e=q.s(K),Z=q.s(D),X=(e-O)/(i-1),r=(b-l)/(i-1),h=q.getRotation?q.getRotation():0,W=q.getPosition?q.p():q.$10e,Y=[],M=[];if(z!=Q){if(1===i)Y.push(b);else if(2===i)Y.push(b),Y.push(l);else{if(!(i>2))return;Y.push(b);for(var f=i-2;f>0;f--)Y.push(l+r*f);Y.push(l)}if(1===i)M.push(e);else if(2===i)M.push(e),M.push(O);else{if(!(i>2))return;M.push(e);for(var f=i-2;f>0;f--)M.push(O+X*f);M.push(O)}var V=0,g=0;Y.forEach(function(N){i-1>V&&(g+=q.getFlowElementSpace(N)),V++}),g+=(b+l)/2,B=(J-u*g+g)/u,S.save();for(var f=0;u>f;f++){var A=z,p=0,R=C._overCount,d=0;q.s("flow.autoreverse")&&R&&R>u-(f+1)||(A-=f*(B+g),V=0,Y.forEach(function(T){var g=A-p;if(g>=0&&J>g){var u=!0,w=Ih(g,L);d=0;for(var R=0;w>R;R++)d+=L[R];if(g-=d,u){var N=Gb(a[w],g),P=h;if(Z){for(var O=a[w],Q=0,X=0,B=0;B<O.length-1;B++){var b=O[B],i=O[B+1],m=i.x-b.x,n=i.y-b.y,e=j(m*m+n*n);if(Q+=e,Q>g){X=B;break}}var r=O[X];P+=t(N.y-r.y,N.x-r.x)}h&&(N=tn(W,N.x-W.x,N.y-W.y,h)),C.$5e(S,N,T,M[V],P)}}p+=q.getFlowElementSpace(Y[V]),V++}))}S.restore()}},Nk=function(){var B=this,V=B._data,n=V.s(o),S=!1,E=Q;if(B._6I||(S=!0),E=V instanceof I?Y.call(B):k.call(B),V.s(R)&&S){var j=V.s(K),$=V.s(_);$&&j>n&&(n=j),n>0&&p.grow(E,A(n/2)),Ko(B)}return!V.s(R)&&S&&Hl(V,B),E};v.getFlowElementSpace=function(){return this.s(W)},q._79o=Nk,h._79o=Nk,X[o]==Q&&(X[o]=7),X[x]==Q&&(X[x]=0),X[F]==Q&&(X[F]=1),X[e]==Q&&(X[e]=3),X[H]==Q&&(X[H]=10),X[W]==Q&&(X[W]=3.5),X[D]==Q&&(X[D]=!1),X[u]==Q&&(X[u]="rgba(255, 255, 114, 0.4)"),X[S]==Q&&(X[S]="rgba(255, 255, 0, 0.3)"),X[r]==Q&&(X[r]="rgba(255, 255, 0, 0)"),X[_]==Q&&(X[_]=1),X[K]==Q&&(X[K]=22),X[U]==Q&&(X[U]=4),L.prepareRemove=function(G){l.call(this,G);var J=G._dataModel,R=J.$3e;if(R)for(var p=R.length,O=0;p>O;O++)if(R[O]===G){R.splice(O,1);break}},n.setDataModel=function(F){var y=this,q=y._dataModel;if(q!==F){q&&(q.umm(Op,y),q.umd(rd,y),q.$3e=[]),F.mm(Op,y),F.md(rd,y);var s=F.$3e=[];F.each(function(r){r.s(R)&&s.indexOf(r)<0&&s.push(r)}),_o.call(y,F)}},n.setFlowInterval=function(a){var Z=this,P=Z.$11e;Z.$11e=a,Z.fp("flowInterval",P,a),Z.$7e!=Q&&(clearInterval(Z.$7e),delete Z.$7e,Z.enableFlow(a))},n.getFlowInterval=function(){return this.$11e},n.$9e=function(){var P,E,q,S=this,K=S.tx(),x=S.ty(),k=S.getZoom(),Z=S.getWidth(),Y=S.getHeight(),L={x:-K/k,y:-x/k,width:Z/k,height:Y/k},I=S.dm().$3e,v=S._56I,J=new m;if(I.forEach(function(z){v[z.getId()]&&(P=S.getDataUI(z),P&&(q=P._79o(),q&&J.add(q)))}),0!==J.size()&&(J.each(function(J){p.intersectsRect(L,J)&&(E=p.unionRect(E,J))}),E&&(E&&(p.grow(E,C(1,1/k)),E.x=f(E.x*k)/k,E.y=f(E.y*k)/k,E.width=A(E.width*k)/k,E.height=A(E.height*k)/k,E=p.intersection(L,E)),E))){var H=S._canvas.getContext("2d");H.save(),H.lineCap=p.lineCap,H.lineJoin=p.lineJoin,$.translateAndScale(H,K,x,k),H.beginPath(),H.rect(E.x,E.y,E.width,E.height),H.clip(),H.clearRect(E.x,E.y,E.width,E.height),S.$6e(H,E),H.restore()}},n.$6e=function(w,Y){var K,I,T=this;T._93db(w),T.each(function(v){T._56I[v._id]&&(K=T.getDataUI(v),K&&(I=K._79o(),(!Y||p.intersectsRect(Y,I))&&K._42(w)))}),T._92db(w)},n.enableFlow=function(h){var f=this,b=f.dm(),W=b.$3e;f.$7e==Q&&(W.forEach(function(M){var k=f.getDataUI(M);Ko(k)}),f.$7e=setInterval(function(){b.$3e.forEach(function(G){Af(f.getDataUI(G))}),f.$9e()},h||f.$11e||50))},n.disableFlow=function(){var R=this;clearInterval(R.$7e),delete R.$7e;var r=R.dm().$3e;r&&R.$9e()},a.$5e=function(g,y,X,h,e){var o=this,a=o._data,z=o.gv,m=a.s(u),Y=a.s(S),f=a.s(r),J=a.s(_),d=z.$8e,O=a.s(M);if(d==Q&&(d=z.$8e={}),g.beginPath(),O!=Q){var w=p.getImage(O),K=X/2;g.translate(y.x,y.y),g.rotate(e),g.translate(-y.x,-y.y),p.drawImage(g,w,y.x-K,y.y-K,X,X,a),g.translate(y.x,y.y),g.rotate(-e),g.translate(-y.x,-y.y)}else g.fillStyle=m,g.arc(y.x,y.y,X/2,0,Z,!0),g.fill();if(J){var A=22,i=A+"_"+Y+"_"+f,x=d[i];if(x==Q){var W=qk("canvas");$.setCanvas(W,A,A);var q=W.getContext("2d"),E=A/2,T=E,k=E;$.translateAndScale(q,0,0,1),q.beginPath();var j=q.createRadialGradient(T,k,0,T,T,E);j.addColorStop(0,Y),j.addColorStop(1,f),q.fillStyle=j,q.arc(T,k,E,0,Z,!0),q.fill(),x=d[i]=W}var K=h/2;p.drawImage(g,x,y.x-K,y.y-K,h,h,a)}},h._80o=function(v){V.call(this,v);var x=this,$=x._data,y=x.gv;$.s(R)&&y.$7e!=Q&&Vr.call(x,v)},q._80o=function(P){J.call(this,P);var L=this,E=L._data,g=L.gv;E.s(R)&&g.$7e!=Q&&Vr.call(L,P)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);