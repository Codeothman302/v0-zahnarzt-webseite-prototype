"use client";

import Script from "next/script";
import { useCallback } from "react";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
          render?: {
            mode: string;
          };
        }) => void;
        open: () => void;
        close: () => void;
        hide: () => void;
        show: () => void;
      };
    };
  }
}

export function VoiceflowChat() {
  const handleScriptLoad = useCallback(() => {
    if (window.voiceflow) {
      window.voiceflow.chat.load({
        verify: { projectID: "694854a4a20f534a73cb8ae9" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        render: {
          mode: "embedded",
        },
      });

      // ❌ WICHTIG: KEIN hide() MEHR
    }
  }, []);

  return (
    <Script
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      strategy="afterInteractive"
      onLoad={handleScriptLoad}
    />
  );
}

export function openVoiceflowChat() {
  if (typeof window !== "undefined" && window.voiceflow?.chat) {
    window.voiceflow.chat.open();
  }
}