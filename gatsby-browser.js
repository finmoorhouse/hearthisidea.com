/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// exports.onRouteUpdate = () => {
//     
// }
exports.onRouteUpdate = ({ location }) => scroll(location)

const scroll = (location) => {
    const item = document.querySelectorAll(`a[href='${location.hash}']`)
    const linked = location.hash;
    console.log( item, linked, location);

    let Position = null
    if (item) {
        Position = item.offsetTop;
    }
    window.scrollTo({top: item.offsetTop,
    behavior: "smooth"});
}

/**
 *
 * @desc - a function to jump to the correct scroll position
 * @param {Object} location -
 * @param {Number} [mainNavHeight] - the height of any persistent nav -> document.querySelector(`nav`)
 */
const scrollToAnchor = (location, mainNavHeight = 0) => {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelectorAll(`a[href='${location.hash}']`).offsetTop
    console.log(item, location);
    window.scrollTo({
      top: item - mainNavHeight,
      behavior: "smooth",
    })
  }

  return true
}