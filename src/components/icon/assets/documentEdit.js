import * as React from 'react';

const EuiIconDocumentEdit = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.505 8.995l6.453-6.44-1.5-1.5-6.453 6.44 1.5 1.5zM12.968.19c.258-.238.657-.26.91 0l1.928 1.929a.642.642 0 010 .909l-6.78 6.784A.641.641 0 018.57 10H6.643A.643.643 0 016 9.357V7.43c0-.17.067-.335.188-.455L12.968.19zM4.5 13a.5.5 0 110-1h7a.5.5 0 110 1h-7zm4-12a.5.5 0 010 1H2v13h12V7.5a.5.5 0 111 0V15a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h6.5z" />
  </svg>
);

export const icon = EuiIconDocumentEdit;
