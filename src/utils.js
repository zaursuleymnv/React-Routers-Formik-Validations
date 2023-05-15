import { generatePath } from "react-router-dom";
import routes from "./routes";

export const getUrl = (path, params= {}) => {

    let lastRoute, url

    path.split('.').map(p => {
        if (!lastRoute) {
            lastRoute = routes.find(route => route.name === p)
            url = lastRoute.path
        }
        else {
            lastRoute = lastRoute.children.find(route => route.name === p)
            url += '/' + lastRoute.path
        }
    })

    return generatePath(url.replace(/\/\//gi, '/'), params)
}
