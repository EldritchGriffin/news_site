'use client'

import React, { useEffect } from 'react';

type Props = {
  _text: string;
  _width: string;
};

export default function Bubbletext({ _text, _width }: Props) {
  return (
    <div className={`w-[${_width}] border-2`}>

        <h2 className={`pp leading-[19.2px] font-normal text-[16px] text-center`}>
          {_text}
        </h2>
    </div>
  );
}
