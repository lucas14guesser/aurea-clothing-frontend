import React, { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { UserContext } from '../../../router/userContext';
import axios from 'axios';
import { ContainerDashBoard, FormRedefinir } from '../../../styles/UserDashboardStyles';
import { StyledError, StyledSuccess, Titulo } from '../../../styles/GlobalStyles';
import { FlexRowLabelInputLoginCadastro, InputLoginCadastro, LabelLoginCadastro, LinkForgotPass } from '../../../styles/ContaUserStyles';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ButtonEsqueciMinhaSenha, FlexRowLabelInputEsqueciMinhaSenha } from '../../../styles/EsqueciMinhaSenhaStyles';

function EsqueciMinhaSenha() {
    const { user, logout } = useContext(UserContext);
    const [senhaRed, setSenhaRed] = useState('');
    const [senhaConfirmRed, setSenhaConfirmRed] = useState('');
    const [successRed, setSuccessRed] = useState('');
    const [errorRed, setErrorRed] = useState('');
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [loading, setLoading] = useState(false);


    const handleSenhaUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (senhaRed !== senhaConfirmRed) {
            setErrorRed('As senhas não coincidem.');
            setSuccessRed('');
            return;
        }

        try {
            const resp = await axios.put(`http://localhost:3001/aurea/usuario/senha/redefinir-senha`, {
                token, // Envia o token de redefinição de senha
                senha_user: senhaRed
            });

            if (resp.data.error) {
                setErrorRed(resp.data.error);
                setSuccessRed('');
            } else {
                setSuccessRed('Senha redefinida com sucesso.');
                setErrorRed('');
                setTimeout(() => logout(), 1500); // Deslogar o usuário após a redefinição
            }
        } catch (error) {
            setErrorRed('Erro ao redefinir senha. Tente novamente.');
            setSuccessRed('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <React.Fragment>
            <ContainerDashBoard>
                <FormRedefinir onSubmit={handleSenhaUpdate}>
                    <Titulo>Redefinir Senha</Titulo>
                    <FlexRowLabelInputLoginCadastro>
                        <LabelLoginCadastro htmlFor='senha-red'>
                            <RiLockPasswordLine />
                        </LabelLoginCadastro>
                        <InputLoginCadastro
                            type='password'
                            placeholder='Nova senha'
                            name='senha-red'
                            required
                            value={senhaRed}
                            onChange={(e) => setSenhaRed(e.target.value)}
                        />
                    </FlexRowLabelInputLoginCadastro>

                    <FlexRowLabelInputLoginCadastro>
                        <LabelLoginCadastro htmlFor='senha-conf-red'>
                            <RiLockPasswordLine />
                        </LabelLoginCadastro>
                        <InputLoginCadastro
                            type='password'
                            placeholder='Confirmar nova senha'
                            name='senha-conf-red'
                            required
                            value={senhaConfirmRed}
                            onChange={(e) => setSenhaConfirmRed(e.target.value)}
                        />
                    </FlexRowLabelInputLoginCadastro>

                    {successRed && <StyledSuccess>{successRed}</StyledSuccess>}
                    {errorRed && <StyledError>{errorRed}</StyledError>}
                    <FlexRowLabelInputEsqueciMinhaSenha>
                        <LinkForgotPass to='/minha-conta'>Voltar</LinkForgotPass>
                        <ButtonEsqueciMinhaSenha type='submit' disabled={loading}>
                            {loading ? 'Redefinindo...' : 'Redefinir'}
                        </ButtonEsqueciMinhaSenha>
                    </FlexRowLabelInputEsqueciMinhaSenha>
                </FormRedefinir>
            </ContainerDashBoard>
        </React.Fragment>
    )
}

export default EsqueciMinhaSenha