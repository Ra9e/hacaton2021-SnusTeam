import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

class MapBasics extends React.Component {
    state = { showMap: true };



    render() {
        const { showMap } = this.state;

        return (
            <YMaps>
                <div id="map-basics">
                    {showMap &&
                    // When initializing the map, you must specify
                    // its center and the zoom factor.
                    <Map style={{ height: '335px', width: '100%' }} state={mapState} />}
                </div>
            </YMaps>
        );
    }
}

export default MapBasics;