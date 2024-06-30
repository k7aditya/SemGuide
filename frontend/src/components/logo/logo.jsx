import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {


  const logo = (
    <div className='advertise'>
      <img className='logo-guide' src="/assets/icons/SemGuideLogo.png" alt="" />
      <p className='platypi-uniquifier'>SemGuide</p>
    </div>
  );

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
