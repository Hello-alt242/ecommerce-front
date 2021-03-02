import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Shop',
    path: '/shop',
    icon: <FaIcons.FaShopware />,
    cName: 'nav-text'
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/user/dashboard',
    icon: <FaIcons.FaDashcube />,
    cName: 'nav-text'
  }
  // {
  //   title: 'Locations',
  //   path: '/user/dashboard',
  //   icon: <FaIcons.FaDashcube />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Contact',
  //   path: '/user/dashboard',
  //   icon: <FaIcons.FaDashcube />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Signout',
  //   path: '/user/dashboard',
  //   icon: <FaIcons.FaDashcube />,
  //   cName: 'nav-text'
  // }
];