import React from "react";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function TipsComponent({
  MainInfoH2,
  firstTipStrong,
  firstTipP,
  secondTipStrong,
  secondTipP,
  thirdTipStrong,
  thirdTipP,
}) {
  return (
    <div className="tips__width ml-5">
      <div className="tips__container">
        <div className="d-flex">
          <ErrorOutlineIcon className="m-2" />
          <h2>{MainInfoH2}</h2>
        </div>
        <p className="p-0">{firstTipStrong}</p>
        <p className="p-0 pl-3 pb-2 text__color__grey">{firstTipP}</p>
        <p className="p-0">{secondTipStrong}</p>
        <p className="p-0 pl-3 pb-2 text__color__grey">{secondTipP}</p>
        <p className="p-0">{thirdTipStrong}</p>
        <p className="p-0 pl-3 pb-2 text__color__grey">{thirdTipP}</p>
      </div>
    </div>
  );
}

export default TipsComponent;
