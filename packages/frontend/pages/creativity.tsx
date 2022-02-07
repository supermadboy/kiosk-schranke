import {
  Text,
} from 'rebass/styled-components';
import Image from 'next/image';

import Page from '../components/page';

const creativitySeo = { metaTitle: 'Kreativität', metaDescription: 'Zeige deine Kreativität im Kiosk' };

const Creativity = () => (
  <Page seo={creativitySeo}>
    <Text
      pt="3"
      fontSize={['18px', '30px']}
    >
      Eure Ideen für den Kiosk
    </Text>
    <Image src="/MindMap_Kiosk.svg" width={1000} height={800} layout="responsive" objectFit="contain" objectPosition="left" />

  </Page>
);

export default Creativity;
