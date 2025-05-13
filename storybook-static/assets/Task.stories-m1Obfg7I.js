import{f as m}from"./index-sOjDGjzc.js";import{j as a}from"./jsx-runtime-BYYWji4R.js";import{g as R}from"./_commonjsHelpers-Cpj98o6Y.js";var x={exports:{}},D="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E=D,N=E;function S(){}function b(){}b.resetWarningCache=S;var j=function(){function e(p,l,$,q,K,P){if(P!==N){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:S};return s.PropTypes=s,s};x.exports=j();var I=x.exports;const n=R(I);function c({task:{id:e,title:t,state:s},onArchiveTask:p,onPinTask:l}){return a.jsxs("div",{className:`list-item ${s}`,children:[a.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:s==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>p(e)})]}),a.jsx("label",{htmlFor:`title-${e}`,"aria-label":t,className:"title",children:a.jsx("input",{type:"text",value:t,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),s!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>l(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}c.propTypes={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onArchiveTask:n.func,onPinTask:n.func};c.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const A={onArchiveTask:m(),onPinTask:m()},O={component:c,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...A}},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...r.args.task,state:"TASK_PINNED"}}},i={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var d,T,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,_,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const C=["ActionsData","Default","Pinned","Archived"],W=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:A,Archived:i,Default:r,Pinned:o,__namedExportsOrder:C,default:O},Symbol.toStringTag,{value:"Module"}));export{r as D,c as T,W as a};
