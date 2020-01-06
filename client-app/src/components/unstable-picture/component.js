import React, {Component} from 'react';
import { MovingPicture } from "particalizor-3000";
import unstableImageSource from '../../assets/instability.jpg';

import './component.css';

class UnstablePicture extends Component {
    render() {
        return (
            <MovingPicture imageSource={unstableImageSource}/>
        )
    }
}

export default UnstablePicture;