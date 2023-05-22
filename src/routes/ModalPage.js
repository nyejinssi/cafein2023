import React, { useCallback, useState } from "react";
import Modal from "../components/Modal";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import { dbService, authService } from "../fbase";
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

function ModalPage() {
  const user = authService.currentUser;
  const [modalVisible, setModalVisible] = useState(false);
  const [isOpenSecondPopup, setIsOpenSecondPopup] = useState(false);
  const [address, setAddress] = useState(null);
  const [postCodes, setPostCodes] = useState(null);
  const [detailAddress, setDetailAddress] = useState("");
  const [userAddress, setUserAddress] = useState([]);

  const navigate = useNavigate();
  
  const openModal = useCallback(() => { setModalVisible(true); }, []);

  const closeModal = useCallback(() => { setModalVisible(false); }, []);

  const onChange = useCallback((e) => { setDetailAddress(e.target.value); }, []);

  const handleComplete = useCallback((data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;
    if (data.addressType === "R") {
      if (data.bname !== "") {extraAddress += data.bname; }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    //fullAddress -> 전체 주소반환
    setAddress(fullAddress);
    setPostCodes(zoneCodes);
    setIsOpenSecondPopup(true);
  }, []);

  useEffect(() => {
            const q = query(collection(dbService, "userAddress"));
            onSnapshot(q, (snapshot) => {
                const UserAddressArray = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id, 
                }));
            setUserAddress(UserAddressArray);
            });
        }, []);
  
  const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userAddress"), {
                number: postCodes,
                address: address,
                content: detailAddress,
                createrId : user.uid,
                createdAt: Date.now() });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setAddress(address + detailAddress);
      setIsOpenSecondPopup(false);
      closeModal(false);
    },
    [closeModal, address, detailAddress, setAddress]
  );

  return (
    <>
    <form onSubmit={onSubmit}>
      {address ? (
        <div>
          <div className="text">주소 : {address }</div>
          <div className="text">우편번호 : {postCodes}</div>
        </div>
      ) : (
        <div className="text">
          <span className="emph">배송지 입력</span> <br />
        </div>
      )}
      <button onClick={openModal}> 주소 조회 </button>
      {modalVisible && (
        <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal} >
          <DaumPostcode onComplete={handleComplete} className="post-code" />
          {isOpenSecondPopup && (
            <div>
              <h3>상세 주소 입력</h3>
              <input placeholder="상세 주소를 입력해 주세요" onChange={onChange} value={detailAddress} />
              <button onClick={onClick}>저장</button> </div> )}
        </Modal>
      )}      
        <input type = "checkbox" value = "동의" required/> 여러분의 개인정보를 저장하는데 동의하십니까? <br/>
        <input type = "submit" value = "회원가입 완료하기" onClick = {()=> {navigate('/Home');}} required/><br/>
      </form>
    </>
  );
}

export default ModalPage;