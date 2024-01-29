// To parse this data:
//
//   import { Convert, ProductData } from "./file";
//
//   const productData = Convert.toProductData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ProductData {
  renegades: Renegades;
}

export interface Renegades {
  id: string;
  sku: string;
  name: string;
  subTitle: string;
  baseProduct: null;
  productInfoTitle: string;
  productInfoText: string;
  hasPdp: boolean;
  url: string;
  pageMode: string;
  icon: string;
  parts: RenegadesPart[];
  frameTypeOverride: string;
  useBaseProductName: boolean;
  preOrderCopyOverride: string;
  lensNameOverride: string;
  lensChoiceOverride: null;
  staticLensTech: null;
  lifestyleImagesOverride: any[];
  swatchIconOverride: null;
  swappableParts: any[];
  productHeroDesigns: ProductHeroDesign[];
  googleProductCategory: string;
  limitedEditionLogo: null;
  logoWidth: null;
  categories: Category[];
  showPackagingOptions: boolean;
  defaultPackagingOption: string;
  enableVirtualTryOn: boolean;
  vtoEffect: VtoEffect;
  vtoVariantName: string;
  _vtoTransformation: VtoTransformation[];
  oosUnlessInvited: null;
  invitationSegment: null;
  showReviews: boolean;
  useGenericReviews: boolean;
  tagText: string;
  tagTheme: string;
  includeInProductFeed: boolean;
  upsells: Upsell[];
  lineItemContent: any[];
  __typename: RenegadesTypename;
  basePrice: number;
  compare_at_amount_float: number;
  currency: Currency;
  doNotTrackStock: boolean;
  quantity: number;
  inboundQuantity: number;
}

export enum RenegadesTypename {
  BaseProductRecord = 'BaseProductRecord',
  ProductPartRecord = 'ProductPartRecord',
}

export interface VtoTransformation {
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  moveX: number;
  moveY: number;
  moveZ: number;
  __typename: string;
}

export interface Category {
  __typename: string;
  id: string;
  isComingSoon: boolean;
  contentFilter: ContentFilter | null;
  optionContent: OptionContent;
  heading: string;
}

export interface ContentFilter {
  title: string;
  value: string;
  __typename: string;
}

export interface OptionContent {
  value: Value;
  links: any[];
  __typename: string;
}

export interface Value {
  schema: string;
  document: Document;
}

export interface Document {
  type: string;
  children: DocumentChild[];
}

export interface DocumentChild {
  type: string;
  children: ChildChild[];
}

export interface ChildChild {
  type: string;
  value: string;
  marks?: string[];
}

export enum Currency {
  Gbp = 'GBP',
}

export interface RenegadesPart {
  id: string;
  skuPrefix: string;
  name: string;
  verboseName: string;
  icon: string;
  imageLayer: number;
  excludeFromAdFeeds: boolean;
  excludeFromProductDetails: null;
  followerOf: null;
  options: Option[];
  __typename: string;
}

export interface Option {
  id: string;
  name: string;
  partType: PartType;
  sku: string;
  vlt: string;
  swatchStyle: SwatchStyle;
  productOptions: ProductOption[];
  productNameOverride: string;
  cartDetailsOverride: any[];
  lifestyleImagesOverride: any[];
  isLimitedEdition: boolean | null;
  vtoEffectName: string;
  additionalProductSKU: string;
  tags: ContentFilter[];
  optionTech: OptionTech | null;
  __typename: RenegadesTypename;
  amount_float: number;
  compare_at_amount_float: number;
  currency_code: Currency;
  doNotTrackStock: boolean;
  quantity: number;
  inboundQuantity: number;
  inboundDeliveryDate?: Date;
}

export interface OptionTech {
  tech: string;
  icon: string;
  displayTitle: DisplayTitle;
  displaySubtitle: string;
  __typename: OptionTechTypename;
}

export enum OptionTechTypename {
  OptionTechConfigRecord = 'OptionTechConfigRecord',
}

export enum DisplayTitle {
  Standard = 'Standard',
  StandardPolarised = 'Standard Polarised',
  The8KOSupSup = '8KO<sup>®</sup>',
  The8KOSupSupPolarised = '8KO<sup>®</sup> Polarised',
  Thin = 'Thin',
  ThinPolarised = 'Thin Polarised',
}

export enum PartType {
  Frame = 'frame',
  Icon = 'icon',
  Lenses = 'lenses',
}

export interface ProductOption {
  description: Description;
  optionTech: OptionTech;
  __typename: ProductOptionTypename;
  id: ID;
  amount_float: number;
  scm_id: string;
}

export enum ProductOptionTypename {
  SkuOptionRecord = 'SkuOptionRecord',
}

