import {
  Text,
} from 'rebass/styled-components';

import Page from '../components/page';

const creativitySeo = { metaTitle: 'Kreativität', metaDescription: 'Zeige deine Kreativität im Kiosk' };

const Calendar = () => (
  <Page seo={creativitySeo}>
    <Text
      pt="3"
      fontSize={['18px', '30px']}
    >
      Coming soon
    </Text>
  </Page>
);

export default Calendar;
