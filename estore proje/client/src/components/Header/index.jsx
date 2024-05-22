import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header/header.module.scss'
import { BasketContext } from '../../context/basketContext'
const Header = () => {
    const{basket}=useContext(BasketContext)
  return (
    <div>
        <header>
            <div className='container'>
                <div className={styles.all}>
                <div className="logo">
                    <h1>Estore</h1>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li>
                            <Link to={"/"}className={styles.link}>Home</Link>
                        </li>
                        <li>
                            <Link to={"add"}className={styles.link}>Add</Link>
                        </li>
                        <li>
                            <Link to={"basket"}className={styles.link}>Basket <sup>{basket.length}</sup></Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header