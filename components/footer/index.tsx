import Link from 'next/link';
import * as FooterStyles from './footer.styles';

const Footer = () => {
  return (
    <Link href={`/`}>
      <FooterStyles.Root>
        <FooterStyles.Logo
          dangerouslySetInnerHTML={{
            __html: require('../../public/images/logo-red.svg?include&size=80'),
          }}
        />
      </FooterStyles.Root>
    </Link>
  );
};

export default Footer;
