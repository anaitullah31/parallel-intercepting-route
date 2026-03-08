import Link from "next/link";

export default function NavLink({ path, children }) {
  return (
    <Link className="font-semibold" href={path}>
      {children}
    </Link>
  );
}
