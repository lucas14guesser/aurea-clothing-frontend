import{d as i,L as C,a as s,j as e,R as f,T as j,k as w,g as n}from"./GlobalStyles-Dqpp29B9.js";import{U as v}from"./userContext-Hfd7AKwO.js";import{a as z}from"./axios-DnYME9kn.js";import{R as P,M as D,L as I,B}from"./UserDashboardStyles-BUujLACN.js";import{I as S,a as U}from"./index-CVGnD8mp.js";import{a as E}from"./Functions-BNM27soa.js";import{T}from"./PedidoStyles-DLKgW4TH.js";import{C as L,B as _}from"./ProdutoStyles-Cz6hDj1C.js";const R=i.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 4rem;
margin: 4rem;

    @media (max-width: 430px) {
        margin: 2rem;
        gap: 2rem;
    }
`;i.h1`
font-size: 1.5rem;

`;i.div`
`;i.p`
font-size: 1rem;
text-align: center
`;const F=i.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;

    @media (max-width: 430px) {
        gap: 1rem;
    }
`,V=i.div`
 margin: 0;
 align-itens: center;  
 border: 1px solid rgba(168, 120, 38, 0.4);
 width: 30rem;

    @media (max-width: 430px) {
        width: 100%;
    }
`,$=i.div`
background-color: white; 
color: black; 
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(168, 120, 38, 0.4);

    @media (max-width: 430px) {
        padding: 7px;
    }
`,G=i.p`
background-color:#A87826; 
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
width: 8rem;
text-align: center;

    @media (max-width: 430px) {
        padding: 7px;
        font-size: .7rem;
        width: 6rem;
    }
`,N=i.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: flex-start;
padding: 1rem;

    @media (max-width: 430px) {
        gap: 1rem;
        padding: .5rem;
        align-items: flex-start;
    }

`;i.img`
width: 10rem;
height: 10rem;
opacity: 90%;

    @media (max-width: 430px) {
        width: 7rem;
        height: 7rem;
    }
`;i.div`
display: flex;
flex-direction: column;
padding-top: 1rem;
gap: 0.5rem;

    @media (max-width: 430px) {
        padding-top: 0;
    }
`;i(C)`
font-weigth: 600;
text-transform: none;
color: #A87826;
font-weight: 600;

    @media (max-width: 430px) {
        font-size: .9rem;
    }
`;i.p`
font-weight: 300;
`;i.p`
font-weight: 500;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`;const O=i(C)`
font-weigth: 600;
text-transform: none;
color:#A87826;
font-weight: 600;

    @media (max-width: 430px) {
        margin-left: 0;
        font-size: .7rem;
    }
`;function Z(){const{user:a,logout:b}=s.useContext(v),[l,y]=s.useState([]),[d,k]=s.useState(!1),c=3,[o,M]=s.useState(1);s.useEffect(()=>{(async()=>{try{const u=(await z.get(`http://localhost:3001/aurea/pedido/user/${a.id_user}`)).data.result;Array.isArray(u)&&y(u)}catch(r){console.error("Erro ao buscar pedidos:",r)}})()},[a.id_user]);const m=()=>{k(!d)},x=(o-1)*c,A=x+c,p=l.slice(x,A),h=Math.ceil(l.length/c),g=t=>{M(t)};return e.jsxs(f.Fragment,{children:[d?e.jsxs(P,{children:[e.jsx(S,{style:{fontSize:"2rem",color:"#A87826",cursor:"pointer"},onClick:m}),e.jsxs(j,{children:["Boas-vindas, ",a.nome_user]})]}):e.jsxs(P,{children:[e.jsx(U,{style:{fontSize:"2rem",color:"#A87826",cursor:"pointer"},onClick:m}),e.jsxs(j,{children:["Boas-vindas, ",a.nome_user]})]}),d&&e.jsxs(D,{children:[e.jsx(I,{to:"/minha-conta",children:"Minha Conta"}),e.jsx(B,{onClick:b,children:"Sair"})]}),e.jsxs(R,{children:[e.jsx(T,{children:"Meus Pedidos"}),e.jsx(F,{children:p.length>0?p.map(t=>e.jsxs(V,{children:[e.jsxs($,{children:[E(t.data_pedido),e.jsx(G,{children:t.status_pedido})]}),e.jsxs(N,{children:[e.jsx(w,{children:"Dados: "}),e.jsxs(n,{children:["Endereço: ",t.endereco_pedido]}),e.jsxs(n,{children:["Nº: ",t.num_endereco_pedido]}),e.jsxs(n,{children:["Frete: ",t.opcao_frete_pedido]}),e.jsxs(n,{children:["Código rastreio: ",t.cd_rastreio_frete_pedido]}),e.jsx(w,{children:"Produtos: "}),t.itens.map(r=>e.jsx(f.Fragment,{children:e.jsx(n,{children:r.nome_produto})},r.nome_produto)),e.jsx(O,{to:`/detalhes-pedido/${t.id_pedido}`,children:e.jsx("p",{children:"Ver detalhes do pedido"})})]})]},t.id_pedido)):e.jsx("p",{children:"Você não possui pedidos."})})]}),e.jsxs(L,{children:[e.jsx(_,{disabled:o===1,onClick:()=>g(o-1),children:"Anterior"}),e.jsxs("span",{children:["Página ",o," de ",h]}),e.jsx(_,{disabled:o===h,onClick:()=>g(o+1),children:"Próxima"})]})]})}export{Z as P};
