import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support Me
      </h1>
      <Button>Log In</Button>
      <Button>Sign In</Button>
    </>
  );
};

export default LandingPage;
