import {
  Button, Flex, Box,
} from 'rebass/styled-components';
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
        <input checked name="subscribe_r" type="radio" value="subscribe" />
        Ja, ich möchte mich auf die Mailingliste newsletter@kulturkiosk-schranke.de.
        <br />
        <input name="subscribe_r" type="radio" value="unsubscribe" />
        Bitte streichen Sie mich wieder von der Mailingliste newsletter@kulturkiosk-schranke.de.
        <br />
        Geben Sie Ihre E-Mail-Adresse ein:
        <br />
        <input name="mailaccount_r" type="text" />
        <br />
        Wiederholen Sie die eingegebene E-Mail-Adresse:
        <br />
        <input name="mailaccount2_r" type="text" />
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
