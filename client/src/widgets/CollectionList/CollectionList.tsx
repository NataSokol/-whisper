import React, { useEffect } from 'react'
import styles from './CollectionList.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useReduxHooks'
import { getAllCollections } from '@/entities/collection'
import {CollectionItem} from '@/entities/collection/ui/CollectionItem/CollectionItem'

export const CollectionList: React.FC = ({}) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.collection)

  useEffect(() => {
  dispatch(getAllCollections())
}, [dispatch])

  return <div className={styles.container}>
    {state.collections?.map((collection) => (
      <CollectionItem key={collection.id} collection={collection} />
    ))}
  </div>
}
