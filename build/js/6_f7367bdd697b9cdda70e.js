webpackJsonp([6],{1314:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=a(180),l=a(1),s=function(e){function t(a){babelHelpers.classCallCheck(this,t);var r=babelHelpers.possibleConstructorReturn(this,e.call(this,a));return r.state={data:[],searchText:""},r}return babelHelpers.inherits(t,e),t.prototype.componentWillMount=function(){var e=this.state.data;e=[{id:183,user:"John Doe",date:"11-7-2014",remark:"Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.",progress:"",label:55},{id:219,user:"Alexander Pierce",date:"12-7-2016",remark:"Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.",progress:"",label:70},{id:657,user:"Bob Doe",date:"8-7-2015",remark:"Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.",progress:"",label:30},{id:175,user:"Mike Doe",date:"3-23-2015",remark:"Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.",progress:"",label:90}],this.cache=e,this.setState({data:e})},t.prototype.handleValueChange=function(e){var t=this.state,a=t.searchText,n=t.data;a=e.target.value,n=this.cache;var l=new RegExp(a,"gi");n=n.map(function(e){var t=e.user.match(l);return t?Object.assign({},e,{user:r.createElement("span",null,e.user.split(l).map(function(e,a){return a>0?[r.createElement("span",{style:{color:"#f50"}},t[0]),e]:e}))}):null}).filter(function(e){return!!e}),this.setState({searchText:a,data:n})},t.prototype.render=function(){var e=this,t=[{title:"ID",dataIndex:"id",key:"id",width:"5%"},{title:"User",dataIndex:"user",key:"user",width:"15%"},{title:"Date",dataIndex:"date",key:"date",width:"10%%",sorter:function(e,t){return l(e.date).isAfter(t.date)?-1:1}},{title:"Remark",dataIndex:"remark",key:"remark",width:"30%"},{title:"Progress",dataIndex:"progress",key:"progress",width:"30%",sorter:function(e,t){return e.label-t.label},render:function(e,t,a){return r.createElement(n.Progress,{showInfo:!1,percent:t.label})}},{title:"Label",dataIndex:"label",key:"label",width:"10%",render:function(e,t,a){return r.createElement("div",{style:{width:50,height:20,lineHeight:"20px",textAlign:"center",color:"#fff",borderRadius:10,background:"#108EE9"}},e,"%")}}],a=this.state,s=a.data,i=a.searchText;return r.createElement(n.Card,null,r.createElement(n.Row,null,r.createElement(n.Col,{lg:8,md:24},r.createElement(n.Row,{type:"flex",justify:"start"},r.createElement(n.Input,{placeholder:"filter by name",style:{width:"60%",marginRight:10},value:i,onChange:function(t){return e.handleValueChange(t)}}))),r.createElement(n.Col,{lg:24,md:12,style:{marginTop:20}},r.createElement(n.Table,{rowKey:function(e,t){return t.toString()},bordered:!0,columns:t,dataSource:s}))))},t}(r.Component);t.default=s}});