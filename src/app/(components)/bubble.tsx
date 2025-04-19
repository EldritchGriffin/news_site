// 'use client'

// import React, { useEffect } from 'react';

// type Props = {
//   _text: string;
//   _width: number;
// };

// export default function Bubbletext({ _text, _width }: Props) {
//   return (
//     <h2 className={`pp w-fit leading-[19.2px] font-normal text-[16px]`}>
//       {_text}
//     </h2>
//   );
// }

'use client'

import React, { useEffect } from 'react';

type Props = {
  _text: string;
  _width: string;
};

export default function Bubbletext({ _text, _width }: Props) {
  // alert(`w-[${_width}] border-2`);
  return (
    <div className={`pp ${_width} leading-[19.2px] font-normal text-[16px] text-center `}>
          {_text}
    </div>
  );
}