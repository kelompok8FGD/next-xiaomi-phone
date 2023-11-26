/* eslint-disable react/prop-types */
import Link from "next/link";
const ImgFlagship = (props) => {
  const { PhonePicDesktop, PhonePicMobile, id } = props;
  return (
    <a href={`/detail/${id}`}>
      <picture className="w-full h-[460px]">
        <source media="(min-width: 768px)" srcSet={`${PhonePicDesktop}`} />
        <img
          src={`${PhonePicMobile}`}
          alt="phone1"
          className="inset-0 object-cover w-full h-[460px]"
        />
      </picture>
    </a>
  );
};

export default ImgFlagship;
