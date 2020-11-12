import React from "react";
import { gql, useQuery } from "@apollo/client";

const FIVE_LAUNCHES = gql`
  query GetRates {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      details
      links {
        video_link
      }
    }
  }
`;

const LaunchesCpnt = () => {
  const { loading, error, data } = useQuery(FIVE_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="launchesWrapper">
      {data.launches.map((launch) => (
        <div className="wrapper">
          <h2>{launch.rocket.rocket_name}</h2>
          <p>{launch.launch_date_utc}</p>
          <p>{launch.launch_success}</p>
          <p>{launch.details}</p>
          <a href={`${launch.links.video_link}`}>Video</a>
        </div>
      ))}
    </div>
  );
};

export default LaunchesCpnt;
