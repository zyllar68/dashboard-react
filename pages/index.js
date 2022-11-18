import Header from "@components/Header";
import TopNav from "@components/TopNav";
import HeroBanner from "@components/Hero";
import ColumnsSection from "@components/ColumnsSection";
import InfoItem from "@components/_subComponents/infoItem";
import CardArticle from "@components/_subComponents/CardArticle";

// images
import onlineBanking from "@assets/icon-online.svg";
import budgeting from "@assets/icon-budgeting.svg";
import onBoarding from "@assets/icon-onboarding.svg";
import openApi from "@assets/icon-api.svg";

import imageCurrency from "@assets/image-currency.jpg";
import imageRestaurant from "@assets/image-restaurant.jpg";
import imagePlane from "@assets/image-plane.jpg";
import imageConfetti from "@assets/image-confetti.jpg";

const contentList = [
  {
    image: onlineBanking,
    title: "Online Banking",
    article:
      "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.",
  },
  {
    image: budgeting,
    title: "Sample Budgeting",
    article:
      "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits",
  },
  {
    image: onBoarding,
    title: "Fast Onboarding",
    article:
      "We dont do branches. Open your account in minutes online and start taking control of your finances right away",
  },
  {
    image: openApi,
    title: "Open API",
    article:
      "Manange your savings, investments, pension, and much more from one account. tracking your money has never been easier.",
  },
];

const articleList = [
  {
    image: imageCurrency,
    author: "claire Robinsons",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single adskfjhajkdha daskjhd aksjhd aksjdh askjdhasjk",
  },
  {
    image: imageRestaurant,
    author: "wilson hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Out simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    image: imagePlane,
    author: "claire Robinsons",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single adskfjhajkdha daskjhd aksjhd aksjdh askjdhasjk",
  },
  {
    image: imageConfetti,
    author: "claire Robinsons",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single adskfjhajkdha daskjhd aksjhd aksjdh askjdhasjk",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <TopNav />
      <HeroBanner />
      <ColumnsSection
        bgGray
        title='Why choose EasyBank?'
        subTitle='We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before'
      >
        {contentList.map((item, index) => (
          <div className='item' key={index}>
            <InfoItem
              image={item.image}
              title={item.title}
              article={item.article}
            />
          </div>
        ))}
      </ColumnsSection>
      <ColumnsSection title='Latest Article'>
        {articleList.map((item, index) => (
          <div className='item' key={index}>
            <CardArticle
              image={item.image}
              author={item.author}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </ColumnsSection>
    </div>
  );
}
