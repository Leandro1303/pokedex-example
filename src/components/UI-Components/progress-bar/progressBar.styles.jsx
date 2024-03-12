import styled, { keyframes } from 'styled-components';

const progressBarAnimation = keyframes`
    from {
        width: 0%;
    }
    to {
        width: ${(props) => props.progress}%;
    }
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    max-width: 260px;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;

    label {
        font-weight: 400;
    }
`;

export const ProgressContainer = styled.div`
    width: 260px;
    border: 1px solid grey;
    border-radius: 15px;
`

export const ProgressBar = styled.div`
    width: ${(props) => (props.progress/2.6)}%;
    height: 20px;
    border-radius: 15px;
    background-color: #3498db;
    animation: ${progressBarAnimation} 1s ease;
`;
