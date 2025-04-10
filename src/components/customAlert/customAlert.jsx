import React from "react";
import {
  Alert,
  AlertTitle,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomAlert = ({
  severity = "error",
  variant = "filled",
  hasTitle = true,
  title = "Alert Title",
  hasDescription = false,
  description = "This is the alert description",
  hasAction = false,
  actionElement = (
    <Button color="inherit" size="small">
      <Typography variant="body2" sx={{ fontSize: "11px" }}>
        Label
      </Typography>
    </Button>
  ),
  hasClose = false,
  showIcon = true,
}) => {
  const baseStyles = {
    width: "320px",
    borderRadius: "8px",
    padding: "6px 16px",
    height:
      hasTitle && hasDescription 
        ? "72px" 
        : hasTitle && !hasDescription
        ? "50px" 
        : "48px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const closeButton = (
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => console.log("Closed")}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  );

  const actionContent =
    hasClose && hasAction ? (
      <Box display="flex" gap={1}>
        {actionElement}
        {closeButton}
      </Box>
    ) : hasClose ? (
      closeButton
    ) : hasAction ? (
      actionElement
    ) : null;

  return (
    <Alert
      severity={severity}
      variant={variant}
      icon={showIcon ? undefined : false}
      action={actionContent}
      sx={baseStyles}
    >
      <Box display="flex" flexDirection="column" >
        {hasTitle && <AlertTitle sx={{ margin: 0 }}>{title}</AlertTitle>}
        {hasDescription && (
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Proxima Nova, sans-serif",
              fontSize: "13px",
              color: "#1A2731",
              marginTop: hasTitle ? "4px" : "0",
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Alert>
  );
};

export default CustomAlert;