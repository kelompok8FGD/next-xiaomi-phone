import Link from "next/link";

/* eslint-disable react/prop-types */
const List = (props) => {
  const { title, redirect, text, className } = props;
  return (
    <li className={`navigation__item px-[8px] lg:px-[16px] ${className}`}>
      <Link
        href={redirect}
        className="px-[8px] lg:px-[16px] h-full flex items-center text-base link-border "
        aria-label={text}
      >
        {title}
      </Link>
    </li>
  );
};

export default List;
