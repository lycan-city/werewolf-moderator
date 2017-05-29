import { push, replace } from 'react-router-redux'

import {
    GOT_TO_SETUP,
} from './types';

export const goToSetup = () => replace('/');

export const goToScreenplay = () => push('/screenplay');
