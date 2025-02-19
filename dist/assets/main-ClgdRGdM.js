import{r as Y,d,a as m,u as Q,j as e,R as X,T as b,S as ee,b as se,c as ae,e as a,f as H,L as A,g as v,G as I,h as O,i as oe,B as te}from"./GlobalStyles-Dqpp29B9.js";import{H as re,F as ne,a as ie,b as ce,c as le}from"./homePage-CCK1kFkT.js";import{C as de}from"./contaUser-DauEDNU3.js";import{C as me}from"./cadastroUser-zIjYIswZ.js";import{C as ue}from"./carrinho-CScFQNr-.js";import{P as pe}from"./pedidos-YrQZW621.js";import{C as he,S as xe}from"./categoriasProdutos-BSU4Fe7u.js";import{U as je}from"./userDashboard-RBhm8c_3.js";import{L as fe}from"./listaAmei-Bj-oP_OZ.js";import{D as ge}from"./detalhesPedido-D-gbXA_y.js";import{T as Ce}from"./trocasDevolucoes-CPnjHxth.js";import{P as Le}from"./politicaPrivacidade-kAh7V2cz.js";import{F as ve}from"./faleConosco-m2lj5rik.js";import{P as be}from"./produto-B2hKGt0C.js";import{R as we}from"./redefinirMail-1jJVvtwo.js";import{R as Se}from"./redefinirPass-Dmu1y-yc.js";import{C as Pe}from"./configurarRedefinicaoMail-CxrrorW5.js";import{P as ye}from"./pedidosAtivos-DXcgQsjh.js";import{P as Fe}from"./pedido-cl3AK_DI.js";import{P as Re}from"./pedidosEncerrados-B7pb9T4A.js";import{C as Ie}from"./configurarRedefinicaoSenha-BhrFqqck.js";import{P as Me}from"./produtos-ChDHBq92.js";import{B as Ae}from"./banners-Cnu0My5w.js";import{P as ke}from"./produtosBuscados-BeLSz3OE.js";import{P as B}from"./pageNotFound404-Bbd3U7hi.js";import{C as Be}from"./cupom-BVygnL_U.js";import{C as Ne}from"./cdRastreio-Di9giFNe.js";import{U as Ee,u as qe,a as Te}from"./userContext-D66xfPlX.js";import{a as De,G as k}from"./axios-DnYME9kn.js";import{C as ze,F as Ue}from"./UserDashboardStyles-BUujLACN.js";import{F as N,L as E,I as q,a as $e}from"./ContaUserStyles-jzYrjlID.js";import{R as T}from"./index-CmN5j4cY.js";import{P as _e}from"./paymentSuccess-DEFHWW3M.js";import{P as He}from"./paymentLoad-D_s3-hLB.js";import{P as Oe}from"./paymentFail-DgByi8Yk.js";import{L as Ve,I as Ge,C as Ze,a as We,B as Je,b as Ke,c as Ye,d as S,H as Qe,S as Xe,e as F,f as es,g as ss,h as as,A as os,i as M,j as ts,T as rs,k as D,l as ns,m as is,n as cs,o as ls,p as ds}from"./NavBarStyles-CgKT-dJj.js";import{B as ms,a as us}from"./index-U_MZ96hN.js";import{I as ps,a as V,b as G}from"./index-BDeTybOB.js";import"./HomePageStyles-CJMC4Gvw.js";import"./index-D6JL9M7r.js";import"./CategoriaProdutosStyle-Bi6KNH5F.js";import"./index-CJGrLZTX.js";import"./Functions-D5_z5ReH.js";import"./ModalAvisar-Y_GjLJ4T.js";import"./ModalsStyles-CkMaqKjX.js";import"./ProdutosStyle-8Z2-wOEa.js";import"./index-CVGnD8mp.js";import"./PedidoStyles-DLKgW4TH.js";import"./ProdutoStyles-Cz6hDj1C.js";import"./SpinnerComponent-D-z1JUIS.js";import"./FaleConoscoStyles-2l_QY-nO.js";import"./PoliticaPrivacidadeStyles-CtsmAyfC.js";import"./PedidosAdminStyle-Ddg4UkdS.js";import"./index-DT7h3x8e.js";import"./CdRastreioStyles-rUZR9pxi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();var Z,z=Y;Z=z.createRoot,z.hydrateRoot;const hs=d.div`
display: flex;
flex-direction: row;
gap: 2rem;
align-items: flex-end;
`,xs=d.button`
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
`;function js(){const{user:t,logout:r}=m.useContext(Ee),[l,u]=m.useState(""),[s,o]=m.useState(""),[n,p]=m.useState(""),[j,i]=m.useState(""),[c]=Q(),h=c.get("token"),[x,f]=m.useState(!1),y=async g=>{if(g.preventDefault(),f(!0),l!==s){i("As senhas não coincidem."),p("");return}try{const C=await De.put("http://localhost:3001/aurea/usuario/senha/redefinir-senha",{token:h,senha_user:l});C.data.error?(i(C.data.error),p("")):(p("Senha redefinida com sucesso."),i(""),setTimeout(()=>r(),1500))}catch{i("Erro ao redefinir senha. Tente novamente."),p("")}finally{f(!1)}};return e.jsx(X.Fragment,{children:e.jsx(ze,{children:e.jsxs(Ue,{onSubmit:y,children:[e.jsx(b,{children:"Redefinir Senha"}),e.jsxs(N,{children:[e.jsx(E,{htmlFor:"senha-red",children:e.jsx(T,{})}),e.jsx(q,{type:"password",placeholder:"Nova senha",name:"senha-red",required:!0,value:l,onChange:g=>u(g.target.value)})]}),e.jsxs(N,{children:[e.jsx(E,{htmlFor:"senha-conf-red",children:e.jsx(T,{})}),e.jsx(q,{type:"password",placeholder:"Confirmar nova senha",name:"senha-conf-red",required:!0,value:s,onChange:g=>o(g.target.value)})]}),n&&e.jsx(ee,{children:n}),j&&e.jsx(se,{children:j}),e.jsxs(hs,{children:[e.jsx($e,{to:"/minha-conta",children:"Voltar"}),e.jsx(xs,{type:"submit",disabled:x,children:x?"Redefinindo...":"Redefinir"})]})]})})})}function fs(){return e.jsxs(ae,{children:[e.jsx(a,{path:"/",element:e.jsx(re,{})}),e.jsx(a,{path:"/login",element:e.jsx(de,{})}),e.jsx(a,{path:"/cadastro",element:e.jsx(me,{})}),e.jsx(a,{path:"/:categoria",element:e.jsx(he,{})}),e.jsx(a,{path:"/:categoria/:subcategoria",element:e.jsx(xe,{})}),e.jsx(a,{path:"/meu-carrinho",element:e.jsx(ue,{})}),e.jsx(a,{path:"/meus-pedidos",element:e.jsx(pe,{})}),e.jsx(a,{path:"/produto/:nome_produto",element:e.jsx(be,{})}),e.jsx(a,{path:"/minha-conta",element:e.jsx(je,{})}),e.jsx(a,{path:"/lista-amei",element:e.jsx(fe,{})}),e.jsx(a,{path:"/detalhes-pedido/:id_pedido",element:e.jsx(ge,{})}),e.jsx(a,{path:"/fale-conosco",element:e.jsx(ve,{})}),e.jsx(a,{path:"/trocas-devolucoes",element:e.jsx(Ce,{})}),e.jsx(a,{path:"/politica-privacidade",element:e.jsx(Le,{})}),e.jsx(a,{path:"/redefinir-mail",element:e.jsx(we,{})}),e.jsx(a,{path:"/redefinir-senha",element:e.jsx(Se,{})}),e.jsx(a,{path:"/esqueci-minha-senha",element:e.jsx(js,{})}),e.jsx(a,{path:"/redefinicao-mail",element:e.jsx(Pe,{})}),e.jsx(a,{path:"/redefinicao-senha",element:e.jsx(Ie,{})}),e.jsx(a,{path:"/pedidos-ativos",element:e.jsx(ye,{})}),e.jsx(a,{path:"/pedidos-encerrados",element:e.jsx(Re,{})}),e.jsx(a,{path:"/pedido/:id_pedido",element:e.jsx(Fe,{})}),e.jsx(a,{path:"/produtos",element:e.jsx(Me,{})}),e.jsx(a,{path:"/banners",element:e.jsx(Ae,{})}),e.jsx(a,{path:"/produtos-buscados",element:e.jsx(ke,{})}),e.jsx(a,{path:"/cupom",element:e.jsx(Be,{})}),e.jsx(a,{path:"/cd-rastreio",element:e.jsx(Ne,{})}),e.jsx(a,{path:"/order-success",element:e.jsx(_e,{})}),e.jsx(a,{path:"/pay-load",element:e.jsx(He,{})}),e.jsx(a,{path:"/pay-fail",element:e.jsx(Oe,{})}),e.jsx(a,{path:"/404",element:e.jsx(B,{})}),e.jsx(a,{path:"*",element:e.jsx(B,{})})]})}function gs(){return e.jsx(Ve,{to:"/",children:e.jsx(Ge,{src:"\\assets\\logoAurea.png",alt:"Logo da Aurea Clothing"})})}function Cs(){const[t,r]=m.useState(""),l=H(),u=o=>{o.key==="Enter"&&t.trim()&&l(`/produtos-buscados?query=${encodeURIComponent(t)}`)},s=()=>{t.trim()?l(`/produtos-buscados?query=${encodeURIComponent(t)}`):alert("Digite algo para buscar.")};return e.jsxs(Ze,{children:[e.jsx(We,{type:"text",name:"busca",id:"buscaNav",placeholder:"O que você procura?",value:t,onChange:o=>r(o.target.value),onKeyPress:u}),e.jsx(Je,{onClick:s,children:e.jsx(Ke,{})})]})}function Ls(t){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(t)}function vs(){const[t,r]=m.useState(!1),[l,u]=m.useState(null),[s,o]=m.useState(!1),n={"todas-as-categorias":["Alfaiataria","Blusas","Jeans","Macaquinhos","Conjuntos","Vestidos","Saias","Shorts","Acessórios","Lançamentos","Promoções"],alfaiataria:["Calças","Blazer","Short"],acessorios:["Bolsas","Cintos","Bonés"]};m.useEffect(()=>{const i=()=>o(window.innerWidth<=1440);return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]);const p=()=>{r(!t),u(!1)},j=i=>{u(c=>c===i?null:i)};return e.jsx(Ye,{children:s?e.jsxs(S,{children:[e.jsx(Qe,{onClick:p,children:e.jsx(Ls,{})}),t&&e.jsx(Xe,{children:n["todas-as-categorias"].map(i=>{const c=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-");return e.jsxs("div",{style:{position:"relative"},children:[e.jsx(F,{to:`/${c}`,onClick:h=>{n[c]&&(h.preventDefault(),j(c))},children:i}),l===c&&n[c]&&e.jsx(es,{children:n[c].map(h=>e.jsx(F,{to:`/${c}/${h.toLowerCase()}`,children:h},h))})]},i)})})]}):e.jsx(ss,{children:bs.map(i=>{const c=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-"),h=n[c];return e.jsxs(S,{children:[e.jsxs(as,{to:c==="todas-as-categorias"?"/":`/${c}`,children:[e.jsx("p",{children:i}),h&&e.jsx(os,{children:e.jsx(ms,{})})]}),h&&e.jsx(M,{children:n[c].map(x=>{const f=x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-");return e.jsx(F,{to:`/${c}/${f}`,children:x},x)})})]},i)})})})}const bs=["Lançamentos","Promoções","Alfaiataria","Blusas","Jeans","Macaquinhos","Conjuntos","Vestidos","Saias","Shorts","Acessórios"];function W(t){return k({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z"},child:[]}]})(t)}function J(t){return k({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z"},child:[]}]})(t)}const ws=[{id:"user",icon:e.jsx(J,{})}],Ss=[{id:"chat",icon:e.jsx(ps,{})}],U={user:[{label:e.jsxs(e.Fragment,{children:[e.jsx(J,{}),"Minha Conta"]})},{label:e.jsxs(e.Fragment,{children:[e.jsx(us,{}),"Meus Pedidos"]})},{label:e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),"Lista Amei"]})},{label:e.jsxs(e.Fragment,{children:[e.jsx(W,{}),"Meu Carrinho"]})}],chat:[{label:e.jsxs(e.Fragment,{children:[e.jsx(V,{}),"(48)98408-2394"]}),url:"https://api.whatsapp.com/send/?phone=5548984082394"},{label:e.jsxs(e.Fragment,{children:[e.jsx(G,{}),"aureaclothingstore@gmail.com"]}),url:"mailto:aureaclothingstore@gmail.com"}]};function Ps(){const[t,r]=m.useState(null),l=s=>{r(s)},u=()=>{r(null)};return e.jsxs(ts,{children:[Ss.map(({id:s,icon:o})=>e.jsxs(S,{onMouseEnter:()=>l(s),onMouseLeave:u,children:[e.jsx(rs,{children:o}),s==="chat"&&t===s&&e.jsx(M,{children:U[s].map(({label:n,url:p},j)=>e.jsx(D,{to:p,as:"a",href:p,target:"_blank",rel:"noopener noreferrer",children:n},`${n}-${j}`))})]},s)),e.jsx(ns,{to:"/meu-carrinho",title:"Meu Carrinho",children:e.jsx(W,{})}),ws.map(({id:s,icon:o})=>e.jsxs(S,{children:[e.jsx(is,{children:o}),s==="user"&&e.jsx(M,{children:U[s].map(({label:n},p)=>e.jsx(D,{to:`/${n.props.children[1].toLowerCase().replace(/\s+/g,"-")}`,children:n},`subitem-${p}`))})]},s))]})}function ys(){return e.jsxs(cs,{children:[" ",e.jsxs(ls,{children:[e.jsx(gs,{})," ",e.jsx(Cs,{})," ",e.jsx(Ps,{})," "]}),e.jsxs(ds,{children:[e.jsx(vs,{})," "]})]})}const Fs=d.div`
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
`,R=d.div`
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
`,P=d.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
`,Rs=d.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1rem;
width: 50%;

    @media(max-width: 430px) {
        width: 100%;
    }
