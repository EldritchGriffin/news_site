'use client'

import React from 'react';

interface SocialButtonProps {
  platform: 'facebook' | 'twitter' | 'pinterest' | 'email';
  url?: string;
  title?: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
  platform, 
  url = window.location.href, 
  title = document.title,
  // onClick 
}) => {
  // Define platform-specific properties
  const platforms = {
    facebook: {
      color: '#3b5998',
      icon: 'f',
      label: 'Facebook',
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
    twitter: {
      color: '#1da1f2',
      icon: 'f',
      label: 'Twitter',
      shareUrl: `https://twitter.com/intent/tweet?url=${url}&text=${title}`
    },
    pinterest: {
      color: '#bd081c',
      icon: 'f',
      label: 'Pinterest',
      shareUrl: `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`
    },
    email: {
      color: '#333333',
      icon: 'f',
      label: 'Email',
      shareUrl: `mailto:?subject=${title}&body=${url}`
    }
  };

  const { color, icon, label, shareUrl } = platforms[platform];

  // const handleClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
    
  //   if (onClick) {
  //     onClick();
  //   } else {
  //     window.open(shareUrl, '_blank', 'width=600,height=400');
  //   }
  // };

  return (
    <a 
      href={shareUrl}
      // onClick={handleClick}
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '8px 12px',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        margin: '0 2px'
      }}
      title={`Share on ${label}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span style={{ marginRight: '6px', fontWeight: 'bold' }}>{icon}</span>
      {label}
    </a>
  );
};

const SocialShareButtons: React.FC<{title?: string }> = ({title }) => {
    // const url = window.location.href;
    const url = 'https://example.com'; // Replace with your URL logic
  return (
    <div className='my-10 py-5 flex gap-2'>
      <SocialButton platform="facebook" url={url} title={title} />
      <SocialButton platform="twitter" url={url} title={title} />
      <SocialButton platform="pinterest" url={url} title={title} />
      <SocialButton platform="email" url={url} title={title} />
    </div>
  );
};

export default SocialShareButtons;