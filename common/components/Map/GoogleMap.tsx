import React , {useCallback, useEffect, useState} from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';
import CardItem from '../Card';
import {DatePicker, Select,Divider, Space} from 'antd/lib';
import { provinceList } from '@/public/data';
import { handleApi } from '@/common/utils';
import { searchAccommodation } from '@/common/api/accommodation';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const options = {
  disableDefaultUI: true, 
  zoomControl: true,
  styles: [
    {
      featureType: 'poi',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

interface CardData {
  slug: string;
  name: string;
  images: string[];
  rate: string;
  pricePerDay: number;
}

interface Location extends CardData {
  id: number;
  lat: number;
  lng: number;
  name: string;
}


interface MapProps {
  center: { lat: number; lng: number };
  data: any;
  setSearchResult: (result: any) => void; 
}

const locations: Location[] = [
  {
    id: 1,
    lat: 10.762622,
    lng: 106.660172,
    name: "Địa điểm 1",
    slug: "dia-diem-1",
    images: ["/images/image1.jpg"],
    rate: '4.5',
    pricePerDay: 100,
  },
  {
    id: 2,
    lat: 10.762621,
    lng: 106.660171,
    name: "Địa điểm 2",
    slug: "dia-diem-2",
    images: ["/images/image2.jpg"],
    rate: '4.5',
    pricePerDay: 80,
  },
];

const Map: React.FC<MapProps> = ({ center, data, setSearchResult }) => {

  const [selected, setSelected] = useState<Location | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [centerLocation, setCenterLocation] = useState(center);


  useEffect(() => {
    if (center && (center.lat !== centerLocation.lat || center.lng !== centerLocation.lng)) {
      setCenterLocation(center);
    }
  }, [center, centerLocation]);

  const fetchHotels = useCallback(async (location:any) => {
    try {
       const [lat, lon] = location.split('-').map(Number); 
       const response:any = await handleApi(searchAccommodation(false, {
         lat: lat,
         lon: lon,
       }))

       if (response?.success) {
         setSearchResult(response?.metadata)   
       }
    } catch (error) {
       console.log('handleGetAPI error', error);
    } 
  }, [setSearchResult]);

  
  const onMapLoad = useCallback((map:any) => {
    setMapRef(map);
    const bounds = map?.getBounds()?.toUrlValue();
  }, []);


  const onBoundsChanged = useCallback(() => {
    if (mapRef) {
      const bounds = mapRef?.getBounds()?.toUrlValue();
    }
  }, []);

  const onChangeName = async (value: string) => {
    setSearchLocation(value);
    fetchHotels(value)
  };
  

  return (
    <LoadScript googleMapsApiKey="">
      <div>
         <div className='w-1/3 absolute' >
          <Select
                  showSearch
                  className = "w-full text-black placeholder:text-black"
                  placeholder="Chọn điểm đến"
                  optionFilterProp="label"
                  onChange={onChangeName}
                  size = {"large"}
                  options={provinceList}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: '10',
                    width: '300px',
                   
                  }}
          />
        </div>
   
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{
          lat: 10.762622,
          lng: 106.660172,
         }
        }
        zoom={14}
        options={options}
        onLoad={onMapLoad}
        onBoundsChanged={onBoundsChanged}
      >
        {locations.map((item:any) => (
          <Marker
            key={item?.id}
            position={{ lat: item.lat, lng: item?.lng }}
            onMouseOver={() => {
              setHovered(item?.id);
              setSelected(item)}
            }
            onMouseOut={() => {
              setSelected(null)
              setHovered(null);
            }}
            icon={{
              url: '/images/Location-Bold-32px.png'
            
            }}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            options={{ pixelOffset: new window.google.maps.Size(0, -30) }} 
          >
              <CardItem data = {selected} />
          </InfoWindow>
        )}
      </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;

