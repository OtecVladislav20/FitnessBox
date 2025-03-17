import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { fitnessBoxes } from '../../utils/fitness-boxes';
import styled from 'styled-components';


const MapStyled = styled(Map)`
  width: 100%;
  height: 100%;
`;

export default function GeocodeMap() {
  return (
    <YMaps query={{apikey: '65d0ebaf-f042-415a-9b10-cdf7666352f0'}}>
      <MapStyled defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
        {fitnessBoxes.map((box) => (
          <Placemark key={box.boxId} defaultGeometry={box.location}/>
        ))}
      </MapStyled>
    </YMaps>
  );
}
