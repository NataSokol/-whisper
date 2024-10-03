import React, { useEffect } from 'react'
import styles from './CollectionList.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useReduxHooks'
import { getAllCollections } from '@/entities/collection'
import {CollectionItem} from '@/entities/collection/ui/CollectionItem/CollectionItem'
import { Link } from 'react-router-dom'
import { getCollectionRoute } from '@/app/router/routes'

export const CollectionList: React.FC = ({}) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.collection)

  useEffect(() => {
  dispatch(getAllCollections())
}, [dispatch])

  return <div className={styles.container}>
    {state.collections?.map((collection) => (
      <div key={collection.id}>
      <CollectionItem  collection={collection} />
      <Link to={getCollectionRoute(collection.id)}>Посмотреть</Link>
      </div>
    ))}
  </div>
}
