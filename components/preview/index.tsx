import { WingBlank } from 'antd-mobile';
import React from 'react';
import Image from 'next/image'
const data = [];

export default function Preview(props) {
  const { imagePath } = props;
  if (imagePath) {
    return (
        <Image
          src={imagePath}
          alt="Picture of the author"
          width={300}
          height={300}>
        </Image>
    );
  } else {
    return (
      null
    );
  }
}


