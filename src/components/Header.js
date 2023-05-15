import React from "react";
import Image from "next/image";
import {
  FilterIcon,
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderButton from "./HeaderButton";
function Header() {
  return (
    <header style={{ background: "#FFFCFC" }}>
      {/* Top nav */}
      <div className="px-10" style={{ background: "#FFFCFC" }}>
        <div
          className="flex items-center p-1 flex-grow py-5 border-b-2 border-black border-solid relative"
          style={{
            color: "#3B3C3C",
          }}
        >
          {/* Left */}
          <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap justify-around">
            <div className="link">
              <p className="font-regular md:text-lg">Home</p>
            </div>
            <div className="link">
              <p className="font-regular md:text-lg">About Us</p>
            </div>
          </div>

          {/* Logo */}
          <div className="text-black hidden sm:flex items-center rounded-md flex-grow justify-around">
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                transform: "translate(50%)",
              }}
            >
              <p className="font-regular text-4xl">Naari</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap justify-around">
            <HeaderButton Icon={SearchIcon} text={"Search"} />
            <HeaderButton Icon={FilterIcon} text={"Filters"} />
            <HeaderButton Icon={HeartIcon} text={"Wishlist"} />
            <HeaderButton Icon={ShoppingCartIcon} text={"Cart"} />
            <Link href="/login">
              <HeaderButton Icon={UserIcon} text={"Profile"} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div>
        <div className="flex items-center space-x-3 p-2 pl-6 text-md justify-around mx-96 my-3">
          <p className="link">Dresses</p>
          <p className="link hidden lg:inline-flex">Bottoms</p>
          <p className="link hidden lg:inline-flex">Tops</p>
          <p className="link hidden lg:inline-flex">Traditional</p>
          <p className="link hidden lg:inline-flex">Accessories</p>
          <p className="link hidden lg:inline-flex">Footwear</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
