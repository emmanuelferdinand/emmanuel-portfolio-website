import { useEffect, useState } from "react";

const READING_LINE_ROOT_MARGIN = "-30% 0px -69% 0px";

export function useScrollSpy(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>();

  useEffect(() => {
    const idsUnderLine = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) idsUnderLine.add(entry.target.id);
          else idsUnderLine.delete(entry.target.id);
        }
        setActiveId(ids.findLast((id) => idsUnderLine.has(id)));
      },
      { rootMargin: READING_LINE_ROOT_MARGIN },
    );

    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
