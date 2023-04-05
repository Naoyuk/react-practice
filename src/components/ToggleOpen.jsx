import React, {useState, useEffect} from 'react';

const ToggleOpen = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('現在のステータスは', open)
    if (open) {
      console.log('Subscribing database...')
    }
    return () => {
      console.log('Unsubscribe database.')
    }
  }, [open])

  return (
    <button onClick={toggle}>
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  );
};

export default ToggleOpen;
