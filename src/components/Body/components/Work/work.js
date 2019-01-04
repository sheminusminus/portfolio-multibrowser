import exokit from '../../../../static/images/exo.png';
import sweetie from '../../../../static/images/sweetiebird.png';
import mdgbWeb from '../../../../static/images/mdgb_web.png';
import mdgbApp from '../../../../static/images/mdgb_app.jpg';
import lbdod from '../../../../static/images/dod.png';
import cc from '../../../../static/images/coaster.png';
import selfie from '../../../../static/images/selfie.png';
import de from '../../../../static/images/deana.png';
import mdnWeb from '../../../../static/images/medean_cropped.png';
import mdnLaunch from '../../../../static/images/mdn_app_launch.PNG';
import mdnHome from '../../../../static/images/mdn_app_home.PNG';
import mdnScore from '../../../../static/images/mdn_app_score.PNG';
import mdnAchieve from '../../../../static/images/mdn_app_achieve.jpeg';
import mdnMchef from '../../../../static/images/mdn_app_mchef.PNG';

import mig from '../../../../static/images/migrating.png';
import amtnCli from '../../../../static/images/amtn_cli.png';

export default {
  featured: {
    title: 'Medean iOS',
    type: 'iphone',
    href: 'https://itunes.apple.com/us/app/medean-smart-finance/id1391804232?mt=8',
    images: [mdnLaunch, mdnHome, mdnScore, mdnAchieve, mdnMchef],
  },
  openSource: [
    {
      title: 'apple-music-token-node',
      href: 'https://www.npmjs.com/package/apple-music-token-node',
      image: amtnCli,
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
      title: 'Medean Webapp',
      type: 'web',
      href: 'https://app.medean.com',
      image: mdnWeb,
    },
    {
      title: 'Exokit Site',
      type: 'web',
      href: 'https://exokitbrowser.com',
      image: exokit,
    },
    {
      title: 'Sweetiebird',
      type: 'web',
      href: 'https://sweetiebird.io',
      image: sweetie,
    },
    {
      title: 'MyDigitalGuestbook Web',
      type: 'web',
      href: 'https://mydigitalguestbook.com',
      image: mdgbWeb,
    },
    {
      title: 'MyDigitalGuestbook iOS',
      type: 'ipad',
      href: 'https://itunes.apple.com/us/app/my-digital-guestbook/id1161749441?mt=8',
      image: mdgbApp,
    },
    {
      title: 'LBDOD',
      type: 'web',
      href: 'http://lbdod.com/',
      image: lbdod,
    },
    {
      title: 'Coaster Challenge',
      type: 'web',
      href: 'https://coaster.soill.org/',
      image: cc,
    },
    {
      title: 'Self(i.e.) Love Book',
      type: 'web',
      href: 'http://selfielovebook.com/',
      image: selfie,
    },
    {
      title: 'deana.ninja',
      type: 'web',
      href: false,
      image: de,
    },
  ],
};
