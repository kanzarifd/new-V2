import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

interface AttachmentPreviewDialogProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  isImage: boolean;
}

const AttachmentPreviewDialog: React.FC<AttachmentPreviewDialogProps> = ({ open, onClose, src, alt, isImage }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 2 }}>
        Attachment Preview
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
          {isImage && src ? (
            <img
              src={src}
              alt={alt || 'Attachment'}
              style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: 8, boxShadow: '0 2px 16px #ccc' }}
              onError={e => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
            />
          ) : src ? (
            <Box sx={{ textAlign: 'center', width: '100%' }}>
              <iframe
                src={src}
                title={alt || 'Attachment'}
                style={{ width: '100%', height: '70vh', border: 'none', borderRadius: 8, boxShadow: '0 2px 16px #ccc' }}
                allowFullScreen
              />
              <Box mt={2}>
                <a href={src} target="_blank" rel="noopener noreferrer" style={{ fontSize: 18, color: '#e53935', textDecoration: 'underline' }}>
                  Download or open attachment
                </a>
              </Box>
            </Box>
          ) : (
            <Box sx={{ color: '#aaa', textAlign: 'center', width: '100%' }}>No attachment available.</Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AttachmentPreviewDialog;
