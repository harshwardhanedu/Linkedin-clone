import styled from "styled-components";

const Rightside = (props) => {
    return (
    <Container>
        <FollowCard>Rightside</FollowCard>
    </Container>
    );
};

const Container = styled.div`
    grid-area: auto; //Changed for position
    
`;

const FollowCard = styled.div``;

export default Rightside;