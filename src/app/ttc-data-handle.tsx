import { TTCRoute } from "./ttc-api-interface";

// The Simplified Route Alert that is extracted from the API

enum ServiceType {
  Subway,
  Bus,
  Streetcar
}

export interface RouteAlert {
  route: string
  title: string
  severity: string
  sevNum: number
  serviceType: ServiceType
}

export function sevStringToNumber(givenSeverityString: string) : number {
    switch(givenSeverityString) {
        case "Minor":
            return 1;
        case "Major":
            return 2;
        case "Critical":
            return 3;
        default:
            return 0;
    }
  }

  function routeToType(givenRoute: string): ServiceType {
    if (givenRoute === "1" || givenRoute === "2") {
      return ServiceType.Subway;
    } else if (givenRoute.startsWith("50")) {
      return ServiceType.Streetcar;
    } else {
      return ServiceType.Bus;
    }
  }
  
  // TTCRoute[] has a lot of stuff we don't need so this converts those 
  // entries to the simpler "RouteAlert" type which is only the junk we need.
  export function SimplifyRouteData(givenRoutes: TTCRoute[]) : Array<RouteAlert>{
    return givenRoutes.map(thisRoute => ({
        route: thisRoute.route,
        title: thisRoute.title,
        severity: thisRoute.severity,
        sevNum: sevStringToNumber(thisRoute.severity),
        serviceType: routeToType(thisRoute.route),
    }));
  }
  
  // TTC API has weird WEBSITE alerts that are for route 9999 so lets remove those
  export function filterRoutes(givenRoutes: Array<RouteAlert>) {
    for (let i = givenRoutes.length - 1; i >= 0; i--) {
        if (givenRoutes[i].route === "9999")
            givenRoutes.splice(i, 1);
    }
    return givenRoutes;
  }