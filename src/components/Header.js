import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut } from "next-auth/react";
import { selectItems } from "../slices/basketSlice";
import logo1 from './Myimages/logo1.png';
import Image from "next/image";
import { MyShop } from './MyShop';
import Product from './Product';

function Header({products}) {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    // Call handleResize on initial render
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    
    // Perform the search logic here based on the searchQuery state
    // For example, you can filter the products based on the searchQuery
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Pass the filtered products to the search results page
    router.push({
      pathname: "/search",
      query: { query: searchQuery },
      state: { products: filteredProducts },
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white md:h-24 shadow-md">
      <header>
        {/*top nav*/}
        <div className="flex items-center justify-between">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 md:mt-5 md:ml-7">
            <Image
              onClick={() => router.push("/")}
              src={logo1}
              width={150}
              height={70}
              objectFit="contain"
              className="cursor-pointer sm:hidden"
            />
        
          </div>

          <div className="md:hidden">
             <SearchIcon className="h-6 ml-6 text-blue-900" />
          </div>

          {/*search*/}
          
          {/*right*/}
          <div className="text-blue-900 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            

            <div onClick={() => router.push("/checkout")} className="relative cursor-pointer link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
          </div>
        </div>

        {/*bottom nav*/}
        {isSmallScreen && isMenuOpen && (
          <div className="flex flex-col text-center text-white text-sm bg-blue-500 transition-all duration-5000">
            <p className="link border-b border-white p-2" onClick={() => router.push("/")}>
              Home
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/Shop")}>
              Shops
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/Blogpage")}>
              Blog
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/Contact")}>
              Contact Us
            </p>
            <p className="link border-b border-white p-2" onClick={() => router.push("/classes")}>
              Binary Classes
            </p>
          
            <p className="link border-b border-white p-2" onClick={signOut}>
              Logout
            </p>
          </div>
        )}

        <div className={`flex items-center space-x-6 p-2 pl-6 md:justify-center md:-mt-14 -mt-4 md:h-8 bg-white text-blue-900 md:text-lg font-bold text-sm transition-all duration-2000 ${isMenuOpen ? "menu-open" : ""}`}>
          <p className="link flex items-center md:hidden" onClick={handleMenuClick}>
            <MenuIcon className="h-6 -ml-4 md:hidden" />
          </p>
          {isSmallScreen && !isMenuOpen && (
            <>
              <p className="link hidden" onClick={() => router.push("/")}>
                Home
              </p>
              <p className="link hidden" onClick={() => router.push("/Shop")}>
                Shops
              </p>
              <p className="link hidden" onClick={() => router.push("/Blogpage")}>
                Blog
              </p>
              <p className="link hidden" onClick={() => router.push("/Contact")}>
                Contact Us
              </p>
              <p className="link hidden" onClick={() => router.push("/classes")}>
                Binary Classes
              </p>
              <p className="link hidden" onClick={signOut}>
                Logout
              </p>
            </>
          )}
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/")}>Home</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/Shop")}>Shops</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/Blogpage")}>Blog</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/Contact")}>Contact Us</p>
          <p className="link hidden lg:inline-flex" onClick={() => router.push("/classes")}>Binary Classes</p>
          <div onClick={signOut} className="cursor-pointer link">
              <p className="link hidden lg:inline-flex">
                Logout
              </p>
          </div>
          <p className="text-sm text-yellow-600">
            Up to 20% Discount For Resellers
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;

