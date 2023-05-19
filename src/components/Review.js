import React, { useState } from 'react'
import { updateDoc, deleteDoc, doc } from '@firebase/firestore'
import {authService, dbService } from 'fbase'
 
const Review = ({ userreview: { id, text }, isOwner }) => {
  const [editing, setEditing] = useState(false)
  const [newReview, setNewReview] = useState(text)
 
  const handleOnClickDelete = async () => {
    const ok = window.confirm('정말 삭제하시겠습니까?')
    if (ok) { await deleteDoc(doc(dbService, `review/${id}`))  }}
 
  const toggleEditing = () => { setEditing((prevEditing) => !prevEditing) }
 
  const handleOnChange = (e) => {
    const { target: { value }, } = e
    setNewReview(value)
  }
 
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await updateDoc(doc(dbService, `userreviews/${id}`), {
      text: newReview,
    })
    setEditing(false)
  }
 
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="글을 수정하세요" value={newReview} required onChange={handleOnChange} />
            <input type="submit" value="업데이트" />
          </form>
          <button onClick={toggleEditing}>취소</button>
        </>
      ) : (
        <h4>{text}</h4>
      )}
      {isOwner && (
        <> <button onClick={handleOnClickDelete}>리뷰 삭제</button>
           <button onClick={toggleEditing}>리뷰 수정</button>
        </>
      )}
    </div>
  )
}
 
export default Review;