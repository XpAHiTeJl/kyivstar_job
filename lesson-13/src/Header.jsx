import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "./component/Navigation";
import NavigationMobile from "./component/NavigationMobile";
import Logo from "./component/Logo";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Events", href: "#" },
    { name: "Products", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <header className="header-img bg-white ">
      <div className="flex flex-col mx-3  lg:mx-56  ">
        <div className=" inset-x-0 top-0 z-50  ">
          <nav
            className="flex items-center justify-between  pt-4 lg:pt-8"
            aria-label="Global"
          >
            <Logo />
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Navigation navigation={navigation} />
          </nav>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <NavigationMobile navigation={navigation} />
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
        <div className="  ">
          <div className=" max-w-3xl py-32 sm:py-48 lg:py-56 	">
            <div data-aos="flip-left" className="border-4 p-10">
              <span className="text-4xl  font-light	  sm:text-8xl  uppercase text-white    ">
                immersive experiences that deliver
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
