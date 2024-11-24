import { Box, Typography } from '@mui/material';

export const ItemData: React.FC<{ keyData: string; valueData: string }> = ({
  keyData,
  valueData,
}) => {
  return (
    <Box component="span" sx={{ mr: 1 }}>
      <Typography
        component="span"
        variant="subtitle2"
        sx={{
          color: 'white',
          backgroundColor: 'text.secondary',
          padding: 0.7,
          borderRadius: 2,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        {keyData}
      </Typography>
      <Typography
        component="span"
        variant="subtitle2"
        sx={{
          color: 'white',
          backgroundColor: 'primary.main',
          padding: 1,
          borderRadius: 2,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        {valueData}
      </Typography>
    </Box>
  );
};
