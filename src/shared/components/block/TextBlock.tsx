"use client";

function TextBlock({ content }: { content: string }) {
  return (
    <span className="font-pretendard font-medium text-lg text-foreground">
      {content}
    </span>
  );
}

export { TextBlock };
