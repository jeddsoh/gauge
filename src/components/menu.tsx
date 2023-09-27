'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link, Button } from "@nextui-org/react";


export default function Menu() {
  return (
    <Navbar>
      <NavbarBrand>
        {`[`} gauge {`]`}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link href="#">
                About
            </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="left">
        <NavbarItem>
            <Button variant="ghost">
                Get in Touch
            </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
