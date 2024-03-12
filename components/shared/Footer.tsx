import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex md:flex-row gap-4 p-5 text-center flex-col">
        <Image
          src="/assets/images/logo.svg"
          width={128}
          height={38}
          alt="logo"
        />
        <p>Evently. 2024 Alright Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
