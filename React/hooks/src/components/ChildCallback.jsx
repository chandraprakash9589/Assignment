import React, { memo } from "react";

function ChildCallback(props) {
  const { onLoad } = props;
  console.log("child callback called....");
  onLoad();
  return <div>ChildCallback</div>;
}

export default memo(ChildCallback);
