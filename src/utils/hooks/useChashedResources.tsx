import React, { useEffect, useState } from 'react';
import * as font from 'expo-font';

const useChashedResources = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await font.loadAsync({
          'NotoSerif-bold': require('../../../assets/fonts/NotoSerif-Bold.ttf'),
          'NotoSerif-regular': require('../../../assets/fonts/NotoSerif-Regular.ttf'),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    }
    loadResources();
  }, [setIsLoading]);
  return isLoading;
};

export default useChashedResources;
