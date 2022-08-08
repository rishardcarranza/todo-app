import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [synchronizedItem, setSynchronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
          const localStorageItem = localStorage.getItem(itemName);
          let storageItem;
        
          if (localStorageItem) {
            storageItem = JSON.parse(localStorageItem);
          } else {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            storageItem = initialValue;
          }

          setItem(storageItem);
          setLoading(false);
          setSynchronizedItem(true);
      } catch(error) {
        setError(error);
      }
    }, 1000);
  }, [synchronizedItem]);

    const saveAndStorageItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    }

    const synchronizedInfo = () => {
      setLoading(true);
      setSynchronizedItem(false);
    }
  
    return {
      item,
      saveAndStorageItem,
      loading,
      error,
      synchronizedInfo,
    };
  
  }

  export { useLocalStorage };