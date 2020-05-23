import React from 'react';
import './Homepage.scss';
import Img1 from '../../assets/img/homepage1.png';
import Img2 from '../../assets/img/homepage2.jpg';

export const Homepage = () => {
  return (
    <div className="row homepage">
      <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
        <div>
          <img alt="" src={Img1} />
          <p>Project được lấy dữ liệu và phân tích từ trang web VnExpress.vn</p>
        </div>
      </div>
      <div className="col-md-8 col-sm-12 d-flex justify-content-center align-items-center">
        <img alt="" src={Img2} className="img2" />
      </div>
    </div>
  );
};
