import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

export const useChatDailer = (data) => {

  const mess = useContext(AppContext)
  const [newMessage, setMesagge] = useState('')
  const [ otherData, setOtherData] = useState(data.messages)

  useEffect(() => {
   
      updateData()
    
  }, [data])

  const updateData = () => {
    
    setOtherData(data.messages)
  
  }

  const updateMessage = (text) => {
    setMesagge(text)
  }

  const handleNewMessage = () => {
     const comp = {
           id: new Date(),
           message: newMessage,
           timestamp: new Date(),  
           }

      data.messages = [...data.messages, comp];
      otherData.messages = data.messages;
      mess.setData(otherData)
  }

  const handleEditMessage = () => {
    const comp = {
          id: new Date(),
          message: newMessage,
          timestamp: new Date(),  
          }

     data.messages = [...data.messages, comp];
     otherData.messages = data.messages;
     mess.setData(otherData)
 }

 const handleDeleteMessage = (key) => {

   data.messages = data.messages.filter((e) => e.id !== key);
   otherData.messages = data.messages;
   mess.setData(otherData)
}

  return { otherData, handleNewMessage, updateMessage, handleDeleteMessage}
}

