import GoogleMapReact from 'google-map-react'
import React from 'react'
import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
        <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={ center }
              defaultZoom={ zoom }

        >


        <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>


    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 75.32,
        lng: 39.88,
    },
    zoom: 6
}

export default Map