import {
  Button, Flex, Box, Text,
} from 'rebass/styled-components';
import { Input, Radio, Label } from '@rebass/forms';

import Page from '../components/page';

const Unsubscribe = () => (
  <Page seo={{
    metaDescription: 'Melde dich hier von dem Kiosk ab',
    metaTitle: 'Unsubscribe',
  }}
  >
    <Flex
      minHeight="calc(100vh - 170px)"
      flexDirection="column"
      justifyContent="space-between"
      maxWidth="1200px"
    >
      <form action="https://ml.kundenserver.de/cgi-bin/mailinglist.cgi" method="POST" target="_blank">
        <Label>
          <Radio checked name="subscribe_r" type="radio" value="subscribe" />
          Ja, ich möchte mich auf die Mailingliste newsletter@kulturkiosk-schranke.de.
        </Label>

        <Label>
          <Radio name="subscribe_r" type="radio" value="unsubscribe" />
          Bitte streiche mich wieder von der Mailingliste newsletter@kulturkiosk-schranke.de.
        </Label>
        <br />
        <Text
          as="p"
          mb={2}
          fontWeight="bold"
        >
          Gebe deine E-Mail-Adresse ein:
        </Text>
        <Input
          name="mailaccount_r"
          type="text"
          sx={{
            maxWidth: '400px',
          }}
        />
        <br />
        <br />
        <Text
          as="p"
          fontWeight="bold"
          mb={2}
        >
          Wiederhole deine eingegebene E-Mail-Adresse:
        </Text>
        <Input
          name="mailaccount2_r"
          type="text"
          sx={{
            maxWidth: '400px',
          }}
        />
        <br />
        <br />
        <Box
          my={2}
        >
          <Button
            mr={2}
            type="SUBMIT"
          >
            Absenden
          </Button>
          <Button
            type="RESET"
          >
            Zurücksetzen
          </Button>
        </Box>

        <input name="FBMLNAME" type="hidden" value="newsletter@kulturkiosk-schranke.de" />
        <br />
        <input name="FBLANG" type="hidden" value="de" />
        <br />
        <input name="FBURLERROR_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/error.de.html" />
        <br />
        <input name="FBURLSUBSCRIBE_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/subscribe.de.html" />
        <br />
        <input name="FBURLUNSUBSCRIBE_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/unsubscribe.de.html" />
        <br />
        <input name="FBURLINVALID_L" type="hidden" value="https://ml.kundenserver.de/mailinglist/invalid.de.html" />
      </form>

    </Flex>
  </Page>
);

export default Unsubscribe;
