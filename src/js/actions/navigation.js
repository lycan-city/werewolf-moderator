import { push, replace, goBack } from 'react-router-redux'

export const goToSetup = () => replace('/');

export const goToHome = () => push('/');

export const goToScreenplay = () => push('/screenplay');

export { goBack };