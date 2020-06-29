function useOutsideClickListener(ref, onOutside) {
  function handleClick({ target }) {
    if (target === ref?.current) {
      if (onOutside) onOutside();
    }
  }

  return handleClick;
}

export default useOutsideClickListener;
