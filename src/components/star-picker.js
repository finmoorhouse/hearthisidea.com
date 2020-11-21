import React from "react"
import Loadable from "@loadable/component"
function MyLoadingComponent() {
    return <div>Loading stars..</div>;
  }
const StarRatingComponent = Loadable(() => import("react-star-picker"), {
  ssr: false,
  LoadingComponent: MyLoadingComponent
})

export default StarRatingComponent