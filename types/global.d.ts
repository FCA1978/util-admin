/* 
    对应 `public/platform-config.json` 文件的类型声明
*/
interface PlatformConfigs {
  Version?: string;
  Title?: string;
  FixedHeader?: boolean;
  HiddenSideBar?: boolean;
  MultiTagsCache?: boolean;
  MaxTagsLevel?: number;
  KeepAlive?: boolean;
  Locale?: string;
  Layout?: string;
  Theme?: string;
  DarkMode?: boolean;
  OverallStyle?: string;
  Grey?: boolean;
  Weak?: boolean;
  HideTabs?: boolean;
  HideFooter?: boolean;
  Stretch?: boolean | number;
  SidebarStatus?: boolean;
  EpThemeColor?: string;
  ShowLogo?: boolean;
  ShowModel?: string;
  MenuArrowIconNoTransition?: boolean;
  CachingAsyncRoutes?: boolean;
  TooltipEffect?: Effect;
  ResponsiveStorageNameSpace?: string;
  MenuSearchHistory?: number;
  MapConfigure?: {
    amapKey?: string;
    options: {
      resizeEnable?: boolean;
      center?: number[];
      zoom?: number;
    };
  };
}

/* 
    与`PlatformConfigs`类型不同，这里是缓存到浏览器本地存储的类型声明
 */
interface StorageConfigs {
  version?: string;
  title?: string;
  fixedHeader?: boolean;
  hiddenSideBar?: boolean;
  multiTagsCache?: boolean;
  keepAlive?: boolean;
  locale?: string;
  layout?: string;
  theme?: string;
  darkMode?: boolean;
  grey?: boolean;
  weak?: boolean;
  hideTabs?: boolean;
  hideFooter?: boolean;
  sidebarStatus?: boolean;
  epThemeColor?: string;
  themeColor?: string;
  overallStyle?: string;
  showLogo?: boolean;
  showModel?: string;
  menuSearchHistory?: number;
  mapConfigure?: {
    amapKey?: string;
    options: {
      resizeEnable?: boolean;
      center?: number[];
      zoom?: number;
    };
  };
  username?: string;
}

interface GlobalPropertiesApi {
  $echarts: Echart;
  $storage: ResponsiveStorage;
  $config: PlatformConfigs;
}
