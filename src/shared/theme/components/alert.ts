"use client";

import { alpha, Components, Theme } from "@mui/material";

export const alert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2.5),
      border: "none",
      boxShadow: "none",
    }),

    filled: ({ theme, ownerState }) => {
      const getFilledStyles = () => {
        switch (ownerState.severity) {
          case "success":
            return {
              background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
              color: theme.palette.common.white,
            };
          case "info":
            return {
              background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
              color: theme.palette.common.white,
            };
          case "warning":
            return {
              background: `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)`,
              color: theme.palette.common.white,
            };
          case "error":
            return {
              background: `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.error.dark} 100%)`,
              color: theme.palette.common.white,
            };
          default:
            return {
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: theme.palette.common.white,
            };
        }
      };

      return {
        ...getFilledStyles(),
        "& .MuiAlert-icon": {
          color: "inherit",
        },
      };
    },

    outlined: ({ theme, ownerState }) => {
      const getOutlinedStyles = () => {
        switch (ownerState.severity) {
          case "success":
            return {
              backgroundColor: alpha(theme.palette.success.main, 0.05),
              borderColor: theme.palette.success.main,
              color: theme.palette.success.dark,
            };
          case "info":
            return {
              backgroundColor: alpha(theme.palette.secondary.main, 0.05),
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.dark,
            };
          case "warning":
            return {
              backgroundColor: alpha(theme.palette.warning.main, 0.05),
              borderColor: theme.palette.warning.main,
              color: theme.palette.warning.dark,
            };
          case "error":
            return {
              backgroundColor: alpha(theme.palette.error.main, 0.05),
              borderColor: theme.palette.error.main,
              color: theme.palette.error.dark,
            };
          default:
            return {
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.dark,
            };
        }
      };

      return {
        ...getOutlinedStyles(),
        border: `2px dashed`,
        "& .MuiAlert-icon": {
          color: "inherit",
        },
      };
    },

    standard: ({ theme, ownerState }) => {
      const getStandardStyles = () => {
        switch (ownerState.severity) {
          case "success":
            return {
              backgroundColor: alpha(theme.palette.success.main, 0.1),
              color: theme.palette.success.dark,
            };
          case "info":
            return {
              backgroundColor: alpha(theme.palette.secondary.main, 0.1),
              color: theme.palette.secondary.dark,
            };
          case "warning":
            return {
              backgroundColor: alpha(theme.palette.warning.main, 0.1),
              color: theme.palette.warning.dark,
            };
          case "error":
            return {
              backgroundColor: alpha(theme.palette.error.main, 0.1),
              color: theme.palette.error.dark,
            };
          default:
            return {
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.dark,
            };
        }
      };

      return {
        ...getStandardStyles(),
        "& .MuiAlert-icon": {
          color: "inherit",
        },
      };
    },
  },
};
