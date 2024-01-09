import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useChatDailer } from '../hooks/useChatDailer'

function ChatWindowView({data}) {

  const {otherData, handleNewMessage, updateMessage, handleDeleteMessage} = useChatDailer(data)

  const moreTimeNew = () => {
    setTimeout(() => {
      handleNewMessage()
    }, "2000");
  }

  const moreTimeDelete = (id) => {
    setTimeout(() => {
      handleDeleteMessage(id)
    }, "1000");
  }

  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
         <div style={{ backgroundColor: '#5b8c00', height: 400, width: '100%', overflow: 'auto' }}>
             { otherData && otherData.map((e) =>(
              <div key={e.id}>
                 <h4 style={{ backgroundColor: 'white', color: 'black', padding: 2}}>{e.message}</h4>
                 <button>Edit</button>
                 <button onClick={() => moreTimeDelete(e.id)}>Delete</button>
              </div>
             ))}   
         </div>
        <div style={{ backgroundColor: 'white', height: 40, width: '100%', display: 'flex' }}>
          <input type="text" style={{ width: '100%' ,paddingRight: 2}} onChange={(e) => updateMessage(e.target.value)}/>
          <button style={{ backgroundColor: 'green', color: 'black'}} onClick={() => moreTimeNew()}>Send</button>
        </div>
      </div>
    </>
  )
}

export default ChatWindowView
