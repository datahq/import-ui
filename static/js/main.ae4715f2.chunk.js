(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){e.exports=t.p+"static/media/datopian-logo.a5f7af6f.png"},129:function(e){e.exports={title:"Dataset",description:"A simple dataset.",type:"object",required:["title"],properties:{title:{type:"string",title:"Title"},license:{type:"string",title:"License",description:"A license for the dataset.",enum:["License 1","License 2"]},description:{type:"string",title:"Description"},created:{type:"string",title:"Created",format:"date-time"},author:{type:"string",title:"Author"}}}},130:function(e){e.exports={dataset:{description:{"ui:widget":"textarea"}}}},134:function(e,a,t){e.exports=t(287)},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},287:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(126),i=t.n(r),c=(t(139),t(140),t(141),t(142),t(5)),s=t(6),m=t(8),u=t(7),o=t(9),d=t(288),p=t(133),f=t(127),E=t.n(f),h=t(289),b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"navigation",role:"banner"},l.a.createElement("div",{className:"navigation-wrapper"},l.a.createElement("div",{className:"branding"},l.a.createElement(h.a,{className:"logo",to:"/"},l.a.createElement("img",{alt:"logo",src:E.a})))))}}]),a}(l.a.Component),v=t(88),g=t.n(v),j=t(128),O=t(16),N=t(89),y=t.n(N),k=l.a.createContext(),C=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(u.a)(a).call(this))).state={file:!1,data:null,type:null,metadata:{},step:"home"},e.fileUpload=e.fileUpload.bind(Object(O.a)(Object(O.a)(e))),e.stepChange=e.stepChange.bind(Object(O.a)(Object(O.a)(e))),e.updateMetadata=e.updateMetadata.bind(Object(O.a)(Object(O.a)(e))),e.loadDefault=e.loadDefault.bind(Object(O.a)(Object(O.a)(e))),e.cancelUpload=e.cancelUpload.bind(Object(O.a)(Object(O.a)(e))),e}return Object(o.a)(a,e),Object(s.a)(a,[{key:"fileData",value:function(e){var a=this;return y.a.parse(e,{complete:function(e){e.cols=e.meta.fields.map(function(e){return{Header:e=e||" ",accessor:e}}),a.setState({data:e})},header:!0})}},{key:"cancelUpload",value:function(){this.setState({file:null})}},{key:"updateMetadata",value:function(e){if("edit"in e){var a=e.formData;this.setState({metadata:a})}else{var t=this.state.metadata;t.title=e.target.value,this.setState({metadata:t})}}},{key:"loadDefault",value:function(e){var a=this;y.a.parse("https://s3.amazonaws.com/dkan-default-content-files/files/Polling_Places_Madison_0.csv",{download:!0,complete:function(e){e.cols=e.meta.fields.map(function(e){return{Header:e=e||" ",accessor:e}});a.setState({data:e,file:{name:"Polling_Places_Madison.csv"}})},header:!0})}},{key:"fileUpload",value:function(){var e=Object(j.a)(g.a.mark(function e(a){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"text/csv"===(t=a.target.files[0]).type?(this.fileData(t),this.setState({file:t,type:null})):this.setState({type:"wrong"});case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"stepChange",value:function(e){var a=e.target.attributes.getNamedItem("data").value;this.setState({step:a})}},{key:"render",value:function(){return!("title"in this.state.metadata)&&this.state.file&&"name"in this.state.file&&(this.state.metadata.title=this.state.file.name),l.a.createElement(k.Provider,{value:{file:this.state.file,fileUpload:this.fileUpload,step:this.state.step,data:this.state.data,metadata:this.state.metadata,updateMetadata:this.updateMetadata,loadDefault:this.loadDefault,cancelUpload:this.cancelUpload,type:this.state.type,stepChange:this.stepChange}},this.props.children)}}]),a}(l.a.Component),w=k.Consumer,x=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"step",value:function(e,a,t){var n=l.a.createElement("div",null);return"home"===a&&!1===e?n=l.a.createElement("li",{className:"breadcrumb-item"},"Home"):"home"===a?n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"breadcrumb-item"},"Home")):"preview"===a?n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(h.a,{data:"home",onClick:t,to:"/"},"Home")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Preview")):"publish"===a&&(n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(h.a,{data:"home",onClick:t,to:"/"},"Home")),l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(h.a,{data:"preview",onClick:t,to:"/preview"},"Preview")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Publish"))),n}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement(w,null,function(a){var t=a.file,n=a.stepChange,r=a.step;return l.a.createElement(l.a.Fragment,null,e.step(t,r,n))})))}}]),a}(l.a.Component),F=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"step",value:function(e,a,t){var n=l.a.createElement("div",null);return"home"===a&&!1===e?n=l.a.createElement("div",null):"home"===a?n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"page-item"},l.a.createElement(h.a,{data:"preview",onClick:t,to:"/preview",className:"page-link"},"Next"))):"preview"===a?n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"page-item"},l.a.createElement(h.a,{data:"home",onClick:t,to:"/",className:"page-link"},"Previous")),l.a.createElement("li",{className:"page-item"},l.a.createElement(h.a,{data:"detail",onClick:t,to:"/detail",className:"page-link"},"Next"))):"detail"===a?n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"page-item"},l.a.createElement(h.a,{data:"preview",onClick:t,to:"/preview",className:"page-link"},"Previous")),l.a.createElement("li",{className:"page-item"},l.a.createElement(h.a,{data:"publish",onClick:t,to:"/publish",className:"page-link"},"Next"))):"publish"===a&&(n=l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"page-item"},l.a.createElement(h.a,{data:"detail",onClick:t,to:"/detail",className:"page-link"},"Previous")))),n}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",{"aria-label":"Page navigation example",className:"container-fluid"},l.a.createElement("ul",{className:"pagination"},l.a.createElement(w,null,function(a){var t=a.file,n=a.stepChange,r=a.step;return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,e.step(t,r,n)):"")})))}}]),a}(l.a.Component),P=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.upload;return l.a.createElement(w,null,function(a){a.file,a.stepChange,a.step;return l.a.createElement("div",{className:"file-upload"},l.a.createElement("div",{className:"file-upload-wrap"},l.a.createElement("input",{className:"file-upload-input",type:"file",onChange:e,accept:"csv"}),l.a.createElement("div",{className:"drag-text"},l.a.createElement("h3",null,"Drag and drop a file or select add File"))),l.a.createElement("div",{className:"file-upload-content"},l.a.createElement("img",{className:"file-upload-file",src:"#",alt:"your file"}),l.a.createElement("div",{className:"file-title-wrap"},l.a.createElement("button",{type:"button",onClick:e,className:"remove-file"},"Remove ",l.a.createElement("span",{className:"file-title"},"Uploaded File")))))})}}]),a}(l.a.Component),U=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{role:"main",className:"container-fluid"},l.a.createElement("h1",null,"Welcome"),l.a.createElement("p",{className:"lead"},"This is the home page."),l.a.createElement(w,null,function(e){var a=e.file,t=e.fileUpload,n=e.type,r=e.loadDefault,i=e.cancelUpload;return l.a.createElement("div",null,"wrong"===n?l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Hey there. We only accept CSVs."):l.a.createElement(l.a.Fragment,null),a?l.a.createElement("div",{id:"file-desc"},l.a.createElement("p",null,"You have selected:"),l.a.createElement("div",{id:"file-name"},a.name),l.a.createElement("button",{id:"file-close",type:"button",onClick:i,className:"close btn btn-outline-warning","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{upload:t}),l.a.createElement("p",null,"or"),l.a.createElement("p",null,l.a.createElement("button",{onClick:r},"Click here to use an example file."))))})))}}]),a}(n.Component),D=t(290),S=(t(148),t(132)),M=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{role:"main",className:"container-fluid"},l.a.createElement("h1",null,"Preview"),l.a.createElement("p",{className:"lead"},"This is the preview page."),l.a.createElement(w,null,function(e){var a=e.file,t=e.data,n=e.metadata,r=e.updateMetadata;return l.a.createElement("div",null,a&&t?l.a.createElement("div",null,l.a.createElement("input",{id:"title",onChange:r,value:n.title,type:"text"}),l.a.createElement("p",null,l.a.createElement(S.a,{data:t.data,defaultPageSize:5,columns:t.cols}))):l.a.createElement(D.a,{to:"/"}))})))}}]),a}(n.Component),H=t(129),T=t(130),_=t(131),A=t.n(_),L=function(e){return console.log.bind(console,e)},W=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"fileUpload",value:function(){return l.a.createElement("div",null,"No file")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{role:"main",className:"container-fluid"},l.a.createElement("h1",null,"Detail"),l.a.createElement("p",{className:"lead"},"Time to add metadata."),l.a.createElement(w,null,function(e){var a=e.file,t=e.updateMetadata,n=e.metadata;return l.a.createElement("div",null,a?l.a.createElement("div",null,l.a.createElement(A.a,{schema:H,formData:n,uiSchema:T.dataset,onChange:t,onSubmit:L("submitted"),onError:L("errors")},l.a.createElement("br",null))):l.a.createElement(D.a,{to:"/"}))})))}}]),a}(n.Component),z=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"fileUpload",value:function(){return l.a.createElement("div",null,"No file")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{role:"main",className:"container-fluid"},l.a.createElement("h1",null,"Publish"),l.a.createElement("p",{className:"lead"},"This is the publish page."),l.a.createElement(w,null,function(e){var a=e.file;return l.a.createElement("div",null,a?l.a.createElement("div",null,l.a.createElement("p",null,"We still have a file!")):l.a.createElement(D.a,{to:"/"}))})))}}]),a}(n.Component),I=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=l.a.createElement(U,null),a=l.a.createElement(M,null),t=l.a.createElement(W,null),n=l.a.createElement(z,null);return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement(d.a,{basename:"/import-ui"},l.a.createElement(C,null,l.a.createElement(b,null),l.a.createElement(x,null),l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return e}}),l.a.createElement(p.a,{exact:!0,path:"/preview",render:function(){return a}}),l.a.createElement(p.a,{exact:!0,path:"/detail",render:function(){return t}}),l.a.createElement(p.a,{exact:!0,path:"/publish",render:function(){return n}}),l.a.createElement(F,null)))))}}]),a}(n.Component);i.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.ae4715f2.chunk.js.map