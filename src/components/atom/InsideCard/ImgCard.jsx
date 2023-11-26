import Link from "next/link";

/* eslint-disable react/prop-types */
const ImgCard = (props) => {
  const { PhonePic, id } = props;
  return (
    <>
      <picture className="md:flex md:items-center md:justify-center md:mt-0 pb-5">
        <a href={`/detail/${id}`}>
          <img
            src={`${PhonePic}`}
            alt="phone3b"
            className="h-[144px] w-[144px] md:h-[260px] md:w-[260px] pb-5"
          />
        </a>
      </picture>
    </>
  );
};

export default ImgCard;
