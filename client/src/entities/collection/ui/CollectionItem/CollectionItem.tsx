import React from 'react'
import styles from './CollectionItem.module.css'
import { Collection } from '../../model'

type CollectionItemProps = {
  collection: Collection;
}

export const CollectionItem: React.FC<CollectionItemProps> = ({collection}) => {
  return <div className={styles.container}>
    <img src={collection.image} alt="коллекция" />
    <div>{collection.title}</div>
  </div>
}
