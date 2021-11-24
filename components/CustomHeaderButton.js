import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { HeaderButton } from 'react-navigation-header-buttons';

export function CustomHeaderButton(props: any) {
  return <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={'black'}
  />
}
