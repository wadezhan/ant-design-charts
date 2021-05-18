import { Scene, ILayerConfig as L7ILayerConfig, IMapConfig } from '@antv/l7';
import {
  WorldLayer,
  CountryLayer,
  ProvinceLayer,
  CityLayer,
  CountyLayer,
  DrillDownLayer,
} from '@antv/l7-district';
import { CommonProps } from '../interface';

export type DistrictType =
  | 'WorldLayer'
  | 'CountryLayer'
  | 'ProvinceLayer'
  | 'CityLayer'
  | 'CountyLayer'
  | 'DrillDownLayer';

export type Datum = any[];

export type LayerOptions =
  | WorldLayer
  | CountryLayer
  | ProvinceLayer
  | CityLayer
  | CountyLayer
  | DrillDownLayer;

export interface ILayerConfig extends L7ILayerConfig {
  /** 图层类型 */
  type?: DistrictType;
  /** 图层数据 */
  data: Datum;
}

export type MapType = 'Mapbox' | 'GaodeMap';

export interface IMapDistrictConig {
  scene: Scene;
  type?: DistrictType;
  layerConfig: ILayerConfig;
}

export interface ISceneConfig {
  /** 是否显示 logo */
  logoVisible?: boolean;
  /** logo 位置 */
  logoPosition?: 'bottomright' | 'topright' | 'bottomleft' | 'topleft';
  /** 是否开启抗锯齿 */
  antialias?: boolean;
  /** 是否保留缓冲区数据 */
  preserveDrawingBuffer?: boolean;
}

export interface IMapSceneConig extends CommonProps {
  /** 地图配置项 */
  mapConfig: IMapConfig;
  /** 图层配置项 */
  layerConfig: ILayerConfig;
  /** 场景配置 */
  sceneConfig?: ISceneConfig;
  /** 附图 */
  attach?: Omit<IMapSceneConig, 'attachMap'>;
  /** 图表渲染完成回调 */
  onReady?: (scene: Scene, layer: LayerOptions | undefined) => void;
  style?: React.CSSProperties;
  className?: string;
}