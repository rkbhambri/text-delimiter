(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),c=(a(15),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),d=(a(16),function(e){return l.a.createElement("div",{className:"header w-100 text-center p-4"},"Text Delimiter")}),p=function(){return l.a.createElement("div",{className:"description col-md-6 offset-3 text-center pt-4 mt-4"},"Do you often need to take a spreadsheet of data and convert to a comma-delimited list? Be it for taking a list of zip codes or names to make an SQL query, or to take data from a CSV and be able to paste into an array. Enter your non-delimited data on the left, hit the button, and boom, separated data on the right. Special configs are below if the defaults aren't what you need!")},E=function(e){return l.a.createElement("div",{className:"column-data-wrapper col-md-5 text-center"},l.a.createElement("div",{className:"Title text-center"},l.a.createElement("h2",null,"Column Data")),l.a.createElement("div",{className:"column-data"},l.a.createElement("textarea",{className:"w-100",style:{minHeight:"250px"},value:e.columnText,onChange:function(t){return e.changeColumnText(t)}})))},v=function(e){return l.a.createElement("div",{className:"controls-wrapper mt-5 p-4"},l.a.createElement("select",{className:"form-control mt-2",defaultValue:",",onChange:function(t){return e.changeDelimiter(t)}},l.a.createElement("option",{value:","},","),l.a.createElement("option",{value:";"},";"),l.a.createElement("option",{value:"|"},"|"),l.a.createElement("option",{value:":"},":"),l.a.createElement("option",{value:" "},"Spaces")),l.a.createElement("button",{className:"btn btn-primary form-control mt-2",onClick:e.delimitData},"-]"),l.a.createElement("button",{className:"btn btn-primary form-control mt-2",onClick:e.reset},"Reset"))},f=function(e){return l.a.createElement("div",{className:"converter-settings border w-100 mt-3"},l.a.createElement("div",{className:"tidyup row col-md-7"},l.a.createElement("div",{className:"settings-title col-md-6 p-3",style:{lineHeight:"14px"}},l.a.createElement("p",null,"Tidy Up"),l.a.createElement("p",null,"Remove the new lines from output?")),l.a.createElement("form",{className:"select col-md-5 p-4",onChange:function(t){return e.removeNewLine(t)}},l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"tidyup",value:"true",defaultChecked:!0})," Yes"),l.a.createElement("label",{className:"radio-inline pl-4"},l.a.createElement("input",{type:"radio",name:"tidyup",value:"false"})," No"))),l.a.createElement("div",{className:"remove-duplicates row col-md-7"},l.a.createElement("div",{className:"settings-title col-md-6 p-3",style:{lineHeight:"14px"}},l.a.createElement("p",null,"Attack the clones"),l.a.createElement("p",null,"Remove the duplicates from the result set")),l.a.createElement("form",{className:"select col-md-6 p-4",onChange:function(t){return e.removeDuplicateToggle(t)}},l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"duplicates",value:"true"})," Yes"),l.a.createElement("label",{className:"radio-inline pl-4"},l.a.createElement("input",{type:"radio",name:"duplicates",value:"false",defaultChecked:!0})," No"))),l.a.createElement("div",{className:"explode row col-md-7"},l.a.createElement("div",{className:"settings-title col-md-6 p-3",style:{lineHeight:"14px"}},l.a.createElement("p",null,"Explode"),l.a.createElement("p",null,"Explode your records using this")),l.a.createElement("form",{className:"select col-md-5 p-4",onChange:function(t){return e.selectExplode(t)}},l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"explode",value:"\\n",defaultChecked:!0})," New Lines"),l.a.createElement("label",{className:"radio-inline pl-4"},l.a.createElement("input",{type:"radio",name:"explode",value:";"})," Semicolons"),l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"explode",value:" "})," Spaces"),l.a.createElement("label",{className:"radio-inline",style:{marginLeft:"45px"}},l.a.createElement("input",{type:"radio",name:"explode",value:","})," Commas"))),l.a.createElement("div",{className:"add-quotes row col-md-7"},l.a.createElement("div",{className:"settings-title col-md-6 p-3",style:{lineHeight:"14px"}},l.a.createElement("p",null,"Quotes"),l.a.createElement("p",null,"Add quotes to each record")),l.a.createElement("form",{className:"select col-md-6 p-4",onChange:function(t){return e.addQuotes(t)}},l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"quotes",defaultChecked:!0})," No"),l.a.createElement("label",{className:"radio-inline pl-4"},l.a.createElement("input",{type:"radio",name:"quotes",value:'""'})," Double"),l.a.createElement("label",{className:"radio-inline pl-4"},l.a.createElement("input",{type:"radio",name:"quotes",value:"''"})," Single"))))},g=function(e){return l.a.createElement("div",{className:"delimiter-data-wrapper col-md-5 text-center"},l.a.createElement("div",{className:"Title text-center"},l.a.createElement("h2",null,"Delimiter Data")),l.a.createElement("div",{className:"delimiter-data"},l.a.createElement("textarea",{className:"w-100",style:{minHeight:"250px"},value:e.delimitedText,onChange:function(t){return e.changeDelimitedText(t)}})))},h=a(8),x=a.n(h),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={delimiter:"",columnText:"",delimitedText:"",isSettingsVisible:!1,explode:null,isRemoveNewLine:!0,isRemoveDuplicate:!1,quotes:null},a.changeDelimiter=function(e){a.setState({delimiter:e.target.value})},a.changeColumnText=function(e){a.setState({columnText:e.target.value})},a.changeDelimitedText=function(e){a.setState({delimitedText:e.target.value})},a.delimitData=function(){var e=a.state.delimitedText;if(null===a.state.explode&&(e=a.state.columnText.split(" ").join(a.state.delimiter)),"\\n"===a.state.explode&&(e=a.state.columnText.split(" ").join(a.state.delimiter+"\n")),"\\n"!==a.state.explode&&(e="false"===a.state.isRemoveNewLine?(e=a.state.columnText.split(/\n/).join(a.state.delimiter)).split(a.state.delimiter).join(",\n"):a.state.columnText.split(/\n/).join(a.state.delimiter)),"true"===a.state.isRemoveDuplicate){var t=e.split(a.state.delimiter),n=[];t.map(function(e){return n.includes(e)||n.push(e),1})}'""'===a.state.quotes&&(e=(e=a.state.columnText.split(/\n/)).map(function(e){return'"'+e+'"'}).join(", ")),"''"===a.state.quotes&&(e=(e=a.state.columnText.split(/\n/)).map(function(e){return"'"+e+"'"}).join(", ")),a.setState({delimitedText:e})},a.reset=function(){a.setState({columnText:"",delimitedText:""})},a.converterSettingToggle=function(){a.setState({isSettingsVisible:!a.state.isSettingsVisible})},a.selectExplode=function(e){a.setState({explode:e.target.value,delimiter:e.target.value})},a.removeNewLine=function(e){a.setState({isRemoveNewLine:e.target.value})},a.removeDuplicateToggle=function(e){a.setState({isRemoveDuplicate:e.target.value})},a.addQuotes=function(e){a.setState({quotes:e.target.value})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"delimiter-wrap row m-2 pt-4"},l.a.createElement(E,{changeColumnText:function(t){return e.changeColumnText(t)},columnText:this.state.columnText}),l.a.createElement(v,{changeDelimiter:function(t){return e.changeDelimiter(t)},delimitData:this.delimitData,reset:this.reset}),l.a.createElement(g,{changeDelimitedText:function(t){return e.changeDelimitedText(t)},delimitedText:this.state.delimitedText}),l.a.createElement("div",{className:"converter-settings col-md-5 offset-3 pl-5 text-center mt-4"},l.a.createElement("span",{className:"settings-text border p-2",onClick:this.converterSettingToggle,style:{cursor:"pointer"}},l.a.createElement("span",null,l.a.createElement("img",{src:x.a,style:{width:"18px",height:"18px"},alt:"Not found"})),l.a.createElement("span",{className:"pl-1"},"Converter Settings"))),this.state.isSettingsVisible&&l.a.createElement(f,{selectExplode:function(t){return e.selectExplode(t)},removeNewLine:function(t){return e.removeNewLine(t)},removeDuplicateToggle:function(t){return e.removeDuplicateToggle(t)},addQuotes:function(t){return e.addQuotes(t)}}))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"layout"},l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(N,null))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null))}}]),t}(n.Component);a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/settings.0844b197.svg"},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.a7b6d17c.chunk.js.map