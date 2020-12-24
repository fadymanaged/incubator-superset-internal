(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1076:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));a(117),a(35);var n=a(25),l=a.n(n),s=a(4),o=a.n(s),c=a(65),i=a.n(c),r=a(6),d=a.n(r),b=a(8),h=a.n(b),u=a(0),f=a(61),p=a(74),m=a(9),O=a(84),j=a.n(O),g=a(71),y=a(130),C=a(610),v=a(832),x=a(1);function S(){const e=h()(["\n  .fa-refresh {\n    padding-left: 9px;\n  }\n\n  .refresh-col {\n    display: flex;\n    align-items: center;\n    width: 30px;\n  }\n\n  .section {\n    padding-bottom: 5px;\n    display: flex;\n    flex-direction: row;\n  }\n\n  .select {\n    flex-grow: 1;\n  }\n"]);return S=function(){return e},e}function _(){const e=h()(["\n  color: ",";\n  font-size: ","px;\n  margin: 20px 0 10px 0;\n  text-transform: uppercase;\n"]);return _=function(){return e},e}const E=f.c.p(_(),({theme:e})=>e.colors.secondary.light2,({theme:e})=>e.typography.sizes.s),w=f.c.div(S());function T({dbId:e,formMode:t=!1,getDbList:a,getTableList:n,handleError:s,isDatabaseSelectEnabled:c=!0,onChange:r,onDbChange:b,onSchemaChange:h,onSchemasLoad:f,readOnly:O=!1,schema:S,sqlLabMode:_=!1}){const[T,D]=Object(u.useState)(e),[I,k]=Object(u.useState)(S),[N,M]=Object(u.useState)(!1),[L,R]=Object(u.useState)([]);function K(t,a=!1){const n=t||e;if(n){M(!0);const e="/api/v1/database/"+n+"/schemas/?q="+j.a.encode({force:Boolean(a)});return p.a.get({endpoint:e}).then(({json:e})=>{var t;const a=d()(t=e.result).call(t,e=>({value:e,label:e,title:e}));R(a),M(!1),f&&f(a)}).catch(()=>{R([]),M(!1),s(Object(m.e)("Error while fetching schema list"))})}return i.a.resolve()}function q({dbId:e,schema:t}){D(e),k(t),r&&r({dbId:e,schema:t,tableName:void 0})}function P(e){var t;return a&&a(e.result),0===e.result.length&&s(Object(m.e)("It seems you don't have access to any database")),d()(t=e.result).call(t,e=>o()({},e,{label:e.backend+" "+e.database_name}))}function A(e,t=!1){const a=e?e.id:null;R([]),h&&h(null),b&&b(e),K(a,t),q({dbId:a,schema:void 0})}function F(e){return Object(x.f)("span",{title:e.database_name},Object(x.f)(y.a,{bsStyle:"default"},e.backend)," ",e.database_name)}function B(e,t){return Object(x.f)("div",{className:"section"},Object(x.f)("span",{className:"select"},e),Object(x.f)("span",{className:"refresh-col"},t))}return Object(u.useEffect)(()=>{T&&K(T)},[T]),Object(x.f)(w,null,t&&Object(x.f)(E,null,Object(m.e)("datasource")),function(){const e=j.a.encode(o()({order_columns:"database_name",order_direction:"asc",page:0,page_size:-1},t||!_?{}:{filters:[{col:"expose_in_sqllab",opr:"eq",value:!0}]}));return B(Object(x.f)(C.a,{dataEndpoint:"/api/v1/database/?q="+e,onChange:e=>A(e),onAsyncError:()=>s(Object(m.e)("Error while fetching database list")),clearable:!1,value:T,valueKey:"id",valueRenderer:e=>Object(x.f)("div",null,Object(x.f)("span",{className:"text-muted m-r-5"},Object(m.e)("Database:")),F(e)),optionRenderer:F,mutator:P,placeholder:Object(m.e)("Select a database"),autoSelect:!0,isDisabled:!c||O}),null)}(),t&&Object(x.f)(E,null,Object(m.e)("schema")),function(){const a=l()(L).call(L,({value:e})=>I===e),s=!t&&!O&&Object(x.f)(v.a,{onClick:()=>A({id:e},!0),tooltipContent:Object(m.e)("Force refresh schema list")});return B(Object(x.f)(g.f,{name:"select-schema",placeholder:Object(m.e)("Select a schema (%s)",L.length),options:L,value:a,valueRenderer:e=>Object(x.f)("div",null,Object(x.f)("span",{className:"text-muted"},Object(m.e)("Schema:"))," ",e.label),isLoading:N,autosize:!1,onChange:e=>function(e,t=!1){const a=e?e.value:null;h&&h(a),k(a),q({dbId:T,schema:a}),n&&n(T,a,t)}(e),isDisabled:O}),s)}())}},1143:function(e,t,a){"use strict";a(117),a(35);var n=a(65),l=a.n(n),s=a(6),o=a.n(s),c=a(8),i=a.n(c),r=a(0),d=a(61),b=a(74),h=a(9),u=a(71),f=a(119),p=a(1076),m=a(832),O=a(985),j=a(1);function g(){const e=i()(["\n  align-items: center;\n  display: flex;\n  white-space: nowrap;\n\n  > svg,\n  > small {\n    margin-right: ","px;\n  }\n"]);return g=function(){return e},e}function y(){const e=i()(["\n  .fa-refresh {\n    padding-left: 9px;\n  }\n\n  .refresh-col {\n    display: flex;\n    align-items: center;\n    width: 30px;\n  }\n\n  .section {\n    padding-bottom: 5px;\n    display: flex;\n    flex-direction: row;\n  }\n\n  .select {\n    flex-grow: 1;\n  }\n\n  .divider {\n    border-bottom: 1px solid ",";\n    margin: 15px 0;\n  }\n"]);return y=function(){return e},e}function C(){const e=i()(["\n  color: ",";\n  font-size: ","px;\n  margin: 20px 0 10px 0;\n  text-transform: uppercase;\n"]);return C=function(){return e},e}const v=d.c.p(C(),({theme:e})=>e.colors.secondary.light2,({theme:e})=>e.typography.sizes.s),x=d.c.div(y(),({theme:e})=>e.colors.secondary.light5),S=d.c.span(g(),({theme:e})=>e.gridUnit);t.a=({database:e,dbId:t,formMode:a=!1,getDbList:n,handleError:s,isDatabaseSelectEnabled:c=!0,onChange:i,onDbChange:d,onSchemaChange:g,onSchemasLoad:y,onTableChange:C,onTablesLoad:_,readOnly:E=!1,schema:w,sqlLabMode:T=!0,tableName:D,tableNameSticky:I=!0})=>{const[k,N]=Object(r.useState)(w),[M,L]=Object(r.useState)(D),[R,K]=Object(r.useState)(!1),[q,P]=Object(r.useState)([]);function A(e,a,n=!1,c="undefined"){const i=a||k,r=e||t;if(r&&i){const e=encodeURIComponent(i),t=encodeURIComponent(c);K(!0),P([]);const a=encodeURI("/superset/tables/"+r+"/"+e+"/"+t+"/"+!!n+"/");return b.a.get({endpoint:a}).then(({json:e})=>{var t;const a=o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type,extra:null==e?void 0:e.extra}));K(!1),P(a),_&&_(e.options)}).catch(()=>{K(!1),P([]),s(Object(h.e)("Error while fetching table list"))})}return K(!1),P([]),l.a.resolve()}function F({dbId:e,schema:t,tableName:a}){L(a),N(t),i&&i({dbId:e,schema:t,tableName:a})}function B(e="undefined"){if(!t||!e){const e=[];return l.a.resolve({options:e})}const a=encodeURIComponent(w||""),n=encodeURIComponent(e);return b.a.get({endpoint:encodeURI("/superset/tables/"+t+"/"+a+"/"+n)}).then(({json:e})=>{var t;return{options:o()(t=e.options).call(t,e=>({value:e.value,schema:e.schema,label:e.label,title:e.title,type:e.type}))}})}function U(e){if(!e)return void L("");const a=e.schema,n=e.value;I&&F({dbId:t,schema:a,tableName:n}),C&&C(n,a)}function z(e){var t;return Object(j.f)(S,{title:e.label},Object(j.f)("small",{className:"text-muted"},Object(j.f)("i",{className:"fa fa-"+("view"===e.type?"eye":"table")})),(null===(t=e.extra)||void 0===t?void 0:t.certification)&&Object(j.f)(O.a,{certifiedBy:e.extra.certification.certified_by,details:e.extra.certification.details,size:20}),e.label)}return Object(r.useEffect)(()=>{t&&w&&A()},[t,w]),Object(j.f)(x,null,Object(j.f)(p.a,{dbId:t,formMode:a,getDbList:n,getTableList:A,handleError:s,onChange:F,onDbChange:E?void 0:d,onSchemaChange:E?void 0:g,onSchemasLoad:y,schema:k,sqlLabMode:T,isDatabaseSelectEnabled:c&&!E,readOnly:E}),!a&&Object(j.f)("div",{className:"divider"}),T&&Object(j.f)("div",{className:"section"},Object(j.f)(f.a,null,Object(h.e)("See table schema")," ",w&&Object(j.f)("small",null,q.length," in",Object(j.f)("i",null,w)))),a&&Object(j.f)(v,null,Object(h.e)("Table")),function(){const n=q;let l=null;if(k&&!a)l=Object(j.f)(u.f,{name:"select-table",isLoading:R,ignoreAccents:!1,placeholder:Object(h.e)("Select table or type table name"),autosize:!1,onChange:U,options:n,value:M,optionRenderer:z,valueRenderer:z,isDisabled:E});else if(a)l=Object(j.f)(u.c,{name:"select-table",isLoading:R,ignoreAccents:!1,placeholder:Object(h.e)("Select table or type table name"),autosize:!1,onChange:U,options:n,value:M,optionRenderer:z});else{let t,a=!1;e&&e.allow_multi_schema_metadata_fetch?t=Object(h.e)("Type to search ..."):(t=Object(h.e)("Select table "),a=!0),l=Object(j.f)(u.b,{name:"async-select-table",placeholder:t,isDisabled:a,autosize:!1,onChange:U,value:M,loadOptions:B,optionRenderer:z})}return function(e,t){return Object(j.f)("div",{className:"section"},Object(j.f)("span",{className:"select"},e),Object(j.f)("span",{className:"refresh-col"},t))}(l,!a&&!E&&Object(j.f)(m.a,{onClick:()=>function(e,a=!1){const n=e?e.value:null;g&&g(n),F({dbId:t,schema:n,tableName:void 0}),A(t,k,a)}({value:w},!0),tooltipContent:Object(h.e)("Force refresh table list")}))}())}},1374:function(e,t,a){},1687:function(e,t,a){"use strict";a.r(t);a(35);var n=a(79),l=a.n(n),s=a(29),o=a.n(s),c=a(63),i=a.n(c),r=a(6),d=a.n(r),b=a(4),h=a.n(b),u=a(7),f=a.n(u),p=a(25),m=a.n(p),O=a(18),j=a.n(O),g=a(8),y=a.n(g),C=a(0),v=a.n(C),x=a(2),S=a.n(x),_=a(3060),E=a(3058),w=a(1006),T=a(1682),D=a(309),I=a(125),k=a.n(I),N=a(61),M=a(9),L=a(74),R=a(126),K=a(32),q=a(985),P=a(1076),A=a(33),F=a(130),B=a(167),U=a(1143),z=a(765),G=a(66),W=a(397),Q=a(394),J=a(453),H=a(1075),Y=a(1074),V=a(1077),Z=a(26),X=a.n(Z),$=a(41),ee=a.n($),te=a(301),ae=a.n(te),ne=a(3061);function le(e,t,a){var n;return d()(n=v.a.Children).call(n,e,e=>{let n=e;return e&&e.type.name===t.name&&(n=v.a.cloneElement(e,a(e))),n&&n.props.children&&(n=v.a.cloneElement(n,{children:le(n.props.children,t,a)})),n})}a(234);var se=a(737),oe=a(717),ce=a(59),ie=a(83),re=a(75),de=a(3),be=a.n(de),he=a(37),ue=function(e){function t(){return e.apply(this,arguments)||this}return Object(re.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=Object(ie.a)(e,["className"]),n=Object(he.f)(a),l=n[0],s=n[1],o=Object(he.d)(l);return v.a.createElement("span",Object(ce.a)({},s,{className:be()(t,o)}))},t}(v.a.Component),fe=Object(he.a)("help-block",ue),pe=a(68),me=a(119),Oe=(a(3398),a(1));const je={value:S.a.any,label:S.a.string.isRequired,description:S.a.node,fieldKey:S.a.string.isRequired,control:S.a.node.isRequired,onChange:S.a.func,compact:S.a.bool};class ge extends v.a.PureComponent{constructor(e){var t;super(e),this.onChange=f()(t=this.onChange).call(t,this)}onChange(e){this.props.onChange(this.props.fieldKey,e)}render(){const{compact:e,value:t,label:a,control:n,description:l,fieldKey:s}=this.props,o=v.a.cloneElement(n,{value:t,onChange:this.onChange});return Object(Oe.f)(se.a,{controlId:s},Object(Oe.f)(me.a,{className:"m-r-5"},a||s,e&&l&&Object(Oe.f)(pe.a,{id:"field-descr",placement:"right",title:l},Object(Oe.f)("i",{className:"fa fa-info-circle m-l-5"})))," ",o,Object(Oe.f)(oe.a.Feedback,null),!e&&l&&Object(Oe.f)(fe,null,l))}}ge.propTypes=je,ge.defaultProps={onChange:()=>{},compact:!1,description:null};const ye={children:S.a.node.isRequired,onChange:S.a.func,item:S.a.object,title:S.a.node,compact:S.a.bool};class Ce extends v.a.PureComponent{constructor(e){var t;super(e),this.onChange=f()(t=this.onChange).call(t,this)}onChange(e,t){return this.props.onChange(h()({},this.props.item,{[e]:t}))}render(){const{title:e}=this.props;return Object(Oe.f)(ne.a,{componentClass:"fieldset",className:"CRUD"},e&&Object(Oe.f)("legend",null,e),le(this.props.children,ge,e=>({onChange:this.onChange,value:this.props.item[e.props.fieldKey],compact:this.props.compact})))}}function ve(e){const t=d()(e).call(e,e=>h()({},e,{id:e.id||k.a.generate()})),a={};return j()(t).call(t,e=>{a[e.id]=e}),a}Ce.propTypes=ye,Ce.defaultProps={compact:!1,title:null};class xe extends v.a.PureComponent{constructor(e){var t,a,n,l,s,o,c;super(e),this.state={expandedColumns:{},collection:ve(e.collection)},this.renderItem=f()(t=this.renderItem).call(t,this),this.onAddItem=f()(a=this.onAddItem).call(a,this),this.renderExpandableSection=f()(n=this.renderExpandableSection).call(n,this),this.getLabel=f()(l=this.getLabel).call(l,this),this.onFieldsetChange=f()(s=this.onFieldsetChange).call(s,this),this.renderTableBody=f()(o=this.renderTableBody).call(o,this),this.changeCollection=f()(c=this.changeCollection).call(c,this)}UNSAFE_componentWillReceiveProps(e){e.collection!==this.props.collection&&this.setState({collection:ve(e.collection)})}onCellChange(e,t,a){this.changeCollection(h()({},this.state.collection,{[e]:h()({},this.state.collection[e],{[t]:a})}))}onAddItem(){if(this.props.itemGenerator){let e=this.props.itemGenerator();e.id||(e=h()({},e,{id:k.a.generate()})),this.changeCollection(h()({},this.state.collection,{[e.id]:e}))}}onFieldsetChange(e){this.changeCollection(h()({},this.state.collection,{[e.id]:e}))}getLabel(e){const{columnLabels:t}=this.props;let a=t&&t[e]?t[e]:e;return ae()(a).call(a,"__")&&(a=""),a}changeCollection(e){var t;(this.setState({collection:e}),this.props.onChange)&&this.props.onChange(d()(t=ee()(e)).call(t,t=>e[t]))}deleteItem(e){const t=h()({},this.state.collection);delete t[e],this.changeCollection(t)}effectiveTableColumns(){var e;const{tableColumns:t,allowDeletes:a,expandFieldset:n}=this.props,s=a?l()(t).call(t,["__actions"]):t;return n?l()(e=["__expand"]).call(e,s):s}toggleExpand(e){this.onCellChange(e,"__expanded",!1),this.setState(t=>({expandedColumns:h()({},t.expandedColumns,{[e]:!t.expandedColumns[e]})}))}renderHeaderRow(){const e=this.effectiveTableColumns(),{allowDeletes:t,expandFieldset:a,extraButtons:n}=this.props;return Object(Oe.f)("thead",null,Object(Oe.f)("tr",null,a&&Object(Oe.f)("th",{"aria-label":"Expand",className:"tiny-cell"}),d()(e).call(e,e=>Object(Oe.f)("th",{key:e},this.getLabel(e))),n,t&&Object(Oe.f)("th",{key:"delete-item","aria-label":"Delete",className:"tiny-cell"})))}renderExpandableSection(e){return le(this.props.expandFieldset,Ce,()=>({item:e,onChange:this.onFieldsetChange}))}renderCell(e,t){var a;const n=this.props.itemRenderers&&this.props.itemRenderers[t],l=e[t],s=f()(a=this.onCellChange).call(a,this,e.id,t);return n?n(l,s,this.getLabel(t),e):l}renderItem(e){const{allowAddItem:t,allowDeletes:a,expandFieldset:n,tableColumns:s}=this.props,o=!!this.state.expandedColumns[e.id]||e.__expanded;let c=[];var i,r;n&&c.push(Object(Oe.f)("td",{key:"__expand",className:"expand"},Object(Oe.f)("i",{role:"button","aria-label":"Toggle expand",tabIndex:0,className:"fa fa-caret-"+(o?"down":"right")+" text-primary pointer",onClick:f()(i=this.toggleExpand).call(i,this,e.id)})));(c=l()(c).call(c,d()(s).call(s,t=>Object(Oe.f)("td",{key:t},this.renderCell(e,t)))),t&&c.push(Object(Oe.f)("td",{key:"add"})),a)&&c.push(Object(Oe.f)("td",{key:"__actions"},Object(Oe.f)("i",X()({"data-test":"crud-delete-icon"},{role:"button","aria-label":"Delete item",tabIndex:0,className:"fa fa-trash text-primary pointer",onClick:f()(r=this.deleteItem).call(r,this,e.id)}))));const b=[Object(Oe.f)("tr",X()({"data-test":"table-row"},{className:"row",key:e.id}),c)];return o&&b.push(Object(Oe.f)("tr",{className:"exp",key:"exp__"+e.id},Object(Oe.f)("td",{colSpan:this.effectiveTableColumns().length,className:"expanded"},Object(Oe.f)("div",null,this.renderExpandableSection(e))))),b}renderEmptyCell(){return Object(Oe.f)("tr",null,Object(Oe.f)("td",{className:"empty-collection"},this.props.emptyMessage))}renderTableBody(){var e;const t=d()(e=ee()(this.state.collection)).call(e,e=>this.state.collection[e]),a=t.length?d()(t).call(t,e=>this.renderItem(e)):this.renderEmptyCell();return Object(Oe.f)("tbody",null,a)}render(){return Object(Oe.f)("div",{className:"CRUD"},Object(Oe.f)("span",{className:"float-right m-t-10 m-r-10"},this.props.allowAddItem&&Object(Oe.f)(K.a,{buttonSize:"sm",buttonStyle:"primary",onClick:this.onAddItem},Object(Oe.f)("i",{className:"fa fa-plus"})," ",Object(M.e)("Add Item"))),Object(Oe.f)("table",{className:"table"},this.renderHeaderRow(),this.renderTableBody()))}}var Se=a(76),_e=a(42);function Ee(){const e=y()(["\n  font-size: ","px;\n  display: flex;\n  align-items: center;\n  a {\n    padding: 0 10px;\n  }\n"]);return Ee=function(){return e},e}function we(){const e=y()(["\n  align-items: center;\n  display: flex;\n\n  > svg {\n    margin-right: ","px;\n  }\n"]);return we=function(){return e},e}function Te(){const e=y()(["\n  .change-warning {\n    margin: 16px 10px 0;\n    color: ",";\n  }\n\n  .change-warning .bold {\n    font-weight: ",";\n  }\n"]);return Te=function(){return e},e}const De=N.c.div(Te(),({theme:e})=>e.colors.warning.base,({theme:e})=>e.typography.weights.bold),Ie=N.c.div(we(),({theme:e})=>e.gridUnit),ke=N.c.div(Ee(),N.d.typography.sizes.s),Ne=(e,t)=>Object(Oe.f)(W.a,{value:e,onChange:t}),Me=["STRING","NUMERIC","DATETIME"],Le=[{key:"physical",label:Object(M.e)("Physical (table or view)")},{key:"virtual",label:Object(M.e)("Virtual (SQL)")}],Re={};function Ke({title:e,collection:t}){return Object(Oe.f)("div",null,e," ",Object(Oe.f)(D.a,{count:t?t.length:0,showZero:!0}))}function qe({columns:e,onChange:t,editableColumnName:a,showExpression:n,allowAddItem:l,allowEditDataType:s,itemGenerator:o}){return Object(Oe.f)(xe,{collection:e,tableColumns:["column_name","type","is_dttm","filterable","groupby"],allowDeletes:!0,allowAddItem:l,itemGenerator:o,expandFieldset:Object(Oe.f)(Ae,null,Object(Oe.f)(Ce,{compact:!0},n&&Object(Oe.f)(ge,{fieldKey:"expression",label:Object(M.e)("SQL Expression"),control:Object(Oe.f)(H.a,{language:"markdown",offerEditInModal:!1})}),Object(Oe.f)(ge,{fieldKey:"verbose_name",label:Object(M.e)("Label"),control:Object(Oe.f)(Q.a,{controlId:"verbose_name",placeholder:Object(M.e)("Label")})}),Object(Oe.f)(ge,{fieldKey:"description",label:Object(M.e)("Description"),control:Object(Oe.f)(Q.a,{controlId:"description",placeholder:Object(M.e)("Description")})}),s&&Object(Oe.f)(ge,{fieldKey:"type",label:Object(M.e)("Data Type"),control:Object(Oe.f)(J.a,{choices:Me,name:"type",freeForm:!0})}),Object(Oe.f)(ge,{fieldKey:"python_date_format",label:Object(M.e)("Datetime Format"),description:Object(Oe.f)("div",null,Object(M.e)("The pattern of timestamp format. For strings use "),Object(Oe.f)("a",{href:"https://docs.python.org/2/library/datetime.html#strftime-strptime-behavior"},Object(M.e)("python datetime string pattern")),Object(M.e)(" expression which needs to adhere to the "),Object(Oe.f)("a",{href:"https://en.wikipedia.org/wiki/ISO_8601"},Object(M.e)("ISO 8601")),Object(M.e)(" standard to ensure that the lexicographical ordering\n                      coincides with the chronological ordering. If the\n                      timestamp format does not adhere to the ISO 8601 standard\n                      you will need to define an expression and type for\n                      transforming the string into a date or timestamp. Note\n                      currently time zones are not supported. If time is stored\n                      in epoch format, put `epoch_s` or `epoch_ms`. If no pattern\n                      is specified we fall back to using the optional defaults on a per\n                      database/column name level via the extra parameter.")),control:Object(Oe.f)(Q.a,{controlId:"python_date_format",placeholder:"%Y/%m/%d"})}))),columnLabels:{column_name:Object(M.e)("Column"),type:Object(M.e)("Data Type"),groupby:Object(M.e)("Is Dimension"),is_dttm:Object(M.e)("Is Temporal"),filterable:Object(M.e)("Is Filterable")},onChange:t,itemRenderers:{column_name:(e,t)=>a?Object(Oe.f)(z.a,{canEdit:!0,title:e,onSaveTitle:t}):e,type:e=>Object(Oe.f)(F.a,null,e),is_dttm:Ne,filterable:Ne,groupby:Ne}})}function Pe({label:e,formElement:t}){return Object(Oe.f)("div",null,Object(Oe.f)("div",null,Object(Oe.f)("strong",null,e)),Object(Oe.f)("div",null,t))}function Ae({children:e}){return Object(Oe.f)(_.a,{style:{marginTop:20}},e)}j()(Le).call(Le,e=>{Re[e.key]=e}),Ke.propTypes={title:S.a.string,collection:S.a.array},qe.propTypes={columns:S.a.array.isRequired,onChange:S.a.func.isRequired,editableColumnName:S.a.bool,showExpression:S.a.bool,allowAddItem:S.a.bool,allowEditDataType:S.a.bool,itemGenerator:S.a.func},qe.defaultProps={editableColumnName:!1,showExpression:!1,allowAddItem:!1,allowEditDataType:!1,itemGenerator:()=>({column_name:"<new column>",filterable:!0,groupby:!0})},Pe.propTypes={label:S.a.string,formElement:S.a.node},Ae.propTypes={children:S.a.node};const Fe={datasource:S.a.object.isRequired,onChange:S.a.func,addSuccessToast:S.a.func.isRequired,addDangerToast:S.a.func.isRequired};class Be extends v.a.PureComponent{constructor(e){var t,a,n,l,s,o,c,i,r,d;super(e),this.state={datasource:e.datasource,errors:[],isDruid:"druid"===e.datasource.type||"druid"===e.datasource.datasource_type,isSqla:"table"===e.datasource.datasource_type||"table"===e.datasource.type,isEditMode:!1,databaseColumns:m()(t=e.datasource.columns).call(t,e=>!e.expression),calculatedColumns:m()(a=e.datasource.columns).call(a,e=>!!e.expression),metadataLoading:!1,activeTabKey:0,datasourceType:e.datasource.sql?Re.virtual.key:Re.physical.key},this.onChange=f()(n=this.onChange).call(n,this),this.onChangeEditMode=f()(l=this.onChangeEditMode).call(l,this),this.onDatasourcePropChange=f()(s=this.onDatasourcePropChange).call(s,this),this.onDatasourceChange=f()(o=this.onDatasourceChange).call(o,this),this.syncMetadata=f()(c=this.syncMetadata).call(c,this),this.setColumns=f()(i=this.setColumns).call(i,this),this.validateAndChange=f()(r=this.validateAndChange).call(r,this),this.handleTabSelect=f()(d=this.handleTabSelect).call(d,this),this.allowEditSource=!Object(_e.c)(_e.a.DISABLE_DATASET_SOURCE_EDIT)}onChange(){const{datasourceType:e,datasource:t}=this.state,a=e===Re.physical.key?"":t.sql,n=h()({},this.state.datasource,{sql:a,columns:[...this.state.databaseColumns,...this.state.calculatedColumns]});this.props.onChange(n,this.state.errors)}onChangeEditMode(){this.setState(e=>({isEditMode:!e.isEditMode}))}onDatasourceChange(e){this.setState({datasource:e},this.validateAndChange)}onDatasourcePropChange(e,t){const a=h()({},this.state.datasource,{[e]:t});this.setState(a=>({datasource:h()({},a.datasource,{[e]:t})}),this.onDatasourceChange(a))}onDatasourceTypeChange(e){this.setState({datasourceType:e})}setColumns(e){this.setState(e,this.validateAndChange)}validateAndChange(){this.validate(this.onChange)}updateColumns(e){var t;const{databaseColumns:a}=this.state,n=d()(e).call(e,e=>e.name),l=i()(a).call(a,(e,t)=>h()({},e,{[t.column_name]:t}),{}),s=[],c={added:[],modified:[],removed:m()(t=d()(a).call(a,e=>e.column_name)).call(t,e=>!o()(n).call(n,e))};return j()(e).call(e,e=>{const t=l[e.name];t?t.type!==e.type?(s.push(h()({},t,{type:e.type})),c.modified.push(e.name)):s.push(t):(s.push({id:k.a.generate(),column_name:e.name,type:e.type,groupby:!0,filterable:!0}),c.added.push(e.name))}),(c.added.length||c.modified.length||c.removed.length)&&this.setColumns({databaseColumns:s}),c}syncMetadata(){const{datasource:e}=this.state,t="/datasource/external_metadata/"+(e.type||e.datasource_type)+"/"+e.id+"/";this.setState({metadataLoading:!0}),L.a.get({endpoint:t}).then(({json:e})=>{const t=this.updateColumns(e);t.modified.length&&this.props.addSuccessToast(Object(M.e)("Modified columns: %s",t.modified.join(", "))),t.removed.length&&this.props.addSuccessToast(Object(M.e)("Removed columns: %s",t.removed.join(", "))),t.added.length&&this.props.addSuccessToast(Object(M.e)("New columns added: %s",t.added.join(", "))),this.props.addSuccessToast(Object(M.e)("Metadata has been synced")),this.setState({metadataLoading:!1})}).catch(e=>Object(G.a)(e).then(({error:e,statusText:t})=>{this.props.addDangerToast(e||t||Object(M.e)("An error has occurred")),this.setState({metadataLoading:!1})}))}findDuplicates(e,t){const a={},n=[];return j()(e).call(e,e=>{const l=t(e);l in a?n.push(l):a[l]=null}),n}validate(e){var t;let a,n=[];const{datasource:s}=this.state;a=this.findDuplicates(s.columns,e=>e.column_name),n=l()(n).call(n,d()(a).call(a,e=>Object(M.e)("Column name [%s] is duplicated",e))),a=this.findDuplicates(s.metrics,e=>e.metric_name),n=l()(n).call(n,d()(a).call(a,e=>Object(M.e)("Metric name [%s] is duplicated",e)));const o=m()(t=this.state.calculatedColumns).call(t,e=>!e.expression&&!e.json);n=l()(n).call(n,d()(o).call(o,e=>Object(M.e)("Calculated column [%s] requires an expression",e.column_name))),this.setState({errors:n},e)}handleTabSelect(e){this.setState({activeTabKey:e})}renderSettingsFieldset(){const{datasource:e}=this.state;return Object(Oe.f)(Ce,{title:Object(M.e)("Basic"),item:e,onChange:this.onDatasourceChange},Object(Oe.f)(ge,{fieldKey:"description",label:Object(M.e)("Description"),control:Object(Oe.f)(H.a,{language:"markdown",offerEditInModal:!1})}),Object(Oe.f)(ge,{fieldKey:"default_endpoint",label:Object(M.e)("Default URL"),description:Object(M.e)("Default URL to redirect to when accessing from the dataset list page"),control:Object(Oe.f)(Q.a,{controlId:"default_endpoint"})}),Object(Oe.f)(ge,{fieldKey:"filter_select_enabled",label:Object(M.e)("Autocomplete filters"),description:Object(M.e)("Whether to populate autocomplete filters options"),control:Object(Oe.f)(W.a,null)}),this.state.isSqla&&Object(Oe.f)(ge,{fieldKey:"fetch_values_predicate",label:Object(M.e)("Autocomplete Query Predicate"),description:Object(M.e)('When using "Autocomplete filters", this can be used to improve performance of the query fetching the values. Use this option to apply a predicate (WHERE clause) to the query selecting the distinct values from the table. Typically the intent would be to limit the scan by applying a relative time filter on a partitioned or indexed time-related field.'),control:Object(Oe.f)(Q.a,{controlId:"fetch_values_predicate"})}),this.state.isSqla&&Object(Oe.f)(ge,{fieldKey:"extra",label:Object(M.e)("Extra"),description:Object(M.e)('Extra data to specify table metadata. Currently supports certification data of the format: `{ "certification": { "certified_by": "Data Platform Team", "details": "This table is the source of truth." } }`.'),control:Object(Oe.f)(H.a,{controlId:"extra",language:"json",offerEditInModal:!1})}),Object(Oe.f)(ge,{fieldKey:"owners",label:Object(M.e)("Owners"),description:Object(M.e)("Owners of the dataset"),control:Object(Oe.f)(Y.a,{dataEndpoint:"api/v1/dataset/related/owners",multi:!0,mutator:e=>{var t;return d()(t=e.result).call(t,e=>({value:e.value,label:""+e.text}))}}),controlProps:{}}))}renderAdvancedFieldset(){const{datasource:e}=this.state;return Object(Oe.f)(Ce,{title:Object(M.e)("Advanced"),item:e,onChange:this.onDatasourceChange},Object(Oe.f)(ge,{fieldKey:"cache_timeout",label:Object(M.e)("Cache Timeout"),description:Object(M.e)("The duration of time in seconds before the cache is invalidated"),control:Object(Oe.f)(Q.a,{controlId:"cache_timeout"})}),Object(Oe.f)(ge,{fieldKey:"offset",label:Object(M.e)("Hours offset"),control:Object(Oe.f)(Q.a,{controlId:"offset"})}),this.state.isSqla&&Object(Oe.f)(ge,{fieldKey:"template_params",label:Object(M.e)("Template parameters"),description:Object(M.e)("A set of parameters that become available in the query using Jinja templating syntax"),control:Object(Oe.f)(Q.a,{controlId:"template_params"})}))}renderSpatialTab(){var e;const{datasource:t}=this.state,{spatials:a,all_cols:n}=t;return Object(Oe.f)(R.c.TabPane,{tab:Object(Oe.f)(Ke,{collection:a,title:Object(M.e)("Spatial")}),key:4},Object(Oe.f)(xe,{tableColumns:["name","config"],onChange:f()(e=this.onDatasourcePropChange).call(e,this,"spatials"),itemGenerator:()=>({name:"<new spatial>",type:"<no type>",config:null}),collection:a,allowDeletes:!0,itemRenderers:{name:(e,t)=>Object(Oe.f)(z.a,{canEdit:!0,title:e,onSaveTitle:t}),config:(e,t)=>Object(Oe.f)(V.a,{value:e,onChange:t,choices:n})}}))}renderSourceFieldset(){const{datasource:e}=this.state;return Object(Oe.f)("div",null,Object(Oe.f)("div",{className:"m-l-10 m-t-20 m-b-10"},d()(Le).call(Le,e=>{var t;return Object(Oe.f)(E.a,{key:e.key,value:e.key,inline:!0,onChange:f()(t=this.onDatasourceTypeChange).call(t,this,e.key),checked:this.state.datasourceType===e.key,disabled:!this.state.isEditMode},e.label)})),Object(Oe.f)("hr",null),Object(Oe.f)(Ce,{item:e,onChange:this.onDatasourceChange,compact:!0},this.state.datasourceType===Re.virtual.key&&Object(Oe.f)("div",null,this.state.isSqla&&Object(Oe.f)(v.a.Fragment,null,Object(Oe.f)(ge,{fieldKey:"databaseSelector",label:Object(M.e)("virtual"),control:Object(Oe.f)(P.a,{dbId:e.database.id,schema:e.schema,onSchemaChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("schema",e),onDbChange:e=>this.state.isEditMode&&this.onDatasourcePropChange("database",e),formMode:!1,handleError:this.props.addDangerToast,readOnly:!this.state.isEditMode})}),Object(Oe.f)(ge,{fieldKey:"table_name",label:Object(M.e)("dataset name"),control:Object(Oe.f)(Q.a,{controlId:"table_name",onChange:e=>{this.onDatasourcePropChange("table_name",e)},placeholder:Object(M.e)("dataset name"),disabled:!this.state.isEditMode})}),Object(Oe.f)(ge,{fieldKey:"sql",label:Object(M.e)("SQL"),description:Object(M.e)("When specifying SQL, the datasource acts as a view. Superset will use this statement as a subquery while grouping and filtering on the generated parent queries."),control:Object(Oe.f)(H.a,{language:"sql",offerEditInModal:!1,minLines:20,maxLines:20,readOnly:!this.state.isEditMode})})),this.state.isDruid&&Object(Oe.f)(ge,{fieldKey:"json",label:Object(M.e)("JSON"),description:Object(Oe.f)("div",null,Object(M.e)("The JSON metric or post aggregation definition.")),control:Object(Oe.f)(H.a,{language:"json",offerEditInModal:!1})})),this.state.datasourceType===Re.physical.key&&Object(Oe.f)(w.a,{md:6},this.state.isSqla&&Object(Oe.f)(ge,{fieldKey:"tableSelector",label:Object(M.e)("Physical"),control:Object(Oe.f)(U.a,{clearable:!1,dbId:e.database.id,handleError:this.props.addDangerToast,schema:e.schema,sqlLabMode:!1,tableName:e.table_name,onSchemaChange:this.state.isEditMode?e=>this.onDatasourcePropChange("schema",e):void 0,onDbChange:this.state.isEditMode?e=>this.onDatasourcePropChange("database",e):void 0,onTableChange:this.state.isEditMode?e=>this.onDatasourcePropChange("table_name",e):void 0,readOnly:!this.state.isEditMode}),description:Object(M.e)("The pointer to a physical table (or view). Keep in mind that the chart is associated to this Superset logical table, and this logical table points the physical table referenced here.")}))),this.allowEditSource&&Object(Oe.f)(ke,null,Object(Oe.f)("span",{role:"button",tabIndex:0,onClick:this.onChangeEditMode},Object(Oe.f)(A.a,{color:N.d.colors.grayscale.base,name:this.state.isEditMode?"lock-unlocked":"lock-locked"})),!this.state.isEditMode&&Object(Oe.f)("div",null,Object(M.e)("Click the lock to make changes.")),this.state.isEditMode&&Object(Oe.f)("div",null,Object(M.e)("Click the lock to prevent further changes."))))}renderErrors(){var e;return this.state.errors.length>0?Object(Oe.f)(T.a,{bsStyle:"danger"},d()(e=this.state.errors).call(e,e=>Object(Oe.f)("div",{key:e},e))):null}renderMetricCollection(){var e;return Object(Oe.f)(xe,{tableColumns:["metric_name","verbose_name","expression"],columnLabels:{metric_name:Object(M.e)("Metric"),verbose_name:Object(M.e)("Label"),expression:Object(M.e)("SQL Expression")},expandFieldset:Object(Oe.f)(Ae,null,Object(Oe.f)(Ce,{compact:!0},Object(Oe.f)(ge,{fieldKey:"verbose_name",label:Object(M.e)("Label"),control:Object(Oe.f)(Q.a,{controlId:"verbose_name"})}),Object(Oe.f)(ge,{fieldKey:"description",label:Object(M.e)("Description"),control:Object(Oe.f)(Q.a,{controlId:"description",placeholder:Object(M.e)("Description")})}),Object(Oe.f)(ge,{fieldKey:"d3format",label:Object(M.e)("D3 Format"),control:Object(Oe.f)(Q.a,{controlId:"d3format",placeholder:"%y/%m/%d"})}),Object(Oe.f)(ge,{label:Object(M.e)("Warning Message"),fieldKey:"warning_text",description:Object(M.e)("Warning message to display in the metric selector"),control:Object(Oe.f)(Q.a,{controlId:"warning_text",placeholder:Object(M.e)("Warning Message")})}),Object(Oe.f)(ge,{label:Object(M.e)("Certified By"),fieldKey:"certified_by",description:Object(M.e)("Person or group that has certified this metric"),control:Object(Oe.f)(Q.a,{controlId:"certified_by",placeholder:Object(M.e)("Certified By")})}),Object(Oe.f)(ge,{label:Object(M.e)("Certification Details"),fieldKey:"certification_details",description:Object(M.e)("Details of the certification"),control:Object(Oe.f)(Q.a,{controlId:"certification_details",placeholder:Object(M.e)("Certification Details")})}))),collection:this.state.datasource.metrics,allowAddItem:!0,onChange:f()(e=this.onDatasourcePropChange).call(e,this,"metrics"),itemGenerator:()=>({metric_name:"<new metric>",verbose_name:"",expression:""}),itemRenderers:{metric_name:(e,t,a,n)=>Object(Oe.f)(Ie,null,n.is_certified&&Object(Oe.f)(q.a,{certifiedBy:n.certified_by,details:n.certification_details}),Object(Oe.f)(z.a,{canEdit:!0,title:e,onSaveTitle:t})),verbose_name:(e,t)=>Object(Oe.f)(z.a,{canEdit:!0,title:e,onSaveTitle:t}),expression:(e,t)=>Object(Oe.f)(z.a,{canEdit:!0,title:e,onSaveTitle:t,extraClasses:["datasource-sql-expression"],multiLine:!0}),description:(e,t,a)=>Object(Oe.f)(Pe,{label:a,formElement:Object(Oe.f)(Q.a,{value:e,onChange:t})}),d3format:(e,t,a)=>Object(Oe.f)(Pe,{label:a,formElement:Object(Oe.f)(Q.a,{value:e,onChange:t})})},allowDeletes:!0})}render(){const{datasource:e,activeTabKey:t}=this.state;return Object(Oe.f)(De,null,this.renderErrors(),Object(Oe.f)("div",{className:"m-t-10"},Object(Oe.f)(T.a,{bsStyle:"warning"},Object(Oe.f)("strong",null,Object(M.e)("Be careful.")," "),Object(M.e)("Changing these settings will affect all charts using this dataset, including charts owned by other people."))),Object(Oe.f)(R.c,{fullWidth:!1,id:"table-tabs",onChange:this.handleTabSelect,defaultActiveKey:t},Object(Oe.f)(R.c.TabPane,{key:0,tab:Object(M.e)("Source")},this.renderSourceFieldset()),Object(Oe.f)(R.c.TabPane,{tab:Object(Oe.f)(Ke,{collection:e.metrics,title:Object(M.e)("Metrics")}),key:1},this.renderMetricCollection()),Object(Oe.f)(R.c.TabPane,{tab:Object(Oe.f)(Ke,{collection:this.state.databaseColumns,title:Object(M.e)("Columns")}),key:2},Object(Oe.f)("div",null,Object(Oe.f)(qe,{columns:this.state.databaseColumns,onChange:e=>this.setColumns({databaseColumns:e})}),Object(Oe.f)(K.a,{buttonStyle:"primary",onClick:this.syncMetadata,className:"sync-from-source"},Object(M.e)("Sync columns from source")),this.state.metadataLoading&&Object(Oe.f)(B.a,null))),Object(Oe.f)(R.c.TabPane,{tab:Object(Oe.f)(Ke,{collection:this.state.calculatedColumns,title:Object(M.e)("Calculated Columns")}),key:3},Object(Oe.f)(qe,{columns:this.state.calculatedColumns,onChange:e=>this.setColumns({calculatedColumns:e}),editableColumnName:!0,showExpression:!0,allowAddItem:!0,allowEditDataType:!0,itemGenerator:()=>({column_name:"<new column>",filterable:!0,groupby:!0,expression:"<enter SQL expression here>",__expanded:!0})})),Object(Oe.f)(R.c.TabPane,{key:4,tab:Object(M.e)("Settings")},Object(Oe.f)("div",null,Object(Oe.f)(w.a,{md:6},Object(Oe.f)(Ae,null,this.renderSettingsFieldset())),Object(Oe.f)(w.a,{md:6},Object(Oe.f)(Ae,null,this.renderAdvancedFieldset()))))))}}Be.defaultProps={onChange:()=>{}},Be.propTypes=Fe;t.default=Object(Se.a)(Be)},3398:function(e,t,a){},765:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(35);var n=a(328),l=a.n(n),s=a(0),o=a(3),c=a.n(o),i=a(9),r=a(118),d=a(1);function b({canEdit:e=!1,emptyText:t,extraClasses:a,multiLine:n=!1,noPermitTooltip:o,onSaveTitle:b,showTooltip:h=!0,style:u,title:f}){const[p,m]=Object(s.useState)(!1),[O,j]=Object(s.useState)(f),[g,y]=Object(s.useState)(f),[C,v]=Object(s.useState)(null),x=Object(s.useRef)();function S(){if(!e||p)return;const t=x.current?x.current.getBoundingClientRect():null;m(!0),v(t)}function _(){const t=l()(O).call(O);e&&(m(!1),t.length?(g!==t&&y(t),f!==t&&b(t)):j(g))}function E(e){" "===e.key&&e.stopPropagation()}function w(t){e&&j(t.target.value)}function T(e){"Enter"===e.key&&(e.preventDefault(),_())}let D;Object(s.useEffect)(()=>{f!==O&&(y(O),j(f))},[f]),O?D=O:p||(D=t);const I=p&&C?{height:C.height+"px"}:void 0;let k=n&&p?Object(d.f)("textarea",{ref:x,required:!0,value:D,className:f?void 0:"text-muted",onKeyDown:E,onChange:w,onBlur:_,onClick:S,onKeyPress:T,style:I}):Object(d.f)("input",{ref:x,required:!0,type:p?"text":"button",value:D,className:f?void 0:"text-muted",onKeyDown:E,onChange:w,onBlur:_,onClick:S,onKeyPress:T});return h&&!p&&(k=Object(d.f)(r.a,{label:"title",tooltip:e?Object(i.e)("click to edit"):o||Object(i.e)("You don't have the rights to alter this title.")},k)),e||(k=Object(d.f)("span",{title:D},D)),Object(d.f)("span",{className:c()("editable-title",a,e&&"editable-title--editable",p&&"editable-title--editing"),style:u},k)}},832:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(2),o=a.n(s),c=a(118),i=(a(1374),a(1));const r={onClick:o.a.func,tooltipContent:o.a.string.isRequired};class d extends l.a.PureComponent{render(){return Object(i.f)(c.a,{tooltip:this.props.tooltipContent,label:"cache-desc"},Object(i.f)("i",{"aria-label":"Icon",role:"button",tabIndex:0,className:"RefreshLabel fa fa-refresh pointer",onClick:this.props.onClick}))}}d.propTypes=r,t.a=d},985:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(9),o=a(61),c=a(33),i=a(118),r=a(1);t.a=function({certifiedBy:e,details:t,size:a=24}){return Object(r.f)(i.a,{label:"certified-details",tooltip:Object(r.f)(l.a.Fragment,null,e&&Object(r.f)("div",null,Object(s.e)("Certified by %s",e)),Object(r.f)("div",null,t))},Object(r.f)(c.a,{color:o.d.colors.primary.base,height:a,width:a,name:"certified"}))}}}]);