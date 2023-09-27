"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

//import Icons for Dropdown
import {
  Education,
  Enterprise,
  Code,
  Finance,
  ZAxis,
  SecurityServices,
} from "@carbon/icons-react";

export default function Menu() {
  return (
    <Navbar className="w-full" maxWidth="2xl" isBordered isBlurred>
      <NavbarBrand>
        <Link href="#" color="foreground" className="text-lg text-amber-500">
            {`[`} gauge {`]`}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link href="#" color="foreground">
            Services
          </Link>
        </NavbarItem>
        {/* Industries Dropdown */}
        <NavbarItem>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Link href="#" color="foreground">
                Industries
              </Link>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with icons"
              className="gap-2"
            >
              <DropdownItem
                key="new"
                shortcut="⌘1"
                startContent={<Enterprise size="20" />}
              >
                Civics and Transport
              </DropdownItem>
              <DropdownItem
                key="new"
                shortcut="⌘2"
                startContent={<Code size="20" />}
              >
                Developer Operations
              </DropdownItem>
              <DropdownItem
                key="new"
                shortcut="⌘3"
                startContent={<Education size="20" />}
              >
                Education Technology
              </DropdownItem>
              <DropdownItem
                key="new"
                shortcut="⌘4"
                startContent={<Finance size="20" />}
              >
                Financial Technology
              </DropdownItem>
              <DropdownItem
                key="new"
                shortcut="⌘5"
                startContent={<ZAxis size="20" />}
              >
                Gaming and Virtual Worlds
              </DropdownItem>
              <DropdownItem
                key="new"
                shortcut="⌘6"
                startContent={<SecurityServices size="20" />}
              >
                Information Security
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        {/* Case Studies Dropdown */}
        <NavbarItem>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Link href="#" color="foreground">
                Case Studies
              </Link>
            </DropdownTrigger>
            <DropdownMenu
              variant="faded"
              aria-label="Dropdown menu with icons"
              className="gap-2"
            >
              <DropdownItem key="new">
                Behavior and Identity in the Metaverse
              </DropdownItem>
              <DropdownItem key="new">
                Validating Research Hypotheses at Scale
              </DropdownItem>
              <DropdownItem key="new">
                Making the Case for Internal Tools
              </DropdownItem>
              <DropdownItem key="new">
                Visualizing Information Security Threat Vectors
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
