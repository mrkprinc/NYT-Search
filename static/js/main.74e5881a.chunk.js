(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=a(5),s=a(6),u=a(8),o=a(7),d=a(9),p=a(31),h=a(30),m=a(33),b=a(32),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).clickSearch=function(t){t.preventDefault(),e.setState({resultSet:[],displayResults:!0});var a="https://intense-island-98620.herokuapp.com/api/"+document.getElementById("txtTopic").value.trim(),n=document.getElementById("txtStartDate").value.trim(),c=document.getElementById("txtEndDate").value.trim();n&&c&&(a+="/".concat(n,"/").concat(c)),fetch(a).then(function(e){return e.json()}).then(function(t){var a=t.filter(function(e){return e.pub_date}).map(function(e){return{_id:e._id,title:e.headline.main,snippet:e.snippet,date:e.pub_date,url:e.web_url,active:1}});e.setState({resultSet:a})})},e.clickSave=function(t){var a=t.target;fetch("https://intense-island-98620.herokuapp.com/api/saved",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e.state.resultSet[parseInt(a.getAttribute("data-index"))])})},e.state={displayResults:!1,resultSet:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.displayResults?c.a.createElement("main",null,c.a.createElement(f,{clickSearch:this.clickSearch,key:0}),c.a.createElement(S,{resultSet:this.state.resultSet,resultSource:"webAPI",buttonClick:this.clickSave,key:1})):c.a.createElement("main",null,c.a.createElement(f,{clickSearch:this.clickSearch,key:0}))}}]),t}(c.a.Component),f=function(e){return c.a.createElement("section",{id:"searchBox"},c.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"txtTopic"},"Topic: "),c.a.createElement("input",{id:"txtTopic",type:"text"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"txtStartDate"},"Start Date: "),c.a.createElement("input",{id:"txtStartDate",type:"text",placeholder:"YYYYMMDD"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"txtEndDate"},"End Date: "),c.a.createElement("input",{id:"txtEndDate",type:"text",placeholder:"YYYYMMDD"})),c.a.createElement("div",null,c.a.createElement("span",{id:"btnSearch",className:"button",onClick:e.clickSearch},"Search"))))},S=function(e){var t;return t=e.resultSet.length?e.resultSet.map(function(t,a){return c.a.createElement(j,{article:t,resultSource:e.resultSource,buttonClick:e.buttonClick,key:t._id,index:a})}):c.a.createElement("div",null,c.a.createElement("span",{className:"spin"},"\u2730"),c.a.createElement("span",null,"Retrieving articles...")),c.a.createElement("section",{className:"resultsPanel"},t)},v=a(14),k=a.n(v),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"searchResult"},c.a.createElement("div",{className:"noShrink"},c.a.createElement("span",{className:"dateSpan"},k()(this.props.article.date).format("MMM Do YYYY"))),c.a.createElement("div",{className:"grow"},c.a.createElement("strong",null,this.props.article.title),c.a.createElement("br",null),this.props.article.snippet),c.a.createElement("div",{className:"noShrink"},c.a.createElement("a",{className:"button",href:this.props.article.url,target:"blank"},"Go to Article"),c.a.createElement(y,{buttonClick:this.props.buttonClick,index:this.props.index,resultSource:this.props.resultSource})))}}]),t}(c.a.Component),O=a(16),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).clickHandler=function(e){a.props.buttonClick(e),a.setState({status:"done"})},a.addedClass="",a.buttonText="webAPI"===e.resultSource?"save":"delete",a.state={status:"click"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.state.status){case"done":var e="webAPI"===this.props.resultSource?["saved","saved"]:["deleted","deleted"],t=Object(O.a)(e,2);this.addedClass=t[0],this.buttonText=t[1]}return c.a.createElement("div",{className:"button ".concat(this.addedClass),"data-index":this.props.index,onClick:this.clickHandler},this.buttonText)}}]),t}(c.a.Component),x=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).clickDelete=function(t){var a=t.target,n="https://intense-island-98620.herokuapp.com/api/saved/remove/";n+=e.state.dataSet[parseInt(a.getAttribute("data-index"))].articleId,fetch(n,{method:"PUT"}).then(function(e){return e}).then(function(){fetch("https://intense-island-98620.herokuapp.com/api/saved").then(function(e){return e.json()}).then(function(t){e.setState({dataSet:t})})})},e.state={dataSet:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://intense-island-98620.herokuapp.com/api/saved").then(function(e){return e.json()}).then(function(t){e.setState({dataSet:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return console.log(this.state.dataSet),c.a.createElement(S,{resultSet:this.state.dataSet,resultSource:"db",buttonClick:this.clickDelete})}}]),t}(c.a.Component),C=(a(23),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,"New York Times Search"),c.a.createElement("h3",null,"find, save & annotate articles"),c.a.createElement("nav",null,c.a.createElement(h.a,{to:"/"},"Article Search"),c.a.createElement(h.a,{to:"/saved"},"Saved Articles"))),c.a.createElement(m.a,null,c.a.createElement(b.a,{path:"/saved",component:x}),c.a.createElement(b.a,{path:"/",component:E}))))}}]),t}(c.a.Component));l.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.74e5881a.chunk.js.map