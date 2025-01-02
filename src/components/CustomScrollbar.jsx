import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomScrollbar.module.css';

const CustomScrollbar = ({ children }) => {
  const contentRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const content = contentRef.current;
    const thumb = thumbRef.current;

    const updateThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = content;
      const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.top = `${(scrollTop / scrollHeight) * clientHeight}px`;
    };

    const handleScroll = () => updateThumb();

    content.addEventListener('scroll', handleScroll);
    updateThumb();

    return () => content.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThumbDrag = (e) => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    const startY = e.clientY;
    const startTop = parseFloat(window.getComputedStyle(thumb).top);

    const onMouseMove = (e) => {
      const deltaY = e.clientY - startY;
      const newTop = Math.min(
        Math.max(startTop + deltaY, 0),
        content.clientHeight - thumb.offsetHeight
      );
      thumb.style.top = `${newTop}px`;
      content.scrollTop =
        (newTop / content.clientHeight) * content.scrollHeight;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className={styles.custom_scroll}>
      <div className={styles.custom_scroll_content} ref={contentRef}>
        {children}
      </div>
      <div className={styles.custom_scroll_bar}>
        <div
          className={styles.custom_scroll_thumb}
          ref={thumbRef}
          onMouseDown={handleThumbDrag}
        ></div>
      </div>
    </div>
  );
};

CustomScrollbar.propTypes = {
    children: PropTypes.element.isRequired,
};

export default CustomScrollbar;
