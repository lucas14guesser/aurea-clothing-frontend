import{d as p,L as ve,j as e,a as t,m as ge,R as ye,T as Y,g as r,k as d}from"./GlobalStyles-Dqpp29B9.js";import{o as v}from"./CategoriaProdutosStyle-Bi6KNH5F.js";import{a as x}from"./axios-DnYME9kn.js";import{I as _e,a as ke}from"./index-CVGnD8mp.js";import{U as be}from"./userContext-D66xfPlX.js";import{R as Z,M as Ce,L as ee,B as De}from"./UserDashboardStyles-BUujLACN.js";import{M as A,a as E,b as w,S as Pe,c as Se,B as m,F as oe}from"./ModalsStyles-CkMaqKjX.js";import{D as we,i as Me,I as g,F as h,L as j}from"./ContaUserStyles-jzYrjlID.js";import{e as ae}from"./index-BHTjUTUx.js";import{b as te,a as se}from"./index-CmN5j4cY.js";import{T as M}from"./FaleConoscoStyles-2l_QY-nO.js";import{f as re,a as Ie}from"./Functions-D5_z5ReH.js";import{S as Ae}from"./SpinnerComponent-D-z1JUIS.js";const Ee=p.div`
display: flex;
flex-direction: column;
margin: 4rem 5rem;

    @media (max-width: 430px) {
        margin: 2rem 1rem;
    }
`,Te=p.div`
display: flex;
flex-direction: row;
gap: 2rem;
padding: 2rem;
justify-content: space-evenly;
align-items: flex-start;
background: #FFFFFF;
margin: 2rem 0;
border: 1px solid #A87826;
border-radius: 16px;
width: 100%;

    @media (max-width: 430px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: flex-start;
        margin: 1rem 0;
        width: 90%;
    }
`,Fe=p.h1`
font-size: 2rem;
color: #A87826;
margin-top: 4rem;

    @media (max-width: 430px) {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`,f=p.div`
display: flex;
flex-direction: column;
gap: 1rem;
`,Le=p.div`
display: flex;
width: 20%;
flex-direction: column;
gap: 1rem;

    @media (max-width: 430px) {
        width: 100%;
    }
`,I=p(ve)`
text-decoration: none;
color: #A87826;
    &:hover {
        transition: 0.3s;
        color: #C2954A;
    }
`,Re=p.img`
width: 5rem;
height: 5rem;

    @media (max-width: 430px) {
        width: 5rem;
        height: 5rem;
    }
`;function Be({children:n}){return e.jsx(A,{children:e.jsx(E,{onClick:c=>c.stopPropagation(),style:{width:"30rem"},children:n})})}function Oe({children:n}){return e.jsx(A,{children:e.jsx(E,{onClick:c=>c.stopPropagation(),style:{width:"30rem"},children:n})})}function Ue({children:n}){return e.jsx(A,{children:e.jsx(E,{onClick:c=>c.stopPropagation(),style:{width:"30rem"},children:n})})}function Ze(){const{user:n,logout:c,userEmail:y}=t.useContext(be),{id_pedido:s}=ge(),[C,ie]=t.useState(!1),[_,k]=t.useState(!1),[T,F]=t.useState(""),[L,R]=t.useState(""),[B,O]=t.useState(!1),[U,ne]=t.useState(!1),[N,de]=t.useState(!1),[l,le]=t.useState(null),[$,z]=t.useState(0),[q,G]=t.useState(""),[H,J]=t.useState(""),[i,ce]=t.useState([]),[b,ue]=t.useState([]),[he,pe]=t.useState([]),[K,Q]=t.useState(!0),V=()=>{ie(!C)},W=()=>{O(!B)},D=()=>{ne(!U)},P=()=>{de(!N)},xe=async o=>{o.preventDefault(),k(!0);const a={id_pedido:s,email_user:y,solicitacao_troca:T};try{(await x.post("https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/solicitacao-troca",a)).status===200?(alert("E-mail enviado com sucesso!"),F("")):alert("Não foi possível enviar o e-mail.")}catch{alert("Erro ao enviar e-mail.")}finally{k(!1)}},me=async o=>{o.preventDefault(),k(!0);const a={id_pedido:s,email_user:y,solicitacao_devolucao:L};try{(await x.post("https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/solicitacao-devolucao",a)).status===200?(alert("E-mail enviado com sucesso!"),R("")):alert("Não foi possível enviar o e-mail.")}catch{alert("Erro ao enviar e-mail.")}finally{k(!1)}},S=he.map(o=>{const a=b.find(u=>u.id_produto===o.id_produto);return{...o,nome_produto:a?a.nome_produto:"Produto desconhecido"}}),je=o=>{z(o)},fe=async(o,a)=>{o.preventDefault();const u={nivel_avaliacao:$,descricao_avaliacao:q,data_avaliacao:new Date().toISOString().split("T")[0],titulo_avaliacao:H,id_user:n.id_user,id_produto:a};try{(await x.post("https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedido/avaliar",u)).data.result?(alert("Produto avaliado com sucesso!"),O(!1),z(0),J(""),G("")):alert("Não foi possível avaliar o produto.")}catch(X){console.error("Erro ao avaliar produto.",X.message)}};return t.useEffect(()=>{s&&(async()=>{try{const a=await x.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/pedido/${s}`);ce(a.data.result)}catch(a){console.error("Erro ao buscar dados do pedido.",a)}finally{Q(!1)}})()},[s]),t.useEffect(()=>{s&&(async()=>{try{const a=await x.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/itens-pedido/${s}`);pe(a.data.result)}catch(a){console.error("Erro ao buscar dados do pedido.",a)}finally{Q(!1)}})()},[s]),t.useEffect(()=>{s&&(async()=>{try{const a=await x.get(`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/aurea/produto/pedido/${s}`);ue(a.data.result)}catch(a){console.error("Erro ao buscar produtos.",a)}})()},[s]),K?e.jsx(Ae,{}):i?e.jsxs(ye.Fragment,{children:[C?e.jsxs(Z,{children:[e.jsx(_e,{style:{fontSize:"2rem",color:"#A87826",cursor:"pointer"},onClick:V}),e.jsxs(Y,{children:["Boas-vindas, ",n.nome_user]})]}):e.jsxs(Z,{children:[e.jsx(ke,{style:{fontSize:"2rem",color:"#A87826",cursor:"pointer"},onClick:V}),e.jsxs(Y,{children:["Boas-vindas, ",n.nome_user]})]}),C&&e.jsxs(Ce,{children:[e.jsx(ee,{to:"/minha-conta",children:"Minha Conta"}),e.jsx(ee,{to:"/meus-pedidos",children:"Meus Pedidos"}),e.jsx(De,{onClick:c,children:"Sair"})]}),e.jsxs(Ee,{children:[e.jsxs(Fe,{children:["Detalhes do pedido #",i.id_pedido]}),e.jsxs(Te,{children:[b&&b.length>0?b.map((o,a)=>e.jsxs(f,{children:[e.jsx(Re,{src:`https://test-aureaclothing-backend-466bc65ebfec.herokuapp.com/uploads/${o.img_produto}`,alt:o.nome_produto}),e.jsx(r,{style:{color:"#A87826"},children:o.nome_produto}),e.jsxs(r,{children:["Cor: ",o.cor_produto]}),e.jsxs(r,{children:["Tamanho: ",o.tamanho_produto]}),o.preco_promocional_produto?e.jsxs(r,{children:["Preço: ",re(o.preco_promocional_produto)]}):e.jsxs(r,{children:["Preço: ",re(o.preco_produto)]})]},a)):K?e.jsx(r,{children:"Carregando produtos..."}):e.jsx(r,{children:"Dados do produto não disponíveis"}),e.jsxs(f,{children:[e.jsx(d,{children:"Data do Pedido"}),e.jsx(r,{children:Ie(i.data_pedido)})]}),e.jsxs(Le,{children:[e.jsx(d,{children:"Endereço"}),e.jsx(r,{children:i.endereco_pedido})]}),e.jsxs(f,{children:[e.jsx(d,{children:"Status do Pedido"}),e.jsx(r,{children:i.status_pedido})]}),e.jsxs(f,{children:[e.jsx(d,{children:"Rastreio"}),e.jsxs(r,{children:["Opção frete: ",i.opcao_frete_pedido]}),e.jsxs(r,{children:["Código de rastreio: ",i.cd_rastreio_frete_pedido]}),i.opcao_frete_pedido==="sedex"?e.jsx(I,{to:"https://rastreamento.correios.com.br/app/index.php",target:"_blank",style:{textDecoration:"underline"},children:"Rastrear pedido"}):i.opcao_frete_pedido==="jadlog"?e.jsx(I,{to:"https://www.jadlog.com.br/jadlog/home",target:"_blank",style:{textDecoration:"underline"},children:"Rastrear pedido"}):e.jsx(I,{to:"https://disktenha.com.br/",target:"_blank",style:{textDecoration:"underline"},children:"Rastrear pedido"})]}),i.status_pedido==="encerrado"?e.jsxs(f,{children:[e.jsx(d,{children:"Funções"}),e.jsx(v,{onClick:W,children:"Avaliar Pedido"}),e.jsx(v,{onClick:D,children:"Solicitar Troca"}),e.jsx(v,{onClick:P,children:"Solicitar Devolução"})]}):e.jsxs(f,{children:[e.jsx(d,{children:"Funções"}),e.jsx(v,{onClick:D,children:"Solicitar Troca"}),e.jsx(v,{onClick:P,children:"Solicitar Devolução"})]})]})]}),B&&e.jsxs(Ue,{children:[e.jsx(we,{children:S==null?void 0:S.map(o=>e.jsx(Me,{onClick:()=>{le(o)},style:{background:(l==null?void 0:l.id_produto)===o.id_produto?"#a87826":"#ccc"},children:o.nome_produto},o.id_produto))}),l&&e.jsxs(w,{children:[e.jsx(d,{children:"Avaliar Produto"}),e.jsx("p",{children:l==null?void 0:l.nome_produto}),e.jsx(Pe,{children:[1,2,3,4,5].map(o=>e.jsx(Se,{$filled:o<=$,onClick:()=>je(o),children:"★"},o))}),e.jsx(g,{type:"text",placeholder:"Título da avaliação",value:H,onChange:o=>J(o.target.value)}),e.jsx(M,{type:"text",placeholder:"Nos diga o que achou deste produto...",value:q,onChange:o=>G(o.target.value)}),e.jsxs(h,{children:[e.jsx(m,{type:"submit",onClick:o=>fe(o,l.id_produto),children:"Avaliar"}),e.jsx(m,{type:"button",onClick:W,children:"Fechar"})]})]})]}),U&&e.jsx(Be,{children:e.jsxs(w,{children:[e.jsx(d,{children:"Solicitar Troca"}),e.jsxs(h,{children:[e.jsx(j,{children:e.jsx(te,{})}),e.jsx(g,{type:"text",value:s,readOnly:!0})," "]}),e.jsxs(h,{children:[e.jsx(j,{children:e.jsx(se,{})}),e.jsx(g,{type:"email",value:y,readOnly:!0})," "]}),e.jsxs(h,{style:{alignItems:"flex-start"},children:[e.jsx(j,{children:e.jsx(ae,{})}),e.jsx(M,{type:"text",placeholder:"Nos diga porque você deseja trocar seu produto...",value:T,onChange:o=>F(o.target.value)})," "]}),e.jsxs(h,{children:[e.jsx(m,{type:"submit",onClick:xe,disabled:_,children:_?"Enviando...":"Enviar"}),e.jsx(m,{type:"button",onClick:D,children:"Fechar"})]})]})}),N&&e.jsx(Oe,{children:e.jsxs(w,{children:[e.jsx(d,{children:"Solicitar Devolução"}),e.jsxs(h,{children:[e.jsx(j,{children:e.jsx(te,{})}),e.jsx(g,{type:"text",value:s,readOnly:!0})," "]}),e.jsxs(h,{children:[e.jsx(j,{children:e.jsx(se,{})}),e.jsx(g,{type:"email",value:y,readOnly:!0})," "]}),e.jsxs(oe,{children:[e.jsx(j,{children:e.jsx(ae,{})}),e.jsx(M,{type:"text",placeholder:"Nos diga porque você deseja devolver seu produto...",value:L,onChange:o=>R(o.target.value)})," "]}),e.jsxs(oe,{style:{alignItems:"center"},children:[e.jsx(m,{type:"submit",onClick:me,disabled:_,children:_?"Enviando...":"Enviar"}),e.jsx(m,{type:"button",onClick:P,children:"Fechar"})]})]})})]}):e.jsx("p",{children:"Pedido não encontrado"})}export{Ze as D};