export enum Description {
  TestDescriptionForPrescriptionExtraThin = 'Test description for Prescription - Extra Thin',
  TestDescriptionForPrescriptionExtraThinPolarised = 'Test description for Prescription - Extra Thin Polarised',
  TestDescriptionForPrescriptionThin = 'Test description for Prescription - Thin',
  TestDescriptionForPrescriptionThinPolarised = 'Test description for Prescription - Thin Polarised',
}

export enum ID {
  QZGVlsqkzN = 'qZGVlsqkzN',
  XRVQsPqkRX = 'XRVQsPqkRX',
  YNAoJsryRX = 'YNAoJsryRX',
  ZvGbsEpQjX = 'ZvGbsEpQjX',
}

export interface SwatchStyle {
  id: string;
  styles: string;
  image: Image | null;
  __typename: SwatchStyleTypename;
}

export enum SwatchStyleTypename {
  SwatchStyleRecord = 'SwatchStyleRecord',
}

export interface Image {
  src: string;
  __typename: string;
}

export interface ProductHeroDesign {
  enabled: boolean;
  parts: BaseProductElement[];
  __typename: string;
}

export interface BaseProductElement {
  sku: string;
  __typename: RenegadesTypename;
}

export interface Upsell {
  id: string;
  key: string;
  mode: string;
  name: string;
  showForProducts: ShowForProduct[];
  upsellProduct: UpsellProduct;
  upsellProducts: any[];
  leadPart: null;
  __typename: string;
}

export interface ShowForProduct {
  id: string;
  __typename: RenegadesTypename;
}

export interface UpsellProduct {
  id: string;
  _modelApiKey: string;
  sku: string;
  __typename: string;
  baseProduct?: BaseProductElement;
}

export interface VtoEffect {
  url: string;
  __typename: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toProductData(json: string): ProductData {
    return cast(JSON.parse(json), r('ProductData'));
  }

