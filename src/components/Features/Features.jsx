import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Features = ({feature}) => {
    console.log(feature)
    return (
        <div className='text-2xl flex items-center gap-2'>
            <span><FaArrowAltCircleRight /></span>
            <span className='flex items-center gap-2'>{feature}</span>
        </div>
    );
};

Features.propTypes ={
    feature: PropTypes.array
}
export default Features;