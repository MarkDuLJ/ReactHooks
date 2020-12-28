import React, { useReducer } from "react";

export default function CheckBox() {
  const [check, toggle] = useReducer((check) => !check, false);
  // useEffect(() => {
  //   console.log("checked:", check.toString());
  //   return () => {
  //     //   cleanup
  //   };
  // });
  return (
    <div>
      <input
        type="checkbox"
        value={check}
        //onChange={setCheck((check) => !check)} too many render, why?
        onChange={toggle}
      />
      {check ? "checked" : "unchecked"}
    </div>
  );
}
