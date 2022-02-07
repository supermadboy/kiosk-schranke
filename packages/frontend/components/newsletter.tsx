import { NextComponentType } from 'next';
import { useState } from 'react';
import {
  Flex, Button, Text,
} from 'rebass/styled-components';
import PropTypes from 'prop-types';
import { Input } from '@rebass/forms';

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
      mb={2}
      alignItems="center"
      flexDirection={['column', 'row']}
    >
      <Text
        as="p"
        mr={2}
        mb={[2, 0]}
      >
        {children}
      </Text>

      <Flex
        flexGrow={1}
      >

        <Input
          width="auto"
          value={email}
          mr={2}
          sx={{
            flexGrow: 1,
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#b2bfbd',
            borderRadius: '999px',
          }}
          onInput={(e: any) => setEmail((e.target as HTMLInputElement).value)}
          id="email"
          name="email"
          type="email"
          placeholder="mail@beispiel.com"
        />

        <Button
          width="fit-content"
          onClick={() => registerForNewsletter()}
          sx={{
            alignSelf: ['initial', 'center'],
            backgroundColor: '#b2bfbd',
            borderColor: '#b2bfbd',
            borderRadius: '999px',
            fontWeight: 'bold',
          }}
        >
          Anmelden
        </Button>
      </Flex>
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
