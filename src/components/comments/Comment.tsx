import { Paper } from '@mui/material';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export const Comment: React.FC<{ commentText: string }> = ({ commentText }) => {
  const cleanHTML = DOMPurify.sanitize(commentText);

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2, backgroundColor: 'lightgrey' }}>
      {parse(cleanHTML)}
    </Paper>
  );
};
