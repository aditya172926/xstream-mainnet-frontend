import { StreamsContext } from "@/providers/StreamsProvider";
import { useContext } from "react";

export const useStreams = () => useContext(StreamsContext);
