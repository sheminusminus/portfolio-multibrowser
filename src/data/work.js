import rtblLanding from '../static/images/routable_landing.png';
import rtblAccounts from '../static/images/routable_accounts.png';
import exokit from '../static/images/exo.png';
import sweetie from '../static/images/sweetiebird.png';
import mdgbWeb from '../static/images/mdgb_web.png';
import mdgbApp from '../static/images/mdgb_app.jpg';
import lbdod from '../static/images/dod.png';
import cc from '../static/images/coaster.png';
import selfie from '../static/images/selfie.png';
import mdnWeb from '../static/images/medean_cropped.png';
import mdnHome from '../static/images/mdn_app_home.PNG';
import mdnScore from '../static/images/mdn_app_score.PNG';
import mdnMchef from '../static/images/mdn_app_mchef.PNG';
import mig from '../static/images/migrating.png';
import amtnCli from '../static/images/amtn_cli.png';

import { Project, OpenSource, Talk } from 'components';


export default {
  work: {
    Component: Project,
    heading: 'Work',
    subheading: '(That you can find in the wild)',
    items: [
      {
        href: 'https://routable.com/',
        images: [rtblLanding, rtblAccounts],
        isFeatured: true,
        title: 'Routable',
        type: 'web',
      },
      {
        href: 'https://itunes.apple.com/us/app/medean-smart-finance/id1391804232?mt=8',
        images: [mdnHome, mdnScore, mdnMchef],
        title: 'Medean iOS',
        type: 'iphone',
      },
      {
        href: 'https://app.medean.com',
        image: mdnWeb,
        title: 'Medean Webapp',
        type: 'web',
      },
      {
        href: 'https://exokitbrowser.com',
        image: exokit,
        title: 'Exokit Site',
        type: 'web',
      },
      {
        href: 'https://sweetiebird.io',
        image: sweetie,
        title: 'Sweetiebird',
        type: 'web',
      },
      {
        href: 'https://mydigitalguestbook.com',
        image: mdgbWeb,
        title: 'MyDigitalGuestbook Web',
        type: 'web',
      },
      {
        href: 'https://itunes.apple.com/us/app/my-digital-guestbook/id1161749441?mt=8',
        image: mdgbApp,
        title: 'MyDigitalGuestbook iOS',
        type: 'ipad',
      },
      {
        href: 'http://lbdod.com/',
        image: lbdod,
        title: 'LBDOD',
        type: 'web',
      },
      {
        href: 'https://coaster.soill.org/',
        image: cc,
        title: 'Coaster Challenge',
        type: 'web',
      },
      {
        href: 'http://selfielovebook.com/',
        image: selfie,
        title: 'Self(i.e.) Love Book',
        type: 'web',
      },
    ],
  },
  openSource: {
    Component: OpenSource,
    heading: 'Open Source',
    items: [
      {
        title: 'apple-music-token-node',
        href: 'https://www.npmjs.com/package/apple-music-token-node',
        image: amtnCli,
      },
    ],
  },
  talks: {
    Component: Talk,
    heading: 'Talks',
    items: [
      {
        title: 'Migrating to React 16',
        date: '2017',
        venue: 'ReactJS Chicago',
        href: 'http://emkolar.ninja/migrating_to_react16.pdf',
        image: mig,
      },
    ],
  },
};
