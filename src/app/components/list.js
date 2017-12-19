import React from 'react';
import ListItem from './list-item';

function createList(item, action){
      return (
          <ListItem
              onItemSelect={action}
              key={item.etag}
              item={item} />
      );
}

const List = ({items, action, style}) => {
  return(
    <ul className={style}>
      {items.map((item) => createList(item, action))}
    </ul>
  );
}

export default List;
