import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

// components
const source = `
## Features of this site

- Create a new customer
- Create a new order
- View bills
- Add and view rooms
- Log in log out support
- Social media integration (Coming soon)


> To create a new customer, need to contact with admin to request an access
`;
const Guides = () => {
  return (
    <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
      <div className='rounded-t mb-0 px-4 py-3 border-0'>
        <div className='flex flex-wrap items-center'>
          <MarkdownPreview source={source}/>
        </div>
      </div>
    </div>);
};

export default Guides;
