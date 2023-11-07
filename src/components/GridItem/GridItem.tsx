import classes from "./GridItem.module.css";
import React from "react";
import BoxShot from "../../assets/img/boxshot.png";

const GridItem: React.FC<{
  src: string;
  alt: string;
  title: string;
  text: string;
  className: string;
  videoSrc?: string;
  videoClassName?: string;
  isDownload?: boolean;
  textLocation: string;
}> = (props) => {

  const isLeft = props.textLocation === "left";

    return (
      <div className={`${classes.gridItem} ${!isLeft && classes.reverseGridItem} ${props.className}`}>
        <div className={`${classes.gridItemText} ${!isLeft && classes.reverseGridItemText}`}>
          <h2 className={classes.titleText}>{props.title}</h2>
          <p className={classes.titleSubText}>{props.text}</p>
          <div className={classes.textSpace}>
            <div className={classes.textSpaceItem}></div>
          </div>
        </div>
        <div className={`${classes.imgItem} ${!isLeft && classes.reverseImgItem}`}>
          <div className={classes.imgBox}>
            <img src={props.src} alt={props.alt}/>
            {props.videoSrc && props.videoClassName &&
              <div className={props.videoClassName === "tvVideoItem" ? classes.tvVideoItem : classes.deviceVideoItem}>
                <video className={classes.video} autoPlay playsInline muted loop>
                  <source src={props.videoSrc}/>
                </video>
              </div>
            }
            {props.isDownload &&
              <div className={classes.downloadAnimationItem}>
                <div className={classes.downloadAnimationImgItem}>
                  <img className={classes.downloadAnimationImg} src={BoxShot} alt={"boxShotImg"}/>
                </div>
                <div className={classes.downloadAnimationTextItem}>
                  <div className={classes.downloadAnimationTextTItle}>기묘한 이야기</div>
                  <div className={classes.downloadAnimationTextSubs}>저장 중...</div>
                </div>
                <div className={classes.downloadAnimationIcon}></div>
              </div>
            }
          </div>
        </div>
      </div>
    );
};

export default GridItem;
