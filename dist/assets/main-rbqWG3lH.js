import{r as Q,d,a as m,u as Y,j as e,R as X,T as S,S as ee,b as se,c as ae,e as a,f as $,L as B,g as j,G as w,h as O,i as oe,B as te}from"./GlobalStyles-Dqpp29B9.js";import{H as re,F as ne,a as ie,b as ce,c as le}from"./homePage-KZymRYXq.js";import{C as de}from"./contaUser-BlC6ADMo.js";import{C as me}from"./cadastroUser-Cq9-V3G7.js";import{C as he}from"./carrinho-Dntxj3aE.js";import{P as ue}from"./pedidos-B4OcZbLu.js";import{C as pe,S as xe}from"./categoriasProdutos-BrHLo43X.js";import{U as je}from"./userDashboard-DgO-ve2I.js";import{L as fe}from"./listaAmei-PT3rrvzl.js";import{D as ge}from"./detalhesPedido-CBaJhYo4.js";import{T as Ce}from"./trocasDevolucoes-CPnjHxth.js";import{P as Le}from"./politicaPrivacidade-kAh7V2cz.js";import{F as ve}from"./faleConosco-MjiB1SNq.js";import{P as be}from"./produto-quitSg1g.js";import{R as Se}from"./redefinirMail-C9EIeXjp.js";import{R as we}from"./redefinirPass-P5VhggRx.js";import{C as Pe}from"./configurarRedefinicaoMail-BlCn2nUG.js";import{P as ye}from"./pedidosAtivos-DLPD4a0l.js";import{P as Fe}from"./pedido-BioRRRnP.js";import{P as Re}from"./pedidosEncerrados-D7IA_xT3.js";import{C as Ie}from"./configurarRedefinicaoSenha-CWMr0Hrd.js";import{P as Me}from"./produtos-9wPMmGSE.js";import{B as Ae}from"./banners-BqdSREpd.js";import{P as ke}from"./produtosBuscados-DbwMADFV.js";import{P as N}from"./pageNotFound404-Bbd3U7hi.js";import{C as Be}from"./cupom-Bjc3LpJF.js";import{C as Ne}from"./cdRastreio-CwJ1OTQC.js";import{U as Ee,u as Te,a as qe}from"./userContext-Hfd7AKwO.js";import{a as ze,G as F}from"./axios-DnYME9kn.js";import{C as De,F as Ue}from"./UserDashboardStyles-BUujLACN.js";import{F as E,L as T,I as q,a as He}from"./ContaUserStyles-jzYrjlID.js";import{R as z}from"./index-CmN5j4cY.js";import{P as _e}from"./paymentSuccess-DEFHWW3M.js";import{P as $e}from"./paymentLoad-D_s3-hLB.js";import{P as Oe}from"./paymentFail-DgByi8Yk.js";import{L as Ve,I as Ze,C as Ge,a as We,B as Je,b as Ke,c as Qe,d as y,H as Ye,S as Xe,e as M,f as es,g as ss,h as as,A as os,i as k,j as ts,T as rs,k as D,l as ns,m as is,n as cs,o as ls,p as ds}from"./NavBarStyles-CgKT-dJj.js";import{B as ms,a as hs}from"./index-U_MZ96hN.js";import{I as us,a as V,b as Z,c as ps}from"./index-BHTjUTUx.js";import"./HomePageStyles-CJMC4Gvw.js";import"./index-D6JL9M7r.js";import"./CategoriaProdutosStyle-Bi6KNH5F.js";import"./index-CJGrLZTX.js";import"./Functions-BNM27soa.js";import"./ModalAvisar-Y_GjLJ4T.js";import"./ModalsStyles-CkMaqKjX.js";import"./ProdutosStyle-8Z2-wOEa.js";import"./index-CVGnD8mp.js";import"./PedidoStyles-DLKgW4TH.js";import"./ProdutoStyles-Cz6hDj1C.js";import"./SpinnerComponent-D-z1JUIS.js";import"./FaleConoscoStyles-2l_QY-nO.js";import"./PoliticaPrivacidadeStyles-CtsmAyfC.js";import"./PedidosAdminStyle-Ddg4UkdS.js";import"./index-DT7h3x8e.js";import"./CdRastreioStyles-rUZR9pxi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&h(n)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();var G,U=Q;G=U.createRoot,U.hydrateRoot;const xs=d.div`
display: flex;
flex-direction: row;
gap: 2rem;
align-items: flex-end;
`,js=d.button`
width: 10rem;
padding: .5rem;
margin-top: 1rem;
border: 1px solid #A87826;
cursor: pointer;
border-radius: 8px;
background: #A87826;
color: #FFFFFF;
font-size: 1.1rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }
`;function fs(){const{user:t,logout:r}=m.useContext(Ee),[l,h]=m.useState(""),[s,o]=m.useState(""),[n,u]=m.useState(""),[f,i]=m.useState(""),[c]=Y(),p=c.get("token"),[x,g]=m.useState(!1),I=async C=>{if(C.preventDefault(),g(!0),l!==s){i("As senhas não coincidem."),u("");return}try{const L=await ze.put("http://localhost:3001/aurea/usuario/senha/redefinir-senha",{token:p,senha_user:l});L.data.error?(i(L.data.error),u("")):(u("Senha redefinida com sucesso."),i(""),setTimeout(()=>r(),1500))}catch{i("Erro ao redefinir senha. Tente novamente."),u("")}finally{g(!1)}};return e.jsx(X.Fragment,{children:e.jsx(De,{children:e.jsxs(Ue,{onSubmit:I,children:[e.jsx(S,{children:"Redefinir Senha"}),e.jsxs(E,{children:[e.jsx(T,{htmlFor:"senha-red",children:e.jsx(z,{})}),e.jsx(q,{type:"password",placeholder:"Nova senha",name:"senha-red",required:!0,value:l,onChange:C=>h(C.target.value)})]}),e.jsxs(E,{children:[e.jsx(T,{htmlFor:"senha-conf-red",children:e.jsx(z,{})}),e.jsx(q,{type:"password",placeholder:"Confirmar nova senha",name:"senha-conf-red",required:!0,value:s,onChange:C=>o(C.target.value)})]}),n&&e.jsx(ee,{children:n}),f&&e.jsx(se,{children:f}),e.jsxs(xs,{children:[e.jsx(He,{to:"/minha-conta",children:"Voltar"}),e.jsx(js,{type:"submit",disabled:x,children:x?"Redefinindo...":"Redefinir"})]})]})})})}function gs(){return e.jsxs(ae,{children:[e.jsx(a,{path:"/",element:e.jsx(re,{})}),e.jsx(a,{path:"/login",element:e.jsx(de,{})}),e.jsx(a,{path:"/cadastro",element:e.jsx(me,{})}),e.jsx(a,{path:"/:categoria",element:e.jsx(pe,{})}),e.jsx(a,{path:"/:categoria/:subcategoria",element:e.jsx(xe,{})}),e.jsx(a,{path:"/meu-carrinho",element:e.jsx(he,{})}),e.jsx(a,{path:"/meus-pedidos",element:e.jsx(ue,{})}),e.jsx(a,{path:"/produto/:nome_produto",element:e.jsx(be,{})}),e.jsx(a,{path:"/minha-conta",element:e.jsx(je,{})}),e.jsx(a,{path:"/lista-amei",element:e.jsx(fe,{})}),e.jsx(a,{path:"/detalhes-pedido/:id_pedido",element:e.jsx(ge,{})}),e.jsx(a,{path:"/fale-conosco",element:e.jsx(ve,{})}),e.jsx(a,{path:"/trocas-devolucoes",element:e.jsx(Ce,{})}),e.jsx(a,{path:"/politica-privacidade",element:e.jsx(Le,{})}),e.jsx(a,{path:"/redefinir-mail",element:e.jsx(Se,{})}),e.jsx(a,{path:"/redefinir-senha",element:e.jsx(we,{})}),e.jsx(a,{path:"/esqueci-minha-senha",element:e.jsx(fs,{})}),e.jsx(a,{path:"/redefinicao-mail",element:e.jsx(Pe,{})}),e.jsx(a,{path:"/redefinicao-senha",element:e.jsx(Ie,{})}),e.jsx(a,{path:"/pedidos-ativos",element:e.jsx(ye,{})}),e.jsx(a,{path:"/pedidos-encerrados",element:e.jsx(Re,{})}),e.jsx(a,{path:"/pedido/:id_pedido",element:e.jsx(Fe,{})}),e.jsx(a,{path:"/produtos",element:e.jsx(Me,{})}),e.jsx(a,{path:"/banners",element:e.jsx(Ae,{})}),e.jsx(a,{path:"/produtos-buscados",element:e.jsx(ke,{})}),e.jsx(a,{path:"/cupom",element:e.jsx(Be,{})}),e.jsx(a,{path:"/cd-rastreio",element:e.jsx(Ne,{})}),e.jsx(a,{path:"/order-success",element:e.jsx(_e,{})}),e.jsx(a,{path:"/pay-load",element:e.jsx($e,{})}),e.jsx(a,{path:"/pay-fail",element:e.jsx(Oe,{})}),e.jsx(a,{path:"/404",element:e.jsx(N,{})}),e.jsx(a,{path:"*",element:e.jsx(N,{})})]})}function Cs(){return e.jsx(Ve,{to:"/",children:e.jsx(Ze,{src:"\\assets\\logoAurea.png",alt:"Logo da Aurea Clothing"})})}function Ls(){const[t,r]=m.useState(""),l=$(),h=o=>{o.key==="Enter"&&t.trim()&&l(`/produtos-buscados?query=${encodeURIComponent(t)}`)},s=()=>{t.trim()?l(`/produtos-buscados?query=${encodeURIComponent(t)}`):alert("Digite algo para buscar.")};return e.jsxs(Ge,{children:[e.jsx(We,{type:"text",name:"busca",id:"buscaNav",placeholder:"O que você procura?",value:t,onChange:o=>r(o.target.value),onKeyPress:h}),e.jsx(Je,{onClick:s,children:e.jsx(Ke,{})})]})}function vs(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(t)}function bs(){const[t,r]=m.useState(!1),[l,h]=m.useState(null),[s,o]=m.useState(!1),n={"todas-as-categorias":["Alfaiataria","Blusas","Jeans","Macaquinhos","Conjuntos","Vestidos","Saias","Shorts","Acessórios","Lançamentos","Promoções"],alfaiataria:["Calças","Blazer","Short"],acessorios:["Bolsas","Cintos","Bonés"]};m.useEffect(()=>{const i=()=>o(window.innerWidth<=1440);return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]);const u=()=>{r(!t),h(!1)},f=i=>{h(c=>c===i?null:i)};return e.jsx(Qe,{children:s?e.jsxs(y,{children:[e.jsx(Ye,{onClick:u,children:e.jsx(vs,{})}),t&&e.jsx(Xe,{children:n["todas-as-categorias"].map(i=>{const c=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-");return e.jsxs("div",{style:{position:"relative"},children:[e.jsx(M,{to:`/${c}`,onClick:p=>{n[c]&&(p.preventDefault(),f(c))},children:i}),l===c&&n[c]&&e.jsx(es,{children:n[c].map(p=>e.jsx(M,{to:`/${c}/${p.toLowerCase()}`,children:p},p))})]},i)})})]}):e.jsx(ss,{children:Ss.map(i=>{const c=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-"),p=n[c];return e.jsxs(y,{children:[e.jsxs(as,{to:c==="todas-as-categorias"?"/":`/${c}`,children:[e.jsx("p",{children:i}),p&&e.jsx(os,{children:e.jsx(ms,{})})]}),p&&e.jsx(k,{children:n[c].map(x=>{const g=x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-");return e.jsx(M,{to:`/${c}/${g}`,children:x},x)})})]},i)})})})}const Ss=["Lançamentos","Promoções","Alfaiataria","Blusas","Jeans","Macaquinhos","Conjuntos","Vestidos","Saias","Shorts","Acessórios"];function W(t){return F({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z"},child:[]}]})(t)}function J(t){return F({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z"},child:[]}]})(t)}const ws=[{id:"user",icon:e.jsx(J,{})}],Ps=[{id:"chat",icon:e.jsx(us,{})}],H={user:[{label:e.jsxs(e.Fragment,{children:[e.jsx(J,{}),"Minha Conta"]})},{label:e.jsxs(e.Fragment,{children:[e.jsx(hs,{}),"Meus Pedidos"]})},{label:e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),"Lista Amei"]})},{label:e.jsxs(e.Fragment,{children:[e.jsx(W,{}),"Meu Carrinho"]})}],chat:[{label:e.jsxs(e.Fragment,{children:[e.jsx(V,{}),"(48)98408-2394"]}),url:"https://api.whatsapp.com/send/?phone=5548984082394"},{label:e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),"aureaclothingstore@gmail.com"]}),url:"mailto:aureaclothingstore@gmail.com"}]};function ys(){const[t,r]=m.useState(null),l=s=>{r(s)},h=()=>{r(null)};return e.jsxs(ts,{children:[Ps.map(({id:s,icon:o})=>e.jsxs(y,{onMouseEnter:()=>l(s),onMouseLeave:h,children:[e.jsx(rs,{children:o}),s==="chat"&&t===s&&e.jsx(k,{children:H[s].map(({label:n,url:u},f)=>e.jsx(D,{to:u,as:"a",href:u,target:"_blank",rel:"noopener noreferrer",children:n},`${n}-${f}`))})]},s)),e.jsx(ns,{to:"/meu-carrinho",title:"Meu Carrinho",children:e.jsx(W,{})}),ws.map(({id:s,icon:o})=>e.jsxs(y,{children:[e.jsx(is,{children:o}),s==="user"&&e.jsx(k,{children:H[s].map(({label:n},u)=>e.jsx(D,{to:`/${n.props.children[1].toLowerCase().replace(/\s+/g,"-")}`,children:n},`subitem-${u}`))})]},s))]})}function Fs(){return e.jsxs(cs,{children:[" ",e.jsxs(ls,{children:[e.jsx(Cs,{})," ",e.jsx(Ls,{})," ",e.jsx(ys,{})," "]}),e.jsxs(ds,{children:[e.jsx(bs,{})," "]})]})}const Rs=d.div`
display: flex;
flex-direction: column;
padding: 3rem;
gap: 3rem;
background: #FFFFFF;
margin-top: 4rem;
box-shadow: 0 -3px 3px #A87826;

    @media(max-width: 430px) {
        padding: 1rem;
    }
