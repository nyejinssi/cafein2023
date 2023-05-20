// import { dbService, authService } from 'fbase';
// import React, { useEffect, useState } from 'react';
// import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
// import { useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Modal from "../components/Modal";
// import DaumPostcode from "react-daum-postcode";

// const UserInfo = () => {
//     const user = authService.currentUser;
//     const [username, setUsername] = useState("");
//     const [userphonenumber, setUserPhonenumber] = useState("");
//     const [modalVisible, setModalVisible] = useState(false);
//     const [isOpenSecondPopup, setIsOpenSecondPopup] = useState(false);
//     const [address, setAddress] = useState(null);
//     const [postCodes, setPostCodes] = useState(null);
//     const [detailAddress, setDetailAddress] = useState("");

//     const openModal = useCallback(() => { setModalVisible(true); }, []);

//     const closeModal = useCallback(() => { setModalVisible(false); }, []);

//     const onChange = useCallback((e) => { setDetailAddress(e.target.value); }, []);

//     const navigate = useNavigate();

//     const InputDone = () => {
//         navigate('/Home');};

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const docRef = await addDoc(collection(dbService, "userInfomation"), {
//                 name: username,
//                 text: userphonenumber,
//                 createrId : user.uid,
//                 text: address,
//                 text: postCodes,
//                 text: detailAddress,
//                 createdAt: Date.now(), });
//             setUsername("");
//             setUserPhonenumber("");
//             setAddress("");
//             setPostCodes("");
//             setDetailAddress("");
//             console.log("Document written with ID: ", docRef.id);
//         } catch (error) {
//             console.error("Error adding document: ", error);
//         }
//     };

//     const onClick = useCallback(
//         (e) => {
//           e.preventDefault();
//           setAddress(address + detailAddress);
//           setIsOpenSecondPopup(false);
//           closeModal(false);
//         },
//         [closeModal, address, detailAddress, setAddress]
//       );

//     const setinput = (event) => {
//         const { target: {name, value} } = event; 
//         if (name === "usersname"){
//             setUsername(value); 
//         } else if (name === "usersphonenumber"){
//             setUserPhonenumber(value);
//         }
//     };

//     return(
//         <div>
//             <form onSubmit = {onSubmit}> 
//                 <tr>
//                     <input value = {username} name= "usersname" type = "name" placeholder = " 이 름 " maxLength = {15} onChange = {setinput} required/> <br/>
//                     <input value = {userphonenumber} name="usersphonenumber" type = "tel" placeholder = " 전 화 번 호 " maxLength = {11} onChange = {setinput} required /> <br/>
//                 </tr>
//                 <tr> 
//                     <>
//                     {address ? (
//                         <div>
//                         <div className="text">주소 : {address }</div>
//                         <div className="text">우편번호 : {postCodes}</div>
//                         </div>
//                     ) : (
//                         <div className="text">
//                         <span className="emph">배송지 입력</span> <br />
//                         </div>
//                     )}
//                     <button onClick={openModal}> 주소 조회 </button>
//                     {modalVisible && (
//                         <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal} >
//                         <DaumPostcode onComplete={handleComplete} className="post-code" />
//                         {isOpenSecondPopup && (
//                             <div>
//                             <h3>상세 주소 입력</h3>
//                             <input placeholder="상세 주소를 입력해 주세요" onChange={onChange} value={detailAddress} />
//                             <button onClick={onClick}> 주소지 저장</button> </div> )}
//                         </Modal>
//                     )}
//                     </>
//                 </tr>
//                 <tr>
//                     <button type = "submit" onClick = {InputDone}> 내용 저장하기 </button>
//                 </tr>
//             </form>
//         </div>
//     );  
    
// };

// export default UserInfo;