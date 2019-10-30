import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        infiniteLoop={true}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        chevronWidth={chevronWidth}
        outsideChevron={true}
      >
        <div style={{ height: 200, background: '#EEE' }}>First card</div>
        <div style={{ height: 200, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, background: '#EEE' }}>Third card</div>
        <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
        <div style={{ height: 200, background: '#EEE' }}>Fifth card</div>
        <div style={{ height: 200, background: '#EEE' }}>7 card</div>
        <div style={{ height: 200, background: '#EEE' }}>8 card</div>
        <div style={{ height: 200, background: '#EEE' }}>9 card</div>
        <div style={{ height: 200, background: '#EEE' }}>10 card</div>
      </ItemsCarousel>
    </div>
  );
};