import { Theme } from "@mui/material";
import { ReactNode } from "react";

export function parseHighlightedText(text: string, theme: Theme): ReactNode[] {
  const regex = /\{([^}]+)\}/g;
  const parts: ReactNode[] = [];

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <span key={match.index} style={{ color: theme.palette.primary.main }}>
        {match[1]}
      </span>,
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
