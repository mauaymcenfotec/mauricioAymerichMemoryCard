import { MenuController } from "./controllers/menuController/menuController.js";
import { NavbarController } from "./controllers/navbarController/navbarController.js";
import { div, p, img } from "./libs/html.js"

export class AppManager {
    constructor() {
        this.mainContainer = div(document.body, { className: 'mainContainer' });

        //ToDo Create navViewController
        this.navbarController = new NavbarController(this, this.mainContainer);

        this.controllerContainer = div(this.mainContainer, { className: 'controllerContainer' });

        this.menuController = new MenuController(this, this.controllerContainer);

    }
}