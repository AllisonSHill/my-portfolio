import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import * as ExifReader from 'exifreader';

const Map = () => {
  const mapDiv = useRef(null);
  const map = useRef(null);
  const [features, setFeatures] = useState([])

  useEffect(() => {
    const fileInput = document.getElementById('fileInput');
    const handleFileChange = async (event) => {
      const files = event.target.files;
      const theFeatures = [];

      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;

        try {
          const arrayBuffer = await file.arrayBuffer();
          const exifData = ExifReader.load(arrayBuffer);
          console.log(`EXIF data for ${file.name}:`, exifData);

          // Create GeoJSON feature from EXIF coordinates
          theFeatures.push({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [
                -exifData['GPSLongitude']?.description || 0,
                exifData['GPSLatitude']?.description || 0
              ]
            },
            properties: {}
          });
        } catch (error) {
          console.error(`Error reading EXIF data from ${file.name}:`, error);
        }
      }
      setFeatures(theFeatures);
    };

    fileInput.addEventListener('change', handleFileChange);
    return () => fileInput.removeEventListener('change', handleFileChange);
  }, []);

  useEffect(() => {
    // Dynamically add Mapbox CSS
    const link = document.createElement('link');
    link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Initialize Mapbox map on load
    if (map.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoiY29uZXhvbi1kZXNpZ24iLCJhIjoiY2pvdzZlb2djMXVhOTN3bmhpYzk3NndoZCJ9.On4IrAd0sgmmgd_sAqg_Gg';
    map.current = new mapboxgl.Map({
      container: mapDiv.current,
      style: 'mapbox://styles/conexon-design/ckgb6lfyh42h419mpqdkszki1',
      center: [-105.3272, 39.0639],
      zoom: 6.5,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      if (map.current) map.current.remove();
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (map.current && features.length) {
        console.log('loading features', features)
      const source = map.current.getSource('points');
      if (source) {
        source.setData({
          type: 'FeatureCollection',
          features: features
        });
      } else {
        map.current.addSource('points', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: features
          }
        });

        map.current.addLayer({
          id: 'points',
          type: 'circle',
          source: 'points',
          paint: {
            'circle-radius': 5,
            'circle-color': '#007cbf'
          }
        });
      }
    }
  }, [features]);

  return (
    <>
      <input type="file" id="fileInput" multiple />
      <div ref={mapDiv} style={{ width: '100%', height: '100vh' }} />
    </>
  );
};

export default Map;
