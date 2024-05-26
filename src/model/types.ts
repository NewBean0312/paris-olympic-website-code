import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type GnbType = {
  list: {
    name: string;
  }[];
};

export type PromotionType = {
  list: {
    icon: IconProp;
    name: string;
    content: string;
  }[];
};
