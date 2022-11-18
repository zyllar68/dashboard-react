import cx from "classnames";

const ColumnsSection = ({ title, subTitle, children, bgGray }) => {
  return (
    <div
      className={cx("FourColumnsSection", {
        "bg-gray": bgGray,
      })}
    >
      <div className='container container--pall'>
        <h1>{title}</h1>
        <p className='FourColumnsSection__subTitle'>{subTitle}</p>
        <div className='grid'>{children}</div>
      </div>
    </div>
  );
};

export default ColumnsSection;
