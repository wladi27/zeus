import clsx from "clsx";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";
import {
  HeaderUserMenu,
  Search,
  ThemeModeSwitcher
} from "../../../partials";
import { useLayout } from "../../core";
import { NavbarItemModules } from "./navbarItems/itemModules";

const itemClass = "ms-1 ms-md-4";
const btnClass =
  "btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px";
const userAvatarClass = "symbol-35px";
const btnIconClass = "fs-2";

export const Navbar = () => {
  const { config } = useLayout();
  return (
    <div className="app-navbar flex-shrink-0">
      <div className={clsx("app-navbar-item align-items-stretch", itemClass)}>
        <Search />
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <div id="kt_activities_toggle" className={btnClass}>
          <KTIcon iconName="eye" className={btnIconClass} />
        </div>
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <ThemeModeSwitcher
          toggleBtnClass={clsx("btn-active-light-primary btn-custom")}
        />
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <NavbarItemModules toggleBtnClass={clsx("btn-active-light-primary btn-custom")} />
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <div
          className={clsx("cursor-pointer symbol", userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <img src={toAbsoluteUrl("media/avatars/300-3.jpg")} alt="" />
        </div>
        <HeaderUserMenu />
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div
          className="app-navbar-item d-lg-none ms-2 me-n3"
          title="Show header menu"
        >
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px"
            id="kt_app_header_menu_toggle"
          >
            <KTIcon iconName="text-align-left" className={btnIconClass} />
          </div>
        </div>
      )}

      <div className={clsx("app-navbar-item", itemClass)}>
        <img
          alt="Logo"
          src={toAbsoluteUrl("media/logos/default-small.svg")}
          className="h-30px app-sidebar-logo-default"
        />
      </div>
    </div>
  );
};
