(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},56:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);n(15);var r=n(1),s=n(24),c=n.n(s),a=n(10),o=n(2),i=n(25),l=n(26),j=n(30),d=n(29),h=(n(35),n(0));var m=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("table",{class:"table",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",style:{width:"20%"},onClick:function(){e.sortEmployees()},children:"Name"}),Object(h.jsx)("th",{scope:"col",style:{width:"20%"},children:"Email"}),Object(h.jsx)("th",{scope:"col",style:{width:"20%"},children:"Phone"}),Object(h.jsx)("th",{scope:"col",style:{width:"20%"},children:"Age"}),Object(h.jsx)("th",{scope:"col",style:{width:"20%"},children:"Image"})]})}),Object(h.jsx)("tbody",{children:e.Employees.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("th",{scope:"row",children:[e.name.first," ",e.name.last]}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"mailto:"+e.email,children:e.email})}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.dob.age}),Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:e.picture.thumbnail})})]},e.login.uuid)}))})]})})};n(37);var u=function(e){return Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Search Name:"}),Object(h.jsx)("input",{type:"search",onChange:function(t){return e.getFilterEmployees(t)}})]})},b=n(27),p=n.n(b),O=function(){return p.a.get("https://randomuser.me/api/?results=50&nat=us")},f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={Employees:[],FilterEmployees:[],SortedEmployees:[],order:"descend"},e.getAllEmployees=function(){O().then((function(t){return e.setState({Employees:t.data.results,FilterEmployees:t.data.results})})).catch((function(e){return console.log(e)}))},e.getFilterEmployees=function(t){var n=t.target.value,r=e.state.Employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({FilterEmployees:r})},e.sortEmployees=function(){var t;"descend"==e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"}),console.log(e.state.order),t="ascend"==e.state.order?e.state.FilterEmployees.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})):e.state.FilterEmployees.sort((function(e,t){return e.name.first<t.name.first?1:e.name.first>t.name.first?-1:0})),e.setState({SortedEmployees:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getAllEmployees()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{getFilterEmployees:this.getFilterEmployees}),Object(h.jsx)(m,{Employees:this.state.FilterEmployees,sortEmployees:this.sortEmployees})]})}}]),n}(r.Component);n(56);var x=function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)(a.b,{className:"navbar-brand",to:"/",children:"Employee Directory"}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"navbar-nav",children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(a.b,{to:"/",className:"/"===window.location.pathname||"/directory"===window.location.pathname?"nav-link active":"nav-link",children:"Table"})})})})]})};n(65);var y=function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("span",{children:"Pupster 2017"})})};n(66);var v=function(e){return Object(h.jsx)("main",{className:"wrapper",children:e.children})};var E=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(v,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(o.a,{exact:!0,path:"/directory",component:f})]}),Object(h.jsx)(y,{})]})})};n(67);c.a.render(Object(h.jsx)(E,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.3bf3fb40.chunk.js.map