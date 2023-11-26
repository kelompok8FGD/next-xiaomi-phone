import Link from "next/link";

/* eslint-disable react/prop-types */
const ListItems = (props) => {
  const { title, redirect, text, className } = props;
  return (
    <li className={`navigation__item ${className}`}>
      <Link
        href={redirect}
        className="h-full flex items-center text-base link-border"
        aria-label={text}
      >
        {title}
      </Link>
    </li>
  );
};

export default ListItems;
