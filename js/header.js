document.addEventListener('DOMContentLoaded', () => {

    class HeaderController {
        static headerClass = "s-header";
        static headerTopClass = "s-header__top";
        static headerNavClass = "s-header__nav";

        constructor() {
            this.headerWrapper = document.querySelector(`.${HeaderController.headerClass}`);
            this.headerRect = this.headerWrapper.querySelector(`.${HeaderController.headerTopClass}`).getBoundingClientRect();
            this.headerNav = this.headerWrapper.querySelector(`.${HeaderController.headerNavClass}`);
            this.scrollPos = scrollY;

            addEventListener('scroll', this.scrollHandler.bind(this));
        }

        scrollHandler() {
            if (scrollY < this.headerWrapper.getBoundingClientRect().height) {
                this.headerNav.style.transform = `unset`;
                this.headerWrapper.style.height = `auto`;
            } else if (this.scrollPos > scrollY) {
                this.headerNav.style.transform = `unset`;
                this.headerWrapper.style.height = `auto`;
            } else {
                this.headerNav.style.transform = `translate(0, -100%)`;
                this.headerWrapper.style.height = `${this.headerRect.height}px`;
            }
            this.scrollPos = scrollY;
        }

    }

    class MenuController {

        static menuItemClass = "s-header-nav-item";
        static menuItemDropdownClass = "s-header-nav-item__dropdown";

        constructor() {
            this.menuItems = document.getElementsByClassName(MenuController.menuItemClass);

            for (let menuItem of this.menuItems) {
                this.setAlign(menuItem);
            }
        }

        setAlign(menuItemElement) {
            const dropdownElement = menuItemElement.querySelector(`.${MenuController.menuItemDropdownClass}`)

            if (!dropdownElement) return;

            const rect = menuItemElement.getBoundingClientRect();
            const widthPosition = rect.left;

            if (widthPosition <= innerWidth / 2) {
                dropdownElement.style.left = '0px';
            } else {
                dropdownElement.style.right = '0px';
            }
        }
    }

    /* MOUNTED */
    new HeaderController()
    new MenuController()
})