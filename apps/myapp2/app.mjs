import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    mainView: MainContainer,
    name    : 'MyApp2'
});

export {onStart as onStart};
