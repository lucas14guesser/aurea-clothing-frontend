import{d as t,L as _,a as s,j as e,R as f,T as j,k as w,g as n}from"./GlobalStyles-Dqpp29B9.js";import{U as v}from"./userContext-D66xfPlX.js";import{a as z}from"./axios-DnYME9kn.js";import{R as P,M as D,L as I,B}from"./UserDashboardStyles-BUujLACN.js";import{I as S,a as U}from"./index-CVGnD8mp.js";import{a as E}from"./Functions-C5TbUWjh.js";import{T}from"./PedidoStyles-DLKgW4TH.js";import{C as L,B as b}from"./ProdutoStyles-Cz6hDj1C.js";const R=t.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 4rem;
margin: 4rem;

    @media (max-width: 430px) {
        margin: 2rem;
        gap: 2rem;
    }
`;t.h1`
font-size: 1.5rem;

`;t.div`
`;t.p`
font-size: 1rem;
text-align: center
`;const F=t.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;

    @media (max-width: 430px) {
        gap: 1rem;
    }
`,V=t.div`
 margin: 0;
 align-itens: center;  
 border: 1px solid rgba(168, 120, 38, 0.4);
 width: 30rem;

    @media (max-width: 430px) {
        width: 100%;
    }
`,$=t.div`
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
`,G=t.p`
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
`,N=t.div`
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

`;t.img`
width: 10rem;
height: 10rem;
opacity: 90%;

    @media (max-width: 430px) {
        width: 7rem;
        height: 7rem;
    }
`;t.div`
display: flex;
flex-direction: column;
padding-top: 1rem;
gap: 0.5rem;

    @media (max-width: 430px) {
        padding-top: 0;
    }
`;t(_)`
font-weigth: 600;
text-transform: none;
color: #A87826;
font-weight: 600;

    @media (max-width: 430px) {
        font-size: .9rem;
    }
`;t.p`
font-weight: 300;
`;t.p`
font-weight: 500;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`;const O=t(_)`
font-weigth: 600;
text-transform: none;
color:#A87826;
font-weight: 600;

    @media (max-width: 430px) {
        margin-left: 0;
        font-size: .7rem;
    }
`;function Z(){const{user:a,logout:C}=s.useContext(v),[l,k]=s.useState([]),[d,y]=s.useState(!1),c=3,[r,M]=s.useState(1);s.useEffect(()=>{(async()=>{try{const u=(await z.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedido/user/${a.id_user}`)).data.result;Array.isArray(u)&&k(u)}catch(o){console.error("Erro ao buscar pedidos:",o)}})()},[a.id_user]);const m=()=>{y(!d)},x=(r-1)*c,A=x+c,p=l.slice(x,A),h=Math.ceil(l.length/c),g=i=>{M(i)};return e.jsxs(f.Fragment,{children:[d?e.jsxs(P,{children:[e.jsx(S,{style:{fontSize:"2rem",color:"#A87826",cursor:"pointer"},onClick:m}),e.jsxs(j,{children:["Boas-vindas, ",a.nome_user]})]}):e.jsxs(P,{children:[e.jsx(U,{style:{fontSize:"2rem",color:"#A87826",cursor:"pointer"},onClick:m}),e.jsxs(j,{children:["Boas-vindas, ",a.nome_user]})]}),d&&e.jsxs(D,{children:[e.jsx(I,{to:"/minha-conta",children:"Minha Conta"}),e.jsx(B,{onClick:C,children:"Sair"})]}),e.jsxs(R,{children:[e.jsx(T,{children:"Meus Pedidos"}),e.jsx(F,{children:p.length>0?p.map(i=>e.jsxs(V,{children:[e.jsxs($,{children:[E(i.data_pedido),e.jsx(G,{children:i.status_pedido})]}),e.jsxs(N,{children:[e.jsx(w,{children:"Dados: "}),e.jsxs(n,{children:["Endereço: ",i.endereco_pedido]}),e.jsxs(n,{children:["Nº: ",i.num_endereco_pedido]}),e.jsxs(n,{children:["Frete: ",i.opcao_frete_pedido]}),e.jsxs(n,{children:["Código rastreio: ",i.cd_rastreio_frete_pedido]}),e.jsx(w,{children:"Produtos: "}),i.itens.map(o=>e.jsx(f.Fragment,{children:e.jsx(n,{children:o.nome_produto})},o.nome_produto)),e.jsx(O,{to:`/detalhes-pedido/${i.id_pedido}`,children:e.jsx("p",{children:"Ver detalhes do pedido"})})]})]},i.id_pedido)):e.jsx("p",{children:"Você não possui pedidos."})})]}),e.jsxs(L,{children:[e.jsx(b,{disabled:r===1,onClick:()=>g(r-1),children:"Anterior"}),e.jsxs("span",{children:["Página ",r," de ",h]}),e.jsx(b,{disabled:r===h,onClick:()=>g(r+1),children:"Próxima"})]})]})}export{Z as P};
