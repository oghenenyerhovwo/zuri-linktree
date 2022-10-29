import React from 'react'

import { Link } from "react-router-dom"

import styles from "./profile.module.css"

import {
    gitHubIcon,
    slackIcon,
    ingressiveLogo,
    profilePicture,
    zuriLogo,
} from "../../assets"

const Profile = () => {
  return (
    <div className={styles.profile}>
        <div className={styles.head}>
            <img id="profile__img" src={profilePicture} alt="profilePicture" />
            <h1 id="twitter" className={styles.twitter}>@emakuneyi_n</h1>
        </div>
        <div className={styles.links}>
          <Link id="btn__zuri" to="https://training.zuri.team/">Twitter Link</Link>
          <Link id="books" to=" http://books.zuri.team ">Zuri Team</Link>
          <Link id="book__python" to="https://books.zuri.team/python-for-beginners?ref_id=<Oghenrenyerhovwo Emakuneyi>">Zuri Books</Link>
          <Link id="pitch" to="https://background.zuri.team">Python Books </Link>
          <Link id="book__design" to="https://books.zuri.team/design-rules">Design Books</Link>
        </div>
        <div className={styles.footer}>
            <div className={styles.icons}>
                <img src={slackIcon} alt="slackIcon" />
                <img src={gitHubIcon} alt="gitHubIcon" />
            </div>
            <div className={styles.base}>
                <img src={ingressiveLogo} alt="ingressiveLogo" />
                <h2>HNG Internship 9 Frontend Task</h2>
                <img src={zuriLogo} alt="zuriLogo" />
            </div>
        </div>
    </div>
  )
}

export default Profile