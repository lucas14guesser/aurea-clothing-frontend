import{d as y,a as l,f as w,j as r,g}from"./GlobalStyles-Dqpp29B9.js";import{j as B,k as I,l as L,N as F,m as J,n as C}from"./CategoriaProdutosStyle-Bi6KNH5F.js";import{T as O,b as R,c as T}from"./index-CJGrLZTX.js";import{U as q}from"./userContext-Hfd7AKwO.js";import{a as h}from"./axios-DnYME9kn.js";import{I as z,P as M,c as D,C as U,B as v}from"./ProdutoStyles-Cz6hDj1C.js";import{f as _,b as V}from"./Functions-BNM27soa.js";import{B as $}from"./HomePageStyles-CJMC4Gvw.js";const G=y.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 1rem;
width: 90%;
align-self: center;
border-left: 1px solid #A87826;
padding: 0 0 0 1rem;
margin: 2rem 10rem;

    @media (max-width: 430px) {
        margin: 2rem;
    }
`,H=y.h1`
font-size: 2rem;
color: #A87826;
margin-top: 1rem;

    @media (max-width: 430px) {
        margin-top: 0;
        font-size: 1.5rem;
    }
`;function ao(){const{user:e}=l.useContext(q),[d,x]=l.useState([]),[n,p]=l.useState({}),[c,f]=l.useState(1),m=5,A=(c-1)*m,E=A+m,j=Array.isArray(d)?d.slice(A,E):[],k=w();l.useEffect(()=>{e&&e.id_user&&h.get(`http://localhost:3001/aurea/lista-amei/${e.id_user}`).then(o=>{x(o.data)}).catch(o=>{console.error('Erro ao buscar a lista "Amei":',o)})},[e]),l.useEffect(()=>{if(e&&e.id_user){const a=(JSON.parse(localStorage.getItem(`carrinho${e.id_user}`))||[]).reduce((t,i)=>(t[i.id_produto]=!0,t),{});p(a)}},[e]);const b=async o=>{try{const a=e.id_user;await h.delete(`http://localhost:3001/aurea/lista-amei/${a}/${o}`);const i=(JSON.parse(localStorage.getItem(`listaAmei_${a}`))||[]).filter(u=>u.id_produto!==o);localStorage.setItem(`listaAmei_${a}`,JSON.stringify(i)),x(u=>u.filter(s=>s.id_produto!==o))}catch(a){console.error('Erro ao remover produto da lista "Amei":',a),alert("Erro ao remover o produto da lista.")}},P=async o=>{if(!(e!=null&&e.id_user)){alert("Você precisa estar logado para adicionar ao carrinho.");return}const a=e.id_user;if(o.qtd_produto===0){alert("Você não pode colocar um produto sem estoque no carrinho.");return}else try{const t=JSON.parse(localStorage.getItem(`carrinho${a}`))||[];if(t.some(s=>s.id_produto===o.id_produto)||(await h.get(`http://localhost:3001/aurea/carrinho/${a}`)).data.some(s=>s.id_produto===o.id_produto))return;await h.post("http://localhost:3001/aurea/carrinho",{id_user:a,id_produto:o.id_produto,qtd_produto_carrinho:1}),t.push(o),localStorage.setItem(`carrinho${a}`,JSON.stringify(t)),p(s=>({...s,[o.id_produto]:!0}))}catch(t){console.error("Erro ao adicionar ao carrinho:",t),alert("Erro ao adicionar o produto no carrinho.")}},S=async o=>{try{await h.delete(`http://localhost:3001/aurea/carrinho/${e.id_user}/${o}`);const t=(JSON.parse(localStorage.getItem(`carrinho${e.id_user}`))||[]).filter(i=>i.id_produto!==o);localStorage.setItem(`carrinho${e.id_user}`,JSON.stringify(t)),p(i=>({...i,[o]:!1}))}catch(a){console.error("Erro ao remover produto do carrinho:",a),alert("Erro ao remover o produto do carrinho.")}},N=o=>{k(`/produto/${o}`)};return r.jsxs(G,{children:[r.jsx(H,{children:'Minha Lista "Amei"'}),r.jsxs(B,{children:[j.length>0?j.map((o,a)=>r.jsxs(I,{onClick:()=>N(o.nome_produto),children:["  ",r.jsx(z,{src:`http://localhost:3001/uploads/${o.img_produto}`,alt:o.nome_produto}),r.jsxs(L,{children:[r.jsx(F,{children:o.nome_produto}),o.categoria_produto==="promocoes"?r.jsxs("div",{children:[r.jsx(M,{children:_(o.preco_produto)}),r.jsx(D,{children:_(o.preco_promocional_produto)})]}):r.jsx(g,{style:{color:"#A87826"},children:_(o.preco_produto)}),r.jsx(g,{style:{fontWeight:"600"},children:V(o.parcela_produto)}),r.jsxs(J,{children:[r.jsx(C,{title:"Remover da lista 'Amei'",onClick:t=>{t.stopPropagation(),b(o.id_produto)},children:r.jsx(O,{})}),r.jsx(C,{title:n[o.id_produto]?"Remover do carrinho":"Adicionar no carrinho",onClick:t=>{t.stopPropagation(),n[o.id_produto]?S(o.id_produto):P(o)},children:n[o.id_produto]?r.jsx(R,{}):r.jsx(T,{})})]}),o.qtd_produto===0?r.jsx($,{style:{background:"#FFF",color:"#A87826"},children:"Avise quando chegar"}):r.jsx($,{title:n[o.id_produto]?"Remover do carrinho":"Adicionar no carrinho",onClick:t=>{t.stopPropagation(),n[o.id_produto]?S(o.id_produto):P(o)},children:n[o.id_produto]?"Remover do carrinho":"Adicionar ao carrinho"})]})]},`${o.id_produto}-${a}`)):r.jsx(g,{children:'Sua lista de "Amei" está vazia!'}),d.length>m&&r.jsxs(U,{children:[r.jsx(v,{disabled:c===1,onClick:()=>f(c-1),children:"Anterior"}),r.jsxs("span",{children:["Página ",c," de ",Math.ceil(d.length/m)]}),r.jsx(v,{disabled:c===Math.ceil(d.length/m),onClick:()=>f(c+1),children:"Próxima"})]})]})]})}export{ao as L};
