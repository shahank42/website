import BinaryText from "./BinaryText";
import MentorCard from "./MentorCard";
import PageSection from "./PageSection";
import Marquee from "react-fast-marquee";

const MENTOR_INFO = [
  {
    name: "Shounak Ghosh 1",
    description: "something...",
    imgUrl: "https://avatars.githubusercontent.com/u/31540054",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shounak Ghosh 2",
    description: "something...",
    imgUrl: "https://avatars.githubusercontent.com/u/31540054",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shounak Ghosh 3",
    description: "something...",
    imgUrl: "https://avatars.githubusercontent.com/u/31540054",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shounak Ghosh 4",
    description: "something...",
    imgUrl: "https://avatars.githubusercontent.com/u/31540054",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const Mentors = () => {
  return (
    <PageSection id="mentors">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText
          className="text-white font-pixelate text-[2rem] md:text-[3rem]"
          reveal
        >
          Mentors
        </BinaryText>

        <span className="font-pixelate text-white md:text-[1.5rem]">
          Meet our amazing mentors
        </span>

        <div className="mt-10">
          <Marquee autoFill>
            {MENTOR_INFO.map((mentor) => (
              <MentorCard key={mentor.name} {...mentor} />
            ))}
          </Marquee>
        </div>
      </div>
    </PageSection>
  );
};

export default Mentors;
