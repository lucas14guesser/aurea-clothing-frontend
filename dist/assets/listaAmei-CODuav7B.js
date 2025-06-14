import{d as v,a as d,f as w,j as o,g}from"./GlobalStyles-Dqpp29B9.js";import{j as B,k as I,l as L,N as F,m as J,n as S}from"./CategoriaProdutosStyle-Bi6KNH5F.js";import{T as O,b as R,c as T}from"./index-CJGrLZTX.js";import{U as q}from"./userContext-D66xfPlX.js";import{a as u}from"./axios-DnYME9kn.js";import{I as z,P as M,c as D,C as U,B as C}from"./ProdutoStyles-CJ63-lzv.js";import{f as _,b as V}from"./Functions-Db1ipCHc.js";import{B as k}from"./HomePageStyles-CJMC4Gvw.js";const G=v.div`
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
`,H=v.h1`
font-size: 2rem;
color: #A87826;
margin-top: 1rem;

    @media (max-width: 430px) {
        margin-top: 0;
        font-size: 1.5rem;
    }
`;function ar(){const{user:t}=d.useContext(q),[l,f]=d.useState([]),[n,p]=d.useState({}),[c,x]=d.useState(1),m=5,A=(c-1)*m,y=A+m,j=Array.isArray(l)?l.slice(A,y):[],$=w();d.useEffect(()=>{t&&t.id_user&&u.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/lista-amei/${t.id_user}`).then(r=>{f(r.data)}).catch(r=>{console.error('Erro ao buscar a lista "Amei":',r)})},[t]),d.useEffect(()=>{if(t&&t.id_user){const a=(JSON.parse(localStorage.getItem(`carrinho${t.id_user}`))||[]).reduce((e,i)=>(e[i.id_produto]=!0,e),{});p(a)}},[t]);const E=async r=>{try{const a=t.id_user;await u.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/lista-amei/${a}/${r}`);const i=(JSON.parse(localStorage.getItem(`listaAmei_${a}`))||[]).filter(h=>h.id_produto!==r);localStorage.setItem(`listaAmei_${a}`,JSON.stringify(i)),f(h=>h.filter(s=>s.id_produto!==r))}catch(a){console.error('Erro ao remover produto da lista "Amei":',a),alert("Erro ao remover o produto da lista.")}},b=async r=>{if(!(t!=null&&t.id_user)){alert("Você precisa estar logado para adicionar ao carrinho.");return}const a=t.id_user;if(r.qtd_produto===0){alert("Você não pode colocar um produto sem estoque no carrinho.");return}else try{const e=JSON.parse(localStorage.getItem(`carrinho${a}`))||[];if(e.some(s=>s.id_produto===r.id_produto)||(await u.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/carrinho/${a}`)).data.some(s=>s.id_produto===r.id_produto))return;await u.post("https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/carrinho",{id_user:a,id_produto:r.id_produto,qtd_produto_carrinho:1}),e.push(r),localStorage.setItem(`carrinho${a}`,JSON.stringify(e)),p(s=>({...s,[r.id_produto]:!0}))}catch(e){console.error("Erro ao adicionar ao carrinho:",e),alert("Erro ao adicionar o produto no carrinho.")}},P=async r=>{try{await u.delete(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/carrinho/${t.id_user}/${r}`);const e=(JSON.parse(localStorage.getItem(`carrinho${t.id_user}`))||[]).filter(i=>i.id_produto!==r);localStorage.setItem(`carrinho${t.id_user}`,JSON.stringify(e)),p(i=>({...i,[r]:!1}))}catch(a){console.error("Erro ao remover produto do carrinho:",a),alert("Erro ao remover o produto do carrinho.")}},N=r=>{$(`/produto/${r}`)};return o.jsxs(G,{children:[o.jsx(H,{children:'Minha Lista "Amei"'}),o.jsxs(B,{children:[j.length>0?j.map((r,a)=>o.jsxs(I,{onClick:()=>N(r.nome_produto),children:["  ",o.jsx(z,{src:r.img_produto,alt:r.nome_produto}),o.jsxs(L,{children:[o.jsx(F,{children:r.nome_produto}),r.categoria_produto==="promocoes"?o.jsxs("div",{children:[o.jsx(M,{children:_(r.preco_produto)}),o.jsx(D,{children:_(r.preco_promocional_produto)})]}):o.jsx(g,{style:{color:"#A87826"},children:_(r.preco_produto)}),o.jsx(g,{style:{fontWeight:"600"},children:V(r.parcela_produto)}),o.jsxs(J,{children:[o.jsx(S,{title:"Remover da lista 'Amei'",onClick:e=>{e.stopPropagation(),E(r.id_produto)},children:o.jsx(O,{})}),o.jsx(S,{title:n[r.id_produto]?"Remover do carrinho":"Adicionar no carrinho",onClick:e=>{e.stopPropagation(),n[r.id_produto]?P(r.id_produto):b(r)},children:n[r.id_produto]?o.jsx(R,{}):o.jsx(T,{})})]}),r.qtd_produto===0?o.jsx(k,{style:{background:"#FFF",color:"#A87826"},children:"Avise quando chegar"}):o.jsx(k,{title:n[r.id_produto]?"Remover do carrinho":"Adicionar no carrinho",onClick:e=>{e.stopPropagation(),n[r.id_produto]?P(r.id_produto):b(r)},children:n[r.id_produto]?"Remover do carrinho":"Adicionar ao carrinho"})]})]},`${r.id_produto}-${a}`)):o.jsx(g,{children:'Sua lista de "Amei" está vazia!'}),l.length>m&&o.jsxs(U,{children:[o.jsx(C,{disabled:c===1,onClick:()=>x(c-1),children:"Anterior"}),o.jsxs("span",{children:["Página ",c," de ",Math.ceil(l.length/m)]}),o.jsx(C,{disabled:c===Math.ceil(l.length/m),onClick:()=>x(c+1),children:"Próxima"})]})]})]})}export{ar as L};
