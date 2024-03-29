import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import React from 'react'
import LocationMarker from './LocationMarker'
import LocationinfoBox from './LocationinfoBox'


const NATURAL_EVENT_WILDFIRE = 8

const Map = ({ eventData, center, zoom }) => {
  const [locationinfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }
    return null
  })
  return (
    <div className='map'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
              defaultCenter={ center }
              defaultZoom={ zoom }

        >


            {markers}
        </GoogleMapReact>
        {locationinfo && <LocationinfoBox info={locationinfo} />}

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