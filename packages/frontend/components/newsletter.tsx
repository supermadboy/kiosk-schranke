import { NextComponentType } from 'next';
import { useState } from 'react';
import {
  Flex, Button, Text, Box,
} from 'rebass/styled-components';
import PropTypes from 'prop-types';

const NewsletterRegistration: NextComponentType = ({ children }) => {
  const [email, setEmail] = useState('');

  const registerForNewsletter = () => {
    const mapForm = document.createElement('form');
    mapForm.target = '_blank';
    mapForm.method = 'POST';
    mapForm.action = 'https://ml.kundenserver.de/cgi-bin/mailinglist.cgi';
    mapForm.style.display = 'none';

    const radiosubscribe = document.createElement('input');
    radiosubscribe.type = 'radio';
    radiosubscribe.name = 'subscribe_r';
    radiosubscribe.value = 'subscribe';
    radiosubscribe.checked = true;

    const radiounsubscribe = document.createElement('input');
    radiounsubscribe.type = 'radio';
    radiounsubscribe.name = 'subscribe_r';
    radiounsubscribe.value = 'unsubscribe';

    const mailaccountR = document.createElement('input');
    mailaccountR.type = 'text';
    mailaccountR.name = 'mailaccount_r';
    mailaccountR.value = email;

    const mailaccount2R = document.createElement('input');
    mailaccount2R.type = 'text';
    mailaccount2R.name = 'mailaccount2_r';
    mailaccount2R.value = email;

    const FBMLNAME = document.createElement('input');
    FBMLNAME.type = 'text';
    FBMLNAME.name = 'FBMLNAME';
    FBMLNAME.value = 'newsletter@kulturkiosk-schranke.de';

    const FBLANG = document.createElement('input');
    FBLANG.type = 'hidden';
    FBLANG.name = 'FBLANG';
    FBLANG.value = 'de';

    const FBURLERROR = document.createElement('input');
    FBURLERROR.type = 'hidden';
    FBURLERROR.name = 'FBURLERROR_L';
    FBURLERROR.value = 'https://ml.kundenserver.de/mailinglist/error.de.html';

    const FBURLSUBSCRIBE = document.createElement('input');
    FBURLSUBSCRIBE.type = 'hidden';
    FBURLSUBSCRIBE.name = 'FBURLSUBSCRIBE_L';
    FBURLSUBSCRIBE.value = 'https://ml.kundenserver.de/mailinglist/subscribe.de.html';

    const FBURLUNSUBSCRIBE = document.createElement('input');
    FBURLUNSUBSCRIBE.type = 'hidden';
    FBURLUNSUBSCRIBE.name = 'FBURLUNSUBSCRIBE_L';
    FBURLUNSUBSCRIBE.value = 'https://ml.kundenserver.de/mailinglist/unsubscribe.de.html';

    const FBURLINVALID = document.createElement('input');
    FBURLINVALID.type = 'hidden';
    FBURLINVALID.name = 'FBURLINVALID_L';
    FBURLINVALID.value = 'https://ml.kundenserver.de/mailinglist/invalid.de.html';

    mapForm.appendChild(radiosubscribe);
    mapForm.appendChild(radiounsubscribe);
    mapForm.appendChild(mailaccountR);
    mapForm.appendChild(mailaccount2R);
    mapForm.appendChild(FBMLNAME);
    mapForm.appendChild(FBLANG);
    mapForm.appendChild(FBURLERROR);
    mapForm.appendChild(FBURLSUBSCRIBE);
    mapForm.appendChild(FBURLUNSUBSCRIBE);
    mapForm.appendChild(FBURLINVALID);

    document.body.appendChild(mapForm);
    mapForm.submit();
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
    >
      <Box
        mb={2}
      >
        <Text
          as="p"
        >
          {children}
        </Text>
        <label htmlFor="email">
          Email:&nbsp;
          <input
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            id="email"
            name="email"
            type="email"
            placeholder="mail@exmaple.com"
          />
        </label>
      </Box>

      <Button
        width="fit-content"
        onClick={() => registerForNewsletter()}
      >
        Anmelden
      </Button>
    </Flex>
  );
};

NewsletterRegistration.propTypes = {
  children: PropTypes.node,
};

NewsletterRegistration.defaultProps = {
  children: null,
};
export default NewsletterRegistration;
