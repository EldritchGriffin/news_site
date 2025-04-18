'use client'

import React, { useEffect } from 'react';

type Props = {
  _text: string;
  _width: number;
};

export default function Bubbletext({ _text, _width }: Props) {
  return (
    <h2 className={`pp w-fit`}>
      {_text}
    </h2>
  );
}
