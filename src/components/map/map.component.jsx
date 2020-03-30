import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';

import { selectInitialData, selectTotalNumbers } from '../../redux/data/data.selectors';

import 'ol/ol.css';
import { Map, View, Feature } from 'ol';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

import './map.styles.sass';

const MapComponent = ({ initialData, totalNumbers }) => {

  useEffect(() => {
    const points = initialData.map( ({Lat, Long_, Confirmed}) => {
      const location = new Feature({
        geometry: new Point(fromLonLat([parseFloat(Long_), parseFloat(Lat)]))
      });

      // location.setStyle(new Style({
      //   image: new CircleStyle({
      //     radius: Confirmed/1100,
      //     fill: new Fill({
      //       color: '#ff5e57'
      //     }),
      //     stroke: new Stroke({
      //       color: 'rgba(255, 204, 0, 0.2)',
      //       width: 1
      //     })
      //   })
      // }));
      return location;
    })

    let styleCache = [];
    const styleFunction = function() {
      const style = new Style({
        image: new CircleStyle({
          radius: 5,
          fill: new Fill({
            color: '#ff5e57'
          }),
          stroke: new Stroke({
            color: 'rgba(255, 204, 0, 0.2)',
            width: 1
          })
        })
      })
      return style;
    }
    const vectorSource = new VectorSource({
      features: points
    })

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: styleFunction()
    })

    const raster = new TileLayer({
      source: new Stamen ({
        layer: 'toner'
      }),
      className: 'map__layer'
    });

    if (initialData.length > 0) {
      const map = new Map({
        layers: [raster, vectorLayer],
        target: 'map',
        view: new View({
          center: [0, 0],
          zoom: 1
        })
      });
    }

  }, [initialData])

  return (
    <div className="map" id="map"></div>
  )

}

const mapStateToProps = state => ({
  initialData: selectInitialData(state),
  totalNumbers: selectTotalNumbers(state)

});

export default connect(mapStateToProps)(MapComponent);