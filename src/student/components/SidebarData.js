import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Material',
    path: '/studentmaterials',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Quiz',
    path: '/studentquiz',
    icon: <IoIcons.IoIosText/>,
    cName: 'nav-text'
  },
  {
    title: 'Lecture',
    path: '/studentlecture',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  
 
];