import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main.";
import Rightside from "./Rightside";

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented pros in record time with Upwork and keep business moving.</p>
            </Section>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    );
};

const Container = styled.div`
    padding: 2px;
    max-width: 100%;
`;

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`;

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 700;
        }
    }
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
        
    }

    `;

const Layout = styled.div`
    display: grid;
    grid-template-columns: "leftside main rightside";
    // Content column sepration below hiring a hurry 
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr); // Main side is aligned from this code
    column-gap: 25px;
    row-gap: 25px;
   //  grid-template-rows: auto;
    margin: 25px;

    @media ( max-width: 768px){
        display: flex; //avoid overlapping on mobile devices
        flex-direction: column; 
        padding : 0 5px;
    }
`;


export default Home;