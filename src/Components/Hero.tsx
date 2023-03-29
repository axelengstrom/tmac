import { Component } from "../Types/common";
import Typography from "./Typography";

interface Props extends Component {
  heading: string;
  subHeading?: string;
}

const Hero = ({ heading, subHeading }: Props) => {
  return (
    <section className="relative bg-[url(images/TMAC_Fantasy04.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-zinc-900" />
      <div className="relative container mx-auto px-4 pt-32 pb-8 lg:flex lg:h-[80vh] lg:items-center lg:px-8">
        <div className="text-center sm:text-left">
          <Typography variant="logo">{heading}</Typography>
          {subHeading ? <Typography>{subHeading}</Typography> : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
