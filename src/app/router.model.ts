import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

export class MyRoutes {
    static myrouter = [
        {
            path: "home",
            component: HomeComponent
        },
        {
            path: "about",
            component: AboutComponent
        },
        {
            path: "contact",
            component: ContactComponent
        }
    ]
}