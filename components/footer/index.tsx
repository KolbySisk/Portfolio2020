import * as FooterStyles from './footer.styles';

const Footer = () => {
  return (
    <FooterStyles.Root>
      <FooterStyles.Logo
        dangerouslySetInnerHTML={{
          __html: require('../../public/images/logo-red.svg?include&size=80'),
        }}
      />
    </FooterStyles.Root>
  );
};

export default Footer;
