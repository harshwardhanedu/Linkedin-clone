import styled from 'styled-components';

const PostModal = (props) => {
    return(
        <Container>
            Post Modal
        </Container>
    )
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
`;

export default PostModal;