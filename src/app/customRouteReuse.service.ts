import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  handlers: { [key: string]: any } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }
    return route.data.key || true;
  }

  store(route: ActivatedRouteSnapshot, handle: {}): void {
    console.log('store ran',route,handle)
    if ((route.routeConfig.path || route.data.key) && route.data.shouldReuse) {
      this.handlers[this.getKey(route)] = handle;
    }
    while (document.getElementsByTagName('mat-tooltip-component').length > 0) { document.getElementsByTagName('mat-tooltip-component')[0].remove(); }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return route.data && route.data.key && !!this.handlers[this.getKey(route)];
  }

  retrieve(route: ActivatedRouteSnapshot): any {
    if (!route.routeConfig) return null;
    if(route.routeConfig.loadChildren) return null;
    console.log(route,this.getKey(route),this.handlers)
    const handle: any = route.data && route.data.key && this.handlers[this.getKey(route)];
    console.log('handle:',handle)
    let componentRef;
    if(handle && handle['componentRef']){
      componentRef = handle['componentRef'];
      console.log('handle:',handle)
    }
    // const componentRef = handle['componentRef'] || null;

    // Since router reuse does not invoke any lifecycle hooks,
    // create a custom hook that will be called each time a route is reloaded.
    // check if the reused component has the onAttach hook implemented
    if ( componentRef && componentRef.instance && typeof componentRef.instance['onAttach'] === 'function') {
      componentRef.instance['onAttach']();
    }

    if (handle)
      return handle;
  }

  shouldReuseRoute( future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot ): boolean {
    return !!future.routeConfig && (future.data.shouldReuse || future.routeConfig === curr.routeConfig);
  }

  private getKey(route: ActivatedRouteSnapshot): string {
    let path = route.pathFromRoot
      .map((el: ActivatedRouteSnapshot) =>
        el.routeConfig ? el.routeConfig.path : ''
      )
      .filter((str) => str.length > 0)
      .join('/');
      return path
  }
}