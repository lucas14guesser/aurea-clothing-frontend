import{d as i}from"./GlobalStyles-Dqpp29B9.js";const t=i.div`
display: flex;
flex-direction: column;
align-items: center;
background: #FFF;
margin: 2rem;
width: 100%;

    @media (max-width: 360px) {
      margin: 1rem 0;
      padding: 0 .5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      margin: 1rem 0;
      padding: 0 .5rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    margin: 1rem 0;
  }
`,d=i.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
width: 100%;
padding: 1rem;

    @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    flex-direction: column;
    align-items: center;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`,a=i.div`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;
`,n=i.div`
display: flex;
flex-direction: column;
padding: .7rem;
gap: 1rem;
border: 1px solid #A87826;
border-radius: 8px;
background: #FFF;
margin: 1rem 2rem;
text-align: center;
width: 85%;

    @media (max-width: 360px) {
        width: auto;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
    }
`,r=i.div`
display: flex;
flex-direction: column;
padding: .7rem;
gap: 1rem;
border: 1px solid #A87826;
border-radius: 8px;
background: #FFF;
margin: 1rem 2rem;
text-align: center;
width: 85%;

    @media (max-width: 360px) {
        width: auto;
        margin: 1rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
        width: auto;
        margin: 1rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
        width: auto;
        margin: 1rem;
    }
`,m=i.div`
display: flex;
flex-direction: row;
gap: .5rem;
align-items: center;
`,o=i.div`
font-size: 1rem;
color: #A87826;
`,s=i.div`
  position: relative;
  display: inline-block;

  label {
    background: #A87826;
    color: #fff;
    padding: .5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #8a6620;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`,p=i.input`
padding: .5rem;
width: 20rem;
border: 1px solid #A87826;
border-radius: 8px;
    &:focus {
        outline-color: #A87826;
        outline-width: thin;
        font-family: "Poppins", sans-serif;
    }
    &::placeholder {
        color: #000000;
        opacity: 0.5;
        font-family: "Poppins", sans-serif;
    }

    @media (max-width: 360px) {
    width: 15rem;
    font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 15rem;
    font-size: .7rem;
    }

  @media(min-width: 430px) and (max-width: 520px) {
    width: 15rem;
    font-size: .7rem;
  }
`,x=i.select`
padding: .5rem;
width: 21.1rem;
border: 1px solid #A87826;
border-radius: 8px;
    &:focus {
        outline-color: #A87826;
        outline-width: thin;
        font-family: "Poppins", sans-serif;
    }
    &::placeholder {
        color: #000000;
        opacity: 0.5;
        font-family: "Poppins", sans-serif;
    }

    @media (max-width: 360px) {
      width: 16.1rem;
      font-size: .7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      width: 16.1rem;
      font-size: .7rem;
    }

    @media(min-width: 430px) and (max-width: 520px) {
      width: 16.1rem;
      font-size: .7rem;
    }
`,h=i.button`
width: 11rem;
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

    @media (max-width: 360px) {
      font-size: .7rem;
      width: 7.5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
      font-size: .7rem;
      width: 7.5rem;
    }

    @media (min-width: 430px) and (max-width: 520px) {
      font-size: .7rem;
      width: 7.5rem;
    }
`,l=i.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
justify-content: center;
`,w=i.img`
width: 7rem;
height: 7rem;

    @media (max-width: 360px) {
    width: 1.5rem;
    height: 1.5rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    width: 1.5rem;
    height: 1.5rem;
    }

  @media (min-width: 430px) and (max-width: 520px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`,c=i.div`
  display: flex;
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    background-color: #FFFFFF;
    color: #A87826;
    margin: 4rem 0;
  }

  thead {
    background: #A87826;
    color: #FFFFFF;
  }


  th, td {
    padding: 12px 15px;
    border: 1px solid #A87826;
  }

  th {
    text-transform: uppercase;
  }

  td {
    color: #000000;
  }

    @media (max-width: 360px) {
    table {
      margin: 2rem 0;
      width: auto;
    }
    
    th, td {
      padding: 2px;
      font-size: .33rem;
    }
    }

    @media (min-width: 361px) and (max-width: 429px) {
    table {
      margin: 2rem 0;
      width: auto;
    }
    
    th, td {
      padding: 2px;
      font-size: .33rem;
    }
    }

  @media (min-width: 430px) and (max-width: 520px) {
    table {
      margin: 2rem 0;
      width: auto;
    }
    
    th, td {
      padding: 2px;
      font-size: .43rem;
    }
  }
`,g=i.p`
  font-size: .7rem;
  color: #A87826;
  max-width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
`,f=i.img`
width: 100%;
min-height: 20rem;
max-height: 20rem;

    @media (max-width: 360px) {
    min-height: 7rem;
    max-height: 7rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
    min-height: 7rem;
    max-height: 7rem;
    }

	@media(min-width: 430px) and (max-width: 520px) {
    min-height: 10rem;
    max-height: 10rem;
	}
`,u=i.p`
font-size: 1rem;
font-family: "Poppins", sans-serif;

    @media (max-width: 360px) {
		font-size: .4rem;
    }

    @media (min-width: 361px) and (max-width: 429px) {
		font-size: .4rem;
    }

	@media(min-width: 430px) and (max-width: 520px) {
		font-size: .4rem;
	}
`;export{h as B,t as C,g as F,s as I,m as L,l as S,d as a,a as b,n as c,o as d,p as e,c as f,f as g,r as h,x as i,w as j,u as k};
