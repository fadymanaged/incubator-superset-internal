(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{3129:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(2),a=n.n(r),i=n(0),o=n.n(i);function s(t,e){class n extends o.a.Component{constructor(t){super(t),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=e&&e.componentWillUnmount&&e.componentWillUnmount.bind(this)()}setContainerRef(t){this.container=t}execute(){this.container&&t(this.container,this.props)}render(){const{id:t,className:e}=this.props;return(o.a.createElement("div",{ref:this.setContainerRef,id:t,className:e}))}}n.propTypes={id:a.a.string,className:a.a.string};const r=n;return t.displayName&&(r.displayName=t.displayName),t.propTypes&&(r.propTypes={...r.propTypes,...t.propTypes}),t.defaultProps&&(r.defaultProps=t.defaultProps),n}},3541:function(t,e,n){},3560:function(t,e,n){"use strict";function r(t){var e=0,n=t.children,r=n&&n.length;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}n.d(e,"a",(function(){return a}));function a(t,e){var n,r,a,o,l,d=new c(t),h=+t.value&&(d.value=t.value),p=[d];for(null==e&&(e=i);n=p.pop();)if(h&&(n.value=+n.data.value),(a=e(n.data))&&(l=a.length))for(n.children=new Array(l),o=l-1;o>=0;--o)p.push(r=n.children[o]=new c(a[o])),r.parent=n,r.depth=n.depth+1;return d.eachBefore(s)}function i(t){return t.children}function o(t){t.data=t.data.data}function s(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function c(t){this.data=t,this.depth=this.height=0,this.parent=null}c.prototype=a.prototype={constructor:c,count:function(){return this.eachAfter(r)},each:function(t){var e,n,r,a,i=this,o=[i];do{for(e=o.reverse(),o=[];i=e.pop();)if(t(i),n=i.children)for(r=0,a=n.length;r<a;++r)o.push(n[r])}while(o.length);return this},eachAfter:function(t){for(var e,n,r,a=this,i=[a],o=[];a=i.pop();)if(o.push(a),e=a.children)for(n=0,r=e.length;n<r;++n)i.push(e[n]);for(;a=o.pop();)t(a);return this},eachBefore:function(t){for(var e,n,r=this,a=[r];r=a.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)a.push(e[n]);return this},sum:function(t){return this.eachAfter((function(e){for(var n=+t(e.data)||0,r=e.children,a=r&&r.length;--a>=0;)n+=r[a].value;e.value=n}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),r=e.ancestors(),a=null;t=n.pop(),e=r.pop();for(;t===e;)a=t,t=n.pop(),e=r.pop();return a}(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var a=r.length;t!==n;)r.splice(a,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){var t=[];return this.each((function(e){t.push(e)})),t},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},copy:function(){return a(this).eachBefore(o)}}},3636:function(t,e,n){"use strict";n.r(e);var r=n(3129),a=n(210),i=n.n(a),o=n(2),s=n.n(o),c=n(3560),l=n(612),d=n(718),h=n(1386);n(3541);function p(t){const e=[],n=1/(t.height+1);let r=null;return t.each(t=>{t.y=n*t.depth,t.dy=n,t.parent?(t.x=r.depth===t.parent.depth?0:r.x+r.dx,t.dx=t.weight/t.parent.sum*t.parent.dx):(t.x=0,t.dx=1),r=t,e.push(t)}),e}const u=t=>()=>t().apply(void 0,arguments),f=s.a.shape({name:s.a.string,val:s.a.number.isRequired}),m={name:s.a.string,val:s.a.number.isRequired,children:s.a.arrayOf(s.a.oneOfType([s.a.shape(u(()=>m)),f]))},g=s.a.oneOfType([s.a.shape(m),f]),v={data:s.a.arrayOf(g),width:s.a.number,height:s.a.number,colorScheme:s.a.string,dateTimeFormat:s.a.string,equalDateSize:s.a.bool,levels:s.a.arrayOf(s.a.string),metrics:s.a.arrayOf(s.a.oneOfType([s.a.string,s.a.object])),numberFormat:s.a.string,partitionLimit:s.a.number,partitionThreshold:s.a.number,timeSeriesOption:s.a.string,useLogScale:s.a.bool,useRichTooltip:s.a.bool};function y(t){const e=[t];let n=t;for(;n.parent;)e.push(n.parent),n=n.parent;return e}function b(t,e){const{width:n,height:r,data:a,colorScheme:o,dateTimeFormat:s,equalDateSize:u,levels:f,useLogScale:m=!1,metrics:g=[],numberFormat:v,partitionLimit:b,partitionThreshold:x,useRichTooltip:w,timeSeriesOption:$="not_time"}=e,T=i.a.select(t);T.classed("superset-legacy-chart-partition",!0);const O=["adv_anal","time_series"].includes($),N=Object(l.c)(v),A=Object(d.d)(s),S=h.b.getScale(o);T.selectAll("*").remove();const R=T.append("div").classed("partition-tooltip",!0);function k(t){return g.includes(t.data.name)&&O}function j(t){return t?O&&1===t?"Date":f[t-(O?2:1)]:"Metric"}function B(e,o){const s=o[e],l=n,d=r/a.length,h=i.a.scale.linear().range([0,l]),f=i.a.scale.linear().range([0,d]),g=T.append("div").attr("class","chart").style("width",`${l}px`).style("height",`${d}px`).append("svg:svg").attr("width",l).attr("height",d);e!==a.length-1&&a.length>1&&g.style("padding-bottom","3px"),0!==e&&a.length>1&&g.style("padding-top","3px");const v=Object(c.a)(s);function $(e,n){let r="<table>";if(w){y(n).reverse().forEach(t=>{const e=t.depth===n.depth;r+="<tbody>",r+="<tr><td><div "+`style='border: 2px solid ${e?"black":"transparent"};`+`background-color: ${t.color};'`+"></div></td>"+`<td>${j(t.depth)}</td>`+`<td>${t.name}</td>`+`<td>${t.disp}</td>`+"</tr>"})}else r+='<thead><tr><td colspan="3">'+`<strong>${j(n.depth)}</strong>`+"</td></tr></thead><tbody>",r+="<tr><td>"+`<div style='border: thin solid grey; background-color: ${n.color};'`+"></div></td>"+`<td>${n.name}</td>`+`<td>${n.disp}</td>`+"</tr>";r+="</tbody></table>";const[a,o]=i.a.mouse(t);e.html(r).style("left",`${a+15}px`).style("top",`${o}px`)}v.eachAfter(t=>{t.disp=t.data.val,t.value=t.disp<0?-t.disp:t.disp,t.weight=t.value,t.name=t.data.name,t.parent&&k(t.parent)&&(t.weight=u?1:t.value,t.value=t.name,t.name=A(t.name)),m&&(t.weight=Math.log(t.weight+1)),t.disp=t.disp&&!Number.isNaN(t.disp)&&Number.isFinite(t.disp)?N(t.disp):""}),v.sort((t,e)=>{const n=e.value-t.value;return 0===n?e.name>t.name?1:-1:n}),x&&x>=0&&v.each(t=>{if(t.sum=t.children&&t.children.reduce((t,e)=>t+e.weight,0)||1,t.children)if(k(t)){if(u)return;const e=[];for(let n=1;n<t.children.length;n+=1)t.children[n].weight/t.sum<x&&e.push(n);for(let n=e.length-1;n>=0;n-=1)t.children.splice(e[n],1)}else{let e;for(e=1;e<t.children.length&&!(t.children[e].weight/t.sum<x);e+=1);t.children=t.children.slice(0,e)}}),b&&b>=0&&v.each(t=>{t.children&&t.children.length>b&&(k(t)||(t.children=t.children.slice(0,b)))}),v.eachAfter(t=>{t.sum=t.children&&t.children.reduce((t,e)=>t+e.weight,0)||1});const O=p(v);let B=l/v.dx,C=d/1;function D(t){return`translate(8,${t.dx*C/2})`}const F=g.selectAll("g").data(O).enter().append("svg:g").attr("transform",t=>`translate(${h(t.y)},${f(t.x)})`).on("mouseover",t=>{R.interrupt().transition().duration(100).style("opacity",.9),$(R,t)}).on("mousemove",t=>{$(R,t)}).on("mouseout",()=>{R.interrupt().transition().duration(250).style("opacity",0)});F.on("click",(function t(e){if(!e.children)return!!e.parent&&t(e.parent);B=(e.y?l-40:l)/(1-e.y),C=d/e.dx,h.domain([e.y,1]).range([e.y?40:0,l]),f.domain([e.x,e.x+e.dx]);const n=F.transition().duration(i.a.event.altKey?7500:750).attr("transform",t=>`translate(${h(t.y)},${f(t.x)})`);return n.select("rect").attr("width",e.dy*B).attr("height",t=>t.dx*C),n.select("text").attr("transform",D).style("opacity",t=>t.dx*C>12?1:0),i.a.event.stopPropagation(),!0})),F.append("svg:rect").attr("width",v.dy*B).attr("height",t=>t.dx*C),F.append("svg:text").attr("transform",D).attr("dy","0.35em").style("opacity",t=>t.dx*C>12?1:0).text(t=>t.disp?`${t.name}: ${t.disp}`:t.name),F.selectAll("rect").style("fill",t=>(t.color=S(t.name),t.color))}for(let t=0;t<a.length;t+=1)B(t,a)}b.displayName="Icicle",b.propTypes=v;var x=b;e.default=Object(r.a)(x)}}]);