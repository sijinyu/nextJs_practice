import Link from "next/link";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}> home</a>
      </Link>

      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>aobutAs</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          background-color: red;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
