import React, { useEffect, useRef } from "react";

interface LightningWidgetProps {
  name: string;
  accent: string;
  to: string;
  image: string;
  amounts: string;
  labels: string;
}

const LightningWidget: React.FC<LightningWidgetProps> = ({
  name,
  accent,
  to,
  image,
  amounts,
  labels,
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.twentyuno.net/js/app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.innerHTML = `
        <lightning-widget
          name="${name}"
          accent="${accent}"
          to="${to}"
          image="${image}"
          amounts="${amounts}"
          labels="${labels}"
        ></lightning-widget>
      `;
    }
  }, [name, accent, to, image, amounts, labels]);

  return <div ref={widgetRef}></div>;
};

export default LightningWidget;
