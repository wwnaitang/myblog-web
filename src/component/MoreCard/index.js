import React from 'react';
import styles from './index.css';
import { Icon } from 'antd';

class MoreCard extends React.Component {
  render() {
    let {href} = this.props;
    return (
      <div className={styles.moreCard}>
        <a href={href}>
          <div className={styles.content}>
            查看更多
          </div>
        </a>
      </div>
    );
  }
}

export default MoreCard;
