import React from 'react';
import styles from './index.css';
import { Button, Col, Row } from 'antd';
import FileCard from '@/component/FileCard';
import MoreCard from '@/component/MoreCard';
import BookCard from '@/component/BookCard';

class Card extends React.Component {
  render() {
    let {title, option, type, itemData} = this.props;
    return (
      <div className={styles.cardView}>
        <div className={styles.head}>
          <span className={styles.title}>{title}</span>
          <span className={styles.option}>
            {option ? <Button>{option}</Button> : ""}
          </span>
        </div>
        <div className={styles.body}>
          <Row>
            {itemData.map((item, index) => {
              if (index < 5) {
                if (type === "file") {
                  return (<Col span={12}><FileCard href={item.href} title={item.title} info={item.info} editUrl={item.editUrl} /></Col>);
                } else if (type === "book") {
                  return (<Col span={12}><BookCard href={item.href} title={item.title} /></Col>);
                }
              }
            })}
            <Col span={12}><MoreCard href={""}/></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Card;
