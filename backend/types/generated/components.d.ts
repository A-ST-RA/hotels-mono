import type { Schema, Attribute } from '@strapi/strapi';

export interface HotelComponentsRoom extends Schema.Component {
  collectionName: 'components_hotel_components_rooms';
  info: {
    displayName: 'Room';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hotel-components.room': HotelComponentsRoom;
    }
  }
}
