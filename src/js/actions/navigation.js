import { push, goBack } from 'react-router-redux';

export const goToHome = () => push('/home');

export const goToScreenplay = () => push('/screenplay');

export const goToGame = () => push('/game');

export { goBack };
