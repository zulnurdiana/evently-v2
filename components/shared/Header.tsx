import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            width={128}
            height={32}
            alt="Evently"
          />
        </Link>
        <div className="flex justify-end w-32 gap-3"></div>
      </div>
    </header>
  );
};

export default Header;
