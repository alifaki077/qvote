webpackJsonp([1],{100:function(t,e,o){o(92);var i=o(4)(o(56),o(104),"data-v-27fdf7e0",null);t.exports=i.exports},101:function(t,e,o){o(94);var i=o(4)(o(57),o(106),"data-v-5b287cfa",null);t.exports=i.exports},102:function(t,e,o){o(91);var i=o(4)(o(58),o(103),"data-v-23c876d8",null);t.exports=i.exports},103:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"recent-polls"},[o("h1",[t._v("Recent Polls")]),t._v(" "),t._l(t.polls,function(e){return o("div",{staticClass:"polls"},[o("div",{staticClass:"poll"},[o("router-link",{attrs:{to:e.uid}},[t._v(t._s(e.title))])],1)])})],2)},staticRenderFns:[]}},104:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("create-poll",{attrs:{notifications:t.notifications}})],1)},staticRenderFns:[]}},105:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("meta",{attrs:{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",name:"viewport"}}),t._v(" "),o("router-link",{attrs:{to:"/"}},[o("div",{staticClass:"bold"},[t._v("Quick Vote")])]),t._v(" "),o("div",{staticClass:"tag-line"},[t._v("quickly create polls. no singup")]),t._v(" "),t._l(t.notifications,function(e){return o("div",{staticClass:"notifications"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.ignore,expression:"!notifi.ignore"}],class:e.type,attrs:{id:"notification"}},[o("div",{staticClass:"msg"},[t._v(t._s(e.msg))]),t._v(" "),o("div",{staticClass:"ignore",on:{click:function(t){e.ignore=!0}}},[t._v("❌")])])])}),t._v(" "),o("router-view",{attrs:{notifications:t.notifications}}),t._v(" "),o("recent-polls")],2)},staticRenderFns:[]}},106:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"poll-vote"},[o("h1",{staticClass:"question"},[t._v(t._s(t.question))]),t._v(" "),t._l(t.choices,function(e){return o("div",{staticClass:"choices"},[o("div",{staticClass:"choice",on:{click:function(o){t._vote(e.id)}}},[o("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showResults,expression:"showResults"}],staticClass:"result",style:{width:t.getOptimalRatio(e.ratio)+"%"}},[o("div",{staticClass:"ratio"},[t._v(t._s(e.ratio)+"%")])])])])}),t._v(" "),o("button",{attrs:{id:"show-results"},on:{click:function(e){t.toggleResults()}}},[t._v("\n        show results\n    ")]),t._v(" "),o("div",{attrs:{id:"note"}},[t._v("NOTE: Share the link to allow people to vote")])],2)},staticRenderFns:[]}},107:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"create_poll"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],attrs:{type:"text",placeholder:"enter your question here",id:"question"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),t._v(" "),t._l(t.choices,function(e){return o("div",{staticClass:"choices"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.delete,expression:"!choice.delete"}],staticClass:"choice"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"choice.name"}],attrs:{type:"text",placeholder:"choice"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),t._v(" "),o("span",{attrs:{id:"delete-choice"},on:{click:function(t){e.delete=!0}}},[t._v("delete")])])])}),t._v(" "),o("button",{attrs:{id:"add-choice"},on:{click:function(e){t.addChoice()}}},[t._v("Add a choice")]),t._v(" "),o("button",{attrs:{id:"create"},on:{click:function(e){t.submitPoll()}}},[t._v("Create Poll")])],2)},staticRenderFns:[]}},34:function(t,e,o){"use strict";var i=o(18),n=o(108),s=o(100),a=o.n(s),c=o(101),r=o.n(c);i.a.use(n.a);var l=new n.a({routes:[{path:"/",name:"Home",component:a.a},{path:"/:uid",name:"PollVote",component:r.a}]});l.beforeEach(function(t,e,o){document.body.scrollTop=0,o()}),e.a=l},35:function(t,e,o){o(93);var i=o(4)(o(54),o(105),null,null);t.exports=i.exports},53:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(18),n=o(35),s=o.n(n),a=o(34);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},54:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(102),n=o.n(i);e.default={name:"app",data:function(){return{notifications:[]}},components:{RecentPolls:n.a}}},55:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(59),n=o.n(i),s=o(9),a=o.n(s);e.default={name:"create-poll",props:["notifications"],data:function(){return{question:"",choices:[{name:"",delete:!1},{name:"",delete:!1}],root:o.i({NODE_ENV:"production"}).ROOT||""}},methods:{addChoice:function(){this.choices.push({name:"",delete:!1})},validate:function(){if(""===this.question)return this.notifications.push({msg:"please type the question",type:"error",ignore:!1}),!1;var t=[],e=!0,o=!1,i=void 0;try{for(var s,a=n()(this.choices);!(e=(s=a.next()).done);e=!0){var c=s.value;""!==c.name&&!1===c.delete&&t.push(c.name)}}catch(t){o=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(o)throw i}}return t.length<2?(this.notifications.push({msg:"you must have at least two choices",type:"error",ignore:!1}),!1):t},submitPoll:function(){var t=this,e=this.validate();e&&a.a.post(this.root+"/api/polls",{title:this.question,choices:e}).then(function(e){t.$router.push("/"+e.data.uid),t.notifications.push({msg:"poll submitted successfully",type:"success",ignore:!1})}).catch(function(t){console.log(t)})}}}},56:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(99),n=o.n(i);e.default={name:"home",props:["notifications"],components:{CreatePoll:n.a}}},57:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(9),n=o.n(i);e.default={name:"poll-vote",data:function(){return{question:"",choices:[],showResults:!1,voted:!1,root:o.i({NODE_ENV:"production"}).ROOT||""}},methods:{_vote:function(t){var e=this;this.voted&&(this.showResults=!0),this.voted=!0,n.a.post(this.root+"/api/vote",{choice_id:t,poll_id:this.poll_id,ip:""+Math.floor(255*Math.random())}).then(function(t){e.question=t.data.title,e.choices=t.data.choices}).catch(function(t){console.log(t)}),this.showResults=!0},fetchData:function(){var t=this;this.showResults=!1,n.a.get(this.root+"/api/polls/"+this.$route.params.uid).then(function(e){t.poll_id=e.data.id,t.question=e.data.title,t.choices=e.data.choices}).catch(function(t){console.log(t)})},toggleResults:function(){this.showResults=!this.showResults,this.voted=!0},getOptimalRatio:function(t){return 0===t?2:100===t?95:t}},created:function(){this.fetchData()},watch:{$route:"fetchData"}}},58:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(9),n=o.n(i);e.default={name:"recent-polls",data:function(){return{polls:[],root:o.i({NODE_ENV:"production"}).ROOT||""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;n.a.get(this.root+"/api/polls?limit=10").then(function(e){t.polls=e.data}).catch(function(t){console.log(t)})}},watch:{$route:"fetchData"}}},91:function(t,e){},92:function(t,e){},93:function(t,e){},94:function(t,e){},95:function(t,e){},99:function(t,e,o){o(95);var i=o(4)(o(55),o(107),"data-v-c2136d68",null);t.exports=i.exports}},[53]);
//# sourceMappingURL=app.a692fecc0264f1aea6df.js.map