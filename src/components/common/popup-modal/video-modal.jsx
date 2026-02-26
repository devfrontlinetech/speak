import React from "react";
import Modal from "react-modal";
import 'react-modal-video/css/modal-video.css';
// Required for accessibility (Next.js root element)
if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}

const VideoModal = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "9Y7ma241N8k",
}) => {
  return (
    <Modal
      isOpen={isVideoOpen}
      onRequestClose={() => setIsVideoOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 1000,
        },
        content: {
          inset: "10%",
          padding: 0,
          border: "none",
          background: "transparent",
        },
      }}
    >
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setIsVideoOpen(false)}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "white",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video Player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </Modal>
  );
};

export default VideoModal;







// import React from 'react';
// import ModalVideo from 'react-modal-video';

// const VideoModal = ({isVideoOpen,setIsVideoOpen,videoId = "9Y7ma241N8k"}) => {
//     return (
//         <ModalVideo 
//             channel='youtube' 
//             autoplay isOpen={isVideoOpen} 
//             videoId={videoId} 
//             onClose={() => setIsVideoOpen(false)} 
//         />
//     )
// }

// export default VideoModal;