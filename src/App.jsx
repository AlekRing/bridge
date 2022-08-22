import React from 'react'
import styles from './app.scss';
import AppRoutes from '@/Routes';

const App = () => {
  return (
      <div className={styles.app}>
        <AppRoutes />
      </div>
  )
}

export default App