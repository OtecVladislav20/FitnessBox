import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import styled from 'styled-components';
import { TFitnessBox } from '../../utils/fitness-boxes';


const MapStyled = styled(Map)`
  width: 100%;
  height: 100%;
`;

type TGeocodeMap = {
  fitnessBoxes: TFitnessBox[];
}

export default function GeocodeMap({ fitnessBoxes }: TGeocodeMap) {
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
