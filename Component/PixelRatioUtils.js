import {
    PixelRatio,
    TouchableWithoutFeedback,

    processColor,
} from 'react-native';
import { PropTypes } from 'react';

//const toPixels = PixelRatio.getPixelSizeForLayoutSize.bind(PixelRatio);
const pix = PixelRatio.get();

//换算 字体，尺寸，行距
function toDips(px) {
  return px*pix/4;
}

export {

    toDips,

};