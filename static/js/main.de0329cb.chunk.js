(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(20),i=n.n(s),l=(n(28),n(29),n(18)),u=n(13),o=n(8),d=n(9),b=n(11),j=n(10),h=n(21),m=n(2),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.counter.id,t=this.props,n=t.incrementClicked,r=t.decrementClicked,a=t.handleDelete,s=t.counter;return Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(c.jsx)("button",{onClick:function(){return n(s)},className:"btn btn-sm btn-secondary m-2",children:"Increment"}),Object(c.jsx)("button",{onClick:function(){return r(s)},className:"btn btn-sm btn-warning m-2",children:"Decrement"}),Object(c.jsx)("button",{onClick:a.bind(this,e),className:"btn btn-sm btn-danger m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(r.Component),O=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.incrementClicked,n=e.decrementClicked,r=e.handleDelete,s=e.handleReset,i=e.handleAdd;return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("button",{onClick:i,className:"btn btn-success btn-sm m-2",children:"Add"}),Object(c.jsx)("button",{onClick:s,className:"btn btn-info btn-sm m-2",children:"Reset"}),this.props.counters.map((function(e){return Object(c.jsx)(v,{counter:e,incrementClicked:t,decrementClicked:n,handleDelete:r},e.id)}))]})}}]),n}(r.Component),f=function(e){var t=e.total;return Object(c.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(c.jsx)("h1",{children:t})})},p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:0,value:0},{id:1,value:1},{id:2,value:2},{id:3,value:3}]},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.incrementClicked=function(t){var n=Object(u.a)(e.state.counters),c=n.indexOf(t);n[c]=Object(l.a)({},t),n[c].value++,e.setState({counters:n})},e.decrementClicked=function(t){var n=Object(u.a)(e.state.counters),c=n.indexOf(t);n[c]=Object(l.a)({},t),n[c].value>0&&n[c].value--,e.setState({counters:n})},e.id=4,e.handleAdd=function(){var t={id:e.id,value:0};e.id++;var n=e.state.counters;e.setState({counters:[].concat(Object(u.a)(n),[t])})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)(h.a,{children:Object(c.jsx)(m.a,{exact:!0,path:"/react-tutorial",render:function(t){return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(f,{total:e.state.counters.filter((function(e){return e.value>0})).length}),Object(c.jsx)("main",{className:"container",children:Object(c.jsx)(O,{counters:e.state.counters,incrementClicked:e.incrementClicked,decrementClicked:e.decrementClicked,handleDelete:e.handleDelete,handleReset:e.handleReset,handleAdd:e.handleAdd})})]})}})})}}]),n}(r.Component),k=document.getElementById("root");i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),k)}},[[35,1,2]]]);
//# sourceMappingURL=main.de0329cb.chunk.js.map