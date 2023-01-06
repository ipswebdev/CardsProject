import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import * as _ from 'lodash';


export class CustomRouteReuseStrategy implements RouteReuseStrategy {

    handlers: { [key: string]: DetachedRouteHandle } = {};

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return route.data.shouldReuse || false;
    }

    store(route: ActivatedRouteSnapshot, handle: {}): void {
      if (route.data.shouldReuse) {
        this.handlers[route.routeConfig.path] = handle;
      }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
      return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    }

    retrieve(route: ActivatedRouteSnapshot): {} {
      if (!route.routeConfig) return null;
      if ((route.routeConfig.path == "test-mod" || route.routeConfig.path == "test-mod-two") && this.handlers[route.routeConfig.path]) {
        this.handlers[route.routeConfig.path]['componentRef'].instance.ngOnInit();
      }
      // Since router reuse does not invoke any lifecycle hooks,
      // create a custom hook that will be called each time a route is reloaded.
      const handle = this.handlers[route.routeConfig.path];
      console.log('handlers',this.handlers,route)
      if(handle) {
        const componentRef = handle['componentRef'];
        // check if the reused component has the onAttach hook implemented
        if (componentRef && componentRef.instance && typeof componentRef.instance['onAttach'] === 'function') {
          componentRef.instance['onAttach'](`${route.params.outerTabIndex}${route.params.innerTabIndex}`);
        }
      }
      return this.handlers[route.routeConfig.path];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      return future.data.shouldReuse || false;
    }

    clear() {
      _.forIn(this.handlers, cmp => cmp && cmp['componentRef'] && cmp['componentRef'].destroy());
      this.handlers = {};
   }
}
