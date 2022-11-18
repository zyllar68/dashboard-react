import Image from "next/image";

const infoItem = ({ image, title, article }) => {
  return (
    <div className='infoItem'>
      <Image src={image} alt='info item icon' />
      <h2>{title}</h2>
      <p>{article}</p>
    </div>
  );
};

export default infoItem;
