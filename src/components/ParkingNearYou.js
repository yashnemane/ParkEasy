import React, {useEffect, useState} from "react";
import useMyLocation from './MyLocation';
import axios from 'axios';
import '../assests/styles/homepage.css'

export default function ParkingNearYou() {
    const [position, getLocation] = useMyLocation();
    const [allowLocation, setAllowLocation] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [parkingData, setParkingData] = useState([])

    useEffect(() => {
        if (position.latitude !== null && position.longitude !== null && allowLocation) {
            fetchParkingData();
            console.log(`Searching for parking near: ${position.latitude}, ${position.longitude}`);
        }
    }, [position, allowLocation]);

    const fetchParkingData = async () => {
        try {
            const response = await axios.get(`https://parkeasybackend-no1m.onrender.com/api/places?keywords=parking&refLocation=${position.latitude},${position.longitude}`);
            console.log(response.data.suggestedLocations);
            setParkingData(response.data.suggestedLocations)
        } catch (error) {
            console.error('Error fetching data:', error);
            setFetchError(true);
        }
    };

    const handleSearch = async () => {
        getLocation();
        setAllowLocation(true);
    }

    const extractedData = parkingData.map((item, index) => ({
        distance: item.distance,
        placeAddress: item.placeAddress,
        placeName: item.placeName
    }));

    return (
        <div className="parking-near-you">
            <div className="parking-near-you-text">
                <h2>Search for available parking in the vicinity...</h2>
                <p>This service locates nearby available parking spaces to provide a convenient solution for your parking needs. By leveraging real-time data, it ensures you find the closest and most suitable parking options, enhancing your overall experience and saving you valuable time.</p>
            </div>
            <div className="search-parking-near-you">
            
                {!allowLocation && <button onClick={handleSearch} className="search-button">
                    Allow Location
                </button> }
                {fetchError && <p>Not able to fetch location...</p>}
            <div className="parking-results-wrapper">
                {extractedData.length > 0 && (
                    <div className="parking-results">
                        <h3>Parking Locations:</h3>
                        <ul>
                            {extractedData.map((item, index) => (
                                <li key={index}>
                                    <p><strong>Distance:</strong> {item.distance} meters</p>
                                    <br/>
                                    <p><strong>Place Name:</strong> {item.placeName}</p>
                                    <br/>
                                    <p><strong>Place Address:</strong> {item.placeAddress}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}