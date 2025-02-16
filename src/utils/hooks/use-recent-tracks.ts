// import useSWR from "swr";
// import { toast } from "react-hot-toast";
// import { fetchTracks } from "~/utils/fetchers";
// import { useEffect } from "react";

// export type Track = {
//   name: string;
//   artist: string;
//   id: string;
//   album: string;
//   image: string;
// };

// export type TrackData = Track[] & { message?: string };

// // Fetch user's recent tracks from Spotify history
// const useRecentTracks = (spotifyAccessToken: string) => {
//   const { data: trackData, error: trackDataError } = useSWR(
//     spotifyAccessToken
//       ? [`./api/spotify-fetch-tracks`, spotifyAccessToken]
//       : null,
//     fetchTracks
//   ) as { data: TrackData | undefined; error: Error };

//   useEffect(() => {
//     if (trackDataError) toast.error(trackDataError.message);
//   }, [trackDataError]);

//   return trackData;
// };

// export default useRecentTracks;


import useSWR from "swr";
import { toast } from "react-hot-toast";
import { fetchTracks } from "~/utils/fetchers";
import { useEffect } from "react";

export type Track = {
  name: string;
  artist: string;
  id: string;
  album: string;
  image: string;
};

export type TrackData = Track[] & { message?: string };

// Fetch user's recent tracks from Spotify history
const useRecentTracks = (spotifyAccessToken: string) => {
  const { data: trackData, error: trackDataError } = useSWR(
    spotifyAccessToken
      ? [`./api/spotify-fetch-tracks`, spotifyAccessToken]
      : null,
    fetchTracks
  ) as { data: TrackData | undefined; error: Error };

  // Ensure trackData is an array
  const tracks = Array.isArray(trackData) ? trackData : [];

  useEffect(() => {
    if (trackDataError) toast.error(trackDataError.message);
  }, [trackDataError]);

  return tracks;
};

export default useRecentTracks;
