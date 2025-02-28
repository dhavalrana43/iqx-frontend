"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import CustomImage from "@/_components/custom-image/CustomImage";
import CustomButton from "@/_components/custom-button/CustomButton";
import { DownArrow } from "@/_svg/DownArrow";

const MenuBurger = () => {
  return (
    <svg
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.43345C3 3.81221 3.50368 3.30859 4.125 3.30859H19.875C20.4963 3.30859 21 3.81221 21 4.43345V5.78327C21 6.40451 20.4963 6.90812 19.875 6.90812H4.125C3.50368 6.90812 3 6.40451 3 5.78327V4.43345Z"
        fill="white"
      />
      <path
        d="M3 11.6337C3 11.0124 3.50368 10.5088 4.125 10.5088H19.875C20.4963 10.5088 21 11.0124 21 11.6337V12.9835C21 13.6047 20.4963 14.1084 19.875 14.1084H4.125C3.50368 14.1084 3 13.6047 3 12.9835V11.6337Z"
        fill="white"
      />
      <path
        d="M4.125 17.7091C3.50368 17.7091 3 18.2127 3 18.8339V20.1837C3 20.805 3.50368 21.3086 4.125 21.3086H19.875C20.4963 21.3086 21 20.805 21 20.1837V18.8339C21 18.2127 20.4963 17.7091 19.875 17.7091H4.125Z"
        fill="white"
      />
      <path
        d="M3 4.43345C3 3.81221 3.50368 3.30859 4.125 3.30859H19.875C20.4963 3.30859 21 3.81221 21 4.43345V5.78327C21 6.40451 20.4963 6.90812 19.875 6.90812H4.125C3.50368 6.90812 3 6.40451 3 5.78327V4.43345Z"
        stroke="white"
      />
      <path
        d="M3 11.6337C3 11.0124 3.50368 10.5088 4.125 10.5088H19.875C20.4963 10.5088 21 11.0124 21 11.6337V12.9835C21 13.6047 20.4963 14.1084 19.875 14.1084H4.125C3.50368 14.1084 3 13.6047 3 12.9835V11.6337Z"
        stroke="white"
      />
      <path
        d="M4.125 17.7091C3.50368 17.7091 3 18.2127 3 18.8339V20.1837C3 20.805 3.50368 21.3086 4.125 21.3086H19.875C20.4963 21.3086 21 20.805 21 20.1837V18.8339C21 18.2127 20.4963 17.7091 19.875 17.7091H4.125Z"
        stroke="white"
      />
    </svg>
  );
};

const MenuCross = () => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 4.01429L19.9857 2L12 9.98571L4.01429 2L2 4.01429L9.98571 12L2 19.9857L4.01429 22L12 14.0143L19.9857 22L22 19.9857L14.0143 12L22 4.01429Z"
        fill="#ffffff"
      />
    </svg>
  );
};

const HeaderNav = ({ navData }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const BrandLogo = () => {
    return (
      <Link href={navData?.logo?.url ? navData?.logo?.url : "/"}>
        <CustomImage
          alt={navData?.logo?.text}
          height={87}
          src={navData?.logoImage?.url ?? "/logo.svg"}
          width={152}
        />
      </Link>
    );
  };

  return (
    <Navbar
      classNames={{
        wrapper: "xl:px-0 px-3 !container",
        base: "bg-steel",
        menu: "bg-steel",
      }}
      height={126}
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      shouldHideOnScroll={isMenuOpen ? false : true}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <BrandLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {navData?.navigations &&
          navData?.navigations?.map((item: any) => (
            <Dropdown key={item?.documentId}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={
                      item?.subMenu?.length > 0 ? (
                        <DownArrow fill="white" />
                      ) : null
                    }
                    radius="sm"
                    variant="light"
                  >
                    <Link
                      className="w-full flex"
                      href={item?.url ? item?.url : ""}
                    >
                      {item?.title}
                    </Link>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              {item?.subMenu?.length > 0 && (
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item?.subMenu?.map((value: any) => (
                    <DropdownItem key={value?.id}>
                      <Link
                        className="w-full flex"
                        href={value?.url ? value?.url : ""}
                      >
                        {value?.title}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </Dropdown>
          ))}
      </NavbarContent>

      {navData?.ctaButton != null && (
        <NavbarContent className="hidden lg:flex gap-4" justify="end">
          {navData?.ctaButton?.map((item: any, index: number) => (
            <NavbarItem key={index} className="hidden lg:flex">
              <div>
                <CustomButton
                  btnText={item?.text}
                  href={item?.url}
                  isExternal={item?.isExternal}
                  variant={item?.variant}
                />
              </div>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={isMenuOpen ? <MenuCross /> : <MenuBurger />}
        />
      </NavbarContent>
      <NavbarMenu>
        {navData?.navigations &&
          navData?.navigations?.map((item: any) => (
            <Dropdown key={item?.documentId}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={
                      item?.subMenu?.length > 0 ? (
                        <DownArrow fill="white" />
                      ) : null
                    }
                    radius="sm"
                    variant="light"
                  >
                    <Link
                      className="w-full flex"
                      href={item?.url ? item?.url : ""}
                      onClick={() =>
                        item?.url ? setIsMenuOpen(false) : setIsMenuOpen(true)
                      }
                    >
                      {item?.title}
                    </Link>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              {item?.subMenu && item?.subMenu?.length > 0 && (
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item?.subMenu?.map((value: any) => (
                    <DropdownItem key={value?.id}>
                      <Link
                        className="w-full flex"
                        href={value?.url ? value?.url : ""}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {value?.title}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </Dropdown>
          ))}

        {navData?.ctaButton != null && (
          <>
            {navData?.ctaButton.map((item: any, index: number) => (
              <NavbarMenuItem key={index}>
                <CustomButton
                  btnText={item?.text}
                  href={item?.url}
                  isExternal={item?.isExternal}
                  variant={item?.variant}
                />
              </NavbarMenuItem>
            ))}
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderNav;
