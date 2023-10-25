import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';

const TRACKS = gql`
    query TestQuery {
        tracksForHome {
            id
            title
            length
            thumbnail
            modulesCount
            author {
                id
                name
                photo
            }
        }
    }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return <Layout grid>{JSON.stringify(data)}</Layout>;
};

export default Tracks;
