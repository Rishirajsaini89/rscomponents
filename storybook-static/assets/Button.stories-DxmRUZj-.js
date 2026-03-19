import{j as B}from"./jsx-runtime-BjG_zV1W.js";import{r as N}from"./index-B3TfwC44.js";import{c as C}from"./cx-2dOUpm6k.js";const f=N.forwardRef(function({bsPrefix:n="btn",className:t,unstyled:y,variant:x="primary",size:l,block:T,loading:s,loadingText:b="Loading...",disabled:q,children:w,type:h="button",...k},R){const S=y?t:C(n,`${n}-${x}`,l?`${n}-${l}`:void 0,T?"w-100":void 0,t);return B.jsx("button",{ref:R,type:h,className:S,disabled:q||s,...k,children:s?b:w})});f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{bsPrefix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'btn'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},unstyled:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'\r
| 'secondary'\r
| 'success'\r
| 'danger'\r
| 'warning'\r
| 'info'\r
| 'light'\r
| 'dark'\r
| 'link'\r
| 'outline-primary'\r
| 'outline-secondary'\r
| 'outline-success'\r
| 'outline-danger'\r
| 'outline-warning'\r
| 'outline-info'\r
| 'outline-light'\r
| 'outline-dark'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"},{name:"literal",value:"'outline-primary'"},{name:"literal",value:"'outline-secondary'"},{name:"literal",value:"'outline-success'"},{name:"literal",value:"'outline-danger'"},{name:"literal",value:"'outline-warning'"},{name:"literal",value:"'outline-info'"},{name:"literal",value:"'outline-light'"},{name:"literal",value:"'outline-dark'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:""},block:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'Loading...'",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const j={title:"Components/RSButton",component:f,args:{children:"Save",variant:"primary"},tags:["autodocs"]},e={},a={args:{loading:!0,loadingText:"Saving..."}},r={args:{className:"rounded-0 px-4"}};var o,i,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    loading: true,
    loadingText: 'Saving...'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,g,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    className: 'rounded-0 px-4'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["Basic","Loading","CustomClass"];export{e as Basic,r as CustomClass,a as Loading,E as __namedExportsOrder,j as default};
