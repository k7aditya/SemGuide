import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Search({ numSelected, filterName, onFilterName }) {
  return (
      <Card sx={{mx: 2}}>
        <Toolbar
          sx={{
            height: 96,
            display: 'flex',
            justifyContent: 'space-between',
            p: (theme) => theme.spacing(0, 1, 0, 9),
            ...(numSelected > 0 && {
              color: 'primary.main',
              bgcolor: 'primary.lighter',
            }),
          }}
        >
          {numSelected > 0 ? (
            <Typography component="div" variant="subtitle1">
              {numSelected} selected
            </Typography>
          ) : (
            <OutlinedInput
              value={filterName}
              onChange={onFilterName}
              placeholder="Search material..."
              sx={{ width: 300 }} 
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
            />
          )}

          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton>
                <Iconify icon="eva:trash-2-fill" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton>
                <Iconify icon="ic:round-filter-list" />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </Card>
  );
}


Search.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
