import React from "react";
import { useAppSelector } from "../lib/hooks";
import { useSelectCollectionsData } from "../lib/features/collections/collectionsSlice";

export default function GeneralDisplay() {
  const collectionsData = useAppSelector(useSelectCollectionsData);
  return <div>GeneralCollectionsDisplay</div>;
}
