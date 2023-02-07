import React from "react";
import Button from "../Components/Button";
import categoryCardData from "../Components/Home/categoryCardData";
import CategoryCard from "../Components/Home/CategoryCard";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="flex flex-row bg-peach hero-section">
        <div className="grid gap-4 p-10 content-center">
          <h1 className="text-primary-800">
            Empowering and Enabling People with Disabilities since 1969
          </h1>
          <p className="font-DM text-lg font-normal">
            Welcome to Handicaps Welfare Association blah
          </p>

          <Button text={"Read about Us"} link={`/About-Us`} />
        </div>
        <div>
          <img src="src/Assets/shujun/homepage/hero/hero_image.jpg" alt="" />
        </div>
      </div>
      <div className="category">
        <h1>We believe in the power of the collective</h1>
        <p>
          Everyone has a part to play to make society more safe and inclusive
          for everyone. Select the profile that best matches you.
        </p>
        {categoryCardData.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              img={item.img}
              subheader={item.subheader}
              body={item.body}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
