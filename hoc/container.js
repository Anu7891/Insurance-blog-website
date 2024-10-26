import React from 'react';

const Container = ({ children }) => <div className="container">{children}</div>;

export default React.memo(Container);
