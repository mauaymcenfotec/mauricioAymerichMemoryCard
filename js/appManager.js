import { div } from "./libs/html.js"
export class AppManager {
    constructor() {
        let mainContainer = div(document.body, { className: 'mainContainer' });
        this.mainContainer.className = 'mainContainer';
        //document.body.appendChild(this.mainContainer);

        //ToDo Create navViewController

        this.navViewController = div(document.body, null);
        this.navViewController.className = 'controllerContainer';
        this.mainContainer.appendChild(this.navViewController);


        this.controllerContainer = document.createElement('div');
        this.controllerContainer.className = 'controllerContainer';
        this.mainContainer.appendChild(this.controllerContainer);

    }
}