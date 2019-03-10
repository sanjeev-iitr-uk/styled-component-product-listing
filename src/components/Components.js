import React from 'react';
import styled from 'styled-components';

export const ModalBodyLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: grey;
  border: 2px solid green;
`;
export const OverlayContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 200px;
  margin: 5px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  &:hover ${Overlay} {
  	opacity: 0.5;
  }
`;
export const CardImage = styled.img`
 position: relative;
 width: 100%;
 height: 100%;
`;
export const PencilIcon = styled.a`
  color: white;
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
export const CloseIcon = styled.a`
  color: black;
  font-size: 40px;
  position: absolute;
  top: 10px;
  right: 0;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: right;
`;
export const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

`;
export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  height: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
`;
export const CloseModal = styled.span`
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &: focus {
  	color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #FAEBD7;
`;
export const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #FAEBD7;
`;
export const ModalBody = styled.div`
 padding: 2px 16px;
`;
// export default {
// 	FlexContainer,
//   Overlay,
// 	OverlayContainer,
// 	CardImage,
//   PencilIcon,
//   CloseIcon,
//   Modal,
//   ModalContent,
//   CloseModal,
//   ModalHeader,
//   ModalFooter,
//   ModalBody
// };
// export const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
// export const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;