  public static productDataToJson(value: ProductData): string {
    return JSON.stringify(uncast(value, r('ProductData')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(', ')}]`;
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = '',
  parent: any = ''
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty('props')
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  ProductData: o(
    [{ json: 'renegades', js: 'renegades', typ: r('Renegades') }],
    false
  ),
  Renegades: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'sku', js: 'sku', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'subTitle', js: 'subTitle', typ: '' },
      { json: 'baseProduct', js: 'baseProduct', typ: null },
      { json: 'productInfoTitle', js: 'productInfoTitle', typ: '' },
      { json: 'productInfoText', js: 'productInfoText', typ: '' },
      { json: 'hasPdp', js: 'hasPdp', typ: true },
      { json: 'url', js: 'url', typ: '' },
      { json: 'pageMode', js: 'pageMode', typ: '' },
      { json: 'icon', js: 'icon', typ: '' },
      { json: 'parts', js: 'parts', typ: a(r('RenegadesPart')) },
      { json: 'frameTypeOverride', js: 'frameTypeOverride', typ: '' },
      { json: 'useBaseProductName', js: 'useBaseProductName', typ: true },
      { json: 'preOrderCopyOverride', js: 'preOrderCopyOverride', typ: '' },
      { json: 'lensNameOverride', js: 'lensNameOverride', typ: '' },
      { json: 'lensChoiceOverride', js: 'lensChoiceOverride', typ: null },
      { json: 'staticLensTech', js: 'staticLensTech', typ: null },
      {
        json: 'lifestyleImagesOverride',
        js: 'lifestyleImagesOverride',
        typ: a('any'),
      },
      { json: 'swatchIconOverride', js: 'swatchIconOverride', typ: null },
      { json: 'swappableParts', js: 'swappableParts', typ: a('any') },
      {
        json: 'productHeroDesigns',
        js: 'productHeroDesigns',
        typ: a(r('ProductHeroDesign')),
      },
      { json: 'googleProductCategory', js: 'googleProductCategory', typ: '' },
      { json: 'limitedEditionLogo', js: 'limitedEditionLogo', typ: null },
      { json: 'logoWidth', js: 'logoWidth', typ: null },
      { json: 'categories', js: 'categories', typ: a(r('Category')) },
      { json: 'showPackagingOptions', js: 'showPackagingOptions', typ: true },
      { json: 'defaultPackagingOption', js: 'defaultPackagingOption', typ: '' },
      { json: 'enableVirtualTryOn', js: 'enableVirtualTryOn', typ: true },
      { json: 'vtoEffect', js: 'vtoEffect', typ: r('VtoEffect') },
      { json: 'vtoVariantName', js: 'vtoVariantName', typ: '' },
      {
        json: '_vtoTransformation',
        js: '_vtoTransformation',
        typ: a(r('VtoTransformation')),
      },
      { json: 'oosUnlessInvited', js: 'oosUnlessInvited', typ: null },
      { json: 'invitationSegment', js: 'invitationSegment', typ: null },
      { json: 'showReviews', js: 'showReviews', typ: true },
      { json: 'useGenericReviews', js: 'useGenericReviews', typ: true },
      { json: 'tagText', js: 'tagText', typ: '' },
      { json: 'tagTheme', js: 'tagTheme', typ: '' },
      { json: 'includeInProductFeed', js: 'includeInProductFeed', typ: true },
      { json: 'upsells', js: 'upsells', typ: a(r('Upsell')) },
      { json: 'lineItemContent', js: 'lineItemContent', typ: a('any') },
      { json: '__typename', js: '__typename', typ: r('RenegadesTypename') },
      { json: 'basePrice', js: 'basePrice', typ: 0 },
      {
        json: 'compare_at_amount_float',
        js: 'compare_at_amount_float',
        typ: 0,
      },
      { json: 'currency', js: 'currency', typ: r('Currency') },
      { json: 'doNotTrackStock', js: 'doNotTrackStock', typ: true },
      { json: 'quantity', js: 'quantity', typ: 0 },
      { json: 'inboundQuantity', js: 'inboundQuantity', typ: 0 },
    ],
    false
  ),
  VtoTransformation: o(
    [
      { json: 'scaleX', js: 'scaleX', typ: 3.14 },
      { json: 'scaleY', js: 'scaleY', typ: 3.14 },
      { json: 'scaleZ', js: 'scaleZ', typ: 0 },
      { json: 'rotateX', js: 'rotateX', typ: 0 },
      { json: 'rotateY', js: 'rotateY', typ: 0 },
      { json: 'rotateZ', js: 'rotateZ', typ: 0 },
      { json: 'moveX', js: 'moveX', typ: 0 },
      { json: 'moveY', js: 'moveY', typ: 0 },
      { json: 'moveZ', js: 'moveZ', typ: 0 },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  Category: o(
    [
      { json: '__typename', js: '__typename', typ: '' },
      { json: 'id', js: 'id', typ: '' },
      { json: 'isComingSoon', js: 'isComingSoon', typ: true },
      {
        json: 'contentFilter',
        js: 'contentFilter',
        typ: u(r('ContentFilter'), null),
      },
      { json: 'optionContent', js: 'optionContent', typ: r('OptionContent') },
      { json: 'heading', js: 'heading', typ: '' },
    ],
    false
  ),
  ContentFilter: o(
    [
      { json: 'title', js: 'title', typ: '' },
      { json: 'value', js: 'value', typ: '' },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  OptionContent: o(
    [
      { json: 'value', js: 'value', typ: r('Value') },
      { json: 'links', js: 'links', typ: a('any') },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  Value: o(
    [
      { json: 'schema', js: 'schema', typ: '' },
      { json: 'document', js: 'document', typ: r('Document') },
    ],
    false
  ),
  Document: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'children', js: 'children', typ: a(r('DocumentChild')) },
    ],
    false
  ),
  DocumentChild: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'children', js: 'children', typ: a(r('ChildChild')) },
    ],
    false
  ),
  ChildChild: o(
    [
      { json: 'type', js: 'type', typ: '' },
      { json: 'value', js: 'value', typ: '' },
      { json: 'marks', js: 'marks', typ: u(undefined, a('')) },
    ],
    false
  ),
  RenegadesPart: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'skuPrefix', js: 'skuPrefix', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'verboseName', js: 'verboseName', typ: '' },
      { json: 'icon', js: 'icon', typ: '' },
      { json: 'imageLayer', js: 'imageLayer', typ: 0 },
      { json: 'excludeFromAdFeeds', js: 'excludeFromAdFeeds', typ: true },
      {
        json: 'excludeFromProductDetails',
        js: 'excludeFromProductDetails',
        typ: null,
      },
      { json: 'followerOf', js: 'followerOf', typ: null },
      { json: 'options', js: 'options', typ: a(r('Option')) },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  Option: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'partType', js: 'partType', typ: r('PartType') },
      { json: 'sku', js: 'sku', typ: '' },
      { json: 'vlt', js: 'vlt', typ: '' },
      { json: 'swatchStyle', js: 'swatchStyle', typ: r('SwatchStyle') },
      {
        json: 'productOptions',
        js: 'productOptions',
        typ: a(r('ProductOption')),
      },
      { json: 'productNameOverride', js: 'productNameOverride', typ: '' },
      { json: 'cartDetailsOverride', js: 'cartDetailsOverride', typ: a('any') },
      {
        json: 'lifestyleImagesOverride',
        js: 'lifestyleImagesOverride',
        typ: a('any'),
      },
      { json: 'isLimitedEdition', js: 'isLimitedEdition', typ: u(true, null) },
      { json: 'vtoEffectName', js: 'vtoEffectName', typ: '' },
      { json: 'additionalProductSKU', js: 'additionalProductSKU', typ: '' },
      { json: 'tags', js: 'tags', typ: a(r('ContentFilter')) },
      { json: 'optionTech', js: 'optionTech', typ: u(r('OptionTech'), null) },
      { json: '__typename', js: '__typename', typ: r('RenegadesTypename') },
      { json: 'amount_float', js: 'amount_float', typ: 0 },
      {
        json: 'compare_at_amount_float',
        js: 'compare_at_amount_float',
        typ: 0,
      },
      { json: 'currency_code', js: 'currency_code', typ: r('Currency') },
      { json: 'doNotTrackStock', js: 'doNotTrackStock', typ: true },
      { json: 'quantity', js: 'quantity', typ: 0 },
      { json: 'inboundQuantity', js: 'inboundQuantity', typ: 0 },
      {
        json: 'inboundDeliveryDate',
        js: 'inboundDeliveryDate',
        typ: u(undefined, Date),
      },
    ],
    false
  ),
  OptionTech: o(
    [
      { json: 'tech', js: 'tech', typ: '' },
      { json: 'icon', js: 'icon', typ: '' },
      { json: 'displayTitle', js: 'displayTitle', typ: r('DisplayTitle') },
      { json: 'displaySubtitle', js: 'displaySubtitle', typ: '' },
      { json: '__typename', js: '__typename', typ: r('OptionTechTypename') },
    ],
    false
  ),
  ProductOption: o(
    [
      { json: 'description', js: 'description', typ: r('Description') },
      { json: 'optionTech', js: 'optionTech', typ: r('OptionTech') },
      { json: '__typename', js: '__typename', typ: r('ProductOptionTypename') },
      { json: 'id', js: 'id', typ: r('ID') },
      { json: 'amount_float', js: 'amount_float', typ: 0 },
      { json: 'scm_id', js: 'scm_id', typ: '' },
    ],
    false
  ),
  SwatchStyle: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'styles', js: 'styles', typ: '' },
      { json: 'image', js: 'image', typ: u(r('Image'), null) },
      { json: '__typename', js: '__typename', typ: r('SwatchStyleTypename') },
    ],
    false
  ),
  Image: o(
    [
      { json: 'src', js: 'src', typ: '' },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  ProductHeroDesign: o(
    [
      { json: 'enabled', js: 'enabled', typ: true },
      { json: 'parts', js: 'parts', typ: a(r('BaseProductElement')) },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  BaseProductElement: o(
    [
      { json: 'sku', js: 'sku', typ: '' },
      { json: '__typename', js: '__typename', typ: r('RenegadesTypename') },
    ],
    false
  ),
  Upsell: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'key', js: 'key', typ: '' },
      { json: 'mode', js: 'mode', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      {
        json: 'showForProducts',
        js: 'showForProducts',
        typ: a(r('ShowForProduct')),
      },
      { json: 'upsellProduct', js: 'upsellProduct', typ: r('UpsellProduct') },
      { json: 'upsellProducts', js: 'upsellProducts', typ: a('any') },
      { json: 'leadPart', js: 'leadPart', typ: null },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  ShowForProduct: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: '__typename', js: '__typename', typ: r('RenegadesTypename') },
    ],
    false
  ),
  UpsellProduct: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: '_modelApiKey', js: '_modelApiKey', typ: '' },
      { json: 'sku', js: 'sku', typ: '' },
      { json: '__typename', js: '__typename', typ: '' },
      {
        json: 'baseProduct',
        js: 'baseProduct',
        typ: u(undefined, r('BaseProductElement')),
      },
    ],
    false
  ),
  VtoEffect: o(
    [
      { json: 'url', js: 'url', typ: '' },
      { json: '__typename', js: '__typename', typ: '' },
    ],
    false
  ),
  RenegadesTypename: ['BaseProductRecord', 'ProductPartRecord'],
  Currency: ['GBP'],
  OptionTechTypename: ['OptionTechConfigRecord'],
  DisplayTitle: [
    'Standard',
    'Standard Polarised',
    '8KO<sup>®</sup>',
    '8KO<sup>®</sup> Polarised',
    'Thin',
    'Thin Polarised',
  ],
  PartType: ['frame', 'icon', 'lenses'],
  ProductOptionTypename: ['SkuOptionRecord'],
  Description: [
    'Test description for Prescription - Extra Thin',
    'Test description for Prescription - Extra Thin Polarised',
    'Test description for Prescription - Thin',
    'Test description for Prescription - Thin Polarised',
  ],
  ID: ['qZGVlsqkzN', 'XRVQsPqkRX', 'YNAoJsryRX', 'ZvGbsEpQjX'],
  SwatchStyleTypename: ['SwatchStyleRecord'],
};
