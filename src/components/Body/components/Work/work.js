import exokit from '../../../../static/images/exo.png';
import sweetie from '../../../../static/images/sweetiebird.png';
import mdgbWeb from '../../../../static/images/mdgb_web.png';
import mdgbApp from '../../../../static/images/mdgb_app.jpg';
import lbdod from '../../../../static/images/dod.png';
import cc from '../../../../static/images/coaster.png';
import selfie from '../../../../static/images/selfie.png';
import de from '../../../../static/images/deana.png';
import featured1 from '../../../../static/images/medean_login.png';
import featured2 from '../../../../static/images/medean_dash.png';

import mig from '../../../../static/images/migrating.png';
import amtn from '../../../../static/images/amtn.png';

export default {
  featured: {
    title: 'Medean',
    href: 'https://app.medean.com',
    images: [featured1, featured2],
  },
  openSource: [
    {
      title: 'apple-music-token-node',
      href: 'https://www.npmjs.com/package/apple-music-token-node',
      image: amtn,
    },
  ],
  talks: [
    {
      title: 'Migrating to React 16',
      date: '2017',
      venue: 'ReactJS Chicago',
      href: 'http://emkolar.ninja/migrating_to_react16.pdf',
      image: mig,
    },
  ],
  projects: [
    {
      title: 'Exokit Site',
      href: 'https://exokitbrowser.com',
      image: exokit,
    },
    {
      title: 'Sweetiebird',
      href: 'https://sweetiebird.io',
      image: sweetie,
    },
    {
      title: 'MyDigitalGuestbook Web',
      href: 'https://mydigitalguestbook.com',
      image: mdgbWeb,
    },
    {
      title: 'MyDigitalGuestbook iOS',
      href: 'https://itunes.apple.com/us/app/my-digital-guestbook/id1161749441?mt=8',
      image: mdgbApp,
    },
    {
      title: 'LBDOD',
      href: 'http://lbdod.com/',
      image: lbdod,
    },
    {
      title: 'Coaster Challenge',
      href: 'https://coaster.soill.org/',
      image: cc,
    },
    {
      title: 'Self(i.e.) Love Book',
      href: 'http://selfielovebook.com/',
      image: selfie,
    },
    {
      title: 'deana.ninja',
      href: false,
      image: de,
    },
  ],
};
