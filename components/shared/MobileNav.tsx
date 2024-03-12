import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"assets/icons/menu.svg"}
            alt="logo"
            width={28}
            height={28}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 md:hidden bg-white">
          <Image
            src={"assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={28}
          />
          <Separator className="border-5 border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
