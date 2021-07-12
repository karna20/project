import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SidebarData = [
  {
    title: 'Home',
    path: '/Admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Material',
    path: '/materials',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Quiz',
    path: '/quiz',
    icon: <IoIcons.IoIosText/>,
    cName: 'nav-text'
  },
  {
    title: 'Lecture',
    path: '/lecture',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/search',
    icon: <IoIcons.IoMdSearch />,
    cName: 'nav-text'
  },
 
];