`,Is=d.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;

    @media(max-width: 430px) {
        gap: .5rem;
    }
`,$=d(A)`
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
`,Ms=d(A)`
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
`,_=d.div`
display: flex;
flex-direction: column;
gap: .5rem;
`,w=d(A)`
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
`;d.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
color: #000000;
`;const As=d.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .5rem;
justify-content: center;
width: 100%;
color: #000000;
`,ks=d.ul`
display: flex;
flex-direction: row;
`,Bs=d.li`
display: flex;
gap: .5rem;
`,L=d.img`
width: 45px;
height: 32px;
background: #F0F0F0;

    @media(max-width: 430px) {
        width: 33px;
        height: 20px;
    }
`,Ns=d.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

	@media(max-width: 430px) {
		font-size: .54rem;
	}
`;function Es(){return e.jsxs(Rs,{children:[e.jsx(b,{children:"Sobre a loja"}),e.jsx(v,{style:{textAlign:"justify"},children:"Na Áurea Clothing, acreditamos que cada mulher é incrível à sua maneira, e nossas roupas são feitas para celebrar essa singularidade. Combinamos estilo, conforto e qualidade para oferecer peças que realçam a confiança e o poder de cada mulher. Nossa missão é vestir mulheres incríveis com looks que as façam sentir-se ainda mais especiais todos os dias. Junte-se a nós e descubra como a moda pode ser uma extensão da sua personalidade única."})]})}function qs(){return e.jsxs(P,{children:[e.jsx(b,{children:"Contato e Informações"}),e.jsxs(_,{children:[e.jsx(v,{children:"WhatsApp"}),e.jsxs(w,{to:"https://api.whatsapp.com/send/?phone=5548984082394",target:"_blank",children:[e.jsx(I,{children:e.jsx(V,{})}),e.jsx(v,{children:"(48)98408-2394"})]})]}),e.jsxs(_,{children:[e.jsx(v,{children:"E-mail"}),e.jsxs(w,{to:"mailto:aureaclothiingstore@gmail.com",target:"_blank",children:[e.jsx(I,{children:e.jsx(G,{})}),e.jsx(v,{children:"aureaclothingstore@gmail.com"})]})]})]})}function Ts(){return e.jsxs(P,{children:[e.jsx(b,{children:"Políticas"}),e.jsx(w,{to:"/fale-conosco",children:"Fale conosco"}),e.jsx(w,{to:"/trocas-devolucoes",children:"Trocas e Devoluções"}),e.jsx(w,{to:"/politica-privacidade",children:"Política de privacidade"})]})}function Ds(){return e.jsxs(P,{children:[e.jsx(b,{children:"Redes Sociais"}),e.jsx(v,{children:"Acesse nossas redes sociais e acompanhe nosso trabalho de perto."}),e.jsxs(Is,{children:[e.jsx($,{to:"https://www.instagram.com/aureaaclothing/",target:"_blank",title:"Instagram",children:e.jsx(ie,{})}),e.jsx($,{to:"https://api.whatsapp.com/send/?phone=5548984082394",target:"_blank",title:"Whatsapp",children:e.jsx(ce,{})}),e.jsx(Ms,{to:"https://beacons.ai/aureaclothing",target:"_blank",title:"Links Externos",children:e.jsx(le,{})})]})]})}function zs(){return e.jsxs(P,{children:[e.jsx(b,{children:"Formas de pagamento"}),e.jsx(ks,{children:e.jsxs(Bs,{children:[e.jsx(L,{src:"\\assets/logo-mastercard.png",alt:"Logo mastercard",title:"Mastercard"}),e.jsx(L,{src:"\\assets\\logo-visa.png",alt:"Logo Visa",title:"Visa"}),e.jsx(L,{src:"\\assets\\logo-hipercard.png",alt:"Logo Hipercard",title:"Hipercard"}),e.jsx(L,{src:"\\assets\\logo-elo.png",alt:"Logo Elo",title:"Elo"}),e.jsx(L,{src:"\\assets\\logo-american-express.png",alt:"Logo American Express",title:"American Express"}),e.jsx(L,{src:"\\assets\\logo-pix.png",alt:"Logo Pix",title:"Pix"})]})})]})}function Us(){const t=new Date().getFullYear();return e.jsxs(As,{children:[e.jsx(I,{children:"©"}),e.jsxs(Ns,{children:[t," Áurea Clothing - Vestindo mulheres incríveis. Todos os direitos reservados"]})]})}function $s(){return e.jsxs(Fs,{children:[e.jsxs(R,{children:[e.jsx(Es,{})," ",e.jsx(qs,{})," ",e.jsx(Ts,{})," ",e.jsx(Ds,{})," "]}),e.jsxs(R,{children:[e.jsx(zs,{})," "]}),e.jsxs(R,{children:[e.jsx(Us,{})," "]})]})}const _s=({children:t})=>{const{user:r,isAuthenticated:l,isLoading:u}=qe(),s=O(),o=H(),[n,p]=m.useState(!0),j=["/","/login","/cadastro","/produto/:nome_produto","/fale-conosco","/trocas-devolucoes","/politica-privacidade","/esqueci-minha-senha","/produtos-buscados","/alfaiataria","/blusas","/jeans","/macaquinhos","/conjuntos","/vestidos","/saias","/shorts","/acessorios","/lancamentos","/promocoes","/alfaiataria/calcas","/alfaiataria/blazer","/alfaiataria/short","/acessorios/bolsas","/acessorios/cintos","/acessorios/bones","/404"],i=["/pedidos-ativos","/pedidos-encerrados","/produtos","/banners","/cupom","/cd-rastreio"],c=j.some(C=>new RegExp(`^${C.replace(/:\w+/g,"[^/]+")}$`).test(s.pathname)),h=i.includes(s.pathname),x=s.pathname==="/redefinir-mail",f=new URLSearchParams(s.search).get("token"),y=s.pathname==="/redefinir-senha",g=new URLSearchParams(s.search).get("token");return m.useEffect(()=>{(async()=>{if(!u){if(l){if((s.pathname==="/login"||s.pathname==="/cadastro")&&o("/minha-conta",{replace:!0}),h&&(r==null?void 0:r.funcao_user)!=="admin"){o("/nao-autorizado",{replace:!0});return}}else if(!l&&!c){o("/login",{replace:!0});return}if(x&&!f){o("/erro-token",{replace:!0});return}if(y&&!g){o("/erro-token",{replace:!0});return}if(s.pathname==="/produtos-buscados"&&!new URLSearchParams(s.search).get("query")){o("/erro-query",{replace:!0});return}p(!1)}})()},[l,u,s.pathname,s.search,o,r==null?void 0:r.funcao_user,x,f]),!c&&(u||n)?e.jsx("div",{children:"Carregando..."}):l||c||x&&f?t:null},Hs=()=>{const{pathname:t}=O();return m.useEffect(()=>{const r=document.getElementById("root");r?r.scrollTo(0,0):window.scrollTo(0,0)},[t]),null};Z(document.getElementById("root")).render(e.jsxs(m.StrictMode,{children:[e.jsx(oe,{}),e.jsxs(te,{children:[e.jsx(Hs,{}),e.jsx(ys,{}),e.jsx(Te,{children:e.jsx(_s,{children:e.jsx(fs,{})})}),e.jsx($s,{})]})]}));
