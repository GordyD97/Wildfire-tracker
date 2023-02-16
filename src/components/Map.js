import GoogleMapReact from 'google-map-react'
import React from 'react'

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
        <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDSNrQ01I5WJovLgNiXMPxkc851FHuvPbo' }}
              defaultCenter={ center }
              defaultZoom={ zoom }

        >



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