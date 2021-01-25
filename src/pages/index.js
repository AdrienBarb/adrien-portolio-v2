import React from 'react'
import '../styles/index.scss';
import classes from './index.module.scss'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'

const index = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className={classes.nameWrapper}>
          <div className={classes.name}>ADRIEN BARBIER</div>
          <div className={classes.workTitle}>Développeur web freelance</div>
        </div>
        <div className={classes.moreInfos}>(en savoir plus)</div>
      </Layout>
    </>
  )
}

export default index

