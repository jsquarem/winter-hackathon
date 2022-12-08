import React from 'react';

export default function BreadCrumb({ step }) {
  const imageArray = [
    'https://catcollection7-11.s3.us-east-2.amazonaws.com/BreadcrumbAboutYou.png',
    'https://catcollection7-11.s3.us-east-2.amazonaws.com/BreadcrumbSchool.png',
    'https://catcollection7-11.s3.us-east-2.amazonaws.com/BreadcrumbProfile.png',
    'https://catcollection7-11.s3.us-east-2.amazonaws.com/BreadcrumbProject.png'
  ];
  return (
    <div className="row">
      <div className="col-12 text-center pt-3">
        <img src={imageArray[step]} style={{ width: '70%' }} />
      </div>
    </div>
  );
}
