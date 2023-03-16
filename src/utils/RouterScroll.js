import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouterScroll = ({children}) => {

  const location = useLocation();

  useEffect(() => {

    window.scrollTo(0, 0);

  }, [location]);

  return (
    <Fragment>{children}</Fragment>
  );
};

export default RouterScroll;
