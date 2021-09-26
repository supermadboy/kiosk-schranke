/* eslint-disable camelcase */
import PropTypes from 'prop-types';

export const Seo = {
  id: PropTypes.number.isRequired,
  metaTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
};

export interface Homepage {
  id: number,
  created_at: string,
  updated_at: string,
  seo: {
    metaTitle: string,
  }
}
