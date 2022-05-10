import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src='images/login-logo.svg' />
                </a>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
    padding:5px;

`;

const Nav = styled.nav`
    max-width:1128px;
    margin:auto;
    padding:12px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-contain:space-beteween; 
    flex-wrap:nowrap;

    & > a{
        width: 135px;
        heigth: 35px;
        @media (max-width: 786px) {
            padding: 0 5px;
        }
    }

`;

export default Login;