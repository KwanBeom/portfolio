import React, { useEffect, useRef, useState } from 'react';
import { TypedOptions } from './Typed.type';
import useSlideUp from 'hooks/useSlideUp';
import * as S from './Typed.style';

const Typed = ({
  strings,
  typeSpeed,
  onSuccess,
  animate,
  render,
  animateDuration = 1000,
  viewCursor = true,
}: TypedOptions) => {
  const [text, setText] = useState('');
  const strIndex = useRef(0);
  const charIndex = useRef(0);
  const plusCharIndex = () => (charIndex.current += 1);
  const initCharIndex = () => (charIndex.current = 0);
  const plusStrIndex = () => (strIndex.current += 1);
  const { ref, trigger, restore } = useSlideUp<HTMLDivElement>();

  const insertChar = (charactor: string) => {
    setText(prev => prev + charactor);
    plusCharIndex();
  };

  const typing = () => {
    if (strIndex.current === strings.length) return;

    const currentString = strings[strIndex.current];
    let typingTimeout;

    if (charIndex.current < currentString.length) {
      insertChar(currentString[charIndex.current]);
      restore();
      typingTimeout = setTimeout(typing, typeSpeed);
    }

    if (charIndex.current >= currentString.length) {
      plusStrIndex();
      initCharIndex();

      const isLastTyped = strIndex.current === strings.length;

      if (animate && !isLastTyped) {
        trigger(animateDuration);
        clearTimeout(typingTimeout);
        setTimeout(() => {
          setText('');
          typing();
        }, animateDuration);
      }
    }
  };

  useEffect(typing, []);

  useEffect(() => {
    if (strIndex.current === strings.length && onSuccess) {
      onSuccess();
    }
  }, [charIndex.current]);

  return (
    <>
      <div ref={ref}>
        {render(text)}
        {viewCursor && <S.Cursor $isTypedDone={strIndex.current === strings.length} />}
      </div>
    </>
  );
};

export default Typed;
