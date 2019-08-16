import React from 'react';
import styles from './index.css';
import { Icon } from 'antd';

class FileCard extends React.Component {
  render() {
    let {href, title, info, editUrl} = this.props;
    return (
      <div className={styles.fileCard}>
        <div className={styles.content}>
          <Icon className={styles.icon} type="file-text" />
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <a href={href} className={styles.title}>{title}</a><br/>
            <div>
              <a href={editUrl}><Icon type="edit" /></a>
            </div>
          </div>
          <span className={styles.info}>{info}</span>
        </div>
      </div>
    );
  }
}

export default FileCard;
