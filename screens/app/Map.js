import React, { useState } from 'react';
import { View, TouchableOpacity,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Entypo from "react-native-vector-icons/Entypo";


const LocationPicker = ({navigation}) => {
    const [selectedLocation, setSelectedLocation] = useState();

    const handleLocationSelect = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setSelectedLocation({ latitude, longitude });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{justifyContent: 'flex-start', padding: 30}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={{uri: 'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png'}}
                        style={{height: 20, width: 34}}/>
                </TouchableOpacity>
            </View>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude:45.760696,
                    longitude: 21.226788,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={handleLocationSelect}
            >
                {selectedLocation && (
                    <Marker coordinate={selectedLocation}>
                        <Entypo name="location-pin" size={45} color="red" />
                    </Marker>
                )}
            </MapView>
        </View>
    );
};

export default LocationPicker;