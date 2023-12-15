import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const MentorCard = ({
  name,
  imgUrl,
  description,
  twitterUrl,
  linkedinUrl,
}: {
  name: string;
  imgUrl: string;
  description: string;
  twitterUrl: string;
  linkedinUrl: string;
}) => {
  return (
    <Card className="w-36 h-72 md:w-64 md:h-96 bg-black/0 flex flex-col justify-between rounded-sm mx-1 md:mx-5">
      <CardContent className="w-full py-3 md:py-7">
        <div className="flex justify-center">
          <Image src={imgUrl} alt="pfp" width={150} height={200} />
        </div>
      </CardContent>

      <CardHeader className="w-full flex flex-col gap-2 md:gap-5 justify-center">
        <CardTitle className="mx-auto text-center text-md md:text-lg font-pixelate text-white">
          {name}
        </CardTitle>
        <div className="flex justify-center">
          <Link
            href={twitterUrl}
            className={cn(buttonVariants({ variant: "link" }), "text-white")}
          >
            <Twitter />
          </Link>

          <Link
            href={linkedinUrl}
            className={cn(buttonVariants({ variant: "link" }), "text-white")}
          >
            <Linkedin />
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

export default MentorCard;
