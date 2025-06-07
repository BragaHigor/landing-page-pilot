import Link from "next/link";
import Image from "next/image";

const Logo = () => {
   return (
      <Link href="">
         <Image src="/assets/img/logo.svg" alt="" width={230} height={48} />
      </Link>
   );
};

export default Logo;
