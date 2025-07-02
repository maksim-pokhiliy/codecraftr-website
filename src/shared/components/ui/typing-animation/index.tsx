"use client";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { ANIMATION_CONFIG } from "@app/shared/constants/animations";
import { lineHeights } from "@app/shared/theme/common";

interface Command {
  text: string;
  type: "command" | "success" | "output";
}

interface TypingAnimationProps {
  commands: Command[];
  typeSpeed?: number;
  pauseAfterCommand?: number;
  startOnView?: boolean;
}

export function TypingAnimation({
  commands,
  typeSpeed = ANIMATION_CONFIG.TYPE_SPEED,
  pauseAfterCommand = ANIMATION_CONFIG.PAUSE_AFTER_COMMAND,
  startOnView = true,
}: TypingAnimationProps) {
  const theme = useTheme();
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: ANIMATION_CONFIG.INTERSECTION_THRESHOLD },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted || currentCommand >= commands.length) return;

    const command = commands[currentCommand];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (command && index <= command.text.length) {
        setTypedText(command.text.substring(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentCommand((prev) => prev + 1);
          setTypedText("");
        }, pauseAfterCommand);
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, [currentCommand, commands, typeSpeed, pauseAfterCommand, hasStarted]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, ANIMATION_CONFIG.CURSOR_BLINK_INTERVAL);

    return () => clearInterval(cursorInterval);
  }, []);

  const getTextColor = (type: Command["type"]) => {
    switch (type) {
      case "success":
        return theme.palette.success.light;
      case "command":
        return theme.palette.primary.light;
      default:
        return theme.palette.grey[300];
    }
  };

  return (
    <Box ref={containerRef}>
      {commands.slice(0, currentCommand).map((command, index) => (
        <Typography
          key={index}
          sx={{
            color: getTextColor(command.type),
            fontFamily: theme.typography.fontFamilyMonospace,
            fontSize: "inherit",
            mb: 1,
            lineHeight: lineHeights.relaxed,
          }}
        >
          {command.text}
        </Typography>
      ))}

      {currentCommand < commands.length && commands[currentCommand] && hasStarted && (
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography
            sx={{
              color: getTextColor(commands[currentCommand].type),
              fontFamily: theme.typography.fontFamilyMonospace,
              fontSize: "inherit",
              lineHeight: lineHeights.relaxed,
            }}
          >
            {typedText}
          </Typography>

          {showCursor && (
            <Box
              sx={({ spacing }) => ({
                backgroundColor: theme.palette.primary.main,
                width: spacing(1),
                height: spacing(2),
                ml: spacing(0.5),
                flexShrink: 0,
              })}
            />
          )}
        </Stack>
      )}
    </Box>
  );
}
