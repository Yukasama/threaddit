"use client";

import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";

export const SideNavigator = () => {
  return (
    <SideNavigation
      fixedItems={
        <>
          <SideNavigationItem
            href="https://www.sap.com/index.html"
            icon="chain-link"
            target="_blank"
            text="External Link"
          />
          <SideNavigationItem icon="history" text="History" />
        </>
      }
      onSelectionChange={function _a() {}}>
      <SideNavigationItem text="Home" />
      <SideNavigationItem expanded icon="group" text="People">
        <SideNavigationSubItem text="From My Team" />
        <SideNavigationSubItem text="From Other Teams" />
      </SideNavigationItem>
      <SideNavigationItem icon="locate-me" selected text="Locations" />
      <SideNavigationItem icon="calendar" text="Events">
        <SideNavigationSubItem text="Local" />
        <SideNavigationSubItem text="Others" />
      </SideNavigationItem>
    </SideNavigation>
  );
};
