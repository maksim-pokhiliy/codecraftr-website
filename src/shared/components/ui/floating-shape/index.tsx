"use client";

import { Box, useTheme } from "@mui/material";

import { createAnimations } from "@app/shared/theme/animations";
import { gradients } from "@app/shared/theme/gradients";
import { ColorVariant, ShapeVariant, Size } from "@app/shared/types";
import { getResponsiveSize } from "@app/shared/utils/theme-utils";

interface FloatingShapeProps {
  variant?: ShapeVariant;
  size?: Size;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  color?: ColorVariant;
  reverse?: boolean;
  rotation?: number;
}

export function FloatingShape({
  variant = ShapeVariant.CIRCLE,
  size = Size.MEDIUM,
  position,
  color = ColorVariant.PRIMARY,
  reverse = false,
  rotation = 0,
}: FloatingShapeProps) {
  const theme = useTheme();
  const animations = createAnimations(theme);

  const getShapeStyle = () => {
    const sizeValue = getResponsiveSize(size, theme);

    const baseStyle = {
      width: sizeValue,
      height: sizeValue,
    };

    switch (variant) {
      case ShapeVariant.SQUARE:
        return { ...baseStyle, borderRadius: theme.spacing(2) };
      case ShapeVariant.TRIANGLE:
        return {
          ...baseStyle,
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        };
      case ShapeVariant.BLOB:
        return {
          ...baseStyle,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        };
      default:
        return { ...baseStyle, borderRadius: "50%" };
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        ...position,
        ...getShapeStyle(),
        background: gradients.background[color](theme, 45 + rotation),
        transform: `rotate(${rotation}deg)`,
        ...(reverse ? animations.floatReverse : animations.float),
        zIndex: 0,
      }}
    />
  );
}
