import Image from "next/image";

const CardArticle = ({ author, title, content, image }) => {
  return (
    <div className='CardArticle'>
      <Image src={image} alt='article image' />
      <div className='CardArticle__wrapper'>
        <p className='CardArticle__author'>By {author}</p>
        <h2 className='CardArticle__title'>{title}</h2>
        <p className='CardArticle__content'>{content}</p>
      </div>
    </div>
  );
};

export default CardArticle;
