import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import Color from '../constants/Colors';

const CustomHeaderButton = props =>{
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Color.primaryColor} />
};

export default CustomHeaderButton;