`,A=d.div`
display: flex;
flex-direction: row;
margin-left: 5rem;
margin-right: 5rem;
gap: 7rem;

    @media(max-width: 430px) {
        margin-left: 1rem;
        margin-right: 1rem;
        flex-direction: column;
        gap: 3rem;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    @media (min-width: 1440px) and (max-width: 1439px) {
        gap: 4rem;
    }
`,R=d.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
`,Is=d.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
width: 50%;

    @media(max-width: 430px) {
        width: 100%;
    }
`,Ms=d.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;

    @media(max-width: 430px) {
        gap: .5rem;
    }
`,_=d(B)`
font-size: 2rem;
color: #A87826;
text-decoration: none;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media(max-width: 430px) {
        font-size: 1rem;
    }
`,As=d(B)`
font-size: 1.7rem;
color: #A87826;
text-decoration: none;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }

    @media(max-width: 430px) {
        font-size: .8rem;
    }
`,P=d.div`
display: flex;
flex-direction: column;
gap: .5rem;
`,b=d(B)`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
text-decoration: none;
color: #000000;
    &:hover {
        transition: 0.3s;
        color: #A87826;
    }

        @media(max-width: 430px) {
        font-size: .7rem;
    }
`,ks=d.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
color: #000000;
`,Bs=d.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
justify-content: center;
width: 100%;
color: #000000;
`,Ns=d.ul`
display: flex;
flex-direction: row;
`,Es=d.li`
display: flex;
gap: .5rem;
`,v=d.img`
width: 45px;
height: 32px;
background: #F0F0F0;

    @media(max-width: 430px) {
        width: 33px;
        height: 20px;
    }
`,Ts=d.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

	@media(max-width: 430px) {
		font-size: .54rem;
	}
`;function qs(){return e.jsxs(Is,{children:[e.jsx(S,{children:"Sobre a loja"}),e.jsx(j,{style:{textAlign:"justify"},children:"Na Áurea Clothing, acreditamos que cada mulher é incrível à sua maneira, e nossas roupas são feitas para celebrar essa singularidade. Combinamos estilo, conforto e qualidade para oferecer peças que realçam a confiança e o poder de cada mulher. Nossa missão é vestir mulheres incríveis com looks que as façam sentir-se ainda mais especiais todos os dias. Junte-se a nós e descubra como a moda pode ser uma extensão da sua personalidade única."})]})}function zs(t){return F({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"},child:[]}]})(t)}function Ds(){return e.jsxs(R,{children:[e.jsx(S,{children:"Contato e Informações"}),e.jsxs(P,{children:[e.jsx(j,{children:"WhatsApp"}),e.jsxs(b,{to:"https://api.whatsapp.com/send/?phone=5548984082394",target:"_blank",children:[e.jsx(w,{children:e.jsx(V,{})}),e.jsx(j,{children:"(48)98408-2394"})]})]}),e.jsxs(P,{children:[e.jsx(j,{children:"E-mail"}),e.jsxs(b,{to:"mailto:aureaclothiingstore@gmail.com",target:"_blank",children:[e.jsx(w,{children:e.jsx(Z,{})}),e.jsx(j,{children:"aureaclothingstore@gmail.com"})]})]}),e.jsxs(P,{children:[e.jsx(j,{children:"Localização"}),e.jsxs(b,{to:"https://maps.app.goo.gl/Qvctwicb3V2scRGR7",target:"_blank",children:[e.jsx(w,{children:e.jsx(ps,{})}),e.jsx(j,{children:"Av. das Tipuanas, 337 - sala 9 - Madri, Palhoça - SC, 88131-300."})]})]}),e.jsxs(P,{children:[e.jsx(j,{children:"Horário de atendimento"}),e.jsxs(ks,{children:[e.jsx(w,{children:e.jsx(zs,{})}),e.jsxs(j,{children:["Seg a sex das 13:30h às 18:00h",e.jsx("br",{}),"Sab 09:30h às 13:30h"]})]})]})]})}function Us(){return e.jsxs(R,{children:[e.jsx(S,{children:"Políticas"}),e.jsx(b,{to:"/fale-conosco",children:"Fale conosco"}),e.jsx(b,{to:"/trocas-devolucoes",children:"Trocas e Devoluções"}),e.jsx(b,{to:"/politica-privacidade",children:"Política de privacidade"})]})}function Hs(){return e.jsxs(R,{children:[e.jsx(S,{children:"Redes Sociais"}),e.jsx(j,{children:"Acesse nossas redes sociais e acompanhe nosso trabalho de perto."}),e.jsxs(Ms,{children:[e.jsx(_,{to:"https://www.instagram.com/aureaaclothing/",target:"_blank",title:"Instagram",children:e.jsx(ie,{})}),e.jsx(_,{to:"https://api.whatsapp.com/send/?phone=5548984082394",target:"_blank",title:"Whatsapp",children:e.jsx(ce,{})}),e.jsx(As,{to:"https://beacons.ai/aureaclothing",target:"_blank",title:"Links Externos",children:e.jsx(le,{})})]})]})}function _s(){return e.jsxs(R,{children:[e.jsx(S,{children:"Formas de pagamento"}),e.jsx(Ns,{children:e.jsxs(Es,{children:[e.jsx(v,{src:"\\assets/logo-mastercard.png",alt:"Logo mastercard",title:"Mastercard"}),e.jsx(v,{src:"\\assets\\logo-visa.png",alt:"Logo Visa",title:"Visa"}),e.jsx(v,{src:"\\assets\\logo-hipercard.png",alt:"Logo Hipercard",title:"Hipercard"}),e.jsx(v,{src:"\\assets\\logo-elo.png",alt:"Logo Elo",title:"Elo"}),e.jsx(v,{src:"\\assets\\logo-american-express.png",alt:"Logo American Express",title:"American Express"}),e.jsx(v,{src:"\\assets\\logo-pix.png",alt:"Logo Pix",title:"Pix"})]})})]})}function $s(){const t=new Date().getFullYear();return e.jsxs(Bs,{children:[e.jsx(w,{children:"©"}),e.jsxs(Ts,{children:[t," Áurea Clothing - Vestindo mulheres incríveis. Todos os direitos reservados"]})]})}function Os(){return e.jsxs(Rs,{children:[e.jsxs(A,{children:[e.jsx(qs,{})," ",e.jsx(Ds,{})," ",e.jsx(Us,{})," ",e.jsx(Hs,{})," "]}),e.jsxs(A,{children:[e.jsx(_s,{})," "]}),e.jsxs(A,{children:[e.jsx($s,{})," "]})]})}const Vs=({children:t})=>{const{user:r,isAuthenticated:l,isLoading:h}=Te(),s=O(),o=$(),[n,u]=m.useState(!0),f=["/","/login","/cadastro","/produto/:nome_produto","/fale-conosco","/trocas-devolucoes","/politica-privacidade","/esqueci-minha-senha","/produtos-buscados","/alfaiataria","/blusas","/jeans","/macaquinhos","/conjuntos","/vestidos","/saias","/shorts","/acessorios","/lancamentos","/promocoes","/alfaiataria/calcas","/alfaiataria/blazer","/alfaiataria/short","/acessorios/bolsas","/acessorios/cintos","/acessorios/bones","/404"],i=["/pedidos-ativos","/pedidos-encerrados","/produtos","/banners","/cupom","/cd-rastreio"],c=f.some(L=>new RegExp(`^${L.replace(/:\w+/g,"[^/]+")}$`).test(s.pathname)),p=i.includes(s.pathname),x=s.pathname==="/redefinir-mail",g=new URLSearchParams(s.search).get("token"),I=s.pathname==="/redefinir-senha",C=new URLSearchParams(s.search).get("token");return m.useEffect(()=>{(async()=>{if(!h){if(l){if((s.pathname==="/login"||s.pathname==="/cadastro")&&o("/minha-conta",{replace:!0}),p&&(r==null?void 0:r.funcao_user)!=="admin"){o("/nao-autorizado",{replace:!0});return}}else if(!l&&!c){o("/login",{replace:!0});return}if(x&&!g){o("/erro-token",{replace:!0});return}if(I&&!C){o("/erro-token",{replace:!0});return}if(s.pathname==="/produtos-buscados"&&!new URLSearchParams(s.search).get("query")){o("/erro-query",{replace:!0});return}u(!1)}})()},[l,h,s.pathname,s.search,o,r==null?void 0:r.funcao_user,x,g]),!c&&(h||n)?e.jsx("div",{children:"Carregando..."}):l||c||x&&g?t:null},Zs=()=>{const{pathname:t}=O();return m.useEffect(()=>{const r=document.getElementById("root");r?r.scrollTo(0,0):window.scrollTo(0,0)},[t]),null};G(document.getElementById("root")).render(e.jsxs(m.StrictMode,{children:[e.jsx(oe,{}),e.jsxs(te,{children:[e.jsx(Zs,{}),e.jsx(Fs,{}),e.jsx(qe,{children:e.jsx(Vs,{children:e.jsx(gs,{})})}),e.jsx(Os,{})]})]}));
