import NavLink from "./NavLink";

export default function Header() {
  return (
    <div className="p-6 flex items-center justify-between text-center border-b border-gray-400">
      <NavLink path="/">HOME</NavLink>
      <div>
        <NavLink path="/gallery">GALLERY</NavLink>
      </div>
    </div>
  );
}
