
const Loading = () => {
    return (
    
        <div className="h-screen w-screen fixed z-50 bg-stone-900/50 ">
            <div className="loading">
                <div className="circle cyan"></div>
                <div className="circle magenta"></div>
                <div className="circle yellow"></div>
                <p>Loading...</p>
            </div>
    
            <style jsx>{`
                .loading {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 160px;
                  width: 170px;
                  position: absolute;
                  margin: 0px;
                  padding: 0px;
                  right : 43%;
                  top : 30%;
                  z-index: 100;
                  color : #fff;
                  font-size : 20px;
                  font-weight : bold;
                }
                .circle {
                  border: 5px transparent solid;
                  position: absolute;
                  width: 100px;
                  height: 100px;
                  border-radius: 69%;
                }
                .cyan {
                  top: 0px;
                  border-top: 5px cyan solid;
                  animation-delay: 4s;
                  animation: cyan 2s infinite;
                
                }
                /*:after element = circle at the end of each line.
                :before element = cap in be start of each line*/
                .cyan:after {
                  position: absolute;
                  content: "";
                  width: 10px;
                  height: 10px;
                  background: cyan;
                  border-radius: 69%;
                  right: 5px;
                  top: 10px;
                  box-shadow: 0px 0px 20px cyan;
                }
                .cyan:before {
                  content: " ";
                  width: 5px;
                  height: 5px;
                  position: absolute;
                  background: cyan;
                  top: 10px;
                  left: 11px;
                  border-radius: 69%;
                }
                .magenta {
                  left: 0px;
                  bottom: 0px;
                  border-top: 5px magenta solid;
                  animation: magenta 2s infinite;
                }
                .magenta:after {
                  position: absolute;
                  content: "";
                  width: 10px;
                  height: 10px;
                  background: magenta;
                  border-radius: 69%;
                  right: 5px;
                  top: 10px;
                  box-shadow: 0px 0px 20px magenta;
                }
                .magenta:before {
                  content: " ";
                  width: 5px;
                  height: 5px;
                  position: absolute;
                  background: magenta;
                  top: 10px;
                  left: 11px;
                  border-radius: 69%;
                }
                .yellow {
                  right: 0px;
                  bottom: 0px;
                  border-top: 5px yellow solid;
                  animation: yellow 2s infinite;
                }
                .yellow:after {
                  position: absolute;
                  content: "";
                  width: 10px;
                  height: 10px;
                  background: yellow;
                  border-radius: 69%;
                  right: 5px;
                  top: 10px;
                  box-shadow: 0px 0px 20px yellow;
                }
                .yellow:before {
                  content: " ";
                  width: 5px;
                  height: 5px;
                  position: absolute;
                  background: yellow;
                  top: 10px;
                  left: 11px;
                  border-radius: 69%;
                }
                @keyframes cyan {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
                @keyframes magenta {
                  0% {
                    transform: rotate(240deg);
                  }
                  100% {
                    transform: rotate(600deg);
                  }
                }
                @keyframes yellow {
                  0% {
                    transform: rotate(120deg);
                  }
                  100% {
                    transform: rotate(480deg);
                  }
                }
                
          `}</style>
          
        </div>
      )
};

export default Loading;
