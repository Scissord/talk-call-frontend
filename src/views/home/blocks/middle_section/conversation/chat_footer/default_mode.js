import { useContext, useState } from 'react'
import { ViewContext } from 'contexts/view';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const DefaultMode = (props) => {
  const {
    fileInputRef, handleFileChange, file, setFile, message, setMessage,
    handleSendMessage, startRecording, isMessageSending
  } = props;

  const context = useContext(ViewContext);
  const [isPickedVisible, setIsPickedVisible] = useState(false);

  return (
    <>
      <div className='w-[5%] flex items-center justify-center pl-3 gap-2 py-6'>
        <div onClick={() => fileInputRef.current.click()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-400 hover:font-bold"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
          </svg>
        </div>
        {/* <div onClick={() => fileInputRef.current.click()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-gray-300 cursor-pointer hover:text-gray-400 hover:font-bold"
          >
            <path d="M12 2a6 6 0 00-6 6c0 3.9 6 12 6 12s6-8.1 6-12a6 6 0 00-6-6z" />
            <circle cx="12" cy="8" r="3" />
          </svg>
        </div> */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <div className='w-[85%] relative flex items-center h-full'>
        {file &&
          <div className="absolute top-0">
            <div className="flex items-center gap-1">
              <p className={`
                text-[10px]
                ${context.colorMode.theme === 0 ? 'text-black' : 'text-white'}
              `}>
                {file.name}
              </p>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="0.7em"
                width="0.7em"
                cursor="pointer"
                onClick={() => setFile(null)}
              >
                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
              </svg>
            </div>
          </div>
        }

        <input
          type="text"
          className='w-full outline-none h-10 rounded-md pl-3 border border-slate-300'
          placeholder="Введите..."
          value={message}
          onChange={(e) => {
            e.preventDefault();
            setMessage(e.target.value)
          }}
          onKeyDown={(e) => {
            if (!isMessageSending && e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          disabled={!!file}
        />
        <div className='absolute right-0 pr-3'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-400 hover:font-bold"
            onClick={() => {
              if(!isMessageSending) {
                handleSendMessage()
              };
            }}
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22 11 13 2 9l20-7z" />
          </svg>
        </div>
      </div>
      <div className='w-[10%] flex items-center gap-2 py-6'>
        <div onClick={() => startRecording()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-400 hover:font-bold"
          >
            <path d="M12 1a3 3 0 0 1 3 3v10a3 3 0 0 1-6 0V4a3 3 0 0 1 3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </div>
        <div onClick={() => setIsPickedVisible(!isPickedVisible)} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-400 hover:font-bold"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
          </svg>
        </div>
      </div>
      {isPickedVisible && (
        <div className='absolute bottom-0 sm:bottom-20 sm:right-20'>
          <Picker
            data={data}
            previewPosition="none"
            onEmojiSelect={(e) => {
              setMessage(message + e.native);
              setIsPickedVisible(!isPickedVisible);
            }}
          />
        </div>
      )}
    </>
  )
}

export default DefaultMode