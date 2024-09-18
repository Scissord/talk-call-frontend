import{r as p,j as s,a as z,g as Y,s as Z,i as K,b as T}from"./index-C6qXf3ZC.js";function U(e,t){return String(e)===String(t)}function q(e,t){return Array.isArray(e)?e.map(a=>t.find(r=>U(r.value,a))).filter(a=>a):t.find(a=>U(a.value,e))||null}function J(e){return Array.isArray(e)?e:[e]}function te(e,t,a){if(!e)return t;if(!a)return e;if(!t)return J(e);const r=J(t),o=r.findIndex(c=>U(c.value,e.value));return o>=0?r.splice(o,1):r.push(e),r}function ae(e,t,a){if(!e&&!a)return t&&t.length&&t[0].name||"";const r=Array.isArray(e);return!e&&!r?"":r?e.map(o=>o.name).filter(Boolean).join(", "):e.name||""}function Q(e){return e?Array.isArray(e)?e.filter(Boolean).map(t=>t.value):e.value||null:null}function le(e){const t=[];return e.forEach(a=>{if(a.group){const r=t.findIndex(o=>o.type==="group"&&o.name===a.group);r>=0?t[r].items.push(a):t.push({items:[a],type:"group",name:a.group})}else t.push(a)}),t}function se(e,t){const a=e.length,r=t.length;if(a>r)return!1;if(t.indexOf(e)>=0)return!0;e:for(let o=0,c=0;o<a;o+=1){const l=e.charCodeAt(o);for(;c<r;)if(t.charCodeAt(c++)===l)continue e;return!1}return!0}function re(e,t){return t.length?e.filter(a=>se(t.toLowerCase(),`${a.name} ${a.group||""}`.trim().toLowerCase())):e}function ne(e,t,a){return e.filter(Boolean).reduce((r,o)=>o(r,a),t).map((r,o)=>({...r,index:o}))}function M(e){let t=0;return e.map(a=>a.type==="group"?a.items.map(r=>({...r,group:a.name,index:t++})):{...a,index:t++}).flat()}function oe(e,t,a,r){const[o,c]=p.useState(()=>M(e)),[l,n]=p.useState(!1);return p.useEffect(()=>{let i;if(t)return i=setTimeout(()=>{const u=t(r,o);n(!0),Promise.resolve(u).then(v=>c(M(v))).finally(()=>n(!1))},a),()=>{clearTimeout(i)}},[r]),p.useEffect(()=>{c(M(e))},[e]),[o,l]}function ce(e,t,a){const r=a.length-1;let o=null,c=-1,l=e;for(;c++<=r&&(!o||o.disabled);)l=t==="down"?l+1:l-1,l<0?l=r:l>r&&(l=0),o=a[l];return l}function ie(e,t,a){const[r,o]=p.useState(-1);return[{onKeyDown:c=>{const l=c.key.replace("Arrow","").toLowerCase();(l==="down"||l==="up")&&(c.preventDefault(),o(ce(r,l,e)))},onKeyUp:c=>{c.key==="Escape"?(c.preventDefault(),a.current.blur()):c.key==="Enter"&&(c.preventDefault(),e[r]&&t(e[r].value))}},r,o]}const V=()=>{};function de({options:e,defaultValue:t,value:a,multiple:r,search:o,onChange:c=V,onFocus:l=V,onBlur:n=V,closeOnSelect:i=!0,placeholder:u,getOptions:v,filterOptions:d,useFuzzySearch:N=!0,debounce:S}){const m=p.useRef(),[y,h]=p.useState(null),[f,$]=p.useState(""),[A,I]=p.useState(!1),[b,H]=oe(e,v,S,f),O=x=>{const R=te(q(decodeURIComponent(x),b),y,r);a===void 0&&h(R),c(Q(R),R),setTimeout(()=>{m.current&&i&&m.current.blur()},0)},D=[N?re:null,...d||[]],k=le(ne(D,b,f)),[F,B,P]=ie(k,O,m),g={search:f,focus:A,option:y,value:Q(y),fetching:H,highlighted:B,options:k,displayValue:ae(y,b,u)},L={tabIndex:"0",readOnly:!o,placeholder:u,value:A&&o?f:g.displayValue,ref:m,...F,onFocus:x=>{I(!0),l(x)},onBlur:x=>{I(!1),$(""),P(-1),n(x)},onMouseDown:x=>{A&&(x.preventDefault(),m.current.blur())},onChange:o?({target:x})=>$(x.value):null},E={tabIndex:"-1",onMouseDown(x){x.preventDefault(),O(x.currentTarget.value)}};return p.useEffect(()=>{h(q(a===void 0?t:a,b))},[a,b]),[g,L,E]}const _=e=>typeof e=="string",X=(e,t)=>_(t)?`${t}-${e}`:t[e];function ue(e,t){return _(e)?X(e,t):Object.entries(e).filter(([a,r])=>a&&r).map(([a])=>X(a,t)).join(" ")}function he({optionProps:e,highlighted:t,selected:a,option:r,cls:o,renderOption:c,disabled:l}){const n={...e,value:encodeURIComponent(r.value),disabled:l},i=o({option:!0,"is-selected":a,"is-highlighted":t});return s.jsxs("li",{className:o("row"),role:"menuitem","data-index":r.index,children:[c&&c(n,r,{selected:a,highlighted:t},i),!c&&s.jsx("button",{type:"button",className:i,...n,children:r.name})]})}var pe=p.memo(he);function fe(e,t){return t?Array.isArray(t)?t.findIndex(a=>a.value===e.value)>=0:t.value===e.value:!1}function ee(e){const{options:t,cls:a,renderOption:r,renderGroupHeader:o,optionProps:c,snapshot:l,disabled:n}=e;return s.jsx("ul",{className:a("options"),children:t.map(i=>i.type==="group"?s.jsx("li",{role:"none",className:a("row"),children:s.jsxs("div",{className:a("group"),children:[s.jsx("div",{className:a("group-header"),children:o?o(i.name):i.name}),s.jsx(ee,{...e,options:i.items})]})},i.name):s.jsx(pe,{option:i,optionProps:c,cls:a,renderOption:r,selected:fe(i,l.option),highlighted:l.highlighted===i.index,disabled:i.disabled||n},i.value))})}var xe=p.memo(ee);const W=p.forwardRef(({disabled:e,placeholder:t,multiple:a,search:r,autoFocus:o,autoComplete:c,id:l,closeOnSelect:n,className:i,renderValue:u,renderOption:v,renderGroupHeader:d,fuzzySearch:N,emptyMessage:S,value:m,...y},h)=>{const f=p.useRef(null),$=g=>ue(g,i),[A,I]=p.useState(m),[b,H,O]=de({value:A,placeholder:t,multiple:a,search:r,closeOnSelect:n&&!a,useFuzzySearch:N,...y}),{highlighted:D,value:k,fetching:F,focus:B}=b,P={...H,autoFocus:o,autoComplete:c,disabled:e};return p.useEffect(()=>{const{current:g}=f;if(g){const L=Array.isArray(k)?k[0]:k,E=g.querySelector(D>-1?`[data-index="${D}"]`:`[value="${encodeURIComponent(L)}"]`);if(E){const x=g.getBoundingClientRect(),R=E.getBoundingClientRect();g.scrollTop=E.offsetTop-x.height/2+R.height/2}}},[k,D,f.current]),p.useEffect(()=>I(m),[m]),s.jsxs("div",{ref:h,id:l,className:$({container:!0,"is-multiple":a,"is-disabled":e,"is-loading":F,"has-focus":B}),children:[(!a||t||r)&&s.jsxs("div",{className:$("value"),children:[u&&u(P,b,$("input")),!u&&s.jsx("input",{...P,className:$("input")})]}),s.jsxs("div",{className:$("select"),ref:f,onMouseDown:g=>g.preventDefault(),children:[b.options.length>0&&s.jsx(xe,{options:b.options,optionProps:O,renderOption:v,renderGroupHeader:d,disabled:e,snapshot:b,cls:$}),!b.options.length&&s.jsx("ul",{className:$("options"),children:!b.options.length&&S&&s.jsx("li",{className:$("not-found"),children:S})})]})]})});W.defaultProps={options:[],fuzzySearch:!0,printOptions:"auto",closeOnSelect:!0,debounce:250,autoComplete:"on",className:"select-search"};W.displayName="SelectSearch";var be=p.memo(W),me=be;const $e={wrapper:"select-type-1 relative",icon:"absolute right-1.5 top-2 hover:text-slate-400 cursor-pointer text-slate-500 z-10"},G=e=>{const{id:t,array:a,value:r,placeholder:o,onChange:c,className:l,disabled:n}=e,[i,u]=p.useState([]);return p.useEffect(()=>{let v=a??[];v.forEach(d=>{d.value=d[t??"id"]}),u([...v])},[a]),s.jsx("div",{className:`${$e.wrapper} ${l??""} ${n?"pointer-events-none opacity-60":""}`,children:s.jsx(me,{options:i??[],value:r,placeholder:o??"Поиск...",search:!0,onChange:c,disabled:n})})},w={container:`
    h-[14vh] flex items-center gap-12
    px-24 bg-white dark:bg-dbg text-black
    dark:text-white
  `,wrapper:`
    flex items-center gap-3
  `,title:`
    text-[24px] font-bold
  `,label:`
    text-[20px] font-semibold
  `},ge=()=>{const e=z(t=>Y(t));return s.jsxs("div",{className:w.container,children:[s.jsxs("div",{className:w.wrapper,children:[s.jsx("p",{className:w.title,children:"#ID:"}),s.jsx("p",{className:w.label,children:e==null?void 0:e.id})]}),s.jsxs("div",{className:w.wrapper,children:[s.jsx("p",{className:w.title,children:"Login:"}),s.jsx("p",{className:w.label,children:e==null?void 0:e.name})]}),s.jsxs("div",{className:w.wrapper,children:[s.jsx("p",{className:w.title,children:"Role:"}),s.jsx("p",{className:w.label,children:e==null?void 0:e.role.label})]})]})},j={label:`
    text-lg font-semibold
  `,input:`
    px-2 py-1 min-w-[50vh]
    outline-none hover:bg-blue-100 border
    border-slate-300 rounded-md
  `,button:`
    ml-auto border border-slate-300
    rounded-lg p-2 hover:bg-blue-100 mt-3
  `},ve=e=>{const{roles:t,handleUpdateUser:a,handleDeleteUser:r,isDisabled:o,user_info:c,setUserInfo:l,type:n}=e,i=z(Z);return s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("p",{className:`${j.label} ${i==="dark"?"text-white":"text-black"}`,children:"#ID:"}),s.jsx("input",{type:"text",className:`${j.input} ${i==="dark"?"text-white":"text-black"}`,value:c==null?void 0:c.id,onChange:u=>l({...c,id:u.target.value}),disabled:!0}),s.jsx("p",{className:`${j.label} ${i==="dark"?"text-white":"text-black"}`,children:"Name:"}),s.jsx("input",{type:"text",className:`${j.input} ${i==="dark"?"text-white":"text-black"}`,value:c==null?void 0:c.name,onChange:u=>l({...c,name:u.target.value}),disabled:o}),s.jsx("p",{className:`${j.label} ${i==="dark"?"text-white":"text-black"}`,children:"PASSWORD:"}),s.jsx("input",{type:"text",className:`${j.input} ${i==="dark"?"text-white":"text-black"}`,value:c==null?void 0:c.password,onChange:u=>l({...c,password:u.target.value}),disabled:!0}),s.jsx("p",{className:`${j.label} ${i==="dark"?"text-white":"text-black"}`,children:"Role:"}),s.jsx("select",{className:`${j.input} ${i==="dark"?"text-white":"text-black"}`,onChange:u=>{l({...c,role:u.target.value})},disabled:o,children:t.map(u=>s.jsx("option",{value:u.role,children:u.label},u.role))}),n===2&&s.jsx("button",{onClick:()=>a(),className:`${j.button} ${i==="dark"?"text-white":"text-black"}`,children:"Сохранить"}),n===3&&s.jsx("button",{onClick:()=>r(),className:`${j.button} ${i==="dark"?"text-white":"text-black"}`,children:"Удалить"})]})},C={label:`
    text-lg font-semibold
  `,input:`
    px-2 py-1 min-w-[50vh]
    outline-none hover:bg-blue-100 border
    border-slate-300 rounded-md
  `,button:`
    border border-slate-300 rounded-lg
    p-2 hover:bg-blue-100
  `},we=({type:e,user:t,fetchUsers:a})=>{const r=e===0||e===3,o=z(Z),c=z(h=>Y(h)),l=K(),[n,i]=p.useState(t),[u,v]=p.useState([{role:"3",label:"Оператор ПД"},{role:"4",label:"Оператор КД"},{role:"5",label:"РГ ПД"},{role:"6",label:"РГ КД"}]),[d,N]=p.useState({id:null,name:"",password:"",role:u[0].role});p.useEffect(()=>{let h=u;c&&+c.role.id==2&&(h=u.filter(f=>+f.role==1)),c&&+c.role.id==5&&(h=u.filter(f=>+f.role==3)),c&&+c.role.id==6&&(h=u.filter(f=>+f.role==4)),v(h),h.length>0&&N(f=>({...f,role:h[0].role}))},[c]);const S=async()=>{if((d==null?void 0:d.name.length)<3||(d==null?void 0:d.password.length)<5||(d==null?void 0:d.role)===null){l==null||l.notification.show("Логин больше 3, пароль больше 4 символов!","error");return}await T({method:"POST",url:"/admin",data:{name:d==null?void 0:d.name,password:d==null?void 0:d.password,role:d==null?void 0:d.role}}).then(()=>{l==null||l.notification.show("Пользователь успешно создан!","success"),a(),l==null||l.modal.hide()}).catch(h=>l==null?void 0:l.notification.show(h.response.data.detail,"error"))},m=async()=>{if(!(n!=null&&n.id)||(n==null?void 0:n.name.length)<3||(n==null?void 0:n.password.length)<5||(n==null?void 0:n.role)===null||(n==null?void 0:n.role)===void 0){l==null||l.notification.show("Заполните все поля / Минимум: пароль - 5 символов, логин - 3","error");return}await T({method:"PATCH",url:`/admin/${n==null?void 0:n.id}`,data:{name:n==null?void 0:n.name,role:n==null?void 0:n.role}}).then(()=>{l==null||l.notification.show("Пользователь успешно обновлен!","success"),a(),l==null||l.modal.hide()}).catch(h=>l==null?void 0:l.notification.show(h.response.data.detail,"error"))},y=async()=>{window.confirm("Вы уверены?")&&await T({method:"DELETE",url:`/admin/${n==null?void 0:n.id}`,data:{role:n==null?void 0:n.role}}).then(()=>{l==null||l.notification.show("Пользователь успешно удален!","success"),a(),l==null||l.modal.hide()}).catch(f=>l==null?void 0:l.notification.show(f.response.data.detail,"error"))};return s.jsxs("div",{children:[(e===0||e===2||e===3)&&s.jsx("div",{className:"flex flex-col gap-3",children:s.jsx(ve,{roles:u,handleUpdateUser:m,handleDeleteUser:y,isDisabled:r,user_info:n,setUserInfo:i,type:e})}),e===1&&s.jsxs("div",{className:"flex flex-col gap-3 mt-4",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("label",{className:`${C.label} ${o==="dark"?"text-white":"text-black"}`,children:"Логин:"}),s.jsx("input",{type:"text",className:`${C.input} ${o==="dark"?"text-white":"text-black"}`,placeholder:"Введите логин...",value:(d==null?void 0:d.name)||"",onChange:h=>N({...d,name:h.target.value})})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("label",{className:`${C.label} ${o==="dark"?"text-white":"text-black"}`,children:"Пароль:"}),s.jsx("input",{type:"text",className:`${C.input} ${o==="dark"?"text-white":"text-black"}`,value:(d==null?void 0:d.password)||"",placeholder:"Введите пароль...",onChange:h=>N({...d,password:h.target.value})})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx("label",{className:`${C.label} ${o==="dark"?"text-white":"text-black"}`,children:"              Роль:"}),s.jsx("select",{className:`${C.input} ${o==="dark"?"text-white":"text-black"}`,onChange:h=>N({...d,role:h.target.value}),children:u.map(h=>s.jsx("option",{value:h.role,children:h.label},h.role))})]}),s.jsx("button",{onClick:()=>S(),className:`${C.button} ${o==="dark"?"text-white":"text-black"}`,children:"Cоздать"})]})]})},je=({users:e,title:t,fetchUsers:a})=>{const r=K(),[o,c]=p.useState(void 0),l=(n,i,u)=>{r==null||r.modal.show({title:u,children:s.jsx(we,{type:n,user:i,fetchUsers:a})})};return s.jsxs("div",{className:"w-full sm:w-1/4 h-[15vh] bg-white border border-slate-300 rounded-lg px-4 py-2",children:[s.jsx("p",{className:"text-[24px] text-black font-semibold mb-2",children:t}),t==="Найти"&&s.jsx(G,{array:e??[],value:o,className:"w-full",placeholder:"Выберите пользователя",onChange:(n,i)=>{c(n),l(0,i,"Информация о пользователе")}}),t==="Добавить"&&s.jsx("button",{onClick:()=>l(1,null,"Добавление пользователя"),className:"border border-slate-300 rounded-lg bg-white p-2 hover:bg-blue-100",children:"Открыть"}),t==="Изменить"&&s.jsx(G,{array:e??[],className:"w-full",placeholder:"Выберите пользователя",value:o,onChange:(n,i)=>{c(n),l(2,i,"Информация о пользователе")}}),t==="Удалить"&&s.jsx(G,{array:e??[],className:"w-full",placeholder:"Выберите пользователя",value:o,onChange:(n,i)=>{c(n),l(3,i,"Удаление пользователя")}})]})},Ne=[{title:"Добавить"},{title:"Удалить"}],ye=({users:e,fetchUsers:t})=>s.jsx("div",{className:"h-full py-2 px-6 flex flex-col items-center justify-center gap-6",children:Ne.map(a=>s.jsx(je,{users:e,title:a.title,fetchUsers:t},a.title))}),ke=()=>{const e=K(),[t,a]=p.useState([]);p.useEffect(()=>{r()},[]);const r=async()=>{await T({method:"GET",url:"/admin"}).then(o=>{a(o.data.users)}).catch(()=>{e==null||e.notification.show("Ошибка при загруке пользователей","error")})};return s.jsx("div",{className:"h-[86vh] w-full",children:s.jsx(ye,{users:t,fetchUsers:r})})},Se=()=>s.jsxs("div",{className:"min-h-[100vh] bg-white",children:[s.jsx(ge,{}),s.jsx(ke,{})]});export{Se as default};
