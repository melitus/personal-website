import React from 'react';
import cssModules from 'react-css-modules';

import styles from './GoogleMap.scss';

const GoogleMapAddress = ({ width, height }) => (
  <div className="mapouter">
    <iframe
      width={width}
      height={height}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=252 Herbert Macaulay Way, Alagomeji, Yaba, Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    >
    </iframe>
  </div>
);

GoogleMapAddress.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

export const MapLocator = cssModules(() =>
  <div styleName="map-container">
    <h3>Venue Locator</h3>
    <GoogleMapAddress width="500" height="400" />
  </div>, styles);

export default GoogleMapAddress;
