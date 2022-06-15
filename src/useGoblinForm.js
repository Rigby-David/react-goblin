import { useState } from 'react';

// NOTE: this function is not being used. This is called a custom hook. It's basically just a way to bundle a bunch of setState hooks into the same place.
export function useGoblinForm() {
  const [goblinFormName, setGoblinFormName] = useState(''); 
  const [goblinFormHP, setGoblinFormHP] = useState(''); 
  const [goblinFormColor, setGoblinFormColor] = useState(''); 
  
  return {
    goblinFormName, setGoblinFormName,
    goblinFormHP, setGoblinFormHP,
    goblinFormColor, setGoblinFormColor
  };
}