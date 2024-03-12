import PropTypes from 'prop-types'
import {
    ProgressBar,
    ProgressContainer,
    ProgressBarContainer,
} from './progressBar.styles';

const ProgressBarComponent = ({ label, value }) => {
    const progressValue = Math.min(100, Math.max(0, value));
  
    return (
        <ProgressBarContainer>
            <label>{label}</label>
            <ProgressContainer>
                <ProgressBar progress={progressValue} />
            </ProgressContainer>
        </ProgressBarContainer>
    );
};

ProgressBarComponent.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}
  
export default ProgressBarComponent;