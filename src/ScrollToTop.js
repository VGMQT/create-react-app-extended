import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    if (window.location.href.indexOf('#') === -1) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);
