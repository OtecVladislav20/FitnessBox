import { Map, Placemark } from '@pbe/react-yandex-maps';
import { fitnessBoxes } from '../../utils/mock';
import styled from 'styled-components';


const MapStyled = styled(Map)`
  width: 100%;
  height: 100%;
`;

export default function GeocodeMap() {
  return (
    <MapStyled defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
      {Object.keys(fitnessBoxes).map((box) => (
        <Placemark key={box} defaultGeometry={fitnessBoxes[box].location}/>
      ))}
    </MapStyled>
  );
}
