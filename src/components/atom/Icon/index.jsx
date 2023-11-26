import Link from "next/link";

/* eslint-disable react/prop-types */
const Icon = (props) => {
  const { redirect, classname } = props;
  return (
    <div className="navigation__shortcut">
      <li className="navigation__item shortcut__item">
        <div role="button" tabIndex="0">
          <div className="shortcut__item--wrapper  ">
            <Link href="/home">
              <i
                className={`micon micon-${classname} shortcut__icon px-[8px] lg:px-[16px]`}
              ></i>
            </Link>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Icon;
