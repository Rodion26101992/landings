// import React, {useRef, useEffect, Children, cloneElement, useState} from "react";
// import PropTypes from "prop-types";
// import ResizeObserver from 'resize-observer-polyfill';
//
// /**
//  *
//  * @param {HTMLElement} children The component's children
//  * @param {bool} showCursor If true, shows the cursor
//  * @param {number} size the initial size of the light
//  * @param {object} initialPosition An object {x: value, y: value} defining the initial position
//  * @param {object} moveTo An object {x: value, y: value} defining the location to where the light will be moved
//  * @param {number} speed Defines the transition speed of the movement of the light
//  * @param {bool} contain If true, the light can't move outside of the container
//  * @param {bool} enableMouse If true, the user can control the light with its mouse
//  * @param {number} darkness Defines how dark is the "room"
//  */
//
// export default function CustomFlashlight(props) {
//     const {
//         enabled,
//         children,
//         showCursor,
//         size,
//         initialPosition,
//         moveTo,
//         speed,
//         enableMouse,
//         darkness,
//     } = props;
//
//
//     const lightStyle = {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         // To control the size of the light, simply use a percentage on the background creating the effect - init with size
//         background: "radial-gradient(transparent 0%, rgba(0, 0, 0, " + darkness + ") " + size + "px, rgba(0, 0, 0, " + (darkness + 0.1) + ") 80%)",
//         transition: "none",
//         pointerEvents: "none",
//         willChange: "transform"
//     }
//     const [elements, setElements] = useState([]);
//     // const elements = Children.map(children, child => ({
//     //     light: useRef({}),
//     //     container: useRef({}),
//     // }))
//
//     useEffect(() => {
//         setElements(Children.map(children, child => ({
//     light: useRef(null),
//     container: useRef(null),
// })))
//         let last_known_scroll_position = 0;
//         let ticking = false;
//
//         elements.forEach(element => {
//             const container = element.container.current;
//             container.style.overflow = "hidden";
//             container.style.position = "relative";
//             if (!showCursor) container.style.cursor = "none";
//         })
//
//         // Resizes the light
//
//         function resizeLights() {
//             elements.forEach(element => {
//                 resizeLight(element);
//             })
//         }
//
//         function resizeLight(element) {
//             const light = element.light.current;
//             const maskSize = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
//
//             light.style.width = maskSize * 2 + "px";
//             light.style.height = maskSize * 2 + "px";
//
//             light.style.left = initialPosition.x - maskSize + "px";
//             light.style.top = initialPosition.y - maskSize + "px";
//         }
//
//         function handleMouseMove(e) {
//             if (!ticking) {
//                 window.requestAnimationFrame(function () {
//                     ticking = false;
//                     elements.forEach(element => {
//                         const light = element.light.current;
//                         const container = element.container.current;
//                         const lightStyle = window.getComputedStyle(light, null);
//                         const containerStyle = container.getBoundingClientRect();
//                         light.style.transition = "opacity ease-in-out " + speed + "ms";
//                         light.style.left = e.clientX - containerStyle.left - parseInt(lightStyle.width) / 2 + "px";
//                         light.style.top = e.clientY - containerStyle.top - parseInt(lightStyle.height) / 2 + "px";
//                     })
//                 });
//                 ticking = true;
//             }
//         }
//
//         function handleScroll(e) {
//             let increment = window.scrollY - last_known_scroll_position;
//             last_known_scroll_position = window.scrollY;
//             if (!ticking) {
//                 window.requestAnimationFrame(function () {
//                     ticking = false;
//                     elements.forEach(element => {
//                         const light = element.light.current;
//                         light.style.transition = "opacity ease-in-out " + speed + "ms";
//                         light.style.top = parseInt(light.style.top) + increment + "px";
//                     })
//                 });
//                 ticking = true;
//             }
//         }
//
//         resizeLights();
//
//         const resizeObservers = [children.length];
//
//         elements.forEach((element, i) => {
//             resizeObservers[i] = new ResizeObserver(() => resizeLights());
//         });
//
//         if (enableMouse) window.addEventListener("mousemove", handleMouseMove);
//         if (enableMouse) window.addEventListener('scroll', handleScroll);
//         window.addEventListener("resize", resizeLights);
//         elements.forEach((element, i) => {
//             resizeObservers[i].observe(element.container.current);
//         });
//
//         // Cleanup
//         return () => {
//             if (enableMouse) window.removeEventListener("mousemove", handleMouseMove);
//             if (enableMouse) window.removeEventListener("scroll", handleScroll);
//             window.removeEventListener("resize", resizeLights)
//             elements.forEach((element, i) => {
//                 return resizeObservers[i].disconnect;
//             });
//         }
//
//     }, []);
//
//     /**
//      * This is executed when moveTo props change
//      */
//     useEffect(() => {
//
//         if (moveTo) {
//             elements.forEach(element => {
//                 const light = element.light.current;
//                 light.style.transition = "all ease-in-out " + speed + "ms";
//                 const lightStyle = window.getComputedStyle(light, null);
//                 light.style.left = moveTo.x - parseInt(lightStyle.width) / 2 + "px";
//                 light.style.top = moveTo.y - parseInt(lightStyle.height) / 2 + "px";
//             })
//         }
//     }, [moveTo])
//
//     useEffect(() => {
//         elements.forEach(element => {
//             const light = element.light.current;
//             light.style.transition = "opacity ease-in-out " + speed + "ms";
//             enabled ? light.style.opacity = "1" : light.style.opacity = "0";
//         });
//
//     }, [enabled])
//
//     return (
//         Children.map(children, (child, i) =>
//             cloneElement(child,
//                 {
//                     ref: elements[i].container,
//                     children:
//                         <div id="customFlashlight">
//                             <div
//                                 style={lightStyle}
//                                 ref={elements[i].light}
//                             />
//                             {child.props.children}
//                         </div>
//                 })
//         )
//     )
// }
//
// CustomFlashlight.propTypes = {
//     enabled: PropTypes.bool,
//     children: PropTypes.node,
//     showCursor: PropTypes.bool,
//     size: PropTypes.number,
//     initialPosition: PropTypes.shape({
//         x: PropTypes.number,
//         y: PropTypes.number,
//     }),
//     moveTo: PropTypes.object,
//     speed: PropTypes.number,
//     contain: PropTypes.bool,
//     enableMouse: PropTypes.bool,
//     darkness: PropTypes.number,
// }
//
// CustomFlashlight.defaultProps = {
//     enabled: true,
//     children: <div></div>,
//     showCursor: false,
//     size: 150,
//     initialPosition: {x: 0, y: 0},
//     moveTo: null,
//     speed: 1000,
//     enableMouse: true,
//     darkness: 0.9,
// }