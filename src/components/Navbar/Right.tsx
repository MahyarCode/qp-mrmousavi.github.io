import React from 'react';
import { BsGithub, BsEnvelope, BsLinkedin } from 'react-icons/bs';

const Right: React.FC = () => {
  return (
    <div className='flex items-center space-x-3'>
      <div className='flex items-center space-x-3'>
        <a
          href='https://github.com/QP-MRMousavi'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub
            title='GitHub'
            className='link text-xl cursor-pointer size-8'
          />
        </a>
        <a
          href='https://github.com/QP-MRMousavi'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin
            title='LinkedIn'
            className='link text-xl cursor-pointer size-8'
          />
        </a>
        <a href='mailto:m.r.mousavi.n@gmail.com'>
          <BsEnvelope
            title='Email'
            className='link text-xl cursor-pointer size-8'
          />
        </a>
      </div>
    </div>
  );
};

export default Right;
