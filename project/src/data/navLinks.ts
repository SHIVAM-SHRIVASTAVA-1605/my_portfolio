import { NavLink, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { path: 'home', label: 'Home' },
  { path: 'about', label: 'About' },
  { path: 'skills', label: 'Skills' },
  { path: 'projects', label: 'Projects' },
  { path: 'contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { 
    platform: 'GitHub', 
    url: 'https://github.com/SHIVAM-SHRIVASTAVA-1605', 
    icon: 'github' 
  },
  { 
    platform: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/shivam1605/', 
    icon: 'linkedin' 
  },
  { 
    platform: 'Twitter', 
    url: 'https://x.com/Shrivastava1605', 
    icon: 'twitter' 
  },
  { 
    platform: 'Email', 
    url: 'mailto:shivam091204@gmail.com', 
    icon: 'mail' 
  }
];