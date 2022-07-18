import React from 'react';

function useLocalStorage(itemName, initialValue) {
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
      } catch(error) {
        setError(error);
      }
    }, 1000);
  });

    const saveAndStorageItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveAndStorageItem,
      loading,
      error,
    };
  
  }

  export { useLocalStorage };