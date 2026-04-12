import LinkedinIcon from './assets/icons/LinkedinIcon.svg?raw';
import GitHubIcon from './assets/icons/GitHubIcon.svg?raw';
import XIcon from './assets/icons/XIcon.svg?raw';
import BlueskyIcon from './assets/icons/BlueskyIcon.svg?raw';
import InstagramIcon from './assets/icons/InstagramIcon.svg?raw';
import TryHackMeIcon from './assets/icons/TryHackMeIcon.svg?raw';
import MailIcon from './assets/icons/MailIcon.svg?raw';
// import FacebookIcon from './assets/icons/FacebookIcon.svg?raw';
// import YouTubeIcon from './assets/icons/YouTubeIcon.svg?raw';
// import CoffeeIcon from './assets/icons/CoffeeIcon.svg?raw';

export type Social = {
  name: string;
  url: string;
  icon: string;
};

export const SOCIALS: Social[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kavindujayarathne',
    icon: LinkedinIcon,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kavindujayarathne',
    icon: GitHubIcon,
  },
  {
    name: 'X (Twitter)',
    url: 'https://twitter.com/at_kavindu',
    icon: XIcon,
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/kavindujayarathne.bsky.social',
    icon: BlueskyIcon,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/at_kavindu',
    icon: InstagramIcon,
  },
  // {
  //   name: 'Facebook',
  //   url: '#',
  //   icon: FacebookIcon,
  // },
  // {
  //   name: 'YouTube',
  //   url: '#',
  //   icon: YouTubeIcon,
  // },
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com/p/kavindujayarathne',
    icon: TryHackMeIcon,
  },
  // {
  //   name: 'Buy Me A Coffee',
  //   url: '#',
  //   icon: CoffeeIcon,
  // },
  {
    name: 'Email',
    url: 'kavindujayarathne@proton.me',
    icon: MailIcon,
  },
];
