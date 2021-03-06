import React from 'react';
import useCachedResources from './hooks/useCachedResources';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return <MainNavigator />;
    }
}
