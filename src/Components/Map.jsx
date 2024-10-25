import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapDiv = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Dynamically add Mapbox CSS
    const link = document.createElement('link');
    link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Initialize Mapbox
    if (map.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoiY29uZXhvbi1kZXNpZ24iLCJhIjoiY2pvdzZlb2djMXVhOTN3bmhpYzk3NndoZCJ9.On4IrAd0sgmmgd_sAqg_Gg';
    map.current = new mapboxgl.Map({
      container: mapDiv.current,
      style: 'mapbox://styles/conexon-design/ckgb6lfyh42h419mpqdkszki1',
      center: [-105.3272, 39.0639],
      zoom: 6.5,
      minZoom: 5,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      // Cleanup on component unmount
      map.current.remove();
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div ref={mapDiv} style={{ width: '100%', height: '100vh' }} />
  );
};

export default Map;