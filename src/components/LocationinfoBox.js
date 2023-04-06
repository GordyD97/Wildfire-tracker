import React from "react"
const LocationinfoBox = ({ info }) => {
  return (
    <div className="location-info">
        <h2>
            event Location info
        </h2>
        <ul>
            <li>ID: <strong>{ info.id }</strong></li>
            <li><strong>{ info.title } </strong> </li>
        </ul>
    </div>
  )
}

export default LocationinfoBox