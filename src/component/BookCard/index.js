import React from 'react';
import styles from './index.css';
import { Icon } from 'antd';

class BookCard extends React.Component {
  render() {
    let {href, title} = this.props;
    return (
      <div className={styles.bookCard}>
        <a href={href}>
          <div className={styles.content}>
            <Icon className={styles.icon} type="book" />
            <span className={styles.title}>{title}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default BookCard;
