import type { Schema, Attribute } from '@strapi/strapi';

export interface HotelComponentsAddress extends Schema.Component {
  collectionName: 'components_hotel_components_addresses';
  info: {
    displayName: 'address';
    icon: 'sun';
  };
  attributes: {
    title: Attribute.String;
    longitude: Attribute.Float;
    latitude: Attribute.Float;
  };
}

export interface HotelComponentsRoom extends Schema.Component {
  collectionName: 'components_hotel_components_rooms';
  info: {
    displayName: 'Room';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    accommodationRules: Attribute.Relation<
      'hotel-components.room',
      'oneToMany',
      'api::accommodation-rule.accommodation-rule'
    >;
    address: Attribute.Component<'hotel-components.address'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotel-components.address': HotelComponentsAddress;
      'hotel-components.room': HotelComponentsRoom;
    }
  }
}
