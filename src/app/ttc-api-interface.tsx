export interface TTCApiRoot {
    total: number
    lastUpdated: string
    routes: TTCRoute[]
    accessibility: TTCAccessibilityAlert[]
    siteWide: unknown
    siteWideCustom: SiteWideCustom[]
    generalCustom: unknown[]
    stops: unknown[]
    status: string
  }
  
  export interface TTCRoute {
    id: string
    priority: number
    alertType: string
    lastUpdated: string
    activePeriod: TTCActivePeriod
    activePeriodGroup: string[]
    routeOrder: number
    route: string
    routeBranch?: string
    routeTypeSrc?: string
    routeType: string
    stopStart?: string
    stopEnd?: string
    title: string
    description: string
    url: string
    urlPlaceholder?: string
    accessibility: string
    effect?: string
    effectDesc?: string
    severityOrder: number
    severity: string
    customHeaderText?: string
    headerText?: string
    stopIDList: string[]
    stopNameList: unknown[]
    stopRouteList: unknown[]
  }
  
  export interface TTCActivePeriod {
    start: string
    end: string
  }
  
  export interface TTCAccessibilityAlert {
    id: string
    priority: number
    alertType: string
    lastUpdated: string
    activePeriod: TTCActivePeriod
    activePeriodGroup: string[]
    routeOrder: number
    route: string
    routeBranch: string
    routeTypeSrc: string
    routeType: string
    stopStart: unknown
    stopEnd: unknown
    title: string
    description: string
    url: string
    urlPlaceholder: string
    accessibility: string
    effect: string
    effectDesc: string
    severityOrder: number
    severity: string
    customHeaderText: string
    headerText: string
    stopIDList: string[]
    stopNameList: unknown[]
    stopRouteList: unknown[]
  }

  
  export interface SiteWideCustom {
    id: string
    priority: number
    alertType: string
    lastUpdated: string
    activePeriod: TTCActivePeriod
    activePeriodGroup: string[]
    routeOrder: number
    route: string
    routeBranch: unknown
    routeTypeSrc: unknown
    routeType: string
    stopStart: unknown
    stopEnd: unknown
    title: string
    description: string
    url: string
    urlPlaceholder: unknown
    accessibility: string
    effect: unknown
    effectDesc: unknown
    severityOrder: number
    severity: string
    customHeaderText: string
    headerText: unknown
    stopIDList: unknown[]
    stopNameList: unknown[]
    stopRouteList: unknown[]
  }
  
