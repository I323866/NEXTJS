import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { Image } from 'antd';
import React from 'react';
// import Image from 'next/image'
const data = [];

export default function ImageControl(props) {
  const { id, files, imagePath } = props;
  const image = files && files[files.length - 1] && files[files.length - 1].url ? files[files.length - 1].url : imagePath
  if (
    files && files[files.length - 1] && files[files.length - 1]
  ) {
  }
  if (image) {
    return (
      <WingBlank>
        <ImagePicker
          files={files}
          onChange={props.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={true}
          multiple={false}
        />
        {/* <Image
          id={id ? id :　imagePath}
          src={image}
          alt="Picture of the author"
          width={200}
          height={200}
          layout="responsive"
        >
        </Image> */}
        <Image
          id={id ? id :　imagePath}
          width={450}
          src={image}
          preview={false}
        />
      </WingBlank>


    );
  } else {
    return (
      <WingBlank>
        <ImagePicker
          files={files}
          onChange={props.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={true}
          multiple={false}
        />
      </WingBlank>

    );
  }
}


